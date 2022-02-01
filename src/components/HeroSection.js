import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ReceptionImg from '../assets/Reception.jpg'

const HeroSection=()=>{
    return(
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <img style={{height:'90vh'}} src={ReceptionImg} />
          <img style={{height:'90vh'}} src={ReceptionImg} />
      </Carousel>
    )
}

export default  HeroSection