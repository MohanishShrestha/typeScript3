import React from "react";

interface Props {
  brand: string;
  setBrand: (v: string) => void;
  model: string;
  setModel: (v: string) => void;
  brands: string[];
  models: string[];
  carType: "new car" | "used car";
}

const BrandSelector: React.FC<Props> = ({
  brand,
  setBrand,
  model,
  setModel,
  brands,
  models,
  carType,
}) => {
  return (
    <div className="space-y-4">
      <select
        value={brand}
        onChange={(e) => {
          setBrand(e.target.value);
          setModel("");
        }}
        className="w-full border px-3 py-3 rounded-lg bg-gray-100"
      >
        <option value="">Select Brand</option>
        {brands.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>

      {/* Model only when new car */}
      {carType === "new car" && (
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={!brand}
          className="w-full border px-3 py-3 rounded-lg disabled:opacity-50"
        >
          <option value="">Select Model</option>
          {models.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default BrandSelector;
