'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useCart } from '../lib/cart-context';

const TICKER_ITEMS = [
  'FREE SHIPPING OVER $150',
  'DROP 004 — OUT NOW',
  'NO RESTOCKS. NO REPRINTS.',
  'JOIN THE MAILING LIST FOR EARLY ACCESS',
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="nav-root chrome-hairline">
      <div className="marquee chrome-hairline">
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="marquee-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="nav-row">
          <nav className="nav-links">
            <Link href="/shop">Shop</Link>
            <Link href="/shop">Drops</Link>
            <Link href="/about">About</Link>
          </nav>

          <Link href="/" aria-label="Euphorics — home" className="logo-mark glitch-wrap">
            <img src="/logo.png" alt="Euphorics" className="logo-img" width={612} height={407} />
          </Link>

          <div className="nav-icons">
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
            <Link href="/contact" aria-label="Contact">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6" />
              </svg>
            </Link>
            <Link href="/cart" aria-label="Cart" className="cart-icon-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 8h12l-1 13H7L6 8z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
              {count > 0 && <span className="cart-badge">{count}</span>}
            </Link>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="nav-links"
            style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 20 }}
          >
            <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        )}

        <div className="search-row">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
