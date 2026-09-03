# Deepan — SEO Portfolio

A Next.js + TypeScript + Tailwind portfolio for Deepan, a Digital Marketing & SEO specialist.
Dark, angular, orange-accented layout inspired by the "Portivio" template, with every
social-proof element (client logos, awards, testimonials) swapped for an honest equivalent —
tools used, a real process, and stated principles instead of fabricated claims.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What to edit before publishing

1. **`lib/data.ts`** — this is the only file you should need to touch for content.
   - `profile.links` — add your real LinkedIn / email / GitHub. Anything left blank is
     automatically hidden from the footer.
   - `projects[].findings`, `.recommendations`, `.status` — replace the
     "Add your finding/recommendation here" placeholders with your real audit results, or leave
     the "Project data available upon request" line if you'd rather not publish specifics.
   - `about` stat ("3 practical SEO audits completed") — update the number to match reality.
   - `insights` — replace the "Coming soon" placeholders once you've written real posts.

2. **`public/images/deepan.png`** — your headshot. Swap the file (keep the same name, or update
   the path in `profile.photo`) for a different photo.

3. **`app/layout.tsx`** and **`app/sitemap.ts`** / **`app/robots.ts`** — replace
   `https://deepan-seo.example.com` with your real domain once you have one.

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```

## Structure

```
app/            routes, layout, metadata, robots.txt, sitemap.xml
components/     one component per section (Hero, About, Skills, Projects, ...)
lib/data.ts     all editable site copy
public/images/  your photo and any other static assets
```
