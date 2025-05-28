import React from 'react'

export default function FooterSection() {
  return (
    <>
    <footer className="bg-gray-100 py-12 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    <div>
      <h3 className="text-lg font-semibold mb-6">About Us</h3>
      <p className="text-base text-black">
        We help businesses grow online through innovative digital marketing strategies and tools tailored to your brand.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-6">Services</h3>
      <p className="text-base text-black">
        From SEO to social media management, our full suite of services is designed to drive traffic and increase conversions.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-6">Resources</h3>
      <p className="text-base text-black">
        Explore our blog, guides, and tutorials to stay informed about the latest trends in digital marketing.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-6">Company</h3>
      <p className="text-base  text-black">
        Have questions? Reach out to our support team anytime—we are here to help you succeed online.
      </p>
    </div>

  </div>
</footer>

    </>
  )
}
