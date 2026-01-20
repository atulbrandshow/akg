import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";

const SideBarLink = [
    { name: "Overview", link: "/skills-foundation" },
    { name: "Industrial Training", link: "/skills-foundation/industrial-training" },
    { name: "Skill Development", link: "/skills-foundation/skill-development" },
    { name: "Consultancy", link: "/skills-foundation/consultancy" },
]

export const Home = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen pb-10">
                <Header
                    title={"Industrial Training"}
                    bg="/image/lab/User-Manual-AKGEC 5.webp"
                    gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"}
                />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
                    <div className="col-span-12 lg:col-span-9 bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-3xl font-novaBold text-indigo-950 mb-6">Industrial Training Programs</h2>
                        <p className="text-gray-700 font-novaReg leading-relaxed mb-6">
                            AKGU Skills Foundation (ASF) provides comprehensive industrial training programs designed to provide hands-on experience in specialized technical domains. Our training modules are developed in collaboration with industry experts to ensure alignment with current market demands.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-10">
                            <div className="p-6 bg-indigo-50 rounded-xl border-l-4 border-secondary">
                                <h4 className="font-bold text-indigo-900 mb-2">Corporate Training</h4>
                                <p className="text-sm text-gray-600">Tailored training modules for industry professionals and corporate batches focusing on competency upgradation.</p>
                            </div>
                            <div className="p-6 bg-indigo-50 rounded-xl border-l-4 border-secondary">
                                <h4 className="font-bold text-indigo-900 mb-2">Student Internships</h4>
                                <p className="text-sm text-gray-600">Practical internship programs for engineering students to work on real-world industrial projects and tools.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <SideBar title={"Skills Foundation"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;
