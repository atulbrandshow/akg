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
  const [activeTab, setActiveTab] = useState(awardsData[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImages, setFullScreenImages] = useState([]);
  const [fullScreenIndex, setFullScreenIndex] = useState(0);

  // Auto-slide for non-fullscreen images
  React.useEffect(() => {
    if (!isFullScreen && activeTab.images && activeTab.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => 
          prev === activeTab.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeTab.images, isFullScreen]);

  // Reset image index when switching awards
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab.id]);

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

      {/* --- Content Section --- */}
      <section className="max-w-[1600px] mt-10 mx-auto w-full px-4 lg:px-6 py-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-novaBold text-brand-blue mb-4">
            Award & Ranking
          </h1>
          <p className="text-gray-700 font-novaReg text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            AKG University continues the legacy of excellence established by Ajay Kumar Garg Engineering College, renowned for its innovation, academic achievements, and industry collaborations. The institution has been consistently recognized for fostering talent, pioneering research, and delivering outstanding student success, making it a leading name in technical education.
          </p>
        </div>
      </section>

      {/* --- Main Split Layout --- */}
      <section className="flex-1 max-w-[1600px] mx-auto w-full px-4 lg:px-6 py-8 lg:py-12 h-[85vh]">
        
        <div className="flex flex-col lg:flex-row gap-6 h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
          
          {/* --- LEFT SIDE: Navigation List --- */}
          <div className="w-full lg:w-1/3 flex flex-col bg-gray-50 border-r border-gray-100 h-full max-h-[500px]">
            {/* List Header */}
            <div className="p-6 md:p-8 bg-white border-b border-gray-100 z-10 shadow-sm flex-shrink-0">
              <h2 className="text-2xl font-novaBold text-brand-blue flex items-center gap-2">
                <Award className="text-brand-yellow" />
                Achievements
              </h2>
              <p className="text-sm text-gray-500 mt-1 font-novaReg">
                Select an award to view the certificate.
              </p>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar max-h-[350px]">
              {awardsData.map((award) => (
                <button
                  key={award.id}
                  onClick={() => setActiveTab(award)}
                  onMouseEnter={() => setActiveTab(award)}
                  className={`
                    w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group
                    ${
                      activeTab.id === award.id
                        ? "bg-brand-blue text-white shadow-lg scale-[1.02]"
                        : "bg-white text-gray-700 hover:bg-white hover:shadow-md hover:text-brand-blue border border-transparent hover:border-gray-100"
                    }
                  `}
                >
                  <div className="flex-1">
                     <div className="flex items-center gap-2 mb-1">
                        {activeTab.id === award.id ? (
                            <span className="text-xs font-bold bg-brand-yellow text-brand-blue px-2 py-0.5 rounded">
                                {award.year || "2025"}
                            </span>
                        ) : (
                            <span className="text-xs font-semibold text-gray-400">
                                {award.year}
                            </span>
                        )}
                     </div>
                    <h3 className={`font-novaBold text-base leading-tight ${activeTab.id === award.id ? 'text-white' : 'text-gray-800'}`}>
                      {award.title}
                    </h3>
                  </div>
                  
                  {activeTab.id === award.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5 text-brand-yellow" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: The Big Image Stage --- */}
          <div className="w-full lg:w-2/3 relative bg-gray-100 overflow-hidden flex flex-col">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-blue blur-3xl"></div>
                <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-brand-yellow blur-3xl"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="flex-1 p-6 md:p-12 flex items-center justify-center">
                  <div className="relative max-h-full max-w-full shadow-2xl rounded-lg overflow-hidden border-4 border-white">
                    {activeTab.images ? (
                      <div className="relative overflow-hidden">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          src={getImgSrc(activeTab.images[currentImageIndex])}
                          alt={`${activeTab.title} - Image ${currentImageIndex + 1}`}
                          className="max-h-[60vh] object-contain w-auto mx-auto"
                        />
                        
                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {activeTab.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all ${
                                currentImageIndex === index ? 'bg-brand-yellow' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={getImgSrc(activeTab.image)}
                        alt={activeTab.title}
                        className="max-h-[60vh] object-contain w-auto mx-auto"
                      />
                    )}
                    
                    {/* Zoom Hint Overlay */}
                    <div 
                      onClick={() => {
                        setFullScreenImages(activeTab.images || [activeTab.image]);
                        setFullScreenIndex(activeTab.images ? currentImageIndex : 0);
                        setIsFullScreen(true);
                      }}
                      className="absolute inset-0 bg-brand-blue/80 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer group"
                    >
                        <span className="text-white font-novaBold text-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <ExternalLink className="w-6 h-6 text-brand-yellow" /> Open Full Size
                        </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Detail Strip */}
                <div className="bg-white/90 backdrop-blur-md p-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-novaBold text-brand-blue mb-1">
                            {activeTab.title}
                        </h2>
                        <p className="text-gray-600 font-novaReg text-sm md:text-base line-clamp-1">
                            {activeTab.description || "Certificate of Excellence and Recognition"}
                        </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 bg-brand-blue/5 px-4 py-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-brand-blue" />
                        <span className="font-bold text-brand-blue">{activeTab.year || "2025"}</span>
                    </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

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