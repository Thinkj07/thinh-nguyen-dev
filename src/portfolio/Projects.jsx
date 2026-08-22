import { motion } from "motion/react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

export function Projects() {
  // Always display the first 3 projects on the home page
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="border-t border-border px-5 py-24 sm:px-10">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-terminal">02 / work</p>
          <h2 className="display-xl mt-6 text-4xl sm:text-6xl">Selected builds</h2>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {String(featuredProjects.length).padStart(3, "0")} / {String(projectsData.length).padStart(3, "0")} projects
        </span>
      </div>

      {/* Bento Grid Layout (Original Home UI) */}
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {featuredProjects.map((p, i) => (
          <motion.a
            key={p.id || p.title}
            href={p.demo || p.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`bento-card group flex min-h-[16rem] flex-col justify-between p-6 ${p.span || "md:col-span-1"}`}
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                aria-hidden
                loading="lazy"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 dark:opacity-30 dark:grayscale dark:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50 dark:group-hover:opacity-60"
              />
            )}
            <div className="relative flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <span className="shrink-0 text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-150 group-hover:text-terminal">
                ↗
              </span>
            </div>
            <div className="relative mt-10">
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground"></p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack?.map((s) => (
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

      {/* "See More" Button to /projects */}
      <div className="mt-10 flex justify-center sm:justify-end">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 border border-border bg-card/80 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] backdrop-blur transition-all duration-300 hover:border-terminal hover:text-terminal cursor-pointer select-none"
        >
          <span>See all projects [{String(projectsData.length).padStart(2, "0")}]</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
