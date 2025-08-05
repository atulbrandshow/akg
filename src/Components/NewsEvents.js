import { IMAGE_PATH } from "@/configs/config";

export default function NewsEvents({ data }) {
    const d = data?.pageData;
    const words = d?.Spotlight_Title?.trim().split(" ");
    const last = words?.pop();
    const first = words?.join(" ");

    const posts = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`Spotlight-Title-${i}`];
        const description = d?.[`Spotlight-Desc-${i}`];
        const imageUrl = d?.[`Spotlight-Image-${i}`];
        const link = d?.[`Spotlight-Link-${i}`];


        if (title && description && imageUrl && link) {
            posts.push({
                id: i,
                title,
                description,
                imageUrl,
                link
            });
        }
    }


    return (
        <div className="bg-gray-100/50 py-10 relative">
            <div className="">

                <div className="bg-[#ebebeb] h-[70%] w-full absolute top-0 left-0 -z-10"></div>
                <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-novaLight text-center text-gray-700">
                    {first} {" "} <span className='font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient'>{last}</span>
                </h2>
                <p className="mt-5 text-2xl max-lg:xl max-md:text-lg font-novaLight text-center max-w-screen-lg max-sm:px-2 mx-auto text-gray-700">
                    {d?.Spotlight_Desc}
                </p>
                <div className="break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto py-10 ">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 max-sm:px-2">
                        {/* Left Side - First Post */}
                        {posts?.[0] && (
                            <div className="col-span-1 rounded-xl mr-5 max-lg:mr-0 border border-gray-200 hover:shadow-lg bg-white">
                                <img
                                    alt={posts[0].title}
                                    src={IMAGE_PATH + posts[0].imageUrl}
                                    className="w-full rounded-xl bg-gray-50 object-cover lg:aspect-auto lg:h-80 md:h-64"
                                />
                                <div className="p-8">
                                    <h2 className="text-2xl leading-none font-novaLight">
                                        {posts[0].title}
                                    </h2>
                                    <p className="text-base leading-none font-novaLight text-justify mt-5">
                                        {posts[0].description}
                                    </p>
                                    <a
                                        href={posts[0].link}
                                        className="text-base bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent font-novaBold mt-10 inline-block"
                                    >
                                        Read More ►
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Right Side - Remaining Posts */}
                        <div className="col-span-1 ml-5 max-lg:ml-0">
                            <div className="grid grid-cols-1 gap-y-5 h-full">
                                {posts?.slice(1).map((post) => (
                                    <article
                                        key={post.id}
                                        className="relative h-full isolate flex flex-col gap-4 lg:flex-row border border-gray-200 hover:shadow-lg rounded-lg overflow-hidden bg-white"
                                    >
                                        <div className="mb-4 relative aspect-[16/12] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 h-full">
                                            <img
                                                alt={post.title}
                                                src={IMAGE_PATH + post.imageUrl}
                                                className="absolute h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-between h-full p-5">
                                            <div className="group relative">
                                                <h3 className="text-2xl font-novaLight leading-none">
                                                    {post.title}
                                                </h3>
                                                <p className="text-base leading-none font-novaLight mt-5">
                                                    {post.description}
                                                </p>
                                                <a
                                                    href={post.link}
                                                    className="text-sm font-bold mt-10 bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent inline-block"
                                                >
                                                    Read More ►
                                                </a>
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
