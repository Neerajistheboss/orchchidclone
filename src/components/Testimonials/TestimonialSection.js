import Testimonial from "./Testimonial"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TestimonialSection=()=>{
    return(
        <div className="mt-5">
            <h3 className="text-center mb-5">Testimonials</h3>
            <div >
            <Carousel autoPlay={true} infiniteLoop={true} >
                <div style={{display:'flex',height:'100%'}}>
            <Testimonial />
            <Testimonial />
                </div>
                <div style={{display:'flex',height:'100%'}}>
            <Testimonial />
            <Testimonial />
                </div>
                <div style={{display:'flex',height:'100%'}}>
            <Testimonial />
            <Testimonial />
                </div>
                
            </Carousel>
        </div>
        </div>
    )
}

export default TestimonialSection