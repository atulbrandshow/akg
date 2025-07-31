import Header from "@/Components/Header";
import Testimonials from "../pagesComp/Testimonials";


const Button = {
    name: "Apply Now",
    Link: "",
};

const Home = () => {
    return (
        <>
            <div className="bg-[#f9fafc]">
                <Header title={"Testimonials"} bgKey="BG-Building-12" Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <Testimonials />
            </div>
        </>
    )
}


export default Home;