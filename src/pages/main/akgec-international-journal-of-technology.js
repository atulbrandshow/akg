import Header from "@/Components/Header";
import JournalData from "@/Components/JournalData";
import { tabs, content } from '@/Json/internationalJournalData'


export const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"AKGU International Journal of Technology"} bg="/image/Building2.jpg" gradient={"bg-gradient-to-r from-gray-900 to-zinc-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-2 max-sm:gap-0">
                    <div className="col-span-12 max-md:col-span-12">
                        <JournalData tabs={tabs} content={content} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;
