import React from 'react'

export default function ProcesSection() {
    return (
        <>
            <div className='w-full py-10 bg-pink-200'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center gap-8 text-center font-sans">
                        <div className='text-black'>
                            <h1 className='text-4xl font-bold mb-4'>Our Process to Elevate Your Website</h1>
                            <p>Follow these steps to enhance your online presence.</p>
                        </div>
                        <div className='flex justify-between w-full max-w-5xl mx-auto'>
                            <div className="bg-blue-500 text-white px-3 py-3 rounded-full w-12 text-center">1</div>
                            <div className="bg-blue-500 text-white px-3 py-3 rounded-full w-12 text-center">2</div>
                            <div className="bg-blue-500 text-white px-3 py-3 rounded-full w-12 text-center">3</div>
                            <div className="bg-blue-500 text-white px-3 py-3 rounded-full w-12 text-center">4</div>
                        </div>
                        <div className='flex justify-between w-full max-w-5xl mx-auto'>
                            <h1 className='text-md font-bold'>Optimize Your Website Content</h1>
                            <h1 className='text-md font-bold'>Optimize Your Website Content</h1>
                            <h1 className='text-md font-bold'>Optimize Your Website Content</h1>
                            <h1 className='text-md font-bold'>Optimize Your Website Content</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
