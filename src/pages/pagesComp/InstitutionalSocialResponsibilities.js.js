import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Recycle, Users, School, HandHeart, Building2, Rocket } from "lucide-react";

const initiatives = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
        title: "Membership in United Nations Academic Impact (UNAI) supporting global education and sustainability goals",
    },
    {
        icon: <Recycle className="w-10 h-10 text-green-600" />,
        title: "“Future Forward: Sustainability Club” engaging students in climate action, renewable energy, and waste reduction projects",
    },
    {
        icon: <Rocket className="w-10 h-10 text-green-600" />,
        title: "Samriddhi Pravaah initiative promoting resource sharing and circular economy principles within the campus",
    },
    {
        icon: <HeartHandshake className="w-10 h-10 text-green-600" />,
        title: "Blood donation camps and health awareness drives benefiting local communities",
    },
    {
        icon: <School className="w-10 h-10 text-green-600" />,
        title: "Adoption and support of municipal and primary schools, including provision of infrastructure and educational resources",
    },
    {
        icon: <Users className="w-10 h-10 text-green-600" />,
        title: "Anti-ragging awareness campaigns promoting safe and inclusive campus culture",
    },
    {
        icon: <Building2 className="w-10 h-10 text-green-600" />,
        title: "Regular community outreach programs aligned with national campaigns like Swachh Bharat Abhiyan (Clean India Mission)",
    },
    {
        icon: <HandHeart className="w-10 h-10 text-green-600" />,
        title: "Skill development and Entrepreneurship programs targeting underprivileged youth",
    },
];

function InstitutionalSocialResponsibilities() {
    return (
        <section className="py-10">
            <div className="max-w-[1300px] mx-auto px-6">
                {/* Header Section */}
                <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-700 leading-relaxed text-lg text-justify"
                    >
                        AKG University embraces Institutional Social Responsibility (ISR) as a vital part of its mission
                        to nurture not only skilled professionals but also socially conscious citizens. The university
                        actively engages students and faculty in initiatives that promote sustainability, community
                        welfare, and ethical leadership. Through awareness campaigns, environmental programs, and
                        outreach efforts, AKG University fosters a culture of empathy, responsibility, and positive
                        societal impact.
                    </motion.p>
                </div>

                {/* Initiatives Grid */}
                <h2 className="text-2xl font-semibold text-green-700 mb-8 text-center">
                    Key Social Responsibility Initiatives
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {initiatives.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-green-100"
                        >
                            <div className="flex items-center mb-4 space-x-4">
                                <div className="bg-green-100 p-3 rounded-full">{item.icon}</div>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed text-justify">{item.title}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow">
                        These initiatives demonstrate AKG University’s commitment to embedding social responsibility at
                        the core of its educational environment and making a meaningful difference in society.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default InstitutionalSocialResponsibilities;
