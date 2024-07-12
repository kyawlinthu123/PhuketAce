import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='font-nunito'>
            <ul className='flex justify-around items-start p-3 mx-auto'>
                <li className='flex items-center'>
                    <Link to=''>
                        <p className='text-3xl font-bold text-primary'>Phuket<span className='text-red-500'>Ace</span></p>
                    </Link>
                </li>
                <li className='flex items-center space-x-3 text-sm md:text-base text-teal-900'>
                <Link
                    to=""
                    className='px-2 md:px-3 py-2 rounded-2xl items-center gap-1 transition-all duration-300 hidden md:block'
                >
                Home
                </Link>
                <Link
                    to="/rentals"
                    className='px-2 md:px-3 py-2 rounded-2xl flex items-center gap-1 transition-all duration-300'
                >
                Rentals
                </Link>
                <Link
                    to="/pricing"
                    className='px-2 md:px-3 py-2 rounded-2xl flex items-center gap-1 transition-all duration-300'
                >
                Pricing
                </Link>
                <Link
                    to="/gallery"
                    className='px-2 md:px-3 py-2 rounded-2xl flex items-center gap-1 transition-all duration-300'
                >
                Gallery
                </Link>
                <Link
                    to="/contact"
                    className='px-2 md:px-3 py-2 rounded-2xl items-center gap-1 transition-all duration-300 hidden md:block'
                >
                Contact
                </Link>
                </li>
                <li className='flex items-center'>
                    <Link to="/create" className='text-white bg-red-500 px-2 md:px-3 py-1 md:py-2 rounded-lg md:rounded-full flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                        <span className="hidden md:block">+66 89646 4569</span>
                    </Link>
                </li>
            </ul>
        </nav>
  )
}
