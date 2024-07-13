import React from 'react';

export default function Services() {
  return (
    <div className="h-screen font-nunito px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight md:mx-auto mb-2">
          Services
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Service 1: Unlimited Mileage */}
        <div className="flex flex-col items-center">
          <div className="sm:mr-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100">
              <svg className="w-12 h-12 text-red-500" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="text-center">
            <h6 className="mb-2 font-bold leading-5">Unlimited Mileage</h6>
            <p className="mb-3 text-sm">
              Enjoy the freedom of unlimited mileage on all bookings, ensuring you can explore without limits.
            </p>
          </div>
        </div>
        {/* Service 2: Free Cancellation */}
        <div className="flex flex-col items-center">
          <div className="sm:mr-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100">
              <svg className="w-12 h-12 text-red-500" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="text-center">
            <h6 className="mb-2 font-bold leading-5">Free Cancellation on Non-Confirmed Booking</h6>
            <p className="mb-3 text-sm">
              Benefit from hassle-free cancellations for non-confirmed bookings, providing peace of mind and flexibility.
            </p>
          </div>
        </div>
        {/* Service 3: Best Price Guaranteed */}
        <div className="flex flex-col items-center">
          <div className="sm:mr-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100">
              <svg className="w-12 h-12 text-red-500" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="text-center">
            <h6 className="mb-2 font-bold leading-5">Best Price Guaranteed</h6>
            <p className="mb-3 text-sm">
              Rest assured knowing you're getting the best deal with our price guarantee, ensuring competitive rates for your bookings.
            </p>
          </div>
        </div>
        {/* Service 4: Customer Information Support */}
        <div className="flex flex-col items-center">
          <div className="sm:mr-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100">
              <svg className="w-12 h-12 text-red-500" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="text-center">
            <h6 className="mb-2 font-bold leading-5">Customer Information Support</h6>
            <p className="mb-3 text-sm">
              Our dedicated customer support team is available around the clock to assist with any inquiries or issues you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
