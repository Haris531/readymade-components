import React from 'react'
import ProductCard from '../product-cards/ProductCard';

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
                        return (
                            <ProductCard productData={item} />
                        )
                    })
                }
            </div>

        </>
    )
}
