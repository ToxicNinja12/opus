# Opus Acoustics

Marketing site for Opus Acoustics, built with [Next.js](https://nextjs.org) (App Router), React 19 and Tailwind CSS v4.

Product cards and product pages are managed in the CMS (the separate
`opus-cms` project) and read from it at runtime.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

Copy `.env.example` to `.env.local` and set `CMS_URL` (and the
`REVALIDATE_SECRET` it shares with the CMS). Start the CMS too
(`npm run dev` in `../opus-cms`, port 3001) — without it the pages under
`/products/<category>` cannot load; the rest of the site works on its own.

| Script          | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Create a production build            |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint (`eslint-config-next`)    |

## Deployment

The site is deployed on Netlify from `main`. `netlify.toml` holds the build
settings, the Next.js plugin that makes Netlify serve it as a Next.js site, and
the address of the production CMS (`CMS_URL`).

`CMS_URL` is read when the site is built and baked into it, so changing the CMS
address means editing `netlify.toml` and redeploying.

Set `REVALIDATE_SECRET` in the Netlify dashboard (Site configuration →
Environment variables), with the same value the CMS uses. It is a secret, so it
does not belong in the repository. Without it the site still works; CMS changes
just take up to a minute to appear instead of showing at once.

## Project structure

```
src/
  app/                          Routes (one folder per URL segment)
    layout.jsx                  Root layout: <html>, fonts, global CSS, footer
    page.jsx                    /
    not-found.jsx               404 page
    api/revalidate/             Called by the CMS when content changes
    (inner)/                    Every page except home; adds the header bar
      layout.jsx
      about-us/page.jsx         /about-us
      contact/page.jsx          /contact
      products/page.jsx         /products
      products/[category]/      Product listing — cards from the CMS
      products/architectural-acoustic/
        [product]/              Product page — from the CMS
        [product]/[subpage]/    Product sub-page — from the CMS
  components/
    layout/                     Header, navbar, footer, logo
    ui/                         Generic pieces: Card, Accordion, Link, lists
    sections/                   One component per CMS section type
    home/ about/ contact/ products/   Sections, grouped by the page they belong to
  content/                      Static data (product categories)
  lib/cms.js                    Reads products from the CMS
  assets/                       Images (imported, so Next.js can optimise them)
```

Components are Server Components unless they need state or browser APIs; the
ones that do (`Navbar`, `Accordion`, `ContactForm`, `Carousel`) start with
`"use client"`.

## Product pages and the CMS

- `/products/<category>` lists the product cards. A card links to its page
  only once that page is switched on in the CMS.
- `/products/architectural-acoustic/<product>` and `…/<product>/<sub-page>`
  render the banner and sections built in the CMS
  (`src/components/products/CmsPage.jsx` and `src/components/sections/`). The
  site header and footer come from the layouts, so they are always in place.
- A product or sub-page that does not exist, or whose page is not switched on,
  answers with the 404 page.

These pages are generated on first visit and cached. The CMS calls
`/api/revalidate` after every change so they refresh immediately; the cache
also expires on its own after a minute. Nothing needs redeploying when content
changes, and the site builds without the CMS running.

Product images are stored in the CMS and served through `next/image`
(`next.config.mjs` allows the CMS host).

To support a new kind of section, add a component to
`src/components/sections/Sections.jsx` — see the CMS README.
