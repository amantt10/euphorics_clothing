'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '../../components/ProductGrid';
import { products } from '../../lib/products';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'hoodie', label: 'Hoodies' },
  { id: 'tee', label: 'Tees' },
  { id: 'pants', label: 'Pants' },
  { id: 'jacket', label: 'Outerwear' },
  { id: 'cap', label: 'Caps' },
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <main className="section wrap" style={{ paddingTop: 56 }}>
      <span className="eyebrow">Full archive</span>
      <h1 className="section-title">Shop</h1>

      <div
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: 32,
          marginBottom: 8,
        }}
      >
        <div className="search-bar chrome-frame" style={{ maxWidth: 360 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search this drop…"
            aria-label="Search products"
          />
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="btn"
              style={{
                padding: '8px 16px',
                fontSize: 11,
                background: category === c.id ? 'var(--violet-500)' : 'transparent',
                borderColor: category === c.id ? 'var(--violet-500)' : 'var(--chrome-700)',
                color: category === c.id ? 'var(--text-hi)' : 'var(--chrome-300)',
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <p style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 8 }}>
        {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
      </p>

      <ProductGrid products={filtered} />
    </main>
  );
}
