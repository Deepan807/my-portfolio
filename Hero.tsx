"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 md:pt-44">
      {/* faint grid backdrop grounded in the subject: a coordinate/graph field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F3F1EC 1px, transparent 1px), linear-gradient(to bottom, #F3F1EC 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-content items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10"
      >
        <div>
          <motion.div
            variants={rise}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-mute"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            {profile.badge}
          </motion.div>

          <motion.h1
            variants={rise}
            className="font-display text-[2.6rem] font-800 leading-[1.05] tracking-tight text-paper sm:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p variants={rise} className="mt-6 max-w-md text-lg text-mute">
            {profile.subhead}
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors hover:border-ember hover:text-ember"
            >
              Let&rsquo;s connect
            </a>
          </motion.div>
        </div>

        <motion.div variants={rise} className="relative mx-auto w-full max-w-sm">
          <div className="angled-panel relative aspect-[4/5] w-full overflow-hidden bg-surface">
            <Image
              src={profile.photo}
              alt={`${profile.name}, ${profile.role}`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 380px, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-full border border-line bg-ink px-4 py-2 shadow-lg shadow-black/30">
            <Search size={14} className="text-ember" />
            <span className="text-xs text-paper">Searching for growth</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
