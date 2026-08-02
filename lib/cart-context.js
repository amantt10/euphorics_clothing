'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'euphorics-cart';

function lineId(slug, size, color) {
  return `${slug}::${size || 'default'}::${color || 'default'}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load any saved cart once the component mounts in the browser.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (err) {
      // ignore malformed/blocked storage
    }
    setHydrated(true);
  }, []);

  // Persist on every change, once the initial load has happened.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      // ignore write failures (e.g. private browsing)
    }
  }, [items, hydrated]);

  const addItem = useCallback((product, qty = 1, size = null, color = null) => {
    const id = lineId(product.slug, size, color);
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      }
      return [
        ...prev,
        {
          id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          size: size || null,
          color: color || null,
          shopifyVariantId: product.shopifyVariantId || null,
          qty,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQty, clearCart, count, subtotal }),
    [items, addItem, removeItem, updateQty, clearCart, count, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside <CartProvider>');
  }
  return ctx;
}
