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
        
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{

          313: {
            slidesPerView: 1, // 1 slide for very small screens (like iPhone SE)
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




