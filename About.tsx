import Image from "next/image";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="mx-auto grid max-w-content gap-14 px-6 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto w-full max-w-md">
          <div className="angled-panel-sm relative aspect-square w-3/4 overflow-hidden bg-surface">
            <Image
              src={profile.photo}
              alt=""
              fill
              className="object-cover object-top opacity-90"
              sizes="300px"
            />
          </div>
          <div className="absolute -right-2 bottom-0 w-2/3 rounded-2xl border border-line bg-surface p-6">
            <p className="font-display text-4xl font-800 text-ember">3</p>
            <p className="mt-1 text-sm text-mute">
              Practical SEO audits completed as project work
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm text-ember">About</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-4xl">
            More than just rankings. I focus on the bigger picture.
          </h2>
          <p className="mt-6 max-w-lg text-mute">{profile.bio}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["01", "Discover"],
              ["02", "Audit"],
              ["03", "Optimize"],
              ["04", "Measure"],
            ].map(([num, label]) => (
              <div key={num} className="border-l border-line pl-4">
                <dt className="text-xs text-mute">{num}</dt>
                <dd className="mt-1 text-sm text-paper">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
