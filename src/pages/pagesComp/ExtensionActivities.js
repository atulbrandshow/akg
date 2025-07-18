"use client";

import React, { useState } from "react";


const activities = [
    {
        id: 1,
        title: "GREEN SHARK TANK 'VASUDHA 2K24'",
        venue: "Mini Seminar Hall",
        date: "23rd April, 2024",
        time: "10:10 AM to 1:30 PM",
        participants: "A total of 12 teams participated in the eco-friendly pitching. Each team comprised of 3 members. Throughout the event, teams presented well researched projects with care for Mother Nature in their young minds. The presence of the esteemed judges (Faculty Members) made the event even more knowledgeable and thought provoking.",
        description: `
        The Value Education Cell of our esteemed institution Ajay Kumar Garg Engineering College, organised ‘Green Shark Tank ‘, on the occasion of International Earth Day (a subevent of Vasudha 2k24) on 23rd April, 2024 to encourage entrepreneurship combined with environmental awareness among our students.
      `,
        topic: " The participants were asked to develop projects on ‘CONSERVATION OF NATURE’. It should have resonated with the idea of HUMAN CONNECTION WITH NATURE.",
        judgingCriteria: [
            "Relevance with respect to topic",
            "Communication Skills",
            "Uniqueness",
            "Feasibility",
            "Future Scope",
            "Business Idea",
            "Scalability",
            "Social impact",
            "Points for bringing prototype"
        ],
        outcome: "The event was a success, providing a platform for students to come up with business ideas combined with sustainability and nature conservation.",
        images: [
            "/image/extension-activities/extension-activities-dropdown-1-img-1.jpg",
            "/image/extension-activities/extension-activities-dropdown-1-img-2.jpg",
            "/image/extension-activities/extension-activities-dropdown-1-img-3.jpg",
        ]
    },
    {
        id: 2,
        title: "Essay Writing 'VASUDHA 2K24'",
        venue: "ME Block",
        date: "22nd April, 2024",
        participants: "The competition witnessed an impressive turnout, with a total of 96 students from various branches participating enthusiastically. This remarkable level of participation underscored the growing concern among the youth regarding environmental sustainability.",
        topic: "Climate change and pollution On 22nd April, 2024, Value Education Cell organized an essay writing competition (a sub event of Vasudha 2k24) on the pressing global issues of pollution and climate change. The event aimed to raise awareness among students about the challenges posed by these environmental issues and encourage them to think critically about potential solutions.",
        description: `
        On 22nd April, 2024, Value Education Cell organized an essay writing competition (a subevent of Vasudha 2k24) on the pressing global issues of pollution and climate change. The event aimed to raise awareness among students about the challenges posed by these environmental issues and encourage them to think critically about potential solutions.
      `,

        Essay: `Participants were tasked with exploring various aspects of pollution and climate change through their essays. They were encouraged to delve into the following topics:
1. Human contribution to climate change: Causes and solutions.
2. The effect of pollution human health and the environment.`,

        judgingCriteria: [
            "Originality of ideas",
            "Depth of analysis",
            "Coherence of arguments",
            "Clarity of expression",
            "Relevance to the theme",
            "Effectiveness of proposed solutions"
        ],
        Conclusion: `
        The essay writing competition on “Pollution and Climate Change", proved to be a resounding success. It provided a platform for students to engage with important environmental issues and fostered a sense of responsibility towards building a sustainable future. Such initiatives are essential in empowering the youth to become proactive agents of change in addressing the global challenges of pollution and climate change. VE Cell Society looks forward to organizing similar events in the future to continue fostering environmental awareness and activism among the younger generation.
      `,
        images: [
            "/image/extension-activities/extension-activities-dropdown-2-img-1.jpg",
            "/image/extension-activities/extension-activities-dropdown-2-img-2.jpg",
            "/image/extension-activities/extension-activities-dropdown-2-img-3.jpg",
        ]
    },
    {
        id: 3,
        title: "Planet Puzzle Paradox 'VASUDHA 2K24'",
        venue: "Amphitheatre",
        date: "25th April, 2024",
        participants: "72 teams",
        description: `
        On 25th April, 2024, Value Education Cell, organized an exhilarating event called the “Planet Puzzle Paradox" (a subevent of Vasudha 2k24), aimed at engaging participants in fun-filled games while promoting awareness about environmental sustainability.
      `,
        games: [
            "Harvest Heaven",
            "Sustainable Pyramid",
            "Jigsaw Puzzle",
            "Carbon Combat",
            "Eco-Balloon Bliz",
            "Eco Drag Master",
            "Buzzer Bonanza"
        ],
        outcome: `
On 25/04/2024, Value Education Cell, organized an exhilarating event called the “Planet Puzzle Paradox" (a subevent of Vasudha 2k24), aimed at engaging participants in fun-filled games while promoting awareness about environmental sustainability. The event attracted 72 teams, each comprising three members, who enthusiastically participated in a series of challenging and thought-provoking games.
Games (3 members in each team):      `,

        "Harvest heaven": `• Two players were blind folded and one of the blind folded members had to hold the bucket and other member had to throw the ball. The member which was not blind folded was directing the thrower about the direction in which the person had to throw the ball in the bucket.
• The instruction by the third member had to be limited e.g. Left, Right, Forward and Backward.`,

        "Sustainable Pyramid": `• In this game every member, was given a balloon and they had to blow that balloon and stuck it into the cups (provided to build the pyramid) in order to pick up the cups, as use of hands was not allowed.
• Using the above technique, they had to create a 4-level pyramid.
• During the pyramid building, if any of the cups fell, then they had to restart building pyramid.
• The game was time bounded.`,

        "Jigsaw puzzle": `• Each team received a distorted puzzle.
• They had to solve it under the specified time.`,

        images: [
            "/image/extension-activities/extension-activities-dropdown-3-img-1.jpg",
            "/image/extension-activities/extension-activities-dropdown-3-img-2.jpg",
            "/image/extension-activities/extension-activities-dropdown-3-img-3.jpg",
            "/image/extension-activities/extension-activities-dropdown-3-img-4.jpg",
        ]
    },
    {
        id: 4,
        title: "Green Film Festival 'VASUDHA 2K24'",
        venue: "CS-IT Seminar Hall, AKGEC",
        date: "23rd April, 2024",
        duration: "4.5 Hrs",
        totalRegistrations: "50",
        description: `
        Value Education Cell, AKGEC, hosted "Green Film Festival: An Enlightened Learning with Short Movies" on April 23, 2024. The event welcomed B.Tech. students from all years and included a movie session, quiz, and discussion sessions.
      `,
        highlights: [
            "The event began with refreshments, followed by a warm welcome and introductions.",
            "The festival featured an inspirational short film, 'Kadvi Hawa', exploring climate change and its effects.",
            "After the film, a 10-point quiz and interactive discussion engaged participants, culminating in a summary and Q&A session."
        ],
        outcome: "The event offered a mix of entertainment and education, leaving participants eager for more such life-related events focused on personal growth and environmental awareness.",
        images: [
            "/image/extension-activities/extension-activities-dropdown-4-img-1.jpg",
            "/image/extension-activities/extension-activities-dropdown-4-img-2.jpg",
            "/image/extension-activities/extension-activities-dropdown-4-img-4.jpg",
        ]
    },
    {
        id: 5,
        title: "Debate Competition 'VASUDHA 2K24'",
        venue: "Main Seminar Hall",
        date: "22-23 April, 2024",
        time: "Day 1 - 2:00 PM to 4:00 PM, Day 2 - 8:30 AM to 10:10 AM",
        participants: "29 teams",
        description: `
        An engaging debate competition was organized as a subevent of Vasudha 2k24 by the Value Education Cell of Ajay Kumar Garg Engineering College. The debates were judged by esteemed faculty, including Manishi Ma’am, Nitya Ma’am, and Amit Goel Sir on Day 1, and Dr. Shashank Sahu Sir and Dr. K. K. Tiwari on Day 2.
      `,
        outcome: "The debate competition successfully provided a platform for students to express ideas, enhancing their analytical and communication skills while fostering environmental consciousness.",
        images: [
            "/image/extension-activities/extension-activities-dropdown-5-img-1.jpg",
            "/image/extension-activities/extension-activities-dropdown-5-img-2.jpeg",
            "/image/extension-activities/extension-activities-dropdown-5-img-3.jpg",
        ]
    },
    {
        id: 6,
        title: "Family Workshop 'Understanding the Relationship through Self Exploration'",
        venue: "Main Seminar Hall",
        date: "14-16 March 2024",
        totalRegistrations: "39 Family Members from 22 families",
        totalParticipants: "31 Family Members from 20 families",
        completed: "30 Family Members from 20 families",
        description: `
        A 3-day family workshop titled ‘Understanding the Relationship through Self Exploration’ was held for the family members of AKGEC employees. The sessions included participants aged 6 to 72 years, focusing on harmonious relationships within families.
      `,
        outcome: "The workshop promoted understanding and practicing unconditional valuable support in relationships, with impactful participant feedback and plans to replicate such workshops in schools and corporations.",
        images: [
            "/image/extension-activities/extension-activities-dropdown-6-img-1.jpg"
        ]
    },
    {
        id: 7,
        title: "Workshop for Female Inmates 'VASUDHA 2K24'",
        description: `
        VE Cell AKGEC conducted a 15-day Universal Human Values workshop for female inmates at Dasna Jail, Ghaziabad. The workshop emphasized trust, respect, affection, and love through two-hour daily sessions. It inspired participants to understand their emotions, embrace self-improvement, and prepare for societal reintegration.
      `,
        outcome: "Significant outcomes include enhanced empathy, stress reduction, and tools for emotional management. This initiative aligns with VE Cell’s mission of societal transformation through personal growth.",
        images: []
    }
];

const ExtensionActivities = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="text-gray-800 py-8 px-4 min-h-screen font-novareg">
                <h2 className="text-center text-3xl font-bold mb-8 font-novabold">
                    Extension Activities
                </h2>
                <div className="space-y-4 max-w-6xl mx-auto">
                    {activities.map((activity, index) => (
                        <div
                            key={activity.id}
                            className="text-white text-lg rounded-lg shadow-md bg-gray-800 font-novamedium"
                        >
                            <button
                                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center text-lg focus:ring-2 focus:ring-blue-500"
                                onClick={() => toggleDropdown(index)}
                            >
                                <span>{activity.title}</span>
                                <span className="text-lg">{openIndex === index ? "▲" : "▼"}</span>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 py-4 text-sm bg-white text-gray-800 rounded-b-lg text-left">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4 font-novethin">
                                            <div className="text-sm text-gray-600">
                                                <p>
                                                    <strong>Venue:</strong> {activity.venue}
                                                </p>
                                                <p>
                                                    <strong>Date:</strong> {activity.date}
                                                </p>
                                                <p>
                                                    <strong>Time:</strong> {activity.time}
                                                </p>
                                                <p>
                                                    <strong>Participants:</strong> {activity.participants}
                                                </p>
                                                {activity.totalRegistrations && (
                                                    <p>
                                                        <strong>Total Registrations:</strong>{" "}
                                                        {activity.totalRegistrations}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {activity.images && activity.images.length > 0 && (
                                                <img
                                                    src={activity.images[0]}
                                                    alt="First Image"
                                                    className="w-full h-60 object-cover rounded-md shadow-md border border-gray-200"
                                                    onError={(e) => {
                                                        e.target.src =
                                                            "https://via.placeholder.com/500?text=Image+not+available";
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-4 text-left font-novalight">
                                        <p className="mb-4 whitespace-pre-wrap text-left">
                                            {activity.description}
                                        </p>

                                        {activity.judgingCriteria &&
                                            activity.judgingCriteria.length > 0 && (
                                                <div>
                                                    <strong>Judging Criteria:</strong>
                                                    <ul className="list-disc pl-6 space-y-2 text-left">
                                                        {activity.judgingCriteria.map((criteria, idx) => (
                                                            <li key={idx}>{criteria}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                        {activity.outcome && (
                                            <div>
                                                <strong>Outcome:</strong>
                                                <p>{activity.outcome}</p>
                                            </div>
                                        )}

                                        {activity.topic && (
                                            <p>
                                                <strong>Topic:</strong> {activity.topic}
                                            </p>
                                        )}
                                        {activity.games && (
                                            <div>
                                                <strong>Games:</strong>
                                                <ul className="list-disc pl-6 space-y-2">
                                                    {activity.games.map((game, idx) => (
                                                        <li key={idx}>{game}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    {activity.images && activity.images.length > 1 && (
                                        <div className="mt-6 space-y-4 grid grid-cols-2 gap-6 h-80">
                                            {activity.images.slice(1).map((imgSrc, idx) => (
                                                <img
                                                    key={idx}
                                                    src={imgSrc}
                                                    alt={`Image ${idx + 2}`}
                                                    className="w-full h-60 object-cover rounded-md shadow-md border border-gray-200"
                                                    onError={(e) => {
                                                        e.target.src =
                                                            "https://via.placeholder.com/500?text=Image+not+available";
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExtensionActivities;
