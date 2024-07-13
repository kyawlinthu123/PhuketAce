import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <section>
    <div className="h-screen grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 font-nunito">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">Your premier choice for car and motorcycle rentals in Phuket!</h1>
            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">Whether you're planning a vacation or need a reliable vehicle for business, we've got you covered. Our hassle-free rental process and affordable rates are designed to meet your every need.</p>
            <Link to='/rentals' className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-red-500 text-white transform transition-transform duration-300 hover:scale-105 hover:bg-red-600">
                Book now
                <svg className="w-5 h-5 ml-2 -mr-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex mt-2">
            <img 
            src="https://firebasestorage.googleapis.com/v0/b/phuketace.appspot.com/o/carpicfinal.webp?alt=media&token=ebf39309-a42c-4e7d-8327-7d6023528d32" 
            className='"w-[80%] h-auto lg:h-full lg:w-auto object-cover transform transition-transform duration-300 hover:scale-105 md:rounded-lg'
            alt="" 
            />
        </div>                
    </div>
</section>
  )
}
