import React from 'react'

export default function HeroSection() {
    return (
        <>
            <section className="bg-gray-100">
                <div className="max-w-7xl px-6 py-20 flex flex-col justify-center items-center md:flex-row gap-12 ">
                    <div className='flex flex-col justify-center items-center font-sans'>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
                            Boost Your Brand with Smart <br /> Marketing Strategies
                        </h1>
                        <p className="text-sm md:text-lg text-black text-center mb-8">
                            We help businesses grow by leveraging cutting-edge digital marketing strategies that drive results, increase <br /> ROI, and build lasting customer relationships.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
                                Get started today
                            </button>
                            <button className="px-6 py-2 border border-blue-400 text-black  rounded-full font-medium hover:bg-gray-200 transition duration-300">
                                Our services
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='text-gray-300' />
                <div className='flex justify-evenly items-center gap-12  py-10'>
                    <img src="/TrustedLogos/google-logo.svg" alt="Logo 1" className="h-auto w-auto max-h-12" />
                    <img src="/TrustedLogos/facebook-logo.svg" alt="Logo 1" className="h-auto w-auto max-h-12" />
                    <img src="/TrustedLogos/linkedin-logo.svg" alt="Logo 1" className="h-auto w-auto max-h-12" />
                    <img src="/TrustedLogos/pinterest-logo.svg" alt="Logo 1" className="h-auto w-auto max-h-12" />
                </div>
            </section>
        </>
    )
}
