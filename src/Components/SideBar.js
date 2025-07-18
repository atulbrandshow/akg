"use client";

import { useRouter } from 'next/navigation';

const SideBar = ({ title, LinkList }) => {
    const router = useRouter();
    return (
        <section >
            <div className="rounded-xl overflow-hidden bg-indigo-900 text-white w-full">
                <ul>
                    <div className="flex justify-start">
                        <img
                            src="/image/top-nav.jpg"
                            alt="side-bar-image"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-novaReg pl-6 p-4 max-lg:p-5">Quick Link</h2>
                        {/* <h2 className="text-2xl font-novaReg pl-6 p-4 max-lg:p-5">{title}</h2> */}
                        <div>
                            {LinkList?.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => router.push(item.link)}
                                    className="relative border-b p-4 max-lg:p-4 block bg-indigo-950 text-white text-left text-sm w-full group overflow-hidden"
                                >
                                    <span className="relative pl-2 z-10 transition-colors duration-500 ease-in-out truncate group-hover:text-white">
                                        ‒&nbsp; {item.name}
                                    </span>
                                    <span className="absolute inset-0 bg-indigo-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                </button>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
}

export default SideBar;