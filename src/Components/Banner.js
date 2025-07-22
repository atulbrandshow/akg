"use client"
import { useState, useEffect } from "react"

const Banner = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  backgroundColor = "gradient",
  height = "medium",
  overlay = true,
  overlayOpacity = "medium",
  textAlign = "center",
  textColor = "white",
  children,
  className = "",
  animate = true,
  parallax = false,
  ...props
}) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (parallax) {
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [parallax])

  const heightClasses = {
    small: "h-64 md:h-80",
    medium: "h-80 md:h-96 lg:h-[32rem]",
    large: "h-96 md:h-[32rem] lg:h-[40rem]",
    full: "h-screen",
    auto: "min-h-[20rem] py-16 md:py-24"
  }

  const backgroundClasses = {
    gradient: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600",
    primary: "bg-blue-600",
    secondary: "bg-purple-600",
    dark: "bg-gray-900",
    light: "bg-gray-100",
    transparent: "bg-transparent"
  }

  const overlayClasses = {
    zero: "bg-black bg-opacity-0",
    light: "bg-black bg-opacity-20",
    medium: "bg-black bg-opacity-40",
    dark: "bg-black bg-opacity-60",
    heavy: "bg-black bg-opacity-80"
  }

  const textAlignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  }

  const textColorClasses = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-700",
    primary: "text-blue-600"
  }

  const parallaxStyle = parallax
    ? { transform: `translateY(${scrollY * 0.5}px)` }
    : {}

  return (
    <div
      className={`
        relative overflow-hidden flex items-center justify-center
        ${heightClasses[height]}
        ${!backgroundImage && !backgroundVideo ? backgroundClasses[backgroundColor] : ''}
        ${className}
      `}
      {...props}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            ...parallaxStyle
          }}
        />
      )}

      {/* Background Video */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (backgroundImage || backgroundVideo) && (
        <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`} />
      )}

      {/* Content */}
      <div className={`
        relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        flex flex-col justify-center
        ${textAlignClasses[textAlign]}
        ${textColorClasses[textColor]}
      `}>
        <div className={`
          max-w-4xl
          ${textAlign === 'center' ? 'mx-auto' : ''}
          ${animate ? 'animate-fade-in-up' : ''}
        `}>
          {title && (
            <h1 className={`
              text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4
              ${animate ? 'animation-delay-200' : ''}
            `}>
              {title}
            </h1>
          )}

          {subtitle && (
            <h2 className={`
              text-xl md:text-2xl lg:text-3xl font-medium mb-6 opacity-90
              ${animate ? 'animation-delay-400' : ''}
            `}>
              {subtitle}
            </h2>
          )}

          {description && (
            <p className={`
              text-lg md:text-xl leading-relaxed mb-8 opacity-80 max-w-3xl
              ${textAlign === 'center' ? 'mx-auto' : ''}
              ${animate ? 'animation-delay-600' : ''}
            `}>
              {description}
            </p>
          )}

          {children && (
            <div className={animate ? 'animation-delay-800' : ''}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
