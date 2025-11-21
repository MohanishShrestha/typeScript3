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

function App() {
  return (
    <>
      <Test />

      <Background />

      <CarSearchCard2 />

      <CarGrid />
    </>
  );
}

export default App;
