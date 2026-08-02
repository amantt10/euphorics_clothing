export const metadata = {
  title: 'About — Euphorics',
  description: 'The Euphorics manifesto — who we are and how the label operates.',
};

export default function AboutPage() {
  return (
    <main className="section wrap">
      <span className="eyebrow">Manifesto</span>
      <h1 className="section-title">This is not a season.</h1>

      <div className="manifesto" style={{ marginTop: 48 }}>
        <div>
          <p>
            Euphorics doesn&rsquo;t follow a calendar. There&rsquo;s no
            spring line, no fall line — there&rsquo;s just the next drop,
            whenever it&rsquo;s ready.
          </p>
        </div>
        <div>
          <p>
            We started small: a handful of screen-printed tees, run in the
            hundreds, sold through word of mouth and a group chat. That
            scrappiness is still the whole point. Every piece is designed to
            be worn hard, not preserved in plastic.
          </p>
          <p>
            Fabrics are heavyweight. Hardware is chrome. Graphics come from
            zines, flyers, static, and whatever else was lying around the
            studio at 3am. We keep runs small on purpose — when it sells
            out, it&rsquo;s gone. That scarcity isn&rsquo;t a marketing
            trick, it&rsquo;s just how much we can make by hand.
          </p>
          <p>
            No influencer seeding. No paid placements. If you&rsquo;re
            wearing Euphorics, it&rsquo;s because you found it, not because
            it found you.
          </p>
        </div>
      </div>
    </main>
  );
}
