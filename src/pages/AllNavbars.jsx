import React from 'react'
import NavbarOne from '../components/navbars/NavbarOne'
import NavbarTwo from '../components/navbars/NavbarTwo'
import NavbarThree from '../components/navbars/NavbarThree'

export default function AllNavbars() {
    return (
        <>
            <div className='py-4 bg-slate-300'>
                <div className='space-y-4'>
                    <div><NavbarOne /></div>
                    <div><NavbarTwo /></div>
                    <div><NavbarThree /></div>
                </div>
            </div>
        </>
    )
}
