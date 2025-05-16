import React from 'react'

export default function HeroThree() {
    return (
        <>
            <section className='bg-black'>
                <div className='flex flex-col justify-center items-center w-full min-h-screen'>
                    <div className='mb-6'>
                        <h1 className='text-white text-4xl mb-4 text-center'>
                            Meet the fastest, most powerful B2B <br /> suuport platform ever built
                        </h1>
                        <p className='text-white text-center'>
                            plain enables you to deliver better, more collaborative support, faster.
                        </p>
                    </div>
                    <div class="flex space-x-2">
                        <input type="text" placeholder="Your work email" class="text-white  px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                        <button class="px-4 py-1 bg-green-500 text-black rounded-lg hover:bg-green-600">
                            See Action
                        </button>
                    </div>
                    <div className='mt-2'>
                        <h2 className='text-center text-sm text-gray-400 mb-4'>FREE 14 DAY TRIAL</h2>
                        <h2 className='text-center text-sm text-gray-400 mt-2'>TRUSTED BY THE BEST SUPPORT TEAMS</h2>
                    </div>
                    <div className="flex flex-col mt-4 space-y-4">
                        <div className="text-white flex flex-row gap-16 text-lg font-semibold">
                            <h1 className="hover:text-blue-400 transition-colors duration-200">SANITY</h1>
                            <h1 className="hover:text-blue-400 transition-colors duration-200">Raycast</h1>
                            <h1 className="hover:text-blue-400 transition-colors duration-200">Stytch</h1>
                        </div>
                        <div className="text-white flex flex-row gap-16 text-lg font-semibold">
                            <h1 className="hover:text-blue-400 transition-colors duration-200">granelo</h1>
                            <h1 className="hover:text-blue-400 transition-colors duration-200">Laravel</h1>
                            <h1 className="hover:text-blue-400 transition-colors duration-200">Galileo</h1>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
