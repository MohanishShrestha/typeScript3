type CarItem = {
  id: string;
  title: string;
  price: string;
  tag?: string;
  image: string;
  cta?: string;
};

export const categories = ["SUV", "Hatchback", "Sedan", "MUV", "Luxury"];

export const sampleCars: Record<string, CarItem[]> = {
  SUV: [
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
    },
  ],
  Hatchback: [
    
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
    },
  ], 
  Sedan: [
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
    },
  ],
  MUV: [

     {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
   
  ],
  Luxury: [
    
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      tag: "LAUNCHED ON : NOV 4, 2025",
    },
  ],
};
