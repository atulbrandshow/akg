'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function IndustryPartnerSlider() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1
        if (newPosition >= slider.scrollWidth / 2) {
          return 0
        }
        return newPosition
      })
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  const logos = [
    { alt: "Amazon", src: "/image/company-logos/AmozonIcon.webp", width: 158, height: 48 },
    { alt: "Google", src: "/image/company-logos/Google.png", width: 158, height: 48 },
    { alt: "Microsoft", src: "/image/company-logos/Microsoft.png", width: 158, height: 48 },
    { alt: "IBM", src: "/image/company-logos/ibm.webp", width: 158, height: 48 },
    { alt: "Accenture", src: "/image/company-logos/AccentureIcon.webp", width: 158, height: 48 },
    { alt: "Infosys", src: "/image/company-logos/infosys.webp", width: 158, height: 48 },
    { alt: "Adobe", src: "/image/company-logos/Adobe.png", width: 158, height: 48 },
    { alt: "TCS", src: "/image/company-logos/tcs.webp", width: 158, height: 48 },
    { alt: "Amdocs", src: "/image/company-logos/amdocsIcon.webp", width: 158, height: 48 },
    { alt: "Wipro", src: "/image/company-logos/WIPRO.webp", width: 158, height: 48 },
    { alt: "Amazon", src: "/image/company-logos/AmozonIcon.webp", width: 158, height: 48 },
    { alt: "Google", src: "/image/company-logos/Google.png", width: 158, height: 48 },
    { alt: "Microsoft", src: "/image/company-logos/Microsoft.png", width: 158, height: 48 },
    { alt: "IBM", src: "/image/company-logos/ibm.webp", width: 158, height: 48 },
    { alt: "Accenture", src: "/image/company-logos/AccentureIcon.webp", width: 158, height: 48 },
    { alt: "Infosys", src: "/image/company-logos/infosys.webp", width: 158, height: 48 },
    { alt: "Adobe", src: "/image/company-logos/Adobe.png", width: 158, height: 48 },
    { alt: "TCS", src: "/image/company-logos/tcs.webp", width: 158, height: 48 },
    { alt: "Amdocs", src: "/image/company-logos/amdocsIcon.webp", width: 158, height: 48 },
    { alt: "Wipro", src: "/image/company-logos/WIPRO.webp", width: 158, height: 48 }
  ];

  // Duplicate logos for seamless scrolling
  const allLogos = [...logos, ...logos]

  return (
    <section className='py-10 bg-gray-100'>
      <div className="max-w-7xl mx-auto pt-6 overflow-hidden shadow-lg bg-white">
        <div className="">
        <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
        Industry{" "}
              <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
              Tie-Ups
              </span>
            </h1>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto px-3 max-sm:text-sm mt-3">
          At AKG University, immersive industry engagement empowers students with the critical skills and practical insights needed to thrive in today’s dynamic and competitive professional landscape.
          </p>

          <div className="relative px-4">
            <div
              ref={sliderRef}
              className="flex overflow-x-hidden gap-16 py-8 max-sm:pt-0 px-4"
            >
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain max-sm:h-20 max-sm:w-20"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 sm:p-10 text-sm sm:text-base text-center">
            <p>
            The AKG Centre of Excellence for AI stands as a testament to the university’s dedication to pioneering research and innovation in deep learning. With five expert faculty members from the CSE Department spearheading AI-focused training, the institution is shaping future-ready professionals in emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

