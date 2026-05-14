import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const facilities = [
  {
    id: 1,
    category: "Outdoor",
    name: "FIFA Size Football Ground",
    desc: "A sprawling, well-maintained lush green field for football enthusiasts and professional matches.",
    icon: "⚽",
  },
  {
    id: 2,
    category: "Outdoor",
    name: "Cricket Ground with Practice Net",
    desc: "Full-sized cricket oval with dedicated nets for intense practice and inter-college tournaments.",
    icon: "🏏",
  },
  {
    id: 3,
    category: "Outdoor",
    name: "Synthetic Basketball Courts",
    desc: "Multiple high-quality synthetic courts for fast-paced basketball action and team training.",
    icon: "🏀",
  },
  {
    id: 4,
    category: "Outdoor",
    name: "Volleyball & Tennis Courts",
    desc: "Professional-grade courts for volleyball and lawn tennis, encouraging diverse physical activities.",
    icon: "🏐",
  },
  {
    id: 5,
    category: "Indoor",
    name: "Indoor Badminton Hall",
    desc: "Exclusive indoor facility with multiple courts for badminton and other indoor racquet sports.",
    icon: "🏸",
  },
  {
    id: 6,
    category: "Indoor",
    name: "Table Tennis Arena",
    desc: "Dedicated space with professional tables for recreational and competitive table tennis.",
    icon: "🏓",
  },
  {
    id: 7,
    category: "Indoor",
    name: "Modern Power Gym",
    desc: "Equipped with the latest cardio and weight training machines for holistic student fitness.",
    icon: "💪",
  },
  {
    id: 8,
    category: "Annual Events",
    name: "The Champions Cup",
    desc: "The annual inter-departmental sports extravaganza featuring multiple track and field events.",
    icon: "🏆",
  },
];

export default function SportsFacility() {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-sm:p-4 font-novaReg">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1c1f52] via-[#df8934] to-[#1c1f52] opacity-50" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#1c1f52]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#df8934]/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-[#df8934]/10 text-[#df8934] text-xs font-novaBold rounded-full tracking-wider uppercase">Athletics & Fitness</span>
          </div>
          <h2 className="text-4xl font-novaSemi text-[#1c1f52] mb-4 max-sm:text-3xl leading-tight">
            Nurturing <span className="text-[#df8934]">Champions</span> Within
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At AKG University, we believe that a healthy mind resides in a healthy body. Our world-class sports infrastructure is designed to foster teamwork, discipline, and physical excellence among our students.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl hover:border-[#df8934]/20 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="text-4xl w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-50 group-hover:bg-[#1c1f52] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-novaBold text-[#df8934] uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-xl font-novaSemi text-[#1c1f52] mb-1 group-hover:translate-x-1 transition-transform">{item.name}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed italic">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Annual Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-10 max-sm:p-6 rounded-3xl bg-gray-900 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
             <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain -translate-y-1/4 translate-x-1/4 rotate-12" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="text-3xl max-sm:text-2xl font-novaSemi text-white mb-2">The Annual <span className="text-[#df8934]">Champions Cup</span></h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Where departments collide and legends are born. Join the ultimate celebration of sportsmanship and spirit every December.
            </p>
            <div className="flex gap-4">
               <div className="px-6 py-2 rounded-full border border-gray-700 text-xs text-white bg-white/5 hover:bg-[#df8934]/20 transition-colors">15+ Sports Categories</div>
               <div className="px-6 py-2 rounded-full border border-gray-700 text-xs text-white bg-white/5 hover:bg-[#df8934]/20 transition-colors">500+ Participants</div>
            </div>
          </div>
        </motion.div>

        {/* Closing Tag */}
        <div className="mt-10 flex justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
           <img src="/image/akgec-logo.svg" alt="University Logo" className="w-20" />
        </div>
      </div>
    </div>
  );
}
