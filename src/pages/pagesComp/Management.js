const governor = [
    { title: "BOARD OF GOVERNORS" },
    {
        name: 'Sh. Ashok Pal',
        role: 'Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. D. P. Garg',
        role: 'Vice Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Rakesh Garg',
        role: 'Secretary',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. A.N. Gupta',
        role: 'Joint Secretary',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Vinay Garg',
        role: 'Treasurer',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. S.K. Gupta',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Prof. S.K. Kak',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. I.C. Agarwal',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. R.P Khaitan',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'AICTE Nominee',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'AKTU Nominee',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Hemant Ahuja',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Rahul Sharma',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'U.P. State Nominee',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. R.K. Agarwal',
        role: 'Director General & Convener',
        imageUrl: '/image/6690538.png'
    },
]

const council = [
    { title: "MEMBERS OF GOVERNING COUNCIL" },
    {
        name: 'Sh. Ashok Pal',
        role: 'Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Vinay Garg',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Rakesh Garg',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. R.K. Agarwal',
        role: 'Director General & Convenor',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. S.K. Gupta',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
]
const committee = [
    { title: "LIST OF MANAGEMENT COMMITTEE" },
    {
        name: 'Sh. Ashok Pal',
        role: 'Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. A.N. Gupta',
        role: 'Joint Secretary',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. R.A. Kariwala',
        role: 'Treasurer',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Sudhir Agarwal',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. D. P. Garg',
        role: 'Vice Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Vinay Garg',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Dinesh Goel',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Anil Agarwal',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Rakesh Garg',
        role: 'Secretary',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Subhash Garg',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. R.P. Chaddha',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. S.K. Gupta',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    }
];

export const Management = () => {
    return (
        <div className=" flex flex-col gap-10">
            <div className="">
                <div className="border-bmb-5 bg-blue-800 py-4 px-4 mb-5">
                    <h2 className="text-base font-normal text-left tracking-tight text-white">{governor[0].title}</h2>
                </div>

                <ul
                    role="list"
                    className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-2 gap-4">
                    {governor.slice(1)?.map((person) => (
                        <li key={person.name} className="border border-gray-300 shadow-lg rounded-md bg-white">
                            <img alt="" src={person.imageUrl} className="w-full aspect-square p-5 object-cover" />
                            <div className="p-4">
                                <h3 className="font-normal text-sm text-gray-900">{person.name}</h3>
                                <p className="font-normal text-xs text-gray-800">{person.role}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

            <div className="">
                <div className="border-bmb-5 bg-blue-800 py-4 px-4 mb-5">
                    <h2 className="text-xl font-normal text-left tracking-tight text-white">{council[0].title}</h2>
                </div>
                <ul
                    role="list"
                    className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-2 gap-4"
                >
                    {council.slice(1)?.map((person) => (
                        <li key={person.name} className="border border-gray-300 shadow-lg rounded-md bg-white">
                            <img alt="" src={person.imageUrl} className="w-full aspect-square p-5 object-cover" />
                            <div className="p-4">
                                <h3 className="font-normal text-sm text-gray-900">{person.name}</h3>
                                <p className="font-normal text-xs text-gray-800">{person.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <div className="border-bmb-5 bg-blue-800 py-4 px-4 mb-5">
                    <h2 className="text-xl font-normal text-left tracking-tight text-white">{committee[0].title}</h2>
                </div>
                <ul
                    role="list"
                    className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-2 gap-4"
                >
                    {committee.slice(1)?.map((person) => (
                        <li key={person.name} className="border border-gray-300 shadow-lg rounded-md bg-white">
                            <img alt="" src={person.imageUrl} className="w-full aspect-square p-5 object-cover" />
                            <div className="p-4">
                                <h3 className="font-normal text-sm text-gray-900">{person.name}</h3>
                                <p className="font-normal text-xs text-gray-800">{person.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Management;