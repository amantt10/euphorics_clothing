export const metadata = {
  title: 'Contact — Euphorics',
  description: 'Get in touch with Euphorics — press, wholesale, or general questions.',
};

export default function ContactPage() {
  return (
    <main className="section wrap" style={{ maxWidth: 640 }}>
      <span className="eyebrow">Get in touch</span>
      <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
        Contact
      </h1>
      <p style={{ color: 'var(--text-mid)', margin: '16px 0 40px', lineHeight: 1.6 }}>
        Press, wholesale, collabs, or just say hi. We read everything,
        we just don&rsquo;t always reply fast.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="chrome-frame"
        style={{ padding: 32 }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: 'none' }}>
          <label>
            Don&rsquo;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />
        </div>

        <button type="submit" className="btn btn-solid">Send message</button>
      </form>
    </main>
  );
}
