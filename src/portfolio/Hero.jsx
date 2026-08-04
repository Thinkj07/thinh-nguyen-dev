import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import avatarImg from "/assets/img/avatar.png";

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

      {/* Top Meta Bar & Avatar Card Header */}
      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          PORTFOLIO / {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-2 border border-border bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal"></span>
          </span>
          <span>DEV_ID: THINH_NGUYEN</span>
        </div>
      </div>

      {/* Main Hero Content & Avatar Grid */}
      <div className="relative my-auto py-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-12">
        {/* Left Headline */}
        <div>
          <h1 className="display-xl text-[9vw] sm:text-[7.2vw] lg:text-[5.5vw] leading-[0.88] tracking-tight">
            <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
              {typed}
              <span className="caret text-terminal">_</span>
            </span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-muted-foreground mt-2"
            >
              CS STUDENT @ HCMUT
            </motion.span>
          </h1>
        </div>

        {/* Right Brutalist Avatar Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative group shrink-0 mx-auto lg:mx-0"
        >
          {/* Outer Brutalist Frame */}
          <div className="bento-card relative w-56 sm:w-64 lg:w-72 aspect-[4/5] border border-border bg-card p-3 overflow-hidden transition-all duration-500">
            {/* Image Header Badge */}
            <div className="flex items-center justify-between border-b border-border pb-2 mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>[IMG_07.PNG]</span>
              <span className="text-terminal">LIVE_PREVIEW</span>
            </div>

            {/* Avatar Image Container */}
            <div className="relative w-full h-[calc(100%-28px)] overflow-hidden border border-border">
              <img
                src={avatarImg}
                alt="Thinh Nguyen Duc"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal/5 to-transparent pointer-events-none opacity-40"></div>
            </div>

            {/* Corner Crosshairs */}
            <span className="absolute top-1 left-1 font-mono text-[9px] text-muted-foreground">+</span>
            <span className="absolute top-1 right-1 font-mono text-[9px] text-muted-foreground">+</span>
            <span className="absolute bottom-1 left-1 font-mono text-[9px] text-muted-foreground">+</span>
            <span className="absolute bottom-1 right-1 font-mono text-[9px] text-muted-foreground">+</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bio Bar */}
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
          className="shrink-0 border border-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] invert-hover cursor-pointer"
        >
          View work ↓
        </a>
      </motion.div>
    </section>
  );
}
