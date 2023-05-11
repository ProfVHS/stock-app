import React from "react";

export default function Stock() {
  return (
    <div className=" w-60 h-32 bg-white drop-shadow-lg flex flex-col p-4 justify-center items-start rounded-sm">
      <span className="text-sm">BITCOIN</span>
      <span className="font-bold text-3xl">
        113 613,46 <span className="text-base opacity-80">PLN</span>
      </span>
      <span className="opacity-60 text-green-700">20%</span>
    </div>
  );
}
