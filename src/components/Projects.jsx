import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI & Game' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                Work<span className="font-mono text-muted">_</span>
              </h2>
              <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
            </div>
          </div>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[var(--border-color)] pb-4">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[var(--badge-bg)] text-[var(--badge-text)] shadow-sm'
                    : 'text-secondary hover:text-primary hover:bg-[var(--bg-primary)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col group"
                >
                  {/* Image Thumbnail */}
                  <div
                    className="relative aspect-video overflow-hidden bg-[var(--bg-tertiary)] cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border-color)] text-[10px] font-mono font-bold text-primary">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Card Data */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold tracking-tight text-primary font-mono group-hover:underline cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-secondary line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Stack tags */}
                    <div className="space-y-4 pt-2 border-t border-[var(--border-subtle)]">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item, idx) => (
                          <span key={idx} className="tech-tag">
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Github Link */}
                      <div className="flex items-center justify-between pt-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:text-muted transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Source</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-mono text-muted hover:text-primary transition-colors cursor-pointer"
                        >
                          Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card bg-[var(--bg-primary)] border border-[var(--border-color)] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-mono text-secondary">
                  {selectedProject.categoryLabel}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                  {selectedProject.title}
                </h3>

                <div className="rounded-xl overflow-hidden border border-[var(--border-color)] max-h-64">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-secondary leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
                    TECHNOLOGIES USED:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, i) => (
                      <span key={i} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-end gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW GITHUB REPOSITORY</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
