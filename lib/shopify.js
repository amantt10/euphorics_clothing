// ---------------------------------------------------------------------------
// Shopify checkout config
// ---------------------------------------------------------------------------
// Euphorics takes payment on Shopify, not on this site. This file builds a
// Shopify "cart permalink" URL — visiting it adds the given variants straight
// into a Shopify cart and lands the shopper on your Shopify checkout.
//
// To wire this up to your real store:
//   1. Set SHOPIFY_DOMAIN below to your store's *.myshopify.com domain
//      (Shopify admin → Settings → Domains), e.g. "euphorics-official.myshopify.com".
//   2. For every product in lib/products.js, fill in its real
//      `shopifyVariantId` — find it in Shopify admin on the product's
//      variant page (Product → ⋯ → "Copy variant ID") or via the Storefront/
//      Admin API.
// No backend, server, or Shopify app is required — it's just a URL.
// ---------------------------------------------------------------------------

export const SHOPIFY_DOMAIN = 'your-store.myshopify.com';

export function buildShopifyCheckoutUrl(items) {
  const parts = items
    .filter((item) => item.shopifyVariantId)
    .map((item) => `${item.shopifyVariantId}:${item.qty}`);

  if (parts.length === 0) return null;

  return `https://${SHOPIFY_DOMAIN}/cart/${parts.join(',')}`;
}
