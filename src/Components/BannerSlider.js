import React from 'react'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@headlessui/react"

const BannerSlider = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="relative w-full h-[95vh] max-lg:h-[70vh] max-md:h-[60vh] overflow-hidden">
            <AnimatePresence initial={false} custom={currentSlide}>
                <motion.div
                    key={currentSlide}
                    custom={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="relative w-full h-full">
                        <img
                            src={slides[currentSlide].image}
                            alt="University"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
                        <div className="absolute inset-0 max-w-[1400px] mx-auto flex items-center justify-between gap-5 text-white max-sm:flex-col max-sm:justify-end px-16 mb-10">
                            <div className="flex flex-col max-w-full">
                                <h2 className="text-6xl uppercase font-novaBold mb-4 max-w-xl leading-none max-lg:text-3xl max-md:text-3xl max-md:leading-tight max-sm:text-xl max-sm:leading-tight">{slides[currentSlide].title} <span className="text-secondary">{slides[currentSlide].subHeading}</span></h2>
                                <h3 className="text-3xl font-novaSemi mb-4 max-w-lg max-md:text-xl max-md:leading-tight max-sm:text-lg max-sm:leading-tight">{slides[currentSlide].subtitle}</h3>
                            </div>
                            <div className="flex flex-col items-start max-w-full">
                                <p className="text-3xl max-lg:text-xl font-novaReg leading-none max-w-lg pb-8 max-sm:text-base max-sm:leading-tight">{slides[currentSlide].description}</p>
                                <button className="py-2.5 px-6 rounded-xl uppercase bg-secondary text-black font-novaBold tracking-wider text-sm hover:bg-orange-600 flex items-center gap-2 max-sm:px-3 max-sm:py-1.5 leading-tight">
                                    {slides[currentSlide].buttonText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white opacity-50 rounded-full hover:bg-opacity-75 p-2"
                onClick={prevSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white opacity-50 rounded-full hover:bg-opacity-75 p-2"
                onClick={nextSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
            </Button>
        </div>
    )
}

export default BannerSlider