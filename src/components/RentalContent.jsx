// src/components/RentalContent.js
import React from 'react';

export default function RentalContent() {
    const features = [
        'Insured',
        'Clean',
        'Baby seats',
        'Excellent condition'
    ];

    return (
        <div className="container mx-auto px-4 font-nunito text-center mb-2">
            <div className="p-6">
                <div className="font-bold text-3xl mb-2">
                    Our Fleet
                </div>
                <p className="text-lg mb-1 font-bold">
                    We have a fleet of over 25 cars and motorcycles ready for your use.
                </p>
                <div className="w-full items-center text-lg font-bold flex flex-wrap justify-center space-x-2">
                    {features.map(feature => (
                        <span key={feature} className='text-center px-2 py-1 m-1 rounded-full text-sm text-white bg-red-500 transform transition-transform duration-300 hover:scale-105 hover:bg-red-600'>
                            {feature}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
