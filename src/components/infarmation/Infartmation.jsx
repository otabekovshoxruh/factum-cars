import React from "react";
import Certif from "../../img/certifcat.png"
import remout from "../../img/remout.png";

export default function Infartmation() {
  return (
    <div>
      <div className="flex grid-cols-2 justify-between mt-6 mb-6">
        <div className="flex text-sm items-center text-stone-400">
             <img src={Certif} alt="" />
             <p className="w-44 ml-3">FACTUM - Ваш надійний імпортер з автоаукціонів у США</p>
        </div>
        <div className="flex text-sm items-center text-stone-400">
          <img src={remout} alt="" />
          <p className="w-40 ml-3">Без посередників та непередбачуваних витрат</p>
        </div>
      </div>
    </div>
  );
}
