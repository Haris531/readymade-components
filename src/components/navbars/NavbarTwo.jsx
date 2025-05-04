import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function NavbarTwo() {
  return (
    <>
      <header className='bg-white shadow-md px-8 py-4'>
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <img src="" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <a href="#" className="hover:text-blue-600">Features</a>
          </div>
          <div className="relative flex items-center">
            <input type="text" placeholder="Search..."
              className="pr-10 pl-4 py-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-black"/>
            <CiSearch className="absolute right-3 text-gray-500 text-xl cursor-pointer" />
          </div>
        </div>
      </header>

    </>
  )
}
