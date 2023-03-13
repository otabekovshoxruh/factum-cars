import React from "react";
import tesla from "../../img/tesla.png";
import ford from "../../img/ford.png";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";

import { motion } from "framer-motion";

const slide = [tesla, ford];

export default function BanerRight() {
  return (
    <div className="items-center flex ml-64 mt-8">
      <motion.div animate={{ x: -30, y: -15 }}>
        <div className=" w-[350px] h-[530px]  rounded-bl-[40px] rounded-tr-[40px] z-10 shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <motion.div animate={{ x:-220, y:120}}>
          <Carousel className="w-[750px] h-[430px]">
          <Carousel.Item>
            <img
              className="d-block w-100 only:"
              src={slide[1]}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide[0]} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        </motion.div>
          
        </div>
        
      </motion.div>
    </div>
  );
}
