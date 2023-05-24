import React, { useEffect, useState } from "react";
import Loading from "../assets/spinnerCircle.svg";
import { Stat } from "./Stat";
import { cryptoData } from "../shared/types";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const apiKey = import.meta.env.VITE_SOME_KEY;

interface StockBoxProps {
  selectedCrypto: string;
  market: string;
}

export function StockBox({ selectedCrypto, market }: StockBoxProps) {
  const [stockData, setStockData] = useState();
  const [cryptoData, setCryptoData] = useState<cryptoData[]>();

  const todayDateIso = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/ohlc?vs_currency=${market.toLocaleLowerCase()}&days=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };

    fetchData().catch(console.error);
  }, []);

  console.log(cryptoData);
  return (
    <>
      {!cryptoData && (
        <div className="flex justify-center items-center mt-20">
          <img className="w-10" src={Loading} />
        </div>
      )}
      {cryptoData && (
        <div className="flex justify-center">
          {/* <Stat name={selectedCrypto} cryptoData={cryptoData} market={market} /> */}
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
          />
        </div>
      )}
    </>
  );
}
