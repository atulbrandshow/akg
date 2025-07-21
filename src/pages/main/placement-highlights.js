import Header from "@/Components/Header";
import PlacementHighlights from "../pagesComp/PlacementHighlights";

export const Home = () => {
    return (
        <>
            <div className="bg-white">
                <Header title={"Placement Highlights"} subHeading={"Celebrating success, shaping futures! 🚀✨"} bg="/image/building/building3.webp" gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full py-20 max-sm:py-8">
                    <PlacementHighlights />
                </section>
            </div>
        </>
    )
}


export default Home;