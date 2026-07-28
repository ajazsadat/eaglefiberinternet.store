'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const PROVIDERS = ['Spectrum', 'Xfinity', 'AT&T', 'Other'];
const USAGE_OPTIONS = ['1 to 4', '5 to 8', '8 to 12', '12+'];
const PACKAGE_OPTIONS = ['Fiber', 'Cable', 'Wireless', 'Landline', '5G', 'TV'];
const FIBER_OPTIONS = ['GIG', '500', '300', '100'];
const WIRELESS_OPTIONS = ['1', '2', '3', '4', '5', '6+'];
const TV_OPTIONS = ['Basic', 'Premium', 'Advance'];

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-[#0a1420] px-4 py-3 text-white placeholder:text-[#6b7785] focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/40';

const emptyForm = {
  name: '',
  address: '',
  email: '',
  phone: '',
  current_provider: '',
  provider_name: '',
  usage: '',
  packages: [],
  fiber_option: '',
  wireless_option: '',
  landline: '',
  tv_option: '',
  consent: false,
};

function toggleValue(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export default function HomeGetStartedForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState(emptyForm);

  const showProviderName = form.current_provider === 'Other';
  const showFiber = form.packages.includes('Fiber');
  const showWireless = form.packages.includes('Wireless');
  const showLandline = form.packages.includes('Landline');
  const showTv = form.packages.includes('TV');

  const canSubmit =
    Boolean(form.name && form.address && form.email && form.phone) &&
    Boolean(form.current_provider && form.usage && form.packages.length > 0) &&
    (!showProviderName || Boolean(form.provider_name)) &&
    (!showFiber || Boolean(form.fiber_option)) &&
    (!showWireless || Boolean(form.wireless_option)) &&
    (!showLandline || Boolean(form.landline)) &&
    (!showTv || Boolean(form.tv_option)) &&
    form.consent &&
    status !== 'sending';

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'home',
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          current_provider: form.current_provider,
          provider_name: form.provider_name,
          usage: form.usage,
          packages: form.packages,
          fiber_option: form.fiber_option,
          wireless_option: form.wireless_option,
          landline: form.landline,
          tv_option: form.tv_option,
          consent: form.consent,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus('idle');
        setError(data.error || 'Unable to send your request. Please try again or call us.');
        return;
      }

      setStatus('sent');
      setForm(emptyForm);
    } catch {
      setStatus('idle');
      setError('Unable to send your request. Please try again or call us.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-amber-400/25 bg-[#0a1420] p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-white mb-2">Thanks — we got your request</h3>
        <p className="text-[#a8b3c2] text-sm leading-relaxed mb-6">
          A specialist will follow up shortly. Prefer to talk now? Call {SITE.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="inline-flex px-5 py-2.5 rounded-full font-semibold text-amber-300 border border-amber-400/40 hover:bg-amber-400/10 transition"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="home_name" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
          Name <span className="text-amber-400">*</span>
        </label>
        <input
          id="home_name"
          type="text"
          required
          placeholder="Name"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="home_address" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
          Address <span className="text-amber-400">*</span>
        </label>
        <input
          id="home_address"
          type="text"
          required
          placeholder="Address"
          value={form.address}
          onChange={(e) => update('address', e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="home_email" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            Email <span className="text-amber-400">*</span>
          </label>
          <input
            id="home_email"
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="home_phone" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            Phone <span className="text-amber-400">*</span>
          </label>
          <input
            id="home_phone"
            type="tel"
            required
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="home_provider" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            Current Provider <span className="text-amber-400">*</span>
          </label>
          <select
            id="home_provider"
            required
            value={form.current_provider}
            onChange={(e) => update('current_provider', e.target.value)}
            className={fieldClass}
          >
            <option value="">Select Provider</option>
            {PROVIDERS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="home_usage" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            Usage <span className="text-amber-400">*</span>
          </label>
          <select
            id="home_usage"
            required
            value={form.usage}
            onChange={(e) => update('usage', e.target.value)}
            className={fieldClass}
          >
            <option value="">Usage Devices</option>
            {USAGE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showProviderName && (
        <div>
          <label htmlFor="home_provider_name" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            Provider Name <span className="text-amber-400">*</span>
          </label>
          <input
            id="home_provider_name"
            type="text"
            required
            placeholder="Provider Name"
            value={form.provider_name}
            onChange={(e) => update('provider_name', e.target.value)}
            className={fieldClass}
          />
        </div>
      )}

      <fieldset>
        <legend className="block text-sm font-semibold text-[#c5ced9] mb-2">
          Packages <span className="text-amber-400">*</span>
        </legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {PACKAGE_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a1420] px-3 py-2.5 text-sm text-[#c5ced9] cursor-pointer hover:border-amber-400/30"
            >
              <input
                type="checkbox"
                checked={form.packages.includes(opt)}
                onChange={() => update('packages', toggleValue(form.packages, opt))}
                className="h-4 w-4 accent-amber-400"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      {showFiber && (
        <div>
          <label htmlFor="home_fiber" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            Fiber <span className="text-amber-400">*</span>
          </label>
          <select
            id="home_fiber"
            required
            value={form.fiber_option}
            onChange={(e) => update('fiber_option', e.target.value)}
            className={fieldClass}
          >
            <option value="">Fiber Options</option>
            {FIBER_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      {showWireless && (
        <div>
          <label htmlFor="home_wireless" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            Wireless <span className="text-amber-400">*</span>
          </label>
          <select
            id="home_wireless"
            required
            value={form.wireless_option}
            onChange={(e) => update('wireless_option', e.target.value)}
            className={fieldClass}
          >
            <option value="">Wireless Options</option>
            {WIRELESS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      {showLandline && (
        <fieldset>
          <legend className="block text-sm font-semibold text-[#c5ced9] mb-2">
            Landline <span className="text-amber-400">*</span>
          </legend>
          <div className="flex gap-4">
            {['Yes', 'No'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-[#c5ced9] cursor-pointer">
                <input
                  type="radio"
                  name="home_landline"
                  value={opt}
                  checked={form.landline === opt}
                  onChange={(e) => update('landline', e.target.value)}
                  className="h-4 w-4 accent-amber-400"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {showTv && (
        <div>
          <label htmlFor="home_tv" className="block text-sm font-semibold text-[#c5ced9] mb-1.5">
            TV Options <span className="text-amber-400">*</span>
          </label>
          <select
            id="home_tv"
            required
            value={form.tv_option}
            onChange={(e) => update('tv_option', e.target.value)}
            className={fieldClass}
          >
            <option value="">TV Options</option>
            {TV_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      <label className="flex gap-3 items-start text-sm text-[#a8b3c2] leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => update('consent', e.target.checked)}
          className="mt-1 h-4 w-4 accent-amber-400 shrink-0"
        />
        <span>
          I agree to the{' '}
          <Link href="/terms-conditions" className="text-amber-300 hover:underline">
            terms & conditions
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="text-amber-300 hover:underline">
            privacy policy
          </Link>{' '}
          provided by {SITE.brandFull}. By providing my phone number, I agree to receive text messages and calls from{' '}
          {SITE.brandFull}. Consent is not a condition of purchase.
        </span>
      </label>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  );
}
