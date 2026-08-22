import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "./lib/ThemeContext";
import { SmoothScroll } from "./portfolio/SmoothScroll";
import { CustomCursor } from "./portfolio/CustomCursor";
import { ThemeToggle } from "./portfolio/ThemeToggle";
import { Hero } from "./portfolio/Hero";
import { TerminalBio } from "./portfolio/TerminalBio";
import { Projects } from "./portfolio/Projects";
import { SkillsMarquee } from "./portfolio/SkillsMarquee";
import { Timeline } from "./portfolio/Timeline";
import { Contact } from "./portfolio/Contact";
import { AllProjects } from "./portfolio/AllProjects";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-terminal selection:text-background">
      <SmoothScroll />
      <CustomCursor />

      {/* Header Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-5 py-3.5 backdrop-blur sm:px-10 transition-colors duration-300">
        <a
          href="/#hero"
          className="min-w-0 truncate font-display font-bold uppercase tracking-tight text-foreground hover:text-terminal transition-colors"
        >
          THINH NGUYEN<span className="text-terminal">_</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden sm:flex shrink-0 gap-5 font-mono text-[11px] uppercase tracking-[0.2em]">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-terminal transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
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

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
