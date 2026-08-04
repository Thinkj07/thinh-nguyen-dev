import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
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
              Skills<span className="font-mono text-muted">_</span>
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-sm font-mono tracking-widest text-muted uppercase pb-3 border-b border-[var(--border-color)]">
                FRONTEND PROFICIENCY
              </h3>

              <div className="space-y-5">
                {skillsData.frontend.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-primary font-mono">{skill.name}</span>
                      <span className="text-xs font-mono text-muted">{skill.level}%</span>
                    </div>

                    <div className="h-2 w-full bg-[var(--bg-secondary)] rounded-full overflow-hidden p-0.5 border border-[var(--border-color)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-[var(--badge-bg)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & AI Skills */}
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-sm font-mono tracking-widest text-muted uppercase pb-3 border-b border-[var(--border-color)]">
                BACKEND & SYSTEMS PROFICIENCY
              </h3>

              <div className="space-y-5">
                {skillsData.backend.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-primary font-mono">{skill.name}</span>
                      <span className="text-xs font-mono text-muted">{skill.level}%</span>
                    </div>

                    <div className="h-2 w-full bg-[var(--bg-secondary)] rounded-full overflow-hidden p-0.5 border border-[var(--border-color)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-[var(--badge-bg)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
