import React from 'react'
import HeroOne from '../components/hero-sections/HeroOne'
import HeroTwo from '../components/hero-sections/HeroTwo'
import HeroThree from '../components/hero-sections/HeroThree'

export default function AllHeroSections() {
  return (
    <>
      <div className=''>
        <div className='space-y-4'>
          <div><HeroOne /></div>
          <div><HeroTwo /></div>
          <div><HeroThree /></div>

        </div>
      </div>
    </>
  )
}
