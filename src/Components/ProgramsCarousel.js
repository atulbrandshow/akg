'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Brain, Users, Microscope, BookOpen, Laptop2, GraduationCap } from 'lucide-react'
import { splitTitle } from '@/utills/splitTitle';

export default function ProgramCarousel({ data }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [slidesPerView, setSlidesPerView] = useState(3)

    const d = data?.pageData;
    const { first, middle, last } = splitTitle(d?.Overview_Title);
    const icons = [Brain, Users, Microscope, BookOpen, Laptop2, GraduationCap]

    const items = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`OCT-${i}`];
        const description = d?.[`OCD-${i}`];

        if (title && description) {
            const IconComponent = icons[i % icons.length];
            items.push({
                icon: <IconComponent className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
                title,
                description
            });
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalSlides = Math.max(items.length - slidesPerView, 0)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === totalSlides ? 0 : prev + 1))
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides : prev - 1))
    }, [totalSlides])

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index)
    }, [])

    useEffect(() => {
        if (!isAutoPlaying) return

        const timer = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(timer)
    }, [isAutoPlaying, nextSlide])

    return (d?.Overview_Title || d?.Overview_Description || items.length > 0) && (
        <section className='bg-gray-100'>
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                    {first} {" "}
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                        {middle} {" "}
                    </span>
                    {last}
                </h1>
                <p className="pt-4 max-sm:text-base text-center mb-12 font-novaReg text-lg text-gray-600 max-w-5xl mx-auto" dangerouslySetInnerHTML={{ __html: d?.Overview_Description }} />
                <div className="relative">
                    <div
                        className="overflow-hidden relative"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 px-10 py-5 ${slidesPerView === 1 ? 'w-full' :
                                        slidesPerView === 2 ? 'w-1/2' :
                                            'w-1/3'
                                        }`}
                                >
                                    <div className="bg-white hover:bg-indigo-900 group hover:scale-110 transition-all duration-300 ease-in-out rounded-lg shadow-lg p-7 h-full flex flex-col items-center text-center">
                                        <div className="mb-4 text-blue-800 group-hover:text-white transition-colors duration-300 ease-in-out">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-novaSemi mb-2 text-blue-800 group-hover:text-white transition-colors duration-300 ease-in-out">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm font-novaReg flex-grow group-hover:text-white transition-colors duration-300 ease-in-out">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-blue-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-blue-600" />
                    </button>

                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({ length: totalSlides + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}