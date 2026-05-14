"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Coffee, 
  Bus, 
  Wifi, 
  Stethoscope, 
  Mic2, 
  Monitor, 
  WashingMachine, 
  Utensils, 
  AlertCircle 
} from "lucide-react";

const facilitiesData = {
  academic: [
    {
      title: "Computer Labs",
      image: "/image/academic-facilities/StudentCSELab5.webp",
      icon: <Monitor className="text-blue-500" size={24} />,
      description: "State-of-the-art computer labs with the latest technology to support IT, engineering, and research work.",
    },
    {
      title: "Seminar Rooms",
      image: "/image/academic-facilities/seminar-room.webp",
      icon: <BookOpen className="text-amber-500" size={24} />,
      description: "Modern audiovisual equipped rooms for workshops, conferences, and key academic events.",
    },
    {
      title: "E-learning Rooms",
      image: "/image/academic-facilities/StudentCSEMTechLab.webp",
      icon: <Wifi className="text-purple-500" size={24} />,
      description: "Dedicated spaces for digital learning platforms like SWAYAM and MOOCs for interactive education.",
    },
    {
      title: "Recording Studios",
      image: "/image/academic-facilities/ECEProjectLab3.webp",
      icon: <Mic2 className="text-rose-500" size={24} />,
      description: "Multimedia studios for experimenting with media projects in arts, film, and animation.",
    }
  ],
  campus: [
    {
      title: "Hostel Mess",
      image: "/image/campus-facilities/mostel-mess.jpg",
      icon: <Utensils className="text-emerald-500" size={24} />,
      description: "Nutritious meals and a communal dining experience fostering student interaction and health.",
    },
    {
      title: "Cafeterias",
      image: "/image/campus-facilities/cafeterias.jpg",
      icon: <Coffee className="text-orange-500" size={24} />,
      description: "Variety of food options and social spaces for students to relax and connect outside classes.",
    },
    {
      title: "Transport Facilities",
      image: "/image/campus-facilities/transport-facilities.jpg",
      icon: <Bus className="text-blue-600" size={24} />,
      description: "Reliable pick-and-drop service covering the region for a comfortable commuting experience.",
    },
    {
      title: "Health Care",
      image: "/image/academic-facilities/health-care-facilities.webp",
      icon: <Stethoscope className="text-red-500" size={24} />,
      description: "Well-equipped medical center providing prompt assistance for all students and staff.",
    },
    {
      title: "Laundry Services",
      image: "/image/campus-facilities/laundry-services.jpg",
      icon: <WashingMachine className="text-sky-500" size={24} />,
      description: "Convenient professional washing and drying facilities for students within the residential area.",
    },
    {
      title: "Emergency Services",
      image: "/image/campus-facilities/emergency-van-ambulances.jpg",
      icon: <AlertCircle className="text-red-600" size={24} />,
      description: "Prompt medical transportation and emergency response team available 24/7 on campus.",
    }
  ]
};

const FacilityCard = ({ facility, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
  >
    <div className="relative h-56 overflow-hidden">
      <img 
        src={facility.image} 
        alt={facility.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        {facility.icon}
      </div>
    </div>
    <div className="p-6 space-y-3">
      <h3 className="text-xl font-novaBold text-slate-900 group-hover:text-blue-600 transition-colors">
        {facility.title}
      </h3>
      <p className="text-slate-600 font-novaReg text-sm leading-relaxed line-clamp-3">
        {facility.description}
      </p>
    </div>
  </motion.div>
);

const Facilities = () => {
  return (
    <div className="space-y-20 py-8">
      {/* Academic Section */}
      <section className="space-y-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-novaBold text-slate-900 flex items-center gap-3">
            <span className="w-12 h-1.5 bg-blue-600 rounded-full" />
            Academic Infrastructure
          </h2>
        </div>
        <p className="text-slate-600 font-novaReg leading-relaxed">
            AKG University offers a wide range of top-notch academic facilities to support both teaching and research. 
            Our classrooms and labs are equipped with modern technology designed to enhance interactive learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {facilitiesData.academic.map((f, i) => (
            <FacilityCard key={i} facility={f} index={i} />
          ))}
        </div>
      </section>

      {/* Campus Section */}
      <section className="space-y-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-novaBold text-slate-900 flex items-center gap-3">
            <span className="w-12 h-1.5 bg-emerald-500 rounded-full" />
            Campus Life & Amenities
          </h2>
        </div>
         <p className="text-slate-600 font-novaReg leading-relaxed">
            Beyond academics, we provide exceptional facilities designed to foster an environment where students can shape their future. 
            From nutritious dining to 24/7 medical support, we ensure a comfortable and safe staying experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {facilitiesData.campus.map((f, i) => (
            <FacilityCard key={i} facility={f} index={i} />
          ))}
        </div>
      </section>

      {/* Connectivity Info */}
      <div className="p-10 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-[2.5rem] border border-white shadow-inner flex flex-col md:flex-row items-center gap-8">
        <div className="p-5 bg-white rounded-3xl shadow-sm">
          <Wifi className="text-blue-500" size={40} />
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-novaBold text-slate-900">24/7 High-Speed Connectivity</h4>
          <p className="text-slate-600 font-novaReg">
            The entire campus is Wi-Fi enabled, providing seamless internet access to all learning resources and digital libraries from anywhere in the university.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
