import nodemailer from 'nodemailer';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

const SMTP = {
  host: 'mail.careernhustle.com',
  port: 465,
  secure: true,
  user: 'shah@careernhustle.com',
  pass: 'Sherry@123$$',
};

const TO_EMAIL = SITE.email; // info@eaglefiberinternet.store

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const full_name = String(body.full_name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const zip_code = String(body.zip_code || '').trim();
    const interested_in = String(body.interested_in || '').trim();
    const message = String(body.message || '').trim();
    const consent = Boolean(body.consent);

    if (!full_name || !email || !phone || !zip_code || !interested_in || !message || !consent) {
      return Response.json({ ok: false, error: 'Please fill in all required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP.host,
      port: SMTP.port,
      secure: SMTP.secure,
      auth: {
        user: SMTP.user,
        pass: SMTP.pass,
      },
    });

    const subject = `New lead from ${SITE.brandFull}: ${interested_in} — ${full_name}`;
    const text = [
      `New contact form submission from ${SITE.domain}`,
      '',
      `Full name: ${full_name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `ZIP code: ${zip_code}`,
      `Interested in: ${interested_in}`,
      `Consent: yes`,
      '',
      'Message:',
      message,
    ].join('\n');

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Site:</strong> ${escapeHtml(SITE.domain)}</p>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Full name</strong></td><td>${escapeHtml(full_name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>ZIP code</strong></td><td>${escapeHtml(zip_code)}</td></tr>
        <tr><td><strong>Interested in</strong></td><td>${escapeHtml(interested_in)}</td></tr>
        <tr><td><strong>Consent</strong></td><td>Yes</td></tr>
      </table>
      <p><strong>Message</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: `"${SITE.brandFull} Website" <${SMTP.user}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return Response.json(
      { ok: false, error: 'Unable to send your message right now. Please call us instead.' },
      { status: 500 },
    );
  }
}
