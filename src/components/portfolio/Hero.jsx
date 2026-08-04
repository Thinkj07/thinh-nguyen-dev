import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const LINE_1 = "HI, I'M THINH NGUYEN";

export function Hero() {
  const [typed, setTyped] = useState("");
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 80, damping: 20 });
  const py = useSpring(my, { stiffness: 80, damping: 20 });
  const gridX = useTransform(px, (v) => v * -24);
  const gridY = useTransform(py, (v) => v * -24);
  const glowX = useTransform(px, (v) => v * 60);
  const glowY = useTransform(py, (v) => v * 60);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(LINE_1.slice(0, i));
      if (i >= LINE_1.length) clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-5 pb-10 pt-28 sm:px-10"
    >
      <motion.div
        aria-hidden
        className="grid-bg absolute inset-[-10%] opacity-60"
        style={{ x: gridX, y: gridY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ x: glowX, y: glowY, background: "var(--terminal)" }}
      />

      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          PORTFOLIO / 2026
        </p>
      </div>

      <div className="relative">
        <h1 className="display-xl text-[13vw] leading-[0.85] sm:text-[9.5vw]">
          <span className="block">
            {typed}
            <span className="caret text-terminal">_</span>
          </span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block text-muted-foreground"
          >
            CS STUDENT @ HCMUT
          </motion.span>
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-t border-border pt-6 sm:flex sm:justify-between"
      >
        <p className="min-w-0 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
          Building full-stack web applications, AI algorithms, and backend systems. Driven by a passion for clean abstractions, scalable architecture, and impactful solutions.
        </p>
        <a
          href="#projects"
          className="shrink-0 border border-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] invert-hover"
        >
          View work ↓
        </a>
      </motion.div>
    </section>
  );
}
