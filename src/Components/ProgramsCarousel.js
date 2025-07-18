'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Brain, Users, Microscope } from 'lucide-react'

const items = [
    {
        icon: <Brain className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Innovative Learning Programs",
        description: "Explore cutting-edge courses designed for future leaders."
    },
    {
        icon: <Users className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Exceptional Career Support",
        description: "Comprehensive guidance for your career aspirations."
    },
    {
        icon: <Microscope className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Advanced Research Facilities",
        description: "State-of-the-art labs for hands-on learning and innovation."
    },
    {
        icon: <Brain className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Innovative Learning Programs",
        description: "Explore cutting-edge courses designed for future leaders."
    },
    {
        icon: <Users className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Exceptional Career Support",
        description: "Comprehensive guidance for your career aspirations."
    },
    {
        icon: <Microscope className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Advanced Research Facilities",
        description: "State-of-the-art labs for hands-on learning and innovation."
    },
];


export default function ProgramCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [slidesPerView, setSlidesPerView] = useState(3)

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

    return (
        <section className='bg-gray-100'>
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                    Why{" "}
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                        B.Tech
                    </span>
                    {" "} CSE
                </h1>
                <p className="pt-4 max-sm:text-base text-center mb-12 font-novaReg text-lg text-gray-600 max-w-5xl mx-auto">
                    The field of Computer Science Engineering & Technology is advancing rapidly, shaping the future of innovation and technology. At AKG University, we prioritize an industry-driven and research-oriented approach to education, ensuring our students are prepared for the challenges of tomorrow. With state-of-the-art facilities, experienced faculty, and a commitment to excellence, AKG University's B.Tech CSE program empowers students to lead technological transformations. Admissions 2024 invite aspirants ready to pioneer advancements and create impactful solutions.
                </p>
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
                                        <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:text-white transition-colors duration-300 ease-in-out">
                                            {item.title}
                                        </h3>
                                        {item.subtitle && (
                                            <p className="text-gray-600 mb-2 text-sm group-hover:text-white transition-colors duration-300 ease-in-out">
                                                {item.subtitle}
                                            </p>
                                        )}
                                        <p className="text-gray-600 text-sm flex-grow group-hover:text-white transition-colors duration-300 ease-in-out">
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