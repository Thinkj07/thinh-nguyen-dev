import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10 text-center"
        >
          <div className="inline-flex p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary">
            <Quote className="w-8 h-8 opacity-80" />
          </div>

          {/* Testimonial Quote Slider */}
          <div className="min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 max-w-2xl"
              >
                <p className="text-xl sm:text-2xl font-serif italic text-primary leading-relaxed">
                  "{testimonialsData[currentIndex].quote}"
                </p>

                <div>
                  <h4 className="font-bold text-base text-primary font-mono">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-xs font-mono text-muted">
                    {testimonialsData[currentIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Indicators */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={handlePrev}
              aria-label="Previous quote"
              className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary hover:border-[var(--border-hover)] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[var(--badge-bg)]'
                      : 'w-2 bg-[var(--border-color)]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next quote"
              className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary hover:border-[var(--border-hover)] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
