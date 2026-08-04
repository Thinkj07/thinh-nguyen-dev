import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EMAIL = "cbl.thinhnguyen@gmail.com";
const GLYPHS = ["#", "*", "+", "░", "▓", "0", "1", "/", "▒", "="];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => {
      setCopied(false);
      setParticles([]);
    }, 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable */
    }
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 320,
        y: -Math.random() * 220 - 40,
        char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      }))
    );
    setCopied(true);
  };

  return (
    <footer
      id="contact"
      className="relative flex min-h-screen flex-col justify-between border-t border-border px-5 py-16 sm:px-10"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <p className="relative font-mono text-xs uppercase tracking-[0.4em] text-terminal">
        05 / contact
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="display-xl relative text-[13vw] leading-[0.85] sm:text-[10vw]"
      >
        Let&apos;s build
        <br />
        something
        <br />
        <span className="text-terminal">awesome.</span>
      </motion.h2>

      <div className="relative grid gap-10 border-t border-border pt-8 sm:flex sm:items-end sm:justify-between">
        <div className="relative">
          <button
            onClick={copy}
            className="relative border border-foreground px-7 py-4 font-mono text-sm uppercase tracking-[0.2em] invert-hover cursor-pointer"
          >
            {copied ? "Copied! 🚀" : `Copy email — ${EMAIL}`}
          </button>

          <AnimatePresence>
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ opacity: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, x: p.x, y: p.y }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 font-mono text-sm text-terminal"
              >
                {p.char}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <nav className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.2em]">
          {[
            { label: "GitHub", href: "https://github.com/Thinkj07/" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/thinkj07/" },
            { label: "Facebook", href: "https://www.facebook.com/thinhnguyen0707/" },
            { label: "Resume (PDF)", href: "/assets/img/cv.pdf" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="border-b border-transparent pb-1 transition-colors hover:border-terminal hover:text-terminal"
            >
              {l.label} ↗
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
