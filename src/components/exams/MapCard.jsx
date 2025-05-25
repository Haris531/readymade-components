import React from 'react'
import ProductCard2 from '../product-cards/ProductCard2';

export default function MapCard() {

    const peopleData = [
        {
            id: 1,
            name: "Alice",
            hobbies: ["reading", "gaming", "cycling"],
            address: {
                city: "New York",
                zip: 10001
            },
            isActive: true
        },
        {
            id: 2,
            name: "Bob",
            hobbies: [],
            address: {
                city: "Los Angeles",
                zip: 90001
            },
            isActive: false
        },
        {
            id: 3,
            name: "Charlie",
            hobbies: ["cooking"],
            isActive: true,
            // No address
        },
        {
            id: 4,
            name: "Daisy",
            hobbies: ["photography", "travel"],
            address: {
                city: "Chicago",
                zip: 60601
            },
            isActive: null
        },
        {
            id: 5,
            name: "Ethan",
            hobbies: ["chess", "gaming"],
            address: {
                city: "San Francisco",
                zip: 94101
            },
            isActive: true
        }
    ];


    return (
        <>
            <h1>Exam Start</h1>
            <div className='flex flex-row justify-center items-center gap-2'>
                {
                    peopleData.map((item) => {
                        return (
                           <ProductCard2 cardData={item} />
                        )

                    })
                }

            </div>
        </>
    )
}
