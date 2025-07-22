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

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-16 lg:h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

export default Banner
