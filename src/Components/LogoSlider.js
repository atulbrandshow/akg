"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

export default function LogoSlider() {
    // Define an array of image data
    const images = [
        { alt: "Amazon", src: "/image/company-logos/AmozonIcon.webp", width: 158, height: 48 },
        { alt: "Google", src: "/image/company-logos/Google.png", width: 158, height: 48 },
        { alt: "Microsoft", src: "/image/company-logos/Microsoft.png", width: 158, height: 48 },
        { alt: "IBM", src: "/image/company-logos/ibm.webp", width: 158, height: 48 },
        { alt: "Accenture", src: "/image/company-logos/AccentureIcon.webp", width: 158, height: 48 },
        { alt: "Infosys", src: "/image/company-logos/infosys.webp", width: 158, height: 48 },
        { alt: "Adobe", src: "/image/company-logos/Adobe.png", width: 158, height: 48 },
        { alt: "TCS", src: "/image/company-logos/tcs.webp", width: 158, height: 48 },
        { alt: "Amdocs", src: "/image/company-logos/amdocsIcon.webp", width: 158, height: 48 },
        { alt: "Wipro", src: "/image/company-logos/WIPRO.webp", width: 158, height: 48 },
        { alt: "Amazon", src: "/image/company-logos/AmozonIcon.webp", width: 158, height: 48 },
        { alt: "Google", src: "/image/company-logos/Google.png", width: 158, height: 48 },
        { alt: "Microsoft", src: "/image/company-logos/Microsoft.png", width: 158, height: 48 },
        { alt: "IBM", src: "/image/company-logos/ibm.webp", width: 158, height: 48 },
        { alt: "Accenture", src: "/image/company-logos/AccentureIcon.webp", width: 158, height: 48 },
        { alt: "Infosys", src: "/image/company-logos/infosys.webp", width: 158, height: 48 },
        { alt: "Adobe", src: "/image/company-logos/Adobe.png", width: 158, height: 48 },
        { alt: "TCS", src: "/image/company-logos/tcs.webp", width: 158, height: 48 },
        { alt: "Amdocs", src: "/image/company-logos/amdocsIcon.webp", width: 158, height: 48 },
        { alt: "Wipro", src: "/image/company-logos/WIPRO.webp", width: 158, height: 48 }
    ];
    const breakpoints = {
        320: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 9 }
    };

    return (
        
        <div className="break1:max-w-[1650px] break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto bg-white block px-16 max-md:px-3">
            <div className="mx-auto py-10">
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
                                    alt={image.alt}
                                    src={image.src}
                                    width={image.width}
                                    height={image.height}
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
