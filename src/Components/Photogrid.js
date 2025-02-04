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
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          400: {
            slidesPerView: 1, // 1 slide for small screens
            spaceBetween: 10, // Less space for mobile
          },
          768: {
            slidesPerView: 2, // 2 slides for tablets
            spaceBetween: 15, // Moderate spacing
          },
          1024: {
            slidesPerView: 3, // 3 slides for desktops
            spaceBetween: 20, // Default spacing
          },
        }}
        onSlideChange={() => console.log('slide change')}>
    <SwiperSlide> <img  src={photo1} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo2} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo3} alt="Logo"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo4} alt="Logo"  className='slider' /></SwiperSlide>

  </Swiper>
  <div  className ="mapbox-container"style={{display:"flex",height:"400px"}}>
  <MapboxNavigationExample />
  <Content />
  
  </div>
  
  
  <div style={{marginTop:"30px"}}>
  <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          300: {
            slidesPerView: 2, // 1 slide for small screens
            spaceBetween: 10, // Less space for mobile
          },
          400: {
            slidesPerView: 2, // 1 slide for small screens
            spaceBetween: 10, // Less space for mobile
          },
          768: {
            slidesPerView: 3, // 2 slides for tablets
            spaceBetween: 15, // Moderate spacing
          },
          1024: {
            slidesPerView: 4, // 3 slides for desktops
            spaceBetween: 20, // Default spacing
          },
        }}
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




