import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer chrome-hairline">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Join the list</h4>
            <p style={{ color: 'var(--text-mid)', marginBottom: 16 }}>
              First access to drops. No spam, no algorithm.
            </p>
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              className="form-field"
              style={{ flexDirection: 'row', gap: 10 }}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--chrome-700)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--text-hi)',
                  padding: '12px 14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  flex: 1,
                }}
              />
              <button type="submit" className="btn btn-solid">Join</button>
            </form>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <Link href="/shop">All drops</Link>
            <Link href="/shop">Hoodies</Link>
            <Link href="/shop">Tees</Link>
            <Link href="/shop">Outerwear</Link>
          </div>

          <div className="footer-col">
            <h4>Brand</h4>
            <Link href="/about">Manifesto</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/">Home</Link>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="#" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          </div>
        </div>

        <div className="footer-bottom footer-divider" style={{ paddingBottom: 24 }}>
          <span>© {new Date().getFullYear()} EUPHORICS. ALL RIGHTS RESERVED.</span>
          <span>UNDERGROUND SINCE DAY ONE</span>
        </div>
      </div>
    </footer>
  );
}
