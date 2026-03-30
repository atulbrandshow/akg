import React from 'react';
import { Cpu, Layers, Globe, Shield, Zap, Database, Brain, Laptop, Settings, Network, ArrowRight } from 'lucide-react';
import { splitTitle } from '@/utills/splitTitle';
import Link from 'next/link';

const ProgramSpecializationCards = ({ data }) => {
    const d = data?.pageData;
    if (!d) return null;

    const { first, middle, last } = splitTitle(d?.["spe-heading"] || d?.Specialization_Title || "Our Specializations");

    const icons = [Cpu, Layers, Globe, Shield, Zap, Database, Brain, Laptop, Settings, Network];

    let specs = [];
    for (let i = 1; i <= 15; i++) {
        const title = d?.[`spe-title_${i}`];
        const description = d?.[`spe-desc_${i}`];
        const link = d?.[`spe-link_${i}`];
        if (title) {
            const IconComponent = icons[(i - 1) % icons.length];
            specs.push({
                title,
                description: description || "",
                link: link || "#",
                icon: <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            });
        }
    }

    // Default dummy data if no specs found
    if (specs.length === 0) {
        specs = [
            {
                title: "Artificial Intelligence",
                description: "Master the future of intelligent systems and machine learning technologies.",
                link: "/specialization-details?spec=artificial-intelligence",
                icon: <Brain className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            },
            {
                title: "Data Science",
                description: "Learn to extract actionable insights from complex datasets and big data.",
                link: "/specialization-details?spec=data-science",
                icon: <Database className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            },
            {
                title: "Cyber Security",
                description: "Protect digital infrastructure and defend against global cyber threats.",
                link: "/specialization-details?spec=cyber-security",
                icon: <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            },
            {
                title: "Cloud Computing",
                description: "Build scalable and resilient cloud-native architectures for the modern web.",
                link: "/specialization-details?spec=cloud-technology",
                icon: <Globe className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            }
        ];
    }

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                     <h1 className="text-[42px] font-novaReg max-lg:text-4xl max-md:text-3xl text-gray-700">
                        {first} {" "}
                        <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                            {middle} {" "}
                        </span>
                        {last}
                    </h1>
                    {(d?.["spe-sub-title"] || d?.Specialization_Description) && (
                        <p className="mt-4 text-gray-600 font-novaReg text-lg max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: d?.["spe-sub-title"] || d?.Specialization_Description }} />
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specs.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <div 
                                className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:bg-blue-900 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
                            >
                                <div className="mb-6 inline-block p-4 bg-blue-50 rounded-xl group-hover:bg-blue-800 transition-colors duration-300 w-fit">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-novaSemi mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-novaReg group-hover:text-blue-100 transition-colors duration-300 mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-blue-600 group-hover:text-white font-novaSemi text-sm transition-colors duration-300">
                                    <span>Learn More</span>
                                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramSpecializationCards;
