'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/image/gallery/admin-block.jpg', alt: 'Admin Block', size: 'large' },
  { src: '/image/gallery/girls-hostel.jpg', alt: 'Girls Hostel', size: 'medium' },
  { src: '/image/gallery/boys-hostel.jpg', alt: 'Boys Hostel', size: 'medium' },
  { src: '/image/gallery/faith-centre.jpg', alt: 'Faith Centre', size: 'small' },
  { src: '/image/gallery/library.jpg', alt: 'Library', size: 'small' },
  { src: '/image/gallery/academic-block.jpg', alt: 'Academic Block', size: 'large' },
  { src: '/image/gallery/reception-area.jpg', alt: 'Reception Area', size: 'small' },
  { src: '/image/gallery/director-office.jpg', alt: 'Director Office', size: 'small' },
  { src: '/image/gallery/college-lawns.jpg', alt: 'College Lawns', size: 'medium' },
  { src: '/image/gallery/first-year-girls-hostel.jpg', alt: 'First Year Girls Hostel', size: 'medium' },
  { src: '/image/gallery/sports-ground.jpg', alt: 'Sports Ground', size: 'large' },
  { src: '/image/gallery/cs-it.jpg', alt: 'CS/IT Department', size: 'small' },
]

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="max-w-[1400px] mx-auto px-5 py-10">
      <div className="space-y-5">
        <h2 className="text-4xl font-novaReg leading-tight">Gallery: Capturing Moments at Our Institution</h2>
        <p className="text-lg leading-relaxed font-novaReg">
          Welcome to our Gallery, where we celebrate the vibrant spirit and diverse experiences of our community!
          Explore a curated collection of photos that showcase memorable events, academic achievements,
          cultural activities, and the everyday life of our students and faculty. From engaging workshops and
          competitions to social gatherings and campus highlights, our Gallery reflects the rich tapestry of our
          institution. Dive in and relive the moments that make our community truly special!
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-novaSemi text-black mb-5 tracking-tight">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              layoutId={`container-${index}`}
              onClick={() => setSelectedId(index)}
              className={`cursor-pointer overflow-hidden rounded-lg shadow-lg ${photo.size === 'large'
                ? 'col-span-2 row-span-2'
                : photo.size === 'medium'
                  ? 'col-span-2 row-span-1'
                  : 'col-span-1 row-span-1'
                }`}
            >
              <motion.div
                className="w-full h-full relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    layout="fill"
                    objectfit="cover"
                    className="transition-all duration-300 group-hover:blur-sm"
                    priority
                  />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {photo.alt}
                  <span className='mt-2 bg-secondary text-sm uppercase flex justify-center font-novaSemi py-1 text-black rounded-full'>View</span> 
                  </p> 
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`container-${selectedId}`}
                className="relative max-w-3xl max-h-[80vh] w-full h-full m-4 overflow-hidden rounded-lg"
              >
                <Image
                  src={photos[selectedId].src}
                  alt={photos[selectedId].alt}
                  layout="fill"
                  objectfit="contain"
                  priority 
                />
                <motion.button
                  className="absolute top-4 right-4 rounded-full p-1 text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedId(null)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}