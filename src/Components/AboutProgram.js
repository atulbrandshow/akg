import { IMAGE_PATH } from '@/configs/config';
import { splitTitle } from '@/utills/splitTitle';
import { BookMarked, Calendar, HandCoins, History, Brain, Users, Microscope, BookOpen, Laptop2, GraduationCap } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

const AboutProgram = ({ data }) => {
    const d = data?.pageData;
    const { first, middle, last } = splitTitle(d?.About_Title);

    const icons = [History, BookMarked, HandCoins, Users, Calendar, Brain, Microscope, BookOpen, Laptop2, GraduationCap]

    const aboutData = [];
    for (let i = 1; i <= 10; i++) {
        const lable = d?.[`ACT-${i}`];
        const value = d?.[`ACD-${i}`];

        if (lable && value) {
            const IconComponent = icons[i % icons.length];
            aboutData.push({
                icon: <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />,
                lable,
                value
            });
        }
    }
    return (d?.About_Title || d?.About_Description || d?.About_Image || aboutData.length > 0) && (
        <section className='bg-white h-full flex items-center justify-center'>
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h1 className="text-[42px]  font-novaBold max-lg:text-4xl max-md:text-3xl text-gray-800">
                            {first}{" "}
                            <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                                {middle}{" "}
                            </span>
                            {last}
                        </h1>

                        <div className="max-sm:mt-3 space-y-6 text-gray-700">
                            <p className="leading-relaxed max-sm:text-sm font-novaReg text-justify" dangerouslySetInnerHTML={{ __html: d?.About_Description }} />
                        </div>
                    </div>

                    {d?.About_Image && (
                        <div className="order-1 md:order-2">
                            <Image
                                src={IMAGE_PATH + d?.About_Image}
                                alt="Professional educator with tablet"
                                className="w-full h-auto rounded-lg shadow-lg"
                                width={600}
                                height={400}
                            />
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                    {aboutData?.map((item, index) => (
                        <div
                            key={index}
                            className=" flex items-center justify-center flex-col rounded-tr-3xl py-4 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md"
                        >
                            <div className="mb-2">{item.icon}</div>
                            <h3 className="text-gray-100 font-novaSemi text-sm mb-1">{item.lable}</h3>
                            <p className="text-gray-300 font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutProgram