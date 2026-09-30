# StephanasFortunas

React + Vite + Tailwind CSS rebuild of the StephanasFortunas marketing site — a single-page home with dedicated
routes for each solution and insight article.

## Stack

- **Vite** + **React 18** (JavaScript, not TypeScript)
- **Tailwind CSS** for styling, with the brand palette (obsidian / ivory / gold) defined as CSS variables in
  `src/index.css` and mapped into `tailwind.config.js`
- **react-router-dom** for `/solutions/:slug` and `/insights/:slug` routes
- **A Vercel serverless function** (`api/consultation.js`) that emails consultation-form
  submissions via **Resend**

## Project layout

```
src/
  components/site/   Reusable site chrome and homepage sections
  context/           DrawerContext (off-canvas nav state)
  data/               solutions.js and insights.js — edit copy here
  pages/              Home, SolutionPage, InsightPage, NotFound
public/images/        Photography used across the site
api/consultation.js   Serverless function: emails the consultation form to ea@loyacc.com
```

To change the copy on a solution or insight page, edit the matching object in `src/data/solutions.js` or
`src/data/insights.js` — the pages render from that data, so no JSX changes are needed for text edits.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Consultation form → email delivery

Submitting the "Request a Confidential Consultation" form POSTs to `api/consultation.js`, a
Vercel serverless function that sends the details to **[ea@loyacc.com](mailto:ea@loyacc.com)**
via [Resend](https://resend.com), with reply-to set to the enquirer's own email.

**Required setup:**

1. In Vercel, go to the project's **Settings → Environment Variables** and add:
   - `RESEND_API_KEY` — a Resend API key with sending access.
2. Redeploy after adding the variable (env vars only apply to new deployments).

**About the "from" address:** Resend requires the sending domain to be verified in your Resend
account. Only `pp.capiguaran.com` is currently verified, so `api/consultation.js` sends from
`consultations@pp.capiguaran.com` for now — the recipient (`ea@loyacc.com`) doesn't
need any verification, only the sender domain does. Once `stephanasfortunas.com` (or a subdomain
like `mail.stephanasfortunas.com`) is added and verified in Resend, update `FROM_ADDRESS` at the
top of `api/consultation.js` to send from that domain instead.

**Local testing:** `npm run dev` (plain Vite) does not run serverless functions, so the form will
fail to reach `/api/consultation` locally. To test the actual email flow locally, copy
`.env.example` to `.env`, fill in `RESEND_API_KEY`, and run `vercel dev` instead.

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, "Add New Project" → import the repo. Vercel auto-detects Vite; no build settings need changing
   (Build Command: `npm run build`, Output Directory: `dist`).
3. `vercel.json` is included so client-side routes (`/solutions/...`, `/insights/...`) resolve correctly on
   refresh/direct link instead of 404ing.
4. Add the `RESEND_API_KEY` environment variable (see above) before or after the first deploy, then redeploy.

Or from the CLI:

```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel env add RESEND_API_KEY
vercel --prod # promote to production
```
