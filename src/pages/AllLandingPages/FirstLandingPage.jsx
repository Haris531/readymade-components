import React from 'react'
import HeroSection from '../../components/AllLandingPages/FirstLandingPage/HeroSection'
import Navbar from '../../components/AllLandingPages/Navbar'
import ServiceSection from '../../components/AllLandingPages/FirstLandingPage/ServiceSection'
import AboutSection from '../../components/AllLandingPages/FirstLandingPage/AboutSection'

export default function FirstLandingPage() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <ServiceSection />
    <AboutSection />
    </>
  )
}
