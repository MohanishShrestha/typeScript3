import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Car from "./Car.tsx";
import Test from "./navbar/Test.tsx";
import Footer from "./component/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Test />
    <App />
    {/* <Game2 /> */}
    {/* <MemoryGame /> */}
    {/* <Test/> */}
    {/* <CarCarousel/> */}
    {/* <Car /> */}
    <Footer />
  </BrowserRouter>
);
