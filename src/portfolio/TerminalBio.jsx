import { useEffect, useRef, useState } from "react";
import avatarImg from "/assets/img/avatar.png";
import { getMatchingGame } from "./cli/games";

const COMMANDS = {
  help: [
    "available commands:",
    "  skills    — core technical stack",
    "  projects  — featured builds",
    "  contact   — how to reach me",
    "  whoami    — short bio",
    "  clear     — wipe the screen",
  ],
  skills: [
    "frontend  : ReactJS, JavaScript, HTML5, CSS3, Tailwind CSS",
    "backend   : Node.js, Express, Python, Java",
    "databases : MySQL, MongoDB, PostgreSQL",
    "ai : ChatGPT, Gemini, Cursor",
  ],
  projects: [
    "1. ITWORKS            [MERN Stack, JWT Auth, Role-Based Access]",
    "2. PERSONAL PORTFOLIO [React, Vite, Lenis, Framer Motion, Canvas]",
    "3. CONNECT 4 AI       [Python, Pygame, MCTS & Neural Net Optimization]",
  ],
  contact: [
    "email    : cbl.thinhnguyen@gmail.com",
    "phone    : (84+) 394 940 599",
    "github   : github.com/Thinkj07/",
    "linkedin : linkedin.com/in/thinkj07/",
  ],
  whoami: [
    "thinh nguyen duc — 4th year computer science student @ hcmut.",
    "focus: full-stack web applications, backend architecture & ai systems.",
  ],
};

const QUICK = ["help", "skills", "projects", "contact"];

export function TerminalBio() {
  const [activeGame, setActiveGame] = useState(null);
  const [lines, setLines] = useState([
    { kind: "out", text: "guest@thinhnguyen:~$ session started. type `help` to begin." },
  ]);
  const [value, setValue] = useState("");

  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!activeGame) {
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
    }
  }, [lines, activeGame]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    const matchedGame = getMatchingGame(cmd);
    if (matchedGame) {
      setActiveGame(matchedGame);
      return;
    }

    const out = COMMANDS[cmd] ?? [`command not found: ${cmd} — try \`help\``];
    setLines((prev) => [
      ...prev,
      { kind: "in", text: cmd },
      ...out.map((text) => ({ kind: "out", text })),
    ]);
  };

  const handleExitGame = () => {
    const gameName = activeGame ? activeGame.id : "game";
    setActiveGame(null);
    setLines((prev) => [
      ...prev,
      { kind: "in", text: gameName },
      { kind: "out", text: `${gameName} session closed. welcome back to bash.` },
    ]);
  };

  const GameComponent = activeGame ? activeGame.component : null;

  return (
    <section id="about" className="border-t border-border px-5 py-24 sm:px-10">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-terminal">01 / about</p>
          <h2 className="display-xl mt-6 text-4xl sm:text-6xl">
            I build systems
            <br />
            that matter.
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Fourth-year Computer Science student at Ho Chi Minh City University of Technology (HCMUT). Driven by a passion for clean software architecture, system scalability, and intelligent algorithms.
          </p>

          {/* Quick ID Badge */}
          <div className="mt-8 inline-flex items-center gap-4 border border-border bg-card p-3">
            <img
              src={avatarImg}
              alt="Thinh Nguyen Duc"
              className="w-12 h-12 object-cover border border-border grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="font-mono text-xs">
              <p className="font-bold text-foreground uppercase">Thinh Nguyen Duc</p>
              <p className="text-terminal">Computer Science @ HCMUT</p>
            </div>
          </div>
        </div>

        {/* CLI Terminal Container with fixed height matching original CLI */}
        <div
          className="border border-border bg-card flex flex-col justify-between h-[390px] overflow-hidden"
          onClick={() => {
            if (!activeGame) inputRef.current?.focus();
          }}
          data-cursor
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3 shrink-0">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
              <span className="h-2.5 w-2.5 rounded-full bg-terminal" />
              <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {activeGame ? activeGame.processName : "bash — thinh@portfolio"}
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 px-4 py-2 font-mono text-[13px] leading-relaxed overflow-hidden">
            {activeGame && GameComponent ? (
              <GameComponent onExit={handleExitGame} />
            ) : (
              <div ref={bodyRef} className="h-full overflow-y-auto pr-1">
                {lines.map((line, i) => (
                  <p key={i} className={line.kind === "in" ? "text-terminal" : "text-muted-foreground"}>
                    {line.kind === "in" ? `guest@thinhnguyen:~$ ${line.text}` : line.text}
                  </p>
                ))}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    run(value);
                    setValue("");
                  }}
                  className="flex items-center gap-2"
                >
                  <span className="text-terminal">guest@thinhnguyen:~$</span>
                  <input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    spellCheck={false}
                    aria-label="Terminal command input"
                    className="flex-1 bg-transparent font-mono text-[13px] text-foreground outline-none"
                  />
                </form>
              </div>
            )}
          </div>

          {/* Footer Bar (Buttons in bash mode, control info in game mode) */}
          <div className="border-t border-border px-4 py-2.5 shrink-0 min-h-[46px] flex items-center">
            {activeGame ? (
              <div className="w-full flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                <span>WASD / ARROWS: MOVE</span>
                <span>PRESS Q TO RETURN TO BASH</span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {QUICK.map((c) => (
                  <button
                    key={c}
                    onClick={() => run(c)}
                    className="border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest invert-hover cursor-pointer"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
