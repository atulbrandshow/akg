const managementTeam = [
    {
        name: 'Dr. R.K. Agarwal',
        role: 'Director General',
        contact: '',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Anu Chaudhary',
        role: 'HoD (CSE), Dean Exams',
        contact: '8527976204',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Rakesh Srivastava',
        role: 'HoD (Civil), Dean T&P',
        contact: '9415143567',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Monika Jain',
        role: 'Prof.- ECE, Dean-R & D',
        contact: '9717020158',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Prof. I.P. Sharma',
        role: 'Dean Hostels, Dean Lib. Res.',
        contact: '9650370337',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Air CMDE P.Singh, VSM (Retd.)',
        role: 'Dean Administration',
        contact: '9717470925',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Mr. Vishal Goel',
        role: 'Chief Procurement Officer',
        contact: '9355211455',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Shiv Shanker Srivastava',
        role: 'Senior Librarian',
        contact: '9818590621',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Hemant Ahuja',
        role: 'Director, Dean Academics',
        contact: '9899008275',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Pallab Biswas',
        role: 'HoD (ME), Dean Students Welfare',
        contact: '8860611228',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Neelesh Kumar Gupta',
        role: 'HoD (ECE) & IQAC Coordinator',
        contact: '8319563978',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Prof. V.K. Parashar',
        role: 'Coordinator M.Tech',
        contact: '9313102291',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Mr. Pradeep Jain',
        role: 'Head - RICC',
        contact: '9810355681',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Ms. Neelam Chhibber',
        role: 'Staff Officer to Director General and Manager HR',
        contact: '8744052895',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Mr. Mukesh Sharma',
        role: 'Officer on Special Duty & Public Relations Officer',
        contact: '9312082520',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Prof. S.L. Kapoor',
        role: 'Dean I Year & Proctor',
        contact: '9312072348',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Rahul Sharma',
        role: 'HoD (IT), Head Idea Lab, ERP Team, SDC',
        contact: '',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Lokesh Varshney',
        role: 'HoD (EN)',
        contact: '8588073142',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Prof. Ashiv Shah',
        role: 'Head, TIFAC-CORE',
        contact: '9891984680',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Shraddha Dixit',
        role: 'Registrar',
        contact: '9818391726',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'CA Joohi Khanna',
        role: 'Chief Accounts Officer',
        contact: '7289020666',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Mr. Satender Singh',
        role: 'Chief Administrative Officer',
        contact: '9911220320',
        imageUrl: '/image/6690538.png'
    }
];
export default function ImportantFunctionaries() {
    return (
        <div>
            <ul
                role="list"
                className="grid grid-cols-5 gap-4"
            >
                {managementTeam?.map((person) => (
                    <li key={person.name} className="border border-gray-300 shadow-lg rounded-md">
                        <img alt="" src={person.imageUrl} className="w-full aspect-square p-5 object-cover" />
                        <div className="p-4">
                            <h3 className="font-normal text-sm text-gray-900">{person.name}</h3>
                            <p className="font-normal text-xs text-gray-800">{person.role}</p>
                            <p className="font-bold text-xs text-gray-800">{person.contact}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}
