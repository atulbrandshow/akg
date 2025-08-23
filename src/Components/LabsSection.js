// components/LabsShowcase.jsx
'use client';

import { motion } from "framer-motion";
import { splitTitle } from '@/utills/splitTitle';
import { IMAGE_PATH } from '@/configs/config';

export default function LabsShowcase({ data }) {
  const d = data?.pageData || {};
  const { first, middle, last } = splitTitle(d?.Lab_Title);

  // Dynamically generate labsData
  const labsData = [];
  let i = 1;
  while (d[`Lab_Title-${i}`]) {
    labsData.push({
      id: i,
      type: i === 1 ? "COMPUTER LAB" : i === 2 ? "ROBOTICS LAB" : "LAB",
      title: d[`Lab_Title-${i}`],
      description: d[`Lab_Desc-${i}`],
      image: d[`Lab-${i}_Image`] ? IMAGE_PATH + d[`Lab-${i}_Image`] : null,
      programs: Object.keys(d)
        .filter((key) => key.startsWith(`Lab-${i}_p-`))
        .map((key) => d[key]),
      gradient:
        i === 1
          ? "from-blue-600/70 via-blue-400/50 to-transparent"
          : i === 2
            ? "from-red-600/70 via-red-400/50 to-transparent"
            : "from-indigo-600/70 via-indigo-400/50 to-transparent",
      color: i === 1 ? "blue" : i === 2 ? "red" : "indigo",
    });
    i++;
  }

  return (d?.Lab_Title || d?.Lab_Description || labsData.length > 0) && (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-cyan-200 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] text-center font-novaReg text-gray-700 px-2 sm:px-0">
            {first}{" "}
            <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
              {middle}{" "}
            </span>
            {last}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 font-novaReg text-sm sm:text-base px-4 sm:px-0">
            {d?.Lab_Description}
          </p>
        </motion.div>

        {/* Cards Grid - Changed to lg:grid-cols-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0">
          {labsData.map((lab) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row border border-gray-100 hover:shadow-xl sm:hover:shadow-2xl hover:border-gray-200 transition-all duration-300"
            >
              {/* Image Side */}
              <div className="w-full sm:w-1/2 h-48 sm:h-auto relative overflow-hidden">
                {lab.image ? (
                  <img
                    alt={lab.title}
                    src={lab.image}
                    className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${lab.gradient}`}
                ></div>
                <span
                  className={`absolute top-3 left-3 sm:top-4 sm:left-4 bg-${lab.color}-100 text-${lab.color}-800 text-xs font-novaSemi px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm`}
                >
                  {lab.type}
                </span>
              </div>

              {/* Content Side */}
              <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col">
                <h3
                  className={`text-lg sm:text-xl font-novaBold text-gray-900 mb-2 sm:mb-3 group-hover:text-${lab.color}-600 transition-colors duration-300`}
                >
                  {lab.title}
                </h3>
                <p className="text-gray-600 font-novaReg text-xs sm:text-sm flex-1 leading-relaxed">
                  {lab.description}
                </p>

                <div className="mt-3 sm:mt-4">
                  <h4 className="text-xs font-novaSemi text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                    {d[`Program_Title-${lab.id}`] || "Associated Programs"}
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {lab.programs.map((program, i) => (
                      <span
                        key={i}
                        className={`bg-${lab.color}-50 text-${lab.color}-800 text-xs font-novaSemi px-2 sm:px-3 py-0.5 rounded-full border border-${lab.color}-100`}
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className={`mt-4 sm:mt-6 bg-${lab.color}-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg font-novaSemi hover:bg-${lab.color}-700 shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base`}
                >
                  View More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}