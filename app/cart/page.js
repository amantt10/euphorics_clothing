'use client';

import Link from 'next/link';
import { useCart } from '../../lib/cart-context';
import { buildShopifyCheckoutUrl } from '../../lib/shopify';

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal, clearCart } = useCart();

  function handleCheckout() {
    const url = buildShopifyCheckoutUrl(items);
    if (url) {
      window.location.href = url;
    }
  }

  const hasMissingVariant = items.some((item) => !item.shopifyVariantId);

  return (
    <main className="section wrap" style={{ maxWidth: 760 }}>
      <span className="eyebrow">Your bag</span>
      <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
        Cart
      </h1>

      {items.length === 0 ? (
        <div className="empty-state" style={{ textAlign: 'left', padding: '40px 0 0' }}>
          Your bag is empty.{' '}
          <Link href="/shop" style={{ color: 'var(--violet-glow)' }}>
            Go find something.
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-line chrome-frame" key={item.id}>
                <div className="cart-line-name">
                  {item.name}
                  {item.color && <span className="cart-line-size">{item.color}</span>}
                  {item.size && <span className="cart-line-size">Size {item.size}</span>}
                </div>

                <div className="cart-qty">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">
                    +
                  </button>
                </div>

                <div className="cart-line-price">${item.price * item.qty}</div>

                <button
                  className="cart-remove"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary chrome-frame">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: 12, fontFamily: 'var(--font-mono)', margin: '4px 0 18px' }}>
              Shipping and taxes are calculated at checkout on Shopify.
            </p>

            {hasMissingVariant && (
              <p style={{ color: 'var(--violet-glow)', fontSize: 12, fontFamily: 'var(--font-mono)', marginBottom: 14 }}>
                One or more items aren&rsquo;t linked to a Shopify variant yet —
                checkout is disabled until that&rsquo;s set up in lib/products.js.
              </p>
            )}

            <button
              className="btn btn-solid"
              style={{ width: '100%' }}
              onClick={handleCheckout}
              disabled={hasMissingVariant}
            >
              Checkout on Shopify
            </button>
            <button className="btn btn-outline" style={{ width: '100%', marginTop: 10 }} onClick={clearCart}>
              Clear bag
            </button>
          </div>
        </>
      )}
    </main>
  );
}
