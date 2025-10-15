export default function VisionAndMission() {
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1 bg-white max-sm:col-span-2 max-sm:bg-gradient-to-tr from-purple-400 to-cyan-100 p-5">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl max-sm:text-3xl w-full text-start font-novaReg mb-4 max-w-[350px]">
                            OUR VISION
                        </h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] text-justify">
                            To empower innovative leaders through transformative education, cutting-edge research, and
                            ethical practices for a sustainable global future.
                        </p>
                    </div>
                </div>
                <div
                    className="col-span-1 max-sm:hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/target.png')" }}
                >
                    <div className="bg-gradient-to-r from-white to-blue-800/50 w-full h-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1 bg-white max-sm:col-span-2 max-sm:bg-gradient-to-tr from-cyan-400 to-purple-100 p-5">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl max-sm:text-3xl w-full text-start font-novaReg max-w-[350px] mb-4">
                            OUR MISSION
                        </h2>

                        <ul className="font-novaReg text-gray-600 max-w-[350px] list-disc space-y-3 text-justify">
                            <li>
                                Deliver exceptional education across engineering, management, law, health sciences,
                                liberal arts, and emerging areas.
                            </li>
                            <li>
                                Foster industry engagement, research, entrepreneurship, and practical skills (skilling,
                                internships, placements).
                            </li>
                            <li>
                                Prioritize student-centric, inclusive approaches for lifelong learning and societal
                                impact.
                            </li>
                            <li>Champion global standards, diversity, and sustainable development.</li>
                        </ul>
                    </div>
                </div>
                <div
                    className="col-span-1 max-sm:hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/mission-1.jpg')" }}
                >
                    <div className="bg-gradient-to-r from-white to-blue-800/20 w-full h-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1 bg-white max-sm:col-span-2 max-sm:bg-gradient-to-tr from-amber-400 to-cyan-100 p-5">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl max-sm:text-3xl w-full text-start font-novaReg mb-4 max-w-[350px]">
                            OUR QUALITY POLICY
                        </h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] text-justify">
                            To provide and continually improve academic environment and systems which give total
                            satisfaction and enable students to develop their full potential and mature into competent
                            professionals and responsible members of society.
                        </p>
                    </div>
                </div>
                <div
                    className="col-span-1 max-sm:hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/Quality.jpg')" }}
                >
                    <div className="bg-gradient-to-r from-white to-blue-800/20 w-full h-full" />
                </div>
            </div>
        </div>
    );
}
