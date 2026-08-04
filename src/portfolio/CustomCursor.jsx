import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 900, damping: 50, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 900, damping: 50, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target;
      setActive(Boolean(el?.closest("a, button, [data-cursor]")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ width: active ? 48 : 10, height: active ? 48 : 10, opacity: active ? 1 : 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-terminal"
        style={{ backgroundColor: active ? "transparent" : "var(--terminal)" }}
      />
    </motion.div>
  );
}
