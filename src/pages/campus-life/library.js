import Header from "@/Components/Header";
import Library from "../pagesComp/Library";

export const LibraryPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header 
                title={"Central Library"} 
                subHeading={"Empowering Minds Through Global Knowledge 📚✨"}
                bg="/image/library/Library_1.jpg" 
                gradient={"bg-gradient-to-r from-gray-900/80 to-transparent"} 
                height="h-[600px]" 
            />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-16 max-sm:py-8 gap-10 px-4 max-md:gap-0">
                <div className="col-span-12">
                    <Library />
                </div>
            </section>
        </div>
    );
};

export default LibraryPage;
