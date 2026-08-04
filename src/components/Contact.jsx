import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please complete all fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate form submission delay or EmailJS trigger
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
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
              Contact<span className="font-mono text-muted">_</span>
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary font-mono">
                  Let's Build Something Great_
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">
                  Feel free to reach out for software engineering opportunities, internships, collaboration, or technical inquiries.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                  <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted font-mono block">PHONE</span>
                    <span className="font-semibold text-primary">{personalInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                  <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted font-mono block">EMAIL</span>
                    <span className="font-semibold text-primary">{personalInfo.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                  <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted font-mono block">LOCATION</span>
                    <span className="font-semibold text-primary">Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <p className="text-sm font-mono text-muted uppercase">
                  Or write me a direct message_
                </p>

                {status.error && (
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                {status.submitted && (
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-muted uppercase mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary text-sm focus:outline-none focus:border-[var(--border-hover)] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted uppercase mb-2">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary text-sm focus:outline-none focus:border-[var(--border-hover)] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted uppercase mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-primary text-sm focus:outline-none focus:border-[var(--border-hover)] transition-all font-sans resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full btn-primary justify-center cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status.submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
