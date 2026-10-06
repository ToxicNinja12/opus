# Opus Acoustics

Marketing site for Opus Acoustics, built with [Next.js](https://nextjs.org) (App Router), React 19 and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script          | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Create a production build            |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint (`eslint-config-next`)    |

## Project structure

```
src/
  app/                          Routes (one folder per URL segment)
    layout.jsx                  Root layout: <html>, fonts, global CSS, footer
    page.jsx                    /
    (inner)/                    Every page except home; adds the header bar
      layout.jsx
      about-us/page.jsx         /about-us
      contact/page.jsx          /contact
      products/page.jsx         /products
      products/[category]/      /products/<category>
      products/architectural-acoustic/
        acoumax/page.jsx        AcouMAX overview
        acoumax/[variant]/      One template for every AcouMAX variant
        acoufab/page.jsx        AcouFAB overview
        acoufab/[system]/       One template for every AcouFAB system
  components/
    layout/                     Header, navbar, footer, logo
    ui/                         Generic pieces: Card, Accordion, Link, lists
    home/ about/ contact/ products/   Sections, grouped by the page they belong to
  content/                      Page copy and images as plain data
    acoumax/                    One file per AcouMAX variant + index.js
    acoufab/                    One file per AcouFAB system + index.js
  assets/                       Images (imported, so Next.js can optimise them)
```

Components are Server Components unless they need state or browser APIs; the
ones that do (`Navbar`, `Accordion`, `ContactForm`, `Carousel`) start with
`"use client"`.

## Adding a product page

Product detail pages are data-driven: the route renders a shared template from
a content file, so a new page needs no new markup.

1. Copy an existing file in `src/content/acoumax/` (or `acoufab/`) and edit the
   copy, images and `slug`.
2. Import it in that folder's `index.js` and add it to the exported array. Its
   position in the array is its position in the card grid.

That gives the product a card on the overview page and a statically generated
detail page at `/products/architectural-acoustic/acoumax/<slug>`.

To change the layout of all detail pages at once, edit the template:
`src/app/(inner)/products/architectural-acoustic/acoumax/[variant]/page.jsx`
(or `acoufab/[system]/page.jsx`).
