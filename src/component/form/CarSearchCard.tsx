import React, { useState } from "react";

const budgets = ["Below 5 Lakhs", "5–10 Lakhs", "10–20 Lakhs", "20 Lakhs+"];
const vehicleTypes = ["SUV", "Sedan", "Hatchback", "Pickup", "Electric"];
const brands = ["Toyota", "Hyundai", "Suzuki", "Honda", "Tata"];

const CarSearchCard: React.FC = () => {
  const [carType, setCarType] = useState<"new" | "used">("new");
  const [mode, setMode] = useState<"budget" | "brand">("budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-xl border">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Find your right car</h2>

      {/* Tabs */}
      <div className="flex rounded-lg overflow-hidden mb-4 border">
        <button
          onClick={() => setCarType("new")}
          className={`w-1/2 py-2 font-medium ${
            carType === "new" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          New Car
        </button>
        <button
          onClick={() => setCarType("used")}
          className={`w-1/2 py-2 font-medium ${
            carType === "used" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Used Car
        </button>
      </div>

      {/* Radio options */}
      <div className="flex gap-6 mb-4">
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
          <span>By Brand</span>
        </label>
      </div>

      {/* Dropdown container */}
      {mode === "budget" ? (
        <div className="space-y-3">
          {/* Budget Dropdown */}
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg bg-gray-100 text-gray-400"
          >
            <option value="">Select Budget</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          {/* Vehicle Type Dropdown */}
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg bg-white text-gray-400"
          >
            <option value="" >All Vehicle Types</option>
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Brand Dropdown */}
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg bg-gray-100"
          >
            <option value="">Select Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          {/* Vehicle Type Dropdown */}
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg bg-gray-100"
          >
            <option value="">Select Models</option>
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Search Button */}
      <button className="w-full mt-5 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
        Search
      </button>

      {/* Advanced Search */}
      <p className="text-right mt-3 text-gray-600 text-sm cursor-pointer hover:underline">
        Advanced Search →
      </p>
    </div>
  );
};

export default CarSearchCard;
