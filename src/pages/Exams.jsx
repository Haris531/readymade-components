import React from 'react'
import MapCard from '../components/exams/MapCard'
import MapProduct from '../components/exams/MapProduct'
import EventHandling from '../components/exams/EventHandling'

export default function Exams() {
  return (
    <>
    <div className='mb-4'>
    <MapCard />
    <MapProduct />
    <EventHandling />
    </div>
    </>
  )
}
