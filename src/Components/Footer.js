import React from 'react';

const navigation = [
    {
        name: "Apply Here",
        links: [
            { name: 'Admission through UPTAC Counselling 2024-25', href: '#' },
            // { name: 'Admission', href: '#' },
            { name: 'AKGIM-MBA Admission', href: '#' },
            { name: 'Scholarship', href: '#' },
            { name: 'Admission Office', href: '#' },
            { name: 'Student Feedback', href: '#' },
            { name: 'Student Facilitation', href: '#' },
            // { name: 'Admission Process', href: '#' },
        ],
    },
    {
        name: "Learn Here",
        links: [
            // { name: 'Vision And Mission', href: '#' },
            // { name: 'Alumni Achievements', href: '#' },
            { name: 'Faculty Achievements', href: '#' },
            // { name: 'Research & Development Centers', href: '#' },
            { name: 'AKGU International Journal of Technology', href: '#' },
            { name: 'NIRF Data for Ranking 2024', href: '#' },
            { name: 'AICTE Approval Letters', href: '#' },
            { name: 'Anti-Ragging Policy', href: '#' }
        ],
    },
    {
        name: "Visit Here",
        links: [
            { name: 'Placements', href: '#' },
            { name: 'Infrastructure/Visual Tour', href: '#' },
            // { name: 'College Awards', href: '#' },
            { name: 'Maps', href: '#' },
            { name: 'Distance Calculator', href: '#' },
            { name: 'About AKGU', href: '#' }
        ],
    },
    {
        name: "Live Here",
        links: [
            { name: 'Nature Club', href: '#' },
            { name: 'Future Forward: Sustainability Club', href: '#' },
            // { name: 'Student Development Programs (SDPs)', href: '#' },
            { name: 'UHV Departmental Seminars', href: '#' },
            { name: 'Library', href: '#' }
        ],
    },
    {
        name: "Others",
        links: [
            // { name: 'Courses Fee Details', href: '#' },
            // { name: 'Fee Structure for Existing Students', href: '#' },
            { name: 'Courses Offered', href: '#' },
            { name: 'Fee Structure for New Students', href: '#' },
            { name: 'Fee Refund Norms', href: '#' },
            { name: 'Admission Brochure 2024-25', href: '#' }
        ],
    },
];
const navigation2 = [
    {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'X',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-blue-900 to-teal-700 text-white py-20">
            <div className="mx-auto max-w-[1400px] max-[1400px]:max-w-7xl max-[1300px]:max-w-6xl max-[1160px]:max-w-5xl px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {navigation?.map((section, index) => (
                        <div key={index} className="w-full mb-6">
                            <h3 className="font-novaSemi mb-4 text-[#62cdd7]">{section.name}</h3>
                            <ul className='space-y-3'>
                                {section.links?.map((link, index) => (
                                    <li key={index} className="mb-2 text-sm font-novaSemi">
                                        <a href={link.href} className="hover:underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="text-base font-novaSemi text-[#62cdd7] mb-4">Get in Touch</h3>
                        <p className="text-sm font-novaSemi">Ajay Kumar Garg University</p>
                        <p className="mb-1 text-sm font-novaSemi">27th Km Milestone,Delhi-Meerut Expressway, P.O. Adhyatmik Nagar,Ghaziabad - 201015</p>
                        <p className="mb-2 text-sm font-novaSemi text-[#62cdd7]"><strong>Student Helpline No:</strong></p>
                        <p className="mb-2 text-sm font-novaSemi">7290034978</p>
                        <p className="mb-2 text-sm font-novaSemi text-[#62cdd7]"><strong>Toll Free:</strong></p>
                        <p className="mb-2 text-sm font-novaSemi">8744052891-93</p>
                        <p className="text-sm font-novaSemi text-[#62cdd7]"><strong>Email:</strong></p>
                        <p><a href="#" className="text-sm hover:underline font-novaSemi">info@akgec.ac.in</a></p>
                    </div>
                </div>


                {/* <div className="mx-auto py-4 md:flex md:items-center md:justify-between border-t border-b border-slate-500">
                    <div className="flex justify-center space-x-10 md:order-2">
                        {navigation2?.map((item, index) => (
                            <a key={index} href={item.href} className="text-white hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                    <div className="text-xs md:text-sm font-novaSemi mt-8 md:order-1 md:mt-0">
                        <ul className='flex gap-6 md:gap-8 lg:gap-16 xl:lg:gap-28  justify-center sm:justify-center'>
                            <li>NAAC</li>
                            <li>NIRF</li>
                            <li>NATS</li>
                            <li>Anti-Ragging</li>
                            <li>National Ragging Prevention Programme</li>
                        </ul>
                    </div>
                </div> */}

                {/* <div className="items-center justify-center mt-4 mx-auto grid grid-cols-2 gap-8">
                    <div className="flex items-center space-x-2">
                        <div className="flex justify-center py-4 w-32 rounded-md bg-white">
                            <img src="/image/hgcas.jpg" alt="Radio" className="h-16" />
                        </div>
                        <div className="flex justify-center py-4 w-32  rounded-md bg-white">
                            <img src="/image/UNAi.png" alt="Virtual Tour" className="h-16" />
                        </div>
                        <div className="flex justify-center py-4 w-32  rounded-md bg-white">
                            <img src="/image/NaaC.webp" alt="UN Academic Impact" className="h-16" />
                        </div>
                    </div>
                    <div className="text-center font-light md:text-left">
                        <h2 className="text-base font-novaSemi text-[#62cdd7] mb-2">About Us</h2>
                        <p className='text-sm font-novaSemi leading-none'>
                            Ajay Kumar Garg University (AKGU), Ghaziabad, affiliated with Dr. A.P.J. Abdul Kalam Technical University, offers NBA-accredited B.Tech programs in various engineering disciplines, including Computer Science, IT, AI & ML, and more. It also provides M.Tech and MCA courses. Established in 1998, AKGU is AICTE-approved.<a href="#" className="text-[#62cdd7] text-xs font-novaSemi hover:underline"> Apply Now</a>
                        </p>
                    </div>
                    <div className="px-20">
                        <img src="/image/NaaC.webp" alt="UN Academic Impact" className="h-24" />
                    </div>
                </div> */}

                <div className="items-center justify-center mt-4 mx-auto grid grid-cols-12 gap-8 place-items-center">
                    <div className="col-span-5 max-[1160px]:col-span-6 max-[850px]:col-span-12 flex items-center space-x-4">
                        <div className="flex justify-center py-2 w-32 max-[420px]:w-24 max-[360px]:w-20 max-[420px]:py-0 bg-white">
                            <img src="/image/nba.jpg" alt="NBA" className="h-16 max-[360px]:h-14" />
                        </div>
                        <div className="flex justify-center py-2 w-32 max-[420px]:w-24 max-[360px]:w-20 max-[420px]:py-0 bg-white">
                            <img src="/image/qs-i-gauge.jpg" alt="QS-IGAUGE" className="h-16 max-[360px]:h-14" />
                        </div>
                        <div className="flex justify-center py-2 w-32 max-[420px]:w-24 max-[360px]:w-20 max-[420px]:py-0 bg-white">
                            <img src="/image/NaaC.webp" alt="UN Academic Impact" className="h-16 max-[360px]:h-14" />
                        </div>
                    </div>
                    <div className="col-span-3 max-[1160px]:col-span-6 max-[850px]:col-span-6 max-sm:col-span-12 flex justify-center items-center max-sm:px-2">
                        <div className="flex max-[400px]:flex-col text-xs md:text-sm font-novaSemi gap-10">
                            <ul className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:space-y-0 max-sm:gap-3 space-y-3 justify-center sm:justify-center max-[350px]:pl-5">
                                <li className='hover:underline cursor-pointer'>NAAC</li>
                                <li className='hover:underline cursor-pointer'>NIRF</li>
                                <li className='hover:underline cursor-pointer'>NATS</li>
                            </ul>
                            <ul className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:space-y-0 max-sm:gap-3 space-y-3 justify-center sm:justify-center">
                                <li className='max-[350px]:text-left hover:underline cursor-pointer'>Anti-Ragging</li>
                                <li className='max-[350px]:text-left hover:underline cursor-pointer'>National Ragging Prevention Programme</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-4 max-[1160px]:col-span-12 max-[850px]:col-span-6 max-sm:col-span-12 flex justify-center space-x-10 md:order-2">
                        {navigation2?.map((item, index) => (
                            <a key={index} href={item.href} className="text-white hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-xs font-novaSemi text-center border-t border-slate-400 pt-4">
                    <p>© All rights reserved 2024</p>
                </div>
            </div>
        </footer>
    );
}