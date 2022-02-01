import React from 'react'
import ContactUsSection from '../components/ContactUs/ContactUsSection'
import FeaturesSection from '../components/Features/FeaturesSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import SpecialityCard from '../components/SpecialityCard'
import SpecialitySection from '../components/SpecialitySection/SpecialitySection'
import TestimonialSection from '../components/Testimonials/TestimonialSection'
const HomePage=()=>{
    return(
        <div className=' page'>
            <HeroSection />
            <FeaturesSection />
            <TestimonialSection />
            <SpecialitySection />
            {/* <ContactUsSection /> */}
        </div>
    )
}

export default HomePage