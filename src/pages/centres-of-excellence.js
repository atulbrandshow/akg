'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Atom, ChefHat, Network } from 'lucide-react';

const stats = [
    {
        icon: Award,
        value: 40,
        label: "Top MNCs' Centers of Excellence",
    },
    {
        icon: Atom,
        value: 19,
        label: "Collaborative Research Projects",
    },
    {
        icon: ChefHat,
        value: 8,
        label: "Hospitality Student Training Facilities",
    },
    {
        icon: Network,
        value: "650+",
        label: "Corporate Mentors",
    },
];
const partnerCards = [
    {
        title: 'Corporate Advisory Board',
        description: 'Engage with industry leaders to shape our curriculum and stay ahead of market trends.',
        image: '/image/centers-of-excellence/corporate-member-1.jpg',
    },
    {
        title: 'Corporate Mentoring',
        description: 'Learn directly from experienced professionals through our mentorship program.',
        image: '/image/centers-of-excellence/corporate-member-2.jpg',
    },
    {
        title: 'Workshops',
        description: 'Participate in hands-on workshops led by industry experts to gain practical skills.',
        image: '/image/centers-of-excellence/corporate-member-3.jpg',
    },
];
const centers = [
    {
        "title": "CISCO NETWORKING ACADEMY LAB",
        "description": "CCNA trains students to design, build, and maintain complex computer networks. An e-learning model that delivers web-based educational content.",
        "logo": "/image/company-logos/GoogleIcon.webp"
    },
    {
        "title": "IBM Software Lab",
        "description": "The IBM Software Lab for Emerging Technologies develops AI and blockchain solutions, driving innovation and skills through industry.",
        "logo": "/image/company-logos/ibm.webp"
    },
    {
        "title": "HPE CENTER OF EXCELLENCE",
        "description": "HP has joined hands with Chandigarh University to set up a Center of Excellence to provide world-class resources and training to students.",
        "logo": "/image/company-logos/Adobe.webp"
    },
    {
        "title": "MICROSOFT INNOVATION CENTER",
        "description": "North India's first innovation center providing premier resources for students, entrepreneurs, and startups to foster new companies.",
        "logo": "/image/company-logos/MicrosoftIcon.webp"
    },
    {
        "title": "ACCENTURE INNOVATION CENTER",
        "description": "Collaboration with Accenture to foster innovation and provide students with hands-on experience in cutting-edge technologies.",
        "logo": "/image/company-logos/AccentureIcon.webp"
    },
    {
        "title": "AMAZON TECH HUB",
        "description": "Amazon's hub focuses on technology development and provides students with insights into e-commerce and cloud computing.",
        "logo": "/image/company-logos/AmozonIcon.webp"
    },
    {
        "title": "AI IN COLLABORATION WITH COFORGE",
        "description": "Innovation center focused on developing agricultural solutions for national and international implementation, autonomous vehicles.",
        "logo": "/image/company-logos/coforge.webp"
    },
    {
        "title": "CAPGEMINI INSIGHTS & DATA",
        "description": "Innovation center providing collaborative research and training facilities for students, fostering hands-on learning and practical experience in various fields.",
        "logo": "/image/company-logos/CapgeminiIcon.webp"
    },
    {
        "title": "WIPRO WORKFORCE INNOVATION CENTER",
        "description": "Wipro collaborates with educational institutions to enhance workforce skills and knowledge.",
        "logo": "/image/company-logos/WIPRO.webp"
    },
    {
        "title": "INFOSYS CENTER OF LEARNING",
        "description": "Infosys provides an innovative learning environment to help students gain practical skills in software development.",
        "logo": "/image/company-logos/infosys.webp"
    },
    {
        "title": "AIR FORCE TECH CENTER",
        "description": "A collaborative space for research and development in defense technologies.",
        "logo": "/image/company-logos/AirForce.webp"
    },
    {
        "title": "TCS INNOVATION LAB",
        "description": "Tata Consultancy Services offers advanced technology solutions and student engagement.",
        "logo": "/image/company-logos/tcst.png"
    },
    {
        "title": "BYJUS LEARNING PLATFORM",
        "description": "Byju's offers interactive and engaging learning resources for students across various subjects.",
        "logo": "/image/company-logos/Byjus.webp"
    },
    {
        "title": "GROFERS E-COMMERCE CENTER",
        "description": "Grofers focuses on providing students insights into the e-commerce sector and operations.",
        "logo": "/image/company-logos/Grofers.webp"
    },
    {
        "title": "KPMG CONSULTING GROUP",
        "description": "KPMG provides consulting services and professional training to enhance students' career readiness.",
        "logo": "/image/company-logos/KPMG.webp"
    },
    {
        "title": "VIVO MOBILE INNOVATION",
        "description": "Vivo offers technology insights and training related to mobile development and innovation.",
        "logo": "/image/company-logos/vivo.webp"
    },
    {
        "title": "HSBC FINANCIAL SERVICES",
        "description": "HSBC collaborates with students to provide insights into the financial services industry.",
        "logo": "/image/company-logos/HSBC.webp"
    },
    {
        "title": "DXC TECHNOLOGY LAB",
        "description": "DXC provides solutions and training in IT services and digital transformation.",
        "logo": "/image/company-logos/DXC.webp"
    },
    {
        "title": "GLOBLOGIC INNOVATION HUB",
        "description": "GlobalLogic focuses on product engineering and provides mentorship to tech students.",
        "logo": "/image/company-logos/GlobalLogic.webp"
    },
    {
        "title": "BIRLASOFT TECHNOLOGY CENTER",
        "description": "Birlasoft supports students with technology solutions and industry insights.",
        "logo": "/image/company-logos/Birlasoft.webp"
    },
    {
        "title": "OLA ELECTRIC VEHICLES",
        "description": "Ola Electric focuses on developing sustainable transportation solutions and providing students with industry insights.",
        "logo": "/image/company-logos/OLAElectric.webp"
    },
    {
        "title": "OPTUM HEALTH TECHNOLOGIES",
        "description": "Optum provides technology solutions in the healthcare sector, offering students insights into health tech.",
        "logo": "/image/company-logos/Optum.webp"
    },
    {
        "title": "PWC PROFESSIONAL SERVICES",
        "description": "PwC collaborates with students to offer consulting insights and enhance professional skills.",
        "logo": "/image/company-logos/PWCIcon.webp"
    },
    {
        "title": "SAMSUNG INNOVATION LAB",
        "description": "Samsung provides resources for students in technology development and innovation.",
        "logo": "/image/company-logos/Samsung.webp"
    },
    {
        "title": "SMS GROUP ENGINEERING",
        "description": "SMS Group focuses on engineering solutions and offers mentorship to aspiring engineers.",
        "logo": "/image/company-logos/SMSGroup (1).webp"
    },
    {
        "title": "SOPRA STERIA INNOVATION CENTER",
        "description": "Sopra Steria supports students in IT solutions and digital transformation projects.",
        "logo": "/image/company-logos/Sopra.webp"
    },
    {
        "title": "TECHNOLOGY INNOVATION HUB",
        "description": "Focus on emerging technologies, providing students insights and resources for tech development.",
        "logo": "/image/company-logos/tech.webp"
    },
    {
        "title": "TORRENT GAS SERVICES",
        "description": "Torrent Gas offers insights into the energy sector and sustainable practices.",
        "logo": "/image/company-logos/torrentgas.webp"
    },
    {
        "title": "Uflex INNOVATION CENTER",
        "description": "Uflex provides resources for packaging and manufacturing innovations.",
        "logo": "/image/company-logos/Uflex.webp"
    },
    {
        "title": "UKG WORKFORCE MANAGEMENT",
        "description": "UKG focuses on workforce management solutions and offers training to students.",
        "logo": "/image/company-logos/UKG.webp"
    },
    {
        "title": "UNOMINDA INDUSTRIAL SOLUTIONS",
        "description": "Unominda collaborates with students to provide insights into automotive technologies.",
        "logo": "/image/company-logos/Unominda.webp"
    },
    {
        "title": "uTORRENT TECHNOLOGIES",
        "description": "uTorrent offers resources for digital technology and software development.",
        "logo": "/image/company-logos/uTorrent.webp"
    },
    {
        "title": "WALMART RETAIL INNOVATION",
        "description": "Walmart provides insights into retail operations and e-commerce strategies.",
        "logo": "/image/company-logos/WalmartIcon.webp"
    },
    {
        "title": "JK CEMENT MANUFACTURING",
        "description": "JK Cement focuses on providing innovative solutions in the cement industry, offering students insights into construction materials.",
        "logo": "/image/company-logos/JKCement.webp"
    },
    {
        "title": "LOHIA GROUP INNOVATION",
        "description": "Lohia Group provides insights into manufacturing processes and innovations in textiles and packaging.",
        "logo": "/image/company-logos/LohiaIcon.webp"
    },
    {
        "title": "LOWES RETAIL SERVICES",
        "description": "Lowes offers insights into home improvement retail and customer service solutions.",
        "logo": "/image/company-logos/Lowes.webp"
    },
    {
        "title": "MAQ SOFTWARE DEVELOPMENT",
        "description": "Maq Software focuses on providing technology solutions and software development insights for students.",
        "logo": "/image/company-logos/Maqsoftware.webp"
    },
    {
        "title": "MIDTREE INNOVATION LAB",
        "description": "Midtree supports technology-driven solutions and offers mentorship to aspiring innovators.",
        "logo": "/image/company-logos/Midtree.webp"
    },
    {
        "title": "MORGAN STANLEY FINANCIAL SERVICES",
        "description": "Morgan Stanley collaborates with students to provide insights into investment banking and financial markets.",
        "logo": "/image/company-logos/Morgan.webp"
    }
];
const other = [
    {
        "title": "MPHASIS TECHNOLOGY HUB",
        "description": "Mphasis provides insights into IT services and technology development for students.",
        "logo": "/image/company-logos/Mphasis.webp"
    },
    {
        "title": "NEWGEN TECHNOLOGIES",
        "description": "Newgen offers solutions in digital transformation and process automation, providing students with industry insights.",
        "logo": "/image/company-logos/Newgen.webp"
    },
    {
        "title": "NUCLEUS SOFTWARE DEVELOPMENT",
        "description": "Nucleus Software focuses on providing banking and financial technology solutions, offering students insights into fintech.",
        "logo": "/image/company-logos/Nucleus.webp"
    },
    {
        "title": "UNAI",
        "description": "UNAI promotes global awareness and understanding among students through innovative programs and partnerships.",
        "logo": "/image/company-logos/unal-member-logo.webp"
    },
    {
        "title": "Jio",
        "description": "Jio provides high-speed internet and digital services, transforming the connectivity landscape in India.",
        "logo": "/image/company-logos/JioIcon.webp"
    },
    {
        "title": "Jakson",
        "description": "Jakson specializes in energy solutions, offering innovative products and services in renewable energy and power generation.",
        "logo": "/image/company-logos/Jakson.webp"
    },
    {
        "title": "ION",
        "description": "ION delivers technology solutions for industries, focusing on operational efficiency and digital transformation.",
        "logo": "/image/company-logos/IONIcon.webp"
    },
    {
        "title": "Interra",
        "description": "Interra provides advanced technology solutions in various sectors, enhancing operational capabilities.",
        "logo": "/image/company-logos/Interra.webp"
    },
    {
        "title": "Indian Navy",
        "description": "The Indian Navy protects the nation's maritime interests and ensures maritime security.",
        "logo": "/image/company-logos/IndianNavy.webp"
    },
    {
        "title": "Indian Army",
        "description": "The Indian Army is dedicated to protecting the sovereignty and integrity of the nation.",
        "logo": "/image/company-logos/IndianArmy.webp"
    },
    {
        "title": "Impetus",
        "description": "Impetus delivers innovative software solutions and services, driving business transformation for its clients.",
        "logo": "/image/company-logos/Impetus.webp"
    },
    {
        "title": "Hitachi",
        "description": "Hitachi provides advanced technology solutions across various sectors, focusing on sustainability.",
        "logo": "/image/company-logos/Hitachi.webp"
    },
    {
        "title": "Gainsight",
        "description": "Gainsight helps businesses improve customer relationships through innovative customer success solutions.",
        "logo": "/image/company-logos/Gainsight.webp"
    },
    {
        "title": "Ericsson",
        "description": "Ericsson provides technology and services that enable communications service providers to achieve business success.",
        "logo": "/image/company-logos/Ericcson.webp"
    },
    {
        "title": "DLT Labs",
        "description": "DLT Labs specializes in blockchain solutions, enhancing business operations across various sectors.",
        "logo": "/image/company-logos/DLTLabsIcon.webp"
    },
    {
        "title": "Cognizant",
        "description": "Cognizant provides IT services and consulting, helping clients navigate their digital transformation journeys.",
        "logo": "/image/company-logos/CognizantIcon.webp"
    },
    {
        "title": "Cloudera",
        "description": "Cloudera offers data management and analytics solutions, enabling organizations to leverage their data effectively.",
        "logo": "/image/company-logos/Cloudera.webp"
    },
    {
        "title": "C2FO",
        "description": "C2FO provides working capital solutions that enhance cash flow for businesses of all sizes.",
        "logo": "/image/company-logos/C2FO.webp"
    },
    {
        "title": "Amdocs",
        "description": "Amdocs provides software and services for communications and media companies, driving operational efficiency.",
        "logo": "/image/company-logos/amdocsIcon.webp"
    },
    {
        "title": "Airtel",
        "description": "Airtel offers telecommunications services and digital solutions, connecting millions of customers in India and beyond.",
        "logo": "/image/company-logos/airtel.webp"
    },
    {
        "title": "MOTHERSON GROUP ENGINEERING",
        "description": "Motherson Group focuses on automotive engineering solutions and offers mentorship to aspiring engineers.",
        "logo": "/image/company-logos/Motherson.webp"
    }
];

export default function CentreOfExcellence() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <>
            <div className="w-full flex justify-center items-center h-[600px] max-lg:h-80 bg-cover bg-top bg-[#535353] bg-blend-overlay bg-BG47 relative">
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'/>
                <div className="relative text-white text-center mt-auto mb-32 max-w-2xl max-md:max-w-lg max-sm:max-w-sm max-sm:px-2">
                    <h3 className="text-xl tracking-wide font-novaReg max-sm:text-[18px]">
                        University with Best Placements
                    </h3>
                    <h1 className="text-5xl max-md:text-4xl max-md:font-novaSemi max-sm:text-3xl tracking-tight font-novaBold">
                        Recognized as the Best for Industry Interface: Top Private Engineering Institute
                    </h1>
                </div>
            </div>
            <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                            >
                                <stat.icon className="h-16 w-20 text-white mb-4" />
                                <div className="text-4xl font-novaBold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-white opacity-80 max-w-[200px]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="bg-gradient-to-br from-indigo-950 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-novaBold mb-6 text-center">Collaborative Learning with Industry Experts</h2>
                    <p className="text-lg mb-12 text-center max-w-3xl mx-auto font-novaReg">
                        Partnering with influential businesses, we ensure our students receive relevant training and insights that prepare them for successful careers in their chosen fields.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnerCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
                                whileHover={{ scale: 1.05 }}
                                onHoverStart={() => setHoveredCard(index)}
                                onHoverEnd={() => setHoveredCard(null)}
                            >
                                <div className="relative h-48 w-full">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        layout="fill"
                                        objectfit="cover"
                                        className="transition-transform duration-300 ease-in-out "
                                        style={{ transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-novaSemi mb-2">{card.title}</h3>
                                    <p className="text-sm mb-4">{card.description}</p>
                                    <motion.button
                                        className="flex items-center text-yellow-400 font-novaSemi"
                                        animate={{ x: hoveredCard === index ? 10 : 0 }}
                                    >
                                        READ MORE <ChevronRight className="ml-1" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-8 py-16">
                <h1 className="text-4xl font-novabold mb-6 text-center">Transforming Education through Industry Leadership</h1>
                <p className="text-lg mb-12 text-center max-w-3xl mx-auto font-novaReg">
                    AKGU's partnerships with multinational firms have created research centers that enhance education through essential training and resources.
                </p>

                <h2 className="text-2xl font-novaSemi text-center mb-12">Industry-Collaborated Excellence Centers at AKGU</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {centers.map((center, index) => (
                        <div key={index} className="border rounded-lg p-6 shadow-lg flex flex-col justify-between">
                            <img src={center.logo} alt={center.title} className="w-20 mx-auto mb-4" />
                            <div>
                                <h3 className="text-lg font-novaSemi text-center mb-2 uppercase">{center.title}</h3>
                                <p className="text-center font-novaReg text-sm text-gray-700">{center.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className='my-20'></hr>
                <h2 className="text-3xl font-novaSemi text-center mb-12">Other Prominent Collaborations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {other.map((other, index) => (
                        <div key={index} className="border rounded-lg p-6 shadow-lg flex flex-col justify-between">
                            <img src={other.logo} alt={other.title} className="w-20 mx-auto mb-4" />
                            <div>
                                <h3 className="text-lg font-novaSemi text-center mb-2 uppercase">{other.title}</h3>
                                <p className="text-center text-sm font-novaReg text-gray-700">{other.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}