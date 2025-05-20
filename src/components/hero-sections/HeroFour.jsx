import React from 'react'
import { FiInfo } from 'react-icons/fi';

export default function HeroFour() {
    return (
        <>
            <section className='bg-black w-full min-h-screen flex flex-col justify-center items-center'>
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-gray-500 text-sm mb-2'>INFRASTRUCTURE</h2>
                        <h1 className='text-white text-5xl text-center font-bold mb-6'>Build,host and scale <br /> your collaborative paroduct</h1>
                        <button className='px-4 py-2 bg-white text-black text-sm font-semibold'>
                            Sign up for free
                        </button>
                    </div>
                    <div>
                        <div className="w-72 p-4 border border-gray-200 rounded-2xl">
                            <div className="w-8 h-8  text-blue-600  flex items-center">
                                <FiInfo className="w-6 h-6" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Card Title</h2>
                            <p className="text-gray-600">
                                This is a card component using a React icon, heading, and paragraph.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

