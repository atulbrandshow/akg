import Header from "@/Components/Header";
import ITFundedProjects from "../pagesComp/ITFundedProjects";

const Button = {
    name: "Apply Now",
    Link: "",
};

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"IT Funded Projects"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto">
                    <div className="">
                        <ITFundedProjects />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;
