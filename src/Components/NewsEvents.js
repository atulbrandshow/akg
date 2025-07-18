const posts = [
    {
        id: 1,
        title: 'AICRA 2020 Awards',
        href: '#',
        description:
            'AKGU has been honored with STEM Award-2020 under India STEM College Award 2020 and Best Robolab Setup during 3rd edition of STEM Contribution Awards & Summit -2020 organized by the All India Council for Robotics & Automation (AICRA) India on 13 February, 2020.',
        imageUrl:
            '/image/spotlight/Stem2.jpg',

    },
    {
        id: 2,
        title: '“30Hacks” Hackathon organised by Hitachi x GlobalLogic',
        href: '#',
        description:
            'Team VidyutKavach from Ajay Kumar Garg University was recently selected to participate in the “30Hacks" Hackathon organized by Hitachi x GlobalLogic. The event took place on March 14th and 15th, 2024.',
        imageUrl:
            '/image/spotlight/Vidyut1.jpg',

    },
    // More posts...
]


export default function NewsEvents() {
    return (
        <div className="bg-gray-100/50 py-10 relative">
            <div className="">

                <div className="bg-[#ebebeb] h-[70%] w-full absolute top-0 left-0 -z-10"></div>
                <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-novaLight text-center text-gray-700">
                    Spotlight of <span className='font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient'>Success</span>!
                </h2>
                <p className="mt-5 text-2xl max-lg:xl max-md:text-lg font-novaLight text-center max-w-screen-lg max-sm:px-2 mx-auto text-gray-700">
                    From our students clinching global honors to the university soaring in national and international rankings,
                    our triumphs consistently illuminate our path in the spotlight.
                </p>
                <div className="break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto py-10 ">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 max-sm:px-2">
                        <div className="col-span-1 rounded-xl mr-5 max-lg:mr-0 border border-gray-200 hover:shadow-lg bg-white ">
                            <img
                                alt=""
                                src="/image/spotlight/CFC4.jpeg"
                                className="w-full rounded-xl bg-gray-50 object-cover lg:aspect-auto lg:h-80 md:h-64"
                            />
                            <div className="p-8">
                                <h2 className="text-2xl leading-none font-novaLight">Foundation Stone Laying Ceremony by Hon’ble Chief Minister
                                </h2>
                                <p className="text-base leading-none font-novaLight text-justify mt-5">
                                    The UP government’s One District, One Product (ODOP) Programme aims to improve development and production of indigenous and specialized products. Ghaziabad is identified as a hub for manufacturing of General Engineering Products. Many of these manufacturers are small and medium industries that need modernization, machinery and productivity enhancement.
                                </p>
                                <button type="button" className="text-base bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent font-novaBold mt-10 " >
                                    Read More ►
                                </button>
                            </div>
                        </div>
                        <div className="col-span-1 ml-5 max-lg:ml-0 ">
                            <div className="grid grid-cols-1 gap-y-5 h-full">
                                {posts?.map((post) => (
                                    <article key={post.id} className="relative h-full isolate flex flex-col gap-4 lg:flex-row border border-gray-200 hover:shadow-lg rounded-lg overflow-hidden bg-white">
                                        <div className="mb-4 relative aspect-[16/12] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 h-full">
                                            <img
                                                alt=""
                                                src={post.imageUrl}
                                                className="absolute h-full w-full object-cover"
                                            />

                                        </div>
                                        <div className="flex flex-col justify-between h-full p-5 ">
                                            <div className="group relative">
                                                <h3 className="text-2xl font-novaLight leading-none">
                                                    {post.title}
                                                </h3>
                                                <p className="text-base leading-none font-novaLight mt-5">
                                                    {post.description}
                                                </p>
                                                <button
                                                    type="button"
                                                    className="text-sm font-bold mt-10 bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent"
                                                >
                                                    Read More ►
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
