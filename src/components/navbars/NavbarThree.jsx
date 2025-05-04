import React from 'react'

export default function NavbarThree() {
    return (
        <>
            <div className="bg-gray-800 text-white ">
                <div className="flex justify-end items-center mr-12 px-4 py-2 text-sm">
                    <span>Email: harisahmad@1234.com</span>
                    <span className="ml-4">Phone: 123-456-7890</span>
                </div>
            </div>


            <nav className="bg-white ">
                <div className="px-8 py-4 flex items-center">
                    <div>
                        <a href="#">
                            <img src="" alt="Logo" classNameName="h-8 w-auto" />
                        </a>
                    </div>
                    <ul className="flex space-x-16 text-gray-700 font-medium ml-16">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">About</a></li>
                        <li><a href="#" className="hover:text-blue-500">Services</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-600">Features</a></li>
                        <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


