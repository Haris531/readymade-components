import React from 'react'

export default function EventHandling() {
     const handleClick = () => {
        alert ("hey i m clicked")
     }
  return (
   
    <>
    <div className='flex justify-center items-center'>
        <button className='px-2 py-2 bg-blue-500 ' onClick={handleClick}>Click me</button>
    </div>
    </>
  )
}
