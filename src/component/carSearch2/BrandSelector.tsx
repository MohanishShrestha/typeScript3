import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  brand: string;
  setBrand: (v: string) => void;
  model: string;
  setModel: (v: string) => void;
  brands: string[];
  models: string[];
  carType: "new car" | "used car";
}

const BrandSelector: React.FC<Props> = ({
  brand,
  setBrand,
  model,
  setModel,
  brands,
  models,
  carType,
}) => {
  return (
    <div className="space-y-4">
      <Select
        value={brand}
        onValueChange={(val) => {
          setBrand(val);
          setModel("");
        }}
      >
        <SelectTrigger className="w-72">
          <SelectValue placeholder="Select Brand" />
        </SelectTrigger>
        <SelectContent>
          {brands.map((b) => (
            <SelectItem value={b} key={b}>
              {b}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {carType === "new car" && (
        <Select value={model} onValueChange={setModel} disabled={!brand}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Select Model" />
          </SelectTrigger>
          <SelectContent>
            {models.map((m) => (
              <SelectItem value={m} key={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default BrandSelector;
