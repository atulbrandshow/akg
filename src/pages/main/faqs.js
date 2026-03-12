import Header from "@/Components/Header";
import FAQS from "../pagesComp/FAQS";

export const Home = () => {
    return (
        <>
            <div className="bg-gray-200 min-h-screen">
                <div className="bg-PaperBackground">
                    <div className="bg-white/80">
                        <Header
                            title={"FAQs"}
                            bgKey="BG9"
                            gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
                        />
                        <section className="w-full max-w-[1400px] mx-auto py-20 px-6 max-sm:px-4">
                            <div className="w-full bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl max-sm:p-4">
                                <FAQS />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
