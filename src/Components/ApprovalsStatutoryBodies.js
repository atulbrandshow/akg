const people = [
    {
        name: 'NAAC',
        fullName: 'National Assessment and Accreditation Council (NAAC)',
        imageUrl: '/image/NAAC_LOGO.png',
        bio: 'The only University in Uttar Pradesh (AKTU) accredited by NAAC with the highest grading of A++.',
    },
    {
        name: 'AICTE',
        fullName: 'All India Council for Technical Education (AICTE)',
        imageUrl: '/image/AICTE.png',
        bio: 'Approval of extension for Engineering and Technology Programs for the Academic Year 2024-25 granted vide AICTE letter no. F.No. Northern/1-43662770049/2024/EOA dated 20-May-2024 addressed to the Principal Secretary (Tech. Edu.), Govt. of Uttar Pradesh.',
    },
    {
        name: 'AKTU',
        fullName: 'Abdul Kalam Technical University (AKTU)',
        imageUrl: '/image/AKTU.png',
        bio: 'Affiliation letter by AKTU for the academic year 2023-24 granted vide AKTU letter no. AKTU/RO/AS/2022/1891(027) dated 24-September-2023 addressed to the Director, Ajay Kumar Garg University.',
    },
    {
        name: 'NBA',
        fullName: 'National Board of Accreditation',
        imageUrl: '/image/nba.png',
        bio: 'Five B.Tech. branches in CSE, ECE, EN, IT & ME are accredited for the period of three year w.e.f. academic year 2022-23 To 2024-25.',
    },
    // More people...
]

export default function ApprovalsStatutoryBodies() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Approvals by Statutory Bodies</h2>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-10 xl:max-w-none"
                >
                    {people?.map((person, index) => (
                        <li key={index} className="flex flex-col gap-6 xl:flex-row border p-4">
                            <img
                                alt=""
                                src={person.imageUrl}
                                className="aspect-[4/5] w-52 flex rounded-2xl object-contain mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-center"
                            />

                            <div className="flex-auto">
                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-base leading-7 text-gray-600">{person.fullName}</p>
                                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
