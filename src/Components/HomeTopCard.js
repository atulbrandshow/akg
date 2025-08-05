"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { IMAGE_PATH } from "@/configs/config";

const HomeTopCard = ({ data }) => {
    const d = data?.pageData;

    const banners = d?.Milestone_Banners;

    return (
        // 
        <div className="relative bg-gray-100">
            <div className="block lg:hidden">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    navigation
                >
                    {banners && banners.length > 0 && banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={IMAGE_PATH + banner}
                                alt="card-top"
                                className="w-full h-auto border transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="lg:block hidden pt-16 bg-white">
                <h2 className="text-[42px] font-novaReg text-center text-black">
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">{d?.Milestone_Title}</span>
                </h2>
                <p className="max-w-3xl mx-auto text-xl font-novaReg text-center" dangerouslySetInnerHTML={{ __html: d?.Milestone_Desc }} />
                <div className="mt-5 md:flex items-center justify-center">
                    <div className="flex flex-wrap justify-between gap-2">
                        <div className="grid grid-cols-3">
                            {banners && banners.length > 0 && banners.map((banner, index) => (
                                <img
                                    key={index}
                                    src={IMAGE_PATH + banner}
                                    alt="card-top"
                                    className="object-contain transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default HomeTopCard;