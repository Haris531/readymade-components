import React from 'react'

export default function PriceCard({ cardData }) {


    return (
        <>
            <div className='flex  justify-center items-center h-screen'>

                <div className="border-2 border-gray-200 rounded-2xl shadow-md p-6 w-72 bg-gray-50 hover:shadow-lg transition-all duration-300 space-y-5">
                    <div className="text-xl font-bold text-black">
                        {cardData.heading}
                    </div>
                    <div className="text-sm text-gray-500">
                        {cardData.subHeading}
                    </div>
                    <div className="text-2xl font-semibold text-black">
                        {cardData.cost}
                    </div>
                    <div>
                        <button className="w-full py-2 font-semibold bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                            Buy Now
                        </button>
                    </div>
                    <div className="text-xl font-medium text-black  ">
                        {cardData.planHeading}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 space-y-1">
                        {cardData.paragraphs &&
                            cardData.paragraphs.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                    </div>
                </div>
            </div>

        </>
    )
}
