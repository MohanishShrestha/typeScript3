import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Car, Feature } from "./Scroll/Cardata";

interface CompareTableProps {
  cars: Car[];
  features: Feature[];
  title?: string;
  capation?: string;
}

export default function CompareTable({
  cars,
  features,
  title,
  capation,
}: CompareTableProps) {
  return (
    <div className="p-9 m-5 shadow-md border rounded-xl bg-white">
      {title && (
        <h2 className="text-xl font-bold mb-4 text-orange-700">{title}</h2>
      )}

      <Table>
        <TableCaption className="text-orange-600">{capation}</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="text-orange-600 p-4">Feature</TableHead>
            {cars.map((car) => (
              <TableHead key={car.model} className="text-orange-600 p-4">
                {car.model}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {features.map((f) => (
            <TableRow key={f.keys}>
              <TableCell className="font-medium p-4">{f.label}</TableCell>

              {cars.map((car, i) => (
                <TableCell key={i}>{car[f.keys]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
