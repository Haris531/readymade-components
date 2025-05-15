import React from 'react'
import HeroOne from '../components/hero-sections/HeroOne'
import HeroTwo from '../components/hero-sections/HeroTwo'

export default function AllHeroSections() {
  return (
    <>
      <div className=''>
        <div className='space-y-4'>
          <div><HeroOne /></div>
          <div><HeroTwo /></div>

        </div>
      </div>
    </>
  )
}
