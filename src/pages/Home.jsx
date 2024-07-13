import React from 'react'
import Header from '../components/Header'
// import OpeningHours from '../components/OpeningHours'
import Services from '../components/Services'
import TermsNConditions from '../components/TermsNConditions'
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';


export default function Home() {
  return (
    <>
    <Header/>
    {/* <OpeningHours /> */}
    <Services />
    <TermsNConditions />
    <Testimonials />
    <Footer/>
    </>
  )
}
