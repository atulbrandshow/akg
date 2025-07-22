"use client"

const Holder = ({
  children,
  variant = "default",
  size = "medium",
  background = "transparent",
  padding = "medium",
  margin = "none",
  maxWidth = "none",
  centered = false,
  shadow = "none",
  border = "none",
  rounded = "medium",
  className = "",
  ...props
}) => {
  const baseClasses = "transition-all duration-300"

  const variantClasses = {
    default: "",
    card: "bg-white border border-gray-200",
    elevated: "bg-white shadow-lg border border-gray-100",
    outlined: "border-2 border-gray-300",
    filled: "bg-gray-50",
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
  }

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xlarge: "text-xl",
  }

  const backgroundClasses = {
    transparent: "bg-transparent",
    white: "bg-white",
    gray: "bg-gray-50",
    light: "bg-gray-100",
    dark: "bg-gray-900",
    primary: "bg-blue-50",
    secondary: "bg-purple-50",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
  }

  const paddingClasses = {
    none: "p-0",
    small: "p-4",
    medium: "p-6 md:p-8",
    large: "p-8 md:p-12",
    xlarge: "p-12 md:p-16",
  }

  const marginClasses = {
    none: "m-0",
    small: "m-4",
    medium: "m-6 md:m-8",
    large: "m-8 md:m-12",
    xlarge: "m-12 md:m-16",
    auto: "mx-auto",
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
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
    screen: "max-w-screen-xl",
  }

  const shadowClasses = {
    none: "shadow-none",
    small: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg",
    xlarge: "shadow-xl",
    "2xlarge": "shadow-2xl",
    inner: "shadow-inner",
  }

  const borderClasses = {
    none: "border-0",
    thin: "border",
    medium: "border-2",
    thick: "border-4",
    dashed: "border border-dashed",
    dotted: "border border-dotted",
  }

  const roundedClasses = {
    none: "rounded-none",
    small: "rounded-sm",
    medium: "rounded-lg",
    large: "rounded-xl",
    xlarge: "rounded-2xl",
    full: "rounded-full",
  }

  const centeredClasses = centered ? "mx-auto" : ""

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${background !== "transparent" ? backgroundClasses[background] : ""}
    ${paddingClasses[padding]}
    ${marginClasses[margin]}
    ${maxWidthClasses[maxWidth]}
    ${centeredClasses}
    ${shadowClasses[shadow]}
    ${borderClasses[border]}
    ${roundedClasses[rounded]}
    ${className}
  `.trim()

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  )
}

export default Holder
