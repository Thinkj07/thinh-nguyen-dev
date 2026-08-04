import { useState } from "react";

const SKILLS = [
  { name: "ReactJS", meta: "85% · 5 projects" },
  { name: "Node.js", meta: "85% · 6 projects" },
  { name: "Python", meta: "90% · 8 projects" },
  { name: "Java", meta: "80% · 3 projects" },
  { name: "JavaScript (ES6+)", meta: "80% · 10 projects" },
  { name: "HTML5 & CSS3", meta: "90% · daily" },
  { name: "MySQL & MongoDB", meta: "80% · 4 databases" },
  { name: "Pygame & AI", meta: "Minimax & MCTS" },
  { name: "Git & GitHub", meta: "daily workflow" },
  { name: "Algorithms & DS", meta: "HCMUT CS Core" },
];

export function SkillsMarquee() {
  const [hovered, setHovered] = useState(null);
  const items = [...SKILLS, ...SKILLS];

  return (
    <section id="stack" className="border-t border-border py-24">
      <div className="px-5 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-terminal">03 / stack</p>
      </div>

      <div className="mt-10 overflow-hidden border-y border-border py-8">
        <div
          className="flex w-max gap-12 whitespace-nowrap"
          style={{
            animation: "marquee 32s linear infinite",
            animationPlayState: hovered ? "paused" : "running",
          }}
          onMouseLeave={() => setHovered(null)}
        >
          {items.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              onMouseEnter={() => setHovered(s.name)}
              data-cursor
              className="flex flex-col items-start transition-opacity duration-300"
              style={{ opacity: hovered && hovered !== s.name ? 0.15 : 1 }}
            >
              <span className="display-xl text-4xl sm:text-6xl">{s.name}</span>
              <span
                className="mt-2 font-mono text-[11px] uppercase tracking-widest text-terminal transition-opacity duration-300"
                style={{ opacity: hovered === s.name ? 1 : 0 }}
              >
                {s.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
