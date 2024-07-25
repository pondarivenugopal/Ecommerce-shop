import React from "react";
import shoppinglogo from "../../assets/shoppinglogo.png";
import footerimg from "../../assets/footer-bg.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

const Fotter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{ backgroundImage: `url(${footerimg})` }}
      className="bg-cover  flex justify-center"
    >
      <div>
        <div data-aos="zoom-in-down" className="flex flex-col items-center ">
          <img src={shoppinglogo} alt=".." className="h-20 w-20 mt-32" />
          <p className="font-bold text-6lx sm:text-3xl md:text-5xl">Shop</p>
          <p className="font-semibold text-xl text-black m-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="flex justify-center sm:mt-2 mt-5  gap-10 text-back text-4xl"
        >
          <FaFacebook />
          <FaInstagramSquare />
          <FaLinkedin />
        </div>
        <div
          data-aos="zoom-in-up"
          className="text-center mt-2 text-white text-2xl mb-10 p-10"
        >
          <p>Copyrights &copy; 2024 venugopal</p>
          <p>venulucky1999@gmail.com</p>
        </div>
        <div className="flex justify-center mb-10">
          <button
            onClick={scrollToTop}
            className="bg-white/95 hover:bg-balck-700 hover:bg-slate-900 hover:text-white text-back font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
          >
           <RxDoubleArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
