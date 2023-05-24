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
  const [lastData, setLastData] = useState<cryptoData>({
    date: new Date(),
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  });

  const todayDateIso = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/ohlc?vs_currency=${market.toLocaleLowerCase()}&days=max`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const newLastData: cryptoData = {
            date: data[data.length - 2][0],
            open: data[data.length - 2][1],
            high: data[data.length - 2][2],
            low: data[data.length - 2][3],
            close: data[data.length - 2][4],
          };

          setLastData(newLastData);
          setCryptoData(data);
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
        <div className="flex justify-center gap-5 mt-5">
          <Stat name={selectedCrypto} cryptoData={lastData} market={market} />
          <div className="bg-white drop-shadow flex flex-col p-4 pr-10 justify-center items-start rounded">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={"stockChart"}
              options={{
                chart: {
                  height: 700,
                },
                title: {
                  text: selectedCrypto.toUpperCase(),
                },
                plotOptions: {
                  series: {
                    showInLegend: true,
                    accessibility: {
                      exposeAsGroupOnly: true,
                    },
                  },
                },
                legend: {
                  enabled: true,
                },
                yAxis: [
                  {
                    height: "80%",
                  },
                  {
                    top: "80%",
                    height: "20%",
                  },
                ],

                series: [
                  {
                    type: "candlestick",
                    id: "aapl",
                    name: "lastSearch",
                    data: cryptoData,
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
