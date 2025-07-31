import Header from "@/Components/Header";
import InstitutionalSocialResponsibilities from "../pagesComp/InstitutionalSocialResponsibilities.js";


export const Home = () => {
    return (
        <div className="bg-PaperBackground">
            <Header title={<span className="leading-[45px]">Institutional Social <br /> Responsibility</span>} bgKey="BG-Building-7" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
            <InstitutionalSocialResponsibilities />
        </div>
    )
}


export default Home;