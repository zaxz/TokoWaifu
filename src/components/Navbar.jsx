import React, { useState } from "react";
import Tokowaifu from '../assets/tokowaifu.png';
import { Link } from "react-router-dom";

function Navbar() {
  const alertCart = () => {
    alert("belom jadi, pusing bet bikin fitur keranjang elah");
  };
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav className="z-50 bg-[#f70066] sticky top-0 left-0 right-0">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={alertCart}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-slate-300 hover:scale-95 transition">
              <i className="text-2xl fa-solid fa-cart-shopping"></i>
            </button>
          </div>
          <div className="flex-1 flex items-center mx-2 justify-start sm:justify-between">

            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-12 w-auto"
                src={Tokowaifu}
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-12 w-auto"
                src={Tokowaifu}
                alt="Workflow"
              />
            </div>
        </div>
      </div>
    </div>
</nav>
</>
);
}

export default Navbar;