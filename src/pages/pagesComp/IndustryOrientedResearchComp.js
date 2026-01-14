import { Settings, Cpu, Factory, Play, CircuitBoard, Zap, Car, Cable, Building2, Box, Ruler, Plane, ShieldCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const centers = [
  { title: "KUKA Industrial Robotics Training Centre", icon: Cpu, color: "from-blue-600 to-indigo-600" },
  { title: "FRONIUS Advance Welding Technology & Research Centre", icon: Zap, color: "from-cyan-500 to-blue-500" },
  { title: "SIEMENS Advance Manufacturing Centre", icon: Factory, color: "from-teal-500 to-emerald-600" },
  { title: "NI LabVIEW Academy", icon: Play, color: "from-emerald-500 to-green-600" },
  { title: "BOSCH Rexroth Centre of Competence in Automation Technologies", icon: Cable, color: "from-green-500 to-lime-600" },
  { title: "AIA Centre for Integrated Automation", icon: CircuitBoard, color: "from-lime-500 to-yellow-500" },
  { title: "SIEMENS PLM Centre of Excellence", icon: Building2, color: "from-yellow-500 to-orange-500" },
  { title: "MITSUBISHI Authorised Training Centre", icon: Settings, color: "from-orange-500 to-red-500" },
  { title: "FAB LAB Centre of Digital Manufacturing", icon: Box, color: "from-red-500 to-pink-500" },
  { title: "BOSCH Joint Certification Centre", icon: Car, color: "from-pink-500 to-rose-500" },
  { title: "ZEISS Calibration & Testing Centre", icon: Ruler, color: "from-rose-500 to-purple-500" },
  { title: "SIEMENS Centre of Excellence in Automation", icon: Settings, color: "from-purple-500 to-violet-500" },
  { title: "JANATICS Industrial Pneumatic Knowledge Centre", icon: Zap, color: "from-violet-500 to-indigo-500" },
  { title: "DGCA Certified Remote Pilot Training", icon: Plane, color: "from-indigo-500 to-blue-600" },
  { title: "Drone Academy", icon: Plane, color: "from-blue-600 to-indigo-600" }
];

export default function IndustryOrientedResearchComp() {
  const containerRef = useRef(null);
  const gearRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated gear rotation
      gsap.to(gearRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f8fafc] py-24 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>

      <div className="max-w-7xl w-full relative z-10 text-center mb-16">
        <div className="hub-header">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-600 text-white rounded-full shadow-lg">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-bold text-xs uppercase tracking-widest">Innovation Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Industry Oriented <span className="text-blue-600">Research Centers</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between academia and industry through cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Orbit Section */}
      <div className="orbit-container relative w-full max-w-[1200px] aspect-square flex items-center justify-center scale-[0.7] md:scale-90 lg:scale-100">
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {centers.map((_, i) => {
            const angle = (i * (360 / centers.length)) * (Math.PI / 180);
            const r = 40; 
            const x2 = 50 + r * Math.cos(angle);
            const y2 = 50 + r * Math.sin(angle);
            return (
              <line 
                key={i}
                x1="50%" y1="50%" 
                x2={`${x2}%`} y2={`${y2}%`} 
                stroke="#cbd5e1" 
                strokeWidth="1.5"
                strokeDasharray="5 5"
                className={`transition-all duration-300 ${hoveredIndex === i ? 'stroke-blue-500 stroke-[2.5px] opacity-100' : 'opacity-40'}`}
              />
            );
          })}
        </svg>

        {/* Center Hub (Restored Gear Style) */}
        <div className="center-hub relative z-50">
          <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 -translate-x-4 md:-translate-x-4 -translate-y-4 md:-translate-y-4 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-white border-[8px] border-[#1976D2] flex items-center justify-center shadow-2xl">
            {/* Gear teeth */}
            <div ref={gearRef} className="absolute w-48 md:w-64 h-48 md:h-64">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-4 bg-gradient-to-b from-[#1976D2] to-[#1565C0] rounded-sm shadow-md"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${28 + 5}px)`,
                  }}
                />
              ))}
            </div>                                                    
            
            {/* AKG Logo */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center z-10 shadow-inner overflow-hidden p-6">
              <img 
                src="/image/akgec-logo.svg" 
                alt="AKG Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Orbiting Cards (Static - No rotation animation) */}
        <div className="absolute inset-0 pointer-events-none">
          {centers.map((center, i) => {
            const angle = (i * (360 / centers.length));
            const Icon = center.icon;
            return (
              <div 
                key={i}
                className="absolute w-[180px] md:w-[220px] pointer-events-auto"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${angle}deg) translate(340px) rotate(-${angle}deg)`, 
                  marginTop: '-40px',
                  marginLeft: '-110px'
                }}
              >
                <div 
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group bg-white border-2 border-slate-100 p-3 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1 flex items-center gap-3 ${
                    hoveredIndex === i ? 'scale-110' : ''
                  }`}
                >
                  <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${center.color} flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:rotate-12`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-slate-800 text-[10px] md:text-[11px] font-bold leading-tight line-clamp-2 uppercase tracking-tight transition-colors group-hover:text-blue-600">
                      <span className="text-blue-500 mr-1">{i + 1}.</span> {center.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

