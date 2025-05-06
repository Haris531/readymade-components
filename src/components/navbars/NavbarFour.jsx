import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

export default function NavbarFour() {
    return (
        <>
            <nav className='bg-blue-300 px-6 py-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <a href="#">
                            <img src="" alt="logo" className='h-8 w-auto' />
                        </a>
                    </div>
                    <div className='flex space-x-8 '>
                        <div className='flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded'>
                            <IoMdHome className='text-gray-700 text-xl hover:text-blue-600' />
                            <a href="" className='text-gray-700 font-medium hover:text-blue-600'>Home</a>
                        </div>
                        <div className='flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded'>
                            <MdDashboardCustomize className='text-gray-700 text-xl hover:text-blue-600' />
                            <a href="" className='text-gray-700 font-medium hover:text-blue-600'>Dashboard</a>
                        </div>
                        <div className='flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded'>
                            <FcAbout className='text-gray-700 text-xl hover:text-blue-600' />
                            <a href="" className='text-gray-700 font-medium hover:text-blue-600'>About</a>
                        </div>
                        <div className='flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded'>
                            <CgProfile className='text-gray-700 text-xl hover:text-blue-600' />
                            <a href="" className='text-gray-700 font-medium hover:text-blue-600'>Profile</a>
                        </div>
                        <div className='flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded'>
                            <IoMdSettings className='text-gray-700 text-xl hover:text-blue-600' />
                            <a href="" className='text-gray-700 font-medium hover:text-blue-600'>Setting</a>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2  text-sm font-semibold text-black border border-gray-500 hover:bg-blue-50">Login</button>
                        <button className="px-4 py-2 text-sm font-semibold text-black border border-gray-500 hover:bg-gray-200">Sign up</button>
                    </div>

                </div>
            </nav>
        </>
    )
}
