import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
      <Select value={budget} onValueChange={setBudget}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Budget" />
        </SelectTrigger>
        <SelectContent>
          {budgets.map((b) => (
            <SelectItem value={b} key={b}>
              {b}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {carType === "new car" && (
        <Select
          value={vehicleType}
          onValueChange={setVehicleType}
          disabled={!budget}
        >
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Vehicle Type" />
          </SelectTrigger>
          <SelectContent>
            {vehicleTypes.map((type) => (
              <SelectItem value={type} key={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default BudgetSelector;
