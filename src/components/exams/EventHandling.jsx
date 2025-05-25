import React, { useState } from 'react';

export default function EventHandling() {
    const [name, setName] = useState("Haris");
    const [roll, setRoll] = useState(100);

    const handleChange = () => {
        setName("Ahmad");
        setRoll(101);
    };

    const handleClick = () => {
        alert("Hey, I am clicked!");
    };

    const handleMouseOver = () => {
        alert("I am hovered!");
    };

    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 p-4 space-y-6">
            <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleClick}>
                    Click me
                </button>
                <div className="px-4 py-2 bg-blue-400 text-white rounded cursor-pointer" onMouseOver={handleMouseOver}>
                    Hover me
                </div>
            </div>

            <div className="text-center space-y-2 bg-white shadow-md p-6 rounded">
                <h1 className="text-xl font-semibold text-gray-800">Hello, {name}</h1>
                <h1 className="text-lg text-gray-600">Roll No: {roll}</h1>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition" onClick={handleChange}>
                    Change
                </button>
            </div>
        </div>
    );
}
