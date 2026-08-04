import React from "react";
import { SmoothScroll } from "./components/portfolio/SmoothScroll";
import { CustomCursor } from "./components/portfolio/CustomCursor";
import { Hero } from "./components/portfolio/Hero";
import { TerminalBio } from "./components/portfolio/TerminalBio";
import { Projects } from "./components/portfolio/Projects";
import { SkillsMarquee } from "./components/portfolio/SkillsMarquee";
import { Timeline } from "./components/portfolio/Timeline";
import { Contact } from "./components/portfolio/Contact";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-terminal selection:text-background">
      <SmoothScroll />
      <CustomCursor />

      {/* Header Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border bg-background/80 px-5 py-4 backdrop-blur sm:px-10">
        <a href="#hero" className="min-w-0 truncate font-display font-bold uppercase tracking-tight text-foreground hover:text-terminal transition-colors">
          THINH NGUYEN DUC<span className="text-terminal">.</span>
        </a>
        <nav className="flex shrink-0 gap-5 font-mono text-[11px] uppercase tracking-[0.2em]">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-terminal transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Sections */}
      <main>
        <Hero />
        <TerminalBio />
        <Projects />
        <SkillsMarquee />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}
