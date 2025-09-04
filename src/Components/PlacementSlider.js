"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { IMAGE_PATH } from "@/configs/config";


const PlacementSlider = ({ placement, delay }) => {
  return (
    <div className="h-full w-full">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: delay, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {placement?.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="h-full w-full cursor-grab">
              <img
                className="h-full w-full object-cover"
                src={IMAGE_PATH + item}
                alt="placement"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PlacementSlider