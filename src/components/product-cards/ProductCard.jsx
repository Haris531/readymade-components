import React from 'react'

export default function ProductCard({ productData }) {
    return (
        <>
            <div className='border-2 border-green-500 rounded-lg w-72 space-y-2 p-4 hover:bg-black hover:text-white'>
                <div>
                    <span className='font-semibold'>Id:</span> {productData?.id}
                </div>
                <div>
                    <span className='font-semibold'>Name:</span> {productData.name}
                </div>
                <div>
                    {
                        productData.category && (
                            <>
                                <span className='font-semibold'>Category:</span> {productData.category}
                            </>
                        )
                    }
                </div>
                <div className=''>
                    <div className='font-semibold'>Price: <span className='line-through'>${productData.price.original}</span></div>
                    {
                        productData.price.discount && (
                            <div className='font-semibold'>Discount price: <span className=''>${productData.price.original - (productData.price.discount * productData.price.original / 100)}</span></div>
                        )
                    }

                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-semibold'>Instock:</span> {productData.inStock === true ? <><div className='bg-green-500 size-3 rounded-full'></div></> : <><div className='bg-red-500 size-3 rounded-lg'></div></>}
                </div>
                <div>
                    <span className='font-semibold'>Tags:</span>
                    {productData.tags.length > 0 ? (productData.tags.map((tag, index) =>
                        <span className='bg-gray-400 text-sm px-2 py-0.5 rounded mr-1'>{tag}</span>
                    )) : "No Tags"}
                </div>
                <div>
                    <span className='font-semibold'>Date:</span> {productData.addedDate}
                </div>
                <div>
                    {
                        productData.reviews?.length > 0 && (
                            <>
                                <span>Reviews:</span> {
                                    productData.reviews.map((productData) => (
                                        <>
                                            <div>
                                                {productData.user}
                                            </div>
                                            <div>
                                                {
                                                    productData.comment && (
                                                        `comments ${productData.comment} on this product`
                                                    )
                                                }
                                            </div>
                                        </>
                                    ))
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
