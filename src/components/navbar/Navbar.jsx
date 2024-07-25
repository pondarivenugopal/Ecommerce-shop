import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/shoppinglogo.png";
import header from "../../assets/header-bg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed shadow-xl z-50 w-full ">
      {/* Upper Navbar */}
      <nav
        className="p-4 px-10 bg-cover bg-center shadow-md space-x-6 justify-end"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
          backgroundColor: "rgb(33, 150, 243)",
        }}
      >
        <div className="container flex justify-between items-center space-x-10">
          <div
            className="flex items-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <div className="text-white text-lg font-semibold ">Shop</div>
          </div>
          <div
            className="hidden md:flex space-x-4 items-center"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-once="true"
          >
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="Login" className="text-white">
              Login
            </Link>
            <Link to="signup" className="text-white">
              signup
            </Link>

            <Link to="cart" className="text-white">
              <FaShoppingCart />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 w-10/12 bg-pink-300 text-white flex flex-col items-center space-y-2 py-4"
            style={{ zIndex: 10 }}
          >
            <Link to="/" className="block py-2">
              Home
            </Link>
            <Link to="Login" className="block py-2">
              Login
            </Link>
            <Link to="/signup" className="block py-2">
              signup
            </Link>

            <Link to="cart" className="block py-2">
              <FaShoppingCart />
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
