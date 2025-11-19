import React, { useState } from "react";

// datas?
export const vehicleData = [
  {
    brand: "Toyota",
    models: ["Fortuner", "Corolla", "Hilux"],
    type: "SUV",
    price: 4000000,
    carType: "new car",
  },
  {
    brand: "Hyundai",
    models: ["Creta", "Venue", "i20"],
    type: "SUV",
    price: 2500000,
    carType: "used car",
  },
  {
    brand: "Suzuki",
    models: ["Swift", "Baleno", "Ertiga"],
    type: "Hatchback",
    price: 1500000,
    carType: "new car",
  },
  {
    brand: "Honda",
    models: ["City", "Amaze", "WR-V"],
    type: "Sedan",
    price: 2200000,
    carType: "used car",
  },
  {
    brand: "Tata",
    models: ["Nexon", "Altroz", "Safari"],
    type: "SUV",
    price: 1800000,
    carType: "new car",
  },

  // Extra Data -------------------------

  {
    brand: "Mahindra",
    models: ["Scorpio N", "Thar", "XUV700"],
    type: "SUV",
    price: 3200000,
    carType: "new car",
  },
  {
    brand: "Kia",
    models: ["Seltos", "Sonet", "Carens"],
    type: "SUV",
    price: 2800000,
    carType: "used car",
  },
  {
    brand: "Volkswagen",
    models: ["Polo", "Vento", "Taigun"],
    type: "Hatchback",
    price: 1600000,
    carType: "used car",
  },
  {
    brand: "Renault",
    models: ["Kwid", "Kiger", "Triber"],
    type: "Hatchback",
    price: 900000,
    carType: "new car",
  },
  {
    brand: "Nissan",
    models: ["Magnite", "Kicks"],
    type: "SUV",
    price: 1200000,
    carType: "used car",
  },

  // Electric Cars -----------------------

  {
    brand: "Tesla",
    models: ["Model 3", "Model Y"],
    type: "EV",
    price: 7000000,
    carType: "new car",
  },
  {
    brand: "BYD",
    models: ["Atto 3", "Dolphin"],
    type: "EV",
    price: 3500000,
    carType: "new car",
  },
  {
    brand: "Tata",
    models: ["Nexon EV", "Tiago EV"],
    type: "EV",
    price: 1600000,
    carType: "used car",
  },

  // Budget Cars -------------------------

  {
    brand: "Maruti",
    models: ["Alto", "Celerio"],
    type: "Hatchback",
    price: 490000,
    carType: "new car",
  },
  {
    brand: "Datsun",
    models: ["Redi-Go", "Go+"],
    type: "Hatchback",
    price: 550000,
    carType: "used car",
  },

  // Luxury Cars -------------------------

  {
    brand: "BMW",
    models: ["X5", "3 Series"],
    type: "Luxury",
    price: 15000000,
    carType: "new car",
  },
  {
    brand: "Mercedes",
    models: ["C-Class", "GLA"],
    type: "Luxury",
    price: 18000000,
    carType: "new car",
  },
  {
    brand: "Audi",
    models: ["A4", "Q3"],
    type: "Luxury",
    price: 14000000,
    carType: "used car",
  },

  // Pickup Trucks -----------------------

  {
    brand: "Isuzu",
    models: ["D-Max", "V-Cross"],
    type: "Pickup",
    price: 3500000,
    carType: "new car",
  },
  {
    brand: "Ford",
    models: ["Ranger", "Endeavour"],
    type: "Pickup",
    price: 5000000,
    carType: "used car",
  },

  {
    brand: "Tatat",
    models: ["Nexont", "Altrozt", "Safarit"],
    type: "SUV",
    price: 180000,
    carType: "new car",
  },
  {
    brand: "Pata",
    models: ["Pexon", "Paltroz", "Pafari"],
    type: "PUV",
    price: 600000,
    carType: "used car",
  },
];

const budgets = ["Below 5 Lakhs", "5-10 Lakhs", "10-20 Lakhs", "20 Lakhs+"];
const brands = vehicleData.map((v) => v.brand);

const getBudgetRange = (budgetStr: string) => {
  switch (budgetStr) {
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

const CarSearchCard2: React.FC = () => {
  const [carType, setCarType] = useState<"new car" | "used car">("new car");
  const [mode, setMode] = useState<"budget" | "brand">("budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const { min, max } = getBudgetRange(budget);

  const filteredVehicleTypes = vehicleData
    .filter((v) => v.price >= min && v.price <= max)
    .map((v) => v.type);

  const uniqueVehicleTypes = Array.from(new Set(filteredVehicleTypes));

  const selectedBrandData = vehicleData.find((v) => v.brand === brand);
  const models = selectedBrandData ? selectedBrandData.models : [];

  return (
    <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-xl border">
      <h2 className="text-2xl font-bold mb-4">Find your right car</h2>

      <div className="flex rounded-lg overflow-hidden mb-4 border">
        <button
          onClick={() => setCarType("new car")}
          className={`w-1/2 py-2 font-medium ${
            carType === "new car" ? "bg-black text-white" : "bg-white"
          }`}
        >
          New Car
        </button>
        <button
          onClick={() => setCarType("used car")}
          className={`w-1/2 py-2 font-medium ${
            carType === "used car" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Used Car
        </button>
      </div>

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

     

      {mode === "budget" && (
        <div className="space-y-3">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg bg-gray-100"
          >
            <option value="">Select Budget</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>

          {carType === "new car" && (
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg bg-white"
              disabled={!budget}
            >
              <option value="">Vehicle Type</option>
              {uniqueVehicleTypes.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          )}
        </div>
      )}

      {mode === "brand" && (
        <div className="space-y-3">
          <select
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setModel("");
            }}
            className="w-full border px-3 py-2 rounded-lg bg-gray-100"
          >
            <option value="">Select Brand</option>
            {brands.map((b, i) => (
              <option key={i}>{b}</option>
            ))}
          </select>

          {carType === "new car" && (
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg bg-gray-100"
              disabled={!brand}
            >
              <option value="">Select Model</option>
              {models.map((m, i) => (
                <option key={i}>{m}</option>
              ))}
            </select>
          )}
        </div>
      )}

      <button className="w-full mt-5 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
        Search
      </button>
    </div>
  );
};

export default CarSearchCard2;
