import { Quote } from "lucide-react";
import { principles } from "@/lib/data";

export default function Principles() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 max-w-lg">
          <p className="mb-3 text-sm text-ember">How I work</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-4xl">
            A few things I hold to.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p} className="rounded-2xl border border-line bg-surface p-6">
              <Quote size={18} className="text-ember" />
              <p className="mt-4 text-lg text-paper">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
