import React from 'react'

const posts = [
    {
        id: 1,
        title: "Robotics Lab",
        href: "#",
        imageUrl: "/image/article/ECEProjectLab1.webp",
    },
    {
        id: 2,
        title: "Artificial Intelligence Lab",
        href: "#",
        imageUrl: "/image/article/ECEProjectLab2.webp",
    },
    {
        id: 3,
        title: "Data Science Lab",
        href: "#",
        imageUrl: "/image/article/ECEProjectLab3.webp",
    },
];

const ResearchFacility = () => {
    return (
        <section className="max-w-7xl mx-auto px-3 py-8">
            <div className="max-w-lg mx-auto">
                <div className="w-full">
                    <h2 className="text-3xl text-center font-novaBold mb-2">Advanced Research Facilities at AKG University</h2>
                    <p className="text-lg text-gray-400 text-center font-novaReg mb-3">
                        Featuring state-of-the-art laboratories and industry-supported Centers of Excellence, AKG University fosters an ideal environment for innovative engineering education and research.
                    </p>
                </div>
            </div>
            <div className="my-10 grid grid-cols-3 max-md:grid-cols-1 gap-1">
                {posts?.map((post) => (
                    <article key={post.id} className=" flex flex-col items-start justify-between">
                        <div className="relative w-full">
                            <div className='h-72 w-full'>
                                <img alt="" src={post.imageUrl} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex justify-between items-center px-5 py-4 w-full bg-primary cursor-pointer hover:text-[#fecc00]">
                                <h3 className="relative font-novaBold text-xl leading-6 text-white hover:text-[#fecc00]">
                                    <a href={post.href} className="hover:text-[#fecc00]">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <a href={post.href} className="text-base font-bold text-white hover:text-[#fecc00]">
                                    Read More &#8594;
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ResearchFacility