'use client';

import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Button from './Button'
import Image from 'next/image'
import { easeIn } from 'framer-motion';

const MainSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const buildingImages = [
        "/image/building/building4.webp",
        "/image/building/building3.webp",
        "/image/building/building2.webp",
        "/image/building/building1.webp",
        "/image/building/building5.webp",
    ];

    useGSAP(() => {
        gsap.from(".slide", { x: -1000, duration: 0.7, ease: easeIn })
        gsap.from(".popup", { x: 1000, opacity: 0, duration: 0.7, ease: easeIn })
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % buildingImages.length);
        }, 9000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden relative -mt-20">
            <div className="flex justify-center relative z-20 min-h-screen">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:pb-10">
                    <div className="slide flex justify-center max-w-3xl flex-col pl-20 max-lg:mt-52 max-lg:items-center max-lg:px-5 ">
                        <h1 className="max-w-4xl font-novaThin max-sm:text-3xl tracking-tight text-white max-xl:text-5xl text-6xl max-lg:text-center max-[350px]:text-2xl">
                            One of the Top <br />
                            <span className="relative whitespace-nowrap ">
                                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/90" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                                <span className="relative font-novaSemi text-white uppercase">Private University</span>
                            </span>
                        </h1>
                        <p className="mt-8 text-white text-2xl font-novaReg max-lg:text-base max-lg:text-center">
                            The only University in Uttar Pradesh (AKGU) Accredited by NAAC with an A++ grade
                        </p>
                        <div className="h-20">
                            <Button text={'Apply Today'} className="py-3 max-sm:px-6 max-sm:text-xs px-10 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform  scale-y-105 tracking-widest" />
                        </div>
                    </div>
                    <div className="popup max-md:mt-10 max-sm:px-6 max-[330px]:px-2">
                        <Form />
                    </div>
                </div>
            </div>
            <div className="w-full h-full object-cover absolute left-0 top-0 z-10 bg-gradient-to-r from-black/60 to-white/0 "></div>
            <Image src={buildingImages[currentImageIndex]} width={1920} height={1080} alt="Building" priority className="w-full h-full object-cover absolute left-0 top-0 z-0 animate-zoomInOut" />
        </div>
    )
};

export default MainSection