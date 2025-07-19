'use client';

import CubeSlider from "@/Components/CubeSlider";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const libraryTabs = [
    "Home",
    "About",
    "Digital Library",
    "Digital Repository",
    "E-resources",
    "KOHA OPAC (Search)",
    "Useful Links",
    "Library Team",
    "Contact Us",
];


const data = [
    {
        id: 1,
        publication: "AKGEC through (Greenstone Digital Library Software)",
        subject: "Institutional Repository",
        webAddress: (
            <>
                <a href="http://10.10.153.40:8080/jspui/" className="text-blue-600 underline">
                    http://10.10.153.40:8080/jspui/
                </a>
                <br />
                or Bytepad app installed thru Play Store
            </>
        ),
    },
    {
        id: 2,
        publication: "AKGEC Central Library",
        subject: "Central Library web link",
        webAddress: (
            <a href="https://www.akgec.ac.in/central-library/" className="text-blue-600 underline">
                https://www.akgec.ac.in/central-library/
            </a>
        ),
    },
    {
        id: 3,
        publication: "Web OPAC",
        subject: "Library Management System: KOHA",
        webAddress: (
            <a href="http://117.55.241.42/" className="text-blue-600 underline">
                http://117.55.241.42/
            </a>
        ),
    },
    {
        id: 4,
        publication: "IEEE (ASPP)",
        subject: "CS+EC+EN Telecommunication",
        webAddress: (
            <a href="http://ieeexplore.ieee.org" className="text-blue-600 underline">
                http://ieeexplore.ieee.org
            </a>
        ),
    },
    {
        id: 5,
        publication: "Elsevier e-Journals Package",
        subject: "Engineering & Computer Science",
        webAddress: (
            <a href="http://www.sciencedirect.com/" className="text-blue-600 underline">
                http://www.sciencedirect.com/
            </a>
        ),
    },
    {
        id: 6,
        publication: "DELNET",
        subject: "General Engineering & Reference",
        webAddress: (
            <a href="http://www.delnet.in/" className="text-blue-600 underline">
                http://www.delnet.in/
            </a>
        ),
    },
    {
        id: 7,
        publication: "National Digital Library",
        subject: "General Engineering & Reference",
        webAddress: (
            <a href="https://ndl.iitkgp.ac.in/" className="text-blue-600 underline">
                https://ndl.iitkgp.ac.in/
            </a>
        ),
    },
    {
        id: 8,
        publication: "MyLOFT",
        subject: "Access all Database through mobile / system",
        webAddress: (
            <a href="https://app.myloft.xyz/browse/home" className="text-blue-600 underline">
                https://app.myloft.xyz/browse/home
            </a>
        ),
    },
];

const results = [
    {
        title: "About AKGEC Central Library",
        desc: (
            <>
                The AKGEC Library System comprises of a Central Library, nine Departmental Libraries and five Hostel Libraries.<br />
                The Central Library, housed in the Administrative Block of the College, consists of two sections spread over 1465 sq. m and with a seating capacity for 344 users. Comfortable study space is provided for faculty, staff and students in the form of reading hall, study cubicles, digital library and faculty reading room. <br />
                The state-of-the-art facilities include KOHA Open Source Library Management Software, Web Based Online Public Access Catalogue (Web OPAC), Digital Library, DSpace Institutional Repository Server and Membership to DELNET and National Digital Library. <br />
                The library system is very user friendly with sufficient resources to meet the requirements of the users. Addition of resources as per the requirements and norms is a regular feature. Sufficient number of qualified staff are employed to manage the activities of the library. <br />
                The Departmental and Hostel libraries are managed and run by the respective departments and hostels with resources on loan from the Central Library. <br />
                All students, faculty and staff of the College are entitled to make use of the library facilities on availing library membership. <br />
                Admission to the Central Library is through Library cum Identity Card, which is scanned at the entrance, to keep record of the users. The library is under camera surveillance through ten cameras that have been installed at various locations. <br />
                The library attracts an average of 350 users on a regular working day. <br />
            </>
        ),
        width: "w-72",
        slides: [
            { title: 'Library', img: "/image/library/Library_1.jpg" },
            { title: 'Library', img: "/image/library/Library_2.jpg" },
        ]
    },
    {
        title: "Library Timings",
        desc: (
            <>
                <table className="w-full border border-gray-300">
                    <tbody>
                        <tr className="border border-gray-300">
                            <td className="p-3 font-semibold">Library Timings in Normal Working Days:</td>
                            <td className="p-3">8:30 AM – 9:00 PM</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3"> (Monday – Saturday)</td>
                            <td></td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3 font-semibold">Library Timings during University Exam:</td>
                            <td className="p-3">8:30 AM – 12:01 AM</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3"> (Monday – Saturday)</td>
                            <td></td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3 font-semibold">Issue & Return of Books</td>
                            <td className="p-3">8:40 AM – 3:45 PM</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3"> (Monday – Saturday)</td>
                            <td></td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3 font-semibold">Digital Library</td>
                            <td className="p-3">8:30 AM – 9:00 PM</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3">(E-Journals, DELNET, CD’s Search)</td>
                            <td></td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3 font-semibold">Consultation of Examination Papers & Solution / Old Newspaper etc.</td>
                            <td className="p-3">9:30 AM – 3:45 PM</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="p-3 font-semibold">Reprographic Service</td>
                            <td className="p-3">8:30 AM – 7:00 PM</td>
                        </tr>
                    </tbody>
                </table>
            </>
        ),
    },
    {
        title: "Central Library Rules",
        desc: (
            <>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Library users must show their Identity cum library card at the security point. Without it, entry is not permitted.</li>
                    <li>Personal belongings like bags, books, etc., are not allowed inside the library.</li>
                    <li>Identity cum library cards are non-transferable. Using someone else’s card is a punishable act for both the borrower and the cardholder.</li>
                    <li>Library hours: 8:30 AM – 9:00 PM on working days. During exams, the library is open until 12:00 midnight.</li>
                    <li>Books can be issued from 8:45 AM to 3:45 PM. Reservations are accepted between 8:45 AM and 3:30 PM.</li>
                    <li>Returning books late incurs a fine of Rs.5/- per day per volume, up to a maximum of double the book's cost.</li>
                    <li>Late collection of Book Bank Books results in a fine of Rs.5/- per day, limited to Rs.50/-. Defaulters are reported after one week.</li>
                    <li>Reference books can be issued overnight with permission between 3:15 PM – 3:45 PM and must be returned by 10:00 AM the next day. Late returns attract a fine of Rs.20/- per day.</li>
                    <li>Question papers, solutions, and other library materials are issued for Xerox for an hour. Late return incurs a fine of Rs.2/- per hour per document.</li>
                    <li>Borrowers must check the book’s condition before borrowing. They are responsible for any damage noticed upon return.</li>
                    <li>Leaving the circulation counter without confirming the return of books is punishable. A fine of Rs.50/- is imposed even if the book is later traced.</li>
                    <li>No book is renewed or re-issued on the same day.</li>
                    <li>A student cannot issue or reserve another copy of a book that is already issued to them.</li>
                    <li>If a book is lost or damaged, only the latest edition is accepted as a replacement along with a Rs.50/- processing fee. If unavailable, double the book’s cost is charged.</li>
                    <li>Misplacing, marking, or tearing books is punishable with a Rs.1000/- fine and may lead to withdrawal of library access.</li>
                    <li>Stealing from the library results in a Rs.2000/- fine and disciplinary action.</li>
                    <li>Disciplinary action is taken against users misbehaving with library staff.</li>
                    <li>Loss of an Identity or Library membership card must be reported to the Senior Librarian immediately.</li>
                    <li>A duplicate Identity card requires a written request to the Director, along with a Rs.300/- fine. A Rs.100/- processing fee applies for damaged or late Identity card replacements.</li>
                    <li>Library service timings may change in the interest of users.</li>
                    <li>Library users must ensure their activities do not disturb fellow users.</li>
                </ul>
            </>
        ),
    },
    {
        title: "User Manual",
        desc: (
            <>
                <Link href="/pdf/library/User-Manual-AKGEC1.pdf" target="_blank" className="bg-blue-500 text-white rounded-2xl shadow-md px-5 py-2 hover:bg-blue-600">AKGEC User Manual</Link>
            </>
        ),
    },
];

const resources = [
    { name: "TURNITIN", url: "https://www.turnitin.com/" },
    { name: "NDL", url: "https://ndl.iitkgp.ac.in/" },
    { name: "NPTEL", url: "https://nptel.ac.in/" },
    { name: "Coursera", url: "https://www.coursera.org/" },
    { name: "edX", url: "https://www.edx.org/" },
    { name: "IEI", url: "https://www.ieindia.org/webui/iei-home.aspx" },
    { name: "E-Sodh Ganga", url: "https://shodhganga.inflibnet.ac.in/" },
    { name: "E-Pathshala", url: "https://epgp.inflibnet.ac.in/" },
];

const staff = [
    { name: "Gp Capt I P Sharma (Retd)", position: "Dean Library" },
    { name: "Dr. Shiv Shankar Srivastava", position: "Senior Librarian" },
    { name: "Ms. Kavita Kulshreshtha", position: "Assistant Librarian" },
    { name: "Mr. Ram Abhilash", position: "Library Assistant" },
    { name: "Mr. Dinesh Kumar", position: "Library Assistant" },
    { name: "Mr. Shobhit Kumar Sharma", position: "Library Assistant" },
    { name: "Mr. Rajkumar Sharma", position: "Library Assistant" },
    { name: "Mr. Balkishan", position: "Book Lifter" },
    { name: "Mr. Rajeev Sharma", position: "Book Lifter" },
    { name: "Mr. Ratan Singh", position: "Library Attendant" },
    { name: "Mr. Ritesh", position: "Library Attendant" },
];

const LibraryAbout = () => {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleDomain = (index) => {
        setOpenIndices((prev) => {
            if (prev.includes(index)) {
                return []
            } else {
                return [index];
            }
        });
    };

    return (
        <div className="w-full text-black">
            {results.map((result, index) => (
                <div key={index} className="border-b border-gray-300">
                    <a
                        onClick={() => toggleDomain(index)}
                        className={`flex justify-between items-center w-full px-5 py-6 ${openIndices.includes(index) ? 'text-white bg-indigo-950' : 'text-black'} cursor-pointer rounded-lg transition-colors duration-200 hover:bg-indigo-900 hover:text-white`}
                    >
                        <span className={`font-semibold`}>
                            {result.title}
                        </span>
                        {openIndices.includes(index) ? (
                            <ChevronUp className="w-6 h-6" />
                        ) : (
                            <ChevronDown className="w-6 h-6" />
                        )}
                    </a>
                    {openIndices.includes(index) && (
                        <div className="px-5 py-10 bg-gray-200">
                            <span className="font-novaReg text-base mb-4 leading-snug text-justify">{result.desc}</span>
                            {result.slides && <CubeSlider width={result.width} slides={result.slides} />}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}


const libraryContent = {
    "Home": <>
        <div className="flex gap-5 px-3">
            <img className="w-[60%] object-cover rounded-xl" src="/image/building/central_Library.webp" alt="library" />
            <div>
                <div className="bg-purple-100 rounded-xl p-5 hover:bg-purple-200 duration-300 transition-colors ease-linear">
                    <h2 className="font-novaSemi text-2xl mb-1">Vision</h2>
                    <p className="font-novaReg">To attain high standards of comprehensive services related to dissemination of required information by adoption of state-of-the-art technology thereby creating a welcoming and comfortable physical environment for the user.</p>
                </div>
                <div className="bg-blue-100 rounded-xl p-5 hover:bg-blue-200 duration-300 transition-colors ease-linear mt-5">
                    <h2 className="font-novaSemi text-2xl mb-1">Mission</h2>
                    <p className="font-novaReg">We strive to provide and maintain state-of-the-art comprehensive resource center of books and journals and most efficient library service environment for dissemination of required knowledge to our faculty and students.</p>
                </div>
            </div>
        </div>
    </>,
    "About": <>
        <LibraryAbout />
    </>,
    "Digital Library": <>
        <div className="flex flex-col gap-y-8">
            <span className="font-novaSemi text-lg">Myloft (e-books, e-journals) - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="https://app.myloft.xyz/user/login">https://app.myloft.xyz/user/login</Link></span>
            <span className="font-novaSemi text-lg">Video Lectures - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="https://www.youtube.com/@AKGECDigitalSchool">https://www.youtube.com/@AKGECDigitalSchool</Link></span>
            <span className="font-novaSemi text-lg">National Digital Library of India (NDL) - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="https://ndl.iitkgp.ac.in/">https://ndl.iitkgp.ac.in/</Link></span>
            <span className="font-novaSemi text-lg">NDLI Club - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="https://club.ndl.iitkgp.ac.in/club-home">https://club.ndl.iitkgp.ac.in/club-home</Link></span>
            <span className="font-novaSemi text-lg">DELNET - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="http://www.delnet.in/">http://www.delnet.in/</Link></span>
            <span className="font-novaSemi text-lg">DOAJ - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="https://doaj.org/">https://doaj.org/</Link></span>
            <span className="font-novaSemi text-lg">DOAB - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="https://doabooks.org/">https://doabooks.org/</Link></span>
        </div>
    </>,
    "Digital Repository": <>
        <div>
            <h2 className="text-2xl font-novaSemi">Digital Repository</h2>
            <p className="font-novaReg">AKGEC Central Library maintains a Question Papers & Model Solutions Bank consisting of previous question papers of Sessional, PUT (Pre-University Test), and University Examinations along with their model solutions prepared by the respective subject teachers. The collection is readily available for reference of students in electronic as well as print form in central library and also in electronic form in departmental and hostel libraries for benefit of faculty and students respectively users are allowed to take the documents for making photocopies at the photocopy. The collection is readily available for student reference through open source DSpace Institutional repository.</p>
            <div className="flex flex-col gap-y-8 mt-5">
                <span className="font-novaSemi text-lg">Previous Question Papers with Solutions - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="http://10.10.153.40:8080/jspui/">http://10.10.153.40:8080/jspui/</Link></span>
                <span className="font-novaSemi text-lg">Book Requisition Form - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="/pdf/library/Book-Requisition-Form.pdf">Book-Requisition-Form.pdf</Link></span>
                <span className="font-novaSemi text-lg">BB Requistion form - <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="/pdf/library/BB-Requistion-form.pdf">BB-Requistion-form.pdf</Link></span>
            </div>
        </div>
    </>,
    "E-resources": <>
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-left font-novaSemi">
                            <th className="border px-4 py-2 whitespace-nowrap">S. No.</th>
                            <th className="border px-4 py-2">Publication</th>
                            <th className="border px-4 py-2">Subject Areas</th>
                            <th className="border px-4 py-2">Web Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border hover:bg-gray-100 font-novaReg">
                                <td className="border px-4 py-2">{item.id}</td>
                                <td className="border px-4 py-2">{item.publication}</td>
                                <td className="border px-4 py-2">{item.subject}</td>
                                <td className="border px-4 py-2">{item.webAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>,
    "KOHA OPAC (Search)": <>
        <Link target="_blank" className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl" href="http://117.55.241.42/">http://117.55.241.42/</Link>
    </>,
    "Useful Links": <>
        <div className="space-y-6">
            {resources.map((resource, index) => (
                <span key={index} className="font-novaSemi text-lg block">
                    {index + 1}. {resource.name} -{" "}
                    <Link
                        target="_blank"
                        className="bg-blue-600 hover:underline duration-300 transition-all ease-linear text-white px-3 py-0.5 font-novaReg rounded-xl"
                        href={resource.url}
                    >
                        {resource.url}
                    </Link>
                </span>
            ))}
        </div>
    </>,
    "Library Team": <>
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-left font-novaSemi">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((member, index) => (
                            <tr key={index} className="border hover:bg-gray-100 font-novaReg">
                                <td className="border px-4 py-2">{member.name}</td>
                                <td className="border px-4 py-2">{member.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>,
    "Contact Us": <>
        <div>
            <ul className="mt-5 text-lg font-novaReg">
                <li className="font-novaSemi">Dr. Shiv Shankar Srivastava</li>
                <li>Senior Librarian</li>
                <li>Ajay Kumar Garg Engineering College (AKGEC)</li>
                <li>27th Km Stone, Delhi-Meerut Expressway,</li>
                <li>Ghaziabad, Uttar Pradesh – 201015</li>
                <li>
                    Email:{" "}
                    <a
                        href="mailto:srivastavass@akgec.ac.in"
                        className="text-blue-600 hover:underline"
                    >
                        srivastavass@akgec.ac.in
                    </a>
                </li>
                <li>
                    Mobile:{" "}
                    <span className="text-blue-600">9818590621</span>
                </li>
            </ul>
        </div>
    </>,
}


const Library = () => {
    const [activeTab, setActiveTab] = useState("Home")

    return (
        <>
            <div className="grid grid-cols-8 bg-gray-100">
                <div className="col-span-2 sticky top-24 h-fit bg-white shadow-md rounded-lg">
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-novaBold uppercase">Library</h2>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col space-y-2">
                            {libraryTabs.map((tab) => (
                                <ul key={tab}>
                                    <li className={`px-4 py-2 rounded font-novaReg cursor-pointer ${activeTab === tab ? "bg-black text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"} 
                            justify-start`} onClick={() => setActiveTab(tab)}>{tab}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-6 flex-grow ml-2 overflow-auto bg-white shadow-md rounded-lg">
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-novaBold uppercase">{activeTab}</h2>
                    </div>
                    <div className="p-4">
                        <span className="whitespace-pre-wrap text-justify">{libraryContent[activeTab]}</span>
                    </div>
                </div>
            </div>
            {/* <JournalData tabs={libraryTabs} content={libraryContent} /> */}
        </>
    );
};

export default Library;
