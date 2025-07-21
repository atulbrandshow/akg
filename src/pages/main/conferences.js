import Header from "@/Components/Header";
import Link from "next/link";

const Button = {
    name: "Apply Now",
    Link: "",
};

const years = [
    { title: '2024-25', url: '/conferences-2024-25' },
    { title: '2022-23', url: '/conferences-2022-23' },
    { title: '2021-22', url: '/conferences-2019-20' },
    { title: '2019-20', url: '/conferences-2019-20' },
    { title: '2018-19', url: '/pdf/conferences/CONFERENCES_2018-19.pdf' },
    { title: '2017-18', url: '/pdf/conferences/CONFERENCES-2017-18.pdf' }
];

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Conference"} Button={Button} gradient={"bg-gradient-to-r from-gray-900 to-zinc-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-20 gap-10">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <div className="max-w-7xl mx-auto p-4">
                            <h3 className="text-4xl font-novaBold text-center mb-6">Conferences</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {years.map((year) => (
                                    <Link key={year.title} href={year.url} className="w-full py-6 text-lg font-semibold bg-gray-800 hover:bg-gray-700 text-white text-center rounded-lg">
                                        CONFERENCES AND SEMINARS IN {year.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;