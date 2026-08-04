import React, { useState, useEffect, useRef, useCallback } from "react";

const GRID_SIZE = 14; // 14x14 grid fits inside terminal box
const INITIAL_SPEED = 120;

const INITIAL_SNAKE = [
  { x: 7, y: 7 },
  { x: 7, y: 8 },
  { x: 7, y: 9 },
];

const INITIAL_DIR = { x: 0, y: -1 };

export function SnakeGame({ onExit }) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIR);
  const [food, setFood] = useState({ x: 3, y: 3 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("snake_highscore") || "0", 10);
  });
  const [gameState, setGameState] = useState("playing"); // 'playing' | 'gameover'

  const nextDirRef = useRef(INITIAL_DIR);
  const gameLoopRef = useRef(null);

  const generateFood = useCallback((currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const isOverlap = currentSnake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      );
      if (!isOverlap) break;
    }
    return newFood;
  }, []);

  const startGame = useCallback(() => {
    const freshSnake = [
      { x: 7, y: 7 },
      { x: 7, y: 8 },
      { x: 7, y: 9 },
    ];
    setSnake(freshSnake);
    const startDir = { x: 0, y: -1 };
    setDirection(startDir);
    nextDirRef.current = startDir;
    setFood(generateFood(freshSnake));
    setScore(0);
    setGameState("playing");
  }, [generateFood]);

  const gameStep = useCallback(() => {
    setSnake((prevSnake) => {
      const currentDir = nextDirRef.current;
      setDirection(currentDir);

      const head = prevSnake[0];
      const newHead = {
        x: head.x + currentDir.x,
        y: head.y + currentDir.y,
      };

      // Wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameState("gameover");
        return prevSnake;
      }

      // Self collision
      const selfCollide = prevSnake.some(
        (segment, idx) =>
          idx !== prevSnake.length - 1 &&
          segment.x === newHead.x &&
          segment.y === newHead.y
      );

      if (selfCollide) {
        setGameState("gameover");
        return prevSnake;
      }

      // Food collision
      const newSnake = [newHead, ...prevSnake];
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prevScore) => {
          const nextScore = prevScore + 10;
          if (nextScore > highScore) {
            setHighScore(nextScore);
            localStorage.setItem("snake_highscore", nextScore.toString());
          }
          return nextScore;
        });
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [food, generateFood, highScore]);

  useEffect(() => {
    if (gameState === "playing") {
      const speed = Math.max(70, INITIAL_SPEED - Math.floor(score / 40) * 10);
      gameLoopRef.current = setInterval(gameStep, speed);
    } else {
      clearInterval(gameLoopRef.current);
    }
    return () => clearInterval(gameLoopRef.current);
  }, [gameState, gameStep, score]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)
      ) {
        e.preventDefault();
      }

      if (e.key === "q" || e.key === "Q" || e.key === "Escape") {
        onExit();
        return;
      }

      if (gameState === "gameover") {
        if (e.key === "Enter" || e.key === " " || e.key === "r" || e.key === "R") {
          startGame();
        }
        return;
      }

      const currentDir = nextDirRef.current;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (currentDir.y !== 1) nextDirRef.current = { x: 0, y: -1 };
          break;
        case "ArrowDown":
        case "s":
        case "S":
          if (currentDir.y !== -1) nextDirRef.current = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          if (currentDir.x !== 1) nextDirRef.current = { x: -1, y: 0 };
          break;
        case "ArrowRight":
        case "d":
        case "D":
          if (currentDir.x !== -1) nextDirRef.current = { x: 1, y: 0 };
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, startGame, onExit]);

  const renderGridRows = () => {
    const rows = [];
    for (let r = 0; r < GRID_SIZE; r++) {
      let rowChars = "";
      for (let c = 0; c < GRID_SIZE; c++) {
        const isHead = snake[0].x === c && snake[0].y === r;
        const isSnakeBody = snake.slice(1).some((s) => s.x === c && s.y === r);
        const isFood = food.x === c && food.y === r;

        if (isHead) {
          rowChars += "█ ";
        } else if (isSnakeBody) {
          rowChars += "■ ";
        } else if (isFood) {
          rowChars += "🍎";
        } else {
          rowChars += "· ";
        }
      }
      rows.push(rowChars);
    }
    return rows;
  };

  return (
    <div className="flex flex-col h-full justify-between font-mono select-none text-[12px] leading-tight">
      {/* Top CLI Game Score Header */}
      <div className="flex items-center justify-between border-b border-border pb-2 text-[11px] text-muted-foreground">
        <span>SCORE: <strong className="text-terminal">{score}</strong></span>
        <span>HIGH: <strong className="text-foreground">{highScore}</strong></span>
        <button
          onClick={onExit}
          className="text-terminal border border-terminal/30 px-1.5 py-0.5 hover:bg-terminal hover:text-background cursor-pointer"
        >
          QUIT (Q)
        </button>
      </div>

      {/* Grid Display Body */}
      <div className="relative my-auto flex flex-col items-center justify-center py-1">
        {gameState === "playing" ? (
          <div className="flex flex-col items-center justify-center font-mono">
            {renderGridRows().map((rowStr, idx) => (
              <div key={idx} className="whitespace-pre tracking-widest text-center">
                {rowStr.split("").map((ch, charIdx) => {
                  if (ch === "█") return <span key={charIdx} className="text-terminal font-bold">{ch}</span>;
                  if (ch === "■") return <span key={charIdx} className="text-foreground">{ch}</span>;
                  if (ch === "🍎") return <span key={charIdx} className="animate-pulse">{ch}</span>;
                  return <span key={charIdx} className="text-muted-foreground/30">{ch}</span>;
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
            <p className="text-red-500 font-extrabold text-lg uppercase tracking-widest">
              GAME OVER
            </p>
            <p className="text-xs text-muted-foreground">
              FINAL SCORE: <span className="text-terminal font-bold">{score}</span>
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={startGame}
                className="border border-terminal px-3 py-1 text-xs text-terminal hover:bg-terminal hover:text-background cursor-pointer"
              >
                RETRY (SPACE)
              </button>
              <button
                onClick={onExit}
                className="border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
              >
                EXIT (Q)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Control Footer Info */}
      <div className="border-t border-border pt-2 text-[10px] text-muted-foreground flex justify-between items-center">
        <span>WASD / ARROWS: MOVE</span>
        <span>PRESS Q TO RETURN TO BASH</span>
      </div>
    </div>
  );
}
