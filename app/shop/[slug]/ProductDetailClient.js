'use client';

import { useState } from 'react';
import Link from 'next/link';
import { iconFor } from '../../../components/GarmentIcons';
import { useCart } from '../../../lib/cart-context';
import { SHOPIFY_DOMAIN } from '../../../lib/shopify';

export default function ProductDetailClient({ product }) {
  const Icon = iconFor(product.icon);
  const sizes = product.sizes && product.sizes.length ? product.sizes : ['One Size'];
  const colors = product.colors || [];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedImage, setSelectedImage] = useState(colors[0] && colors[0].images[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const isSoldOut = product.tag === 'SOLD OUT';

  function handleSelectColor(color) {
    setSelectedColor(color);
    setSelectedImage(color.images[0]);
  }

  function handleAddToCart() {
    addItem(product, qty, selectedSize, selectedColor && selectedColor.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <main className="section wrap product-detail">
      <Link href="/shop" className="back-link">
        ← Back to shop
      </Link>

      <div className="product-detail-grid">
        <div>
          <div className={`product-detail-media chrome-frame${selectedImage ? ' has-photo' : ''}`}>
            {product.tag && (
              <span className={`product-tag${isSoldOut ? ' sold' : ''}`}>{product.tag}</span>
            )}
            {selectedImage ? (
              <img src={selectedImage} alt={`${product.name} — ${selectedColor?.name}`} className="product-detail-photo" />
            ) : (
              <Icon />
            )}
          </div>

          {selectedColor && selectedColor.images.length > 1 && (
            <div className="product-detail-thumbs">
              {selectedColor.images.map((img) => (
                <button
                  key={img}
                  type="button"
                  className={`product-detail-thumb${img === selectedImage ? ' selected' : ''}`}
                  onClick={() => setSelectedImage(img)}
                  aria-label="View this photo"
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-detail-info">
          <span className="eyebrow">{product.category}</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
            {product.name}
          </h1>
          <div className="product-detail-price">${product.price}</div>

          <p className="product-detail-desc">{product.description || product.blurb}</p>

          {product.material && (
            <p className="product-detail-material">
              <span>Material</span> {product.material}
            </p>
          )}

          {colors.length > 0 && (
            <div className="color-picker">
              <div className="size-picker-head">
                <span className="size-label">Color</span>
                <span className="size-selected">{selectedColor?.name}</span>
              </div>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    className={`color-swatch${selectedColor?.name === color.name ? ' selected' : ''}`}
                    style={{ background: color.swatch }}
                    onClick={() => handleSelectColor(color)}
                    aria-label={color.name}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="size-picker">
            <div className="size-picker-head">
              <span className="size-label">Size</span>
              <span className="size-selected">{selectedSize}</span>
            </div>
            <div className="size-options">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`size-btn${selectedSize === s ? ' selected' : ''}`}
                  onClick={() => setSelectedSize(s)}
                  disabled={isSoldOut}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="qty-picker">
            <span className="size-label">Qty</span>
            <div className="cart-qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                −
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                +
              </button>
            </div>
          </div>

          <div className="product-detail-actions">
            <button
              type="button"
              className="btn btn-solid"
              onClick={handleAddToCart}
              disabled={isSoldOut}
            >
              {isSoldOut ? 'Sold out' : added ? 'Added ✓' : 'Add to cart'}
            </button>

            <a
              className="btn btn-outline shopify-btn"
              href={`https://${SHOPIFY_DOMAIN}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop on Shopify
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <p className="product-detail-footnote">
            Free shipping over $150. Payment and order fulfillment happen on
            Shopify — checkout redirects you there.
          </p>
        </div>
      </div>
    </main>
  );
}
