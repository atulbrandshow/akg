import { LogoSlider } from "@/Components";
import ContactIncubator from "@/Components/ContactIncubator";
import { Play } from "lucide-react";

const event = [
    {
        date: 'October 15-16, 2024',
        desc: 'Webinar on Innovation in Technology and Business at AKG University',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="60"
                height="48"
                className="text-primary fill-[#ffffff]"
            >
                <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm-7 7a2 2 0 100 4 2 2 0 000-4zm0 7a2 2 0 100 4 2 2 0 000-4zm14-7a2 2 0 100 4 2 2 0 000-4zm0 7a2 2 0 100 4 2 2 0 000-4zm-7-3a2 2 0 100 4 2 2 0 000-4zm2-2h-4v-4h4v4zm-4 2h4v4h-4v-4z" />
            </svg>
        )
    },
    {
        date: 'October 5, 2024',
        desc: 'Workshop on Business Development Strategies at AKG University',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="60"
                height="48"
                className="text-red-500 fill-[#000000]"
            >
                <path d="M12 2a9.93 9.93 0 00-7.07 2.93A9.93 9.93 0 002 12c0 2.77 1.12 5.29 2.93 7.07A9.93 9.93 0 0012 22c2.77 0 5.29-1.12 7.07-2.93A9.93 9.93 0 0022 12c0-2.77-1.12-5.29-2.93-7.07A9.93 9.93 0 0012 2zm0 2c2.21 0 4.21.89 5.66 2.34A7.938 7.938 0 0120 12h-8V4zm-6 8a8.013 8.013 0 011.34-4.66L12 12H4zm0 2h8v8a7.938 7.938 0 01-5.66-2.34A7.938 7.938 0 014 14zm10 6v-8h6a8.013 8.013 0 01-1.34 4.66A7.938 7.938 0 0114 20z" />
            </svg>
        )
    },
    {
        date: 'September 28, 2024',
        desc: 'National Entrepreneurship Summit at AKG University',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="60"
                height="48"
                className="text-red-500 fill-[#ffffff]"
            >
                <path d="M12 2c-4.42 0-8 3.58-8 8 0 3.87 2.75 7.06 6.37 7.81.2-.13.43-.23.68-.29a4.992 4.992 0 014.9 2.2A8.013 8.013 0 0020 10c0-4.42-3.58-8-8-8zm-.5 8H9V9h1.5v1zm4.5 0h-1.5V9H16v1zm-6 4.5h1v-1H10v1zm6 0h-1v-1h1v1zm1-3.5H8V9h8v1.5z" />
            </svg>
        )
    }
];

const supportItems = [
    {
        title: '12 Months of Mentorship',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 8 14" /></svg>)
    },
    {
        title: 'Initial Funding Opportunities',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>)
    },
    {
        title: 'Networking Events with Investors',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>)
    },
    {
        title: 'Access to Microfinance Schemes',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>)
    },
    {
        title: 'Product Development Grants',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-search"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /><circle cx="18.5" cy="15.5" r="2.5" /><path d="M20.27 17.27 22 19" /></svg>)
    },
    {
        title: 'Co-working Space Facilities',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>)
    },
    {
        title: 'Research and Development Support',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-binoculars"><path d="M10 10h4" /><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" /><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" /><path d="M 22 16 L 2 16" /><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" /><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" /></svg>)
    },
    {
        title: 'Access to Government Grants',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>)
    },
];

const TechnologyBusinessIncubator = () => {
    return (
        <>
            <section className="bg-BG31 h-screen bg-no-repeat bg-cover flex justify-center items-center bg-black bg-blend-darken bg-opacity-60">
                <div className="max-w-[1400px] px-3">
                    <div className="flex">
                        <div className="w-3/4 px-3">
                            <div className="w-2/3">
                                <span className="font-novaReg text-2xl text-white block w-full">AKG University</span>
                                <h3 className="text-6xl text-white font-novaBold mb-6">INNOVATION HUB</h3>
                                <p className="text-base font-novaReg text-white mb-7">
                                    Backed by the National Science and Technology Entrepreneurship Development Board (NSTEDB)
                                    Initial Funding through the National Initiative for Developing and Harnessing Innovations (NIDHI SSS)
                                </p>
                                <a href="#" className="bg-secondary text-white p-4 hover:bg-red-600 transition duration-200 cursor-pointer">
                                    <span className="text-base font-novaSemi">Contact Us</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-1/4 flex items-center justify-center">
                            <button className="bg-red-500 rounded-full p-4 hover:bg-red-600 transition duration-300">
                                <Play className="w-8 h-8 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-[1400px] mx-auto px-3 -mt-32">
                    <div className="flex justify-between gap-7">
                        {event.map((e, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-full md:w-1/3 bg-gradient-to-r from-blue-600 to-violet-600 text-white p-6 rounded-lg shadow-lg group my-8"
                            >
                                <div className="flex items-center mb-5 ">
                                    <div className="mr-3 transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
                                        {e.icon}
                                    </div>
                                    <h4 className="text-lg font-novaBold">{e.date}</h4>
                                </div>
                                <p className="text-base font-novaReg">{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-[1400px] mx-auto px-3 my-12">
                <div className="flex">
                    <div className="w-6/12 px-3">
                        <img
                            src="/image/tbi/ai.jpg"
                            alt="AI"
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="px-3 w-6/12">
                        <div className="mb-11">
                            <span className="mb-3 text-red-500 text-base text-center font-novaReg block w-full">
                                About
                            </span>
                            <h3 className="w-full h-fit text-center text-4xl font-novaBold">AKG University Innovation Hub</h3>

                        </div>
                        <div className="ml-7">
                            <h3 className="mb-7 text-2xl font-novaSemi">AKG University is dedicated to fostering a culture of job creation. We nurture inquisitive minds, enabling them to transform ideas into successful businesses.</h3>
                            <p className="text-base font-novaReg">The AKG University Innovation Hub aims to develop entrepreneurial skills, promote self-employment, and facilitate product development and manufacturing in alignment with the social objectives of the Government of India. This innovative platform empowers individuals in the region to launch their own ventures. Our primary focus is to invigorate entrepreneurship within academia through cutting-edge innovation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-BG30 items-center py-24 bg-indigo-950 bg-blend-multiply bg-opacity-60">
                <div className="max-w-[1400px] mx-auto px-3">
                    <div className="mb-6">
                        <h2 className="text-center text-3xl text-white font-bold mb-8">Support</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h4 className="text-lg font-semibold text-center">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full pt-24 pb-14">
                <div className="overflow-hidden">
                    <div className="flex w-full">
                        <div className="w-6/12 h-full items-end flex flex-col justify-center px-4 lg:px-0">
                            <div className="max-w-2xl px-3">
                                <div className="mb-8">
                                    <span className="text-red-600 font-novaBold block mb-4">AKG University Innovation Hub</span>
                                    <h1 className="text-3xl lg:text-3xl font-novaSemi leading-tight">
                                        At AKG University, we champion a culture of Job Creation' by inspiring and equipping innovative minds to turn their ideas into successful ventures.
                                    </h1>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <div className="px-3 border bg-gradient-to-r from-blue-600 to-violet-600">
                                        <div className="flex p-5 my-3 items-center w-full ">
                                            <span className="text-6xl font-thin text-gray-300 mr-3 w-20 ">01</span>
                                            <p className="text-white">A dedicated platform for fostering creativity and business acumen.</p>
                                        </div>
                                    </div>
                                    <div className="px-3 border bg-gradient-to-r from-blue-600 to-violet-600">
                                        <div className="flex p-5 my-3 items-center w-full">
                                            <span className="text-6xl font-thin text-gray-300 mr-4 w-20">02</span>
                                            <p className="text-white">Over 100 Start-ups launched and 15 Start-ups successfully transitioned to the market.</p>
                                        </div>
                                    </div>
                                    <div className="px-3 border bg-gradient-to-r from-blue-600 to-violet-600">
                                        <div className="flex p-5 my-3 items-center w-full">
                                            <span className="text-6xl font-thin text-gray-300 mr-4 w-20">03</span>
                                            <p className="text-white">Collaborations with industry leaders to provide mentorship and resources for aspiring entrepreneurs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12 px-3">
                            <img
                                src="/image/tbi/thinking.jpg"
                                alt="Business person adjusting tie with city background"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-BG32 bg-fixed bg-center bg-cover h-[60vh] bg-no-repeat bg-black bg-blend-darken bg-opacity-50">
                <div className="max-w-7xl mx-auto flex justify-center items-center h-full">
                    <div className="text-center w-8/12 text-white">
                        <h3 className="text-5xl font-novaSemi mb-2">Rabindranath Tagore<br /> Innovation Summit</h3>
                        <p className="text-lg font-novaReg">
                            The Tagore Institute organizes an annual three-month-long innovation summit to inspire creativity and artistic expression among students across various disciplines. Guided by the philosophy of “Inspire to Create,” this summit provides a vibrant platform where students can explore, experiment, and bring their innovative ideas to life through collaborative projects and artistic endeavors. Participants engage in workshops, discussions, and mentorship sessions, fostering a spirit of creativity rooted in Tagore’s belief in the interconnectedness of art and science. The summit culminates in the prestigious Rabindranath Tagore Innovation Awards, recognizing the most innovative and impactful projects, celebrating the contributions of youth to the realms of art, literature, and technology.
                        </p>
                    </div>
                </div>
            </section>

            <LogoSlider />
            <ContactIncubator />
        </>
    );
};

export default TechnologyBusinessIncubator;
