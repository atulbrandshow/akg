const build = [
    {
        img: '/image/infrastructure/building-1.webp',
        title: 'AKG University - MBA Building',
        desc: 'The MBA Building is designed to foster innovative business leaders through a rigorous curriculum and practical exposure.'
    },
    {
        img: '/image/infrastructure/building-2.webp',
        title: 'AKG University - BCA Building',
        desc: 'The BCA Building offers state-of-the-art facilities and resources for aspiring computer application professionals.'
    },
    {
        img: '/image/infrastructure/building-3.webp',
        title: 'AKG University - MCA Building',
        desc: 'The MCA Building provides students with cutting-edge technology and comprehensive training in computer science.'
    },
    {
        img: '/image/infrastructure/building-4.webp',
        title: 'AKG University - BTech Building',
        desc: 'The BTech Building is equipped with modern labs and workshops, emphasizing practical learning and industry readiness.'
    },
    {
        img: '/image/infrastructure/building-5.webp',
        title: 'AKG University - MTech Building',
        desc: 'The MTech Building supports advanced research and innovation, providing resources for specialized engineering disciplines.'
    },
    {
        img: '/image/infrastructure/building-6.webp',
        title: 'AKG University - Research Center',
        desc: 'The Research Center focuses on interdisciplinary studies, encouraging collaboration among students and faculty.'
    },
    {
        img: '/image/infrastructure/building-7.webp',
        title: 'AKG University - Library Building',
        desc: 'The Library Building houses extensive collections of books and digital resources, promoting a culture of learning and research.'
    },
    {
        img: '/image/infrastructure/building-1.webp',
        title: 'AKG University - Auditorium',
        desc: 'The Auditorium hosts various academic and cultural events, providing a platform for student expression and engagement.'
    },
    {
        img: '/image/infrastructure/building-2.webp',
        title: 'AKG University - Innovation Hub',
        desc: 'The Innovation Hub encourages entrepreneurial spirit among students, offering incubation support for startups and projects.'
    },
    {
        img: '/image/infrastructure/building-3.webp',
        title: 'AKG University - Student Activity Center',
        desc: 'The Student Activity Center is a vibrant space for extracurricular activities, clubs, and community gatherings.'
    },
    {
        img: '/image/infrastructure/building-4.webp',
        title: 'AKG University - Sports Complex',
        desc: 'The Sports Complex features modern facilities for various sports, promoting physical fitness and teamwork among students.'
    },
    {
        img: '/image/infrastructure/building-5.webp',
        title: 'AKG University - Faculty Building',
        desc: 'The Faculty Building provides a collaborative environment for educators, enhancing teaching quality and academic support.'
    }
];

const Infrastructure = () => {
    return (
        <div className="max-sm:py-4">
            <div className="">
                <h1 className="text-4xl font-novaReg mb-5 max-lg:text-3xl max-md:text-2xl max-md:mb-3 max-sm:text-xl max-sm:mb-2.5 max-sm:font-novaSemi">Infrastructure</h1>
                <p className="text-base font-novaReg mb-4 max-sm:text-sm max-sm:mb-2 text-justify">
                    AKG University is dedicated to providing an exceptional educational experience, equipped with cutting-edge facilities and modern infrastructure. Recognized as one of the leading universities in the region, AKG University strives to meet international standards in education. The university features technologically advanced classrooms that enhance teaching and learning through innovative tools and techniques. Students benefit from spacious, air-conditioned classrooms, Wi-Fi-enabled projectors, collaborative tutorial rooms, extensive libraries, state-of-the-art seminar rooms, and multiple fully equipped auditoriums.
                </p>
                <p className="text-base font-novaReg mb-2 max-sm:text-sm max-sm:mb-2 text-justify">
                    The university's libraries serve as vital resources for students, providing a comprehensive collection of books and digital media, along with audio-visual aids to facilitate learning. AKG University boasts recently renovated hostels, a robust medical support system (including access to nearby hospitals), a modern fitness center, and ample parking facilities for students and faculty. Committed to sustainability, the university maintains a smoke-free environment and actively pursues green initiatives such as solar energy, rainwater harvesting, and recycling programs. Furthermore, the campus is equipped with a thorough security system, including extensive CCTV coverage, ensuring the safety and well-being of all students and staff.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-5 cursor-pointer max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-3 max-sm:grid-cols-1 max-sm:gap-3">
                {build.map((building, index) => (
                    <div key={index} className="bg-white rounded-lg group flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img src={building.img} alt={building.title} className="w-full rounded-xl h-48 object-cover object-center mb-6 max-sm:mb-3" />
                        <div className="mb-2 px-4 max-md:px-3 max-sm:px-2.5">
                            <h2 className="text-lg font-novaBold mb-2 group-hover:text-blue-500 duration-300 transition-all max-sm:text-base">{building.title}</h2>
                            <div className="w-24 h-1 bg-red-300"></div>
                        </div>
                        <p className="text-sm p-4 max-md:p-3 max-sm:p-2.5 text-justify">{building.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Infrastructure;