import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-muted">
          © {new Date().getFullYear()} {personalInfo.shortName}. All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
