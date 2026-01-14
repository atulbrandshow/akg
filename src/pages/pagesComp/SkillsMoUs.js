"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Globe,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";

/* -------------------- DATA -------------------- */

const industryMoUs = [
  { id: 1, partner: "KUKA Robotics India Pvt. Ltd.", purpose: "This MoU facilitates the establishment of a Center of Excellence (CoE) in collaboration with KUKA Robotics, providing students and industries with state-of-the-art robotics technology, automation solutions, and hands-on training." },
  { id: 2, partner: "NI System Pvt. Ltd.", purpose: "In collaboration with NI Systems Pvt. Ltd., this partnership aims to establish a Center of Excellence (CoE) that will serve as a hub for innovation, skill development, and industry-academia collaboration." },
  { id: 3, partner: "Janatics India Pvt. Ltd.", purpose: "This MoU is established to promote startups and support their growth by providing mentorship, resources, and technical assistance focused on pneumatics, automation, and industrial solutions." },
  { id: 4, partner: "Bosch Rexroth India Ltd", purpose: "This MoU is signed to establish a Center of Excellence (CoE) providing students and industries with advanced training, research opportunities, and cutting-edge technology in industrial automation and drive solutions." },
  { id: 5, partner: "SIEMENS Industry Software", purpose: "This MoU is signed to establish a Center of Excellence (CoE) in digital manufacturing, automation, and engineering solutions." },
  { id: 6, partner: "Mitsubishi Electric India Pvt. Ltd.", purpose: "This MoU is signed to establish a Center of Excellence (CoE) in industrial automation, robotics, and smart manufacturing." },
  { id: 7, partner: "Schmalz India Pvt. Ltd.", purpose: "This MoU is signed to collaborate on establishing a Center of Excellence (CoE) focused on vacuum automation and handling technology." },
  { id: 8, partner: "PepperL+Fuchs India Pvt. Ltd.", purpose: "This MoU is signed to collaborate on establishing a Center of Excellence (CoE) focused on industrial sensors, automation, and IoT solutions." },
  { id: 9, partner: "Fronius India Pvt. Ltd.", purpose: "This MoU is signed to establish a Center of Excellence (CoE) in welding automation and renewable energy solutions." },
  { id: 10, partner: "Carl Zeiss India", purpose: "This MoU is signed to establish a Center of Excellence (CoE) in precision optics, metrology, and imaging solutions." },
  { id: 11, partner: "TUV Rheinland", purpose: "This MoU is signed to collaborate on enhancing skill development, quality assurance, and industry-academia collaboration." },
  { id: 12, partner: "Messer Cutting Systems India Pvt. Ltd", purpose: "This MoU is signed to collaborate on establishing a Center of Excellence (CoE) focused on cutting-edge metal processing technologies." },
  { id: 13, partner: "SIEMENS Ltd.", purpose: "This MoU is signed to collaborate on establishing a Center of Excellence (CoE) focused on industrial automation, digital manufacturing, and smart technologies." },
  { id: 14, partner: "Stratasys India Pvt. Ltd", purpose: "This MoU is signed to collaborate on establishing a Center of Excellence (CoE) focused on 3D printing and additive manufacturing technologies." },
  { id: 15, partner: "Schunk Intec India Pvt. Ltd.", purpose: "This MoU is signed to collaborate on establishing a Center of Excellence (CoE) focused on automation, robotics, and clamping technology." },
  { id: 16, partner: "IPG Photonics", purpose: "This MoU is signed to collaborate on establishing a Center of Excellence (CoE) focused on laser technologies and photonics." },
  { id: 17, partner: "BOSCH Ltd", purpose: "This MoU is signed to establish a Center of Excellence (CoE) providing advanced training and hands-on experience in automotive technologies." },
];

const associateMoUs = [
  { id: 1, partner: "Windmöller & Hölscher", purpose: "To provide students and industries with advanced training and hands-on experience in packaging technology and automation solutions." },
  { id: 2, partner: "Electropreneur Park", purpose: "This MoU is signed to collaborate on supporting startups by providing mentorship, resources, and access to cutting-edge technology." },
  { id: 3, partner: "Redcliffe Energy", purpose: "This MoU is signed to collaborate on supporting industries in the energy sector with innovative energy solutions and expertise." },
  { id: 4, partner: "Ghaziabad Precision Products", purpose: "For Product / Process development completing each other's available facilities and infrastructure." },
  { id: 5, partner: "Micromatic Grinding Technologies", purpose: "To collaborate on supporting industries with advanced grinding solutions and precision manufacturing technologies." },
  { id: 6, partner: "Octagon Precision", purpose: "To upgrade the state-of-the-art Calibration & Technical center and set up the SPC lab facility." },
  { id: 7, partner: "Rutag, IIT Delhi", purpose: "To identify technologies ongoing in the village or have the potential to reach the rural areas." },
  { id: 8, partner: "I-Hub Foundation (IHFC), IIT Delhi", purpose: "To collaborate on Research and Development activities in the field of Cobotics and nurture young ideas." },
  { id: 9, partner: "FIIT, IIT Delhi", purpose: "To promote startup ventures/Enterprise in India and foster entrepreneurship in social enterprise space." },
  { id: 10, partner: "FANUC", purpose: "This MoU is signed to collaborate on supporting industries with advanced automation and CNC solutions." },
  { id: 11, partner: "IMTMA", purpose: "This MoU is signed to collaborate on supporting industries in the manufacturing sector with access to insights and technologies." },
  { id: 12, partner: "Anderson Group", purpose: "This MoU is signed to collaborate on supporting industries with advanced solutions in automation and process optimization." },
  { id: 13, partner: "Grind Master", purpose: "To support industries with advanced solutions in surface finishing and manufacturing technologies." },
];

const academiaMoUs = [
  { id: 1, partner: "Steinbeis Academy", purpose: "This MoU is signed to collaborate on providing advanced technical training and fostering entrepreneurship." },
  { id: 2, partner: "Uttarakhand Technical University", purpose: "This MoU is signed to collaborate on academic research, skill development, and innovation initiatives." },
  { id: 3, partner: "Bharti Vidyapeeth University COE", purpose: "To collaborate on research, innovation, and skill development initiatives for advanced learning opportunities." },
  { id: 4, partner: "Bharti Vidyapeeth College of Engineering", purpose: "To support the upskilling of faculty/students in the Automation, Robotics & Manufacturing Fields." },
  { id: 5, partner: "Global Institute of Technology, Jaipur", purpose: "To collaborate on academic research, skill development, and innovation to enhance learning opportunities." },
  { id: 6, partner: "Universidad Autonoma de Chile", purpose: "For mutual collaboration to facilitate Faculty & student exchange and training." },
  { id: 7, partner: "Venkateshwara University, Gajraula", purpose: "To collaborate on academic research and skill development initiatives for technological advancement." },
  { id: 8, partner: "Chittagong University of Engineering & Technology", purpose: "To support FABLAB operation and facilitate faculty/student exchange." },
  { id: 9, partner: "Seth Jai Parkash Mukand Lal Institute", purpose: "To support the upskilling of faculty/students in Automation, Robotics & Manufacturing Fields." },
  { id: 10, partner: "Panipat Institute of Technology", purpose: "To support the upskilling of faculty/students in Automation, Robotics & Manufacturing Fields." },
  { id: 11, partner: "FH West Coast University", purpose: "To exchange educational methodology and scientific literature in Automation, Robotics & Manufacturing." },
  { id: 12, partner: "Siberian State Industrial University", purpose: "To exchange educational methodology and scientific literature in areas of mutual interest." },
];

/* -------------------- COMPONENT -------------------- */

const SkillsMoUs = () => {
  const [activeTab, setActiveTab] = useState("industry");

  const tabs = [
    { id: "industry", label: "Industry Leaders", icon: Building2, data: industryMoUs },
    { id: "associate", label: "Associate Partners", icon: Users, data: associateMoUs },
    { id: "academia", label: "Academic Partners", icon: GraduationCap, data: academiaMoUs },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* ================= ANIMATED BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Animated Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Dot Pattern */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "-200px 200px"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gradient Blobs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18 + i * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full blur-[140px]"
            style={{
              width: 380 + i * 120,
              height: 380 + i * 120,
              background: i % 2 === 0 ? "rgba(99,102,241,0.25)" : "rgba(129,140,248,0.25)",
              top: `${10 + i * 25}%`,
              left: `${5 + i * 20}%`,
            }}
          />
        ))}

        {/* Diagonal Lines */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "400px 0px"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,transparent,transparent 120px,#4f46e5 120px,#4f46e5 121px)",
          }}
        />

        {/* Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase block mb-3">
            Global Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Prestigious MoUs
          </h2>
          <p className="max-w-3xl mx-auto text-slate-500 text-lg">
            Building strong academia–industry collaboration for future-ready education.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105"
                    : "bg-white text-slate-500 hover:bg-slate-100"
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {tabs.find(t => t.id === activeTab)?.data.map((mou, index) => (
              <motion.div
                key={`${activeTab}-${mou.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(79,70,229,0.15)] transition-all duration-500 flex flex-col"
              >
                <div className="flex justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center font-black text-indigo-600">
                    {String(mou.id).padStart(2, "0")}
                  </div>
                  <Globe className="text-slate-200" />
                </div>

                <h4 className="text-xl font-black text-slate-800 mb-4 leading-tight">
                  {mou.partner}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                  {mou.purpose}
                </p>

                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                    MoU Certified
                  </span>
                  <motion.div whileHover={{ x: 6 }} className="flex items-center gap-2 text-indigo-600 text-xs font-bold">
                    View Details <ChevronRight size={14} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMoUs;
