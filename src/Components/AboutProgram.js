import { BookMarked, Calendar, HandCoins, History } from 'lucide-react'
import React from 'react'

const aboutData = [
    {
        icon: <History className='w-8 h-8' strokeWidth={1.5} />,
        label: "Duration",
        value: "4 years"
    },
    {
        icon: <BookMarked className='w-8 h-8' strokeWidth={1.5} />,
        label: "Specialisation",
        value: "18"
    },
    {
        icon: <HandCoins className='w-8 h-8' strokeWidth={1.5} />,
        label: "Credits",
        value: "180"
    },
    {
        icon: <Calendar className='w-8 h-8' strokeWidth={1.5} />,
        label: "Start Date",
        value: "Jul/Aug 2025",
    }
]

const AboutProgram = () => {
    return (
        <section className='bg-gray-300 h-full flex items-center justify-center'>
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h1 className="text-[42px]  font-novaBold max-lg:text-4xl max-md:text-3xl text-gray-800">
                            About{" "}
                            <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                                B.Tech CSE
                            </span>
                        </h1>

                        <div className="max-sm:mt-3 space-y-6 text-gray-600">
                            <p className="leading-relaxed max-sm:text-sm">
                            Department of Computer Science and Engineering at AKG University was formed in 1998 with inception of the college. The Department provides an outstanding research environment complemented by excellence in teaching. Ever since its inception, the department has been a pioneering academic centre for higher education, research, and innovation in key areas of Computer Science. The department provides full support to MTech. scholars in terms dissertation guidance, lab facilities and access to international and national journals.
                            </p>
                            <p className="leading-relaxed max-sm:text-sm">
                            Experienced and senior faculty members are assigned for MTech courses and dissertation work of the scholars. The faculty members and M Tech scholars have published good quality research papers in peer-reviewed and indexed journals and International Conferences in the previous years.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <img
                            src="/image/Programs/students.webp"
                            alt="Professional educator with tablet"
                            className="w-full h-auto rounded-lg shadow-lg"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                    {aboutData?.map((item, index) => (
                        <div
                            key={index}
                            className=" flex items-center justify-center flex-col rounded-tr-3xl py-4 bg-indigo-300 shadow-md"
                        >
                            <div className="mb-2">{item.icon}</div>
                            <h3 className="text-gray-800 font-novaSemi text-sm mb-1">{item.label}</h3>
                            <p className="text-gray-800 font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutProgram