"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-lg font-800 tracking-tight text-paper">
          {profile.name}
          <span className="text-ember">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="focus-ring rounded text-sm text-mute transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full border border-line px-5 py-2 text-sm text-paper transition-colors hover:border-ember hover:text-ember md:inline-block"
        >
          Let&rsquo;s talk
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-ring rounded text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full border border-ember px-5 py-2 text-sm text-ember"
              >
                Let&rsquo;s talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
