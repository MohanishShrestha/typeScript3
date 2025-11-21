// compareData.ts

export interface CarModel {
  name: string;
  price: string;
  image: string;
}

export interface BrandData {
  [brand: string]: CarModel[];
}

export const carDatabase: BrandData = {
  Hyundai: [
    { name: "Venue", price: "₹7.90 - 15.69 Lakh", image: "/car1.jpg" },
    { name: "Creta", price: "₹10.73 - 20.20 Lakh", image: "/car2.jpg" },
  ],
  Maruti: [
    { name: "FRONX", price: "₹6.85 - 11.98 Lakh", image: "/car3.jpg" },
    { name: "Brezza", price: "₹8.26 - 13.01 Lakh", image: "/corolla.JPG" },
  ],
  Toyota: [
    { name: "Talsor", price: "₹7.21 - 12.06 Lakh", image: "/gtr.JPG" },
  ],
};

export interface CarCompare {
  id: string;
  brand1: string;
  car1: string;
  price1: string;
  image1: string;
  brand2: string;
  car2: string;
  price2: string;
  image2: string;
}
