import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";

const SideBarLink = [
    { name: "Overview", link: "/skills-foundation" },
    { name: "Industrial Training", link: "/skills-foundation/industrial-training" },
    { name: "Skill Development", link: "/skills-foundation/skill-development" },
    { name: "Consultancy", link: "/skills-foundation/consultancy" },
    { name: "Major Projects", link: "/skills-foundation/major-projects" },
    { name: "Proud Moments", link: "/skills-foundation/proud-moments" },
    { name: "Centres of Excellence", link: "/skills-foundation/centres-of-excellence" },
]

const coes = [
    "KUKA Industrial Robotics Training Centre",
    "FRONIUS Advance Welding Technology & Research Centre",
    "SIEMENS Advance Manufacturing Centre",
    "NI LabVIEW Academy",
    "BOSCH Rexroth Centre of Competence in Automation Technologies",
    "AIA Centre for Integrated Automation",
    "SIEMENS PLM Centre of Excellence",
    "MITSUBISHI Authorised Training Centre",
    "FAB LAB Centre of Digital Manufacturing",
    "BOSCH Joint Certification Centre",
    "ZEISS Calibration & Testing Centre",
    "SIEMENS Centre of Excellence in Automation",
    "JANATICS Industrial Pneumatic Knowledge Centre",
    "DGCA Certified Remote Pilot Training Drone Academy"
]

const CentresOfExcellence = () => {
    return (
        <div className="bg-gray-100 min-h-screen pb-10">
            <Header 
                title={"Centres of Excellence"} 
                bg="/image/lab/User-Manual-AKGEC 5.webp" 
                gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} 
            />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
                <div className="col-span-12 lg:col-span-9">
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
                        <h2 className="text-3xl font-novaBold text-indigo-950 mb-8 border-b pb-4">Centres of Excellence</h2>
                        <p className="text-gray-600 mb-8 font-novaReg">
                            Under the ASF umbrella, the following 14 Centres of Excellence (COEs) are operational, providing state-of-the-art training and research facilities in collaboration with eminent industry partners:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {coes.map((coe, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-100 hover:border-secondary transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center flex-shrink-0 font-novaBold text-sm group-hover:bg-secondary">
                                        {index + 1}
                                    </div>
                                    <span className="text-indigo-900 font-novaBold group-hover:text-secondary transition-colors">
                                        {coe}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3 sticky top-32 self-start h-max">
                    <SideBar title={"Skills Foundation"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
    )
}

export default CentresOfExcellence;
