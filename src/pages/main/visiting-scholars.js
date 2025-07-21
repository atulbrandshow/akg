import ContactIncubator from "@/Components/ContactIncubator";
import ResearchInfo from "@/Components/ResearchInfo";

const scholar = [
    {
        img: '/image/scholars/photo-1.jpg',
        name: 'Alice Joe',
        desi: 'Co-founder of Microsoft'
    },
    {
        img: '/image/scholars/photo-2.jpg',
        name: 'Zordan Roy',
        desi: 'Co-founder of Facebook'
    },
    {
        img: '/image/scholars/photo-3.jpg',
        name: 'Ede Fork',
        desi: 'CEO of SpaceX and Tesla'
    },
    {
        img: '/image/scholars/photo-4.jpg',
        name: 'Minus Joe',
        desi: 'Co-founder of Microsoft'
    },
    {
        img: '/image/scholars/photo-2.jpg',
        name: 'Risu Roy',
        desi: 'CEO of SpaceX and Tesla'
    },
    {
        img: '/image/scholars/photo-1.jpg',
        name: 'Visu Fork',
        desi: 'Co-founder of Facebook'
    },
];

const VisitingScholars = () => {
    return (
        <>
            <section className="relative bg-BG44 h-[80vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-end bg-black bg-blend-darken bg-opacity-70">
                <div className="max-w-5xl w-full mx-auto bg-gray-300 opacity-90 h-96 flex items-center justify-center flex-col">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-6xl font-novaReg uppercase mb-3">Discover <span className="font-semibold text-blue-600">Opportunities as a</span> Visiting Scholar</h2>
                        <h6 className="font-novaReg text-2xl border-y py-3 border-gray-600 text-center">Engage in Collaborative Research and Professional Development</h6>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-3">
                <div className="grid grid-cols-3 gap-6 mb-8 py-32">
                    {scholar.map((scholarData, i) => (
                        <div key={i} className="relative">
                            <img
                                src={scholarData.img}
                                alt={`Picture of ${scholarData.name}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 bg-opacity-75 p-1">
                                <p className="text-3xl text-start font-novaBold -rotate-90 -translate-y-20 translate-x-56 transform text-white">{scholarData.name}</p>
                                <p className="text-secondary text-start -rotate-90 -translate-y-28 translate-x-64 transform">{scholarData.desi}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <ResearchInfo />
            <ContactIncubator />
        </>
    );
};

export default VisitingScholars;
