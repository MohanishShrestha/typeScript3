import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Game from "./pages/Game.tsx";
import Game2 from "./pages/Game2.tsx";
import MemoryGame from "./pages/MemoryGame.tsx";
import Test from "./navbar/Test.tsx";
import CarCarousel from "./component/Scroll/CarCarousel.tsx";
import CompareCarsSection from "./component/Scroll/CompareCarsSection.tsx";
import CompareContainer from "./component/Scroll/compareko/CompareContainer.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <App /> */}
    {/* <Game2 /> */}
    {/* <MemoryGame /> */}
    {/* <Test/> */}
    {/* <CarCarousel/> */}
    <CompareCarsSection/>
    {/* <CompareContainer /> */}

  </>
);
