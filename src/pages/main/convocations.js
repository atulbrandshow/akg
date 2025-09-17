import Card from '@/Components/Card';
import EventTabs from '@/Components/EventTabs';

const convocationData = [
    {
        img: '/image/convocation/Convocation2024_1.jpg',
        title: 'Bachelor of Science in Economics',
        desc: 'A program dedicated to understanding economic theories and practices.'
    },
    {
        img: '/image/convocation/Convocation2024_2.jpg',
        title: 'Bachelor of Fine Arts (BFA)',
        desc: 'Explores creativity and artistic expression in various mediums.'
    },
    {
        img: '/image/convocation/Convocation2024_3.jpg',
        title: 'Bachelor of Environmental Science',
        desc: 'Focuses on ecological principles and environmental sustainability.'
    },
    {
        img: '/image/convocation/Convocation2024_4.jpg',
        title: 'Bachelor of Science in Data Science',
        desc: 'An in-depth study of data analysis, statistics, and machine learning.'
    },
    {
        img: '/image/convocation/Convocation2024_5.jpg',
        title: 'Diploma in Culinary Arts',
        desc: 'A hands-on program for students passionate about the culinary world.'
    },
    {
        img: '/image/convocation/Convocation2024_6.jpg',
        title: 'Doctor of Philosophy in Psychology',
        desc: 'A research-driven program for advanced studies in human behavior.'
    },
    {
        img: '/image/convocation/Convocation2024_7.jpg',
        title: 'Doctor of Philosophy in Literature',
        desc: 'Examines global literature and critical analysis techniques.'
    },
    {
        img: '/image/convocation/Convocation2024_8.jpg',
        title: 'Doctor of Philosophy in Sociology',
        desc: 'Researches social dynamics and human interactions within societies.'
    },
    {
        img: '/image/convocation/Convocation2024_9.jpg',
        title: 'Doctor of Philosophy in Education',
        desc: 'Focuses on advancing educational theories and pedagogical research.'
    },
    {
        img: '/image/convocation/Convocation2024_10.jpg',
        title: 'Doctor of Philosophy in Biochemistry',
        desc: 'Explores biochemical processes in living organisms at the molecular level.'
    },
    {
        img: '/image/convocation/Convocation2024_11.jpg',
        title: 'Master of Fine Arts in Painting',
        desc: 'An advanced study in painting techniques and visual expression.'
    },
    {
        img: '/image/convocation/Convocation2024_12.jpg',
        title: 'Master of Architecture (M.Arch)',
        desc: 'Focuses on architectural design, planning, and sustainable building.'
    },
    {
        img: '/image/convocation/Convocation2024_13.jpg',
        title: 'Master of Social Work (MSW)',
        desc: 'Prepares students for careers in social advocacy and support services.'
    },
    {
        img: '/image/convocation/Convocation2024_14.jpg',
        title: 'Bachelor of Business Economics',
        desc: 'Studies the application of economic theory in business environments.'
    },
    {
        img: '/image/convocation/Convocation2024_15.jpg',
        title: 'Bachelor of Agricultural Science',
        desc: 'An introduction to agricultural practices and crop management.'
    },
    {
        img: '/image/convocation/Convocation2024_16.jpg',
        title: 'Bachelor of Science in Biotechnology',
        desc: 'Examines the application of biology in technology and medicine.'
    },
    {
        img: '/image/convocation/Convocation2024_17.jpg',
        title: 'Bachelor of Arts in Communication Studies',
        desc: 'Explores media, communication theories, and public relations.'
    },
    {
        img: '/image/convocation/Convocation2024_18.jpg',
        title: 'Bachelor of Science in Environmental Management',
        desc: 'Focuses on sustainable management of natural resources.'
    },
    {
        img: '/image/convocation/Convocation2024_19.jpg',
        title: 'Master of Science in Cybersecurity',
        desc: 'Studies security measures to protect digital systems and data.'
    },
    {
        img: '/image/convocation/Convocation2024_20.jpg',
        title: 'Master of Arts in International Relations',
        desc: 'An analysis of global politics and international diplomatic relations.'
    },
];

const Convocations = () => {
    return (
        <>
            <section className="relative bg-BG27 bg-center bg-no-repeat bg-cover h-[90vh]">
                <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80' />
                <div className="max-w-7xl mx-auto px-3">
                    <div className="absolute inset-0 flex">
                        <div className="hidden md:block w-1/2 h-full"></div>

                        <div className="w-full md:w-1/2 bg-red-300 opacity-80 h-full flex items-center justify-center flex-col">
                            <div className="max-w-xl px-4 text-center">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-novaReg uppercase mb-3">
                                    Proudly <span className="font-semibold text-white">Graduating</span> Future Leaders
                                </h2>
                                <h6 className="font-novaReg text-lg md:text-xl lg:text-2xl border-y py-2 md:py-3 border-gray-600">
                                    A Day to Celebrate and Reflect on Success
                                </h6>
                                <p className="mt-3 text-sm md:text-base lg:text-lg font-novaSemi">
                                    Celebrating graduates' achievements as they embark on new journeys.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#faf9f6]">
                <div className="max-w-[1400px] mx-auto px-3 py-10">
                    <EventTabs />
                    <div className='grid grid-cols-12 gap-8 py-10 max-sm:gap-4'>
                        {convocationData?.map((event, index) => (
                            <Card key={index} img={event.img} title={event.title} desc={event.desc} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Convocations