import React, { useState, useMemo } from "react";
import { vehicleData } from "../../data/vehicleData";

import CarTypeSwitcher from "./CarTypeSwitcher";
import ModeSelector from "./ModeSelector";
import BudgetSelector from "./BudgetSelector";
import BrandSelector from "./BrandSelector";

const budgets = ["Below 5 Lakhs", "5-10 Lakhs", "10-20 Lakhs", "20 Lakhs+"];

const getBudgetRange = (str: string) => {
  switch (str) {
    case "Below 5 Lakhs":
      return { min: 0, max: 500000 };
    case "5-10 Lakhs":
      return { min: 500000, max: 1000000 };
    case "10-20 Lakhs":
      return { min: 1000000, max: 2000000 };
    case "20 Lakhs+":
      return { min: 2000000, max: Infinity };
    default:
      return { min: 0, max: Infinity };
  }
};

const CarSearchCard3: React.FC = () => {
  const [carType, setCarType] = useState<"new car" | "used car">("new car");
  const [mode, setMode] = useState<"budget" | "brand">("budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const brands = useMemo(() => {
    return Array.from(new Set(vehicleData.map((v) => v.brand)));
  }, []);

  const { min, max } = getBudgetRange(budget);

  const vehicleTypes = useMemo(() => {
    return Array.from(
      new Set(
        vehicleData
          .filter((v) => v.price >= min && v.price <= max)
          .map((v) => v.type)
      )
    );
  }, [budget]);

  const selectedBrandData = vehicleData.find((v) => v.brand === brand);
  const models = selectedBrandData ? selectedBrandData.models : [];

  return (
    <div className="w-full max-w-sm p-6 bg-white shadow-xl rounded-2xl border">
      <h2 className="text-3xl font-bold mb-6 text-gray-600">
        Find your right car
      </h2>

      <CarTypeSwitcher carType={carType} setCarType={setCarType} />

      <ModeSelector mode={mode} setMode={setMode} carType={carType} />

      {mode === "budget" ? (
        <BudgetSelector
          budget={budget}
          setBudget={setBudget}
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          budgets={budgets}
          vehicleTypes={vehicleTypes}
          carType={carType}
        />
      ) : (
        <BrandSelector
          brand={brand}
          setBrand={setBrand}
          model={model}
          setModel={setModel}
          brands={brands}
          models={models}
          carType={carType}
        />
      )}

      <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
        Search
      </button>
    </div>
  );
};

export default CarSearchCard3;
