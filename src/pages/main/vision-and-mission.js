import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";

import Breadcrumb from "@/Components/Breadcrumb";
import AboutSection from "../pagesComp/VisionMission";

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
];

export const Home = ({ data }) => {
    return (
        <>
            <div className="bg-gray-100">
                <Header
                    title={"Vision and Mission"}
                    gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
                    bgKey="BG-Building-1"
                />
                <section className='max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5'>
                    {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
                </section>
                <AboutSection />
            </div>
        </>
    );
};

export default Home;
