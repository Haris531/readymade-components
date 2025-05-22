import React from 'react'
import NavbarOne from '../components/navbars/NavbarOne'
import NavbarTwo from '../components/navbars/NavbarTwo'
import NavbarThree from '../components/navbars/NavbarThree'
import NavbarFour from '../components/navbars/NavbarFour'
import NavbarFive from '../components/navbars/NavbarFive'
export default function AllNavbars() {
    return (
        <>
            <div className='py-4 bg-slate-300'>
                <div className='space-y-4'>
                    <div><NavbarOne /></div>
                    <div><NavbarTwo /></div>
                    <div><NavbarThree /></div>
                    <div><NavbarFour /></div>
                    <div><NavbarFive /></div>
                </div>
            </div>
        </>
    )
}
