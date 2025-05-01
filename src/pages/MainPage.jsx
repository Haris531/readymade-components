import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
    <h1 className='text-center text-3xl font-bold my-2 underline text-blue-500'>All Components</h1>
    <div className='flex justify-center items-center py-10 gap-4'>
        <div className='px-3 py-2 bg-blue-400 rounded-lg text-white font-semibold hover:bg-blue-500'>
            <Link to='/all-navbars'>All Navbars</Link>
        </div>
        <div className='px-3 py-2 bg-blue-400 rounded-lg text-white font-semibold hover:bg-blue-500'>
            <Link to='/all-heros'>All Hero Sections</Link>
        </div>
    </div>
    </>
  )
}
