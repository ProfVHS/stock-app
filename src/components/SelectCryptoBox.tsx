import React, { useState } from "react";
import bitcoinImage from "../assets/undraw_bitcoin.svg";
import cryptoList from "../shared/crypto_list.json";

interface SelectCryptoBoxProps {
  selectCrypto: (crypto: string) => void;
}

export default function SelectCryptoBox({
  selectCrypto,
}: SelectCryptoBoxProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = () => {
    if (cryptoList.filter((item) => item.name === inputValue).length < 1)
      return;
    selectCrypto(inputValue);
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-8">
      <img className="w-1/4" src={bitcoinImage} />
      <span className="font-bold text-2xl opacity-80 text-center">
        Choose a cryptocurrency that u want to check.
      </span>
      <div>
        <input
          list="crypto"
          placeholder="Cryptocurrency name"
          className="py-1 px-2 box-border outline-none outline-offset-[-1px] focus:outline-green-400 ease-in-out duration-200"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-green-400 py-1 px-2 hover:bg-green-300 ease-in-out duration-200"
          onClick={handleClick}
        >
          Check &#8594;
        </button>
      </div>
      <datalist id="crypto">
        {cryptoList.map((item, i) => (
          <option key={i}>{item.name}</option>
        ))}
      </datalist>
    </div>
  );
}
