import Header from "@/Components/Header";
import AdmissionCriteria from "../pagesComp/AdmissionCriteria";


export const Home = () => {
    return (
        <>
        <div className="bg-gray-100">
        <Header
            title={<span className="leading-[45px]">Ajay Kumar Garg University, <br />Admission Criteria </span>}
            bgKey="BG4" 
            gradient={"bg-gradient-to-r from-black to-white/"} 
            buttonType={"link"}
            buttonLink="/"
            buttonText="Apply Now"
        />
            <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-8 px-4">
                <div className="w-full">
                    <AdmissionCriteria />
                </div>
            </section>
        </div>
        </>
    )
}


export default Home;