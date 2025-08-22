"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { IMAGE_PATH } from "@/configs/config";

export default function HomeLogoSlider({ data }) {
    // Define an array of image data
    const images = data?.pageData?.Slider_Logos || [];
    const breakpoints = {
        320: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 9 }
    };

    return (

        <div className="bg-white block px-16 max-md:px-3">
            <div className="max-w-[1400px] mx-auto py-10">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={3000}
                    breakpoints={breakpoints}
                >
                    {images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center border rounded-md h-16 max-sm:h-12">
                                <Image
                                    alt="Logo"
                                    src={IMAGE_PATH + image}
                                    width={158}
                                    height={48}
                                    className="p-1.5 h-full w-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
