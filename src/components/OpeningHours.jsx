import React from 'react';

const OpeningHours = () => {
  return (
    <div className="flex flex-col items-center h-screen py-6 sm:py-12 font-nunito">
      <div className="w-full max-w-4xl overflow-hidden">
        <div className="relative">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/phuketace.appspot.com/o/company-pic.png?alt=media&token=94a551e3-4de2-41b8-abba-cb645b73c1a9"
            alt="Company"
            className="w-full h-72 object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
          <p className="text-lg text-gray-700 mb-8 font-semibold">MON-SUN: 8AM-7PM</p>
          <h3 className="text-2xl font-bold 0 mb-2">Address</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            390 Srisoonthorn Road, <br />
            Chengthalay Sub-district, Thalang District, <br />
            Phuket 83110, Thailand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
