import React from "react";

type Car = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const cars: Car[] = [
  {
    name: "Nissan GT-R",
    description: "High-performance sports car with twin-turbo V6 .",
    price: "$113,540",
    image: "/gtr.JPG",
  },
  {
    name: "Tesla Model 3",
    description: "Electric sedan with autopilot and long range.",
    price: "$42,990",
    image: "/model3.JPG",
  },
  {
    name: "Toyota Corolla",
    description: "Reliable compact car with great fuel efficiency.",
    price: "$21,900",
    image: "/corolla.JPG",
  },
  {
    name: "BMW X5",
    description: "Luxury SUV with powerful engine and interior.",
    price: "$65,700",
    image: "/x5.JPG",
  },
  {
    name: "Ford Mustang",
    description: "Iconic muscle car with aggressive styling.",
    price: "$30,920",
    image: "/mustang.JPG",
  },
  {
    name: "Hyundai Tucson",
    description: "Affordable SUV with modern tech and comfort.",
    price: "$28,500",
    image: "/tucson.JPG",
  },
];

const CarGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Cars
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {car.name}
              </h3>
              <p className="text-gray-600 mt-2">{car.description}</p>
              <p className="text-orange-600 font-bold mt-4">{car.price}</p>
            </div>
            <div className="flex justify-center mb-4">
              <button className="bg-white text-orange-500 border border-orange-500 px-10 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
                View More details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg  hover:bg-orange-700 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default CarGrid;
