import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
  mode: "budget" | "brand";
  setMode: (v: "budget" | "brand") => void;
  carType: "new car" | "used car";
}

const ModeSelector: React.FC<Props> = ({ mode, setMode, carType }) => {
  return (
    <RadioGroup
      value={mode}
      onValueChange={setMode}
      className="flex gap-6"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="budget" id="budget" />
        <Label htmlFor="budget">By Budget</Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="brand" id="brand" />
        <Label htmlFor="brand">
          {carType === "new car" ? "By Brand" : "By Model"}
        </Label>
      </div>
    </RadioGroup>
  );
};

export default ModeSelector;
