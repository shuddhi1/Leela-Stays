import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";

import "swiper/css/autoplay";
import photo1 from '../media/Rainy1.jpeg';
import photo2 from '../media/Room2.jpeg';
import photo3 from '../media/mall.jpg';
import photo4 from '../media/Outside_morning.jpeg';
import photo5 from '../media/window.jpeg';
import photo6 from '../media/Cloud.jpeg';

import photo8 from '../media/sunset.jpg';
import photo9 from '../media/WhatsApp Image 2025-01-08 at 6.36.11 PM.jpeg'
import Content from './Content';
import MapboxNavigationExample from './MapboxMap';

function Photogrid() {
  return (
    <div  className="slider_container" > 
    <h4 style={{}}>Gallery</h4>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

 
     >
    <SwiperSlide> <img  src={photo1} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo2} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo3} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo4} alt="Logo"  className='slider' /></SwiperSlide>

  </Swiper>
  <div style={{display:"flex"}}>
  <MapboxNavigationExample />
  <Content />
  
  </div>
  
  
  <div style={{marginTop:"30px"}}>
  <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide> <img  src={photo6} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo5} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo8} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo9} alt="Logo"  className='slider' /></SwiperSlide>

  </Swiper>
  </div>
  </div>
  )
}

export default Photogrid




