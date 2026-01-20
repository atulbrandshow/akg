import Header from "@/Components/Header";
import Gallery from "../pagesComp/Gallery";

const Button = {
    name: "Apply Now",
    Link: "",
};

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Gallery"} Button={Button} gradient={"bg-gradient-to-r from-gray-900 to-transparent"} bgKey="BG-Building-14" />
                <Gallery />
            </div>
        </>
    )
}


export default Home;