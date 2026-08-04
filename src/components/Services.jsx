import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Cpu, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Cpu: Cpu
};

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Services<span className="font-mono text-muted">_</span>
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Server;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass-card p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-6">
                    {/* Top Icon & Dot */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary group-hover:border-[var(--border-hover)] transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-primary font-mono">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon illustration preview */}
                  <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                    />
                    <div className="p-2 rounded-lg text-muted group-hover:text-primary group-hover:bg-[var(--bg-secondary)] transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
