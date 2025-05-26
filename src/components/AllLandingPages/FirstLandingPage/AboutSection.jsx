import React from 'react'
import { VscGoToSearch } from "react-icons/vsc";

export default function AboutSection() {
    return (
        <>
            <div className='bg-gray-50 py-20 px-8 sm:px-6 lg:px-12'>
                <div className='max-w-7xl mx-auto  flex font-sans'>
                    <div>
                        <img src="/LandpageImg/meeting-img.webp" alt="Logo 1" className="h-auto w-auto" />
                    </div>
                    <div className='flex flex-col gap-8 px-8'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-2xl sm:text-3xl font-bold  text-gray-900'>About Us</h1>
                            <p>
                                Since 2015, DigitalBoost has been helping businesses of all sizes achieve their marketing goals through innovative digital strategies. Our team of experts combines industry knowledge with cutting-edge techniques to deliver measurable results.
                                What sets us apart is our data-driven approach and commitment to transparency. We don't just implement strategies; we analyze, optimize, and refine them continuously to ensure maximum ROI for our clients.
                            </p>
                        </div>
                        <div className='flex flex-row gap-16 '>
                            <div className='flex flex-col gap-8 '>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <div className='bg-purple-300 px-3 py-3 rounded-full'>
                                        <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-lg sm:text-xl font-bold  text-gray-900'>Trustworthy</h1>
                                        <p>100% transparency</p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <div className='bg-purple-300 px-3 py-3 rounded-full'>
                                        <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-lg sm:text-xl font-bold  text-gray-900'>Fast Results</h1>
                                        <p>100% transparency</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <div className='bg-purple-300 px-3 py-3 rounded-full'>
                                        <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-lg sm:text-xl font-bold  text-gray-900'>Trustworthy</h1>
                                        <p>100% transparency</p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <div className='bg-purple-300 px-3 py-3 rounded-full'>
                                        <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-lg sm:text-xl font-bold  text-gray-900'>Trustworthy</h1>
                                        <p>100% transparency</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
