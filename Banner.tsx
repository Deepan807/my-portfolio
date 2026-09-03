export default function Banner() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="noise relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface via-ink to-surface px-8 py-20 text-center">
          <h2 className="font-display text-4xl font-800 tracking-tight text-paper sm:text-6xl">
            Search. <span className="text-ember">Optimize.</span> Grow.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-mute">
            Building practical SEO knowledge through hands-on audits, keyword research,
            technical analysis, and content optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
