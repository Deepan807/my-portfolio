import { process } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section id="process" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 max-w-lg">
          <p className="mb-3 text-sm text-ember">My process</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-4xl">
            Inside an SEO audit.
          </h2>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-5">
          {process.map((item, i) => (
            <li key={item.step} className="bg-ink p-6">
              <span className="font-display text-sm text-ember">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-lg font-700 text-paper">{item.step}</h3>
              <p className="mt-2 text-sm text-mute">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
