import Header from "@/Components/Header";
import PaymentProcedure from "../pagesComp/PaymentProcedure";

export default function Home() {
    return (
        <div className="bg-PaperBackground">
            <div className="bg-[#f2f6ff]/70">
                <Header title={"Payment Procedure"} bg="/image/tech-invent-&-events/tech-invent-banner.jpg" Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-gray-900 to-transparent"} />
                <section className="w-full max-w-[1400px] mx-auto py-16 max-sm:py-8 px-4">
                    <div className="w-full">
                        <PaymentProcedure />
                    </div>
                </section>
            </div>
        </div>
    );
}
