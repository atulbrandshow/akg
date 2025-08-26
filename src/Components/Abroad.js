"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Landmark, Lightbulb, GraduationCap } from "lucide-react";

const features = [
    { icon: <BookOpen className="w-12 h-12" />, title: "Degree with International Recognition" },
    { icon: <Landmark className="w-12 h-12" />, title: "Work Permit after Graduation" },
    { icon: <Lightbulb className="w-12 h-12" />, title: "High Visa Success rate" },
    { icon: <GraduationCap className="w-12 h-12" />, title: "Enhanced Employability" },
    { icon: <BookOpen className="w-12 h-12" />, title: "Degree with International Recognition" },
    { icon: <Landmark className="w-12 h-12" />, title: "Work Permit after Graduation" },
    { icon: <Lightbulb className="w-12 h-12" />, title: "High Visa Success rate" },
    { icon: <GraduationCap className="w-12 h-12" />, title: "Enhanced Employability" },
];

const Abroad = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerView = 4;

    const nextFeature = () => {
        setActiveIndex((prev) => (prev + itemsPerView >= features.length ? 0 : prev + 1));
    };

    const prevFeature = () => {
        setActiveIndex((prev) => (prev - 1 < 0 ? features.length - itemsPerView : prev - 1));
    };

    const visibleFeatures = features.slice(activeIndex, activeIndex + itemsPerView);
    const displayFeatures = visibleFeatures.length < itemsPerView ? [...visibleFeatures, ...features.slice(0, itemsPerView - visibleFeatures.length)] : visibleFeatures;

    return (
        <section className="bg-white py-12 text-center">
            {/* Text section with max-w-7xl */}
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-2">Dreaming of studying abroad?</h2>
                <p className="text-gray-600 mb-6">Under Chandigarh University's International Transfer Program (ITP), you can also choose to pursue your degree in a top-notch college or university abroad.</p>
                <p className="text-gray-500 mb-4">Study Abroad Programs offered in the following Countries</p>
                <p className="text-gray-400 text-sm mb-6">(Students can save 1 year of tuition fees in Dollars and still get an international degree through this programme.)</p>

                {/* Flags */}
                <div className="flex justify-center gap-4 mb-8">
                    {["/flags/canada.png", "/flags/usa.png", "/flags/australia.png", "/flags/italy.png", "/flags/uk.png", "/flags/nz.png", "/flags/france.png"].map((flag, i) => (
                        <img key={i} src={flag} alt="flag" className="w-10 h-6 object-cover rounded shadow" />
                    ))}
                </div>
            </div>

            {/* Features section with full 1500px width */}
            <div className="max-w-[1500px] mx-auto px-4">
                <div className="flex items-center gap-4">
                    {/* Left Arrow */}
                    <button onClick={prevFeature} className="p-2 hover:bg-gray-200 rounded-full shrink-0">
                        <ArrowLeft />
                    </button>

                    {/* Features Grid */}
                    <div className="grid grid-cols-4 gap-6 w-full">
                        {displayFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center gap-2 p-4 transition-all duration-300 bg-gray-50 rounded-lg w-full">
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
        </section>
    );
};

export default Abroad;
