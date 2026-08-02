'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar({ placeholder = 'SEARCH THE ARCHIVE — HOODIES, TEES, JACKETS…' }) {
  const [value, setValue] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop');
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar chrome-frame" role="search">
      <button type="submit" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
      />
    </form>
  );
}
