import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ITEMS = [
  {
    year: "2023 — Present",
    role: "B.Sc. Computer Science Student",
    org: "Ho Chi Minh City University of Technology (HCMUT)",
    details: [
      "3rd Year Senior Academic Standing.",
      "Core focus: Software Engineering, System Architecture, Database Management, and AI Algorithms.",
    ],
  },
  {
    year: "2025",
    role: "Full-Stack Project Lead",
    org: "ITWORKS Platform",
    details: [
      "Engineered end-to-end job portal with MERN stack, JWT authentication, and role-based access control.",
      "Implemented advanced job search, application tracking system, and Admin audit logging.",
    ],
  },
  {
    year: "2024",
    role: "AI & Game Systems Developer",
    org: "Connect 4 AI Project",
    details: [
      "Built tactical 2-3 player board game engine with Python and Pygame.",
      "Optimized Minimax and MCTS (Monte Carlo Tree Search) algorithms using Neural Networks.",
    ],
  },
];

export function Timeline() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="border-t border-border px-5 py-24 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-terminal">
        04 / experience & education
      </p>

      <div className="mt-12">
        {ITEMS.map((item, i) => (
          <div key={item.role} className="border-t border-border last:border-b">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-7 text-left transition-colors hover:text-terminal sm:grid-cols-[10rem_minmax(0,1fr)_auto] cursor-pointer"
            >
              <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:block">
                {item.year}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                  {item.role}
                </span>
                <span className="mt-1 block font-mono text-xs text-muted-foreground">
                  {item.org} <span className="sm:hidden">· {item.year}</span>
                </span>
              </span>
              <span className="shrink-0 font-mono text-lg">{open === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pb-8 sm:pl-[10rem]">
                    {item.details.map((d) => (
                      <li
                        key={d}
                        className="font-mono text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="text-terminal">→ </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
