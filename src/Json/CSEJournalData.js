
import Accordion from "@/Components/Accordion"
import { Volume_1_Issue_1, Volume_1_Issue_2, Volume_2_Issue_1, Volume_2_Issue_2, Volume_3_Issue_1, Volume_3_Issue_2 } from "./CSEJournalTableData";

const journalDetails = [
    { label: "Title", value: "GLIMPSE – Journal of Computer Science" },
    { label: "Starting Year", value: "2022" },
    { label: "Frequency", value: "2" },
    { label: "ISSN", value: "3048-4618" },
    {
        label: "Publisher",
        value: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh, India"
    },
    { label: "Chief Editor", value: "Dr. Rajesh Prasad" },
    {
        label: "Copyright",
        value: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh, India"
    },
    {
        label: "Publication URL",
        value: <a href="https://www.akgec.ac.in/cse-journal-gjcs/" className="text-blue-500 underline">
            https://www.akgec.ac.in/cse-journal-gjcs/
        </a>
    },
    { label: "Language", value: "English" },
    { label: "Publication Format", value: "Online" },
    { label: "Phone No.", value: "+919667896459" },
    {
        label: "Email ID",
        value: <a href="mailto:prasadrajesh@akgec.ac.in" className="text-blue-500 underline">
            prasadrajesh@akgec.ac.in
        </a>
    },
    { label: "Mobile No.", value: "+919667896459" },
    {
        label: "Address",
        value: "27th KM Milestone, Delhi – Meerut Expy, Ghaziabad-201009, Uttar Pradesh"
    }
];

const editorialBoard = [
    {
        role: "Executive Editor",
        name: "Dr. Anu Chaudhary",
        department: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009",
        email: "chaudharyanu@akgec.ac.in",
        pdf: "/pdf/cse-journal-gjcs/HODCSE_Profile.pdf"
    },
    {
        role: "Editor-in-chief",
        name: "Dr. Rajesh Prasad",
        department: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009",
        email: "prasadrajesh@akgec.ac.in",
        pdf: "/pdf/cse-journal-gjcs/Dr.-Rajesh-Prasad.pdf"
    },
    {
        role: "Associate Editor",
        name: "Dr. Shashank Sahu",
        department: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009",
        email: "sahushashank@akgec.ac.in",
        pdf: "/pdf/cse-journal-gjcs/Dr.-Shashank-Sahu.pdf"
    },
    {
        role: "Associate Editor",
        name: "Dr. Avdhesh Gupta",
        department: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009",
        email: "guptaavdhesh@akgec.ac.in",
        pdf: "/pdf/cse-journal-gjcs/Dr.-Avdhesh-Gupta.pdf"
    },
    {
        role: "Associate Editor",
        name: "Dr. Sonam Gupta",
        department: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009",
        email: "guptasonam@akgec.ac.in",
        pdf: "/pdf/cse-journal-gjcs/Dr.-Sonam-Gupta.pdf"
    },
    {
        role: "Associate Editor",
        name: "Dr. Santosh Kumar Upadhyay",
        department: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009",
        email: "upadhyaysantosh@akgec.ac.in",
        pdf: "/pdf/cse-journal-gjcs/Dr.-Santosh-Kumar-Upadhyay.pdf"
    },
    {
        role: "Associate Editor",
        name: "Dr. Akhilesh Verma",
        department: "Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009",
        email: "vermaakhilesh@akgec.ac.in",
        pdf: "/pdf/cse-journal-gjcs/Akhilesh-Verma-.pdf"
    }
];

const volume3 = [
    { id: 1, title: "Volume-3 | Issue - 2 July to December" },
    { id: 2, title: "Volume-3 | Issue - 1 January to June" },
]
const volume2 = [
    { id: 1, title: "Volume-2 | Issue - 2 July to December" },
    { id: 2, title: "Volume-2 | Issue - 1 January to June" },
]
const volume1 = [
    { id: 1, title: "Volume-1 | Issue - 2 July to December" },
    { id: 2, title: "Volume-1 | Issue - 1 January to June" },
]

const volume3Mapping = {
    1: Volume_3_Issue_2,
    2: Volume_3_Issue_1,
}
const volume2Mapping = {
    1: Volume_2_Issue_2,
    2: Volume_2_Issue_1,
}
const volume1Mapping = {
    1: Volume_1_Issue_2,
    2: Volume_1_Issue_1,
}

export const tabs = [
    "About",
    "Patron-in-Chief",
    "Editorial Board",
    "Aim and Scope",
    "Paper Submission",
    "Archives",
    "Contact Us"
]

export const content = {
    "About": <> <ul className="space-y-3"><li>The Glimpse Journal of Computer Science (GJCS) is an international forum for computer scientists and engineers involved in all aspects of computer science and technology to publish high quality, refereed papers.</li>

        <li>The journal offers survey and review articles from experts in the field, promoting insight and understanding of the state of the art, and trends in technology. The journal aims to provide platform for researcher, academicians, developers, industry experts, and authors interested in state-of-the art activities via publishing their research-based papers, articles and case studies on latest trend in computing. While the journal presents mostly previously unpublished materials, selected conference papers with exceptional merit are also published, at the discretion of the editors.</li>

        <li>Coverage includes cloud computing, computer system and architecture, artificial intelligence and pattern recognition, computer networks and distributed computing, computer graphics and multimedia, software systems, data management and data mining, theory and algorithms, emerging areas, and many more.</li>

        <li><strong>Instruction to Authors / Author Guidelines:</strong> Authors can format their paper as per the IEEE template available at <a className="text-blue-500" href="/pdf/cse-journal-gjcs/Template.docx">Template</a></li>

        <li><strong>Submission Details: </strong> Email your manuscript to this email-id: <a className="text-blue-500" href="mailto:prasadrajesh@akgec.ac.in">prasadrajesh@akgec.ac.in</a>
        </li>
        <li><strong>Review Policy: </strong> All submissions to this journal are first reviewed for completeness and only then sent to be assessed by an Editor who will decide whether they are suitable for peer review. Where an Editor is on the author list or has any other competing interest regarding a specific manuscript, another member of the Editorial Board will be assigned to oversee peer review. Editors will consider the peer-reviewed reports when making a decision, but are not bound by the opinions or recommendations therein. A concern raised by a single peer reviewer or the Editor themself may result in the manuscript being rejected. Authors receive peer review reports with the editorial decision on their manuscript.
        </li>
        <li><strong>Plagiarism Policy: </strong> The journal is strictly against any unethical act of copying or plagiarism in any form. Plagiarism is said to have occurred when large portions of a manuscript have been copied from existing previously published resources.
        </li>
        <li>Manuscripts found to be plagiarized during the stages of review are out-rightly rejected and not considered for publication in the journal.</li>
        <li>Reuse of words must be kept to a minimum, credited, or quoted in the text, and all sources must be cited when they are used. The journal uses the Similarity Check service provided by Turnitin to provide editors with a user-friendly tool to help detect plagiarism. It does this by comparing manuscripts with both a web repository and the CrossRef database. A text similarity below 20% is acceptable by the journal.</li>
    </ul>
        <div className="mt-5 max-w-3xl mx-auto overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                <caption className="text-lg font-bold mb-4">JOURNAL PARTICULARS</caption>
                <tbody>
                    {journalDetails.map((item, index) => (
                        <tr key={index}>
                            <th className="border border-gray-300 p-2 font-medium">{item.label}</th>
                            <td className="border text-sm border-gray-300 p-2">{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>,
    "Patron-in-Chief": <>
        <div className="grid grid-cols-5">
            <div className="col-span-2 relative">
                <img
                    src="/image/leadership/director-1.webp"
                    alt="director-general"
                    className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-white/0 pt-16 p-4">
                    <b className="font-novaBold text-lg text-white">Dr R.K. Agarwal</b>
                    <small className="block text-white text-[11px]  -mt-1">Director General, AKGU</small>
                </div>
            </div>
            <div className="col-span-3 overflow-y-auto scrollbar-thin">
                <ul className="font-novaReg text-sm space-y-2 h-96 pl-3 leading-4">
                    <li>Dr. R.K. Agarwal has an exceptionally brilliant academic background with B.Tech from IIT Kanpur, M.S. from CIT, Cranfield, UK and PhD from IISc Bangalore. During his illustrious career of nearly three decades in the Indian Air Force and Defence Research & Development Organization (DRDO), he has held various key appointments including Chief Engineering Officer of an Operational Base, Director (Engg) at Air HQ and Project Director at Centre for Airborne Systems. His vast managerial, administrative, research and academic experience includes teaching assignments at Air Force Technical College and nine years of pioneering R&D work on the prestigious AWACS project in DRDO. He has also been a member of the Aeronautical Research & Development Board (ARDB) panel for approval and review of sponsored research projects at various centres of Excellence established at IITs and CSIR Laboratories.</li>
                    <li>He is the recipient of the coveted Royal Aeronautical Society (UK) award for academic excellence at CIT and a citation with cash award by DRDO for his contribution to the design and development of Airborne Early Warning aircraft, culminating in its maiden flight.</li>
                    <li>After taking voluntary retirement in 2004, Dr. Agarwal decided to contribute in the field of technical education and has been the Director of Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad since then. He has been persistently working towards setting new benchmarks in academic excellence as well as industry–academia interface to make the students globally competitive and employable. During his tenure, the college has not only been consistently maintaining exceptional results and placements but has also made significant progress in research and industry relevant consultancy projects. A number of initiatives and collaborative ventures with eminent multi-national companies have led to establishment of many multi-disciplinary, high technology industry relevant facilities. These include India’s first KUKA Industrial Robotics Training Centre, NI-LabVIEW Academy, Bosch Rexroth Centre of Competence in Automation Technologies, Janatics Industrial Pneumatic Knowledge Centre and Mitsubishi Electric India.</li>
                    <li>The college has also achieved the unique distinction of receiving the Academic Excellence Award for Best Engineering College in Uttar Pradesh Technical University (UPTU) for two successive years under his able guidance.</li>
                    <li>He has also contributed in bringing about a culture of corporate social responsibility in academic institutions. The social activities initiated by him include running a free primary school in the college, adopting a municipal corporation school in a nearby village, providing tuition fee subsidy to children of class IV employees, donating computers to spread computer literacy and generously contributing for relief work after natural calamities. Involvement in these activities makes the students conscious of their civic and social responsibilities. He places special emphasis on all round development with focus on inculcating self-discipline, good moral values, ethics, work culture and a positive attitude to make the students not just competent professionals but also good citizens and responsible members of the society.</li>
                    <li>His wide ranging experience, vision and dynamism have infused inspiration and provided a road map for academic institutions to achieve the zenith of excellence in all fields of activities.</li>
                    <li>Dr. R.K. Agarwal’s extraordinary inspiring-vision catapulted AKGEC to number one position for all time to come. He took the momentous decision in 2010 to launch this biannual publication to nurture creativity and encourage innovations.</li>
                </ul>
            </div>
        </div>
    </>,
    "Editorial Board": <>
        <div className="p-4">
            <h2 className="text-2xl text-center font-bold mb-4">Editorial Board</h2>
            <div className="space-y-6">
                {editorialBoard.map((member, index) => (
                    <div key={index} className="border-b pb-4">
                        <h3 className="text-lg font-semibold">{member.role}</h3>
                        <p className="text-gray-700">{member.name}</p>
                        <p className="text-gray-600">{member.department}</p>
                        <p>
                            Email:{" "}
                            <a href={`mailto:${member.email}`} className="text-blue-500 underline">
                                {member.email}
                            </a>
                        </p>
                        <p>
                            Profile Link:{" "}
                            <a href={member.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                Click here
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </>,
    "Aim and Scope": <div>
        <span className="mb-5">Glimpse Journal of Computer Science, is the official journal of the Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad. It publishes the work involved in all aspects of computer science, information technology and technology. Papers reporting original research and innovative applications from all parts of the world are welcome. Papers for publication in the journal are selected through rigorous peer review, to ensure originality, timeliness, relevance, and readability. While the journal emphasizes the publication of previously unpublished articles, selected extended conference papers with exceptional merit are also considered. The journal also seeks clearly written survey and review articles from experts in the field, to promote insightful understanding of the state-of-the-art and technology trends.</span>
        <strong>Topics covered by the journal include but are not limited to:</strong>
        <ul className="font-novaReg list-disc space-y-3 mt-2 pl-5">
            <li>Theoretical Computer Science</li>
            <li>Information technology</li>
            <li>Computer Architecture and Systems</li>
            <li>Artificial Intelligence</li>
            <li>Computer Networks and Distributed Computing</li>
            <li>Computer Graphics and Multimedia</li>
            <li>Software Systems</li>
            <li>Data Management and Data Mining</li>
            <li>Health informatics</li>
            <li>Theory and Algorithms</li>
            <li>Emerging Areas</li>
        </ul>
    </div>,
    "Paper Submission": <div>
        <ul className="space-y-3">
            <li><strong>Submission guideline: </strong> Authors can format their paper as per the IEEE template available at <a className="text-blue-500" href="/pdf/cse-journal-gjcs/Template.docx">Template</a></li>
            <li><strong>Submit manuscript: </strong> Email your manuscript to this email-id: <a className="text-blue-500" href="mailto:prasadrajesh@akgec.ac.in">prasadrajesh@akgec.ac.in</a></li>
        </ul>
    </div>,
    "Archives": <>
        <div>
            <h2 className="text-xl font-novaSemi mb-4">Volume-3 | 2024</h2>
            <Accordion years={volume3} dataMapping={volume3Mapping} />
        </div>
        <div>
            <h2 className="text-xl font-novaSemi mb-4">Volume-2 | 2023</h2>
            <Accordion years={volume2} dataMapping={volume2Mapping} />
        </div>
        <div>
            <h2 className="text-xl font-novaSemi mb-4">Volume-1 | 2022</h2>
            <Accordion years={volume1} dataMapping={volume1Mapping} />
        </div>
    </>,
    "Contact Us": <div className="flex justify-between gap-3">
        <div className="max-w-md space-y-3">
            <h2 className="font-novaSemi text-2xl">Editor-in-chief</h2>
            <strong>Dr. Rajesh Prasad</strong>
            <span>Professor, Computer Science and Engineering, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India-201009</span>
            <span className="block"><strong>Email: </strong> prasadrajesh@akgec.ac.in</span>
            <span className="block"><strong>Mobile No: </strong> +919667896459</span>
        </div>
        <div className="max-w-md space-y-3">
            <h2 className="font-novaSemi text-2xl">Publisher</h2>
            <strong>Department of Computer Science and Engineering, Ajay Kumar Garg Engineering College,</strong>
            <span>27th KM Milestone, Delhi – Meerut Expy, Ghaziabad-201009, Uttar Pradesh</span>
            <span className="block"><strong>Email: </strong> info@akgec.ac.in</span>
            <span className="block"><strong>Mobile No: </strong> +917290034978</span>
        </div>
    </div>
}