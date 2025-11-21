import { useEffect, useState } from "react";
import CompareSelector from "./CompareSelector";
import ComparisonCard from "./ComparisonCard";

export default function CompareContainer() {
  const [comparisons, setComparisons] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("comparisons");
    if (saved) setComparisons(JSON.parse(saved));
  }, []);

  const addComparison = (data: any) => {
    const updated = [...comparisons, data];
    setComparisons(updated);
    localStorage.setItem("comparisons", JSON.stringify(updated));
  };

  return (
    <div>
      <CompareSelector onCompare={addComparison} />

      <div className="flex gap-4 overflow-x-auto mt-4 pb-4">
        {comparisons.map((item, index) => (
          <ComparisonCard key={index} car1={item.car1} car2={item.car2} />
        ))}
      </div>
    </div>
  );
}
