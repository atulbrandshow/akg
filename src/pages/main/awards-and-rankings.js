"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Medal, Star, ArrowRight, ExternalLink, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

// --- MOCK DATA ---
const awardsData = [
  {
    id: "a1",
    title: "QS I-GAUGE Diamond Rating",
    description: "Awarded for academic excellence and innovation in higher education.",
    image: "/image/awards-and-ranking/A1.jpg",
    year: "2025",
    highlight: true,
  },
  {
    id: "a2",
    title: "THE WEEK: Hansa Research Survey",
    image: "/image/awards-and-ranking/A2.jpeg",
    year: "2025",
  },
  {
    id: "a3",
    title: "Times Engineering Ranking",
    image: "/image/awards-and-ranking/A3.jpeg",
    year: "2025",
  },
  {
    id: "a4",
    title: "India Today MDRA Ranking",
    image: "/image/awards-and-ranking/A4.jpeg",
    year: "2025",
  },
  {
    id: "a5",
    title: "Competition Success Review",
    image: "/image/awards-and-ranking/A5.jpeg",
    year: "2025",
  },
  {
    id: "a6",
    title: "EduMeet Excellence Award",
    year: "2023",
    image: "/image/awards-and-ranking/A6.jpg",
  },
  {
    id: "a7",
    title: "Institution Innovation Council",
    year: "2021",
    image: "/image/awards-and-ranking/A7.jpeg",
  },
  {
    id: "a8",
    title: "Best ROBOLAB SETUP",
    images: [
      "/image/awards-and-ranking/A8/Stem1.jpg",
      "/image/awards-and-ranking/A8/Stem2.jpg",
      "/image/awards-and-ranking/A8/Stem3-1.jpg",
      "/image/awards-and-ranking/A8/Stem4.jpg"
    ],
    year: "2020",
    icon: <Medal className="w-5 h-5" />,
  },
  {
    id: "a9",
    title: "Excellence and Innovation",
    image: "/image/awards-and-ranking/A9.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
   {
    id: "a10",
    title: "National Instruments Awards",
    image: "/image/awards-and-ranking/A10.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
   {
    id: "a11",
    title: "Entrepreneurship and Skill Development",
    image: "/image/awards-and-ranking/A11.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
   {
    id: "a12",
    title: "Multiple Chancellor's Awards",
    image: "/image/awards-and-ranking/placeholder.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
   {
    id: "a13",
    title: "Recipient of Academic Excellence",
    image: "/image/awards-and-ranking/A13.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
   {
    id: "a14",
    title: "CMAI Best Industry Interface Award",
    image: "/image/awards-and-ranking/placeholder.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
   {
    id: "a15",
    title: "Overall Champions Trophy",
    image: "/image/awards-and-ranking/placeholder.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
   {
    id: "a16",
    title: "Alumni recognized",
    image: "/image/awards-and-ranking/placeholder.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
];

export default function AwardsSplitScreen() {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImages, setFullScreenImages] = useState([]);
  const [fullScreenIndex, setFullScreenIndex] = useState(0);

  // Initialize indices for multi-image awards
  React.useEffect(() => {
    const initialIndices = {};
    awardsData.forEach(award => {
      if (award.images) initialIndices[award.id] = 0;
    });
    setCurrentImageIndices(initialIndices);
  }, []);

  // Auto-slide for cards with multiple images
  React.useEffect(() => {
    if (!isFullScreen) {
      const interval = setInterval(() => {
        setCurrentImageIndices(prev => {
          const next = { ...prev };
          awardsData.forEach(award => {
            if (award.images && award.images.length > 1) {
              next[award.id] = (prev[award.id] + 1) % award.images.length;
            }
          });
          return next;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isFullScreen]);

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullScreen]);

  // Keyboard navigation for fullscreen
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isFullScreen) return;
      
      if (e.key === 'Escape') {
        setIsFullScreen(false);
      } else if (e.key === 'ArrowLeft' && fullScreenImages.length > 1) {
        setFullScreenIndex(prev => 
          prev === 0 ? fullScreenImages.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight' && fullScreenImages.length > 1) {
        setFullScreenIndex(prev => 
          prev === fullScreenImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullScreen, fullScreenImages.length]);

  // Placeholder helper
  const getImgSrc = (src) =>
    src || "https://placehold.co/800x600/003366/FFF?text=Award+Certificate";

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header
        title="Awards & Rankings"
        gradient="bg-gradient-to-r from-brand-blue to-blue-900"
        height="!py-14 sm:!py-20"
      />

      {/* --- Intro Section --- */}
      <section className="max-w-[1600px] mt-10 mx-auto w-full px-4 lg:px-6 py-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-novaBold text-brand-blue mb-4">
            Awards & Recognition
          </h1>
          <p className="text-gray-700 font-novaReg text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            AKG University continues the legacy of excellence established by Ajay Kumar Garg Engineering College, renowned for its innovation, academic achievements, and industry collaborations.
          </p>
        </div>
      </section>

      {/* --- Grid Layout: All Data Together --- */}
      <section className="max-w-[1600px] mx-auto w-full px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  {award.images ? (
                    <motion.img
                      key={currentImageIndices[award.id]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={getImgSrc(award.images[currentImageIndices[award.id]])}
                      alt={award.title}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <img
                      src={getImgSrc(award.image)}
                      alt={award.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </AnimatePresence>

                {/* Overlay Action */}
                <div 
                  onClick={() => {
                    setFullScreenImages(award.images || [award.image]);
                    setFullScreenIndex(award.images ? currentImageIndices[award.id] : 0);
                    setIsFullScreen(true);
                  }}
                  className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  <span className="bg-white text-brand-blue px-6 py-2 rounded-full font-novaBold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ExternalLink className="w-4 h-4" /> View Certificate
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-brand-yellow text-brand-blue px-3 py-1 rounded-lg font-novaBold text-sm shadow-md">
                  {award.year || "2025"}
                </div>
              </div>

              {/* Data Section */}
              <div className="p-6 flex-1 flex flex-col border-t border-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-novaBold text-brand-blue leading-tight group-hover:text-blue-700 transition-colors">
                    {award.title}
                  </h3>
                  {award.highlight && (
                    <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow flex-shrink-0 ml-2" />
                  )}
                </div>
                <p className="text-gray-600 font-novaReg text-sm md:text-base line-clamp-3 mb-4">
                  {award.description || "Consistently recognized for excellence in technical education, fostering innovation, and delivering outstanding student success in the engineering domain."}
                </p>
                <div className="mt-auto flex items-center gap-2 text-brand-blue font-novaBold text-sm uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-brand-yellow" />
                  {award.year} Achievement
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Full Screen Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setIsFullScreen(false)}
        >
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 text-white hover:text-brand-yellow transition-colors z-10 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="w-full h-full flex items-center justify-center cursor-default group" onClick={(e) => e.stopPropagation()}>
            <motion.img
              key={fullScreenIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              src={getImgSrc(fullScreenImages[fullScreenIndex])}
              alt="Full size view"
              className="max-w-full max-h-full w-auto h-auto object-contain cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                if (fullScreenImages.length > 1) {
                  setFullScreenIndex(prev => 
                    prev === fullScreenImages.length - 1 ? 0 : prev + 1
                  );
                }
              }}
            />
            
            {/* Navigation for multiple images */}
            {fullScreenImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullScreenIndex(prev => 
                      prev === 0 ? fullScreenImages.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullScreenIndex(prev => 
                      prev === fullScreenImages.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  <span className="text-sm font-novaReg">
                    {fullScreenIndex + 1} of {fullScreenImages.length}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* CSS for custom scrollbar in this component only */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}