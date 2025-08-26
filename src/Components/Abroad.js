"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Landmark, Lightbulb, GraduationCap, ThumbsUp } from "lucide-react";

const features = [
    {
        icon: <BookOpen className="w-12 h-12" />,
        title: "Degree with International Recognition",
        description: "Earn a globally recognized degree designed to meet international academic standards and boost career opportunities.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Globally accepted curriculum", "Internationally accredited programs", "Opportunities for global exposure"],
    },
    {
        icon: <Landmark className="w-12 h-12" />,
        title: "Work Permit after Graduation",
        description: "Benefit from post-study work permits that allow you to gain valuable international work experience.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Eligible post-study work options", "Practical industry exposure", "Pathway to permanent residency in select countries"],
    },
    {
        icon: <Lightbulb className="w-12 h-12" />,
        title: "High Visa Success Rate",
        description: "Our expert guidance ensures a high visa approval rate for students aspiring to study abroad.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Personalized visa support", "Strong university collaborations", "Proven track record of visa approvals"],
    },
    {
        icon: <GraduationCap className="w-12 h-12" />,
        title: "Enhanced Employability",
        description: "Gain industry-ready skills and global credentials to stand out in the competitive job market.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Industry-aligned curriculum", "Internship and placement support", "Skill development for global careers"],
    },
    {
        icon: <BookOpen className="w-12 h-12" />,
        title: "Degree with International Recognition",
        description: "Earn a globally recognized degree designed to meet international academic standards and boost career opportunities.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Globally accepted curriculum", "Internationally accredited programs", "Opportunities for global exposure"],
    },
    {
        icon: <Landmark className="w-12 h-12" />,
        title: "Work Permit after Graduation",
        description: "Benefit from post-study work permits that allow you to gain valuable international work experience.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Eligible post-study work options", "Practical industry exposure", "Pathway to permanent residency in select countries"],
    },
    {
        icon: <Lightbulb className="w-12 h-12" />,
        title: "High Visa Success Rate",
        description: "Our expert guidance ensures a high visa approval rate for students aspiring to study abroad.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Personalized visa support", "Strong university collaborations", "Proven track record of visa approvals"],
    },
    {
        icon: <GraduationCap className="w-12 h-12" />,
        title: "Enhanced Employability",
        description: "Gain industry-ready skills and global credentials to stand out in the competitive job market.",
        image: "/image/article/ECEProjectLab1.webp",
        key: ["Industry-aligned curriculum", "Internship and placement support", "Skill development for global careers"],
    },
    // ... duplicates as before
];

const Abroad = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedFeature, setSelectedFeature] = useState(features[0]);
    const itemsPerView = 4;

    const nextFeature = () => {
        setActiveIndex((prev) => (prev + itemsPerView) % features.length);
    };

    const prevFeature = () => {
        setActiveIndex((prev) => {
            const newIndex = prev - itemsPerView;
            return newIndex < 0 ? features.length - itemsPerView : newIndex;
        });
    };

    const visibleFeatures = features.slice(activeIndex, activeIndex + itemsPerView);
    const displayFeatures = visibleFeatures.length < itemsPerView ? [...visibleFeatures, ...features.slice(0, itemsPerView - visibleFeatures.length)] : visibleFeatures;

    // Always bring selectedFeature to the first position
    const reorderedFeatures = [selectedFeature, ...displayFeatures.filter((f) => f.title !== selectedFeature.title)];

    return (
        <section className="bg-white py-12 text-center">
            {/* Text Section */}
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-2">Dreaming of studying abroad?</h2>
                <p className="text-gray-600 mb-6">Under Chandigarh University's International Transfer Program (ITP), you can also choose to pursue your degree in a top-notch college or university abroad.</p>
                <p className="text-gray-500 mb-4">Study Abroad Programs offered in the following Countries</p>
                <p className="text-gray-400 text-sm mb-6">(Students can save 1 year of tuition fees in Dollars and still get an international degree through this programme.)</p>
                <div className="flex justify-center gap-4 mb-8">
                    {["/flags/canada.png", "/flags/usa.png", "/flags/australia.png", "/flags/italy.png", "/flags/uk.png", "/flags/nz.png", "/flags/france.png"].map((flag, i) => (
                        <img key={i} src={flag} alt="flag" className="w-10 h-6 object-cover rounded shadow" />
                    ))}
                </div>
            </div>

            {/* Features Carousel */}
            <div className="max-w-[1500px] mx-auto px-4">
                <div className="flex items-center gap-4">
                    {/* Left Arrow */}
                    <button onClick={prevFeature} className="p-2 hover:bg-gray-200 rounded-full shrink-0">
                        <ArrowLeft />
                    </button>

                    {/* Features Grid */}
                    <div className="grid grid-cols-4 gap-6 w-full">
                        {reorderedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedFeature(feature)}
                                className={`flex flex-col items-center gap-2 p-4 transition-all duration-300 bg-gray-50 rounded-lg w-full cursor-pointer hover:shadow-md ${
                                    selectedFeature.title === feature.title && index === 0 ? "border-2 border-red-600" : ""
                                }`}
                            >
                                <div className={`p-4 rounded-full text-white ${index === 0 ? "bg-red-600" : "bg-gray-400"}`}>{feature.icon}</div>
                                <p className={`text-base font-medium text-center ${index === 0 ? "text-red-600" : "text-gray-400"}`}>{feature.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button onClick={nextFeature} className="p-2 hover:bg-gray-200 rounded-full shrink-0">
                        <ArrowRight />
                    </button>
                </div>
            </div>

            {/* Selected Feature Details */}
            {selectedFeature && (
                <div className="max-w-5xl mx-auto mt-10 px-4 flex flex-col md:flex-row items-center gap-8 text-left">
                    <img src={selectedFeature.image} alt={selectedFeature.title} className="w-full md:w-1/2 rounded-lg shadow" />
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-red-600 mb-4">{selectedFeature.title}</h3>
                        <p className="text-gray-600 mb-4">{selectedFeature.description}</p>
                        <ul className="space-y-2">
                            {selectedFeature.key.map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <ThumbsUp className="w-5 h-5 text-green-600 mt-1" />
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Abroad;
