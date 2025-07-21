import Header from "@/Components/Header";
import Library from "../pagesComp/Library";

export const Home = () => {
    return (
        <>
            <div className="bg-gray-200">
                <div className="bg-PaperBackground ">
                    <div className="bg-white/80">
                        <Header title={"Library"} bgKey="BG6" gradient={"bg-gradient-to-r from-black to-white/"} height="h-[600px]"/>
                        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 pt-10 max-sm:py-5 gap-8 px-4 max-sm:px-2 max-sm:gap-0">
                            <div className="col-span-12">
                                <Library />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
