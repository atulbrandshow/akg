import Header from "@/Components/Header";
import EducationLoan from "../pagesComp/EducationLoan";



export const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header
                    title={<span className="leading-[45px] flex pl-10 ">Study Loan Assistance <br /> for AKG Student</span>}
                    bgKey="BG5"
                    gradient={"bg-gradient-to-r from-black to-white/"}
                />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-10 gap-10 px-6 max-md:px-2 max-sm:gap-0">
                    <div className="col-span-12 max-md:col-span-12 ">
                        <EducationLoan />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;