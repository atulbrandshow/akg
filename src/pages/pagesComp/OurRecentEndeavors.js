import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: "Technology Transfer for RAKSHITA Bike Ambulance for DRDO",
    description: "AKGEC delivered end-to-end engineering support for DRDO's RAKSHITA bike ambulance, featuring a modular Casualty Evacuation Seat (CES) for rapid deployment. Developed by the Institute of Nuclear Medicine and Allied Sciences (INMAS), a premier DRDO laboratory in Delhi. This innovation enables swift first aid and evacuation in difficult terrains.",
    image: "/image/major-project-images/image5.jpg",
    tags: ["DRDO", "DEFENCE", "INNOVATION"],
  },
  {
    id: '02',
    title: "3D Scanning and Scaled Printing of Combat Vehicle for Indian Air Force",
    description: "A detailed 3D scanning and 1:10 scale fabrication of the OSA-AK-M combat vehicle was executed by AKGEC for the 7 Base Repair Depot, Indian Air Force. The project enabled accurate digital reconstruction and physical model manufacturing for technical study and display purposes.",
    images: ["/image/major-project-images/image6.jpg", "/image/major-project-images/image10.jpeg"],
    tags: ["IAF", "3D SCANNING", "PROTOTYPING"],
  },
  {
    id: '03',
    title: "Cycle Time Optimization through Robotic Integration for Micromatic Grinding",
    description: "AKGEC successfully integrated robotic automation with CNC systems at Micromatic Grinding, significantly enhancing operational efficiency. This innovation reduced the process time from 163 seconds to just 52 seconds, showcasing a remarkable improvement in productivity.",
    image: "/image/major-project-images/image7.png",
    tags: ["ROBOTICS", "AUTOMATION", "INDUSTRY 4.0"],
  },
  {
    id: '04',
    title: "Vision-Based Inspection System for Ghaziabad Precision Products",
    description: "AKGEC designed and deployed a customized machine vision inspection system for Rocker Arm assemblies at Ghaziabad Precision Products (GPP). Built using LabVIEW, the solution enhances quality assurance through precise defect detection and automated inspection.",
    image: "/image/major-project-images/image8.png",
    tags: ["AI VISION", "QUALITY", "AUTOMATION"],
  },
  {
    id: '05',
    title: "3D Printed Prototype of Humsafar Coach for Indian Railways",
    description: "A precision-engineered 3D printed model of the newly designed Humsafar Coach, developed by Modern Coach Factory, Raebareli. This prototype visually communicates key design features and structural enhancements of the coach.",
    image: "/image/major-project-images/image1.jpg",
    tags: ["RAILWAYS", "3D PRINTING", "MODELING"],
  },
  {
    id: '06',
    title: "Rapid Prototype of Pressure Regulating System for Air Liquide India",
    description: "A detailed working model of the Pressure Regulating System, Bulk Storage Installation, and Air Liquide Healthcare setup was developed to demonstrate Cryogenic Liquid Oxygen installations. Delivered in a record time of just 10 days.",
    image: "/image/major-project-images/image4.jpg",
    tags: ["PROTOTYPING", "CRITICAL", "AGILE"],
  },
  {
    id: '07',
    title: "Innovative Orthopedic Screw Developed via Metal 3D Printing",
    description: "AKGEC engineered an advanced orthopedic screw featuring a variable thread pitch and a lightweight internal lattice structure. Manufactured using the Metallic SLM 280 3D printer, the design enhances strength while reducing material usage.",
    image: "/image/major-project-images/image9.jpg",
    tags: ["BIOMEDICAL", "METAL 3D", "IMPLANTS"],
  },
  {
    id: '08',
    title: "Lightweight Ergonomic Surgical Handle Designed for AIIMS New Delhi",
    description: "AKGEC developed a customized surgical handle featuring improved ergonomics and reduced weight to enhance surgeon comfort and precision. Fabricated using SLM metal 3D printing technology for AIIMS New Delhi.",
    image: "/image/major-project-images/image3.jpg",
    tags: ["AIIMS", "ERGONOMICS", "HEALTHCARE"],
  },
  {
    id: '09',
    title: "Consistent Tender Participation and Delivery for Indian Railways",
    description: "With a strong presence on the Indian Railways E-Procurement System (IREPS), we have participated in over 300 tenders and successfully delivered more than 40 job work orders across multiple Railway divisions.",
    image: "/image/major-project-images/image2.png",
    tags: ["IREPS", "LOGISTICS", "GOVERNMENT"],
  },
];

const OurRecentEndeavors = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Layered Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-[1]"></div>
        
        {/* Decorative Animated Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] -z-10"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] -z-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Innovation In Action</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
            Our Recent Endeavors
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
            >
              {/* Content Side */}
              <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-8xl font-black text-slate-100/50 absolute -top-16 -left-8 z-[-1] select-none tracking-tighter">
                    {project.id}
                  </span>
                  <div className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">
                    Project Case Study
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-8 leading-[1.1] tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium max-w-xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-5 py-2.5 bg-white text-slate-600 text-xs font-bold rounded-xl tracking-wider uppercase shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.a 
                  href="#" 
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 text-blue-600 font-black text-lg"
                >
                  Explore Detailed Analysis
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
                    <ArrowRight size={24} />
                  </div>
                </motion.a>
              </div>

              {/* Image Side - Larger View with Vertical Stack for multiples */}
              <div className="w-full lg:w-[55%] relative group">
                {/* Layered background shadow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/5 to-indigo-600/5 rounded-[4rem] blur-2xl group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className={`relative overflow-hidden rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center p-8 gap-8 transition-transform duration-700 group-hover:translate-y-[-8px]`}>
                  {project.images ? (
                    <div className="flex flex-col gap-6 w-full h-full">
                      {project.images.map((img, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          className="flex-1 w-full overflow-hidden rounded-xl shadow-inner group/img relative"
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} - ${idx + 1}`}
                            className="w-full h-full object-contain p-4 group-hover/img:scale-110 transition-transform duration-700"
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div 
                      className="w-full h-full flex items-center justify-center relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-h-[550px]"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Layered Decorative Elements */}
                <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-48 h-48 bg-blue-50/50 rounded-full blur-[60px] -z-10 animate-pulse`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRecentEndeavors;
