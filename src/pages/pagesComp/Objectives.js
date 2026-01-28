import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Award,
  Users,
  Lightbulb,
  BookOpen,
  Globe2,
  Scale,
  HeartHandshake,
  Sparkles
} from 'lucide-react';

const objectives = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Promote Excellence",
    subtitle: "in Teaching, Learning, & Research",
    description: "Rigorous academic programs, interdisciplinary studies, and innovation-driven scholarship defining our core."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Develop Graduates",
    subtitle: "Skilled, Employable, & Ethical",
    description: "Equipped with professional competence, digital capabilities, leadership qualities, and human values."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Foster Innovation",
    subtitle: "Entrepreneurship & Collaboration",
    description: "Encouraging research translation, start-ups, incubation, and strong industry–academia partnerships."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Flexible Education",
    subtitle: "Multidisciplinary & NEP Aligned",
    description: "Supporting choice-based, outcome-oriented, and lifelong learning consistent with national policies."
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Advance Knowledge",
    subtitle: "Global Impact & Research",
    description: "Addressing national priorities, industrial needs, and global challenges through impactful research."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Promote Values",
    subtitle: "Constitutional & Global",
    description: "Nurturing patriotism, inclusivity, secularism, and respect for diversity and national integration."
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Preserve Culture",
    subtitle: "Ethical & Indigenous Systems",
    description: "Integrating global best practices with indigenous knowledge for holistic and grounded development."
  }
];

const TiltCard = ({ item, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 border-l-4 border-t-4 border-l-brand-blue border-t-brand-yellow transition-shadow duration-300 flex flex-col group cursor-pointer"
      >
        {/* Shine Effect */}
        <motion.div
          style={{
            background: useTransform(
              [shineX, shineY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`
            ),
            opacity: 0.1,
            zIndex: 10
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />

        <div style={{ transform: "translateZ(30px)" }} className="mb-6 relative">
          <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow transition-colors duration-500">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {item.icon}
            </motion.div>
          </div>
          <div className="absolute -top-2 -right-2 text-6xl font-novaBold text-gray-50 opacity-20 pointer-events-none select-none">
            {index + 1}
          </div>
        </div>

        <div style={{ transform: "translateZ(20px)" }} className="flex-1">
          <h3 className="text-2xl font-novaBold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
            {item.title}
          </h3>
          <p className="text-lg font-novaSemi text-brand-yellow uppercase tracking-wider mb-4">
            {item.subtitle}
          </p>
          <p className="text-gray-600 font-novaReg text-lg leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* <motion.div
          style={{ transform: "translateZ(10px)" }}
          className="mt-6 pt-4 border-t border-gray-50 flex items-center text-brand-blue text-sm font-novaSemi opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span>Learn more</span>
          <div className="ml-2 w-4 h-[1px] bg-brand-blue"></div>
        </motion.div> */}

        {/* Gradient Border Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
      </motion.div>
    </motion.div>
  );
};

export default function Objectives() {
  return (
    <section className="relative py-5 overflow-hidden bg-slate-50">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-xs font-novaBold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3 h-3" />
            Strategic Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-novaBold text-gray-900 mb-6">
            Our Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-yellow">Objectives</span>
          </h2>
          {/* <p className="text-lg text-gray-600 font-novaReg max-w-2xl mx-auto">
            The objectives of AKG University shall be to :
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {objectives.map((item, index) => (
            <TiltCard key={index} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-brand-blue/10">
            <p className="text-xl text-gray-700 font-novaReg italic">
              "AKG University stands as a testament to excellence in higher education, delivering industry-aligned programs and fostering innovation."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



















































