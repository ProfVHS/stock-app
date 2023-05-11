import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border-b-2 bg-white p-2 flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">Stock App</span>
        <select className="p-1 box-content">
          <option>USD</option>
          <option>EUR</option>
          <option>PLN</option>
        </select>
      </div>
    </>
  );
}

export default App;
