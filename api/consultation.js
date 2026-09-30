// Vercel serverless function: POST /api/consultation
// Sends consultation-request form submissions to the firm's inbox via Resend.
// Requires RESEND_API_KEY to be set as a Vercel environment variable.

const TO_ADDRESS = 'info@stephanasfortunas.com';

// Resend requires the "from" address to be on a domain verified in the
// account. Only pp.capiguaran.com is verified there today, so we send from
// that domain and set reply-to to the enquirer's own email so replying just
// works. Once stephanasfortunas.com (or a subdomain) is verified in Resend,
// swap this for something like "StephanasFortunas <consultations@stephanasfortunas.com>".
const FROM_ADDRESS = 'StephanasFortunas Website <consultations@pp.capiguaran.com>';

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, organisation, email, phone, enquiry, portfolio_value, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const rows = [
    ['Name', name],
    ['Organisation', organisation],
    ['Email', email],
    ['Phone', phone],
    ['Type of Enquiry', enquiry],
    ['Estimated Portfolio Value', portfolio_value],
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#74603e;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#0a0a0a;">${escapeHtml(value)}</td></tr>`
    )
    .join('');

  const html = `
    <div style="font-family:Georgia,'Cormorant Garamond',serif;max-width:560px;margin:0 auto;color:#0a0a0a;">
      <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#c59f5e;margin:0 0 8px;">StephanasFortunas</p>
      <h2 style="font-weight:400;margin:0 0 20px;">New Consultation Request</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">${rows}</table>
      ${
        message
          ? `<div style="margin-top:20px;"><p style="color:#74603e;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 6px;">Message</p><p style="white-space:pre-wrap;margin:0;">${escapeHtml(
              message
            )}</p></div>`
          : ''
      }
    </div>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        reply_to: email,
        subject: `New Consultation Request — ${name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend error', resendRes.status, errBody);
      return res.status(502).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Consultation email failed', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
