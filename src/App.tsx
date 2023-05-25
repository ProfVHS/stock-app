import { useEffect, useState } from "react";
import appLogo from "./assets/currencyIcon.svg";
import SelectCryptoBox from "./components/SelectCryptoBox";
import { StockBox } from "./components/StockBox";

function App() {
  const [selectedCrypto, setSelectedCrypto] = useState<string | undefined>();
  const [selectedMarket, setSelectedMarket] = useState<string>("USD");

  return (
    <>
      <div className="border-b-2 bg-white py-2 px-6 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <img className="w-10" src={appLogo} />
          <span className="text-xl font-bold text-gray-900">Stock App</span>
        </div>
        <select
          className="p-1 box-content"
          onChange={(e) => setSelectedMarket(e.target.value)}
          disabled={selectedCrypto ? true : false}
        >
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
          <option value={"PLN"}>PLN</option>
        </select>
      </div>

      {!selectedCrypto && <SelectCryptoBox selectCrypto={setSelectedCrypto} />}
      {selectedCrypto && (
        <StockBox selectedCrypto={selectedCrypto} market={selectedMarket} />
      )}
    </>
  );
}

export default App;
