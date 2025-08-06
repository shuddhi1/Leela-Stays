import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import './Photogrid.css';
import photo1 from '../media/Rainy1.jpeg';
import photo2 from '../media/Room2.jpeg';
import photo3 from '../media/mall.jpg';
import photo4 from '../media/Outside_morning.jpeg';
import photo5 from '../media/window.jpeg';
import photo6 from '../media/Cloud.jpeg';

import photo8 from '../media/sunset.jpg';
import photo9 from '../media/WhatsApp Image 2025-01-08 at 6.36.11 PM.jpeg';
import photo7 from "../media/out5.jpeg";
import photo10 from "../media/nightsky.jpg";

import photo11 from "../media/out.jpeg";

import photo12 from "../media/out2.jpeg";

import photo13 from "../media/out3.jpeg";

import photo14 from "../media/out4.jpeg";
 import photo15 from "../media/out5.jpeg";
 import photo16 from "../media/out6.jpeg";
 import photo17 from "../media/out7.jpeg"
import Content from './Content';


function Photogrid() {
  return (
    <div className="photogrid-container">
      <h2 className="photogrid-title">Experience the Beauty of Leela Stays</h2>
      
      <div className="slider_container">
        <div className="navigation-hint left">← Swipe</div>
        <div className="navigation-hint right">Swipe →</div>
    
    <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
 
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{

          313: {
            slidesPerView: 2, // 1 slide for very small screens (like iPhone SE)
            spaceBetween: 10, // Less space for smaller devices
          },
          480: {
            slidesPerView: 1, // 1 slide for smaller phones in portrait
            spaceBetween: 15, // Slightly more space
          },
          768: {
            slidesPerView: 2, // 2 slides for tablets (iPad and larger phones)
            spaceBetween: 20, // Moderate spacing
          },
          1024: {
            slidesPerView: 3, // 3 slides for standard desktops
            spaceBetween: 25, // Default spacing for larger screens
          },
          1280: {
            slidesPerView: 4, // 4 slides for wider desktops
            spaceBetween: 30, // More space for wide screens
          },
        }}
        
        
        onSlideChange={() => console.log('slide change')}>
     <SwiperSlide> <img  src={photo9} alt="Rainy day view at Leela Stays"  className='slider' /></SwiperSlide>
      
       <SwiperSlide> <img  src={photo14} alt="Rainy day view at Leela Stays"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo1} alt="Rainy day view at Leela Stays"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo2} alt="Comfortable room interior"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo3} alt="Nearby shopping mall"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo4} alt="Beautiful morning outside view"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo7} alt="Beautiful morning outside view"  className='slider' /></SwiperSlide>
     <SwiperSlide> <img  src={photo17} alt="Rainy day view at Leela Stays"  className='slider'/></SwiperSlide>
  </Swiper>
  </div>
  
  
      <div className="section-divider"></div>
  
  <div className="slider_container">
    <div className="navigation-hint left">← Swipe</div>
    <div className="navigation-hint right">Swipe →</div>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          313: {
            slidesPerView: 2, // 1 slide for very small screens (like iPhone SE)
            spaceBetween: 10, // Less space for smaller devices
          },
          480: {
            slidesPerView: 2, // 1 slide for smaller phones in portrait
            spaceBetween: 15, // Slightly more space
          },
          768: {
            slidesPerView: 2, // 2 slides for tablets (iPad and larger phones)
            spaceBetween: 20, // Moderate spacing
          },
          1024: {
            slidesPerView: 3, // 3 slides for standard desktops
            spaceBetween: 25, // Default spacing for larger screens
          },
          1280: {
            slidesPerView: 4, // 4 slides for wider desktops
            spaceBetween: 30, // More space for wide screens
          },
        }}
        
        
    >
       <SwiperSlide> <img  src={photo15} alt="Rainy day view at Leela Stays"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo6} alt="Cloudy mountain view"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo5} alt="Window view from room"  className='slider' /></SwiperSlide>
     <SwiperSlide> <img  src={photo11} alt="Rainy day view at Leela Stays"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo8} alt="Beautiful sunset view"  className='slider' /></SwiperSlide>
     <SwiperSlide> <img  src={photo12} alt="Rainy day view at Leela Stays"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo16} alt="Scenic landscape view"  className='slider' /></SwiperSlide>
    <SwiperSlide> <img  src={photo4} alt="Beautiful morning outside view"  className='slider' /></SwiperSlide>
  </Swiper>
  </div>
  

    </div>
  )
}

export default Photogrid
