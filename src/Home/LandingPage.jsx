import React from 'react'
import Navbar1 from '../components/LandingPage/Navbar1'
import Navbar2 from '../components/LandingPage/Navbar2'
import HeroSection from '../components/LandingPage/HeroSection'
import TripCard from '../components/LandingPage/TripCard'
import ChatCard from '../components/LandingPage/ChatCard'
import FeaturesSection from '../components/LandingPage/FeaturesSection'
import WhoWeAre from '../components/LandingPage/WhoWeAre'
import Carfleet1 from '../components/LandingPage/Carfleet1'
import DealsOnBooking from '../components/LandingPage/DealsOnBooking'
import Testimonials from '../components/LandingPage/Testimonials'
import Footer from '../components/LandingPage/Footer'
import BlogSection from '../components/LandingPage/BlogSection'
import Service from '../components/LandingPage/Service'
import DriverSection from '../components/LandingPage/DriverSection'

const LandingPage = () => {
  return (
    <div>
      
     <Navbar1 />
     <Navbar2 />
     <HeroSection/>
     <FeaturesSection />
     <WhoWeAre/>
     <Carfleet1 /><br /><br />
     <TripCard/>
     <ChatCard/>
     <Service />
     <DealsOnBooking /><br /><br />
     <DriverSection /><br /><br />
     <Testimonials /><br />
     <BlogSection />
     <Footer />

      
    </div>
  )
}

export default LandingPage