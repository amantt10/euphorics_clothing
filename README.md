# Euphorics

An underground streetwear brand site — black background, chrome-outlined
panels, purple accents. Built with Next.js (App Router) and exported as a
fully static site so it can be hosted for free on Netlify.

## What's inside

- `/` — home page with hero, featured drops, brand blurb
- `/shop` — full product archive with a live search + category filter, each
  card links to its own product page and has a quick **Add to cart** button
- `/shop/[slug]` — one static page per product: description, material,
  size picker, quantity, an **Add to cart** button, and a **Shop on
  Shopify →** button (currently points at your Shopify store's homepage —
  update this once specific products are linked, see below)
- `/cart` — bag page: adjust quantities per size, remove items, see
  subtotal, then **Checkout on Shopify** — redirects to your Shopify
  store's cart/checkout
- `/about` — manifesto
- `/contact` — contact form wired up for **Netlify Forms** (works with zero
  backend once deployed — submissions show up in your Netlify dashboard)
- Nav is a single row: nav links on the left, the original **euphorics**
  logo artwork centered (click it → home), cart/contact icons on the right,
  full-width search bar underneath
- The logo is your original uploaded artwork (`public/logo.png`), used
  as-is — untouched text and styling — just scaled up to sit prominently in
  the nav

No UI kit or paid font is used — everything is hand-written CSS
(`app/globals.css`) plus Google Fonts loaded via `next/font` (Anton, Space
Grotesk, JetBrains Mono).

## Cart + Shopify checkout

The cart lives entirely in the browser (React context + `localStorage`, see
`lib/cart-context.js`) — no backend needed. When a shopper hits **Checkout
on Shopify**, the site builds a Shopify **cart permalink** URL and redirects
them there to actually pay and receive their order.

**Before checkout will work for real, you need to:**
1. Open `lib/shopify.js` and set `SHOPIFY_DOMAIN` to your store's
   `*.myshopify.com` domain.
2. Open `lib/products.js` and replace each product's placeholder
   `shopifyVariantId` with the real variant ID from your Shopify admin
   (open the product → the specific variant → copy its ID from the URL or
   via **⋯ → Copy variant ID**).

Until real variant IDs are in place, the checkout button on `/cart` stays
disabled and tells the shopper why — nothing breaks, it just won't send
them anywhere until it's configured.

Each product page also has a **Shop on Shopify →** button. For now it
just points at `https://{SHOPIFY_DOMAIN}` (your store's homepage) for
every product — once `SHOPIFY_DOMAIN` is set, it'll open your real store.
If you'd rather link each button straight to that specific product's page
on Shopify later, that's a one-line change in
`app/shop/[slug]/ProductDetailClient.js` (swap the `href` for a per-product
URL once you have one).

## Run it locally

You'll need Node.js 18.18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

**If `next dev` errors with `Page "/shop/[slug]/page" is missing exported
function "generateStaticParams()"`** even though it's there in
`app/shop/[slug]/page.js` — that's a known bug in a handful of Next
14.2.x patch releases' dev server (not a problem with this code). Fix:

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

`package.json` pins `next` to `^14.2.5`, so a fresh `npm install` will
pull the latest 14.2.x patch, which resolves it.

## Build

```bash
npm run build
```

Because `next.config.mjs` sets `output: 'export'`, this produces a plain
static site in the `out/` folder — no Node server required to host it.

## Deploy to Netlify (free)

**Option A — drag and drop (fastest):**
1. Run `npm run build` locally.
2. Go to https://app.netlify.com/drop
3. Drag the `out` folder onto the page. Done — you'll get a live URL
   immediately.

**Option B — connect your Git repo (recommended, auto-deploys on push):**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Netlify will read `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Click **Deploy**. Every future push redeploys automatically.

Netlify's free tier covers this comfortably — it's a static export with no
server-side rendering, API routes, or database, so there's nothing that
needs a paid plan.

### Forms

The newsletter box (footer) and the `/contact` page use plain HTML forms
with `data-netlify="true"`. Netlify detects these automatically **at
deploy time** by scanning the built HTML — no extra setup needed. Form
submissions appear under **Site settings → Forms** in your Netlify
dashboard. (They won't do anything if you just run `next dev` locally or
open the files outside of Netlify — that's expected.)

## Customizing

- **Colors**: all defined as CSS variables at the top of
  `app/globals.css` (`--bg-void`, `--chrome-*`, `--violet-*`).
- **Products**: edit `lib/products.js` — add/remove items, change prices,
  tags (`NEW`, `LIMITED`, `SOLD OUT`, or leave blank).
- **Logo/wordmark**: `public/logo.png`, referenced in
  `components/Navbar.js` — swap the file to update the logo, or adjust the
  `.logo-img` height in `app/globals.css` to resize it.
- **Copy**: hero text and manifesto copy live directly in `app/page.js`
  and `app/about/page.js`.
