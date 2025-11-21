import React, { useEffect, useRef, useState, type JSX } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories, sampleCars } from "./Cardata";


export default function CarCarousel(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const onPrev = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: -Math.round(width * 0.8),
      behavior: "smooth",
    });
  };

  const onNext = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: Math.round(width * 0.8),
      behavior: "smooth",
    });
  };

  // const handleTabChange = (tab: string) => {
    
  //   setActiveTab(tab);
  //   if (!sliderRef.current) return;
  //   sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
  // }

  useEffect(() => {
  if (!sliderRef.current) return;

  sliderRef.current.scrollTo({
    left: 0,
    behavior: "smooth",
  });
}, [activeTab]);

  const cars = sampleCars[activeTab] ?? [];
  console.log(activeTab)

  return (
    <div className="p-6">
      <Card className="rounded-xl shadow-lg border">
        <CardHeader>
          <div className="flex items-center justify-between mr-4 ">
            <CardTitle className="text-lg md:text-3xl font-semibold">
              Most searched cars
            </CardTitle>

            {/* Desktop and Tabs ma visible hune */}
            <nav className="hidden md:flex items-center gap-10 ml-6">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  className={`text-sm pb-2 border-b-2 ${
                    activeTab === c
                      ? "border-orange-500 text-orange-600 font-semibold"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </nav>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="relative">
            {/* Slider area */}
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-4"
                aria-label="car slider"
              >
                {cars.length === 0 ? (
                  <div className="text-gray-500 italic px-4">
                    No cars for this category yet.
                  </div>
                ) : (
                  
                  cars.map((car,i) => (
                    
                    <article
                      key={i}
                      className="min-w-[260px] md:min-w-[300px] snap-start bg-white rounded-lg shadow-sm border"
                    >
                      
                      {/* image area */}
                      <div className="relative h-36 md:h-44 bg-gray-100 rounded-t-lg overflow-hidden">
                        {/* tag (optional) */}
                        {car.tag && (
                          <span className="absolute left-3 top-3 bg-white text-xs px-2 py-1 rounded-full shadow text-gray-700 z-10">
                            {car.tag}
                          </span>
                        )}
                        

                        <img
                          src={car.image}
                          alt={car.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* card body */}
                      <div className="p-4">
                        <h3 className="text-sm md:text-base font-medium text-gray-800 ">
                          {car.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                          {car.price}
                        </p>

                        <div className="mt-4">
                          <Button
                            variant="outline"
                            className="w-full text-sm text-orange-400 border-orange-300 hover:bg-orange-100 "
                          >
                            {car.cta ?? "View Offers"}
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            {/* Prev / Next buttons */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
              <Button
                variant="default"
                size="icon"
                className="p-2 bg-white border border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white"
                onClick={onNext}
                aria-label="Next cars"
              >
                <ChevronRight size={18} />
              </Button>
            </div>

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Button
                variant="default"
                size="icon"
                className="p-2  bg-white border border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white"
                onClick={onPrev}
                aria-label="Previous cars"
              >
                <ChevronLeft size={18} />
              </Button>
            </div>
          </div>

          {/* bottom row: view all link */}
          <div className="flex items-center justify-between mt-6 px-4">
            <a
              href="#"
              className="text-sm text-orange-600 font-medium flex items-center gap-2"
            >
              View All SUV Cars
            </a>

            {/* mobile tabs ma visible hune  */}
            <div className="md:hidden flex gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  className={`text-xs px-3 py-1 rounded-full ${
                    activeTab === c
                      ? "bg-orange-100 text-orange-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
