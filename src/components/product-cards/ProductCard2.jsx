import React from 'react'

export default function ProductCard2( {cardData} ) {
    return (
        <>
            <div className='border-2 border-red-500 p-4 '>
                <div>
                    Name: {cardData.name}
                </div>
                <div className='flex justify-between items-center'>
                    Isactive: {cardData.isActive === true ? <><div className='bg-green-500 text-white p-1.5 rounded-lg'>Yes</div></> : <><div className='bg-red-500 text-white'>No</div></>}
                </div>
                <div>
                    {
                        cardData.address && (
                            <>
                                Address: {cardData.address?.city}
                            </>
                        )
                    }
                </div>
                <div>
                    Hobbies: {cardData.hobbies.length > 0 ? "yes " : "no"}
                </div>

            </div>
        </>
    )
}
