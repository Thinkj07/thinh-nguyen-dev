import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../lib/ThemeContext";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className="group relative flex h-[24px] w-[48px] items-center rounded-full p-[2px] border border-border bg-card cursor-pointer transition-colors duration-300 select-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      data-cursor
    >
      {/* Background Decor: Day Sun Icon (Left) */}
      <div className="absolute left-[3px] top-1/2 -translate-y-1/2 flex h-4 w-4 items-center justify-center pointer-events-none">
        <AnimatePresence>
          {!isDark && (
            <motion.svg
              key="sun-icon"
              initial={{ scale: 0.3, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.3, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-none stroke-black stroke-[2.2] stroke-linecap-round"
            >
              <circle cx="12" cy="12" r="4.5" />
              <line x1="12" y1="2" x2="12" y2="4.2" />
              <line x1="12" y1="19.8" x2="12" y2="22" />
              <line x1="2" y1="12" x2="4.2" y2="12" />
              <line x1="19.8" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="6.5" y2="6.5" />
              <line x1="17.5" y1="17.5" x2="19.07" y2="19.07" />
              <line x1="4.93" y1="19.07" x2="6.5" y2="17.5" />
              <line x1="17.5" y1="6.5" x2="19.07" y2="4.93" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>

      {/* Background Decor: Night Crescent Moon Icon (Right) */}
      <div className="absolute right-[3px] top-1/2 -translate-y-1/2 flex h-4 w-4 items-center justify-center pointer-events-none">
        <AnimatePresence>
          {isDark && (
            <motion.svg
              key="moon-icon"
              initial={{ scale: 0.3, opacity: 0, rotate: 40 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.3, opacity: 0, rotate: -25 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-current text-foreground"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </motion.svg>


          )}
        </AnimatePresence>
      </div>


      {/* Sliding Thumb Knob */}
      <motion.div
        animate={{
          x: isDark ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.7,
        }}
        className={`relative z-10 h-[18px] w-[18px] rounded-full transition-colors duration-300 ${
          isDark
            ? "border-[2.5px] border-foreground bg-secondary"
            : "border-[2.5px] border-black bg-white"
        }`}
      />
    </motion.button>
  );
}
