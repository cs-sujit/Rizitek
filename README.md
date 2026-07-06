# Rizitek India — Website (Next.js + TypeScript + Tailwind CSS)

A multi-page marketing site built from the Rizitek India content guide, using
the navy / safety-yellow / ink-black industrial design language from the
provided brand reference.

## Pages

| Route | Description |
|---|---|
| `/` | Home — full-width video hero slider, product highlights, stats, services, client logos |
| `/about` | Company overview, vision & mission, differentiators, board, milestones |
| `/products` | Grid of all 10 safety products |
| `/products/[slug]` | Individual product detail page (10 static pages, generated from `lib/products.ts`) |
| `/services` | AMC, installation & retrofit, HEMM maintenance, rehab, DGMS compliance, training |
| `/dealership` | Partner program + dealership enquiry form |
| `/contact` | Head office info + general enquiry form (prefills "Contact Regarding" via `?subject=` query, e.g. from a product page's "Enquire" button) |

## Stack

- Next.js 14 (App Router, static export)
- TypeScript (strict mode)
- Tailwind CSS with custom design tokens (`ink`, `navy`, `signal`, `cream`, `stone`)

## Interactive features

- **Full-width video hero slider** — `components/Hero.tsx` is a single
  full-bleed banner (not split into columns): a looping background video
  (`/hero.mp4`, `/hero-poster.jpg` fallback) fills 100% of the viewport
  width at ~92vh, with the headline, sub-headline, and CTAs overlaid on top
  under a gradient for readability. It cycles through 4 slides (eyebrow +
  headline + detail text all change together) with dot navigation at the
  bottom. **Drop your video files into `public/`** using those exact names
  (see `public/README-video.txt`) — no code changes needed.
- **Load-in animation** — each slide's overlay text (badge, headline,
  detail, word rotator, CTAs) fades/slides up in a short stagger whenever
  it changes.
- **Scroll-reveal animation, site-wide** — `components/Reveal.tsx` is a
  reusable IntersectionObserver wrapper used across every page (Home,
  About, Products, individual product pages, Services, Dealership,
  Contact). Section headings, grid cards, feature lists, and form panels
  all fade up into view as the user scrolls past them, with staggered
  delays across grid items so multiple cards animate in sequence rather
  than all at once. Wrap any new section content in `<Reveal>` (optionally
  with a `delay` prop, in ms) to get the same effect elsewhere.
- **Floating quick-contact stack** — `components/FloatingActions.tsx` is a
  fixed bottom-right stack (Enquire, Call, WhatsApp, Back-to-top) that fades
  in once the user scrolls past the hero. Update the phone number in that
  file to change the call/WhatsApp links.
- **Custom cursor** — `components/CustomCursor.tsx` replaces the native
  cursor on desktop (fine-pointer, non-touch devices only) with a small dot
  plus a trailing ring that expands and labels itself ("View", "Call",
  "Chat", etc.) over links, buttons, and any element with a `data-cursor`
  attribute. Respects `prefers-reduced-motion` and is fully inert on touch
  devices.

## Structure

- `lib/products.ts` — single source of truth for all 10 products; edit this
  file to update product copy, and both `/products` and every
  `/products/[slug]` page update automatically
- `lib/nav.ts` — site navigation + the "Contact Regarding" dropdown options
- `components/` — Header, Footer, Hero (video slider), MarqueeBar,
  PageBanner, ProductCard, ContactForm, DealershipForm, CustomCursor,
  FloatingActions, Reveal
- `app/` — one folder per route, following the table above

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build a static export

```bash
npm run build
```

`next.config.mjs` sets `output: 'export'`, so this produces a fully static
`out/` folder (already built and included in this zip) — plain HTML/CSS/JS,
deployable to any static host (Netlify, Vercel, GitHub Pages, S3, etc.) with
no Node server required.

## Forms — important

`ContactForm.tsx` and `DealershipForm.tsx` are static-site forms: they
validate and show a success state client-side, but **do not send data
anywhere yet** (there's no backend on a static export). Before launch, wire
the `handleSubmit` function in each to a form backend — e.g.
[Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or a
custom API endpoint — by posting the `FormData` there instead of only calling
`setSubmitted(true)`.

## Content notes

- The Home page's "Customer Reviews" section is a clearly-labelled
  placeholder — the source content guide had no testimonials yet ("Need to
  fill"). Swap in real testimonials when available.
- Product photography from the original Word doc (stock/reference images)
  was not carried over — add real product photos to `components/ProductCard.tsx`
  and `app/products/[slug]/page.tsx` when available.
- The Services page adds two short taglines not present in the source
  document (for "DGMS Compliance" and "Training & Technical Support")
  purely to match the visual pattern of the other service sections — the
  bullet content itself is unchanged from the source.
- The floating stack and custom cursor use a placeholder phone number
  (+91 95705 95087, from the content doc's Head Office listing) for the
  Call/WhatsApp links — update in `components/FloatingActions.tsx` if a
  different number should be used for quick-contact.
