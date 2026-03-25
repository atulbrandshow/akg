'use client'

import React from 'react'
import { Play, Maximize, Volume2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CampusVirtualTour() {
  return (
    <div className="w-full mx-auto py-8">
      {/* Video Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100/10 aspect-video"
      >
        {/* Video Player */}
        <video
          src="/video/virtual-tour.mp4"
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay Content (Optional - if they want some branding) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none p-10 flex flex-col justify-end">
           <div className="flex items-center gap-3 mb-2">
             <div className="w-10 h-[2px] bg-[#df8934]" />
             <span className="text-white text-xs uppercase tracking-widest font-novaBold">Interactive Discovery</span>
           </div>
           <h3 className="text-white text-3xl font-novaSemi">Campus Virtual Tour</h3>
           <p className="text-gray-300 italic font-novaReg max-w-xl mt-2 line-clamp-2">
             Take an immersive journey through our world-class laboratories, high-tech blocks, and vibrant student spaces.
           </p>
        </div>

        {/* Small floating badge */}
        <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-novaSemi flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            4K Virtual Experience
        </div>
      </motion.div>

      {/* Additional Info / Call to Action below Video */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[#1c1f52] font-novaSemi text-lg mb-2">Immersive Lab Tours</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Detailed look into our Industry 4.0 and advanced engineering workshops.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[#1c1f52] font-novaSemi text-lg mb-2">Student Life Hubs</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Experience the vibrant atmosphere of our hostels, cafeterias, and sports complex.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[#1c1f52] font-novaSemi text-lg mb-2">Academic Excellence</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Tour our modern lecture theatres and the vast repository of our Central Library.</p>
          </div>
      </div>
    </div>
  )
}

