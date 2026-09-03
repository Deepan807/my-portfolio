import { tools } from "@/lib/data";

export default function ToolsStrip() {
  return (
    <section className="border-t border-line bg-surface/40 py-14">
      <div className="mx-auto max-w-content px-6">
        <p className="mb-8 text-sm text-mute">Tools I work with</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool) => (
            <div key={tool.name} className="border-l border-line pl-4">
              <p className="font-display text-base font-700 text-paper">{tool.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-mute">{tool.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
