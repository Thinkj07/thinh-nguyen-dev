import { SnakeGame } from "./SnakeGame";

/**
 * Registry of all secret Easter Egg CLI Games.
 * To add a new CLI game in the future:
 * 1. Create your Game component in `src/components/portfolio/cli/games/YourGame.jsx`
 * 2. Add an entry into `CLI_GAMES` below with its command aliases!
 */
export const CLI_GAMES = {
  snake: {
    id: "snake",
    title: "SNAKE.EXE",
    processName: "bash — snake.exe",
    aliases: ["snake", "play snake"],
    component: SnakeGame,
  },
  // Example for future games:
  // tictactoe: {
  //   id: "tictactoe",
  //   title: "TIC_TAC_TOE.EXE",
  //   processName: "bash — tictactoe.exe",
  //   aliases: ["tictactoe", "ttt", "play tictactoe"],
  //   component: TicTacToeGame,
  // }
};

/**
 * Check if input command matches any registered CLI game alias.
 */
export function getMatchingGame(cmdInput) {
  const normalized = cmdInput.trim().toLowerCase();
  for (const gameKey in CLI_GAMES) {
    const game = CLI_GAMES[gameKey];
    if (game.aliases.includes(normalized)) {
      return game;
    }
  }
  return null;
}
