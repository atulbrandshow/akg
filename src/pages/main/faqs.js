import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Breadcrumb from "@/Components/Breadcrumb";
import FAQS from "../pagesComp/FAQS";

const BreadCrumb = [
    {
        name: "Admissions",
        Link: "#",
    },
    {
        name: "Faqs",
        Link: "#",
    },
];

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
];

export const Home = () => {
    return (
        <>
            <div className="bg-gray-200">
                <div className="bg-PaperBackground">
                    <div className="bg-white/80">
                        <Header
                            title={"FAQs"}
                            bgKey="BG9"
                            gradient={"bg-gradient-to-r from-black to-white/"}
                        />
                        <div className="w-full max-w-[1400px] pl-4 mt-10 mx-auto max-md:pl-2 max-md:pr-2">
                            <Breadcrumb data={BreadCrumb} />
                        </div>
                        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 pt-10 gap-8 px-4 max-sm:px-2 max-sm:gap-4 max-sm:py-10">
                            <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12 max-sm:col-span-12 bg-white p-4 rounded-lg shadow-sm max-sm:p-2">
                                <FAQS />
                            </div>
                            <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12 max-sm:mx-auto max-sm:px-4 max-sm:py-4 bg-white rounded-lg shadow-sm">
                                <SideBar title={"About Us"} LinkList={SideBarLink} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
