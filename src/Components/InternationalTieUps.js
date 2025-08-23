"use client";

import React from 'react'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { splitTitle } from '@/utills/splitTitle';
import { IMAGE_PATH } from '@/configs/config';


const InternationalTieUps = ({ data }) => {
    const d = data?.pageData;
    const { first, middle, last } = splitTitle(d?.International_TieUps_Title);

    const slidesData = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`ITT-${i}`];
        const description = d?.[`ITD-${i}`];
        const imageUrl = d?.[`ITI-${i}`];

        if (title && description && imageUrl) {
            slidesData.push({
                imageUrl: IMAGE_PATH + imageUrl,
                title,
                description
            });
        }
    }

    return slidesData.length > 0 && (
        <section className='py-10'>
            <div className='max-w-4xl mx-auto text-center px-3'>
                <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                        {first} {" "}
                    </span>
                    {middle} {" "} {last}
                </h1>
                <p className='font-novaReg mt-3'>{d?.International_TieUps_Desc}</p>
            </div>
            <div className="w-full mx-auto text-foreground pt-6">
                <Swiper
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Scrollbar, A11y, Autoplay]}
                    breakpoints={{
                        680: { slidesPerView: 1 },
                        800: { slidesPerView: 2 },
                        1300: { slidesPerView: 3 },
                    }}>
                    {slidesData?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={`relative w-full h-80 max-sm:h-72 bg-cover bg-center p-6 max-sm:p-2`} style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent-900/20"></div>
                                <div className="relative flex flex-col justify-end h-full items-start p-6 max-sm:p-0">
                                    <h2 className={`text-4xl max-sm:text-2xl text-white max-w-xs font-novaReg mb-2 ${slide.text} `}>{slide.title}</h2>
                                    <p className={`${slide.text} max-w-md text-gray-300 max-sm:text-xs mb-5`}>{slide.description}</p>
                                    {/* <Link href={slide.linkUrl} className={`${slide.buttonClass} py-2 max-sm:text-sm font-novaSemi px-4 rounded`}>
                                    {slide.linkText}
                                </Link> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default InternationalTieUps