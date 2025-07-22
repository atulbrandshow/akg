"use client"
import { useState } from "react"

const ImageGallery = ({
  images = [],
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = "medium",
  aspectRatio = "square",
  showLightbox = true,
  showCaptions = true,
  className = "",
  imageClassName = "",
  ...props
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const gapClasses = {
    small: "gap-2",
    medium: "gap-4",
    large: "gap-6",
    xlarge: "gap-8",
  }

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
    auto: "aspect-auto",
  }

  const columnClasses = `
    grid
    grid-cols-${columns.sm || 1}
    md:grid-cols-${columns.md || 2}
    lg:grid-cols-${columns.lg || 3}
    xl:grid-cols-${columns.xl || 4}
  `

  const openLightbox = (index) => {
    if (showLightbox) {
      setCurrentImage(index)
      setLightboxOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <>
      <div
        className={`
          ${columnClasses}
          ${gapClasses[gap]}
          ${className}
        `}
        {...props}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openLightbox(index)}
          >
            <div className={`${aspectRatioClasses[aspectRatio]} relative`}>
              <img
                src={image.src || image}
                alt={image.alt || `Gallery image ${index + 1}`}
                className={`
                  w-full h-full object-cover transition-all duration-300
                  group-hover:scale-110
                  ${imageClassName}
                `}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Caption */}
            {showCaptions && (image.caption || image.title) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-medium">{image.caption || image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && showLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={images[currentImage]?.src || images[currentImage]}
              alt={images[currentImage]?.alt || `Gallery image ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            {showCaptions && (images[currentImage]?.caption || images[currentImage]?.title) && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium bg-black bg-opacity-50 rounded-lg px-4 py-2">
                  {images[currentImage]?.caption || images[currentImage]?.title}
                </p>
              </div>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 rounded-lg px-3 py-1">
                <span className="text-sm font-medium">
                  {currentImage + 1} / {images.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
