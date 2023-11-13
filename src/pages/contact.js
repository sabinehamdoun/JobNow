import Banner from '@component/components/banner'
import ContactUs from '@component/components/contactus'
import Footer from '@component/components/footer'
import Navbar from '@component/components/navbar'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#f9f9f9]'> 
        <div className='sm:py-5 md:py-8 sm:px-7 md:px-12 lg:px-20'> 
        <Navbar />
        </div>
        <Banner title={"Let's make something awesome together."} subtitle={"Drop us a line, or give us a heads up if you're interested in job opportunities."} backImage={'/assets/map2.png'}/>
        <div className='2xl:container mx-auto sm:py-10 md:py-14 sm:px-7 md:px-12 lg:px-20'>
            <ContactUs />
        </div>
        <Footer />
    </div>
  )
}

export default Contact