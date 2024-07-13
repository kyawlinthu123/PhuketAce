// src/components/TermsNConditions.js
import React from 'react';

export default function TermsNConditions() {
  const terms = [
    { title: "Age Limit", description: "The renter must be at least 21 years of age." },
    { title: "License", description: "The renter must possess a valid international or local license." },
    { title: "Usage", description: "Any damage to tyre(s) is the responsibility of the renter." },
    { title: "Location", description: "The vehicle/motorcycle is for use strictly within Phuket Island. Riding on the beach is prohibited." },
    { title: "Return Location", description: "The renter must return the vehicle/motorcycle to the place of hiring and at the agreed date and time. In case the renter leaves the vehicle at a different place, the renter agrees to be charged an amount as set by the company." },
    { title: "Restriction", description: "The vehicle/motorcycle is not to be used for any illegal activities. In case of any illegal activities committed by the renter, it is the renter’s sole responsibility without any liability to the owner." },
    { title: "Accident", description: "In case of an accident, the rented vehicle/motorcycle should not be moved unless directed by the police. No incriminating agreement shall be entered into, prior to consulting with a representative of the company and/or the insuring company." },
    { title: "Fuel", description: "The renter agrees to return the vehicle/motorcycle with the same fuel level as on the renting date. The renter agrees to be charged prevailing market rate for fuel in case the level of fuel is lower. Should the level of fuel be more, no refund shall be made to the renter." },
  ];

  return (
    <div className="w-full pt-12 p-4 mt-4 mx-auto font-nunito font-bold">
      <div className='flex items-center text-center justify-center'>
        <h1 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">Terms & Conditions</h1>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {terms.map((term, index) => (
          <div key={index} className="rounded-xl text-white bg-red-400 transform transition-transform duration-300 hover:scale-105 p-6 text-center shadow-lg">
            <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <h1 className="font-bold mb-4 text-lg">{term.title}</h1>
            </div>
            <p className="text-white">{term.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
