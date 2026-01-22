"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Breadcrumb from "@/Components/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Medal, Star, ArrowRight, ExternalLink, Calendar } from "lucide-react";

// --- MOCK DATA ---
const awardsData = [
  {
    id: "a1",
    title: "QS I-GAUGE Diamond Rating",
    description: "Awarded for academic excellence and innovation in higher education.",
    image: "/images/awards/qs-diamond.jpg",
    year: "2025",
    highlight: true,
  },
  {
    id: "a2",
    title: "THE WEEK: Hansa Research Survey",
    image: "/images/awards/the-week.jpg",
    year: "2025",
  },
  {
    id: "a3",
    title: "Times Engineering Ranking",
    image: "/images/awards/times-eng.jpg",
    year: "2025",
  },
  {
    id: "a4",
    title: "India Today MDRA Ranking",
    image: "/images/awards/india-today.jpg",
    year: "2025",
  },
  {
    id: "a5",
    title: "Competition Success Review",
    image: "/images/awards/csr.jpg",
    year: "2025",
  },
  {
    id: "a6",
    title: "EduMeet Excellence Award",
    year: "2023",
    image: "/images/awards/edumeet.jpg",
  },
  {
    id: "a7",
    title: "Institution Innovation Council",
    year: "2021",
    image: "/images/awards/iic.jpg",
  },
  {
    id: "a8",
    title: "Chancellor’s Gold Medals",
    image: "/images/awards/medals.jpg",
    year: "2020",
    icon: <Medal className="w-5 h-5" />,
  },
  {
    id: "a9",
    title: "CMAI Industry Interface Award",
    image: "/images/awards/cmai.jpg",
    year: "2019",
    icon: <Trophy className="w-5 h-5" />,
  },
];

export default function AwardsSplitScreen() {
  const [activeTab, setActiveTab] = useState(awardsData[0]);

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

      <section className="max-w-[1600px] mx-auto px-5 w-full mt-4">
        <Breadcrumb
          data={[
            { id: "1", name: "Home", Link: "/" },
            { id: "2", name: "Awards", Link: "#" },
          ]}
        />
      </section>

      {/* --- Main Split Layout --- */}
      <section className="flex-1 max-w-[1600px] mx-auto w-full px-4 lg:px-6 py-8 lg:py-12 h-auto lg:h-[85vh] min-h-[600px]">
        
        <div className="flex flex-col lg:flex-row gap-6 h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
          
          {/* --- LEFT SIDE: Navigation List --- */}
          <div className="w-full lg:w-1/3 flex flex-col bg-gray-50 border-r border-gray-100 h-[400px] lg:h-auto">
            {/* List Header */}
            <div className="p-6 md:p-8 bg-white border-b border-gray-100 z-10 shadow-sm">
              <h2 className="text-2xl font-novaBold text-brand-blue flex items-center gap-2">
                <Award className="text-brand-yellow" />
                Achievements
              </h2>
              <p className="text-sm text-gray-500 mt-1 font-novaReg">
                Select an award to view the certificate.
              </p>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {awardsData.map((award) => (
                <button
                  key={award.id}
                  onClick={() => setActiveTab(award)}
                  onMouseEnter={() => setActiveTab(award)} // Optional: Hover to switch
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
                    <img
                        src={getImgSrc(activeTab.image)}
                        alt={activeTab.title}
                        className="max-h-[60vh] object-contain w-auto mx-auto"
                    />
                    
                    {/* Zoom Hint Overlay */}
                    <div className="absolute inset-0 bg-brand-blue/80 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer group">
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