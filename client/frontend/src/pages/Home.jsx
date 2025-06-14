import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import JobListing from '../component/JobListing'
import Appdownload from '../component/Appdownload'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobListing/>
       <Appdownload/>
       <Footer/>
    </div>
  )
}

export default Home