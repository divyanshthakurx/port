// CarouselComponent.tsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';

type Slide = {
  imgSrc: string;
  title: string;
  description: string;
};

type CarouselComponentProps = {
  slides: Slide[];
};

const CarouselComponent: React.FC<CarouselComponentProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#AA1F18] text-white p-4 rounded-lg transition-transform duration-300 transform hover:scale-105">
              <img src={slide.imgSrc} alt={slide.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-lg font-bold mt-2">{slide.title}</h3>
              <p className="text-sm">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${swiperRef.current?.realIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
