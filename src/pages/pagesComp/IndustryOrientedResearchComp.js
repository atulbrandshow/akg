import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  ArrowRight,
  Beaker,
  Cpu,
  Settings,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const coes = [
  {
    title: "KUKA Industrial Robotics Training Centre",
    icon: <Cpu size={24} />,
    color: "from-blue-600 to-cyan-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  {
    title: "FRONIUS Advance Welding Technology & Research Centre",
    icon: <Zap size={24} />,
    color: "from-orange-600 to-yellow-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  {
    title: "SIEMENS Advance Manufacturing Centre",
    icon: <Settings size={24} />,
    color: "from-indigo-600 to-purple-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  { 
    title: "NI LabVIEW Academy", 
    icon: <Beaker size={24} />,
    color: "from-green-600 to-emerald-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  {
    title: "BOSCH Rexroth Centre of Competence in Automation Technologies",
    icon: <Settings size={24} />,
    color: "from-red-600 to-rose-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  { 
    title: "AIA Centre for Integrated Automation", 
    icon: <Cpu size={24} />,
    color: "from-indigo-900 to-blue-800",
    url: "/kuka-robotics-centre-of-excellence",
  },
  { 
    title: "SIEMENS PLM Centre of Excellence", 
    icon: <Settings size={24} />,
    color: "from-sky-600 to-blue-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  { 
    title: "MITSUBISHI Authorised Training Centre", 
    icon: <Zap size={24} />,
    color: "from-red-700 to-orange-600",
    url: "/kuka-robotics-centre-of-excellence",
  },
  { 
    title: "FAB LAB Centre of Digital Manufacturing", 
    icon: <Cpu size={24} />,
    color: "from-slate-700 to-slate-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  { 
    title: "BOSCH Joint Certification Centre", 
    icon: <Settings size={24} />,
    color: "from-red-500 to-pink-500",
    url: "/kuka-robotics-centre-of-excellence",
  },
  { 
    title: "ZEISS Calibration & Testing Centre", 
    icon: <Beaker size={24} />,
    color: "from-blue-800 to-indigo-700",
    url: "/kuka-robotics-centre-of-excellence",
  },
  {
    title: "SIEMENS Centre of Excellence in Automation",
    icon: <Settings size={24} />,
    color: "from-cyan-600 to-blue-600",
    url: "/kuka-robotics-centre-of-excellence",
  },
  {
    title: "JANATICS Industrial Pneumatic Knowledge Centre",
    icon: <Zap size={24} />,
    color: "from-blue-500 to-sky-400",
    url: "/kuka-robotics-centre-of-excellence",
  },
  {
    title: "DGCA Certified Remote Pilot Training Drone Academy",
    icon: <Cpu size={24} />,
    color: "from-indigo-800 to-purple-800",
    url: "/kuka-robotics-centre-of-excellence",
  },
];

const IndustryOrientedResearchComp = () => {
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Blob Animations
      gsap.to(blob1Ref.current, {
        x: "30%",
        y: "20%",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(blob2Ref.current, {
        x: "-20%",
        y: "-30%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Entry Animations
      gsap.fromTo(
        ".content-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".content-header",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".coe-card-new",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".grid-container-new",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden p-6 md:p-12 lg:p-16">
      {/* Layered Background with Grid and Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div ref={blob1Ref} className="absolute top-0 right-0 w-96 h-96 bg-indigo-300/10 rounded-full blur-[100px]"></div>
        <div ref={blob2Ref} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="content-header relative mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-indigo-950"></div>
          <span className="text-sm font-novaBold uppercase tracking-widest text-indigo-950">Technical Innovation</span>
        </div>
        
        <h2 className="text-5xl md:text-5xl font-novaBold text-indigo-950 mb-8 leading-tight">
          Industry Oriented <span className="text-secondary">Research</span>
        </h2>
        
        <p className="text-xl text-slate-600 font-novaReg leading-relaxed max-w-4xl">
          Under the AKGU Skills Foundation (ASF) umbrella, we bridge the gap between academia and industry through cutting-edge research and innovation across 14 specialized domains.
        </p>
        
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
          <GraduationCap size={300} className="text-indigo-950" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-container-new relative">
        {coes.map((coe, index) => (
          <div key={index} className="coe-card-new group cursor-pointer relative">
            {/* Minimalist Industrial Node Design with 3D Elevation */}
            <div className="relative h-full bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl overflow-hidden shadow-lg shadow-indigo-100/30 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-indigo-200/60 hover:-translate-y-3 group-hover:border-secondary/30">
              
              {/* Subtle 3D Depth Layer */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${coe.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500 ease-in-out`}>
                  {coe.icon}
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-xs font-novaBold text-slate-300 group-hover:text-secondary group-hover:border-secondary/30 transition-all">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
              
              <h3 className="text-base md:text-lg font-novaBold text-indigo-950 leading-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                {coe.title}
              </h3>

              <div className="flex items-center gap-2">
                <div className="flex-grow h-[1px] bg-slate-100 group-hover:bg-secondary/20 transition-colors"></div>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </div>

              {/* Decorative accent */}
              <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${coe.color} transition-all duration-500`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryOrientedResearchComp;
