import React, { useState } from "react";
import GuessInput2 from "./GamesInput2";

interface GameState {
  a: number;
  b: number;
  attempts: number;
  message: string;
  symbol: string; // store the chosen symbol
}

const symbols = ["+", "-", "*", "/"];

const Game2: React.FC = () => {
  const [game, setGame] = useState<GameState>(() => {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    return {
      a,
      b,
      attempts: 0,
      message: `Solve this the equation:`,
      symbol,
    };
  });

  const calculateAnswer = (a: number, b: number, symbol: string) => {
    switch (symbol) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return parseFloat((a / b).toFixed(2));
      default:
        return 0;
    }
  };

  const handleGuess = (guess: number) => {
    setGame((prev) => {
      const correctAnswer = calculateAnswer(prev.a, prev.b, prev.symbol);
      let msg = "";
      let at = 0;
      let newA = prev.a;
      let newB = prev.b;
      let newSymbol = prev.symbol;

      if (guess === correctAnswer) {
        msg = "🎉 Correct! You got it!";
        at = 0;
        newA = Math.floor(Math.random() * 100) + 1;
        newB = Math.floor(Math.random() * 10) + 1;
        newSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      } else {
        msg = `❌ Wrong! Answer.`;
        at = prev.attempts + 1;
      }

      return {
        a: newA,
        b: newB,
        attempts: at,
        message: msg,
        symbol: newSymbol,
      };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-purple-200 to-purple-400 p-4">
      <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
        Math Game
      </h1>
      <p className="text-2xl mb-4 text-white">Attempts: {game.attempts}</p>
      <p className="text-xl mb-2 text-white">{game.message}</p>

      <p className="text-xl mb-4 text-white">
        Question: {game.a} {game.symbol} {game.b}
      </p>

      <GuessInput2 onGuess={handleGuess} />

      <button
        className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded shadow"
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </div>
  );
};

export default Game2;
