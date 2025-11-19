import React, { useState } from "react";
import GuessInput from "./GuessInput";

interface GameState {
  target: number;
  attempts: number;
  message: string;
}

const Game: React.FC = () => {
  const [game, setGame] = useState<GameState>({
    target: Math.floor(Math.random() * 100) + 1,
    attempts: 0,
    message: "Guess a number between 1 and 100!",
  });

  console.log(Math.floor(Math.random() * 100) + 1);

  const handleGuess = (guess: number) => {
    setGame((prev) => {
      let msg = "";

      if (guess === prev.target) msg = "🎉 Correct! You guessed it!";
      else if (guess < prev.target) msg = "Too low! Try again.";
      else msg = "Too high! Try again.";

      return {
        ...prev,
        attempts: prev.attempts + 1,
        message: msg,
      };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-purple-200 to-purple-400 p-4">
      <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">Guess the Number Game</h1>
      <p className="text-lg mb-2 text-white">{game.message}</p>
      <p className="text-md mb-4 text-white">Attempts: {game.attempts}</p>

      <GuessInput onGuess={handleGuess} />

      {game.message.includes("Correct") && (
        <button
          className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow"
          onClick={() => window.location.reload()}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default Game;
