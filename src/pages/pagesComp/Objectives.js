export default function Objectives() {
  const objectives = [
    {
      title: "Promote Excellence in Teaching, Learning, and Research",
      description: "through rigorous academic programs, interdisciplinary studies, and innovation driven scholarship."
    },
    {
      title: "Develop Skilled, Employable, and Ethically Grounded Graduates",
      description: "equipped with professional competence, digital capabilities, leadership qualities, and human values."
    },
    {
      title: "Foster Innovation, Entrepreneurship, and Industry Collaboration",
      description: "by encouraging research translation, start-ups, incubation, and strong industry–academia partnerships."
    },
    {
      title: "Provide Multidisciplinary and Flexible Education",
      description: "in alignment with the National Education Policy (NEP) 2020, supporting choice-based, outcome-oriented, and lifelong learning."
    },
    {
      title: "Advance Research, Knowledge Creation, and Societal Impact",
      description: "to address national priorities, industrial needs, and global challenges."
    },
    {
      title: "Promote Constitutional Values, National Integration, and Global Citizenship",
      description: "by nurturing patriotism, inclusivity, secularism, and respect for diversity."
    },
    {
      title: "Preserve and Promote Cultural, Ethical, and Indigenous knowledge Systems",
      description: "while integrating global best practices and emerging disciplines."
    }
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Objectives
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
          The objectives of AKG University shall be to
        </p>
      </div>

      <div className="grid gap-6 mb-12">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-brand-yellow group-hover:text-brand-blue transition-all duration-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-800 mb-2 transition-all duration-300">
                    {objective.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-gray-700 leading-relaxed transition-all duration-300">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
        AKG University stands as a testament to excellence in higher education,
        delivering industry-aligned programs and fostering innovation through
        rigorous academics and world-class infrastructure. Our unwavering
        commitment to quality is validated by premier accreditations and
        statutory approvals, assuring students, parents, and recruiters of
        nationally recognized standards and future-ready learning. With these
        distinguished credentials, AKG University empowers graduates to make a
        meaningful global impact.
      </p>
    </section>
  );
}
