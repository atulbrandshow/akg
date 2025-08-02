'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { splitTitle } from '@/utills/splitTitle'

export default function IndustryPartnerSlider({ data }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const sliderRef = useRef(null)

  const d = data?.pageData;
  const { first, middle, last } = splitTitle(d?.Industry_Title);

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
    { alt: "Amazon", src: "/image/company-logos/AmozonIcon.webp" },
    { alt: "Google", src: "/image/company-logos/Google.png" },
    { alt: "Microsoft", src: "/image/company-logos/Microsoft.png" },
    { alt: "IBM", src: "/image/company-logos/ibm.webp" },
    { alt: "Accenture", src: "/image/company-logos/AccentureIcon.webp" },
    { alt: "Infosys", src: "/image/company-logos/infosys.webp" },
    { alt: "Adobe", src: "/image/company-logos/Adobe.png" },
    { alt: "TCS", src: "/image/company-logos/tcs.webp" },
    { alt: "Amdocs", src: "/image/company-logos/amdocsIcon.webp" },
    { alt: "Wipro", src: "/image/company-logos/WIPRO.webp" },
    { alt: "Amazon", src: "/image/company-logos/AmozonIcon.webp" },
    { alt: "Google", src: "/image/company-logos/Google.png" },
    { alt: "Microsoft", src: "/image/company-logos/Microsoft.png" },
    { alt: "IBM", src: "/image/company-logos/ibm.webp" },
    { alt: "Accenture", src: "/image/company-logos/AccentureIcon.webp" },
    { alt: "Infosys", src: "/image/company-logos/infosys.webp" },
    { alt: "Adobe", src: "/image/company-logos/Adobe.png" },
    { alt: "TCS", src: "/image/company-logos/tcs.webp" },
    { alt: "Amdocs", src: "/image/company-logos/amdocsIcon.webp" },
    { alt: "Wipro", src: "/image/company-logos/WIPRO.webp" }
  ];

  const allLogos = [...logos, ...logos]

  return (
    <section className='py-10 bg-gray-100'>
      <div className="max-w-7xl mx-auto pt-6 overflow-hidden shadow-lg bg-white">
        <div className="">
          <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
            {first}{" "}
            <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
              {middle}{" "}
            </span>
            {last}
          </h1>
          <p className="text-center font-novaReg text-gray-600 mb-12 max-w-4xl mx-auto px-3 max-sm:text-sm mt-3">
            {d?.Industry_Description}
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
                    src={logo.src || "/image/company-logos/defaultLogo.png"}
                    alt={logo.alt}
                    width={130}
                    height={130}
                    className="object-contain max-sm:h-20 max-sm:w-20"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 sm:p-10 text-sm sm:text-base text-center font-novaReg">
            <p>
              {d?.Industry_Bottom_Description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

