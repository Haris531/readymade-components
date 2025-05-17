import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function HeroTwo() {
    return (
        <>
            <section className="bg-[url('/images/bgimage.avif')] bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center px-6 py-20">
                <div>
                    <p className="text-6xl font-bold mb-8">
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
                        <input type="text" placeholder="Search..."
                            className="w-full px-4 py-3 border border-gray-400 bg-white rounded-full focus:outline-none text-sm font-semibold"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center text-white bg-yellow-500 p-2 cursor-pointer">
                            <CiSearch size={20} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
