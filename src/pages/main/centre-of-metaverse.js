import Header from "@/Components/Header";
import CentreOfMetaverse from "../pagesComp/CentreOfMetaverse";


export const Home = () => {
    return (
        <>
            <div className="">
                <Header title={"Centre of Metaverse"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-2 px-2">
                    <CentreOfMetaverse />
                </section>
            </div>
        </>
    )
}

export default Home;