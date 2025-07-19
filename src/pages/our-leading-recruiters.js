import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";

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

const company = [
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
    return (
        <>
            <Header title={"Our Leading Recruiter"} subHeading={"Partnering with the best to shape bright futures! 🤝✨"} bg="/image/building/building5.webp" gradient={"bg-gradient-to-r from-zinc-900 to-gray-900/40"} />
            <section className="max-w-[1400px] mx-auto px-3 pt-20 max-md:pt-10">
                <div className="mb-6">
                    <div className="">
                        <div className="grid grid-cols-12 gap-8 max-sm:gap-0">
                            <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
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
                        </div>
                    </div>
                    <div className="border mt-10">
                        <div className="mb-4 bg-gray-100 p-6 max-sm:p-2">
                            <h3 className="font-novaReg text-4xl max-md:text-2xl">Our Leading Recruiters</h3>
                            <p className="text-sm font-novaReg">
                                Strategic Partnerships with Leading Companies for Enhanced Industry Connections and More!
                            </p>
                        </div>

                        <div className="mb-10">
                            <ul className="flex flex-wrap justify-between">
                                {company.map((comp, index) => (
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurLeadingRecruiters;
