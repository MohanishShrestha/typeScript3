import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarSearchCard from "./component/form/CarSearchCard";
import CarSearchCard2 from "./component/form/CarSearchCard2";
import CarSearchCard3 from "./component/carSearch2/CarSearchCard3";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <div className="p-10 flex justify-center bg-purple-200 ">
        <CarSearchCard3 />
      </div>
    </>
  );
}

export default App;
