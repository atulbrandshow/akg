export default function VisionMission() {
    const missionPoints = [
        {
            id: "M1",
            text: "To provide world-class infrastructure and innovative teaching-learning practices for nurturing future mathematicians and problem solvers.",
        },
        {
            id: "M2",
            text: "To create a dynamic academic environment that equips students with strong conceptual foundations, research aptitude, and interdisciplinary skills in Mathematics.",
        },
        {
            id: "M3",
            text: "To cultivate scientific temper, analytical thinking, and creativity through expert lectures, workshops, and interactive academic activities.",
        },
        {
            id: "M4",
            text: "To establish advanced research facilities that encourage high-quality, impactful research in Mathematics and allied fields.",
        },
        {
            id: "M5",
            text: "To encourage faculty and students to pursue innovative research, publish in reputed journals, and participate in national and international academic forums.",
        },
        {
            id: "M6",
            text: "To promote socially relevant and industry-oriented research, fostering innovation at the intersection of Mathematics and other disciplines.",
        },
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-[1400px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-end">
                {/* Left Column - Vision and Mission Text */}
                <div className="space-y-8">
                    {/* Vision Section */}
                    <div>
                        <h2 className="text-2xl font-novaSemi text-gray-600 mb-4">Vision</h2>
                        <p className="text-gray-700 leading-relaxed font-novaReg">
                            To be a distinguished department known worldwide for nurturing mathematical knowledge, driving innovation through research in mathematics and allied fields, and empowering society with impactful contributions.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div>
                        <h2 className="text-2xl font-novaSemi text-gray-600 mb-6">Mission</h2>
                        <div className="space-y-2">
                            {missionPoints.map((point) => (
                                <div key={point.id} className="flex items-start gap-3">
                                    {/* Red Thumbs Up Icon */}
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <span className="font-novaSemi text-gray-900">{point.id}</span>
                                        <span className="text-gray-700 font-novaReg ml-2">{point.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="lg:pl-8">
                    <div className="relative">
                        <img
                            src="/image/department/mission.jpg"
                            alt="Professional woman pointing at mathematical data visualizations and charts"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
