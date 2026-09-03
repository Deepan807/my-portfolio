import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 max-w-lg">
          <p className="mb-3 text-sm text-ember">Skill set</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-4xl">
            Where strategy meets search.
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className="group grid gap-4 py-8 transition-colors sm:grid-cols-[80px_1fr_1fr] sm:items-start sm:gap-8"
            >
              <span className="font-display text-sm text-mute">{skill.number}</span>
              <div>
                <h3 className="font-display text-xl font-700 text-paper transition-colors group-hover:text-ember">
                  {skill.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-mute">{skill.description}</p>
              </div>
              <ul className="space-y-2 sm:justify-self-end">
                {skill.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-mute">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ember" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
