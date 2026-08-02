import Link from 'next/link';
import ProductGrid from '../components/ProductGrid';
import { products } from '../lib/products';

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <main>
      <section className="hero wrap">
        <div className="hero-grid-lines" aria-hidden="true" />
        <span className="eyebrow">Drop 004 — Limited Run</span>
        <h1 className="hero-title glitch-wrap chrome-text">
          NO RULES.
          <br />
          NO SEASONS.
        </h1>
        <p className="hero-sub">
          Euphorics is built off-schedule, off-calendar, off-grid. Small
          batches, raw graphics, chrome hardware. Once it&rsquo;s gone, it
          doesn&rsquo;t come back.
        </p>
        <div className="hero-actions">
          <Link href="/shop" className="btn btn-solid">Shop the drop</Link>
          <Link href="/about" className="btn btn-outline">Read the manifesto</Link>
        </div>
      </section>

      <section className="section wrap">
        <span className="eyebrow">Fresh off the rack</span>
        <h2 className="section-title">Featured pieces</h2>
        <ProductGrid products={featured} />
        <div style={{ marginTop: 40 }}>
          <Link href="/shop" className="btn btn-outline">View full archive</Link>
        </div>
      </section>

      <section className="section wrap">
        <div className="manifesto">
          <div>
            <span className="eyebrow">The label</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Made in the static.
            </h2>
          </div>
          <div>
            <p>
              Euphorics started as bootleg tees photocopied at 2am and sold
              out of a backpack. The label is bigger now, but the process
              hasn&rsquo;t changed.
            </p>
            <p>
              Every drop is capped, numbered, and gone within days. No
              restocks, no reprints, no permission asked. If you know, you
              know.
            </p>
            <Link href="/about" className="btn btn-outline">Our story</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
