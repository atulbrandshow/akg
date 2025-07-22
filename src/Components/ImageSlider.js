"use client"
import { useState, useEffect, useRef } from "react"

const ImageSlider = ({
  images = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  showCounter = false,
  infinite = true,
  aspectRatio = "video",
  transition = "slide",
  className = "",
  imageClassName = "",
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const intervalRef = useRef(null)
  const sliderRef = useRef(null)

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[21/9]",
    cinema: "aspect-[2.35/1]",
  }

  const transitionClasses = {
    slide: "transform transition-transform duration-500 ease-in-out",
    fade: "transition-opacity duration-500 ease-in-out",
    zoom: "transform transition-all duration-500 ease-in-out",
  }

  useEffect(() => {
    if (isPlaying && images.length > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isPlaying, currentSlide, autoPlayInterval, images.length])

  const nextSlide = () => {
    if (infinite) {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    } else {
      setCurrentSlide((prev) => Math.min(prev + 1, images.length - 1))
    }
  }

  const prevSlide = () => {
    if (infinite) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    } else {
      setCurrentSlide((prev) => Math.max(prev - 1, 0))
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  if (!images.length) return null

  return (
    <div className={`relative group ${className}`} {...props}>
      {/* Main Slider Container */}
      <div className={`relative overflow-hidden rounded-xl ${aspectRatioClasses[aspectRatio]}`}>
        {transition === "slide" && (
          <div
            ref={sliderRef}
            className={`flex ${transitionClasses[transition]}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={image.src || image}
                  alt={image.alt || `Slide ${index + 1}`}
                  className={`w-full h-full object-cover ${imageClassName}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {(image.caption || image.title) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-white text-lg font-semibold mb-2">{image.title}</h3>
                    {image.caption && <p className="text-white text-sm opacity-90">{image.caption}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {transition === "fade" && (
          <div className="relative">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 ${transitionClasses[transition]} ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src={image.src || image}
                  alt={image.alt || `Slide ${index + 1}`}
                  className={`w-full h-full object-cover ${imageClassName}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {(image.caption || image.title) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-white text-lg font-semibold mb-2">{image.title}</h3>
                    {image.caption && <p className="text-white text-sm opacity-90">{image.caption}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Navigation Arrows */}
        {showArrows && images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              disabled={!infinite && currentSlide === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={!infinite && currentSlide === images.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        )}

        {/* Counter */}
        {showCounter && images.length > 1 && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentSlide + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation */}
      {images.length > 1 && images.length <= 6 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-200 ${index === currentSlide ? "ring-2 ring-blue-600 scale-105" : "opacity-70 hover:opacity-100"
                }`}
            >
              <img src={image.src || image} alt={`Thumbnail ${index + 1}`} className="w-16 h-12 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageSlider
