import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function NavbarOne() {
  const [showNav, setShowNav] = useState(false)
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <header className='bg-white shadow-md px-8 py-4'>
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <img src="" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex gap-5 lg:gap-7 text-gray-700 font-medium text-sm lg:text-base">
            <a href="#" className="hover:text-blue-600 ">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <a href="#" className="hover:text-blue-600">Features</a>
            <a href="#" className="hover:text-blue-600">Blog</a>
          </div>
          <div className="flex items-center space-x-4 ">
            <button className="lg:px-4 lg:py-2 px-4 py-1.5 text-xs lg:text-sm font-medium lg:font-semibold text-black border border-gray-500 rounded-2xl hover:bg-blue-50">Login</button>
            <button className="lg:px-4 lg:py-2 px-4 py-1.5 text-xs lg:text-sm font-medium lg:font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">Sign up</button>
          </div>
          <div className='button sm:hidden'>
            <h1 onClick={handleShowNav}>
              {showNav ? <ImCross /> : <GiHamburgerMenu />}
            </h1>
          </div>
        </div>
          <div className={`${showNav ? "flex" : "hidden"} transition-all duration-300 flex-col items-start gap-2 bg-white w-full shadow-md absolute right-0 text-black`}>
            <a href="#" className="hover:text-blue-600 border-b border-slate-500 w-full px-2">Home</a>
            <a href="#" className="hover:text-blue-600 border-b border-slate-500 w-full px-2">About</a>
            <a href="#" className="hover:text-blue-600 border-b border-slate-500 w-full px-2">Services</a>
            <a href="#" className="hover:text-blue-600 border-b border-slate-500 w-full px-2">Contact</a>
            <a href="#" className="hover:text-blue-600 border-b border-slate-500 w-full px-2">Features</a>
            <a href="#" className="hover:text-blue-600 px-2">Blog</a>
          </div>
      </header>

    </>
  )
}
