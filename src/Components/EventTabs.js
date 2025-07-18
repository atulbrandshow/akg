import React from 'react'

const eventTabs = [
    {
        label: 'Convocations',
        href: '/campus-life/convocations'
    },
    {
        label: 'Annual Fest',
        href: '#'
    },
    {
        label: 'Tech Invent',
        href: '/campus-life/tech-invent-and-events'
    },
    {
        label: 'Cultural Fest',
        href: '/campus-life/cultural-and-cosmopolitan'
    },
    {
        label: 'Evoke Symposium',
        href: '#'
    },
    {
        label: 'Faculty Development Programs',
        href: '#'
    },
    {
        label: 'Music and Rhythms',
        href: '#'
    },
    {
        label: 'Celebrity Guest Visits',
        href: '#'
    },
    {
        label: 'Sports Meet',
        href: '#'
    },
    {
        label: 'Distinguished Visitors',
        href: '#'
    },
    {
        label: 'Alumni Reunion',
        href: '#'
    },
];

const EventTabs = () => {
    return (
        <>
            <div className="mb-7">
                <div className="w-full text-center">
                    <h3 className="text-3xl font-novaReg mb-2 max-md:text-2xl max-sm:text-xl">Explore Our Event Archives</h3>
                    <p className="text-base font-novaReg text-gray-400 max-sm:text-sm">Life at India's Most Vibrant Campus</p>
                </div>
            </div>
            <div className="py-3">
                <ul className="mt-4 flex flex-wrap justify-center space-x-2 gap-y-6 cursor-pointer">
                    {eventTabs.map((tab, index) => (
                        <li key={index} className="hover:translate-y-[-3px] transform transition-transform duration-200">
                            <a
                                href={tab.href}
                                className="py-2 px-5 bg-primary text-white rounded-2xl shadow-xl"
                            >
                                {tab.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default EventTabs