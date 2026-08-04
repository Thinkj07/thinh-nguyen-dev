import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X, ArrowUpRight } from 'lucide-react';
import { blogPostsData } from '../data/portfolioData';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
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
              Latest Blog<span className="font-mono text-muted">_</span>
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                {/* Image Cover */}
                <div className="relative aspect-video overflow-hidden bg-[var(--bg-tertiary)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border-color)] text-[10px] font-mono text-primary flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-primary font-mono group-hover:underline">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-secondary line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-primary border-t border-[var(--border-subtle)]">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card bg-[var(--bg-primary)] border border-[var(--border-color)] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedPost.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                  {selectedPost.title}
                </h3>

                <div className="rounded-xl overflow-hidden border border-[var(--border-color)] max-h-64">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose text-secondary leading-relaxed text-sm sm:text-base space-y-3">
                  <p>{selectedPost.excerpt}</p>
                  <p className="text-xs font-mono text-muted italic">
                    Full publication content available on tech articles repository.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
