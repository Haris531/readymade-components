import React from 'react'

export default function HeroTwo() {
    return (
        <>
            <section className=" bg-gray-200 w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-20">
                <div className="text-center ">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                        It's The Heading Part
                    </h1>
                    <p className="text-lg mb-8">
                        Short and compelling subheading that tells users what we offer and why it matters.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <button className="px-6 py-3 rounded-lg"> First Button </button>
                        <button className="px-6 py-3 rounded-lg border"> Second Button </button>
                    </div>
                </div>
                <div className="mt-12">
                    <img src="" alt="Hero"className="rounded-xl"/>
                </div>
            </section>
        </>
    )
}
