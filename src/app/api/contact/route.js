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

async function sendMail({ subject, text, html, replyTo }) {
  const transporter = nodemailer.createTransport({
    host: SMTP.host,
    port: SMTP.port,
    secure: SMTP.secure,
    auth: {
      user: SMTP.user,
      pass: SMTP.pass,
    },
  });

  await transporter.sendMail({
    from: `"${SITE.brandFull} Website" <${SMTP.user}>`,
    to: TO_EMAIL,
    replyTo,
    subject,
    text,
    html,
  });
}

function handleHomeLead(body) {
  const full_name = String(body.full_name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const address = String(body.address || '').trim();
  const current_provider = String(body.current_provider || '').trim();
  const provider_name = String(body.provider_name || '').trim();
  const usage = String(body.usage || '').trim();
  const packages = Array.isArray(body.packages)
    ? body.packages.map((item) => String(item || '').trim()).filter(Boolean)
    : [];
  const fiber_option = String(body.fiber_option || '').trim();
  const wireless_option = String(body.wireless_option || '').trim();
  const landline = String(body.landline || '').trim();
  const tv_option = String(body.tv_option || '').trim();
  const consent = Boolean(body.consent);

  if (!full_name || !email || !phone || !address || !current_provider || !usage || packages.length === 0 || !consent) {
    return { error: 'Please fill in all required fields.', status: 400 };
  }

  if (current_provider === 'Other' && !provider_name) {
    return { error: 'Please enter your provider name.', status: 400 };
  }

  if (packages.includes('Fiber') && !fiber_option) {
    return { error: 'Please select a fiber option.', status: 400 };
  }

  if (packages.includes('Wireless') && !wireless_option) {
    return { error: 'Please select a wireless option.', status: 400 };
  }

  if (packages.includes('Landline') && !landline) {
    return { error: 'Please select a landline option.', status: 400 };
  }

  if (packages.includes('TV') && !tv_option) {
    return { error: 'Please select a TV option.', status: 400 };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address.', status: 400 };
  }

  const subject = `New homepage quote from ${SITE.brandFull}: ${packages.join(', ')} — ${full_name}`;
  const text = [
    `New homepage Get Started form submission from ${SITE.domain}`,
    '',
    `Name: ${full_name}`,
    `Address: ${address}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Current provider: ${current_provider}`,
    provider_name ? `Provider name: ${provider_name}` : null,
    `Usage devices: ${usage}`,
    `Packages: ${packages.join(', ')}`,
    fiber_option ? `Fiber option: ${fiber_option}` : null,
    wireless_option ? `Wireless option: ${wireless_option}` : null,
    landline ? `Landline: ${landline}` : null,
    tv_option ? `TV option: ${tv_option}` : null,
    'Consent: yes',
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
    <h2>New homepage Get Started submission</h2>
    <p><strong>Site:</strong> ${escapeHtml(SITE.domain)}</p>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(full_name)}</td></tr>
      <tr><td><strong>Address</strong></td><td>${escapeHtml(address)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Current provider</strong></td><td>${escapeHtml(current_provider)}</td></tr>
      ${provider_name ? `<tr><td><strong>Provider name</strong></td><td>${escapeHtml(provider_name)}</td></tr>` : ''}
      <tr><td><strong>Usage devices</strong></td><td>${escapeHtml(usage)}</td></tr>
      <tr><td><strong>Packages</strong></td><td>${escapeHtml(packages.join(', '))}</td></tr>
      ${fiber_option ? `<tr><td><strong>Fiber option</strong></td><td>${escapeHtml(fiber_option)}</td></tr>` : ''}
      ${wireless_option ? `<tr><td><strong>Wireless option</strong></td><td>${escapeHtml(wireless_option)}</td></tr>` : ''}
      ${landline ? `<tr><td><strong>Landline</strong></td><td>${escapeHtml(landline)}</td></tr>` : ''}
      ${tv_option ? `<tr><td><strong>TV option</strong></td><td>${escapeHtml(tv_option)}</td></tr>` : ''}
      <tr><td><strong>Consent</strong></td><td>Yes</td></tr>
    </table>
  `;

  return { subject, text, html, replyTo: email };
}

function handleContactLead(body) {
  const full_name = String(body.full_name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const zip_code = String(body.zip_code || '').trim();
  const interested_in = String(body.interested_in || '').trim();
  const message = String(body.message || '').trim();
  const consent = Boolean(body.consent);

  if (!full_name || !email || !phone || !zip_code || !interested_in || !message || !consent) {
    return { error: 'Please fill in all required fields.', status: 400 };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address.', status: 400 };
  }

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

  return { subject, text, html, replyTo: email };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const formType = String(body.form_type || 'contact').trim();
    const payload = formType === 'home' ? handleHomeLead(body) : handleContactLead(body);

    if (payload.error) {
      return Response.json({ ok: false, error: payload.error }, { status: payload.status || 400 });
    }

    await sendMail(payload);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return Response.json(
      { ok: false, error: 'Unable to send your message right now. Please call us instead.' },
      { status: 500 },
    );
  }
}
