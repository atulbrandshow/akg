import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star, Award, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Dr. Amita Dev",
    role: "Vice Chancellor, AKGU",
    image: "/image/leadership/director-2.png",
    quote: "Prof. Amita Dev is a distinguished Academician, Engineer, and Visionary leader with over 40 years of rich experience in Academia, Research, Industry, and Higher Education Administration.",
    content: [
      <>Prof. Amita Dev is a distinguished Academician, Engineer, and Visionary leader with over 40 years of rich experience in <strong>Academia, Research, Industry, and Higher Education Administration</strong>. She is an Engineer with a Ph.D. in Computer Engineering.</>,
      <>She has held prestigious leadership roles including <strong>Vice Chancellor of Indira Gandhi Delhi Technical University for Women (IGDTUW) and Delhi Skill and Entrepreneurship University (DSEU)</strong>, as well as Pro Vice Chancellor, Principal, and Head of Department at premier institutions. She is widely recognized for her excellence in Institutional Development, Policy Formulation, Research Leadership, and Innovation-Driven growth in Technical Education and Entrepreneurship.</>,
      <>Her research expertise spans <strong>Artificial Intelligence, Deep Neural Networks, Natural Language Processing</strong>. She has authored over 140 research publications, holds an impressive portfolio of 31 patents (20 granted), and has successfully led several Nationally funded projects exceeding ₹34 Crores from agencies such as DST, MeitY, AICTE, UKRI, and CFSL etc.</>,
      <>A sought-after speaker, mentor, and motivator, Prof. Dev has delivered thought-provoking lectures and keynote addresses at numerous national and international forums. Her outstanding contributions have been recognized with multiple National and International awards, including the AICTE <strong>Young Teacher Career Award, Best Engineering Teacher Award by ISTE, Lifetime Achievement Award by DMA, "Ambassador For Peace" by Universal Peace Federation, Shrimati Sushma Swaraj "STREE SHAKTI SAMMAN" Institution of Happiness Award</strong> by Hon'ble Minister of Women & Child Development, Vittiya Saksharta Abhiyan Award by Hon'ble Minister of Education and many more.</>,
      "Prof. Amita Dev continues to inspire as a trailblazer in research, innovation, and academic leadership, with a vision to harness technology for education, empowerment, and societal progress."
    ]
  }
];

const LeaderShip = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );

      // Section Animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-12 bg-white overflow-hidden">
      {/* Premium Atmospheric Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/40 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
             <div className="w-12 h-[2px] bg-[#df8934]"></div>
             <span className="text-xs uppercase tracking-[0.3em] font-novaBold text-[#df8934]">University Leadership</span>
             <div className="w-12 h-[2px] bg-[#df8934]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-novaSemi text-[#1c1f52] tracking-tight">
            Visionary <span className="text-[#df8934]">Leadership</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="flex flex-col gap-12"
            >
              {/* First Row: Image and First Paragraph */}
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                
                {/* Image Column - Premium Glassmorphism Container */}
                <div className="w-full lg:w-5/12 sticky top-32">
                  <div className="relative group">
                    {/* The Image Container */}
                    <div className="relative px-4 pb-4 bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(28,31,82,0.15)] border border-gray-100 overflow-hidden">
                        <div className="pt-6">
                            <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                                <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Bottom Floating Info on Image */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-[#df8934] rounded-xl flex items-center justify-center text-white">
                                                <GraduationCap size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-novaBold text-black uppercase tracking-widest opacity-80">Vice Chancellor, AKGU</p>
                                                <p className="text-sm font-novaSemi text-black">Dr. Amita Dev</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating Achievement Badge */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1c1f52] rounded-full flex flex-col items-center justify-center text-white shadow-2xl border border-white/20 z-20 group-hover:scale-110 transition-transform duration-500">
                        <Star className="text-[#df8934] mb-1" size={18} fill="#df8934" />
                        <span className="text-[10px] font-novaBold tracking-tighter uppercase">40+ Years</span>
                        <span className="text-[8px] opacity-60 uppercase">Exp</span>
                    </div>

                    {/* Decorative Background Mark */}
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#df8934]/10 rounded-full blur-2xl -z-10 group-hover:bg-[#df8934]/20 transition-colors"></div>
                  </div>
                </div>

                {/* Text Column - First paragraph only */}
                <div className="w-full lg:w-7/12 lg:pt-4">
                  <div className="mb-10 flex flex-col items-start gap-4">
                    <h3 className="text-5xl md:text-6xl font-novaSemi text-[#1c1f52] leading-tight">
                        {leader.name}
                    </h3>
                    <div className="flex items-center gap-3 px-4 py-2 bg-indigo-50/50 rounded-full border border-indigo-100">
                      <Award className="text-[#df8934]" size={18} />
                      <span className="text-sm font-novaBold text-[#1c1f52] uppercase tracking-wider">
                        {leader.role}
                      </span>
                    </div>
                  </div>

                  <div className="prose prose-lg text-gray-700 font-novaReg leading-relaxed space-y-6 text-justify max-w-none">
                    <p className="text-lg first-letter:text-6xl first-letter:font-novaBold first-letter:text-[#1c1f52] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
                      {leader.content[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Row: Remaining paragraphs below image */}
              <div className="w-full">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg text-gray-600 font-novaReg leading-relaxed space-y-8 text-justify max-w-none">
                            {leader.content.slice(1).map((paragraph, pIndex) => (
                                <p key={pIndex + 1}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    
                    {/* Pull Quote Sidebar */}
                    <div className="lg:col-span-4 self-center">
                        <div className="relative p-10 bg-gradient-to-br from-[#1c1f52] to-[#252a6d] rounded-[2.5rem] shadow-2xl overflow-hidden group">
                            <Quote className="absolute top-6 left-6 text-white/5 group-hover:text-[#df8934]/10 transition-all duration-700" size={100} />
                            <div className="relative z-10">
                                <p className="text-xl italic text-white/90 font-novaReg leading-relaxed mb-6">
                                    "{leader.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-[2px] bg-[#df8934]"></div>
                                    <span className="text-xs font-novaBold text-[#df8934] uppercase tracking-widest">Leadership Vision</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;
