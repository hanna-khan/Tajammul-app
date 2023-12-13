import React from 'react'
import Hero from "./Hero";
import Navbar from "./Navbar";
import Feature from "./Feature";
import About from "./About";
import Merchant from "./Merchant";
import DownloadApp from "./DownloadApp";
import ServiceOfferings from "./ServiceOfferings";
import Footer from "./Footer";

const Home = () => {
  return (
  <>
   <div className="font-poppins scroll-smooth overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Feature />
        <Merchant />
        <DownloadApp />
        <ServiceOfferings />
        <Footer />
      </div>
  </>

  )
}

export default Home