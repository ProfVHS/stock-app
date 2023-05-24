import React, { useState } from "react";
import bitcoinImage from "../assets/undraw_bitcoin.svg";
import cryptoList from "../shared/crypto_list.json";
import { useForm, SubmitHandler } from "react-hook-form";

interface SelectCryptoBoxProps {
  selectCrypto: (crypto: string | undefined) => void;
}

export default function SelectCryptoBox({
  selectCrypto,
}: SelectCryptoBoxProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = () => {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ name: string }>();

  const onSubmit: SubmitHandler<{ name: string }> = (data) => {
    console.log(data);

    if (
      cryptoList.filter(
        (item) =>
          item.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      ).length < 1
    )
      return;

    const cryptoID = cryptoList.find(
      (item) => item.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    )?.id;
    selectCrypto(cryptoID);

    console.log(cryptoID);
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-8">
      <img className="w-1/4" src={bitcoinImage} />
      <span className="font-bold text-2xl opacity-80 text-center">
        Choose a cryptocurrency that u want to check.
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          list="crypto"
          placeholder="Cryptocurrency name"
          className="py-1 px-2 box-border outline-none outline-offset-[-1px] focus:outline-green-400 ease-in-out duration-200"
          {...register("name")}
        />
        <datalist id="crypto">
          {cryptoList.map((item, i) => (
            <option key={i}>{item.name}</option>
          ))}
        </datalist>
        <button
          type={"submit"}
          className="bg-green-400 py-1 px-2 hover:bg-green-300 ease-in-out duration-200"
        >
          Check &#8594;
        </button>
      </form>
    </div>
  );
}
