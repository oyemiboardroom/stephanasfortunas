# StephanasFortunas

React + Vite + Tailwind CSS rebuild of the StephanasFortunas marketing site — a single-page home with dedicated
routes for each solution and insight article.

## Stack

- **Vite** + **React 18** (JavaScript, not TypeScript)
- **Tailwind CSS** for styling, with the brand palette (obsidian / ivory / gold) defined as CSS variables in
  `src/index.css` and mapped into `tailwind.config.js`
- **react-router-dom** for `/solutions/:slug` and `/insights/:slug` routes

## Project layout

```
src/
  components/site/   Reusable site chrome and homepage sections
  context/           DrawerContext (off-canvas nav state)
  data/               solutions.js and insights.js — edit copy here
  pages/              Home, SolutionPage, InsightPage, NotFound
public/images/        Photography used across the site
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

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, "Add New Project" → import the repo. Vercel auto-detects Vite; no build settings need changing
   (Build Command: `npm run build`, Output Directory: `dist`).
3. `vercel.json` is included so client-side routes (`/solutions/...`, `/insights/...`) resolve correctly on
   refresh/direct link instead of 404ing.

Or from the CLI:

```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```
