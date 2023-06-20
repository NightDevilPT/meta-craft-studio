import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

import banner1 from "../../public/banner-1.webp";
import banner2 from "../../public/banner-2.webp";
import Image from "next/image";

const BannerFrame = () => {
  return (
    <div className="banner-section">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        
        // scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Image src={banner1} alt="banner-1" />
          <div className="opacity-layer">
            <h1>CNC Laser Cutting Job Work</h1>
            <button>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner-2" />
          <div className="opacity-layer">
            <h1>Delhi Based Company, Is One Of The Most Experienced</h1>
            <button>Read More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerFrame;
