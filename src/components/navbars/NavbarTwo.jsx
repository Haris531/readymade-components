import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function NavbarTwo() {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="bg-white shadow-md px-4 md:px-8 py-4 relative">
      <div className="flex items-center justify-between">
        <div>
          <a href="#">
            <img src="" alt="Logo" className="h-8 w-auto" />
          </a>
        </div>
        <nav className="hidden md:flex text-sm lg:text-base gap-6 lg:gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
          <a href="#" className="hover:text-blue-600">Features</a>
        </nav>
        <div className="relative hidden sm:flex items-center ml-4">
          <input type="text" placeholder="Search..."
            className="px-2 py-2 w-36 sm:w-48 md:w-56 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black" />
          <CiSearch className="absolute right-3 text-gray-500 text-xl cursor-pointer" />
        </div>
        <div className="md:hidden ml-4">
          <button onClick={handleShowNav}>
            {showNav ? <ImCross size={20} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>
      <div className={`${showNav ? "flex" : "hidden"} flex-col md:hidden gap-2 bg-white w-full shadow-md absolute left-0 top-full mt-2 px-4 py-2 transition-all duration-300`}>
        <a href="#" className="hover:text-blue-600 border-b border-gray-300 py-2">Home</a>
        <a href="#" className="hover:text-blue-600 border-b border-gray-300 py-2">About</a>
        <a href="#" className="hover:text-blue-600 border-b border-gray-300 py-2">Services</a>
        <a href="#" className="hover:text-blue-600 border-b border-gray-300 py-2">Contact</a>
        <a href="#" className="hover:text-blue-600 border-b border-gray-300 py-2">Features</a>

        <div className="relative mt-2 flex items-center">
          <input type="text" placeholder="Search..."
            className="px-4 py-2 w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black" />
          <CiSearch className="absolute right-3 text-gray-500 text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
