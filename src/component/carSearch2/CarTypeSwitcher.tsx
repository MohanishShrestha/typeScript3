import { Button } from "@/components/ui/button";

interface Props {
  carType: "new car" | "used car";
  setCarType: (type: "new car" | "used car") => void;
}

const CarTypeSwitcher: React.FC<Props> = ({ carType, setCarType }) => {
  return (
    <div className="flex gap-3">
      {(["new car", "used car"] as const).map((type) => (
        <Button
          key={type}
          variant={carType === type ? "default" : "outline"}
          className="flex-1 py-2 rounded-lg"
          onClick={() => setCarType(type)}
        >
          {type === "new car" ? "New Car" : "Used Car"}
        </Button>
      ))}
    </div>
  );
};

export default CarTypeSwitcher;
