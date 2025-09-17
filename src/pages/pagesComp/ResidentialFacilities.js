const hostels = [
    {
        img: "/image/infrastructure/building-1.webp",
        title: "Boys Hostel 1",
        desc: "Boys Hostel 1 provides comfortable rooms and essential amenities, ensuring a safe and supportive environment for students.",
    },
    {
        img: "/image/infrastructure/building-2.webp",
        title: "Boys Hostel 2",
        desc: "Boys Hostel 2 offers spacious living areas with modern facilities, designed to create a convenient and friendly atmosphere for residents.",
    },
    {
        img: "/image/infrastructure/building-3.webp",
        title: "Boys Hostel 3",
        desc: "Boys Hostel 3 ensures a balanced lifestyle with dedicated study spaces and recreational facilities for student growth and relaxation.",
    },
    {
        img: "/image/infrastructure/building-4.webp",
        title: "Girls Hostel 1",
        desc: "Girls Hostel 1 provides a secure and comfortable stay, equipped with modern amenities to support academic and personal needs.",
    },
    {
        img: "/image/infrastructure/building-5.webp",
        title: "Girls Hostel 2",
        desc: "Girls Hostel 2 offers a peaceful environment with well-maintained rooms and communal spaces for collaboration and bonding.",
    },
    {
        img: "/image/infrastructure/building-6.webp",
        title: "Girls Hostel 3",
        desc: "Girls Hostel 3 combines comfort and safety with facilities that encourage both academic focus and social interaction.",
    },
];

const ResidentialFacilities = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto py-8 max-sm:py-5">
            <div className="mb-4 flex max-[350px]:flex-col justify-between max-sm:mb-2.5">
                <h1 className="text-4xl font-novaReg my-auto max-md:text-3xl max-sm:font-novaSemi max-sm:text-xl">Residential Facilities</h1>
                <button className="max-[350px]:mt-1 bg-black w-fit text-white hover:bg-white hover:text-black hover:border hover:bordgra py-2 px-6 rounded-3xl max-sm:text-xs max-sm:py-1 max-sm:px-3 max-sm:leading-tight"> Hostel Manual 2024 </button>
            </div>
            <p className="max-[350px]:mt-5 text-base mb-4 text-gray-600 max-md:mb-3 max-sm:text-sm max-sm:mb-2.5 text-justify">
                AKG University offers on-campus accommodation to students, fostering a supportive and inclusive residential community. Hostels are available on a first-come, first-served basis and provide comfortable lodging and dining facilities for both male and female students. Each hostel is managed by dedicated wardens and faculty supervisors who prioritize the well-being and safety of residents, ensuring a well-rounded living experience with all necessary amenities to support students' academic and personal growth.
            </p>
            <p className="text-base mb-6 text-gray-600 max-xl:mb-4 max-md:mb-3 max-sm:text-sm max-sm:mb-2.5 text-justify">
                AKG University organizes a diverse array of cultural, athletic, and social events to enrich students' campus life. Beyond the various interactive spaces on campus, each hostel features well-equipped common rooms where students can gather for daily interactions, fostering camaraderie and a sense of community.
            </p>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 max-lg:gap-4 max-md:gap-3 max-sm:gap-3">
                {hostels.map((hostel, index) => (
                    <div key={index} className="bg-white rounded-lg group flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:scale-95 hover:shadow-xl">
                        <img
                            src={hostel.img}
                            alt={hostel.title}
                            className="w-full h-48 object-cover rounded-xl object-center mb-6 max-md:mb-3 max-sm:mb-3"
                        />
                        <div className="px-4 max-sm:px-2.5">
                            <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-500 max-sm:text-base">{hostel.title}</h2>
                            <div className="w-0 group-hover:w-full transition-all duration-300 ease-linear h-0.5 bg-blue-300 mb-2 max-sm:mb-1.5"></div>
                        </div>
                        <p className="text-sm p-4 max-md:p-3 max-sm:p-2.5 text-justify">{hostel.desc}</p>
                        <div className="flex justify-between p-2 max-sm:p-2.5">
                            <button className="hover:text-blue-400">Read More</button>
                            <button className="text-base border border-blue-400 px-5 py-1.5 rounded-3xl hover:bg-blue-500 max-sm:px-3 max-sm:text-sm">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResidentialFacilities;