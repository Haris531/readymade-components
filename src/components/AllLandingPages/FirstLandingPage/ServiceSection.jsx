import React from 'react'
import { VscGoToSearch } from "react-icons/vsc";
import { Link } from 'react-router-dom';

export default function ServiceSection() {
    return (
        <>
            <div className="bg-white py-20 px-8 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row justify-between items-start gap-12 font-sans">

                    <div className="flex flex-col gap-6 max-w-md ">
                        <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-gray-900">
                            Our Digital Marketing Services
                        </h1>
                        <p className="text-black">
                            We provide end-to-end digital marketing solutions tailored to your business goals and target audience.
                        </p>
                        <Link href="#" className="text-[#9810fa] font-semibold hover:underline">
                            Explore more
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className='flex flex-col gap-12 max-w-sm'>
                            <div className="flex flex-col gap-4">
                                <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                <h2 className="text-xl font-semibold text-gray-900">Search Engine Optimization</h2>
                                <p className="text-gray-600">
                                    Boost your website visibility and organic traffic with our data-driven SEO strategies tailored to your industry.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                <h2 className="text-xl font-semibold text-gray-900">Social Media Marketing</h2>
                                <p className="text-gray-600">
                                    Build brand awareness and engage with your audience through strategic content and campaigns across social platforms.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-12 max-w-sm'>
                            <div className="flex flex-col gap-4">
                                <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                <h2 className="text-xl font-semibold text-gray-900">Pay-Per-Click Advertising</h2>
                                <p className="text-gray-600">
                                    Generate immediate traffic and conversions with strategic PPC campaigns across Google, Bing, and social platforms.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className='text-blue-600 text-2xl'><VscGoToSearch /></h1>
                                <h2 className="text-xl font-semibold text-gray-900">Email Marketing</h2>
                                <p className="text-gray-600">
                                    Nurture leads and drive conversions with personalized email campaigns that deliver the right message at the right time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
