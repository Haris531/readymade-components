import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function NavbarFive() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropDownOpen, setDropdownOpen] = useState (false);

    return (
        <>
            <div className="bg-gray-800 text-white">
                <div className="flex justify-end items-center mr-12 px-4 py-2 text-sm">
                    <span>Address: Peshawer</span>
                    <span className='ml-4'>Email: harisahmad@1234.com</span>
                    <span className="ml-4">Phone: 123-456-7890</span>
                </div>
            </div>
            <nav className="bg-white">
                <div className="px-8 py-4 flex justify-center items-center">
                    <div>
                        <a href="#">
                            <img src="" alt="Logo" className="h-8 w-auto" />
                        </a>
                    </div>
                    <ul className="flex space-x-16 text-gray-700 font-medium ml-16 relative">    
                        <li className="relative">
                            <button  onClick={() => setIsDropdownOpen(!isDropdownOpen)}  className="flex items-center hover:text-blue-500 focus:outline-none">
                                Home <FaChevronDown className="ml-1" />
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-32 bg-white rounded-md ">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <a href="#">Subitem 1</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <a href="#">Subitem 2</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className='relative'>
                            <button onClick={() => setDropdownOpen(!dropDownOpen)} className='flex items-center hover:text-blue-500 focus:outline-none'>
                                About <FaChevronDown className="ml-1" />
                            </button>
                            {dropDownOpen && (
                                <ul className='absolute left-0 mt-2 w-32 bg-yellow-100 rounded-md'>
                                    <li className='px-4 py-2 hover:bg-gray-100'>
                                        <a href="#">Subitem 1</a>
                                    </li>
                                      <li className='px-4 py-2 hover:bg-gray-100'>
                                        <a href="#">Subitem 1</a>
                                    </li>
                                </ul>
                            ) }
                        </li>
                        <li><a href="#" className="hover:text-blue-500">Services</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-600">Features</a></li>
                        <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
