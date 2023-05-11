import { useState } from "react";
import appLogo from "./assets/currencyIcon.svg";
import SelectCryptoBox from "./components/SelectCryptoBox";
import { StockBox } from "./components/StockBox";

function App() {
  const [selectedCrypto, setSelectedCrypto] = useState<string>();
  return (
    <>
      <div className="border-b-2 bg-white py-2 px-6 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <img className="w-10" src={appLogo} />
          <span className="text-xl font-bold text-gray-900">Stock App</span>
        </div>
        <select className="p-1 box-content">
          <option>USD</option>
          <option>EUR</option>
          <option>PLN</option>
        </select>
      </div>

      {!selectedCrypto && <SelectCryptoBox selectCrypto={setSelectedCrypto} />}
      {selectedCrypto && (
        <StockBox selectedCrypto={selectedCrypto} market="USD" />
      )}
    </>
  );
}

export default App;
