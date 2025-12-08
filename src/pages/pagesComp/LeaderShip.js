import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeaderShip = () => {
  const containerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const titleRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: -50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Logo watermarks animation
      gsap.fromTo(logoRefs.current,
        { scale: 0, rotation: 0, opacity: 0 },
        {
          scale: 1,
          rotation: (i) => [12, -6, 45, 0][i] || 0,
          opacity: (i) => [0.20, 0.18, 0.15, 0.08][i] || 0.1,
          duration: 1.5,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // First Leader Section Animation
      gsap.fromTo(
        ".leader-image-1",
        { scale: 0.8, opacity: 0, rotateY: -15 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: firstSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".leader-content-1",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: firstSectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".leader-quote-1",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: firstSectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Second Leader Section Animation
      gsap.fromTo(
        ".leader-image-2",
        { scale: 0.8, opacity: 0, rotateY: 15 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".leader-content-2",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".leader-quote-2",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Parallax effect for images
      gsap.to(".leader-image-1 img", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: firstSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".leader-image-2 img", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-100 py-20 overflow-hidden">
      {/* Layer 1: Enhanced Base Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/20 via-transparent to-blue-50/20"></div>
      </div>
      
      {/* Layer 2: SVG Wave Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 opacity-[0.15]">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path d="M0,100 C300,50 600,150 900,80 C1050,40 1150,120 1200,100 L1200,0 L0,0 Z" fill="url(#gradient1)" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3C5686" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute bottom-0 right-0 w-full h-48 opacity-[0.12]">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path d="M1200,100 C900,150 600,50 300,120 C150,160 50,80 0,100 L0,200 L1200,200 Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3C5686" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Layer 3: Logo Watermarks */}
      <div className="absolute inset-0">
        <div ref={el => logoRefs.current[0] = el} className="absolute top-20 right-20 w-32 h-32 opacity-[0.20] rotate-12">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div ref={el => logoRefs.current[1] = el} className="absolute bottom-24 left-16 w-24 h-24 opacity-[0.18] -rotate-6">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div ref={el => logoRefs.current[2] = el} className="absolute top-1/4 left-8 w-20 h-20 opacity-[0.15] rotate-45">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div ref={el => logoRefs.current[3] = el} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.08]">
          <img src="/image/akgec-logo.svg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      
      {/* Layer 4: Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-primary/15 via-primary/8 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-secondary/18 via-secondary/10 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full"></div>
      </div>
      
      {/* Layer 5: Subtle Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Leadership
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div ref={firstSectionRef} className="grid grid-cols-8 gap-8 mb-20 max-sm:mb-10">
          <div className="leader-image-1 col-span-3 max-md:col-span-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img
                src="/image/leadership/director-1.webp"
                alt="director-general"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-16 p-6">
                <b className="font-bold text-xl text-white">
                  Dr R.K. Agarwal
                </b>
                <small className="block text-white/90 text-sm mt-1">
                  Director General, AKGU
                </small>
              </div>
            </div>
            <div className="leader-quote-1 w-full pt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 mt-4 shadow-lg">
              <span className="font-bold text-5xl block font-serif italic text-primary">
                "
              </span>
              <cite className="-mt-4 block text-sm leading-6 text-gray-700 text-justify">
                Dr. R.K. Agarwal has an exceptionally brilliant academic
                background with B.Tech from IIT Kanpur, M.S. from CIT, Cranfield,
                UK and PhD from IISc Bangalore. During his illustrious career of
                nearly three decades in the Indian Air Force and Defence Research
                & Development Organization (DRDO)
              </cite>
            </div>
          </div>

          <div className="leader-content-1 relative font-novaReg text-gray-800 col-span-5 max-md:col-span-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="h-full max-h-[500px] overflow-y-auto text-sm scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-gray-200 text-justify pr-4">
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                <span className="font-bold text-3xl">H</span>e has held various key appointments including Chief Engineering
                Officer of an Operational Base, Director (Engg) at Air HQ and
                Project Director at Centre for Airborne Systems. His vast
                managerial, administrative, research and academic experience
                includes teaching assignments at Air Force Technical College and
                nine years of pioneering R&D work on the prestigious AWACS project
                in DRDO. He has also been a member of the Aeronautical Research &
                Development Board (ARDB) panel for approval and review of sponsored
                research projects at various centres of Excellence established at
                IITs and CSIR Laboratories.
              </p>
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                He is the recipient of the coveted Royal Aeronautical Society (UK)
                award for academic excellence at CIT and a citation with cash award
                by DRDO for his contribution to the design and development of
                Airborne Early Warning aircraft, culminating in its maiden flight.
                His name also features in the the book featuring "100 Great IITians:
                Dedicated to the Service of the Nation" by Commander V K Jately.
                This book will play its role of inspiring the youth of India who are
                on the path of making India विकसित भारत and विश्वगुरू.
              </p>
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                After taking voluntary retirement in 2004, Dr. Agarwal decided to
                contribute in the field of technical education and has been the
                Director of Ajay Kumar Garg University (AKGU), Ghaziabad since then.
                He has been persistently working towards setting new benchmarks in
                academic excellence as well as industry-academia interface to make
                the students globally competitive and employable. During his tenure,
                the college has not only been consistently maintaining exceptional
                results and placements but has also made significant progress in
                research and industry relevant consultancy projects. A number of
                initiatives and collaborative ventures with eminent multi-national
                companies have lead to establishment of many multi-disciplinary,
                high technology industry relevant facilities. These include India's
                first Kuka Industrial Robotics Training Centre, NI-LabVIEW Academy,
                Bosch Rexroth Centre of Competence in Automation Technologies,
                Janatics Industrial Pneumatic Knowledge Centre and Mitsubishi
                Electric India. The college has also achieved the unique distinction
                of receiving the Academic Excellence Award for Best University in
                UPTU for two successive years under his able guidance.
              </p>
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                He has also contributed in bringing about a culture of corporate
                social responsibility in academic institutions. The social
                activities initiated by him include running a free primary school in
                the college, adopting a municipal corporation school in a nearby
                village, providing tuition fee subsidy to children of class IV
                employees, donating computers to spread computer literacy and
                generously contributing for relief work after natural calamities.
                Involvement in these activities makes the students conscious of
                their civic and social responsibilities. He places special emphasis
                on all round development with focus on inculcating self discipline,
                good moral values, ethics, work culture and a positive attitude to
                make the students not just competent professionals but also good
                citizens and responsible members of the society.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic bg-primary/5 p-4 rounded-r-xl transform transition-all duration-300 hover:shadow-lg hover:bg-primary/10">
                His wide ranging experience, vision and dynamism have infused
                inspiration and provided a road map for academic institutions to
                achieve the zenith of excellence in all fields of activities.
              </blockquote>
            </div>
          </div>
        </div>
        
        <div ref={secondSectionRef} className="grid grid-cols-8 gap-8 mb-20 max-md:border-t-2 max-md:border-t-gray-200 pt-5 max-md:flex max-md:flex-col-reverse">
          <div className="leader-content-2 relative col-span-5 max-md:col-span-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="h-full max-h-[500px] font-novaReg text-gray-800 overflow-y-auto text-sm scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-gray-200 text-justify pr-4">
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                <span className="font-bold text-3xl">G</span>raduating with honors in Electrical Engineering from Kurukshetra
                University in 2001, Dr. Ahuja's journey continued with an M.Tech. in
                Energy and Environmental Management from the Indian Institute of
                Technology, Delhi, in 2008. His exceptional academic prowess was
                recognized with the Prof. O.P. Gupta Gold Medal, an accolade
                bestowed upon him for achieving the highest CGPA during his M.Tech.
                program. Dr. Ahuja's academic pursuits culminated in a PhD from IIT
                Delhi in 2013, cementing his reputation as a dedicated scholar.
              </p>
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                His expertise lies in the domains of Electrical Machines, Power
                Electronics, and Wind Energy Conversion Systems. Dr. Ahuja's
                scholarly contributions extend across more than 50 publications in
                prestigious international journals and conferences. His commitment
                to innovation is evident in his patent achievements, with several
                patents published under his name. Notably, he has successfully led
                two research projects funded under TEQIP-III, underscoring his
                proactive engagement in advancing knowledge.
              </p>
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                As a valued member of influential professional bodies such as IEEE,
                PES, ISTE, and IEI, Dr. Ahuja actively contributes to the growth and
                development of his field. His collaboration with the IEI-Ghaziabad
                local center as an eminent engineer reflects his dedication to
                community-driven initiatives. Moreover, Dr. Ahuja plays a pivotal
                role in shaping Electrical Engineering activities at the Abdul Kalam
                Technical University level, serving as a member of the Board of
                Studies for Electrical Engineering at AKTU.
              </p>
              <p className="leading-6 transform transition-all duration-300 hover:translate-x-2 mb-4">
                Dr. Hemant Ahuja's multifaceted expertise, dedication to academia,
                and active involvement in research and collaboration position him as
                a visionary leader at the helm of Ajay Kumar Garg University,
                driving excellence and innovation in engineering education.
              </p>
            </div>
          </div>
          <div className="leader-image-2 col-span-3 max-md:col-span-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img
                src="/image/leadership/Director_AKGEC.webp"
                alt="director-general"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-16 p-6">
                <b className="font-bold text-xl text-white">
                  Dr. Hemant Ahuja
                </b>
                <small className="block text-white/90 text-sm mt-1">
                  Director, AKGU
                </small>
              </div>
            </div>
            <div className="leader-quote-2 w-full pt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 mt-4 shadow-lg">
              <span className="font-bold text-5xl block font-serif italic text-secondary">
                "
              </span>
              <cite className="-mt-4 block text-sm leading-6 text-gray-700 text-justify">
                Dr. Hemant Ahuja, the esteemed Director of Ajay Kumar Garg
                University, Ghaziabad, is a seasoned professional with an
                illustrious career spanning over 22 years in academia and
                industry.
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;