import React from "react";

interface StatProps {
  name: string;
  low: number;
  high: number;
}

export function Stat({ name, low, high }: StatProps) {
  return (
    <div className=" w-60 h-32 bg-white drop-shadow flex flex-col p-4 justify-center items-start rounded">
      <span className="text">{name.toLocaleUpperCase()}</span>
      <span className="font-bold text-3xl">
        {low} <span className="text-base opacity-80">PLN</span>
      </span>
      <div className="rounded px-2 font-bold text-green-900 bg-green-300">
        20%
      </div>
    </div>
  );
}
