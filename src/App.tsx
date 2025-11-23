import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from "./Car";
import CompareDetail from "./component/Scroll/compareko/CompareDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Car />} />
      <Route path="/compare" element={<CompareDetail />} />
    </Routes>
  );
}

export default App;
