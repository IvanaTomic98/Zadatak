import React from "react";
import '../Carousel/carousel.css'
import Sliderpicture1 from '../Carousel/Img/Sliderpicture1.jpg'
import { Carousel } from '@sefailyasoz/react-carousel'; 



const Carou = () => {

    const CarouselData = [
        {
          headerText: null,
          image: Sliderpicture1,
        },
        {
          subText: null,
          image: Sliderpicture1,
        },
        {
          headerText: null,
          subText: null,
          image: Sliderpicture1,
        },
    ]

    return (    
        <Carousel
        data={CarouselData}
        autoPlay={true}
        animationDuration={3000}
        size="normal"
        />
        
    )
}

export default Carou