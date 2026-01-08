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

const moments = [
    {
        title: "Distinguished Visit by Senior Experten Service (SES), Germany",
        description: "Ajay Kumar Garg Engineering College has been privileged to host eminent experts from the Senior Experten Service (SES), Germany, including Dr. Wolfgang Sommer (Siemens), Dr. Detlev Schmidt (Mercedes Benz), Dr. Hans Peter Barbey, and Prof. Helmut Behler. The most recent visit in November 2025 by Prof. Wolf Burger, Professor at DHBW Germany, President of STANDARD MOTOREN GmbH, and former Head of Engine Development at Porsche Engineering, further enriched this tradition. These interactions have inspired students and faculty, strengthened global exposure, and advanced AKGEC’s commitment to academic excellence and international collaboration."
    },
    {
        title: "Recognition by Indian Railways Leadership",
        description: "AKGEC had the honour of hosting Mr. Rajesh Agarwal, Member of Rolling Stock (MoRS), Indian Railways, at its facility. His exceptional appreciation for our capabilities strengthened institutional credibility and enhanced our outreach within Indian Railways. This recognition reinforces AKGEC’s growing impact and trust in national-level technology and innovation initiatives."
    },
    {
        title: "Strengthening Industry Linkages: Hindalco Leaders at AKGEC",
        description: "AKGEC hosted Mr. Nilesh Koul, Sr. President & CEO (Aluminium Downstream), and Mr. Lovkesh, Jt. President & Head (Personal Mobility EV Aluminium Components), from Hindalco Industries Ltd. on 18 December 2023. The visit highlighted our Centres of Excellence and strengthened high-value industry engagement. This interaction reinforces AKGEC’s growing industry relevance and collaborative ecosystem."
    },
    {
        title: "A Milestone Institutional Visit by Mr. Naveen Jindal",
        description: "AKGEC had the honour of hosting Mr. Naveen Jindal, Founding Chancellor of O.P. Jindal Global University and Chairman of Jindal Steel & Power. His visit marked a milestone moment, reflecting AKGEC’s rising national stature and recognition across industry and academia. This engagement further strengthens opportunities for collaboration and institutional visibility."
    },
    {
        title: "AICTE Chairman Prof. T. G. Sitharam Graces IDEA Lab FDP at AKGEC",
        description: "AKGEC hosted the National Faculty Development Program under the AICTE IDEA Lab, advancing innovation and experiential learning. A key highlight of the event was the presence of Prof. T. G. Sitharam, Chairman, AICTE, whose visit added exceptional value and inspiration to the program."
    },
    {
        title: "International Automotive & Tier-1 Industry Conclave with KUKA at AKGEC",
        description: "AKGEC, in collaboration with KUKA, the global leader in intelligent automation, organized an exclusive international workshop from 4th to 8th July 2023 at the AKGEC–KUKA Industrial Robotics Training Center, Ghaziabad. The event brought together major automotive and Tier-1 industry stakeholders for high-impact dialogue, technology exchange, and strategic learning. This milestone strengthened AKGEC’s position as a hub for advanced automation training and global industry engagement."
    },
    {
        title: "Industrial Automation Upskilling Programme for Army, Navy, and Air Force Personnel",
        description: "AKGEC Skills Foundation, in partnership with IASC SSC, launched a comprehensive 570-hour Industrial Automation Program for 28 JCOs/ORs of the Defence Services, beginning on 28 August 2023. The curriculum covered electrical safety, automation design, control panel installation, and hands-on industrial systems. The program was formally inaugurated on 27 September 2023 in the presence of Maj. Gen. Sharad Kapur and Mr. Brijesh Poddar, marking a prestigious milestone in defence skilling and capacity building."
    },
    {
        title: "AICTE Leadership Visit for Design Thinking & Innovation Workshop",
        description: "Prof. Shyama Rath, Member Secretary, AICTE, inaugurated AKGEC’s One-Day Design Thinking & Innovation Workshop, underscoring the importance of 21st-century skills. Her address highlighted the need to embed innovation-led learning into school education. The session enriched participants with fresh perspectives and strengthened AKGEC’s mission to promote creative and future-ready learning."
    },
    {
        title: "CBSE Selects AKGEC for National Exposure Visit for School Principals",
        description: "AKGEC was chosen by CBSE to host a two-day national Exposure Visit for School Principals, reflecting our strong technical capabilities and leadership in skill-based education. The program showcased our laboratories, Centres of Excellence, and industry-aligned training ecosystem. This recognition reinforces AKGEC’s role in advancing school-level skill education and inspiring future academic collaborations."
    },
    {
        title: "Nationwide Capacity Building Initiative for Indian Railways Leadership",
        description: "Since 2021, AKGEC has been driving large-scale technical upskilling for Indian Railways, successfully training 250+ officers and staff, including senior IRS officers, plant managers, and plant engineers. Participants have represented leading establishments such as MCF Rae Bareilly, RCF Kapurthala, C&W Workshop Liluah, and several other key units across the country. This initiative reflects our commitment to strengthening operational excellence, modernisation, and future-ready competencies within India’s railway ecosystem."
    },
    {
        title: "National Welding Excellence Platform Hosted at Advance Welding CoE",
        description: "AKGEC proudly hosted the National Skill Competition – Best of the Best Welders 2024 at AWTRC on 12–13 September 2024, bringing together exceptional welding talent from across the country. The event also featured the National Best Welder Competition for Women 2024, reinforcing our commitment to inclusion, gender equity, and professional excellence in welding. This national platform showcased cutting-edge skill development, celebrated industry leadership, and strengthened India’s advanced welding ecosystem."
    },
    {
        title: "AKGEC empowered ISB Chandigarh participants through an advanced workshop on Automation & Robotics",
        description: "AKGEC empowered participants from ISB Chandigarh through an advanced workshop on Automation and Robotics, offering immersive exposure to industry-grade technologies and hands-on learning. The sessions enabled participants to understand real-world automation applications, robotic programming, and smart manufacturing concepts. This engagement strengthened academic–industry collaboration while fostering innovation, problem-solving, and future-ready skills."
    },
    {
        title: "Strengthening Quality Benchmarks: AKGEC Secures Triple NABL Accreditation",
        description: "Ajay Kumar Garg Engineering College proudly hosts three NABL-accredited laboratories, underscoring its commitment to quality, precision, and excellence in technical education and research. The Material Testing, Non-Destructive Testing (NDT), and Calibration Laboratories now offer industry-grade, reliable testing and validation facilities. This milestone strengthens AKGEC’s standing as a premier institution supporting students, researchers, and industry through world-class infrastructure and services."
    }
]

const ProudMoments = () => {
    return (
        <div className="bg-gray-100 min-h-screen pb-10">
            <Header 
                title={"Proud Moments @ ASF"} 
                bg="/image/lab/User-Manual-AKGEC 5.webp" 
                gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} 
            />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 lg:py-20 gap-10 px-4">
                <div className="col-span-12 lg:col-span-9">
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
                        <h2 className="text-3xl font-novaBold text-indigo-950 mb-8 border-b pb-4">Proud Moments @ ASF</h2>
                        <div className="space-y-12">
                            {moments.map((moment, index) => (
                                <div key={index} className="border-l-4 border-secondary pl-6 py-2">
                                    <h3 className="text-xl font-novaBold text-indigo-900 mb-3">{index + 1}. {moment.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-justify font-novaReg">
                                        {moment.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <SideBar title={"Skills Foundation"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
    )
}

export default ProudMoments;
