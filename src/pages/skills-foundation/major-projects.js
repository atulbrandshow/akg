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

const projects = [
    {
        title: "Technology Transfer for RAKSHITA Bike Ambulance for DRDO",
        description: "AKGEC delivered end-to-end engineering support for DRDO’s RAKSHITA bike ambulance, featuring a modular Casualty Evacuation Seat (CES) for rapid deployment. Developed by the Institute of Nuclear Medicine and Allied Sciences (INMAS), a premier DRDO laboratory in Delhi. This innovation enables swift first aid and evacuation in difficult terrains. The solution benefits military, paramilitary, and potential civilian emergency response where conventional ambulances cannot operate."
    },
    {
        title: "3D Scanning and Scaled Printing of Combat Vehicle for Indian Air Force",
        description: "A detailed 3D scanning and 1:10 scale fabrication of the OSA-AK-M combat vehicle was executed by AKGEC for the 7 Base Repair Depot, Indian Air Force. The project enabled accurate digital reconstruction and physical model manufacturing for technical study and display purposes. This initiative highlights advanced defence prototyping capability and collaborative innovation between academia and the armed forces."
    },
    {
        title: "Cycle Time Optimization through Robotic Integration for Micromatic Grinding",
        description: "AKGEC successfully integrated robotic automation with CNC systems at Micromatic Grinding, significantly enhancing operational efficiency. This innovation reduced the process time from 163 seconds to just 52 seconds, showcasing a remarkable improvement in productivity. The project exemplifies industry–academia collaboration for smart manufacturing and automation excellence."
    },
    {
        title: "Vision-Based Inspection System for Ghaziabad Precision Products",
        description: "AKGEC designed and deployed a customized machine vision inspection system for Rocker Arm assemblies at Ghaziabad Precision Products (GPP). Built using LabVIEW, the solution enhances quality assurance through precise defect detection and automated inspection. This initiative demonstrates advanced industrial automation capability and supports improved manufacturing reliability."
    },
    {
        title: "3D Printed Prototype of Humsafar Coach for Indian Railways",
        description: "A precision-engineered 3D printed model of the newly designed Humsafar Coach, developed by Modern Coach Factory, Raebareli. This prototype visually communicates key design features and structural enhancements of the coach. The model was proudly showcased and presented to the Honorable Railway Minister of India, symbolizing innovation and advancement in passenger coach development."
    },
    {
        title: "Rapid Prototype of Pressure Regulating System for Air Liquide India",
        description: "A detailed working model of the Pressure Regulating System, Bulk Storage Installation, and Air Liquide Healthcare setup was developed to demonstrate Cryogenic Liquid Oxygen installations in industries and hospitals. Executed for Air Liquide India, the project visually represented critical safety and process features. Remarkably, the complete prototype was delivered in a record time of just 10 days, reflecting technical agility and execution excellence."
    },
    {
        title: "Innovative Orthopedic Screw Developed via Metal 3D Printing",
        description: "AKGEC engineered an advanced orthopedic screw featuring a variable thread pitch and a lightweight internal lattice structure. Manufactured using the Metallic SLM 280 3D printer, the design enhances strength while reducing material usage. This breakthrough showcases the potential of metal additive manufacturing in next-generation biomedical implants."
    },
    {
        title: "Lightweight Ergonomic Surgical Handle Designed for AIIMS New Delhi",
        description: "AKGEC developed a customized surgical handle featuring improved ergonomics and reduced weight to enhance surgeon comfort and precision. Fabricated using Selective Laser Melting (SLM) metal 3D printing technology, the product reflects advanced biomedical engineering capability. The solution was designed and produced for AIIMS New Delhi, supporting healthcare innovation through additive manufacturing."
    },
    {
        title: "Consistent Tender Participation and Delivery for Indian Railways",
        description: "With a strong presence on the Indian Railways E-Procurement System (IREPS), we have participated in over 300 tenders and successfully delivered more than 40 job work orders. Our projects span multiple Railway divisions, including North Western, Eastern, and Southern Railways. This achievement reflects our reliability, capability, and sustained execution excellence in railway sector engagements."
    }
]

const MajorProjects = () => {
    return (
        <div className="bg-gray-100 min-h-screen pb-10">
            <Header 
                title={"Major Projects @ ASF"} 
                bg="/image/lab/User-Manual-AKGEC 5.webp" 
                gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} 
            />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
                <div className="col-span-12">
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
                        <h2 className="text-3xl font-novaBold text-indigo-950 mb-8 border-b pb-4">Major Projects @ ASF</h2>
                        <div className="grid grid-cols-1 gap-12">
                            {projects.map((project, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 last:border-0">
                                    <div className="w-full md:w-1/3 aspect-video bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                                        {/* Placeholder for images */}
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm italic">
                                            Project Image {index + 1}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <h3 className="text-xl font-novaBold text-indigo-900 mb-4">{index + 1}. {project.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify font-novaReg">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-12 lg:col-span-3 sticky top-32 self-start h-max">
                    <SideBar title={"Skills Foundation"} LinkList={SideBarLink} />
                </div> */}
            </section>
        </div>
    )
}

export default MajorProjects;
