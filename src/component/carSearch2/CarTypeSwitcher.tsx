import { Button } from "@/components/ui/button";

interface Props {
  carType: "new car" | "used car";
  setCarType: (type: "new car" | "used car") => void;
}

const CarTypeSwitcher: React.FC<Props> = ({ carType, setCarType }) => {
  return (
    <div className="flex gap-3">
      {(["new car", "used car"] as const).map((type) => {
        const isSelected = carType === type;
        return (
          <Button
            key={type}
            variant={isSelected ? "default" : "outline"}
            className={`flex-1 py-2 rounded-lg ${
              isSelected ? "bg-orange-500 text-white hover:bg-orange-600" : ""
            }`}
            onClick={() => setCarType(type)}
          >
            {type === "new car" ? "New Car" : "Used Car"}
          </Button>
        );
      })}
    </div>
  );
};

export default CarTypeSwitcher;
