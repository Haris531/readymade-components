import React from 'react'

export default function HeroOne() {
  return (
    <>
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col md:flex-row gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Elevate Your Brand <br /> with Stunning Web Design
          </h1>
          <p className="text-sm md:text-lg text-gray-600 mb-8">
            We create responsive, beautiful, and user-friendly websites that help your business grow. Let's build something great together.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 transition">
              Get Started
            </a>
            <a href="#portfolio" className="px-6 py-3 border border-gray-300 text-gray-700  rounded-2xl hover:bg-gray-100  transition">
              View Portfolio
            </a>
          </div>
        </div>
        <div className="w-full">
          <img src="https://plus.unsplash.com/premium_photo-1746718186768-95b366cc69ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero" className="w-full h-auto rounded-2xl shadow-xl"/>
        </div>
      </div>
    </section>
    </>
  )
}
