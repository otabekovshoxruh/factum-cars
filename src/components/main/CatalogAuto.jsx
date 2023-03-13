import React from "react";
import Cart from "./Cart";
import cartData from "./cartData";
import Carousel from 'react-bootstrap/Carousel';

export default function CatalogAuto(props) {
  return (
    <section className="h-[99vh] w-[1300px] m-auto">
      <h1 className="text-4xl font-bold leading-normal text-center mt-7">
        Каталог авто
      </h1>
          {/* main card */}
        
          

    <Carousel variant="dark" className="h-[500px] w-[1300px] ">
      <Carousel.Item>
       <Cart cartData={cartData}/>
      </Carousel.Item>
      <Carousel.Item>
       <Cart cartData={cartData}/>
      </Carousel.Item>
      <Carousel.Item>
       <Cart cartData={cartData}/>
      </Carousel.Item>
    </Carousel>


    </section>
  );
}
