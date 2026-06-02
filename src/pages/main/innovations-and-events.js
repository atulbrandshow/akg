import Card from "@/Components/Card";
import EventTabs from "@/Components/EventTabs";

const eventsData = [
    {
        img: "/image/campus-life/innovation-and-events.webp",
        title: "International Conference on AI & Emerging Technologies",
        desc: "Experts from Industry and Academia, Col. L. S. Chauhan (Indian Army), Prof Arun Kr Singh, REC Kannauj and Prof. (Dr.) Mohd Rihan (Director General, NISE) shared cutting-edge insights on AI, sustainability, automation, and digital transformation on the occasion of Second International Conference on Advanced Computing and Emerging Technologies (ACET-2025)",
    },
    {
        img: "/image/campus-life/innovation-and-events-1.webp",
        title: "Semiconductor Innovation & Industry–Academia Collaboration",
        desc: "Mr. Preet Yadav (India Head - Innovation @ NXP Semiconductors), Dr. Ambika Prasad (IIT Jammu), and Prof. Neeta Pandey (Delhi Technological University) delivered technical talks on the evolving semiconductor landscape, research challenges, and industry–academia collaboration, guiding young engineers to bridge the gap between theory and practice.",
    },
    {
        img: "/image/campus-life/innovation-and-events-2.webp",
        title: "AI, Automation & Quantum Security in Enterprise Systems",
        desc: "Mr. Nalini Ranjan, Assistant Vice President at Bank of America, Gurugram, shared valuable industry insights on the theme of “AI, Automation & Quantum Security: Engineering the Next Decade of Enterprise Systems”.",
    },
    {
        img: "/image/campus-life/innovation-and-events-3.webp",
        title: "MoU with the National Centre for Additive Manufacturing (NCAM), Hyderabad:",
        desc: "Ajay Kumar Garg Engineering College (AKGEC), signed an MoU with the National Centre for Additive Manufacturing (NCAM), Hyderabad, on 13 March 2026 during NAMS-2026 in New Delhi to promote additive manufacturing and innovation. Signed by Dr. Amita Dev and Mr. Jaspreet Sidhu in the presence of senior government officials, the collaboration builds on AKGEC’s Centre of Excellence in Additive Manufacturing.",
    },
    {
        img: "/image/campus-life/innovation-and-events-4.webp",
        title: "MoU with Centre of Excellence – Neuro Engineering Facility (COE-NEF), All India Institute of Medical Sciences (AIIMS):",
        desc: "AKG Foundation for Innovation & Entrepreneurship (AFIE), Ajay Kumar Garg Engineering College, signed an MoU with the Centre of Excellence – Neuro Engineering Facility (COE-NEF), All India Institute of Medical Sciences (AIIMS) on 9 January 2026.",
    },
    {
        img: "/image/campus-life/innovation-and-events-5.webp",
        title: "MoU with Just Auto India Pvt. Ltd., Ahmedabad, Gujarat, India:",
        desc: "AKGEC Skills Foundation has signed a strategic MoU with Just Auto India Pvt. Ltd. on 29th October 2024 at the AKGEC Campus to jointly launch industry-focused training programs in Automobile & Electric Vehicle (EV) technologies.",
    },
    {
        img: "/image/campus-life/innovation-and-events-6.webp",
        title: "Visit to India Meteorological Department (IMD):",
        desc: "Visit held on 25th March 2026, aimed to provide students with practical exposure to the real-world applications of meteorological and computational technologies.",
    },
    {
        img: "/image/campus-life/innovation-and-events-7.webp",
        title: "Visit to AI Impact Summit 2026, Bharat Mandapam, New Delhi:",
        desc: "The CSE, IT, EC and MCA Departments participated in the AI Impact Summit 2026 held at Bharat Mandapam, New Delhi on 16–18 February 2026, where students engaged in a series of impactful sessions across various meeting rooms.",
    },
    {
        img: "/image/campus-life/innovation-and-events-8.webp",
        title: "Visit to AI Impact Summit 2026, Bharat Mandapam, New Delhi:",
        desc: "The CSE, IT, EC and MCA Departments participated in the AI Impact Summit 2026 held at Bharat Mandapam, New Delhi on 16–18 February 2026, where students engaged in a series of impactful sessions across various meeting rooms.",
    },
    {
        img: "/image/campus-life/innovation-and-events-9.webp",
        title: "Visit to FANUC Open House 2026 Technology Development Center, IMT Manesar, Gurugram:",
        desc: "AKGEC Skills Foundation organized an industrial visit to the FANUC Open House 2026 at the Technology Development Center, IMT Manesar, Gurugram, on 21 February 2026, with around 50 engineering students, including SPEED students and Student Ambassadors.",
    },
    {
        img: "/image/campus-life/innovation-and-events-10.webp",
        title: "Visit to National Institute of Plant and Genome Research (NIPGR)",
        desc: "B.Tech Computer Science students visited the National Institute of Plant and Genome Research (NIPGR), New Delhi with the purpose to gain insights into the application of computational methods in genome research.",
    },
    {
        img: [
            "/image/campus-life/innovation-and-events-11.webp",
            "/image/campus-life/innovation-and-events-12.webp",
            "/image/campus-life/innovation-and-events-13.webp",
        ],
        title: "Visit to Bharat Electricity Summit 2026",
        desc: "Students from the Department of Electrical and Electronics Engineering (EN) at Ajay Kumar Garg Engineering College (AKGEC), visited the Bharat Electricity Summit 2026 on 19 March 2026 at Yashobhoomi, New Delhi, a major national event focused on advancements in the power and energy sector; a group of 46 students gained valuable exposure to innovations in electrical infrastructure, smart grids, renewable energy, energy management, and emerging technologies like smart metering and green energy, enhancing their understanding of real-world applications",
    },
    {
        img: [
            "/image/campus-life/innovation-and-events-14.webp",
            "/image/campus-life/innovation-and-events-15.webp",
        ],
        title: "Visit to National Institute of Plant and Genome Research (NIPGR)",
        desc: "B.Tech Computer Science students visited the National Institute of Plant and Genome Research (NIPGR), New Delhi with the purpose to gain insights into the application of computational methods in genome research. The visit aimed to bridge the gap between computer science and biology by exploring real-world applications of computational techniques in genomics.",
    },
    {
        img: [
            "/image/campus-life/innovation-and-events-16.webp",
            "/image/campus-life/innovation-and-events-17.webp",
            "/image/campus-life/innovation-and-events-18.webp",
        ],
        title: "Visit to AICTE IDEA Lab Tech Fest at AICTE Headquarters",
        desc: "B.Tech Computer Science and Engineering students visited the AICTE IDEA Lab Tech Fest, at AICTE Headquarters, New Delhi to get an exposure into the cutting-edge advancements in robotics, AI, IoT, and sustainable technology and to engage with academia, industry experts, and innovators for knowledge sharing and collaboration.",
    },
    {
        img: [
            "/image/campus-life/innovation-and-events-19.webp",
            "/image/campus-life/innovation-and-events-20.webp",
            "/image/campus-life/innovation-and-events-21.webp",
        ],
        title: "Visit to Atal Incubation Center",
        desc: "B.Tech CSE (AIML) and IT Students have visited the Atal Incubation Center (AIC) at IIT Delhi-Sonipat Campus with an aim to promote science and technology as catalysts for rapidly propelling India towards Amrit Kaal.",
    },
    {
        img: [
            "/image/campus-life/innovation-and-events-22.webp",
            "/image/campus-life/innovation-and-events-23.webp",
            "/image/campus-life/innovation-and-events-24.webp",
        ],
        title: "Visit to Haier Appliances India Pvt Ltd",
        desc: "B.Tech Electronics & Communication Engineering Students visited the Haier Appliances Pvt Ltd with an aim to provide students with firsthand insights into advanced manufacturing processes, cutting-edge technologies, and quality control measures in the home appliances industry.",
    },
    {
        img: [
            "/image/campus-life/innovation-and-events-25.webp",
            "/image/campus-life/innovation-and-events-26.webp",
            "/image/campus-life/innovation-and-events-27.webp",
        ],
        title: "Visit to IISF NCR Biotech Science Cluster, DBT-THSTI",
        desc: "Department of Computer science and Engineering has organized a field visit to IISF NCR Biotech Science Cluster, DBT-THSTI. During the visit, students attended many exhibitions, workshops and interactive sessions with Scientists and Experts. Its aim was to involve innovative and imaginative intellects in India and worldwide in the celebration of science & technology.",
    },
    {
        img: [
            "/image/campus-life/innovation-and-events-28.webp",
            "/image/campus-life/innovation-and-events-29.webp",
        ],
        title: "Visit to Geeks for Geeks",
        desc: "The Department of Computer science and Engineering at AKGEC has organized an industrial visit to Geeks for Geeks, Sector -136, Noida, Uttar Pradesh with an aim to enhance understanding of the software development process, coding practices, and the latest industry trends. Students gained valuable insights into functioning and operations of the leading tech company.",
    },
    {
        img: "/image/campus-life/innovation-and-events-30.webp",
        title: "Visit to Solid State Physics Laboratory (SSPL), DRDO",
        desc: "Students visited the Solid-State Physics Laboratory (SSPL), DRDO with an aim to get exposure in advanced research and development in solid-state physics and electronics. Students get insight into the fabrication and characterization of advanced materials like Gallium Arsenide (GaAs) and Gallium Nitride (GaN), critical for high-frequency and high-power applications. Students also get demonstration of the Micro-Electro-Mechanical Systems (MEMS) for defence applications such as sensors, actuators, and RF components.",
    },
    {
        img: "/image/campus-life/innovation-and-events-31.webp",
        title: "AKGEC Team Wins First Prize at Robofest Gujarat 5.0",
        desc: "The Robofest 5.0 winning team with First Prize (prize money INR 1,000,000/-)",
    },
    {
        img: "/image/campus-life/innovation-and-events-32.webp",
        title: "National Laurels in Robotics: Triumph at ROBOFEST Gujarat 5.0",
        desc: "National Laurels in Robotics: Triumph at ROBOFEST Gujarat 5.0 Demonstrating AKG commitment to technical excellence and experiential learning, Team Aerial Robotics—a multi-disciplinary group from the ECE and IT departments—secured 1st position and cash prize of 10 Lakh rupees at the ROBOFEST Gujarat 5.0 Finale. Organized by GUJCOST, Gandhinagar",
    },
    {
        img: "/image/campus-life/innovation-and-events-33.webp",
        title: "National Dominance in Drone Innovation: Team ASTRA Triumphs at NIDAR 2026",
        desc: "In a remarkable display of technical prowess, Team ASTRA, nurtured by the Drone Academy under the AKGEC Skills Foundation, secured the Third Position at NIDAR 2026—one of India’s most prestigious national-level drone innovation challenges. Hosted by MeitY in collaboration with the Drone Federation of India at Gautam Buddha University, the competition saw Team ASTRA emerge among the top contenders in a massive field of 300 teams nationwide",
    },
    {
        img: "/image/campus-life/innovation-and-events-34.webp",
        title: "Team Astra 2.0 Excels at Smart India Hackathon 2025",
        desc: "Team Astra 2.0: A Legacy of Innovation - National Victories and Excellence at SIH 2025",
    },
    {
        img: "/image/campus-life/innovation-and-events-35.webp",
        title: "Team Krishinetra Achieves National Recognition at SIH 2025",
        desc: "Team Krishinetra: A Legacy of Innovation - National Victories and Excellence at SIH 2025",
    },
    {
        img: "/image/campus-life/innovation-and-events-36.webp",
        title: "Team YUKTEK Secures National Victory at SIH 2025",
        desc: "Team YUKTEK: A Legacy of Innovation -  National Victories and Excellence at SIH 2025",
    },
    {
        img: "/image/campus-life/innovation-and-events-37.webp",
        title: "Team Storm Surge: A Legacy of Innovation -  National Victories and Excellence at SIH 2025",
        desc: "Ajay Kumar Garg Engineering College, Ghaziabad (Delhi-NCR Region), continues to cement its position as a powerhouse of innovation, celebrating a series of historic achievements at the Smart India Hackathon (SIH) 2025. Demonstrating exceptional prowess in both software and hardware domains, the college proudly saw multiple teams represent the institute at prestigious national nodal centers, securing top honors and solving critical real-world challenges.",
    },
    {
        img: "/image/campus-life/innovation-and-events-38.webp",
        title: "National Recognition in Automation: Team Enginerds Shines at JASC 2025",
        desc: "Underscoring its leadership in industry-oriented engineering, Team Enginerds from Ajay Kumar Garg Engineering College achieved remarkable success at the Janatics Automation Skill Challenge (JASC) 2025 National Finals. Competing at the national stage held on November 12–13, 2025, at JSPM Rajarshi Shahu College of Engineering, Pune, the team secured two prestigious Special Category Awards: Best Prototype and Best CAD Design.",
    },
    {
        img: "/image/campus-life/innovation-and-events-39.webp",
        title: "National Champions: AKGEC Wins Emerson–NI System Design Contest 2025",
        desc: "Ajay Kumar Garg Engineering College achieved a monumental milestone in technical innovation by securing the First Prize at the prestigious Emerson–NI System Design Contest 2025, held at the IIT Madras Research Park. Outshining a competitive field of 400 students from India’s premier technical institutes, Team Udbhav emerged victorious with their groundbreaking project, “Bhoomitra – Smart In-House Waste Segregation & Vermicompost Monitor.”.",
    },
    // Old Data
    {
        img: "/image/campus-life/tech-event-1.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-2.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-3.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-4.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-5.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-6.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-7.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-8.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
    {
        img: "/image/campus-life/tech-event-9.webp",
        title: "Master of Computer Applications (MCA)",
        desc: "A postgraduate program focused on computer applications and software development.",
    },
];

const InnovationsAndEvents = () => {
    return (
        <>
            <section className="relative bg-BG30 bg-center bg-no-repeat bg-cover h-[90vh]">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="absolute inset-0 flex">
                        <div className="block w-1/2 h-full max-sm:hidden"></div>
                        <div className="w-1/2 bg-orange-300 opacity-90 h-full flex items-center justify-center flex-col max-sm:w-full">
                            <div className="max-w-xl px-4 text-center">
                                <h2 className="text-6xl font-novaReg uppercase mb-3 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl mr-0 md:mr-4 lg:mr-0">
                                    Unleash <span className="font-semibold text-white">Innovation at</span> Tech Invent
                                    2026
                                </h2>
                                <h6 className="font-novaReg text-2xl border-y py-3 border-gray-600 text-center max-md:text-xl max-sm:text-lg">
                                    Where Ideas Meet, and Futures are Created
                                </h6>
                                <p className="text-base mt-3 font-novaSemi text-center max-sm:text-sm">
                                    Experience groundbreaking inventions and cutting-edge technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-3 py-10 max-md:py-8 max-sm:py-6">
                    {/* <EventTabs /> */}
                    <div className="max-w-[1400px] max-2xl:max-w-6xl max-xl:max-w-5xl max-lg:max-w-3xl mx-auto grid grid-cols-12 gap-8 py-10 max-md:py-8 max-sm:py-6 max-sm:gap-0">
                        {eventsData?.map((event, index) => (
                            <Card key={index} img={event.img} title={event.title} desc={event.desc} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default InnovationsAndEvents;
