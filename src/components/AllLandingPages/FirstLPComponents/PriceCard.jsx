import React from 'react'

export default function PriceCard({ cardData, index }) {


    return (
        <>


                <div className={`shadow rounded-2xl my-2 px-6 w-80  ${index === 1 ? 'bg-white  shadow-xl scale-105 py-6 border border-gray-50' : 'bg-[#F3F4F6] py-4'} transition-all duration-300 space-y-5`}>
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
                    <div className="text-base font-normal text-black space-y-3">
                        {cardData.paragraphs &&
                            cardData.paragraphs.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                    </div>
                </div>


        </>
    )
}
