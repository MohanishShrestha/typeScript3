import React from "react";

interface Props {
  mode: "budget" | "brand";
  setMode: (mode: "budget" | "brand") => void;
  carType: "new car" | "used car";
}

const ModeSelector: React.FC<Props> = ({ mode, setMode, carType }) => {
  return (
    <div className="flex gap-6 mb-6 text-gray-700">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          checked={mode === "budget"}
          onChange={() => setMode("budget")}
        />
        <span>By Budget</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          checked={mode === "brand"}
          onChange={() => setMode("brand")}
        />
        <span>{carType === "new car" ? "By Brand" : "By Model"}</span>
      </label>
    </div>
  );
};

export default ModeSelector;
