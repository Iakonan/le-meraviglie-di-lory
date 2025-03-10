import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      <SwiperSlide>
        <div className="w-full h-64 md:h-[500px] md:max-w-3xl mx-auto overflow-hidden rounded-lg">
          <img 
            src="/cake1.jpg" 
            alt="Torta 1" 
            className="w-full h-full object-cover" 
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-64 md:h-[500px] md:max-w-3xl mx-auto overflow-hidden rounded-lg">
          <img 
            src="/cake2.jpg" 
            alt="Torta 2" 
            className="w-full h-full object-cover" 
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-64 md:h-[500px] md:max-w-3xl mx-auto overflow-hidden rounded-lg">
          <img 
            src="/cake3.jpg" 
            alt="Torta 3" 
            className="w-full h-full object-cover" 
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
