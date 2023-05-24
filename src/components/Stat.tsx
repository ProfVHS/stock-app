import React from "react";
import { cryptoData } from "../shared/types";

interface StatProps {
  name: string;
  cryptoData: cryptoData;
  market: string;
}

export function Stat({ name, market, cryptoData }: StatProps) {
  const percentchange = (
    ((cryptoData.close - cryptoData.open) * 100) /
    cryptoData.open
  ).toFixed(2);

  const diff = (cryptoData.close - cryptoData.open).toFixed(2);
  return (
    <div className=" min-w-60 h-32 bg-white drop-shadow flex flex-col p-4 pr-10 justify-center items-start rounded">
      <span className="text">{name.toLocaleUpperCase()}</span>
      <span className="font-bold text-3xl">
        {cryptoData.close}
        <span className="text-base opacity-80">{market}</span>
      </span>
      <div className="flex flex-row gap-2 mt-1">
        <div className="rounded px-2 font-bold text-green-900 bg-green-300">
          {percentchange}%
        </div>
        <div className="rounded px-2 font-bold text-green-900 bg-green-300">
          {diff} {market}
        </div>
      </div>
    </div>
  );
}
