import React from 'react'

export default function HeroThree() {
    return (
        <>
            <section className="bg-black">
                <div className="flex flex-col justify-center items-center w-full min-h-screen">
                    <div className="mb-8 text-center">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl  font-bold mb-4">
                            Meet the fastest, most powerful B2B <br />
                            support platform ever built
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Plain enables you to deliver better, more collaborative support, faster.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center sm:flex-row sm:space-x-2 w-full items-center">
                        <input type="text" placeholder="Your work email"
                            className="text-white px-4 py-2 border border-gray-400 rounded-lg w-full sm:w-auto mb-3 sm:mb-0 focus:outline-none"
                        />
                        <button className="w-full sm:w-auto px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors duration-200">
                            See Action
                        </button>
                    </div>

                    <div className="mt-4 text-center text-sm text-gray-400 space-y-2">
                        <h2>FREE 14 DAY TRIAL</h2>
                        <h2>TRUSTED BY THE BEST SUPPORT TEAMS</h2>
                    </div>

                    <div className="flex flex-col mt-4 space-y-6 text-white text-center">
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-lg font-semibold">
                            <span className="hover:text-blue-400 transition-colors duration-400">SANITY</span>
                            <span className="hover:text-blue-400 transition-colors duration-400">Raycast</span>
                            <span className="hover:text-blue-400 transition-colors duration-400">Stytch</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-lg font-semibold">
                            <span className="hover:text-blue-400 transition-colors duration-400">granelo</span>
                            <span className="hover:text-blue-400 transition-colors duration-400">Laravel</span>
                            <span className="hover:text-blue-400 transition-colors duration-400">Galileo</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
