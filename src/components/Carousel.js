import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/cfNft/CF 1.jpg';
import img2 from '../assets/cfNft/CF 2.jpg';
import img3 from '../assets/cfNft/CF 3.jpg';
import img4 from '../assets/cfNft/CF 5.jpg';
import img5 from '../assets/cfNft/CF 6.jpg';
import img6 from '../assets/cfNft/CF 1.jpg';
import img7 from '../assets/cfNft/CF 2.jpg';
import img8 from '../assets/cfNft/CF 3.jpg';
import img9 from '../assets/cfNft/CF 5.jpg';
import img10 from '../assets/cfNft/CF 6.jpg';





import Arrow from '../assets/Arrow.svg';


const Container = styled.div`
width: 25vw;
height: 70vh;


.swiper{
    width: 100%;
    height: 100%;

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

}

.swiper-image{
    width: 25vw;
height: 70vh;
}

.swiper-button-next{
    color: red;
    right: 0;
    top: 60%;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}

}
`

const Carousel = () => {
    return (
        <Container> 
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'fraction', 
            
        }}
        scrollbar={{
            draggable:true
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,  Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img6} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img7} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img8} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img9} alt="The Weirdos"  width="800" height="800"/> </SwiperSlide>
        <SwiperSlide> <img src={img10} alt="The Weirdos" width="800" height="800"/> </SwiperSlide>

     
      </Swiper> 
      </Container>
    )
}

export default Carousel