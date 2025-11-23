import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarSearchCard from "./component/form/CarSearchCard";
import CarSearchCard2 from "./component/form/CarSearchCard2";
import CarSearchCard3 from "./component/carSearch2/CarSearchCard3";
import Navbar from "./component/Navbar";
import Test from "./navbar/Test";
import CarGrid from "./component/cargrid/CarGrid";
import Background from "./component/carSearch2/Background";
import CompareCarsSection from "./component/Scroll/compareko/CompareCarsSection";
import CompareDetail from "./component/Scroll/compareko/CompareDetail";

function Car() {
  return (
    <>
      

      <Background />

      <CarGrid />

      <CompareCarsSection />
      {/* <CompareDetail /> */}
    </>
  );
}

export default Car;
