// src/components/Gallery.js
import React from 'react';

export function Gallery() {
  const data = Array.from({ length: 18 }, (_, i) => ({
    imageLink: `https://firebasestorage.googleapis.com/v0/b/phuketace.appspot.com/o/gallery%2F${i + 1}.jpeg?alt=media&token=${[
      '2e62ba14-225e-4c0c-8554-27f92a1939c4',
      '98994ad6-3ee0-49c3-85dd-1e8aa45830c6',
      'ae83a86b-fea1-48d1-a2e5-bf7ea67ccb9a',
      '3f59ffce-b9dd-4e87-8bf3-a248c3e33aae',
      '181987ee-1225-44ba-b5d8-717e0c571a89',
      '0536802d-b87f-4fdd-907b-63d916f1e2f5',
      'acd75d7f-b752-40d2-b6e4-f2300ff1275c',
      'b408cd95-a036-4057-abf4-58e46be5f652',
      '3e6c2832-633f-4ecb-a698-a3f6a1241850',
      '8ade2489-202a-420c-be2b-293d20dc83a5',
      '473f5748-52ae-493e-abc0-2295c5124dea',
      'b542095c-9d72-493e-b197-88c6c0dc0e54',
      'd376483e-590b-4fa1-8aa7-86db16ac0f82',
      'b1ae909c-d74c-486b-a3e8-7de68798b028',
      '50f20934-909e-4f71-8a8d-4bbb83e7b4ff',
      'd883324b-c1dc-4139-8346-0d4d67e6b97f',
      '8cff2776-26a0-43ba-8579-cba9bdfb8ac0',
      '3e4ef424-c370-4285-84bd-1e8643ce0856',
    ][i]}`,
  }));

  return (
    <div className="container mx-auto px-4 py-4 font-nunito">
      <h2 className="text-center text-3xl font-bold mb-6">View our fleet</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 my-3 md:mx-24 transition-all duration-500">
        {data.map(({ imageLink }, index) => (
          <div key={index} className="relative group">
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center transform transition duration-300 ease-in-out group-hover:scale-105"
              src={imageLink}
              alt={`gallery-photo-${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
