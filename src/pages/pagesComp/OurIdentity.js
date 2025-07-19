import React from 'react'
import { Bookmark } from "lucide-react"


const features = [
    {
        title: "The Color Blue",
        description:
            "At AKGU, blue symbolizes knowledge, stability, and trust. It reflects the university’s commitment to fostering a calm yet inspiring environment for learning.",
        bg: "bg-blue-600",
    },
    {
        title: "Globe",
        description:
            "AKGU's global perspective in education is represented by the globe, symbolizing its focus on international collaboration, modern technological advancements, and the adoption of globally recognized academic standards.",
        bg: "bg-cyan-600",
    },
    {
        title: "The Human Chain",
        description:
            "AKGU promotes a strong sense of unity and collaboration through its diverse student body. The human chain symbolizes teamwork, respect for cultural diversity, and a commitment to national unity.",
        bg: "bg-indigo-600",
    },
    {
        title: "The Color Yellow and Black",
        description: "The combination of yellow and black at AKGU signifies balance between creativity and discipline. Yellow stands for optimism, innovation, and the bright future that education at AKGU promises.",
        bg: "bg-yellow-600",
    },
];

const OurIdentity = () => {
    return (
        <section>
            <h1 className="text-4xl max-sm:text-3xl font-novaReg">Official Emblem</h1>
            <div className="py-6 overflow-hidden relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {features.map((item, index) => (
                        <div key={index} className={`w-full bg-gradient-to-r ${item.bg} p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300`}>
                            <h2 className="text-2xl font-novaSemi mb-6 text-white border-b-2 border-indigo-200 pb-2">{item.title}</h2>
                            <p className="text-white text-justify font-novaReg">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2'>
                <h1 className="text-4xl max-sm:text-3xl font-novaReg mt-10 mb-6">How to use the Official Emblem?</h1>
                <ul className="list-disc space-y-2 pl-5 font-novaReg text-justify">
                    <li>The official emblem may not be modified in any way. Its design must remain intact to preserve its significance and visual identity.</li>
                    <li>When the emblem is used alongside the university's name, the designated wordmark "AKG University" should be utilized in its standard format.</li>
                    <li>The emblem should appear only in the official university colors—Blue, Yellow, and Black—maintaining a consistent and professional appearance.</li>
                    <li>Do not crop or rotate the emblem. It must always be displayed in its original orientation.</li>
                    <li>The emblem should never be reduced to a size smaller than ½ inch in diameter, ensuring that all details are visible and legible.</li>
                    <li>Other images or graphics must not be placed on or around the emblem. The emblem should always be presented clearly and without interference from other visual elements.</li>
                </ul>
            </div>
        </section>
    )
}

export default OurIdentity