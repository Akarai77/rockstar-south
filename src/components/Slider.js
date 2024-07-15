import React, { useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay , EffectCoverflow} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/Slider.css';
import 'swiper/css/effect-coverflow';

const Slider = ({slides,slidesCount}) => {
  var count=0;
  var [i,setI] = useState(0);
  return (
    <Swiper className='slider'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCoverflow]}
      spaceBetween={150}
      effect="coverflow"
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      navigation={{clickable:true}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChangeTransitionStart={() =>{
        if(count++===slidesCount-1){
          count=0;
          setI(++i);
        }
      } 
    }
    >
      {
      slides.map((slide)=>(
        <SwiperSlide className='slide'>
          <img src={require(`../${slide.img}`)} alt={slide.title} />
        </SwiperSlide>
        
      ))
    }
    </Swiper>
  )
}

export default Slider;