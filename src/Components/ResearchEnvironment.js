import { IMAGE_PATH } from "@/configs/config";
import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: 'Pursue a Cutting-Edge B.Tech Degree at AKG University',
        href: '#',
        description: 'In today’s technology-driven world, a Bachelor of Technology (B.Tech) degree has become a gateway to numerous exciting career opportunities. AKG University, renowned for its excellence in engineering education, offers a B.Tech program designed to equip students with the skills and knowledge necessary to excel in the competitive tech industry.',
        imageUrl: '/image/lab/User-Manual-AKGEC 1.webp',
        tag1: 'B-TECH',
    },
    {
        id: 2,
        title: 'Advance Your Career with an M.Tech Degree at AKG University',
        href: '#',
        description: 'For engineering graduates looking to specialize and advance their careers, a Master of Technology (M.Tech) degree is an excellent choice. AKG University offers a comprehensive M.Tech program that provides in-depth knowledge and research opportunities in various engineering fields.',
        imageUrl: '/image/lab/User-Manual-AKGEC 6.webp',
        tag1: 'M-TECH',
    },
    {
        id: 3,
        title: 'Master the World of IT with an MCA Degree from AKG University',
        href: '#',
        description: 'In the rapidly evolving field of Information Technology (IT), a Master of Computer Applications (MCA) degree can provide the expertise needed to succeed. AKG University offers an MCA program designed to develop skilled IT professionals who are ready to tackle the challenges of the digital age.',
        imageUrl: '/image/lab/ece-circuit-lab.webp',
        tag1: 'MCA',
    },
];


export default function ResearchEnvironment({ data }) {
    const d = data?.pageData;
    const title = d?.Insight_Title || "";

    const words = title.trim().split(" ");
    const first = words.slice(0, 2).join(" ");
    const last = words.slice(2).join(" ");

    const posts = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`Insight-Title-${i}`];
        const description = d?.[`Insight-Desc-${i}`];
        const image = d?.[`Insight-Image-${i}`];
        const tag = d?.[`Insight-Tag-${i}`];
        const link = d?.[`Insight-Link-${i}`];

        if (title && description && image && tag && link) {
            posts.push({
                title,
                description,
                image,
                title,
                tag,
                link
            });
        }
    }

    return (
        <div className="bg-white">
            <div className="max-w-[1350px] mx-auto py-10 mt-10  ">
                <div className="mx-auto flex justify-center items-center flex-col text-center">
                    <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-novaLight tracking-tight text-gray-700">{first} {" "} <span className='font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient'>{last}</span></h2>
                    <p className="mt-2 text-base md:text-lg lg:text-xl font-novaLight leading-6 text-center w-[80%] max-sm:w-full max-sm:px-3 mb-10">
                        {d?.Insight_Desc}
                    </p>
                </div>
                <div className="mt-10 max-sm:mt-2 grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 max-sm:px-2">
                    {posts?.map((post, index) => (
                        <article key={index} className="border rounded-md flex flex-col items-start justify-between pb-4 hover:shadow-xl">
                            <div className="grid grid-cols-2 gap-x-10 p-4 ml-8 mt-8 md:text-xs font-novaSemi">
                                <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{post.tag}</p>
                            </div>
                            <div className="relative w-full h-80">
                                <Image
                                    alt="Course Image"
                                    src={IMAGE_PATH + post.image}
                                    height={420}
                                    width={420}
                                    className="w-full rounded-lg h-3/4 bg-gray-100 object-cover"
                                />
                            </div>
                            <div className="-mt-10">
                                <h3 className="relative px-8 max-sm:px-2 text-lg font-novaReg leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link href={post.link}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 px-8 max-sm:px-2 mb-8 text-sm font-novaReg text-gray-600">{post.description}</p>
                                <Link
                                    href={post.link}
                                    className="text-sm font-novaBold px-8 max-sm:px-2 text-black hover:pr-2 transition-all duration-300"
                                >
                                    Read More &#8594;
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}