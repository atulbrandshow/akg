"use client"
import { IMAGE_PATH } from "@/configs/config"
import { useState, useEffect } from "react"

export default function SlickSlider({ data }) {
  const d = data?.pageData
  const words = d?.Vibrant_Journey_Title?.trim().split(" ")
  const last = words?.slice(-2).join(" ")
  const first = words?.slice(0, -2).join(" ")

  const stats = []
  for (let i = 1; i <= 10; i++) {
    const count = d?.[`VJC-${i}`]
    const title = d?.[`VJT-${i}`]
    const desc = d?.[`VJD-${i}`]

    if (count && title && desc) {
      stats.push({
        count,
        title,
        desc,
      })
    }
  }

  // Create cardDetails from API data
  const cardDetails = []
  for (let i = 1; i <= 10; i++) {
    const title = d?.[`VJC-Title-${i}`]
    const subheading = d?.[`VJC-SubHeading-${i}`]
    const images = d?.[`VJC-Images-${i}`]

    if (title && subheading && images) {
      cardDetails.push({
        id: i,
        title,
        subheading,
        images,
      })
    }
  }

  const [imageIndex, setImageIndex] = useState({})

  // Initialize imageIndex when cardDetails changes
  useEffect(() => {
    if (cardDetails.length > 0) {
      const initialIndex = cardDetails.reduce((acc, item) => {
        acc[item.id] = 0
        return acc
      }, {})
      setImageIndex(initialIndex)
    }
  }, [cardDetails.length])

  // Set up staggered intervals for each card
  useEffect(() => {
    if (cardDetails.length === 0) return

    const intervals = cardDetails.map((item, idx) => {
      return setInterval(
        () => {
          setImageIndex((prevIndex) => {
            const newIndex = { ...prevIndex }
            if (item.images && item.images.length > 0) {
              newIndex[item.id] = (prevIndex[item.id] + 1) % item.images.length
            }
            return newIndex
          })
        },
        (idx + 1) * 1000,
      ) // Different timing for each card: 1s, 2s, 3s, etc.
    })

    // Clear all intervals on cleanup
    return () => {
      intervals.forEach(clearInterval)
    }
  }, [cardDetails.length]) // Only depend on length to avoid recreating intervals unnecessarily

  const getGradientClass = (title) => {
    return title.toLowerCase() === "engineering"
      ? "bg-gradient-to-r from-blue-600 to-violet-600"
      : "bg-gradient-to-tr from-amber-500 to-red-600"
  }

  return (
    <>
      <section className="h-full bg-[#F3F3F3] py-8">
        <div className="break1:max-w-[1500px] break2:max-w-[1320px] break3:max-w-[1200px] break4:max-w-[1040px] mx-auto">
          <header className="text-center mb-8 max-xl:mb-5">
            <h1 className="text-[42px] font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
              {first}{" "}
              <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                {last}
              </span>
            </h1>
          </header>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4 flex items-center relative">
              {/* Unique Design Elements */}
              <div className="absolute left-[-30%] top-[-10%] h-64 w-64 transform rotate-45 bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 opacity-30 blur-xl rounded-full z-0" />
              <div className="absolute max-lg:hidden right-[-20%] bottom-[20%] h-48 w-48 transform -rotate-45 bg-gradient-to-br from-amber-500 via-amber-700 to-amber-900 opacity-30 blur-xl rounded-full z-0" />
              <div className="absolute left-[30%] top-[70%] h-32 w-32 transform rotate-12 bg-gradient-to-br from-red-400 via-red-600 to-red-800 opacity-30 blur-xl rounded-full z-0" />
              {/* Left Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-lg:grid-cols-2 max-lg:px-10 max-sm:px-5 max-[400px]:px-2 z-10 relative max-lg:w-full">
                {stats.map((item, i) => {
                  const hasUnit = item.count.includes("LPA") || item.count.includes("CR")
                  const [value, unit] = hasUnit ? item.count.split(" ") : [item.count, ""]
                  return (
                    <article
                      key={i}
                      className={`p-6 max-xl:p-4 leading-5 max-lg:text-center ${
                        i < 2 ? "border-b" : ""
                      } ${i % 2 === 0 ? "border-r" : ""} border-gray-300`}
                    >
                      <h2 className="text-5xl xl:text-5xl font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                        <span className="whitespace-nowrap">
                          {value}
                          {unit && (
                            <span className="text-gray-600 font-novaLight text-xl pr-5 max-2xl:text-xl max-md:text-lg max-sm:text-base">
                              {unit}
                            </span>
                          )}
                        </span>
                      </h2>
                      <span
                        className={`${getGradientClass(
                          item.title,
                        )} text-white py-1.5 max-[400px]:py-1 max-[400px]:text-xs mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold`}
                      >
                        {item.title}
                      </span>
                      <p className="mt-3 w-32 max-lg:mx-auto text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                        {item.desc}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
            {/* Right Section */}
            <div className="col-span-8 max-lg:col-span-12 max-lg:mx-auto">
              <section className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {cardDetails.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="group relative h-[20rem] w-full max-sm:h-80 max-sm:w-72 max-2xl:w-64 max-2xl:h-80 max-xl:w-52 max-xl:h-72 max-lg:h-96 max-lg:w-80 max-md:w-60 max-md:h-80 bg-white shadow-md overflow-hidden"
                  >
                    <img
                      key={`${item.id}-${imageIndex[item.id] || 0}`}
                      src={IMAGE_PATH + item.images[imageIndex[item.id] || 0]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-5%"
                    />
                    <div className="absolute bottom-0 left-0 p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <blockquote>
                        <p className="text-xs uppercase text-white">{item.subheading}</p>
                      </blockquote>
                      <figcaption className="mt-3 border-t border-white/20 pt-2">
                        <p className="font-novaReg">
                          <span className="bg-gradient-to-r text-sm line-clamp-2 from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                            {item.title}
                          </span>
                        </p>
                      </figcaption>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
