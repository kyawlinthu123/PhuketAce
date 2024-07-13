import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Hannu K',
      text: 'Very good experience! Reasonable price, clean and new car. The company worked hard to grant us an extension to our rental. A great way to explore Phuket. Beats the rip-off taxi prices hands down.',
    },
    {
      name: 'Erika F',
      text: 'We were very happy with this company! The car was very clean and well kept. Their fees are fair and the manager and customer representative try to help you and guide you in Phuket. I really recommend them.',
    },
    {
      name: 'Konstantin V',
      text: 'Took Honda PCX 150 for 8 days here. The bike looked new and clean, 2017 year with just 4800 km on odometer. I rode about 350 km during my vacation and had zero problems with it. The staff is friendly and professional, manager explained all details concerning rent contract and conditions. Recommend this place.',
    },
  ];

  return (
    <section id="testimonies" className="py-20 font-nunito">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div
              className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg md:text-center hover:cursor-pointer hover:bg-opacity-40"
            >
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="text-sm leading-6 bg-gray-100 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="relative group">
                <div className="absolute transition rounded-lg"></div>
                <div
                  className="relative p-6 space-y-6 leading-none rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                      <h3 className="text-lg font-bold">{review.name}</h3>
                    </div>
                  </div>
                  <p className="leading-normal text-md">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
