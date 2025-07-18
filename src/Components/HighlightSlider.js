'use client';

import React from 'react'
import Link from 'next/link';
import { slidesData } from '@/Json/BtechData'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';

const HighlightSlider = () => {
    return (
        <div className="-mt-60 max-w-[1500px] max-2xl:max-w-7xl w-full mx-auto mb-6">
            <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Scrollbar, A11y, Autoplay]}
                breakpoints={{
                    680: { slidesPerView: 1 },
                    1100: { slidesPerView: 2 },
                }}
            >
                {slidesData?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`relative w-full h-[400px] max-sm:h-72 bg-cover bg-center p-6 max-sm:p-2`} style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent-900/20"></div>
                            <div className="relative p-6 max-sm:p-0">
                                <h2 className={`text-4xl max-sm:text-2xl max-w-xs font-novaReg mb-2 ${slide.text} `}>{slide.title}</h2>
                                <p className={`${slide.text} max-w-md max-sm:text-xs mb-5`}>{slide.description}</p>
                                <Link href={slide.linkUrl} className={`bg-btn-gradient animate-gradient text-white py-2 text-sm font-novaSemi px-4 rounded`}>
                                    {slide.linkText}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HighlightSlider