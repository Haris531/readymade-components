import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function HeroTwo() {
    return (
        <>
            <section className="bg-[url('/images/bgimage.avif')] bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center px-2 sm:px-6 py-40 sm:py-20">
                <div>
                    <p className="text-4xl sm:text-6xl font-bold mb-8">
                        Create better video, <br /> faster than ever
                    </p>
                    <div className="flex justify-center lg:justify-start text-base font-bold gap-6">
                        <span className="hover:underline decoration-yellow-500 decoration-2 underline-offset-4">Video</span>
                        <span className="hover:underline decoration-yellow-500 decoration-2 underline-offset-4">Video Templates</span>
                        <span className="hover:underline decoration-yellow-500 decoration-2 underline-offset-4">Audio</span>
                        <span className="hover:underline decoration-yellow-500 decoration-2 underline-offset-4">Images</span>
                    </div>
                </div>
                <div className="mt-6 w-full max-w-lg">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 pr-12 py-3 border border-gray-300 bg-white rounded-full focus:outline-none text-sm font-semibold text-black"
                        />
                        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition">
                            <CiSearch size={20} />
                        </button>
                    </div>
                </div>

            </section>

        </>
    )
}
