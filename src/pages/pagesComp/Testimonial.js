import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    image: "/image/testimonial-images/image2.jpg",
    text: "What a fantastic day! A perfect mix of academic, Govt. and Pvt. sector mentality. This school will be the bedrock of INDIAN success well into the future.",
    name: "Mr. Richard M Rossow",
    title:
      "Senior Adviser and Wadhwani Chair in US, Center for Strategic & International",
  },
  {
    image: "/image/testimonial-images/image5.jpg",
    text: "Your passion, infrastructure, facilities & faculties are all world-class. I wish you great success.",
    name: "Mr. Dillip Sawhney",
    title: "Regional Director Rockwell Automation Ltd",
  },
  {
    image: "/image/testimonial-images/image1.jpg",
    text: "I was very impressed from offered trainings based on knowledge tie-ups with high level companies. I also like to connect them to international standards.",
    name: "Dr. Monica Bias",
    title: "Global Certification Head TUV Rheinland, Germany",
  },
  {
    image: "/image/testimonial-images/image7.jpg",
    text: "Wonderful and unique Institute with vision. Wish them all the best in future.",
    name: "Ms. Mohini Kelkar",
    title: "Managing Director Grind Master Machines Pvt Ltd",
  },
  {
    image: "/image/testimonial-images/image3.jpg",
    text: "All centers are highly impressive from innovation point of view and academically very sound and updated.",
    name: "Dr. M.K. Soni",
    title: "Executive Director Manav Rachna University",
  },
  {
    image: "/image/testimonial-images/image8.png",
    text: "Extremely good training facilities. All the best for upcoming Robocon",
    name: "Prof. S.K. Saha",
    title: "Professor, IIT Delhi",
  },
  {
    image: "/image/testimonial-images/image9.jpg",
    text: "Overwhelmed with the infrastructure and the philosophy of Excellence. Hope it grows day by day!!!",
    name: "Dr. Nagesh Bhandari",
    title: "President - Indus University",
  },
  {
    image: "/image/testimonial-images/image10.jpg",
    text: "Pleasantly & Surprised with the tech centre. I congratulate Mr. Shah for this initiative and SCHUNK will be pleased to encourage your efforts.",
    name: "Mr. Satish Sadasivam",
    title: "Managing Director SCHUNK Intec India Pvt Ltd",
  },
  {
    image: "/image/testimonial-images/image4.jpg",
    text: "Delighted and impressed with the institute, run and managed professionally. All credit goes to the Management, Director & Faculty of the Institute.",
    name: "Sh. Naresh Kumar",
    title: "Chairman NDMC Smart India Ltd.",
  },
  {
    image: "/image/testimonial-images/image6.jpg",
    text: "We greatly appreciated our visit.Your work in supporting both student learning and improving local industry is impressive to see. We look forward to working closer in the future",
    name: "John Emholz",
    title: "President and CEO Global Messer Cutting Systems",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <Quote size={60} className="text-blue-600 rotate-180" />
      </div>

      <div className="flex-grow">
        <p className="text-gray-700 font-novaReg text-lg leading-relaxed italic mb-8 relative z-10">
          "{testimonial.text}"
        </p>
      </div>

      <div className="flex items-center gap-5 mt-auto pt-6 border-t border-gray-50">
        <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-500">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-novaBold text-gray-900 text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {testimonial.name}
          </h3>
          <p className="text-sm font-novaReg text-gray-500 mt-1 line-clamp-2">
            {testimonial.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonial = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-10 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Primary Animated Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#3b82f6 1.5px,transparent 1.5px),linear-gradient(to bottom,#3b82f6 1.5px,transparent 1.5px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Secondary Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "-70px -70px"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Dot Pattern */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "-200px 200px"] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Large Gradient Blobs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full blur-[150px]"
            style={{
              width: 400 + i * 80,
              height: 400 + i * 80,
              background:
                i % 3 === 0
                  ? "rgba(59,130,246,0.25)"
                  : i % 3 === 1
                  ? "rgba(99,102,241,0.25)"
                  : "rgba(168,85,247,0.25)",
              top: `${5 + i * 15}%`,
              left: `${8 + i * 12}%`,
            }}
          />
        ))}

        {/* Diagonal Lines */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "400px 0px"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,transparent,transparent 80px,#3b82f6 80px,#3b82f6 82px)",
          }}
        />

        {/* Reverse Diagonal */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "-400px 0px"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg,transparent,transparent 70px,#6366f1 70px,#6366f1 72px)",
          }}
        />

        {/* Circular Patterns */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at center, transparent 0, transparent 20px, #3b82f6 20px, #3b82f6 21px)",
          }}
        />

        {/* Radial Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_40%)]" />

        {/* Animated Waves */}
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 50px, #3b82f6 50px, #3b82f6 51px)",
          }}
        />

        {/* Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-novaBold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-novaReg text-gray-900 mb-6"
          >
            What Industry Leaders Say About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 font-novaReg text-lg"
          >
            Insights and appreciation from renowned experts across various
            sectors who have witnessed our commitment to excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
