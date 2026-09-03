import { ArrowRight } from "lucide-react";
import { nav, profile } from "@/lib/data";

export function CTA() {
  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm text-ember">Contact</p>
            <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-5xl">
              Let&rsquo;s build something
              <br /> that gets found.
            </h2>
            <p className="mt-5 max-w-sm text-mute">
              Interested in working with a motivated Digital Marketing professional focused on
              SEO and organic growth?
            </p>
          </div>

          <form className="w-full max-w-sm space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="focus-ring w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <input
              type="email"
              placeholder="Email"
              className="focus-ring w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <input
              type="text"
              placeholder="Subject"
              className="focus-ring w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="focus-ring w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <button
              type="submit"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Send message
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const hasSocial = profile.links.linkedin || profile.links.email || profile.links.github;

  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-800 text-paper">{profile.name}</p>
          <p className="mt-1 text-sm text-mute">{profile.role}</p>
        </div>

        <ul className="flex flex-wrap gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-mute hover:text-paper">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {hasSocial && (
          <ul className="flex flex-wrap gap-6">
            {profile.links.linkedin && (
              <li>
                <a href={profile.links.linkedin} className="text-sm text-mute hover:text-paper">
                  LinkedIn
                </a>
              </li>
            )}
            {profile.links.email && (
              <li>
                <a href={`mailto:${profile.links.email}`} className="text-sm text-mute hover:text-paper">
                  Email
                </a>
              </li>
            )}
            {profile.links.github && (
              <li>
                <a href={profile.links.github} className="text-sm text-mute hover:text-paper">
                  GitHub
                </a>
              </li>
            )}
          </ul>
        )}
      </div>

      <div className="mx-auto mt-10 max-w-content px-6">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with curiosity. Optimized with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
