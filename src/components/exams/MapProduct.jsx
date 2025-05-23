import React from 'react'

export default function MapProduct() {
    const productsData = [
        {
            id: 101,
            name: "Wireless Headphones",
            category: "Electronics",
            price: {
                original: 120.0,
                discount: 15 // in percent
            },
            inStock: true,
            tags: ["audio", "wireless", "bluetooth"],
            dimensions: {
                weight: "200g",
                size: "Medium"
            },
            addedDate: "2024-10-12",
            reviews: [
                { user: "Alice", rating: 4, comment: "Great sound quality!" },
                { user: "Bob", rating: 3 }
            ]
        },
        {
            id: 102,
            name: "Gaming Mouse",
            category: "Accessories",
            price: {
                original: 45.0
                // No discount
            },
            inStock: false,
            tags: ["gaming", "USB", "RGB"],
            dimensions: {
                weight: "150g",
                size: "Small"
            },
            addedDate: "2023-08-21",
            reviews: []
        },
        {
            id: 103,
            name: "Standing Desk",
            category: "Furniture",
            price: {
                original: 300.0,
                discount: 10
            },
            inStock: true,
            tags: ["office", "ergonomic"],
            dimensions: {
                weight: "25kg",
                size: "Large"
            },
            addedDate: "2022-05-15",
            reviews: [
                { user: "Charlie", rating: 5, comment: "Life changing!" }
            ]
        },
        {
            id: 104,
            name: "Smart Water Bottle",
            // No category
            price: {
                original: 60.0,
                discount: 5
            },
            inStock: true,
            tags: ["health", "smart", "hydration"],
            // Missing dimensions
            addedDate: "2025-01-01",
            reviews: [
                { user: "Daisy", rating: 2, comment: "Battery died fast." }
            ]
        },
        {
            id: 105,
            name: "Noise-Cancelling Earplugs",
            category: "Health",
            price: {
                original: 20.0
            },
            inStock: false,
            tags: [],
            dimensions: {
                weight: "30g",
                size: "Tiny"
            },
            addedDate: "2024-12-10",
            // No reviews
        }
    ];

    return (
        <>
        <div className='flex flex-wrap justify-center items-center gap-2 p-4'>
            {
                productsData.map((item) => {
                    return(
                        <div className='border-2 border-green-500 rounded-lg w-72 space-y-2 p-4'>
                            <div>
                                <span className='font-semibold'>Id:</span> {item.id}
                            </div>
                            <div>
                                <span className='font-semibold'>Name:</span> {item.name}
                            </div>
                            <div>
                                {
                                    item.category && (
                                        <>
                                        <span className='font-semibold'>Category:</span> {item.category}
                                        </>
                                    )
                                }
                            </div>
                            <div>
                                <span className='font-semibold'>Price:</span> {item.price.original}
                            </div>
                            <div className='flex items-center gap-2'>
                               <span className='font-semibold'>Instock:</span> {item.inStock == true ? <><div className='bg-green-500 px-1.5 py-1.5 rounded-full'></div></> : <><div className='bg-red-500 px-1.5 py-1.5 rounded-lg'></div></>}
                            </div>
                            <div>
                                <span className='font-semibold'>tags:</span> {item.tags.length > 0 ? "Yes" : "No"}
                            </div>
                            <div>
                               <span className='font-semibold'>Date:</span> {item.addedDate}
                            </div>
                            <div>
                                {
                                    item.reviews && (
                                        <>
                                        <span>Reviews:</span> {item.reviews?.user}
                                        </>
                                    )
                                }
                            </div>

                        </div>
                    )
                })
            }

        </div>
 

        </>
    )
}
