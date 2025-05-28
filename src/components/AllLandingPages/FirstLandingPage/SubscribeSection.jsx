import React from 'react'

export default function SubscribeSection() {
    return (
        <>

            <div className="bg-gray-100 py-12 px-6 md:px-12  ">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Digital Marketing Insights
                    </h1>
                    <p className="text-black text-base md:text-lg mb-8">
                        Subscribe to get weekly marketing tips, industry trends, and exclusive strategies to grow your business online.
                        Join 10,000+ marketers who stay ahead of the curve!
                    </p>
                    <div className="relative w-full md:w-2/3 mx-auto mt-6">
                        <input type="text" id="email" name="email" placeholder="Enter your Email"
                            className="w-full  px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none"
                        />
                        <button type="submit"
                            className="absolute right-1 top-1 bottom-1 bg-purple-600 text-white px-5 rounded-full hover:bg-purple-700 transition"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-400 mx-auto w-11/12" />

        </>
    )
}
