export default function ComparisonCard({ car1, car2 }: any) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white min-w-[350px]">

      <div className="grid grid-cols-2 gap-2 relative">
        <img src={car1.image} className="w-full h-24 object-contain" />
        <img src={car2.image} className="w-full h-24 object-contain" />

        <div className="absolute left-1/2 top-1/2 bg-black text-white px-2 py-1 rounded-full -translate-x-1/2 -translate-y-1/2">
          VS
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2">{car1.name} &nbsp; | &nbsp; {car2.name}</p>
      <h3 className="font-bold">{car1.price} — {car2.price}</h3>

      <button className="mt-3 border border-orange-500 text-orange-500 rounded px-3 py-1">
        {car1.name} vs {car2.name}
      </button>
    </div>
  );
}
