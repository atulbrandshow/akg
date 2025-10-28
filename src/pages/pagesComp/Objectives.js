export default function Objectives() {
    const OBPoints = [
        "Achieve top national and international accreditations (NAAC, NBA, NIRF, QS, etc.).",
        "Create multidisciplinary programs in medical, pharmacy, engineering, management, law, liberal arts, and vocational training.",
        "Establish robust placement, skilling, and industry-integration structures.",
        "Continually upgrade infrastructure for sports (e.g., skiing, adventure activities), labs, hostels, and student wellness.",
        "Foster research, patents, incubators, and international partnerships.",
    ];

    return (
        <section className="px-6 md:px-16 py-16 bg-gray-50">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {OBPoints.map((point, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md transition-all duration-500 hover:shadow-xl hover:text-white relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-indigo-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        <p className="relative z-10 text-gray-700 group-hover:text-white leading-relaxed font-medium">
                            {point}
                        </p>
                    </div>
                ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                AKG University stands as a testament to excellence in higher education, delivering industry-aligned
                programs and fostering innovation through rigorous academics and world-class infrastructure. Our
                unwavering commitment to quality is validated by premier accreditations and statutory approvals,
                assuring students, parents, and recruiters of nationally recognized standards and future-ready learning.
                With these distinguished credentials, AKG University empowers graduates to make a meaningful global
                impact.
            </p>
        </section>
    );
}
