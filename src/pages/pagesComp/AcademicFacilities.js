const facilityData = [
    {
        title: "Computer Labs",
        image: "/image/academic-facilities/StudentCSELab5.webp",
        description: "AKG University provides state-of-the-art computer labs with the latest technology to support students in IT, engineering, and research work.",
    },
    {
        title: "Seminar Rooms",
        image: "/image/academic-facilities/seminar-room.webp",
        description: "The university features multiple seminar rooms with modern audiovisual equipment to host workshops, conferences, and academic events.",
    },
    {
        title: "Health Care Facilities",
        image: "/image/academic-facilities/health-care-facilities.webp",
        description: "AKG University offers a well-equipped health care center with medical assistance for all students, faculty, and staff.",
    },
    {
        title: "E-learning Rooms (Swayam/MOOCs)",
        image: "/image/academic-facilities/StudentCSEMTechLab.webp",
        description: "Our E-learning rooms provide students with access to the latest digital learning platforms like SWAYAM and MOOCs for interactive education.",
    },
    {
        title: "Recording Studios (Multimedia Development)",
        image: "/image/academic-facilities/ECEProjectLab3.webp",
        description: "AKG University's multimedia development studios offer students a platform to experiment with media projects in arts, film, and animation.",
    }
];

const FacilityCard = ({ title, image, description }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-95 group duration-300 transition-all ease-in-out">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 duration-300 transition-all ease-in-out" />
        <div className="p-4 max-sm:p-3">
            <h3 className="text-lg leading-5 font-novaSemi mb-2 max-sm:text-base group-hover:text-blue-600">{title}</h3>
            <p className="text-sm font-novaReg text-gray-600 text-justify">{description}</p>
        </div>
    </div>
);

const AcademicFacilities = () => {
    return (
        <div className="px-2 py-4 max-sm:py-3">
            <div className="mb-8">
                <h2 className="text-4xl font-novaReg mb-4 max-sm:text-xl max-sm:font-novaSemi max-sm:mb-3">Academic Facilities</h2>
                <p className="text-base my-4 font-novaReg max-sm:text-sm max-sm:my-3 text-justify">
                    AKG University offers a wide range of top-notch academic facilities to support both teaching and research. The classrooms are equipped with modern technology, including ceiling-mounted projectors, and are designed to enhance interactive learning. National and international seminars and workshops are frequently organized to provide students with exposure to the latest industry trends.
                </p>
                <p className="text-base font-novaReg max-sm:text-sm text-justify">
                    The university's auditoriums are equipped with state-of-the-art audiovisual systems, providing the ideal venue for academic presentations and events. AKG University's libraries offer an extensive collection of resources and digital materials. The laboratories are designed to provide hands-on learning experiences and encourage practical experimentation.
                </p>
            </div>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 max-xl:gap-4 max-lg:gap-4 max-md:gap-3 max-sm:gap-3">
                {facilityData.map((facility, index) => (
                    <FacilityCard key={index} {...facility} />
                ))}
            </div>
        </div>
    );
};

export default AcademicFacilities;
