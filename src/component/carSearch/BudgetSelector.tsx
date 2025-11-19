import React from "react";

interface Props {
  budget: string;
  setBudget: (v: string) => void;
  vehicleType: string;
  setVehicleType: (v: string) => void;
  budgets: string[];
  vehicleTypes: string[];
  carType: "new car" | "used car";
}

const BudgetSelector: React.FC<Props> = ({
  budget,
  setBudget,
  vehicleType,
  setVehicleType,
  budgets,
  vehicleTypes,
  carType,
}) => {
  return (
    <div className="space-y-4">
      <select
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="w-full border px-3 py-3 rounded-lg bg-gray-100"
      >
        <option value="">Select Budget</option>
        {budgets.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>

      {/* Show vehicle type only for new cars */}
      {carType === "new car" && (
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          disabled={!budget}
          className="w-full border px-3 py-3 rounded-lg disabled:opacity-50"
        >
          <option value="">Vehicle Type</option>
          {vehicleTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default BudgetSelector;
