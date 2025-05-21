import React from 'react'
import { FiInfo } from 'react-icons/fi';

export default function HeroFour() {

    const features = [
        {
            icon: <FiInfo />,
            title: "Card Title",
            description: "This is a card component using a React icon, heading, and paragraph."
        },
        {
            icon: <FiInfo />,
            title: "Card Title",
            description: "This is a card component using a React icon, heading, and paragraph."
        },
        {
            icon: <FiInfo />,
            title: "Card Title",
            description: "This is a card component using a React icon, heading, and paragraph."
        },
        {
            icon: <FiInfo />,
            title: "Card Title",
            description: "This is a card component using a React icon, heading, and paragraph."
        }
    ]

    return (
        <>
            <section className='bg-black w-full min-h-screen flex flex-col justify-center items-center'>
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='bg-slate-500 w-20 h-16 mb-4 herofour'></div>
                        <h2 className='text-[#C0C0C0] text-sm mb-2'>INFRASTRUCTURE</h2>
                        <h1 className='text-white text-3xl sm:5xl text-center font-bold mb-6'>Build,host, and scale <br /> your collaborative paroduct</h1>
                        <button className='px-4 py-2 bg-white text-black text-sm font-semibold'>
                            Sign up for free
                        </button>
                    </div>

                    <div className='mt-6 flex flex-col gap-2 sm:flex-row items-center justify-center'>
                        {
                            features?.map((item) => {
                                return (
                                    <div className="w-72 p-4 border border-gray-50 ">
                                        <div className="w-8 h-8  text-blue-600  flex items-center">
                                            {/* <FiInfo className="w-6 h-6" /> */}
                                            {item?.icon}
                                        </div>
                                        <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                                        <p className="text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

