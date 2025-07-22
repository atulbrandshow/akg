"use client";

const ShortDescription = ({
  text,
  variant = "default",
  size = "small",
  color = "muted",
  align = "left",
  badge = false,
  icon = null,
  className = "",
  truncate = false,
  maxLength = 100,
  allowHTML = false,
  ...props
}) => {
  const baseClasses = "transition-all duration-300";

  const sizeClasses = {
    xs: "text-xs",
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const colorClasses = {
    default: "text-gray-700",
    muted: "text-gray-500",
    light: "text-gray-400",
    dark: "text-gray-900",
    primary: "text-blue-600",
    secondary: "text-purple-600",
    success: "text-green-600",
    warning: "text-yellow-600",
    danger: "text-red-600",
    white: "text-white",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const variantClasses = {
    default: "",
    badge: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
    pill: "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800",
    outlined:
      "inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium border border-gray-300 text-gray-700",
    subtle: "inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-50 text-gray-600",
  };

  const safeText = typeof text === "string" ? text : "";

  const processedText =
    truncate && safeText.length > maxLength ? `${safeText.substring(0, maxLength)}...` : safeText;

  const combinedClasses = `
    ${baseClasses}
    ${badge || variant !== "default" ? variantClasses[variant] : sizeClasses[size]}
    ${badge || variant !== "default" ? "" : colorClasses[color]}
    ${badge || variant !== "default" ? "" : alignClasses[align]}
    ${className}
  `.trim();

  if (allowHTML) {
    return (
      <span
        className={combinedClasses}
        {...props}
        dangerouslySetInnerHTML={{
          __html: icon ? `${icon}${processedText}` : processedText,
        }}
      />
    );
  }

  return (
    <span className={combinedClasses} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {processedText}
    </span>
  );
};

export default ShortDescription;
