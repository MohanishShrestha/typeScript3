import { carData } from "@/data/carData";
import { useState } from "react";

interface CompareSelectorProps {
  onCompare: (data: any) => void;
}

export default function CompareSelector({ onCompare }: CompareSelectorProps) {
  const brands = Object.keys(carData);

  const [brand1, setBrand1] = useState("");
  const [model1, setModel1] = useState("");

  const [brand2, setBrand2] = useState("");
  const [model2, setModel2] = useState("");

  const handleSubmit = () => {
    if (!brand1 || !brand2 || !model1 || !model2) return alert("Select all fields");

    const data = {
      car1: carData[brand1].find((m) => m.name === model1),
      car2: carData[brand2].find((m) => m.name === model2),
    };

    onCompare(data);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl mb-4">
      <h2 className="font-bold mb-2">Create Comparison</h2>

      {/* Brand 1 */}
      <div className="flex gap-4">
        <select
          className="border p-2 rounded"
          value={brand1}
          onChange={(e) => setBrand1(e.target.value)}
        >
          <option value="">Select Brand</option>
          {brands.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          disabled={!brand1}
          value={model1}
          onChange={(e) => setModel1(e.target.value)}
        >
          <option value="">Select Model</option>
          {brand1 &&
            carData[brand1].map((m) => (
              <option key={m.name}>{m.name}</option>
            ))}
        </select>
      </div>

      {/* Brand 2 */}
      <div className="flex gap-4 mt-3">
        <select
          className="border p-2 rounded"
          value={brand2}
          onChange={(e) => setBrand2(e.target.value)}
        >
          <option value="">Select Brand</option>
          {brands.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          disabled={!brand2}
          value={model2}
          onChange={(e) => setModel2(e.target.value)}
        >
          <option value="">Select Model</option>
          {brand2 &&
            carData[brand2].map((m) => (
              <option key={m.name}>{m.name}</option>
            ))}
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
      >
        Compare
      </button>
    </div>
  );
}
