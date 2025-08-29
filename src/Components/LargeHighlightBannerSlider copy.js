"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { IMAGE_PATH } from "@/configs/config"
import { useRouter } from "next/navigation"
import Image from "next/image"

const LargeHighlightBannerSlider = ({
    banners = [],
}) => {
    const router = useRouter();

    return banners.length > 0 && (
        <div className={`w-full`}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="highlight-banner-swiper"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner._id}>
                        <div
                            className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group h-[35vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh]"
                            onClick={() => router.push(banner.link || "#")}
                        >
                            <Image
                                src={IMAGE_PATH + banner.banner}
                                alt={banner.title || "Banner"}
                                height={1080}
                                width={1920}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 transition-opacity duration-300"></div>
                            {(banner.title || banner.description) && (
                                <div className="absolute bottom-6 left-0 right-0 p-4 text-white transform translate-y-0 transition-transform duration-300">
                                    {banner.title && <h3 className="ml-0 md:ml-10 lg:ml-20 font-novaBold text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-0.5 md:py-3 line-clamp-1">{banner.title}</h3>}
                                    {banner.description && <p className="mb-0 ml-0 md:mb-10 md:ml-10 lg:mb-20 lg:ml-20 text-sm sm:text-base md:text-lg lg:text-xl font-novaReg opacity-90 line-clamp-2">{banner.description}</p>}
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles */}
            <style jsx>{`
        .highlight-banner-swiper .swiper-button-next,
        .highlight-banner-swiper .swiper-button-prev {
          color: #2563eb;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        
        .highlight-banner-swiper .swiper-button-next:after,
        .highlight-banner-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        
        .highlight-banner-swiper .swiper-pagination-bullet {
          background: #2563eb;
          opacity: 0.5;
        }
        
        .highlight-banner-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    )
}

export default LargeHighlightBannerSlider
