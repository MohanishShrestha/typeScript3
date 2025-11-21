// src/data/carData.ts

export interface CarModel {
  name: string;
  price: string;
  image: string;
}

export interface BrandData {
  [brand: string]: CarModel[];
}

export const carData: BrandData = {
  Toyota: [
    { name: "Talsor", price: "₹7.21 - 12.06 Lakh", image: "/cars/talsor.png" },
  ],
  Hyundai: [
    { name: "Venue", price: "₹7.90 - 15.69 Lakh", image: "/cars/venue.png" },
    { name: "Creta", price: "₹10.73 - 20.20 Lakh", image: "/cars/creta.png" },
  ],
  Maruti: [
    { name: "FRONX", price: "₹6.85 - 11.98 Lakh", image: "/cars/fronx.png" },
    { name: "Brezza", price: "₹8.26 - 13.01 Lakh", image: "/cars/brezza.png" },
  ],
};
