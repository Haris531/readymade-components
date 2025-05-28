import React from 'react'
import HeroSection from '../../components/AllLandingPages/FirstLandingPage/HeroSection'
import Navbar from '../../components/AllLandingPages/Navbar'
import ServiceSection from '../../components/AllLandingPages/FirstLandingPage/ServiceSection'
import AboutSection from '../../components/AllLandingPages/FirstLandingPage/AboutSection'
import PerformUser from '../../components/AllLandingPages/FirstLandingPage/PerformUser'
import SocialMedia from '../../components/AllLandingPages/FirstLandingPage/SocialMedia'
import ProcesSection from '../../components/AllLandingPages/FirstLandingPage/ProcesSection'
import PriceSection from '../../components/AllLandingPages/FirstLandingPage/PriceSection'
import TestimonialSection from '../../components/AllLandingPages/FirstLandingPage/TestimonialSection'
import ContactSection from '../../components/AllLandingPages/FirstLandingPage/ContactSection'

export default function FirstLandingPage() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <ServiceSection />
    <AboutSection />
    <PerformUser />
    <SocialMedia />
    <ProcesSection />
    <PriceSection />
    <TestimonialSection />
    <ContactSection />
    </>
  )
}
