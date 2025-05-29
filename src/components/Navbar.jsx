import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Fa0 } from "react-icons/fa6";
import { MdOutlineRestaurant } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-[#1C1A27] text-black dark:text-white py-4 px-5 lg:px-14 flex items-center justify-between transition-colors duration-300">
      <div className="flex items-center gap-1.5 text-2xl font-bold text-orange-500">
        <MdOutlineRestaurant />
        <span>ForkIt</span>
      </div>
      <nav className="hidden md:flex space-x-8 font-medium">
        <a href="/" className=" hover:bg-orange-500 transition py-2 px-3 rounded-full">Home</a>
        <a href="/" className=" hover:bg-orange-500 transition py-2 px-3 rounded-full">Restaurants</a>
        <a href="/" className=" hover:bg-orange-500 transition py-2 px-3 rounded-full"> Foods</a>
        <a href="/" className=" hover:bg-orange-500 transition py-2 px-3 rounded-full">Offers</a>
        <a href="/" className=" hover:bg-orange-500 transition py-2 px-3 rounded-full">Service</a>
      </nav>

      <div className=" flex items-center space-x-4">
        <ThemeToggle/>
        <button className="hidden md:flex  text-orange-400 text-xl"><FaShoppingCart/></button>
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-4 rounded-full text-sm font-medium">Register Now</button>
      </div>
    </header>
  );
};

export default Navbar;
