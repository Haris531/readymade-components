import React from 'react'
import NavbarOne from '../components/navbars/NavbarOne'
import NavbarTwo from '../components/navbars/NavbarTwo'

export default function AllNavbars() {
    return (
        <>
            <div className='py-4'>
                <div className='space-y-4'>
                    <div><NavbarOne /></div>
                    {/* <div><NavbarTwo /></div> */}
                </div>
            </div>
        </>
    )
}
