'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/image/infrastructure-visual-tour/faith-1.jpg', alt: 'Abstract art piece 1' },
  { src: '/image/infrastructure-visual-tour/faith-2.jpg', alt: 'Modern sculpture 2' },
  { src: '/image/infrastructure-visual-tour/faith-3.jpg', alt: 'Contemporary painting 3' },
  { src: '/image/infrastructure-visual-tour/faith-4.jpg', alt: 'Avant-garde installation 4' },
]

const FaithCentre = () => {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <section className='px-5'>
      <div className='space-y-2'>
        <h2 className='text-4xl font-novaReg'>Faith Centre: A Space for Spiritual Growth and Reflection</h2>
        <p className='text-lg max-w-5xl leading-6 font-novaReg'>The well known beauty of Ajay Kumar Garg University, Ghaziabad gets further enhanced with the existence of university Faith Centre. The Faith Centre of the university is built in a manner to deliver a spiritually evocative space and to accommodate its faculty, staff and students. The calm ambience of the faith centre acts as enabler to generate peace of mind and concentrate on spiritual and moral well being. It has a beautifully designed hall in the centre surrounded by well maintained lawn and fountains. The faith centre is dedicated to “Maa Saraswati” commonly known as “Goddess of knowledge”. A beautiful approx six feet high idol of “Maa Saraswati” made up of white marble, gives a feel of liveliness. The Dome of faith centre is architecturally similar to Lotus Temple of Delhi. The sprinkling fountains on the outer periphery of the Dome, make it more lively. The Faith Centre is the heart and soul of AKGU campus where an AKGECian can visit and witness the nature creativity.</p>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-novaSemi text-black mb-5 tracking-tight">Gallery</h1>
        <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[80vh]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              layoutId={`container-${index}`}
              onClick={() => setSelectedId(index)}
              className={`cursor-pointer overflow-hidden rounded-lg shadow-lg ${index === 0 ? 'col-span-4 row-span-4' :
                  index === 1 ? 'col-span-2 row-span-3 col-start-5' :
                    index === 2 ? 'col-span-2 row-span-3 col-start-5 row-start-4' :
                      'col-span-4 row-span-2 row-start-5'
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
                    View
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
                  className="absolute top-4 right-8 rounded-full p-1 text-white bg-black hover:text-gray-300 transition-colors duration-300"
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

export default FaithCentre