import React from "react";

interface Props {
  carType: "new car" | "used car";
  setCarType: (type: "new car" | "used car") => void;
}

const CarTypeSwitcher: React.FC<Props> = ({ carType, setCarType }) => {
  return (
    <div className="flex gap-3 mb-6">
      {(["new car", "used car"] as const).map((type) => (
        <button
          key={type}
          onClick={() => setCarType(type)}
          className={`flex-1 py-2 rounded-lg font-medium border transition 
          ${carType === type 
            ? "bg-gray-700 text-white shadow-md" 
            : "bg-white text-gray-700 hover:bg-gray-200"}`}
        >
          {type === "new car" ? "New Car" : "Used Car"}
        </button>
      ))}
    </div>
  );
};

export default CarTypeSwitcher;
