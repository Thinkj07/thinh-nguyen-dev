import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className="group relative flex items-center gap-2 border border-border bg-card/90 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider backdrop-blur transition-all duration-300 hover:border-terminal hover:shadow-[0_0_12px_rgba(20,136,216,0.25)] cursor-pointer select-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Chuyển sang chế độ ${isDark ? "Sáng" : "Tối"}`}
      data-cursor
    >
      {/* Animated Icon Container */}
      <div className="relative flex h-4 w-4 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ y: -12, opacity: 0, rotate: -60, scale: 0.6 }}
              animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
              exit={{ y: 12, opacity: 0, rotate: 60, scale: 0.6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-terminal flex items-center justify-center"
            >
              <Moon className="h-3.5 w-3.5" />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ y: -12, opacity: 0, rotate: 60, scale: 0.6 }}
              animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
              exit={{ y: 12, opacity: 0, rotate: -60, scale: 0.6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-amber-500 flex items-center justify-center"
            >
              <Sun className="h-3.5 w-3.5 stroke-[2.5]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mode Text Label */}
      <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-terminal transition-colors">
        {isDark ? "DARK" : "LIGHT"}
      </span>

      {/* Cyber Status Indicator Dot */}
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isDark ? "bg-terminal" : "bg-amber-500"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
            isDark ? "bg-terminal" : "bg-amber-500"
          }`}
        />
      </span>

      {/* Corner Crosshairs for Brutalist Tech Look */}
      <span className="absolute -top-1 -left-1 font-mono text-[8px] text-muted-foreground/60 leading-none select-none">+</span>
      <span className="absolute -top-1 -right-1 font-mono text-[8px] text-muted-foreground/60 leading-none select-none">+</span>
      <span className="absolute -bottom-1 -left-1 font-mono text-[8px] text-muted-foreground/60 leading-none select-none">+</span>
      <span className="absolute -bottom-1 -right-1 font-mono text-[8px] text-muted-foreground/60 leading-none select-none">+</span>
    </motion.button>
  );
}
