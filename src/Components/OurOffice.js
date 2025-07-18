import React from 'react'
import { Globe, GraduationCap,  MapPin, PlaneTakeoff } from "lucide-react";

const prog = [
    {
        title: "INTERNATIONAL SUMMER/WINTER PROGRAMS",
        description: "Short duration programs of 2-4 weeks designed to provide international exposure and cultural immersion.",
        icon: Globe,
    },
    {
        title: "SEMESTER ABROAD/EXCHANGE PROGRAMS",
        description: "Complete a semester abroad to enhance your educational experience and expand your global network.",
        icon: PlaneTakeoff,
    },
    {
        title: "HIGHER EDUCATION PROGRAMS",
        description: "Opportunities for visiting international universities for advanced study and research.",
        icon: GraduationCap,
    },
    {
        title: "GLOBAL IMMERSION PROGRAMS",
        description: "Gain professional experience through attachments with multinational companies abroad.",
        icon: Globe,
    },
    {
        title: "INTERNATIONAL PLACEMENTS",
        description: "Top global companies recruit from AKG University, providing excellent placement opportunities for students.",
        icon: MapPin,
    },
];

const OurOffice = () => {
    return (
        <section className="bg-BG16 bg-blend-multiply bg-primary bg-cover bg-center">
            <div className="max-w-7xl mx-auto px-3 py-32 sm:px-6 lg:px-8 relative max-sm:py-20">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-4xl font-novaBold text-center mb-2 text-secondary max-md:text-3xl max-sm:text-2xl"> OUR OFFICE OF INTERNATIONAL RELATIONS </h1>
                    <p className="text-xl text-center mb-12 text-secondary">offers exclusive opportunities to explore the world</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {prog.map((prog, index) => (
                            <div key={index} className={`bg-white bg-opacity-90 rounded-lg shadow-lg p-6 ${index === 1 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                                <prog.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{prog.title}</h2>
                                <p className="text-gray-600">{prog.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurOffice