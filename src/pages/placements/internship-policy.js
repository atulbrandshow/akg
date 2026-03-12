import Header from "@/Components/Header";
import InternshipPolicy from "../pagesComp/InternshipPolicy";

const Home = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Header 
                    title={"Internship Policy"} 
                    bgKey="BG28" 
                    gradient={"bg-gradient-to-r from-brand-blue to-transparent"} 
                />
                <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-10 px-6 max-sm:px-4">
                    <div className="w-full">
                        <InternshipPolicy />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
