"use client"

const Title = ({
    text,
    level = "h1",
    size = "large",
    color = "default",
    align = "left",
    weight = "bold",
    gradient = false,
    underline = false,
    className = "",
    animate = false,
    ...props
}) => {
    const baseClasses = "transition-all duration-300"

    const sizeClasses = {
        small: {
            h1: "text-2xl md:text-3xl",
            h2: "text-xl md:text-2xl",
            h3: "text-lg md:text-xl",
            h4: "text-base md:text-lg",
            h5: "text-sm md:text-base",
            h6: "text-xs md:text-sm"
        },
        medium: {
            h1: "text-3xl md:text-4xl lg:text-5xl",
            h2: "text-2xl md:text-3xl lg:text-4xl",
            h3: "text-xl md:text-2xl lg:text-3xl",
            h4: "text-lg md:text-xl lg:text-2xl",
            h5: "text-base md:text-lg lg:text-xl",
            h6: "text-sm md:text-base lg:text-lg"
        },
        large: {
            h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            h2: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
            h3: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
            h4: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
            h5: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
            h6: "text-base md:text-lg lg:text-xl xl:text-2xl"
        },
        xlarge: {
            h1: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
            h2: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            h3: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
            h4: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
            h5: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
            h6: "text-lg md:text-xl lg:text-2xl xl:text-3xl"
        }
    }

    const colorClasses = {
        default: "text-gray-900",
        primary: "text-blue-600",
        secondary: "text-purple-600",
        success: "text-green-600",
        warning: "text-yellow-600",
        danger: "text-red-600",
        white: "text-white",
        gray: "text-gray-600",
        dark: "text-gray-800"
    }

    const alignClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify"
    }

    const weightClasses = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black"
    }

    const gradientClasses = gradient
        ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        : ""

    const underlineClasses = underline
        ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full"
        : ""

    const animateClasses = animate
        ? "animate-fade-in-up opacity-0 animation-delay-200"
        : ""

    const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size][level]}
    ${gradient ? gradientClasses : colorClasses[color]}
    ${alignClasses[align]}
    ${weightClasses[weight]}
    ${underlineClasses}
    ${animateClasses}
    ${className}
  `.trim()

    const Component = level

    return (
        <Component className={combinedClasses} {...props}>
            {text}
        </Component>
    )
}

export default Title
