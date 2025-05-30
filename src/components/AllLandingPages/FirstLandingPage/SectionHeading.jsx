import React from 'react'

export default function SectionHeading({text, position, size}) {
  return (
    <>
    <div className={`${size} font-bold text-black ${position} `}>
        {text}
    </div>
    </>
  )
}
