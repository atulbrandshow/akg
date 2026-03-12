import React from "react";
import { motion } from "framer-motion";

const studentTestimonials = [
  {
    image: "/image/placement/1.png",
    name: "NEHA SHARMA",
    course: "B.TECH (CSE)",
    batch: "Batch 2017-2021",
    company_name: "Amazon",
    description: "Amazon is a global leader in innovation and technology, offering endless opportunities for growth and development. Thanks to AKG University’s excellent placement support, I’ve kick-started my career with one of the world's most impactful companies, Amazon. I’m excited to be a part of the future of technology.",
  },
  {
    image: "/image/placement/2.png",
    name: "SAKSHI AGRAWAL",
    course: "B.TECH (CSE)",
    batch: "Batch 2017-2021",
    company_name: "Wipro",
    description: "No doubt, AKG University is one of the best colleges in North India when it comes to education and placement. AKG University does everything possible to get its students placed in the best companies in the world. I would like to thank AKG University for giving me an opportunity to work at Wipro.",
  },
  {
    image: "/image/placement/4.png",
    name: "SANJAY JAIN",
    course: "B.TECH (CSE)",
    batch: "Batch 2017-2021",
    company_name: "Amazon",
    description: "The placement cell at AKG University is truly exceptional. They provided constant guidance and support throughout the recruitment process. I am incredibly grateful for the opportunity to start my professional journey with Amazon.",
  },
  {
    image: "/image/placement/3.png",
    name: "AROHI PRAJAPAT",
    course: "B.TECH (CSE)",
    batch: "Batch 2017-2021",
    company_name: "Wipro",
    description: "My experience at AKG University has been phenomenal. The rigorous academic curriculum combined with practical exposure prepared me well for the corporate world. Getting placed at Wipro is a dream come true.",
  },
];

const StudentTestimonials = () => {
  return (
    <section className="pb-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-novaBold text-brand-blue mb-4">Success Stories</h2>
        <p className="text-lg font-novaReg text-gray-600 max-w-3xl mx-auto">
          Hear from our students who have successfully transitioned from campus to corporate, 
          landing roles at world-class organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {studentTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-yellow">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-blue text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-novaBold text-brand-blue">{testimonial.name}</h3>
                <p className="text-sm font-novaSemi text-brand-yellow uppercase tracking-wider">
                  {testimonial.course} | {testimonial.batch}
                </p>
                <div className="inline-block mt-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-novaBold text-gray-700">
                  Placed at: {testimonial.company_name}
                </div>
              </div>
              <p className="text-gray-700 font-novaReg text-justify leading-relaxed italic">
                "{testimonial.description}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonials;
