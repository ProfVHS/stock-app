import React, { useState } from "react";
import cryptoList from "../shared/crypto_list.json";

export default function SelectCryptoBox() {
  const [inputValue, setInputValue] = useState<string>();
  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <span className="font-bold text-xl opacity-80">
        Choose a cryptocurrency that u want to check.
      </span>
      <div>
        <input
          list="crypto"
          placeholder="Cryptocurrency name"
          className="py-1 px-2 box-border outline-none outline-offset-[-1px] focus:outline-green-400"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-green-400 py-1 px-2">Check &#8594;</button>
      </div>
      <datalist id="crypto">
        {cryptoList.map((item) => (
          <option>{item.name}</option>
        ))}
      </datalist>
    </div>
  );
}
