"use client"

const Grid = ({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = "medium",
  alignItems = "stretch",
  justifyItems = "stretch",
  className = "",
  ...props
}) => {
  const gapClasses = {
    none: "gap-0",
    small: "gap-2 md:gap-4",
    medium: "gap-4 md:gap-6",
    large: "gap-6 md:gap-8",
    xlarge: "gap-8 md:gap-12",
  }

  const alignItemsClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  }

  const justifyItemsClasses = {
    start: "justify-items-start",
    center: "justify-items-center",
    end: "justify-items-end",
    stretch: "justify-items-stretch",
  }

  const columnClasses = `
    grid
    grid-cols-${columns.sm || 1}
    ${columns.md ? `md:grid-cols-${columns.md}` : ""}
    ${columns.lg ? `lg:grid-cols-${columns.lg}` : ""}
    ${columns.xl ? `xl:grid-cols-${columns.xl}` : ""}
  `

  return (
    <div
      className={`
        ${columnClasses}
        ${gapClasses[gap]}
        ${alignItemsClasses[alignItems]}
        ${justifyItemsClasses[justifyItems]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Grid
