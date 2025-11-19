import React, { useState, useEffect } from "react";

export interface CardType {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
}

const symbols = ["🍎", "🍌", "🍉", "🍇", "🍓", "🍒"];

// repeat garne array function
const repeatArray = (arr: any[], times: number) =>
  Array(times)
    .fill(null)
    .flatMap(() => arr);

const generateCards = (count: number): CardType[] => {
  const repeated = repeatArray(symbols, count);

  return repeated
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({
      id: index,
      value: symbol,
      flipped: false,
      matched: false,
    }));
};

const MemoryGame: React.FC = () => {
  const [count, setCount] = useState(2); // default EASY yeta
  const [cards, setCards] = useState<CardType[]>(generateCards(count));
  const [selected, setSelected] = useState<number[]>([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    setCards(generateCards(count));
    setMistakeCount(0);
    setSelected([]);
  }, [count]);

  const flipCard = (index: number) => {
    if (lockBoard) return;
    if (cards[index].flipped || cards[index].matched) return;

    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);

    setSelected((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (selected.length === 2) {
      setLockBoard(true);
      const [first, second] = selected;

      if (cards[first].value === cards[second].value) {
        const updated = cards.map((c, i) =>
          i === first || i === second ? { ...c, matched: true } : c
        );

        setCards(updated);
        setSelected([]);
        setLockBoard(false);
      } else {
        setTimeout(() => {
          const updated = cards.map((c, i) =>
            i === first || i === second ? { ...c, flipped: false } : c
          );

          setMistakeCount((prev) => prev + 1);
          setCards(updated);
          setSelected([]);
          setLockBoard(false);
        }, 800);
      }
    }
  }, [selected, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.matched)) {
      setGameWon(true);
      alert("🎉 Congratulations! You matched all cards!");
    }
  }, [cards]);

   const resetGame = () => {
    setCards(generateCards(count));
    setSelected([]);
    setMistakeCount(0);
    setGameWon(false);
    setLockBoard(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-purple-200 p-6">
      <h1 className="text-3xl font-bold mb-4">Memory Game</h1>

      {/* Difficulty Buttons haru */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setCount(2)}
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
        >
          Easy
        </button>
        <button
          onClick={() => setCount(4)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-xl"
        >
          Medium
        </button>
        <button
          onClick={() => setCount(6)}
          className="px-4 py-2 bg-red-500 text-white rounded-xl"
        >
          Hard
        </button>
      </div>

      {/* ❌ Mistake Counter  yeta*/}
      <p className="text-lg font-semibold mb-4">❌ Mistakes: {mistakeCount} {gameWon && (
        <button
          className="ml-2 mb-2 px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded shadow"
          onClick={resetGame}
        >
          Restart Game
        </button>
      )}</p>
      


      <div className="grid grid-cols-6 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => flipCard(card.id)}
            className={`w-20 h-20 flex items-center justify-center
              text-3xl cursor-pointer rounded-xl shadow-lg
              ${card.flipped || card.matched ? "bg-white" : "bg-purple-500"}
            `}
          >
            {card.flipped || card.matched ? card.value : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
