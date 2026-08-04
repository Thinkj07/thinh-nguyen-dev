import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Facebook, Mail, MapPin, Phone, Calendar } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden">
      <HeroCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-100 dark:to-zinc-700 opacity-30 blur group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] p-2 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-xl filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Hero Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Ping */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-secondary tracking-wide">AVAILABLE FOR WORK & INTERNSHIPS</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-mono text-muted">
                {personalInfo.role}
              </p>
            </div>

            {/* Key Meta Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
                <Calendar className="w-4 h-4 text-muted flex-shrink-0" />
                <div>
                  <span className="text-xs text-muted block">AGE</span>
                  <span className="font-medium text-primary">{personalInfo.age} Years Old</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
                <Phone className="w-4 h-4 text-muted flex-shrink-0" />
                <div>
                  <span className="text-xs text-muted block">PHONE</span>
                  <span className="font-medium text-primary">{personalInfo.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
                <Mail className="w-4 h-4 text-muted flex-shrink-0" />
                <div>
                  <span className="text-xs text-muted block">EMAIL</span>
                  <span className="font-medium text-primary truncate max-w-[200px] block" title={personalInfo.email}>
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
                <MapPin className="w-4 h-4 text-muted flex-shrink-0" />
                <div>
                  <span className="text-xs text-muted block">LOCATION</span>
                  <span className="font-medium text-primary truncate max-w-[200px] block" title={personalInfo.address}>
                    Ho Chi Minh City, VN
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={personalInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-primary hover:border-[var(--border-hover)] transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-primary hover:border-[var(--border-hover)] transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-primary hover:border-[var(--border-hover)] transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
