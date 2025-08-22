"use client"

import { useState, useRef } from "react"

const Demo = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const cards = [
    {
      id: 1,
      title: "PORTES OUVERTES AUTOMNE 2025",
      subtitle: "JOVEMBRE 9H À 12H",
      date: "Dimanche 9 novembre 09h00",
      tag: "Événements",
      location: "Mérici collégial privé",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "LCL.11 - GESTION D'ÉVÉNEMENTS ET DE CONGRÈS",
      tag: "Stage",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "410.G0 - TECHNIQUES D'ADMINISTRATION ET DE GESTION",
      subtitle: "Apprentissage en milieu de travail",
      tag: "Nouveau profil",
      image: "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "ADMISSION",
      tag: "ADMISSION",
      image: "https://plus.unsplash.com/premium_photo-1683887033250-25abb485d315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    },
  ]

  const handleMouseMove = (e, cardId) => {
    if (!containerRef.current) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
    setHoveredCard(cardId)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
    setMousePosition({ x: 0, y: 0 })
  }

  const getCardTransform = (cardId, cardRect) => {
    if (hoveredCard !== cardId) {
      return "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) skew(0deg, 0deg)"
    }

    const { x, y } = mousePosition
    const centerX = cardRect?.width / 2 || 150
    const centerY = cardRect?.height / 2 || 200

    const rotateX = Math.max(-12, Math.min(12, ((y - centerY) / centerY) * -15))
    const rotateY = Math.max(-12, Math.min(12, ((x - centerX) / centerX) * 15))

    // Calculate corner proximity for stretching effect
    const corners = [
      { x: 0, y: 0 }, // top-left
      { x: cardRect?.width || 300, y: 0 }, // top-right
      { x: 0, y: cardRect?.height || 400 }, // bottom-left
      { x: cardRect?.width || 300, y: cardRect?.height || 400 }, // bottom-right
    ]

    let minDistance = Number.POSITIVE_INFINITY
    let closestCorner = null

    corners.forEach((corner, index) => {
      const distance = Math.sqrt(Math.pow(x - corner.x, 2) + Math.pow(y - corner.y, 2))
      if (distance < minDistance) {
        minDistance = distance
        closestCorner = index
      }
    })

    // Apply stretching effect when near corners
    let skewX = 0
    let skewY = 0
    let scaleX = 1
    let scaleY = 1

    if (minDistance < 100) {
      // Smooth easing function for more natural feel
      const rawIntensity = (100 - minDistance) / 100
      const intensity = rawIntensity * rawIntensity * (3 - 2 * rawIntensity) // Smooth step function

      switch (closestCorner) {
        case 0: // top-left
          skewX = Math.max(-5, Math.min(5, intensity * 6))
          skewY = Math.max(-3, Math.min(3, intensity * 3))
          break
        case 1: // top-right
          skewX = Math.max(-5, Math.min(5, intensity * -6))
          skewY = Math.max(-3, Math.min(3, intensity * 3))
          break
        case 2: // bottom-left
          skewX = Math.max(-5, Math.min(5, intensity * 6))
          skewY = Math.max(-3, Math.min(3, intensity * -3))
          break
        case 3: // bottom-right
          skewX = Math.max(-5, Math.min(5, intensity * -6))
          skewY = Math.max(-3, Math.min(3, intensity * -3))
          break
      }
      scaleX = Math.max(0.98, Math.min(1.08, 1 + intensity * 0.08))
      scaleY = Math.max(0.99, Math.min(1.04, 1 + intensity * 0.04))
    }

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleX}, ${scaleY}) skew(${skewX}deg, ${skewY}deg)`
  }

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto flex gap-4 md:gap-6 pb-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#cbd5e1 transparent",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative flex-shrink-0 w-72 md:w-80 h-96 md:h-[450px] cursor-pointer group"
            onMouseMove={(e) => handleMouseMove(e, card.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getCardTransform(card.id, { width: 320, height: 450 }),
              transition:
                hoveredCard === card.id
                  ? "transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)"
                  : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className={`relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white`}
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-6 text-black relative z-10">
                {card.subtitle && <p className="text-xs md:text-sm font-medium mb-2 opacity-90">{card.subtitle}</p>}

                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 leading-tight">{card.title}</h3>

                {card.date && (
                  <div className="flex items-center gap-2 mb-3 text-xs md:text-sm opacity-90">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{card.date}</span>
                  </div>
                )}

                {card.location && (
                  <div className="flex items-center gap-2 mb-4 text-xs md:text-sm opacity-90">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{card.location}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      card.tag === "Nouveau profil" ? "bg-yellow-400 text-yellow-900" : "bg-white/20 text-black"
                    }`}
                  >
                    {card.tag}
                  </span>

                  <div
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                    style={{
                      transform: hoveredCard === card.id ? "translateX(4px)" : "translateX(0px)",
                      transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-white/5 pointer-events-none"
                style={{
                  opacity: hoveredCard === card.id ? 1 : 0,
                  transition: "opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Demo
