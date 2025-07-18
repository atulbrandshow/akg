"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const images = [
    "/image/national-admission/photo-1.jpeg",
    "/image/national-admission/photo-2.jpeg",
    "/image/national-admission/photo-3.jpeg",
    "/image/national-admission/photo-4.jpeg",
    "/image/national-admission/photo-1.jpeg",
]

export default function PanoramaSlider() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isPaused, setIsPaused] = useState(false)
    const constraintsRef = useRef(null)
    const sliderRef = useRef(null)
    const controls = useAnimation()
    const x = useMotionValue(0)

    const slideWidth = 600 // Width of each slide
    const visibleSlides = 3
    const totalWidth = images.length * slideWidth
    const containerWidth = visibleSlides * slideWidth

    useEffect(() => {
        const updateIndex = () => {
            const newIndex = Math.round(x.get() / -slideWidth) + 1
            setCurrentIndex(newIndex)
        }

        const unsubscribe = x.onChange(updateIndex)
        return () => unsubscribe()
    }, [x])

    useEffect(() => {
        let timer

        const autoSlide = () => {
            if (!isPaused) {
                const nextIndex = (currentIndex % (images.length - 2)) + 1
                goToSlide(nextIndex)
            }
        }

        timer = setInterval(autoSlide, 3000) // Change slide every 3 seconds

        return () => clearInterval(timer)
    }, [currentIndex, isPaused])

    const handleDragEnd = () => {
        const newX = Math.round(x.get() / slideWidth) * slideWidth
        controls.start({ x: newX })
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 5000) // Resume auto-sliding after 5 seconds of inactivity
    }

    const goToSlide = (index) => {
        const newIndex = Math.max(1, Math.min(index, images.length - 2))
        controls.start({ x: -(newIndex - 1) * slideWidth })
    }

    const togglePause = () => {
        setIsPaused(!isPaused)
    }

    return (
        <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden">
            <motion.div
                ref={constraintsRef}
                className="relative w-full h-[400px]"
                style={{ width: `${containerWidth}px` }}
            >
                <motion.div
                    ref={sliderRef}
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{ x, width: `${totalWidth}px` }}
                    className="absolute top-0 left-0 flex touch-pan-y"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="w-[600px] h-[400px] shrink-0 relative"
                            style={{
                                filter: index === currentIndex ? "none" : "grayscale(100%)",
                                transition: "filter 0.3s ease-in-out",
                            }}
                        >
                            <img
                                src={src}
                                alt={`Panorama slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <button
                onClick={() => goToSlide(currentIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                aria-label="Previous slide"
                disabled={currentIndex <= 1}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => goToSlide(currentIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                aria-label="Next slide"
                disabled={currentIndex >= images.length - 2}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}