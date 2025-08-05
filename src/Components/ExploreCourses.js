import { IMAGE_PATH } from "@/configs/config";
import Link from "next/link";

export default function ExploreCourses({ data }) {
    const d = data?.pageData;

    const words = d?.Courses_Title?.trim().split(" ");
    const last = words?.pop();
    const first = words?.join(" ");

    const stats = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`CST-${i}`];
        const description = d?.[`CSD-${i}`];

        if (title && description) {
            stats.push({
                title,
                description
            });
        }
    }

    const posts = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`CCT-${i}`];
        const description = d?.[`CCD-${i}`];
        const image = d?.[`CCI-${i}`];
        const link = d?.[`CCL-${i}`];

        if (title && description && image && link) {
            posts.push({
                title,
                description,
                image,
                title,
                link
            });
        }
    }

    return (
        <section className="bg-primary py-10 sm:py-16 md:py-20">
            <div className="break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <h2 className="text-[42px] max-lg:text-4xl max-md:text-3xl font-novaLight text-center tracking-tight">
                    {first} {" "} <span className='font-novaSemi bg-gradient-to-r from-red-300 to-teal-500 bg-clip-text text-transparent animate-gradient'>{last} </span>
                </h2>
                <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-[22px] leading-snug text-gray-200 mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-screen-lg font-novaLight text-center">
                    {d?.Courses_Desc}
                </p>

                <div className="my-5 mx-auto max-w-6xl">
                    <dl className="grid grid-cols-2 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {stats?.map((stat, index) => (
                            <div key={index} className="mx-auto flex max-w-xs flex-col py-4">
                                <dd className="order-first text-2xl sm:text-3xl md:text-4xl font-novaLight tracking-tight">
                                    {stat.title}
                                </dd>
                                <dt
                                    className="text-xs sm:text-sm max-w-32 leading-none font-novaReg mt-1"
                                >{stat.description}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5 " >
                    {posts?.map((post, index) => (
                        <article key={index} className="relative bg-gray-900 rounded-lg shadow-md overflow-hidden">
                            <img
                                alt="Course"
                                src={IMAGE_PATH + post.image}
                                className="h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] w-full object-cover"
                            />
                            <div className="bg-white p-4 h-full ">
                                <div className="flex flex-col ">
                                    <div className="h-16 max-xl:h-24 max-md:h-12">
                                        <h3 className="text-sm md:text-base lg:text-lg font-novaBold text-gray-900">
                                            {post.title}
                                        </h3>
                                        <p
                                            className="text-xs md:text-sm font-novaSemi text-gray-800"
                                        >{post.description}</p>

                                    </div>
                                    <Link
                                        href={post.link}
                                        className="mt-1 text-[12px] sm:text-[13px] md:text-[14px] uppercase font-novaBold text-secondary hover:text-[#3c5686] duration-300 self-end"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>

    )
}
