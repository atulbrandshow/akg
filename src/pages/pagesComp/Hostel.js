import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const facilities = [
  {
    id: 1,
    name: "Furnished rooms including Curtains, Mattress, Pillow, Bed Sheets",
    icon: "/image/icons/furnished-rooms.png",
  },
  {
    id: 2,
    name: "Clean and Hygienic – Mess & Dining",
    icon: "/image/icons/clean-and-hygienic.png",
  },
  {
    id: 3,
    name: "High-speed Internet Facility (Wi-Fi)",
    icon: "/image/icons/internet-facility.png",
  },
  {
    id: 4,
    name: "Solar Water Heaters (Eco-friendly)",
    icon: "/image/icons/solarwater-heaters.png",
  },
  { id: 5, name: "Modern Gymnasium", icon: "/image/icons/gymnasium.png" },
  {
    id: 6,
    name: "TV Lounge with Entertainment Facilities",
    icon: "/image/icons/tv-room.png",
  },
  { id: 7, name: "Well-stocked Library", icon: "/image/icons/librarery.png" },
  {
    id: 8,
    name: "Indoor and Outdoor Sports Facilities",
    icon: "/image/icons/indoor-and-outdoor.png",
  },
  { id: 9, name: "24/7 Canteen Services", icon: "/image/icons/canteen.png" },
];

export default function HostelFacility() {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-sm:p-4">
      {/* Premium Gradient Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1c1f52]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#df8934]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-novaSemi text-[#1c1f52] mb-4 max-sm:text-3xl">Residential Life at AKGU</h2>
          <div className="w-20 h-1.5 bg-[#df8934] rounded-full mb-8" />
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 font-novaReg leading-relaxed text-justify">
            <p className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 backdrop-blur-sm">
              AKGEC offers state-of-the-art hostel facilities designed to provide a
              comfortable and secure living environment for students. Our
              residential complexes include separate accommodations for boys and
              girls, with modern amenities that create a perfect home-away-from-home
              experience. The hostels feature spacious rooms with ample natural
              light and ventilation.
            </p>
            <p className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 backdrop-blur-sm">
              We understand the importance of nutrition for academic success, which
              is why our hostel mess serves balanced, hygienic meals prepared under
              strict quality control. With round-the-clock security, maintenance
              services, and dedicated wardens, we ensure a safe and supportive
              environment for all residents to focus on their growth.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-novaSemi text-[#1c1f52] mb-8 text-center italic">Premium Hostel Amenities</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#df8934]/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-2 opacity-5 scale-0 group-hover:scale-100 group-hover:opacity-10 transition-all duration-500">
                   <img src="/image/akgec-logo.svg" alt="" className="w-12 h-12" />
                </div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center mb-4 shadow-inner group-hover:from-[#df8934]/10 group-hover:to-white transition-colors">
                  <Image
                    src={facility.icon}
                    alt={facility.name}
                    width={40}
                    height={40}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <p className="text-sm font-novaSemi text-gray-800 group-hover:text-[#1c1f52] transition-colors">{facility.name}</p>
                
                <div className="mt-3 w-0 h-0.5 bg-[#df8934] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#1c1f52] to-[#2a2e6e] text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-novaSemi mb-2 text-[#df8934]">Ready to Join Our Community?</h4>
            <p className="text-gray-300 font-novaReg">Secure and premium living spaces for the leaders of tomorrow.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#df8934] text-white font-novaSemi rounded-full shadow-lg hover:shadow-[#df8934]/30 transition-all"
          >
            Check Availability
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
