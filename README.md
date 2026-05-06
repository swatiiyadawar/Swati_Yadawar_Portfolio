# Swati Yadawar Portfolio

Premium, fully responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion.

## Features

- Premium startup-style UI with glassmorphism cards
- Sticky responsive navbar with mobile menu
- Dark/light theme toggle
- Animated hero, timeline, cards, and section reveals
- GitHub stats embeds and contribution graph
- Contact form with mailto fallback
- SEO metadata and favicon support
- Smooth scrolling and loading skeleton

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- ShadCN UI primitives
- Framer Motion
- next-themes

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Project Structure

- `app/` route shell, metadata, loading state, and resume download route
- `components/` reusable UI, sections, theme provider, and layout shell
- `lib/portfolio-data.ts` content and navigation data
- `public/` favicon and static assets

## Resume Download

The resume button downloads a generated PDF from `/resume`. Replace it with a real resume PDF if desired.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Keep the default framework preset as Next.js.
4. Deploy with the default build command `npm run build`.

## Customization

- Update personal links and email in `lib/portfolio-data.ts`
- Replace the placeholder resume route with a final PDF when ready
- Swap or extend project links and stats embeds as needed
