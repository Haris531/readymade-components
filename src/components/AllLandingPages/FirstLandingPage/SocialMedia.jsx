import React from 'react'

export default function SocialMedia() {
    return (
        <>
            <div className="w-full py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center font-sans">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Grow Your Business with Social <br /> Media</h2>
                        <p className="text-black mb-6">
                            We connect you with top influencers to boost your content, expand your reach, and drive engagement. Get started today!                        </p>
                        <button className="px-8 py-3 font-bold bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                            Get Started
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/LandpageImg/social-media-img.webp" alt="social-media"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
