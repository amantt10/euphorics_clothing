'use client';

import { useState } from 'react';
import { useCart } from '../lib/cart-context';

export default function AddToCartButton({ product, disabled, style }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes && product.sizes.length ? product.sizes[0] : null;
    addItem(product, 1, defaultSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <button
      type="button"
      className="add-to-cart-btn"
      onClick={handleClick}
      disabled={disabled}
      style={style}
    >
      {disabled ? 'Sold out' : added ? 'Added ✓' : 'Add to cart'}
    </button>
  );
}
