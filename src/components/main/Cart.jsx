import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

export default function Cart(props) {
  return (
    <div className="flex justify-between pt-10 ">
      {props.cartData.map((item, index) => (
        <div
          key={index}
          className="w-72 h-[460px] bg-primar text-center border-2 rounded-lg border-blue-600 "
        >
          <img className="m-auto" src={item.img} alt="" />
          <h1 className="text-lg font-bold ">{item.title}</h1>
          <p className="text-stone-400 text-[12px]">{item.model}</p>
          <p className="m-3 text-green-400 text-[12px] pb-2">
            Ви економете бл. 4 590 USD{" "}
          </p>

          <PrimaryButton className="py-2">Надіслати запит</PrimaryButton>
          <h2 className="font-bold text-[11px] pt-2">
            Получить Варианты в мессенджер
          </h2>

          {/* social media */}
          <div className="text-center flex justify-center ">
            <BsInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 h-8 rounded-lg text-red-100 m-3" />
            <BsTelegram className="text-blue-600 bg-gradient-to-r from-cyan-300 to-blue-200 w-8 h-8 rounded-lg m-3 " />
          </div>
        </div>
      ))}
    </div>
  );
}
