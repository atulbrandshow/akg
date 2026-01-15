import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const sliderData = [
  { image: "/image/SkillFoundationImage/skill-foundation1.jpeg", title: "Hon'ble Prime Minister Visits ASF Stall at MCF", description: "AKGEC Skills Foundation (ASF) showcased its innovative skills development models during the Hon'ble Prime Minister's visit to MCF." },
  { image: "/image/SkillFoundationImage/skill-foundation2.jpeg", title: "Industry-Grade Automation Lab Empowering Practical Skill Development", description: "Our state-of-the-art automation labs provide students with hands-on experience using industry-standard equipment." },
  { image: "/image/SkillFoundationImage/skill-foundation3.png", title: "Experiential Learning with Industrial Robots", description: "Students gain practical knowledge by working directly with industrial robots, preparing them for the future of manufacturing." },
  { image: "/image/SkillFoundationImage/skill-foundation4.jpeg", title: "Live Automotive Learning Through Full-Scale Vehicle Cutaway Model", description: "A full-scale vehicle cutaway model allows students to explore the intricate details of automotive engineering in real-time." },
  { image: "/image/SkillFoundationImage/skill-foundation5.png", title: "Bridging Mechanics, Electronics & Automation, Mechatronics Lab Experience", description: "Our mechatronics lab bridges the gap between mechanics and electronics, fostering a holistic understanding of automated systems." },
];

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRefs = useRef([]);
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  const changeSlide = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    setIsAnimating(true);
    const oldIndex = currentIndex;
    const tl = gsap.timeline({ onComplete: () => { setCurrentIndex(newIndex); setIsAnimating(false); } });
    tl.to(contentRefs.current[oldIndex], { opacity: 0, y: 20, duration: 0.4, ease: 'power2.in' })
      .to(slideRefs.current[oldIndex], { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, "-=0.2");
    tl.set(slideRefs.current[newIndex], { opacity: 1, zIndex: 10 })
      .fromTo(imageRefs.current[newIndex], { scale: 1.2 }, { scale: 1, duration: 1.5, ease: 'power2.out' }, 0.2)
      .fromTo(contentRefs.current[newIndex], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
  };

  const nextSlide = () => changeSlide((currentIndex + 1) % slides.length);
  const prevSlide = () => changeSlide((currentIndex - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group/slider">
      {slides.map((slide, index) => (
        <div key={index} ref={(el) => (slideRefs.current[index] = el)} className="absolute inset-0" style={{ opacity: index === currentIndex ? 1 : 0, zIndex: index === currentIndex ? 10 : 0, pointerEvents: index === currentIndex ? 'auto' : 'none' }}>
          <img ref={(el) => (imageRefs.current[index] = el)} src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div ref={(el) => (contentRefs.current[index] = el)} className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{slide.title}</h3>
              <p className="text-base text-gray-200 leading-relaxed line-clamp-3">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-6 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button onClick={prevSlide} disabled={isAnimating} className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full transition-all duration-300 pointer-events-auto"><ChevronLeft className="w-6 h-6 text-white" /></button>
        <button onClick={nextSlide} disabled={isAnimating} className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full transition-all duration-300 pointer-events-auto"><ChevronRight className="w-6 h-6 text-white" /></button>
      </div>
      <div className="absolute bottom-8 right-8 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => changeSlide(index)} className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/50 hover:bg-white'}`} />
        ))}
      </div>
    </div>
  );
}

export default function OverviewContent() {
  const sectionRef = useRef(null);
  const overviewRef = useRef(null);
  const sliderRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overviewRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
      gsap.fromTo(sliderRef.current, { opacity: 0, scale: 0.95, x: 50 }, { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;
        const isParticle = shape.classList.contains('particle');
        gsap.to(shape, { y: isParticle ? "random(-200, 200)" : "random(-100, 100)", x: isParticle ? "random(-150, 150)" : "random(-50, 50)", rotation: isParticle ? "random(-180, 180)" : 0, opacity: isParticle ? "random(0.1, 0.4)" : "random(0.05, 0.15)", duration: isParticle ? "random(10, 20)" : "random(15, 25)", repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.1 });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-r from-slate-100 via-blue-100/70 to-blue-600/10 overflow-hidden py-10">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={el => shapesRef.current[0] = el} className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        <div ref={el => shapesRef.current[1] = el} className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
        <div ref={el => shapesRef.current[2] = el} className="absolute top-[40%] right-[5%] w-48 h-48 bg-blue-600/10 rounded-full blur-2xl" />
        {[...Array(8)].map((_, i) => (
          <div key={i} ref={el => shapesRef.current[i + 3] = el} className={`particle absolute w-4 h-4 rounded-full border border-blue-200/30 ${i % 2 === 0 ? 'bg-blue-100/20' : ''}`} style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
        ))}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_100px,#3b82f6_100px,#3b82f6_101px)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={overviewRef} className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="h-[2px] w-12 bg-blue-600" />
                <span className="text-sm font-black tracking-widest text-blue-600 uppercase">Foundation Overview</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">AKGU Skills <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Foundation</span></h1>
              <p className="text-xl text-slate-500 font-bold uppercase tracking-wider">Ajay Kumar Garg Skills Foundation (ASF)</p>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-white shadow-xl shadow-slate-200/50 space-y-6">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium"><span className="text-slate-900 font-black">AKGEC Skills Foundation</span> is an ISO <strong>9001:2015</strong>, <strong>14001:2015</strong>, and <strong>45001:2018</strong> certified and <span className="text-blue-600 font-bold">NABL accredited</span> facility. It is a prestigious joint initiative of <strong>AKGEC</strong> and the <strong>NSDC</strong>.</p>
                <p className="text-lg text-slate-600 leading-relaxed">ASF offers courses aligned with global didactic concepts and <strong>National Occupational Standards (NOS)</strong>, providing recognized Skill Certificates across various industry sectors.</p>
                <p className="text-lg text-slate-600 leading-relaxed">With state-of-the-art facilities in <strong>automation, robotics, drones, and IoT</strong>, ASF coordinates with industry partners to meet the growing demand for highly skilled professionals in advanced manufacturing and technology.</p>
              </div>
            </div>
          </div>
          <div ref={sliderRef} className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-xl mx-auto w-full">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] -rotate-3 scale-105" />
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[2.5rem] rotate-2 scale-105" />
            <ImageSlider slides={sliderData} />
          </div>
        </div>
      </div>
    </section>
  );
}
