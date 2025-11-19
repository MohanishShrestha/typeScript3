import React, { useState } from "react";

interface GuessInputProps {
  onGuess: (guess: number) => void;
}

const GuessInput2: React.FC<GuessInputProps> = ({ onGuess }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const num = Number(value);
    if (!isNaN(num)) onGuess(num);
    setValue("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded shadow"
      >
        Guess
      </button>
    </div>
  );
};

export default GuessInput2;
