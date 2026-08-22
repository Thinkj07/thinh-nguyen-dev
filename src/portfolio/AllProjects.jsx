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
      <main className="px-5 pt-28 pb-20 sm:px-10 max-w-7xl mx-auto">
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

        {/* Minimal Projects Grid - Image on Top, Text Below */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p, i) => (
            <motion.div
              key={p.id || p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bento-card group flex flex-col justify-between border border-border bg-card overflow-hidden transition-all duration-300 hover:border-terminal"
            >
              {/* Top Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background/50">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top dark:grayscale dark:group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted-foreground bg-muted/20">
                    [NO_PREVIEW]
                  </div>
                )}
                {/* Index badge */}
                <div className="absolute top-2.5 right-2.5 border border-border/80 bg-background/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                  <span>0{i + 1}</span>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-terminal transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack?.map((s) => (
                      <span
                        key={s}
                        className="border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Direct Link buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-foreground/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider invert-hover cursor-pointer"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-terminal text-terminal px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider hover:bg-terminal hover:text-background transition-colors cursor-pointer"
                      >
                        <span>Demo</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
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
