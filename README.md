# Louison Industrial

Personal site for **Syris Louison** — SAIT student in autobody repair, welding, and metal
fabrication. Built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router, JavaScript)
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals, hero parallax, and the mobile menu
- **lucide-react** for icons
- Hero/gallery photography hotlinked from Unsplash (free license — credits below)

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you launch this for real

Contact details (email + both phone numbers) are already filled in. Two things are still
placeholders:

1. **Contact form** (`components/Contact.jsx`) — the form is front-end only right now (it just
   shows a confirmation message). Wire it up to something like
   [Formspree](https://formspree.io), [Resend](https://resend.com), or a Next.js API route
   before it can actually send messages.
2. **Gallery photos** (`components/Gallery.jsx`) — four tiles are clearly-labeled placeholders
   ("Before / after — panel repair", "Weld detail", etc.) waiting for real project photos.
   Drop images into `public/` and swap the `PlaceholderTile` entries for real `<Image>` tiles.

## Deploying

This project uses `output: "export"` in `next.config.mjs`, so `next build` produces a fully
static site in `out/` — no Node server required. That works on any static host.

### Cloudflare Pages

- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: repo root (leave blank unless your repo nests the project in a subfolder)

If you see "Output directory 'out' not found", it almost always means one of the two settings
above is wrong, or `next.config.mjs` is missing `output: "export"` — check that first.

### Vercel

Vercel auto-detects Next.js and works with or without static export — just import the repo at
[vercel.com/new](https://vercel.com/new) and deploy with the default settings.

## Pushing this to your GitHub repo

I wasn't able to push directly to `github.com/471delta/Louison-industrial` from here — I don't
have write access to your GitHub account. Run this from the folder containing this project:

```bash
git init
git add .
git commit -m "Initial Louison Industrial site"
git branch -M main
git remote add origin https://github.com/471delta/Louison-industrial.git
git push -u origin main
```

If the repo on GitHub already has commits (e.g. an auto-generated README), pull first to avoid
a rejected push:

```bash
git pull origin main --allow-unrelated-histories
# resolve any conflicts, then:
git push -u origin main
```

## Photo credits

Hero and gallery photography via Unsplash (free to use under the
[Unsplash License](https://unsplash.com/license), no attribution legally required — credited
here anyway):

- Hero — "Welder is working, creating sparks in the dark" by [Ben Spray](https://unsplash.com/@benspray)
- Gallery — "Welders working on a piece of metal with sparks" by [Markus Spiske](https://unsplash.com/@markusspiske)
- Gallery — "A garage filled with lots of tools and equipment" by [Liz Crosswell](https://unsplash.com/@crosswellorganizing)
