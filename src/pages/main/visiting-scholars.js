import ContactIncubator from "@/Components/ContactIncubator";
import ResearchInfo from "@/Components/ResearchInfo";

const scholar = [
    {
        img: '/image/scholars/photo-1.jpg',
        name: 'Alice Joe',
        designation: 'Co-founder of Microsoft'
    },
    {
        img: '/image/scholars/photo-2.jpg',
        name: 'Zordan Roy',
        designation: 'Co-founder of Facebook'
    },
    {
        img: '/image/scholars/photo-3.jpg',
        name: 'Ede Fork',
        designation: 'CEO of SpaceX and Tesla'
    },
    {
        img: '/image/scholars/photo-4.jpg',
        name: 'Minus Joe',
        designation: 'Co-founder of Microsoft'
    },
    {
        img: '/image/scholars/photo-2.jpg',
        name: 'Risu Roy',
        designation: 'CEO of SpaceX and Tesla'
    },
    {
        img: '/image/scholars/photo-1.jpg',
        name: 'Visu Fork',
        designation: 'Co-founder of Facebook'
    },
];

const VisitingScholars = () => {
    return (
        <>
            <section className="relative bg-BG44 h-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-end bg-black bg-blend-darken bg-opacity-70 pt-32 md:pt-48 lg:pt-80">
                <div className="max-w-5xl w-full mx-auto bg-gray-300 opacity-90 h-96 flex items-center justify-center flex-col">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-novaReg uppercase mb-3">Discover <span className="font-semibold text-blue-600">Opportunities as a</span> Visiting Scholar</h2>
                        <h6 className="font-novaReg sm:text-lg md:text-xl lg:text-2xl border-y py-3 border-gray-600 text-center">Engage in Collaborative Research and Professional Development</h6>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 py-6 sm:py-32">
                    {scholar.map((scholarData, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl">
                            <img
                                src={scholarData.img}
                                alt={`Picture of ${scholarData.name}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                            {/* Fixed text content */}
                            <div className="absolute bottom-4 left-4">
                                <p className="text-2xl font-novaBold text-white">
                                    {scholarData.name}
                                </p>
                                <p className="text-sm text-yellow-500">
                                    {scholarData.designation}
                                </p>
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
