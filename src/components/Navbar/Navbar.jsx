import React from 'react'

// import link
import { Link } from "react-router-dom";

// import page
import contact from "../../page/contact";

// import logo
import logo from "../../img/logo.svg";




  


export default function Navbar() {
  return (
    <div>
        {/* navbar */}
        <div className="flex justify-between items-center sticky max-w-[1366px] mx-auto ">
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav className="text-center h-9 items-center flex border-x-2 border-b-neutral-800 border-solid  ">
            <a href="# " className="mx-3 hover:text-blue-500 duration-300">
              Каталог авто
            </a>

            <a href="# " className="mx-3 hover:text-blue-500 duration-300">
              Вигоди
            </a>

            <a href="# " className="mx-3 hover:text-blue-500 duration-300">
              Ціни
            </a>

            <a href="# " className="mx-3 hover:text-blue-500 duration-300">
              Про компанію
            </a>

            <a href="# " className="mx-3 hover:text-blue-500 duration-300">
              Ризики та гарантії
            </a>

            <a href="# " className="mx-4 hover:text-blue-500 duration-300">
              Відгуки
            </a>

            {/*Another bage */}
            <Link className="mx-4 hover:text-blue-500 duration-300" to={contact}>
              Контакти
            </Link>
          </nav>

          {/* work time */}
          <div className="text-center pr-2 border-r-2 border-b-neutral-800 border-solid  ">
            <p className="text-blue-500">Київ. Дніпро. Одеса</p>
            <p className="text-gray-300">
              {" "}
              <b>Час роботи</b>{" "}
            </p>
            <p>ПН-СБ з 9:00 до 19:00</p>
          </div>
          {/* coll number */}
          <div className="text-center ">
            <h1 className="text-2xl">
              <b>0 800 331 680</b>{" "}
            </h1>
            <p className="border-b-2 border-b-red-600 text-red-700 border-dotted">
              Замовити дзвінок
            </p>
          </div>
        </div>
    </div>
  )
}
