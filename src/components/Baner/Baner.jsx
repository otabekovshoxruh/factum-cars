import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/Secondarybutton";
import Infartmation from "../infarmation/Infartmation";
import BanerRight from "./BanerRight";
import { motion } from 'framer-motion'

export default function Baner() {
  return (
    
        <section className="bg-primar ">
      {/* banner */}
      <div className="grid grid-cols-2 max-w-[1366px] mx-auto pt-28 m-2 ">
        {/* banner leftx */}
      <motion.div animate={{x:50}}>
        <div className="flex itms-center m-2">
          <div>
            <h1 className="text-4xl font-bold leading-normal">
              Здійсніть безпечну купівлю
            </h1>
            <h1 className="text-4xl font-bold leading-normal">
              авто зі США і{" "}
              <span className="text-blue-500">зекономте до 50%</span>
            </h1>
            <h1 className="text-4xl font-bold leading-normal">
              {" "}
              від середньоринкових цін{" "}
            </h1>
            <h1 className="text-4xl font-bold  leading-normal">в Україні</h1>

            {/* remout end book img  */}
            <Infartmation />

            {/* button */}
            <PrimaryButton>Підібрати авто</PrimaryButton>
            <SecondaryButton>популярні пропозиції</SecondaryButton>
          </div>
        </div>
      </motion.div>
        
        {/* baner right */}
        <div>
          <BanerRight />
        </div>
      </div>
    </section>
  );
}
