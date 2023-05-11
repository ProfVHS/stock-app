import React, { useEffect, useState } from "react";
import Loading from "../assets/spinnerCircle.svg";
import { Stat } from "./Stat";

const apiKey = import.meta.env.VITE_SOME_KEY;

interface StockBoxProps {
  selectedCrypto: string;
  market: string;
}

export function StockBox({ selectedCrypto, market }: StockBoxProps) {
  const [stockData, setStockData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) =>
          setStockData(data["Time Series (Digital Currency Daily)"])
        );
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <>
      {!stockData && (
        <div className="flex justify-center items-center mt-20">
          <img className="w-10" src={Loading} />
        </div>
      )}
      {stockData && (
        <div className="flex justify-center">
          <Stat name={selectedCrypto} low={113613.46} high={113613.46} />
        </div>
      )}
    </>
  );
}
