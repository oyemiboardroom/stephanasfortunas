import React, { useState } from 'react';
import Reveal from './Reveal.jsx';

const ENQUIRY_TYPES = [
  'Portfolio Advisory',
  'Real Estate Agency',
  'Rent-to-Own',
  'Property Financing',
  'Real Estate-Backed Guaranty',
  'Trade Distribution',
  'SME Equity Investment',
  'Partnership',
  'Investment Opportunity',
  'Other',
];

const PORTFOLIO_VALUES = [
  'Under ₦500m',
  '₦500m – ₦1bn',
  '₦1bn – ₦5bn',
  '₦5bn – ₦10bn',
  '₦10bn+',
  'Prefer not to disclose',
];

const inputCls =
  'w-full bg-transparent border-0 border-b border-black/15 pb-2 font-body text-[0.95rem] font-light text-obsidian outline-none focus:border-gold transition-colors';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.25em] uppercase text-obsidian/50 mb-2">{label}</span>
      {children}
    </label>
  );
}

export default function Consultation() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    enquiry: ENQUIRY_TYPES[0],
    portfolio: PORTFOLIO_VALUES[0],
    message: '',
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" data-tag="Consultation" className="py-16 md:py-28 bg-ivory text-obsidian">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <Reveal>
          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold">10 // Consultation</p>
          <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] font-light">
            Let&apos;s discuss your real estate strategy.
          </h2>
          <p className="mt-6 text-obsidian/60 text-base">
            Whether you own a substantial property portfolio, are exploring an investment opportunity, require
            structured financing or are seeking growth capital for a qualifying business, our team would be
            pleased to have a confidential conversation.
          </p>

          <div className="mt-12 grid gap-6 border-t border-black/15 pt-8">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-obsidian/40">Correspondence</p>
              <p className="mt-2 font-heading text-lg font-light">16 Ajasa St, Onikan, Lagos</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-obsidian/40">Engagement</p>
              <p className="mt-2 font-heading text-lg font-light">By private appointment</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="border border-black/15 p-7 md:p-11">
          {submitted ? (
            <div className="min-h-[22rem] flex flex-col items-center justify-center text-center gap-5">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center">
                <span className="font-heading text-2xl text-gold">✓</span>
              </div>
              <h3 className="font-heading text-3xl font-light">Your request is received.</h3>
              <p className="max-w-sm text-obsidian/60 text-sm">
                A member of our advisory team will be in touch privately within two business days to arrange
                your confidential consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Organisation">
                  <input
                    value={form.organisation}
                    onChange={(e) => set('organisation', e.target.value)}
                    className={inputCls}
                  />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Phone">
                  <input value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputCls} />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Type of Enquiry">
                  <select value={form.enquiry} onChange={(e) => set('enquiry', e.target.value)} className={inputCls}>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Estimated Portfolio Value">
                  <select value={form.portfolio} onChange={(e) => set('portfolio', e.target.value)} className={inputCls}>
                    {PORTFOLIO_VALUES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Message">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </Field>
              <button
                type="submit"
                className="w-full border border-obsidian py-4 font-body text-[11px] tracking-[0.3em] uppercase hover:bg-obsidian hover:text-ivory transition-colors"
              >
                Request a Confidential Consultation
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
