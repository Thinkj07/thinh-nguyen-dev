import { motion } from "motion/react";
import project1 from "/assets/img/project-1.png";
import project2 from "/assets/img/project-2.png";
import project3 from "/assets/img/project-3.png";

const PROJECTS = [
  {
    title: "ITWORKS Platform",
    blurb:
      "A full-stack job application platform with JWT authentication, role-based access control,...",
    stack: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
    image: project1,
    github: "https://github.com/Thinkj07/itwork",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Personal Portfolio",
    blurb: "Modern, responsive portfolio website with Canvas API animations.",
    stack: ["React", "HTML5", "CSS3", "JavaScript", "Vite"],
    image: project2,
    github: "https://github.com/Thinkj07/thinh-nguyen-dev",
    span: "md:col-span-1",
  },
  {
    title: "Connect 4 AI Engine",
    blurb: "Tactical board game with AI (MCTS & Minimax optimized by Neural Network).",
    stack: ["Python", "Pygame", "Scikit-learn"],
    image: project3,
    github: "https://github.com/Thinkj07/Connect_4",
    span: "md:col-span-1",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border px-5 py-24 sm:px-10">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-terminal">02 / work</p>
          <h2 className="display-xl mt-6 text-4xl sm:text-6xl">Selected builds</h2>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">003 projects</span>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`bento-card group flex min-h-[16rem] flex-col justify-between p-6 ${p.span}`}
          >
            <img
              src={p.image}
              alt={p.title}
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
            />
            <div className="relative flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <span className="shrink-0 text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-150 group-hover:text-terminal">
                ↗
              </span>
            </div>
            <div className="relative mt-10">
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
