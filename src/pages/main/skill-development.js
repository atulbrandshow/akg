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
                    title={"Skill Development"} 
                    bg="/image/lab/User-Manual-AKGEC 5.webp" 
                    gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} 
                />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
                    <div className="col-span-12 lg:col-span-9 bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-3xl font-novaBold text-indigo-950 mb-6">Skill Development Initiatives</h2>
                        <p className="text-gray-700 font-novaReg leading-relaxed mb-6">
                            Skill Development at AKGU Skills Foundation focus on enhancing the technical and vocational skills of the youth to make them industry-ready. We provide training in cutting-edge technologies that are transforming the global industrial landscape.
                        </p>
                        
                        <div className="space-y-6 mt-8">
                            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                                <h4 className="font-bold text-indigo-900 mb-2">Robotics & Industrial Automation</h4>
                                <p className="text-sm text-gray-600">Specialized training on industrial robots, PLC programming, and automated production systems.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                                <h4 className="font-bold text-indigo-900 mb-2">3D Printing & Additive Manufacturing</h4>
                                <p className="text-sm text-gray-600">Hands-on experience with 3D design and printing technologies for rapid prototyping and manufacturing.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                                <h4 className="font-bold text-indigo-900 mb-2">Digital Manufacturing</h4>
                                <p className="text-sm text-gray-600">Integrated training on digital tools for design, simulation, and manufacturing processes.</p>
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
