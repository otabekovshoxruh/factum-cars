import React from "react";
import Navbar from "../Navbar/Navbar";
import Baner from "../Baner/Baner";

export default function Header() {
  return (
    <header>
      <div className=" mt-3">
        <Navbar />
        <Baner />
      </div>
    </header>
  );
}
