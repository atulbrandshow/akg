"use client"

const Description = ({
  text,
  variant = "default",
  size = "medium",
  color = "default",
  align = "left",
  maxWidth = "none",
  lineHeight = "relaxed",
  className = "",
  animate = false,
  ...props
}) => {
  const baseClasses = "transition-all duration-300"

  const sizeClasses = {
    small: "text-sm md:text-base",
    medium: "text-base md:text-lg",
    large: "text-lg md:text-xl",
    xlarge: "text-xl md:text-2xl"
  }

  const colorClasses = {
    default: "text-gray-700",
    light: "text-gray-500",
    dark: "text-gray-900",
    primary: "text-blue-600",
    secondary: "text-purple-600",
    white: "text-white",
    muted: "text-gray-600"
  }

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
  }

  const maxWidthClasses = {
    none: "",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    prose: "max-w-prose"
  }

  const lineHeightClasses = {
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  }

  const variantClasses = {
    default: "",
    highlighted: "bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500",
    quote: "border-l-4 border-gray-300 pl-4 italic",
    card: "bg-white p-6 rounded-xl shadow-lg border border-gray-100"
  }

  const animateClasses = animate
    ? "animate-fade-in opacity-0 animation-delay-300"
    : ""

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${colorClasses[color]}
    ${alignClasses[align]}
    ${maxWidthClasses[maxWidth]}
    ${lineHeightClasses[lineHeight]}
    ${variantClasses[variant]}
    ${animateClasses}
    ${className}
  `.trim()

  return (
    <div className={combinedClasses} {...props}>
      {typeof text === 'string' ? (
        <p dangerouslySetInnerHTML={{ __html: text }} className="font-novaReg text-justify" />
      ) : (
        text
      )}
    </div>
  )
}

export default Description
