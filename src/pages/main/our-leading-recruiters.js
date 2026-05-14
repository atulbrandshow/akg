import React, { useState, useMemo } from 'react';
import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import { motion, AnimatePresence } from 'framer-motion';

const content = [
    {
        text: <>Recognized as the <strong>'University with Best Placements', AKG University (NAAC A+ grade University)</strong> has emerged as a prominent leader in the region. A remarkable 65% increase in corporate visits to the university highlights the outstanding achievements of our Alumni in their respective fields. AKG University has proudly become the first institution in India to be featured in the <strong>Limca Book of Records</strong> for the Highest Number of Companies Participating in a single academic year.</>
    },
    {
        text: "The university's dedicated approach to continuous and comprehensive training for students, aligned with industry expectations, and the establishment of industry-sponsored labs for practical learning, have significantly boosted placement offers and record salary packages."
    },
    {
        text: <>Unlike many institutions, AKG University does not limit its students to one or two companies; our students have successfully secured <strong>multiple offers</strong>, with the highest number being 9 companies. In addition to core companies, students are encouraged to participate in interdisciplinary branch selection processes.</>
    },
    {
        text: <>Students from engineering disciplines have landed their dream jobs and attractive packages at leading MNCs, such as <strong>TechCorp, Innovatech, Alpha Solutions, and FutureTech</strong>. Meanwhile, the management sector has experienced growth with domain-specific companies in finance, retail, FMCG, business analytics, manufacturing, and hospitality, with the highest package reaching ₹15 LPA.</>
    },
    {
        text: <>Hospitality students have gained global opportunities with placements at the world-renowned entertainment company, Fantasy World. The aviation sector has also seen substantial growth, with airlines <strong>such as SkyHigh, AeroLux, and JetStream</strong> hiring our graduates. Animation students have secured lucrative positions at Creative Minds and Visionary Studios.</>
    },
    {
        text: <>AKG University has set a new benchmark, with one of India's leading IT companies, Quantum Technologies, <strong>selecting a record 400 students</strong> in the 2022-23 academic year, the highest in India. Other global giants like <strong>TechSphere, Innovatech, and InfoSolutions recruited 150, 90, and 210 students</strong>, respectively, during campus placements, marking the highest selections made by these companies in Northern India.</>
    },
    {
        text: "The placement season for the 2023-24 batch has been an extraordinary success for students of AKG University, with over 950 top MNCs on campus extending 9,500 offers, including the highest international package worth ₹1.8 CR and a national package of ₹56 LPA."
    },
    {
        text: <>Continuing the Tradition of Excellence, <strong>AKG University Records 9,500 Placement Offers for the 2023-24 Batch (Highest in Northern India)</strong>.</>
    }
];

const featuredCompanies = [
    { img: "/image/company-logos/AccentureIcon.webp" },
    { img: "/image/company-logos/Adobe.webp" },
    { img: "/image/company-logos/airtel.webp" },
    { img: "/image/company-logos/Amazon.webp" },
    { img: "/image/company-logos/amdocsIcon.webp" },
    { img: "/image/company-logos/AmericanExpressIcon.webp" },
    { img: "/image/company-logos/Birlasoft.webp" },
    { img: "/image/company-logos/Byjus.webp" },
    { img: "/image/company-logos/c2fo.webp" },
    { img: "/image/company-logos/CapgeminiIcon.webp" },
    { img: "/image/company-logos/chetu-logo.webp" },
    { img: "/image/company-logos/Cloudera.webp" },
    { img: "/image/company-logos/coforge.webp" },
    { img: "/image/company-logos/CognizantIcon.webp" },
    { img: "/image/company-logos/DLTLabsIcon.webp" },
    { img: "/image/company-logos/DXC.webp" },
    { img: "/image/company-logos/Ericcson.webp" },
    { img: "/image/company-logos/Gainsight.webp" },
    { img: "/image/company-logos/GlobalLogic.webp" },
    { img: "/image/company-logos/Google.webp" },
    { img: "/image/company-logos/Grofers.webp" },
    { img: "/image/company-logos/hcl.webp" },
    { img: "/image/company-logos/Hitachi.webp" },
    { img: "/image/company-logos/HSBC.webp" },
    { img: "/image/company-logos/ibm.webp" },
    { img: "/image/company-logos/Impetus.webp" },
    { img: "/image/company-logos/IndianNavy.webp" },
    { img: "/image/company-logos/infosys.webp" },
    { img: "/image/company-logos/Interra.webp" },
    { img: "/image/company-logos/IONIcon.webp" },
    { img: "/image/company-logos/Jakson.webp" },
    { img: "/image/company-logos/JioIcon.webp" },
    { img: "/image/company-logos/JKCement.webp" },
    { img: "/image/company-logos/KPMG.webp" },
    { img: "/image/company-logos/LohiaIcon.webp" },
    { img: "/image/company-logos/Maqsoftware.webp" },
    { img: "/image/company-logos/Microsoft.webp" },
    { img: "/image/company-logos/Midtree.webp" },
    { img: "/image/company-logos/Morgan.webp" },
    { img: "/image/company-logos/Motherson.webp" },
    { img: "/image/company-logos/Mphasis.webp" },
    { img: "/image/company-logos/Newgen.webp" },
    { img: "/image/company-logos/Nucleus.webp" },
    { img: "/image/company-logos/OLAElectric.webp" },
    { img: "/image/company-logos/Optum.webp" },
    { img: "/image/company-logos/PhonePe.webp" },
    { img: "/image/company-logos/PWCIcon.webp" },
    { img: "/image/company-logos/Samsung.webp" },
    { img: "/image/company-logos/SMSGroup.webp" },
    { img: "/image/company-logos/Sopra.webp" },
    { img: "/image/company-logos/tcs.webp" },
    { img: "/image/company-logos/tech.webp" },
    { img: "/image/company-logos/torrentgas.webp" },
    { img: "/image/company-logos/Uflex.webp" },
    { img: "/image/company-logos/UKG.webp" },
    { img: "/image/company-logos/Unominda.webp" },
    { img: "/image/company-logos/uTorrent.webp" },
    { img: "/image/company-logos/vivo.webp" },
    { img: "/image/company-logos/WalmartIcon.webp" },
    { img: "/image/company-logos/WIPRO.webp" },
    { img: "/image/company-logos/AirForce.webp" },
    { img: "/image/company-logos/IndianArmy.webp" },
];

const recruiterNames = [
    "4PROSPER TECHNOLOGIES PVT LTD", "AAMOR INOX", "ACADECRAFT PVT LTD", "ACCENTURE", "ACCOLITE SOFTWARE INDIA PVT LTD",
    "ACELERAR TECHNOLOGIES PVT LTD", "ACEZD CONSULTANCY SERVICES PVT LTD", "ACT21 SOFTWARE PVT. LTD.", "ACXIOM CONSULTING PVT LTD",
    "ADANI GAS", "ADDVERB TECHNOLOGY", "ADMITKARD", "ADOBE SYSTEMS", "ADVANCE VALVES", "AGICENT TECHNOLOGIES",
    "AGILE SOFTECH PVT. LTD", "AGNITY GLOBAL", "AGREEYA SOLUTIONS", "AIRTEL", "AKS INFORMATION TECHNOLOGY SERVICES PVT LTD",
    "ALGOWORKS TECHNOLOGIES PVT LTD", "ALIGHT SOLUTIONS (FORMERLY AON HEWITT)", "ALMAMATE INFO TECH", "ALSOENERGY",
    "AMAR UJALA WEB SERVICES", "AMARA RAJA GROUP OF COMPANIES", "AMAZON", "AMAZON DEVELOPMENT CENTRE (INDIA) PVT LTD",
    "AMAZON TRANSPORT SERVICES PVT LTD (ATSPL)", "AMDOCS", "AMY SOFTECH PVT LTD", "ANALEC INFOTECH PVT LTD",
    "ANR SOFTWARE PVT LTD", "APPINVENTIV TECHNOLOGIES", "APPZCLOUD TECHNOLOGIES PVT. LTD", "ARISTA NETWORK INDIA PVT LTD.",
    "ASAHI INDIA GLASS PVT LTD", "ASHOK LEYLAND LIMITED", "ASPIRING MINDS ASSESSMENTS PVT LTD", "ASTREA IT SERVICES",
    "ATS INFRASTRUCTURE LIMITED", "AUTOLOAD (DAFFODIL SOFTWARE)", "AVL INDIA PVT. LTD", "BALARKA TECHNOLOGIES INDIA PVT LTD",
    "BANDMA INDIA (P) LIMITED", "BANKIT SERVICES PRIVATE LIMITED", "BHILWARA INFOTECHNOLOGY", "BINMILE TECHNOLOGIES",
    "BLEMOT AUTOMOBILE TECHNOLOGY PVT LTD", "BOBBLE AI", "BRITISH TELECOM", "BYJU’s", "CAPGEMINI", "CAPITALVIA GLOBAL RESEARCH LIMITED",
    "CAREER DREAMS (BUSINES PARTNER OF CAREER LAUNCHER)", "CAVISSON SYSTEMS", "CEASEFIRE INDUSTRIES LTD", "CEBS WORLDWIDE",
    "CEDCOSS TECHNOLOGIES PVT LTD", "CENTILYTICS", "CERTYBOX", "CHEGG INDIA", "CHROME INFOTECH", "CLOUD ANALOGY SOFTECH PVT. LTD.",
    "CLOUD CERTITUDE", "CNERGYIS INFOTECH INDIA PVT LTD (ZINGHR)", "COFORGE LIMITED", "COGNIZANT", "COLLABERA", "COLLEGE DUNIA",
    "CONTATA SOLUTIONS", "CONTINENTAL AUTOMOTIVE COMPONENTS (INDIA) PVT LTD", "CORE VALUE TECHNOLOGIES", "CRATER ZONE PVT LTD",
    "CREDEX TECHNOLOGY", "CVENT INDIA", "CYBER GROUP INDIA PRIVATE LIMITED", "CYWARE LBS INDIA PVT. LTD.", "DAFFODIL SOFTWARE",
    "DATAVAL ANALYTICS PVT LTD", "DAYAL GROUP", "DELHIVERY", "DEW SOLUTIONS PVT. LTD", "DIGICALL PVT. LTD", "DION GLOBAL SOLUTIONS",
    "DIRACERP SOLUTIONS", "DIRECT ADMISSION GROUP (DAG)", "DIVERSE LYNX LLC", "DLT LABS", "DNJ INFOTECH", "DRISHTI IAS",
    "DRY COOL CHILLERS", "DXC TECHNOLOGY", "E2E RESEARCH SERVICES PVT LTD", "ECOSENSE SUSTAINABLE SOLUTIONS (P) LTD", "EDUGRAD",
    "EFFECTUAL KNOWLEDGE SERVICES PVT LTD", "EISEN VAULT", "EMERSON AUTOMATION SOLUTIONS", "EMTEX MANUFACTURING",
    "ENATEL TELECOMMUNICATION (P) LTD", "ENINOV SYSTEMS PVT LTD", "EPAM SYSTEMS INDIA PRIVATE LTD", "ERICSSON GLOBAL",
    "ESCECION TECHNOLOGIES PVT. LTD (DEVSLANE)", "E-SMART SYSTEMS PVT LTD", "ESPIRE INFOLABS", "EVA STAYS PVT LTD",
    "EVOBI INNOVATIONS PVT LTD", "EXELIQ TECH SOLUTIONS PVT LTD/ PROJEXSIS", "EXICOM POWER SYSTEMS",
    "EXPERT LANCING RESEARCH SERVICES", "EXTRAMARKS EDUCATION INDIA PVT LTD", "FAREPORTAL INDIA PVT. LTD", "FINOIT TECHNOLOGIES PVT LTD",
    "FISERV INDIA", "FLIXSTOCK INDIA PVT LTD", "FLUPER LTD", "FOCUS ACADEMY FOR CAREER ENHANCEMENT", "FORMULAIC ENGINEERS PVT. LTD",
    "GA TECHNOCARE TECHNOLOGY PVT. LTD", "GAINSIGHT SOFTWARE PVT LTD", "GEMINI SOLUTIONS", "GENPACT", "GHAZIABAD PRECISION PRODUCTS PVT LTD",
    "GI+DE CURRENCY TECHNOLOGY", "GINGER WEBS PVT. LTD", "GIRIKON SOLUTIONS PVT LTD", "GLOBAL LOGIC - HITACHI", "GOMECHANIC",
    "GRINDWELL NORTON LTD (SAINT-GOBAIN)", "GROFERS", "GSPANN TECHNOLOGIES", "HANDAJI TECH SOLUTIONS PRIVATE LIMITED.",
    "HANU SOFTWARE", "HARMAN CONNECTED SERVICES", "HASHEDIN BY DELOITTE", "HASHSTUDIOZ TECHNOLOGIES PVT LTD", "HCL TECHNOLOGIES LIMITED",
    "HEALTHPLIX TECHNOLOGIES", "HERCULES STRUCTURAL SYSTEMS PVT. LTD", "HERO MOTOCORP LTD", "HESTABIT TECHNOLOGIES PVT LTD",
    "HEXAWARE TECHNOLOGIES", "HFCL LIMITED", "HIKE EDUCATION", "HIKE INDIA", "HITACHI CONSULTING", "HI-TECH GEARS LIMITED",
    "HMJ TECHNOLOGY", "HSBC SOFTWARE DEVELOPMENT (INDIA) PVT. LTD", "HUDSON DATA PRIVATE LIMITED", "I CUBE SYSTEMS", "IBM INDIA",
    "IDEMIA SYSCOM INDIA PVT LTD", "IHS MARKIT", "IMAGE INFOSYSTEMS PVT LTD", "INALSA HOME APPLIANCES", "INCEDO TECHNOLOGY SOLUTIONS LTD.",
    "INDIAMART INTERMESH LTD", "INDIAN ARMY", "INDIAN NAVY", "INDUCTUS GROUP", "INDUSTRY BUYING", "INFO EDGE INDIA LIMITED",
    "INFOGAIN INDIA PRIVATE LIMITED", "INFOSYS", "INGENIOUS E-BRAIN SOLUTIONS PVT. LTD.", "INNCIRCLES TECHNOLOGIES PVT LTD", "INNOVACCER",
    "INTELLEWINGS", "INTERNATIONAL QUALITY MANAGEMENT SYSTEMS", "INVESTORS CLINIC INFRATECH PVT. LTD.", "ION GROUP", "JAKSON",
    "JAMNA AUTO INDUSTRIES LTD", "JARO EDUCATION", "JBM AUTO SYSTEM PVT. LTD", "JK TECHNOSOFT", "JOSH TECHNOLOGY GROUP",
    "JUSPAY TECHNOLOGIES PRIVATE LIMITED", "JUST DIAL", "KARVY DATA MANAGEMENT SERVICES LTD", "KEYIDEAS INFOTECH PVT LIMITED",
    "KLOUDRAC SOFTWARES PVT. LTD", "KNOLDUS SOFTWARE", "KPMG GLOBAL SERVICES (P) LTD", "KREATE TECHNOLOGIES",
    "KRIYOSH DIGITAL MEDIA PVT. LTD.", "KSOLVES INDIA PVT LTD", "KULIZA(EDUTHRILL)", "KWENCH GLOBAL TECHNOLOGIES (P) LTD",
    "LAVA INTERNATIONAL", "LIBSYS LIMITED", "LOHIA GROUP", "LOOM SOLAR", "MAHARANI INNOVATIVE PAINTS PVT LTD.", "MAPMYINDIA",
    "MAQ SOFTWARE", "MARKETMAGNIFY INVESTMENT ADVISORS AND RESEARCH PVT LTD", "MCKINSOL TECHNOLOGIES PVT LTD", "MECHARTES",
    "MEDITAB SOFTWARE INDIA PVT LTD", "MERA BAZAAR VENTURE PVT. LTD.", "METACUBE SOFTWARE", "MKT COMMUNICATION PVT LTD",
    "MOBILOITTE TECHNOLOGIES INDIA PVT. LTD", "MODERN HIRING SERVICE (MHS)", "MOTHERSON SUMI INFOTECH & DESIGN LTD (MIND)",
    "MOTHERSON SUMI SYSTEMS LIMITED", "MUVRO TECHNOLOGIES PVT LTD", "MYMIND INFOTECH PVT LTD", "NAGARRO", "NAMEKART",
    "NATIONAL INSTRUMENTS SYSTEMS (INDIA) PRIVATE LTD", "NAVYUG INFOSOLUTIONS P. LTD", "NCR CORPORATION", "NEC TECHNOLOGIES INDIA PVT LTD",
    "NETAMBIT INFOSOURCE & E-SERVICES PVT LTD", "NETPROPHETS CYBERWORKS PVT LTD", "NEWGEN SOFTWARE TECHNOLOGIES LTD",
    "NEXUS ENGICONSULTS PVT. LTD", "NIIT LTD", "NIIT TECHNOLOGIES", "NIMBUS EDUCOM", "NISSAN DIGITAL", "NISUM CONSULTING PVT LTD",
    "NIVESH GLOBAL", "NS MATRIX SERVICES PVT LTD", "NTT DATA GLOBAL DELIVERY SERVICES PVT LTD", "NUCLEUS SOFTWARE", "OCKY POCKY",
    "OGPM LIMITED", "ONE BUSINESS CONSULTING GROUP", "OPA E- LEARNING SOLUTIONS", "OPPO MOBILES INDIA", "OPSTREE",
    "OPTIMUS INFORMATION INDIA PVT LTD", "OUTBUZZ MARKETING", "OUTRIGHT SYSTEMS PVT LTD", "PENNYBASE TECHNOLOGY", "PEPCODING",
    "PIE INFOCOMM", "PIN CLICK PROPERTY MANAGEMENT PVT LTD", "PIONEER MACHINES & AUTOMATION (P) LTD", "PLANET SPARK",
    "PLANETCAST MEDIA SERVICES PVT LTD", "POLESTAR SOLUTIONS & SERVICES INDIA PVT LTD", "PRIME FOCUS TECHNOLOGIES",
    "PRIMOTECH ENERGY SOLUTINS PVT LTD", "PROSPECTA SOFTWARE", "PYRAMID IT CONSULTING PVT LTD", "Q A INFOTECH PVT LTD",
    "QTECH MICRO ELECTRONICS INDIA PVT LTD", "QUANTUM PAGE PVT. LTD.", "QUBAG(RAFFEN ONLINE SERVICES PVT.LTD.)", "R SYSTEMS",
    "RADICAL LOGIX", "RATHI INDUSTRIES LTD", "REALCODERZ", "RELIANCE JIO", "ROBERT BOSCH", "SA INFRASTRUCTURE CONSULTANTS PVT. LTD.",
    "SAAS LABS TECHNOLOGIES PVT LTD", "SAASFOCUS CONSULTING PVT. LTD", "SAGACITO TECHNOLOGIES PVT LTD", "SAMSUNG DISPLAY",
    "SAMSUNG INDIA ELECTRONCBS PVT. LTD", "SAPIEOSOFT INDIA PVT LTD", "SHAMBHU DAYAL GLOBAL SCHOOL", "SHANGARI GLOBAL (P) LTD",
    "SHARECHAT (MOHALLA TECH PRIVATE LTD)", "SHIMUK ENTERPRISE PVT LTD", "SHRIRAM TRANSPORT FINANCE COMPANY LIMITED",
    "SHUNYAAA INNOVATIONS LLP", "SKILROCK TECHNOLOGIES", "SMARTPRIX", "SNWARE RESEARCH SERVICES PVT LTD", "SOFTSAGES TECHNOLOGY",
    "SOPRA STERIA INDIA", "SPACECHEM ENTERPRISES", "SQUARE YARDS", "SREX POWER INDIA PVT LTD", "SRP GROUP (SHASHI DHAWAL HYDRAULICS PVT. LTD)",
    "STARTELE LOGIC", "STATCON ELECTRONICS INDIA LTD", "STEMROBO TECHNOLOGIES PVT. LTD", "STJ ELECTRONICS PVT LTD",
    "STYLEWORK INNOVATION HUB PVT LTD", "SUCCESSIVE SOFTWARE", "SUEZ WATER TECHNOLOGIES AND SOLUTIONS", "SYMBYOTIC SOFTWARE PVT LTD",
    "SYSMIND LLC", "TAAZAA TECH PVT LTD", "TACTION SOFTWARE", "TANAASHI TECHNOLOGIES (P) LTD", "TANISHA SYSTEMS", "TCS",
    "TECH MAHINDRA", "TECHNIP FMC", "TELEPERFORMANCE", "THE BANK OF NEW YORK MELLON (BNY MELLON)", "THE UNIFIED CLOUD PVT. LTD",
    "THINK & IMPLEMENT", "THINK & LEARN", "THINKSYS SOFTWARE PRIVATE LIMITED", "THREADSOL SOFTWARES", "TO THE NEW", "TOPPR",
    "TORRENT GAS", "TRANSRAIL LIGHTING LIMITED (TLL)", "TRUECHIP SOLUTIONS", "UAA DIGITAL MEDIA PVT LTD", "UCERTIFY", "UFLEX LIMITED",
    "UNITED HEALTH GROUP", "UNTHINKABLE SOLUTIONS", "UNYSCAPE INFOCOM PVT LTD", "URBAN ROOTS", "URBANCLAP TECHNOLOGIES INDIA (P) LTD",
    "VARIETY INNOVATION VENTURE", "VEDANTU INNOVATIONS PVT LTD.", "VEDICSOFT SOLUTIONS INDIA PVT LTD", "VELOCITY SOFTWARE SOLUTIONS PVT LTD",
    "VEST INC", "VIRTUAL ANALYTICS", "VIRTUAL STUDIO PVT. LTD", "VISIONEERING SOLUTIONS PVT LTD", "VNU SOFTWARE PRIVATE LIMITED",
    "VSERV BUSINESS SOLUTIONS PVT LTD", "VTECH SOLUTIONS", "VVDN TECHNOLOGIES PVT LTD", "W3VILLA TECHNOLOGIES PVT LTD",
    "WAKE’N’CODE TECHNOLOGIES", "WALMART GLOBAL TECH INDIA", "WEBBIOTECHNOLOGIES", "WEBKUL SOFTWARE PVT LTD",
    "WEMITED INNOVATIONS PVT. LTD.", "WILLEY MTHREE", "WIPRO LIMITED", "WORLD FASHION EXCHANGE PVT LTD", "YOEKISOFT PVT LTD",
    "ZINGHR", "ZOPPER", "ZOPSMART", "ZUNROOF TECH PRIVATE LIMITED"
];

const SideBarLink = [
    { name: "About Placements", link: "/placements" },
    { name: "Dept. of Career Planning & Development", link: "/placements/department-of-career-development" },
    { name: "Top Placement", link: "/placements/top-placement" },
    { name: "Placement Highlights", link: "/placements/placement-highlights" },
    { name: "Placement Policy", link: "/placements/placement-policy" },
    { name: "Our Leading Recruiters", link: "/placements/our-leading-recruiters" },
    { name: "Contact Placement Cell", link: "/placements/contact-placement-cell" }
]

const OurLeadingRecruiters = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAlpha, setSelectedAlpha] = useState("All");

    const alphabets = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

    const filteredRecruiters = useMemo(() => {
        return recruiterNames.filter(name => {
            const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesAlpha = selectedAlpha === "All" || name.toUpperCase().startsWith(selectedAlpha);
            return matchesSearch && matchesAlpha;
        }).sort();
    }, [searchTerm, selectedAlpha]);

    return (
        <>
            <Header title={"Our Leading Recruiter"} subHeading={"Partnering with the best to shape bright futures! 🤝✨"} bg="/image/building/building5.webp" gradient={"bg-gradient-to-r from-gray-900 to-transparent"} />
            <section className="max-w-[1400px] mx-auto px-3 pt-20 max-md:pt-10">
                <div className="mb-6">
                    {/* <div className="grid grid-cols-12 gap-8 max-sm:gap-0">
                        <div className="col-span-12">
                            <div className="w-full mb-4">
                                <h3 className="font-novaReg text-4xl max-md:text-2xl">AKG University: Placement Overview</h3>
                            </div>
                            <p className="text-lg font-novaReg mb-4">
                                <strong>Reaching New Heights, Setting New Records!</strong>
                            </p>
                            {content.map((item, index) => (
                                <p key={index} className="font-novaReg mb-3 text-justify">
                                    {item.text}
                                </p>
                            ))}
                        </div>
                        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                            <SideBar title={"About Us"} LinkList={SideBarLink} />
                        </div>
                    </div> */}

                    <div className="border mt-10">
                        <div className="mb-4 bg-gray-100 p-6 max-sm:p-2 border-b">
                            <h3 className="font-novaReg text-4xl max-md:text-2xl text-[#1c1f52]">Featured Recruiters</h3>
                            <p className="text-sm font-novaReg text-gray-600 mt-1">
                                Strategic Partnerships with Leading Companies for Enhanced Industry Connections and More!
                            </p>
                        </div>

                        <div className="mb-10 px-6">
                            <ul className="flex flex-wrap justify-between">
                                {featuredCompanies.map((comp, index) => (
                                    <li key={index} className="flex items-center justify-center">
                                        <span aria-label={`Logo of Company ${index + 1}`}>
                                            <img
                                                src={comp.img}
                                                className="w-32 object-contain p-2.5"
                                                alt={`Logo of Company ${index + 1}`}
                                            />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-100 p-6 max-sm:p-4 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h3 className="font-novaReg text-2xl text-[#1c1f52]">Recruiters Directory</h3>
                                <p className="text-xs font-novaReg text-gray-500">Search from 340+ industry partners</p>
                            </div>
                            <div className="relative w-full md:w-72">
                                <input
                                    type="text"
                                    placeholder="Search recruiter..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#df8934] font-novaReg text-sm"
                                />
                                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                        </div>

                        {/* Alphabet Filter */}
                        <div className="px-6 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide border-b border-gray-100 flex gap-1 bg-white">
                            {alphabets.map(alpha => (
                                <button
                                    key={alpha}
                                    onClick={() => setSelectedAlpha(alpha)}
                                    className={`px-3 py-1 rounded text-xs font-novaSemi transition-colors ${selectedAlpha === alpha ? "bg-[#1c1f52] text-white" : "text-gray-500 hover:bg-gray-200"}`}
                                >
                                    {alpha}
                                </button>
                            ))}
                        </div>

                        <div className="p-6 bg-white min-h-[400px]">
                            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                <AnimatePresence mode="popLayout">
                                    {filteredRecruiters.map((name) => (
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center p-3 rounded-lg border border-gray-50 bg-gray-50/50 hover:border-[#df8934]/30 hover:shadow-sm transition-all"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-[#df8934] mr-3 shrink-0" />
                                            <span className="text-xs font-novaMedium text-gray-700 truncate">{name}</span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                            {filteredRecruiters.length === 0 && (
                                <p className="text-center py-20 text-gray-400 font-novaReg italic">No recruiters found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurLeadingRecruiters;
