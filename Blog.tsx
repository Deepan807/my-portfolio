import { insights } from "@/lib/data";

export default function Blog() {
  return (
    <section id="insights" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 max-w-lg">
          <p className="mb-3 text-sm text-ember">Insights</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-4xl">
            Notes from the audits.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {insights.map((post, i) => (
            <div key={i} className="rounded-2xl border border-dashed border-line p-6">
              <p className="text-sm font-medium text-mute">{post.title}</p>
              <p className="mt-2 text-sm text-mute">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
