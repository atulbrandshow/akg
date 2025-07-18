import Accordion from "@/Components/Accordion"
import { Journal_Jan_June_2010, Journal_Jan_June_2011, Journal_Jan_June_2012, Journal_Jan_June_2013, Journal_Jan_June_2014, Journal_Jan_June_2015, Journal_Jan_June_2016, Journal_Jan_June_2017, Journal_January_June_2018, Journal_January_June_2019, Journal_January_June_2020, Journal_January_June_2021, Journal_January_June_2022, Journal_January_June_2023, Journal_January_June_2024, Journal_July_Dec_2010, Journal_July_Dec_2011, Journal_July_Dec_2012, Journal_July_Dec_2013, Journal_July_Dec_2014, Journal_July_Dec_2015, Journal_July_Dec_2016, Journal_July_Dec_2017, Journal_July_December_2018, Journal_July_December_2019, Journal_July_December_2020, Journal_July_December_2021, Journal_July_December_2022, Journal_July_December_2023, journalYears } from "@/Json/JournalTableData";

const JournalDataMapping = {
    1: Journal_January_June_2024,
    2: Journal_July_December_2023,
    3: Journal_January_June_2023,
    4: Journal_July_December_2022,
    5: Journal_January_June_2022,
    6: Journal_July_December_2021,
    7: Journal_January_June_2021,
    8: Journal_July_December_2020,
    9: Journal_January_June_2020,
    10: Journal_July_December_2019,
    11: Journal_January_June_2019,
    12: Journal_July_December_2018,
    13: Journal_January_June_2018,
    14: Journal_July_Dec_2017,
    15: Journal_Jan_June_2017,
    16: Journal_July_Dec_2016,
    17: Journal_Jan_June_2016,
    18: Journal_July_Dec_2015,
    19: Journal_Jan_June_2015,
    20: Journal_July_Dec_2014,
    21: Journal_Jan_June_2014,
    22: Journal_July_Dec_2013,
    23: Journal_Jan_June_2013,
    24: Journal_July_Dec_2012,
    25: Journal_Jan_June_2012,
    26: Journal_July_Dec_2011,
    27: Journal_Jan_June_2011,
    28: Journal_Jan_June_2010,
    29: Journal_July_Dec_2010,
};

export const tabs = [
    "About",
    "Patron-in-Chief",
    "Editorial Advisory Board",
    "Editorial Team",
    "Call for Manuscripts",
    "Payment & Subscription",
    "Archives"
]

export const content = {
    "About": `Ajay Kumar Garg University commenced publication of a biennial Technical Journal in 2010 to disseminate information spanning the entire spectrum of engineering and technology. We envisioned that this activity will help unleash the creative potential of technical community and provide a credible platform to receive professional recognition. Our journey through this arduous path has been a satisfying effort. We have sustained interest and support of the country's Technical community.

The Journal aims to provide platform to researchers, academicians, developers, industry experts and authors interested in state-of-the art and state-of-the-practice activities via publishing their research-based papers, articles and case studies on topics of current concern in the areas of engineering branches, namely electrical engineering, electronics, communication technology, instrumentation and measurement, information technology, computers, mechanical engineering, robotics and allied disciplines.

Our source of articles mainly comprises the faculty teaching in University across the country. Process of publication of the Journal is supervised by IIT-background professionals with impeccable credentials. The articles are blind-peer reviewed and published following internationally-accepted IEEE style as the format for publication. Printed on art paper, the Journal with ISSN number 0975-9514 is currently running in its Ninth volume. To begin with we had planned the Journal at the national level. Gradually, the contributions started coming from overseas Universities and we converted it to an international journal.

To recognize the invaluable intellectual contribution made by professionals in advancing the noble cause of dissemination of scientific and engineering knowledge, all published articles since Volume 7 of the "AKGU International Journal of Technology" are being suitably rewarded. A prize of Rs.5,000 is being paid to the paper adjudged the best for each issue. For the balance, an amount of Rs.2,500 per article is earmarked.`,
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
                    <li>After taking voluntary retirement in 2004, Dr. Agarwal decided to contribute in the field of technical education and has been the Director of Ajay Kumar Garg University (AKGU), Ghaziabad since then. He has been persistently working towards setting new benchmarks in academic excellence as well as industry–academia interface to make the students globally competitive and employable. During his tenure, the college has not only been consistently maintaining exceptional results and placements but has also made significant progress in research and industry relevant consultancy projects. A number of initiatives and collaborative ventures with eminent multi-national companies have lead to establishment of many multi-disciplinary, high technology industry relevant facilities. These include India’s first Kuka Industrial Robotics Training Centre, NI-LabVIEW Academy, Bosch Rexroth Centre of Competence in Automation Technologies, Janatics Industrial Pneumatic Knowledge Centre and Mitsubishi Electric India. The college has also achieved the unique distinction of receiving the Academic Excellence Award for Best University in UPTU for two successive years under his able guidance.</li>
                    <li>He has also contributed in bringing about a culture of corporate social responsibility in academic institutions. The social activities initiated by him include running a free primary school in the college, adopting a municipal corporation school in a nearby village, providing tuition fee subsidy to children of className IV employees, donating computers to spread computer literacy and generously contributing for relief work after natural calamities. Involvement in these activities makes the students conscious of their civic and social responsibilities. He places special emphasis on all round development with focus on inculcating self-discipline, good moral values, ethics, work culture and a positive attitude to make the students not just competent professionals but also good citizens and responsible members of the society.</li>
                    <li>His wide ranging experience, vision and dynamism have infused inspiration and provided a road map for academic institutions to achieve the zenith of excellence in all fields of activities.</li>
                    <li>Dr. R.K. Agarwal’s extraordinary inspiring-vision catapulted AKGU to numero uno position for all time to come. He took the momentous decision in 2010 to launch this biannual publication to nurture creativity and encourage innovations. The journal received manuscripts even from overseas authors, earning accolades from research community worldwide.</li>
                </ul>
            </div>
        </div>
    </>,
    "Editorial Advisory Board": <>
        <div className="p-4 bg-gray-100 rounded-lg">
            <iframe
                src="/pdf/international-journal/Editorial-Advisory-Board.pdf"
                className="w-full h-[600px] border-2 border-gray-700 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                title="Editorial-Advisory-Board"
            />
        </div>
    </>,
    "Editorial Team": <>
        <div className="flex justify-start gap-5">
            <img className="w-20" src="/image/asas.jpg" alt="Dr Ranjit Singh" />
            <div>
                <h3 className="font-novaBold text-lg">Dr Ranjit Singh</h3>
                <span className="font-novaReg">B.Tech, M.Tech & Ph.D (IITK)</span>
            </div>
        </div>
        <ul className="font-novaReg space-y-3 mt-4">
            <li><strong>Dr Ranjit Singh</strong> (b. 17 Aug 1948) obtained B.Tech, M.Tech. and Ph.D degrees from Indian Institute of Technology, Kanpur in 1969, 1971 and 1975 respectively specializing in the area of Electronic communication circuits and devices.</li>
            <li>Currently, he is Editor-in-Chief of the <i>‘AKGU International Journal of Technology’</i>, which is running in ninth volume.</li>
            <li>Published large number of technical papers in IETE journals in addition to in-depth technology-reviews covering emerging trends in Communications and information technology. He was Editor at IETE during 1975-1987; Technical Editor at ‘Telematics India’ during 1987-2001; Editor of Industrial Purchase journal during 2002- 2008.</li>
            <li>He has abiding passion for teaching and research. Guided 10 M. Tech and 2 PhD scholars besides supervising 15 B.Tech projects. Delivered Keynote address on ‘Mobile Computing’ in Feb 2014 at Annual Convention of JIMS.</li>
            <li>He is Life Fellow of the IETE and attended international conferences held in France, Singapore, USA, Hong Kong and Nepal. Daily practices advanced ‘Art-of-Living’ meditation. Also associated with ‘Amway’ and Insurance sector.</li>
            <li><strong>Contact Details:</strong> +91 9868041558</li>
            <li><strong>Email Id:</strong> <a className="text-blue-500" href="mailto:editor_journal@akgec.ac.in">editor_journal@akgec.ac.in</a>, <a className="text-blue-500" href="mailto:akgec.ece@gmail.com">akgec.ece@gmail.com</a></li>
        </ul>
    </>,
    "Call for Manuscripts": <>
        <ul className="font-novaReg space-y-3 list-inside">
            <li><strong>Invitation for Manuscripts concerning engineering subjects for publication in the AKG International Journal of Technology</strong></li>
            <li>The “AKG International Journal of Technology” i.e. AKGIJT is a peer-reviewed journal published by Ajay Kumar Garg University (AKGU). The AKGU is among the top rung technical institutions situated in the Nationals Capital Region of India in Ghaziabad. The AKGU is committed to provide world className education and research in the cutting-edge areas and has developed industry scale innovation centres in the frontline technologies. The Institute’s modern infrastructure attracts the industry to supplement training and research. The AKGIJT lives up to the vision of AKGU and publishes peer review articles in the broad areas of Engineering & Technology involving all major disciplines for the last 13 years. The Journal has so far successfully published 14 biannual volumes and archived all the issues online with free accessibility in pdf format.</li>
            <li>The AKGIJT invites scientific articles, original research, state of the art reviews and case studies from the industry, research and academic professionals for consideration of publication in this open access (without APC) journal. The submitted articles will be peer-reviewed and further consideration will follow the review report/recommendations. Submissions will be peer-reviewed by a panel of experts.</li>
            <li><strong>Contributions in the broader contemporary research involving broad engineering disciplines and multi-disciplinary areas are welcomed.</strong></li>
            <li>Brief submission guidelines are given below, but the prospective authors are encouraged to visit the Journal's website .The journal regards high value to the publication ethics and plagiarism. Detailed information for the authors including manuscript preparations, publication ethics and journal overview can be viewed on the Journal’s website.</li>
            <li>All Contributions Should be Emailed to <span className="text-blue-600 font-novaBold"><a className="text-blue-500" href="mailto:editor_journal@akgec.ac.in">editor_journal@akgec.ac.in</a></span></li>
            <li><strong>Submission guidelines:</strong></li>
            <ul className="list-disc pl-5 font-novaReg">
                <li>Submissions should be original and must not be under consideration for publications elsewhere.</li>
                <li>The authors must include a statement of originality& similarity, conflict of interest and funding information.</li>
                <li>The articles are generally limited to 3000 word and an abstract of 200 words.</li>
                <li>The manuscript must include a list of at least three keywords.</li>
                <li>The manuscript should be preferably composed in the MS Word format and equations should be typed in Equation Editor (and must not be pasted as image). The table and figures should be sequentially numbered and the legend must be separately included. The images should be of at least 300 dpi quality.</li>
                <li>All references should be listed and cited in the text as per IEEE format.</li>
            </ul>
        </ul>
    </>,
    "Payment & Subscription": <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h2 className="font-novaBold text-xl">STEP-1</h2>
                <span>Choose your Subscription</span>
                <img src="/image/international-journal/subscription-rates.jpg" alt="subscription-rates" />
                <div>
                    <h2 className="font-novaBold text-xl mt-10">STEP-3</h2>
                    <span>Click <a className="text-blue-500 hover:underline" href="https://docs.google.com/forms/d/13e-9_Aw1v-Eebu86ztvQCZyfiyH532Nkz8mtK8jCPJw/viewform?edit_requested=true" target="_blank">“Fill details online"</a> link.</span>
                </div>
                <div>
                    <h2 className="font-novaBold text-xl mt-10">STEP-4</h2>
                    <span>Fill the required details in the form and submit.</span>
                </div>
            </div>
            <div>
                <h2 className="font-novaBold text-xl">STEP-2</h2>
                <span>Online Payment : Through RTGS/NEFT</span>
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b border-gray-300 bg-gray-100 text-left">Field</th>
                            <th className="px-4 py-2 border-b border-gray-300 bg-gray-100 text-left">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">Name of the Beneficiary</td>
                            <td className="px-4 py-2 border-b border-gray-300">Ajay Kumar Garg University</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">Name of the Bank</td>
                            <td className="px-4 py-2 border-b border-gray-300">Kotak Mahindra Bank Ltd</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">Branch Address</td>
                            <td className="px-4 py-2 border-b border-gray-300">30 & 31 Navyug Market, P.B.No. 75 Ghaziabad-201001 (U.P.) - INDIA</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">Branch Code</td>
                            <td className="px-4 py-2 border-b border-gray-300">5295</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">Bank Account No.</td>
                            <td className="px-4 py-2 border-b border-gray-300">508010250461</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">Type of Bank Account</td>
                            <td className="px-4 py-2 border-b border-gray-300">Saving Bank Account</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">RTGS/NEFT/IFSC Code</td>
                            <td className="px-4 py-2 border-b border-gray-300">KKBK0005295</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-300">Contact No.</td>
                            <td className="px-4 py-2 border-b border-gray-300">0120-2790969</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="mt-5 font-novaSemi text-lg text-center">Offline Payment : Through Bank Draft/Cheque</h2>
                <p>All Cheques / Demand Drafts (DD) should be made in favour of “Ajay Kumar Garg Engineering College.", payable at Ghaziabad.</p>
            </div>
        </div>
    </>,
    "Archives": <>
        <Accordion years={journalYears} dataMapping={JournalDataMapping}/>
    </>
}