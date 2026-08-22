import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { CustomCursor } from "./CustomCursor";
import { SmoothScroll } from "./SmoothScroll";
import projectsData from "../data/projects.json";

export function AllProjects() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-terminal selection:text-background">
      <SmoothScroll />
      <CustomCursor />

      {/* Header Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-5 py-3.5 backdrop-blur sm:px-10 transition-colors duration-300">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-terminal transition-colors cursor-pointer"
        >
          <span>←</span>
          <span>Home</span>
        </Link>

        <Link
          to="/"
          className="min-w-0 truncate font-display font-bold uppercase tracking-tight text-foreground hover:text-terminal transition-colors"
        >
          THINH NGUYEN<span className="text-terminal">_</span>
        </Link>

        <ThemeToggle />
      </header>

      {/* Main Section */}
      <main className="px-5 pt-28 pb-20 sm:px-10 max-w-6xl mx-auto">
        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-8 gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-terminal">
              02 / all work
            </p>
            <h1 className="display-xl mt-4 text-4xl sm:text-6xl">All projects</h1>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {String(projectsData.length).padStart(3, "0")} builds
          </span>
        </div>

        {/* Minimal Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((p, i) => (
            <motion.a
              key={p.id || p.title}
              href={p.demo || p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bento-card group flex min-h-[15rem] flex-col justify-between p-6 border border-border bg-card transition-all hover:border-terminal"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  aria-hidden
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
                />
              )}

              <div className="relative flex items-start justify-between gap-4">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-terminal transition-colors">
                  {p.title}
                </h2>
                <span className="shrink-0 text-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terminal">
                  ↗
                </span>
              </div>

              <div className="relative mt-8">
                <p className="max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack?.map((s) => (
                      <span
                        key={s}
                        className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.github && p.demo && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-terminal underline underline-offset-4"
                    >
                      source ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-16 border-t border-border pt-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
          <Link to="/" className="hover:text-terminal transition-colors">
            ← Back to home
          </Link>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-terminal transition-colors"
          >
            ↑ Top
          </a>
        </div>
      </main>
    </div>
  );
}
