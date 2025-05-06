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
          <div className="hidden sm:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <a href="#" className="hover:text-blue-600">Features</a>
            <a href="#" className="hover:text-blue-600">Blog</a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-sm font-semibold text-black border border-gray-500 rounded-full hover:bg-blue-50">Login</button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">Sign up</button>
          </div>
          <div className='button sm:hidden'>
            <h1 onClick={handleShowNav}>
              {showNav ? <ImCross /> : <GiHamburgerMenu />}
            </h1>
          </div>
        </div>
        <div className={`${showNav ? "flex flex-col items-center" : "hidden"} absolute right-0 mr-2 text-black`}>
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
        </div>
      </header>

    </>
  )
}
