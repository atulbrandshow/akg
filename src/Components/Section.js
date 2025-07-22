"use client"

const Section = ({
    children,
    id,
    background = "transparent",
    padding = "large",
    margin = "none",
    fullWidth = false,
    centered = true,
    className = "",
    ...props
}) => {
    const backgroundClasses = {
        transparent: "bg-transparent",
        white: "bg-white",
        gray: "bg-gray-50",
        light: "bg-gray-100",
        dark: "bg-gray-900 text-white",
        primary: "bg-blue-600 text-white",
        secondary: "bg-purple-600 text-white",
        gradient: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
    }

    const paddingClasses = {
        none: "py-0",
        small: "py-8 md:py-12",
        medium: "py-12 md:py-16",
        large: "py-16 md:py-24",
        xlarge: "py-24 md:py-32",
    }

    const marginClasses = {
        none: "my-0",
        small: "my-8",
        medium: "my-12",
        large: "my-16",
        xlarge: "my-24",
    }

    return (
        <section
            id={id}
            className={`
        ${backgroundClasses[background]}
        ${paddingClasses[padding]}
        ${marginClasses[margin]}
        ${className}
      `}
            {...props}
        >
            <div
                className={`
        ${fullWidth ? "w-full" : "max-w-7xl"}
        ${centered ? "mx-auto" : ""}
        px-4 sm:px-6 lg:px-8
      `}
            >
                {children}
            </div>
        </section>
    )
}

export default Section
