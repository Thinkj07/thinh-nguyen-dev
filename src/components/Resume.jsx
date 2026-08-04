import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
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
              Resume<span className="font-mono text-muted">_</span>
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-sm font-mono tracking-widest text-muted uppercase mb-8">
              EDUCATION & ACADEMIC BACKGROUND
            </h3>

            {/* Education Timeline */}
            <div className="relative border-l border-[var(--border-color)] pl-8 space-y-8 ml-3">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--border-hover)] bg-[var(--bg-primary)] group-hover:bg-[var(--badge-bg)] transition-colors"></div>

                  <div className="glass-card p-6 rounded-xl space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-primary">
                        {item.institution}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-secondary">
                        <Calendar className="w-3.5 h-3.5 text-muted" />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-base font-semibold text-primary font-mono">
                      {item.degree}
                    </p>

                    <p className="text-sm text-secondary leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-muted">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Ho Chi Minh City, Vietnam</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
