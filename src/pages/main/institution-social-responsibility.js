import Header from "@/Components/Header";
import InstitutionalSocialResponsibilities from "../pagesComp/InstitutionalSocialResponsibilities.js";
import Breadcrumb from "@/Components/Breadcrumb.js";


export const Home = ({data}) => {
    return (
        <div className="bg-PaperBackground">
            <Header title={<span className="leading-[45px]">Institutional Social <br /> Responsibility</span>} bgKey="BG-Building-7" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                       <section className='max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5'>
                                                             {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
                                                         </section>
            <InstitutionalSocialResponsibilities />
        </div>
    )
}


export default Home;