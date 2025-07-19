"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Monitor, Database, Box, FileCode, Smartphone, FileText } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";
import Image from "next/image";
import Link from "next/link";
import DynamicTable from "@/Components/DynamicTable";

const rushHourHeaders = ['Position', 'Team Name', 'Student Name', 'Reward'];
const townhallHeaders = ['Name of the Winners', 'Std.No.', 'Domain', 'Prize'];
const sanrachnaHeaders = ['Name of Winners', 'Roll No.', 'Rank'];
const codemazeHeaders = ["Year", "Position", "Team Name", "Candidates", "Student No"];

const rushHourData = [
  { position: '1st', teamName: 'Logic Hunters', students: ['KRISHNA BANSAL', 'MANASVI AGARWAL'], reward: 1500, },
  { position: '2nd', teamName: 'Code Crushers', students: ['PRANJAL', 'SIDDHANT GUPTA'], reward: 1000, },
  { position: '3rd', teamName: 'RTD', students: ['RAMNEET SINGH', 'PRASHANT CHAUDHARY'], reward: 500, },
];

const townhallData = [
  { name: 'Shikhar Pandey', std: '2213088', domain: 'Web Development', prize: 'Rs 1000+Tshirt' },
  { name: 'Rakshita', std: '2211135', domain: 'UI/UX Designing', prize: 'Rs 1000+Tshirt' },
  { name: 'Ananya Dixit', std: '22154118', domain: 'Machine Learning', prize: 'Rs 1000+Tshirt' },
  { name: 'Manas Srivastava', std: '2213088', domain: 'Web Development', prize: 'Rs 1000+Tshirt' },
]

const sanrachnaData = [
  { name: 'ARUJ BANSAL', rollno: 2100270120024, rank: 1 },
  { name: 'NAVODITA', rollno: 2100270100104, rank: 2 },
  { name: 'NAITIK SHARMA', rollno: 2100270120067, rank: 3 },
]

const codemazeData = [
  {
    "year": "1st",
    "position": "1st",
    "teamName": "TEAM 1",
    "candidates": ["ASHUTOSH K KUSHWAHA", "RATNESH MISHRA"],
    "studentNo": [2110083, 21153063]
  },
  {
    "year": "1st",
    "position": "2nd",
    "teamName": "TEAM 2",
    "candidates": ["ANSHUMAN NANDAN", "VEDANT PANDEY"],
    "studentNo": [21164034, 2111031]
  },
  {
    "year": "1st",
    "position": "3rd",
    "teamName": "TEAM 3",
    "candidates": ["ASHMIT PANDEY", "ABHISHEK VERMA"],
    "studentNo": [2111006, 2113093]
  },
  {
    "year": "2nd",
    "position": "1st",
    "teamName": "TEAM 1",
    "candidates": ["SARTHAK GUPTA", "AYUSHI GAUTAM"],
    "studentNo": [2015338, 2015434]
  },
  {
    "year": "2nd",
    "position": "2nd",
    "teamName": "TEAM 2",
    "candidates": ["SATWIK MAHESHWARI", "SHREYANSH MOHAN"],
    "studentNo": [2015344, 2015326]
  },
  {
    "year": "2nd",
    "position": "3rd",
    "teamName": "TEAM 3",
    "candidates": ["UDIT KANSAL", "SHASHWAT PANDEY"],
    "studentNo": [2011049, 2011049]
  }
]

const rushHourKeyMap = {
  Position: 'position',
  'Team Name': 'teamName',
  'Student Name': 'students',
  Reward: 'reward',
};

const townhallKeyMap = {
  'Name of the Winners': 'name',
  'Std.No.': 'std',
  'Domain': 'domain',
  'Prize': 'prize'
}

const sanrachnaKeyMap = {
  'Name of Winners': 'name',
  'Roll No.': 'rollno',
  'Rank': 'rank'
}

const codemazeKeyMap = {
  "Year": "year",
  "Position": "position",
  "Team Name": "teamName",
  "Candidates": "candidates",
  "Student No": "studentNo"
}

const results = [
  {
    title: "RUSH HOUR",
    desc: (
      <>
        Big Data Centre of Excellence the research and development society of AKGEC successfully organized a one-day offline coding contest, “RUSH HOUR” for second-year students in IT labs on 30th November 2023. The event was successfully conducted on the Hacker rank platform. A total of 120 students from the second year participated in the event. The participants were registered in a team of two, where each team worked on solving problems and earned points. The least scoring teams got eliminated every few minutes and the last three standing teams were declared the winner. <br /><br />
        The top three teams of the event are to be awarded with cash prizes. <br />
        <DynamicTable tableHeaders={rushHourHeaders} tableData={rushHourData} headerToKeyMap={rushHourKeyMap} />
      </>
    ),
    slides: [
      { title: 'RushHour', img: "/image/rd/big-data/RushHour_1.jpg" },
      { title: 'RushHour', img: "/image/rd/big-data/RushHour_2.jpg" },
      { title: 'RushHour', img: "/image/rd/big-data/RushHour_3.jpg" },
      { title: 'RushHour', img: "/image/rd/big-data/RushHour_4.jpg" },
      { title: 'RushHour', img: "/image/rd/big-data/RushHour_5.jpg" },
      { title: 'RushHour', img: "/image/rd/big-data/RushHour_6.jpg" },
    ]
  },
  {
    title: "TOWNHALL’ 2023",
    desc: (
      <>
        The big data center of Excellence Society successfully organized ‘TOWNHALL’ – Two days Photoshop Workshop for 1st and 2nd-year students on 29th April and 30th April 2023. The workshop was focused on various technical domains such as Web Development, App Development, DevOps, Big Data, Machine Learning, UX/UI Designing, Cloud Computing and Blockchain. Total 139 students registered for the workshop with the first year and second year showing great enthusiasm. At the end, the event concluded with an interactive Q&A session during which doubts regarding different topics like hackathons, competitive programming, college exams etc. were cleared.After the event, certain tasks were given to the attendees. On the basis of task submission following mentioned below are the winners. <br /> <br />
        Name of winners: <br />
        <DynamicTable tableHeaders={townhallHeaders} tableData={townhallData} headerToKeyMap={townhallKeyMap} />
        <br />
        The workshop was effective and helped the students learn about the basics of each domain, which would further help them choose their desired field. Positive feedback was received from the students.
      </>
    ),
    slides: [
      { title: 'Townhall', img: "/image/rd/big-data/Townhall1.jpg" },
      { title: 'Townhall', img: "/image/rd/big-data/Townhall2.jpg" },
      { title: 'Townhall', img: "/image/rd/big-data/Townhall3.jpg" },
      { title: 'Townhall', img: "/image/rd/big-data/Townhall4.jpg" },
    ]
  },
  {
    title: "SANRACHNA’ 2022",
    desc: (
      <>
        The big data center of Excellence Society successfully organized ‘SANRACHNA’ – One day Photoshop Work shop on Adobe Photoshop tool for 2nd year students on 24th November, 2022 (4.00 PM-6.30PM). Total 150 students from all branches participated in the work shop. During the work shop, the team organized a quiz based on the content delivered. This increased the fun of the event manifold times. After completion of the work shop the candidates were given 3 tasks, out of which they had to complete any one and submit the task to the next day. On the basis of task submission following mentioned below are the winners. <br /><br />
        Name of winners: <br />
        <DynamicTable tableHeaders={sanrachnaHeaders} tableData={sanrachnaData} headerToKeyMap={sanrachnaKeyMap} />

      </>
    ),
    slides: [
      { title: 'Sanrachna', img: "/image/rd/big-data/Sanrachna1.jpg" },
      { title: 'Sanrachna', img: "/image/rd/big-data/Sanrachna2.jpg" },
      { title: 'Sanrachna', img: "/image/rd/big-data/Sanrachna3.jpg" },
      { title: 'Sanrachna', img: "/image/rd/big-data/Sanrachna4.jpg" },
    ]
  },
  {
    title: "CODEMAZE 2022",
    desc: (
      <>
        The big data center of Excellence Society successfully organized Two Day offline event (CODEMAZE) for first year and second year students through HackerRank on 7th and 8th May 2022 under the supervision of Dr. Anu Chaudhary (HOD – IT), Dr. Ruchi Gupta (Associate Professor IT Department) and Mr. Sarvachan Verma (Assistant Professor IT Department). <br />
        The total 96 students from first year and 44 students from second year were participated in the event. The Participants were called up in a team of two where each team was given with 3 problem statements per round. After the completion of every round students were awarded with fun activities like riddles and puzzles. The bottom teams were eliminated after every round and this continued till the final round i.e. third round. After the successful completion of the event the winners were announced from each year. The top three teams of the event were awarded with the cash prizes. <br />
        <DynamicTable tableHeaders={codemazeHeaders} tableData={codemazeData} headerToKeyMap={codemazeKeyMap} />
      </>
    ),
    slides: [
      { title: 'Codemaze', img: "/image/rd/big-data/Codemaze1.jpg" },
      { title: 'Codemaze', img: "/image/rd/big-data/Codemaze2.jpg" },
      { title: 'Codemaze', img: "/image/rd/big-data/Codemaze3.jpg" },
      { title: 'Codemaze', img: "/image/rd/big-data/Codemaze4.jpg" },
    ]
  },
];

const sessionReport = [
  { year: "2022-23", url: "/pdf/big-data-centre/BDCOE-2022-23.pdf" },
  { year: "2021-22", url: "/pdf/big-data-centre/BDCOE-2021-22.pdf" },
  { year: "2020-21", url: "/pdf/big-data-centre/BDCOE-2020-21.pdf" },
  { year: "2019-20", url: "/pdf/big-data-centre/BDCOE-2019-20.pdf" },
  { year: "2018-19", url: "/pdf/big-data-centre/BDCOE-2018-19.pdf" },
  { year: "2017-18", url: "/pdf/big-data-centre/BDCOE-2017-18.pdf" },
]

const technologies = [
  {
    icon: <Monitor className="w-12 h-12 text-sky-400" />,
    title: "Machine Learning",
    description: ""
  },
  {
    icon: <Box className="w-12 h-12 text-sky-400" />,
    title: "Blockchain",
    description: ""
  },
  {
    icon: <FileText className="w-12 h-12 text-sky-400" />,
    title: "Deep Learning",
    description: ""
  },
  {
    icon: <Database className="w-12 h-12 text-sky-400" />,
    title: "Big Data Technologies",
    description: "Apache Hadoop, Apache Spark, Apache Flink, Apache Pig, Apache Hive, Apache Kafka, MongoDB, Apache Mahout, Cassandra, etc."
  },
  {
    icon: <FileCode className="w-12 h-12 text-sky-400" />,
    title: "Web Development",
    description: "Angular, Django, PHP"
  },
  {
    icon: <Smartphone className="w-12 h-12 text-sky-400" />,
    title: "Android Development",
    description: "Kotlin, Java"
  }
]

const BigDataCentre = () => {
  const [openIndices, setOpenIndices] = useState([]);

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
    <>
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/image/rd/big-data/big-data.jpg"
                alt="Team photo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-4">Introduction</h1>
              <p className="text-gray-600">
                "Big Data Centre of Excellence" is the Research and Development centre of AKGEC. It is the first "Centre of Excellence" in AKTU, working in the field of BigData. It was established in 2013 and since 4 years it has been motivating and guiding the students into the world of Big Data. Big Data is the most trending technology of 21st century. It is the hottest market currently. Companies require Big Data Analysts to analyze the large amount of data being generated and gain insights from the data. Businesses are focusing more on agility and innovation, adopting BigData technologies help the companies achieve that in no time. The team aspires to develope skills in Big Data and gradually move from Machine Learning to Deep Learning and finally Artificial Intelligence.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-center mb-4">Year wise Sessional Reports</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {sessionReport.map((elem) => (
                <Link href={elem.url} key={elem.year} target="_blank" className="border border-gray-300 bg-gray-300 text-black px-5 py-2 rounded-md hover:text-white hover:bg-black">
                  {elem.year}
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              The various technologies on which the team works are:
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p>New comers are recruited as trainees through a recruitment drive. The trainees are given one month training and finalized on the basis of improvement and performance.</p>
              <p>Besides helping students of our college, the centre tries to solve the problems of students from other colleges and IT professionals who are new to the world of Big Data. Others can communicate with the centre through website mentioned.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Activities/Events</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Since its establishment, the centre is progressing tremendously, winning several online competitions as well as intercollege competitions in Big Data domain. The members of the centre participate in teams also and compete on national level.
              </p>
              <p>
                Most fascinating and knowledge earning activity is <strong>“Knowledge Transfer Session”</strong> that takes place every week in the lab itself. During this session, the members share their knowledge on a topic, with other members and also clarify the doubts so that all members stand on the same level. This creates a very interesting and motivating environment in the lab itself.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
          <div className="w-full text-black">
            {results.map((result, index) => (
              <div key={index} className="border-b border-gray-300">
                <a
                  onClick={() => toggleDomain(index)}
                  className={`flex justify-between items-center w-full px-5 ${openIndices.includes(index) ? 'text-white bg-indigo-950' : 'text-black'} py-6 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-indigo-900 hover:text-white`}
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
                  <div className="pl-5 flex justify-around items-start py-10 bg-gray-200">
                    <p className={`font-novaReg mb-4 ${result.slides && "max-w-3xl"}`}>{result.desc}</p>
                    {/* You can render images as needed */}
                    {result.slides && <CubeSlider slides={result.slides} />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="py-5 space-y-8">
          {/* Main Event */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Detail of Event:</h2>
            <p className="mb-2">Abhiyantriki – Intra College 48-Hour Hackathon by Big Data Centre of Excellence (BDCoE)</p>

            <div className="space-y-3">
              <div>
                <span className="font-medium">Dates:</span> 16th – 17th November, 2019
              </div>

              <div>
                <span className="font-medium">Prizes, if any:</span> Prize Rs. 3000/- (Utkarsh Srivastava, IV Year CSE; Shresth Jauhari, IV Year CSE; Vibhas Saxena, III Year CSE)
              </div>

              <div>
                <span className="font-medium">Theme of the event:</span>
                <p className="mt-1">
                  The sole purpose of Abhiyantriki was to create awareness about the vital technical skills needed for the students to help them for participating in National Level Hackathons in the future. Abhiyantriki provided a platform where the students were motivated and guided by the members of BDCoE in making their projects.
                </p>
              </div>
            </div>
          </div>

          {/* Foundation Day Event */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200">
            <div className="space-y-3">
              <div>
                <span className="font-medium">Event Name:</span> 4th Foundation Day
              </div>
              <div>
                <span className="font-medium">Date:</span> 10th April, 2019
              </div>
              <div>
                <span className="font-medium">Co-ordinators:</span> Dr. Sushil Kumar and Ms. Anu Gupta
              </div>
            </div>
          </div>

          {/* Workshop Event */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200">
            <div className="space-y-3">
              <div>
                <span className="font-medium">Event Name:</span> 4 Days Workshop on Machine Learning with Python
              </div>
              <div>
                <span className="font-medium">Dates:</span> 25th-28th Feb, 2019
              </div>
              <div>
                <span className="font-medium">Details of event:</span>
                <p className="mt-1">
                  A four Day workshop was organized by Big Data Centre of Excellence on "Machine Learning with Python" under Dr. Sushil Kumar (Assistant Professor) and Ms. Anu Gupta, (Assistant Professor) Co-ordinator Big Data Centre of Excellence (BDCoE). The workshop commenced on 25th February, 2019 and successfully ended on 28th February, 2019. The students were taught basics of Python, Statistics, and various machine learning algorithms along with hands on practice on Jupyter Notebooks. A total of 36 students successfully completed the workshop. After the successful completion of the workshop, a competition was hosted on Kaggle and top three winning students were awarded with the cash price of worth Rs. 500, Rs.300 and Rs. 200 respectively along with certificate of appreciation.
                </p>
              </div>
            </div>
          </div>

          {/* Activities and Workshops Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Centre Activities</h3>
              <p className="mb-4">Centre has been conducting various activities to guide more and more students into world of Big Data and to provide them a start so that they can excel in their interest. Various events conducted by the centre are-</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Seminar for awareness regarding Big Data</li>
                <li>Recruitment drive to recruit new members</li>
                <li>Training of newly recruited trainees</li>
                <li>Workshop open to students of or college from all the branches and all the years</li>
                <li>A game event open to all the students</li>
                <li>Internal Hackathon- projects on Big Data</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Workshops and Courses</h3>
              <p className="mb-4">The workshops and courses conducted till date are:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete course on Hadoop Ecosystem</li>
                <li>Workshop on Pig and Hive</li>
                <li>Seminar on Big Data technologies</li>
                <li>Workshop on Data Science with R</li>
                <li>Machine Learning and Introduction to neural networks</li>
                <li>17th and 18th February 2018, a 12 hours workshop was conducted, on the topic- "Machine Learning and Introduction to neural networks". The event was a great success with maximum participation from the students of 1st, 2nd and 3rd year.</li>
              </ul>
            </div>
          </div>

          {/* Faculty Section */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Faculty coordinators-</h3>
            <ul className="space-y-2">
              <li>Dr Ruchi Gupta (Associate Professor)</li>
              <li>Mr. Rahul Sharma (Assistant Professor)</li>
              <li>Mr Sarvachan Verma (Assistant Professor)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BigDataCentre;