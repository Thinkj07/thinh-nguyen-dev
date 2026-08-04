import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code2, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Hi<span className="font-mono text-muted">_</span>
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
          </div>

          {/* Main About Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg leading-relaxed text-secondary font-sans">
                {personalInfo.bio}
              </p>
              
              <div className="pt-2">
                <a
                  href={personalInfo.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>VIEW FULL RESUME (PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Highlight Stats Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="glass-card p-5 rounded-xl flex items-start gap-4">
                <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-primary">Computer Science</h3>
                  <p className="text-xs font-mono text-muted mt-0.5">HCM University of Technology</p>
                  <p className="text-xs text-secondary mt-1">3rd Year Senior Academic Standing</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-xl flex items-start gap-4">
                <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-primary">Full-Stack & Systems</h3>
                  <p className="text-xs font-mono text-muted mt-0.5">MERN Stack, Python & AI</p>
                  <p className="text-xs text-secondary mt-1">End-to-End System Development</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-xl flex items-start gap-4">
                <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-primary">Problem Solving</h3>
                  <p className="text-xs font-mono text-muted mt-0.5">Algorithms & AI Optimization</p>
                  <p className="text-xs text-secondary mt-1">MCTS, Minimax, REST APIs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
