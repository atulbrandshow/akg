"use client";
import { useRouter } from "next/navigation";

const department = [
    {
        img: "/image/lab/ece-circuit-lab.webp",
        link: "/department-of-computer-science-and-engineering",
        text: "School of Computer Science & Engineering",
    },
    {
        img: "/image/lab/User-Manual-AKGEC 4.webp",
        link: "",
        text: "School of Engineering & Applied Science",
    },
    {
        img: "/image/lab/User-Manual-AKGEC 6.webp",
        link: "",
        text: "School of Business Studies",
    },
];

const Departments = () => {
    const router = useRouter();
    return (
        <div className="container mx-auto p-4 max-sm:p-1">
            <h1 className="mb-2.5 text-4xl font-novaReg max-lg:text-3xl max-sm:text-2xl">Best University <br />in India</h1>
            <p className="mt-4 mb-5 text-lg font-novaLight leading-6 text-justify max-lg:text-base max-md:text-base max-sm:text-xs">
                Founded with the goal of inspiring students to engage in learning and achieve success, AKG University stands as a prominent institution in the country, offering a motivating educational atmosphere aimed at preparing students for leadership roles in their careers. From technology to business, AKG University provides a diverse range of specialized programs and opportunities, ensuring students receive a well-rounded education that empowers them to excel in their selected fields.
                <br />
                <br />
                AKG University has gained esteemed recognition for its dedication to educational excellence. Accredited by the National Accreditation Board, it is among the select private university in the region to achieve this status. The institution’s commitment to upholding high academic standards distinguishes it as a frontrunner in engineering education.
                <br />
                <br />
                Ranked among the leading university in the northern part of the country, AKG University is noted for its advanced facilities and robust connections with industry partners that offer students unmatched opportunities. The college boasts impressive placement statistics, with top organizations across various sectors conducting recruitment events. Its commitment to both academic and technical superiority is evident in the accolades and honors received over the years.
                <br />
                <br />
                As one of the premier engineering institutions, AKG University presents a broad spectrum of programs that emphasize practical learning, industry involvement, and innovative research. The college hosts numerous centers of excellence and professional organizations that promote creativity and applied knowledge. With its rigorous academic framework, global collaborations, and outstanding placement outcomes, AKG University is a leader in the field of engineering education. Students gain from an interdisciplinary perspective, technical skills, and the professional outlook essential for thriving in the global marketplace.
            </p>

            <div className="mt-6">
                <h3 className="text-[42px] font-novaLight mb-3 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">Our Departments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {department?.map((department, index) => (
                        <div key={index} className="relative overflow-hidden shadow-lg bg-zinc-700 group">
                            <img src={department.img} alt={department.text} className="w-full h-full object-cover opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 max-sm:h-64" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-950 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <span className="text-lg font-novaBold text-center px-5 mb-4">{department.text}</span>
                                <button onClick={() => router.push(department.link)} className="rounded-md uppercase bg-secondary px-5 py-2.5 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-blue-400">Know More ➜</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
};

export default Departments;
