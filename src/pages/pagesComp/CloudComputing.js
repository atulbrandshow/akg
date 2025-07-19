"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";
import Image from "next/image";
import Link from "next/link";

const results = [
  {
    title: "Workshop on “React-ion” 2023",
    desc: (
      <>
        Information Technology department in collaboration with department society CLOUD COMPUTING CELL organized 2-days workshop “React-ion", a code along with an introductory workshop to Web development through React Framework on 10th(Saturday) and 11th(Sunday) of June at Web Technology Lab. 40 students from 1st and 2nd year were registered and actively participated in the workshop.The workshop started on 10th June. The workshop was conducted from 10 AM to 4 PM on 10th and 11th of June. <br />
        On the first day, Second-year and Third-year members of the Cloud Computing Cell taught about the basics of Web development with HTML and CSS. Students were guided through a code along exercise where they practiced and implemented syntax to develop a webpage. Students were also provided with refreshment before they were introduced to JavaScript language.On the Second day, all issues and queries regarding HTML, CSS and JavaScript were resolved and then all participants were introduced to React Framework and its use was demonstrated. Participants were also encouraged to follow all commands and codes along with the instructor. Workshop concluded with an Introduction to Cloud Computing and its role in the development of students. <br />
        It was a very informative session with lots of positive feedback by the students who attended the event. Cloud Computing Cell has successfully conducted this workshop and also aspires to conduct more such kinds of events to encourage learning of the new Technical skills and fields. <br />
        The event was well coordinated by our faculty coordinator Mr. Santosh Mishra (Assistant Professor-IT), Mr. Sundeep Raj (Assistant Professor-IT) and all the students ‘members of cloud cell’. <br />
        Cloud Computing Cell has successfully conducted this workshop and also aspires to conduct more such kind of events to encourage learning of the new Technical skills and fields. <br />
      </>
    ),
    slides: [
      { title: 'Reaction', img: "/image/rd/cloud-computing-cell/Reaction_1.jpg" },
      { title: 'Reaction', img: "/image/rd/cloud-computing-cell/Reaction_2.jpg" },
      { title: 'Reaction', img: "/image/rd/cloud-computing-cell/Reaction_3.jpg" },
    ]
  },
  {
    title: "Cloudsplore 2022",
    desc: (
      <>
        The Cloud Computing Cell has conducted a workshop from 28th to 29th April 2022 titled as “CloudSplore” . The workshop was conducted under the guidance of Dr. Parneet Kaur and Dr. Abhilasha Singh (Coordinators Cloud Cell). <br />
        The Cloud Computing cell has been in successful execution for more than 6 years and has bookmarked itself as the one of the prestigious technical societies of AKGEC, IT Department. In order to continue the trends of the effective learning and capturing intelligent minds to serve the college in even bigger and better way, it is necessary to organize events which help students to gain extra knowledge and sharpen their technical skills. Thus, in this series another workshop ‘Cloudsplore’ was conducted by the cell on 28th and 29th April 2022. This event was open to all first- and second-year students, 140 students were registered for this Workshop. <br />
        The workshop was carried out in following manner: <br /> <br />
        Round 1: This Round was conducted in 2 days in which we explained the cloud and its application along with Hands-On-Experience on Virtual Machine creation on AWS and GitHub to all the participants. This round was held at Web technology lab, IT lab 1 and IT lab 2 on 28th and 29th April at 4 PM. <br /><br />
        Round 2: This Round was consisted of quiz based on cloud and it`s services such as Virtual Machine creation and GitHub questions which was self-paced to access the basic technical and IQ of the students. The students were shortlisted on the basis of their marks for this round. This round was held online at D2C Platform on 30th April 2022 at 7:00 PM. <br /><br />
        The top three winners of the event were awarded with the cash prizes: <br />
        <div className="overflow-x-auto max-w-md my-5">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-950 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left rounded-tl-lg">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Branch</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                <th className="border border-gray-300 px-4 py-2 text-left rounded-tr-lg">Prizes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Atul Kumar</td>
                <td className="border border-gray-300 px-4 py-2">IT</td>
                <td className="border border-gray-300 px-4 py-2">1st Year</td>
                <td className="border border-gray-300 px-4 py-2">1st</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Archas Srivastava</td>
                <td className="border border-gray-300 px-4 py-2">CS</td>
                <td className="border border-gray-300 px-4 py-2">1st Year</td>
                <td className="border border-gray-300 px-4 py-2">2nd</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Malika Garg</td>
                <td className="border border-gray-300 px-4 py-2">CS</td>
                <td className="border border-gray-300 px-4 py-2">1st Year</td>
                <td className="border border-gray-300 px-4 py-2">3rd</td>
              </tr>
            </tbody>
          </table>
        </div>
        Finally, everyone present in the workshop appreciated the sessions and desired more sessions to be held which must focus primarily on Cloud Computing and its latest trends and technologies. Some of the main pics of the event are as follows:
      </>
    ),
    slides: [
      { title: 'CC', img: "/image/rd/cloud-computing-cell/CC1.jpg" },
      { title: 'CC', img: "/image/rd/cloud-computing-cell/CC2.jpg" },
      { title: 'CC', img: "/image/rd/cloud-computing-cell/CC3.jpg" },
      { title: 'CC', img: "/image/rd/cloud-computing-cell/CC4.jpg" },
      { title: 'CC', img: "/image/rd/cloud-computing-cell/CC5.jpg" },
    ]
  },
  {
    title: "Erudition’20",
    desc: (
      <>
        Cloud Computing Cell conducted a 9-hour interactive workshop Erudition’20 on AWS, GitHub, Raspberry Pi, version control system and other trending topics on IOT. The event included hands on project for deploying home based Personal Cloud Storage. A Raspberry Pi kit worth ₹ 3000 is rewarded to the top performing student in the event. <br />
        For this event we received massive participation of registered entries over 400 but due to limited seats available only 70 participants were allowed. <br />
        <strong>List Of Winners</strong> <br />
        <div className="overflow-x-auto max-w-xl my-5">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-950 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left rounded-tl-lg">Position</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Names</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Student No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left rounded-tr-lg">Award</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">1st</td>
                <td className="border border-gray-300 px-4 py-2">Rydam Agrawal</td>
                <td className="border border-gray-300 px-4 py-2">1911007</td>
                <td className="border border-gray-300 px-4 py-2">Raspberry Pi + Goodies</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">2nd</td>
                <td className="border border-gray-300 px-4 py-2">Aditya Dwivedi</td>
                <td className="border border-gray-300 px-4 py-2">1931011</td>
                <td className="border border-gray-300 px-4 py-2">goodies</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">3rd</td>
                <td className="border border-gray-300 px-4 py-2">Sumit Dagar</td>
                <td className="border border-gray-300 px-4 py-2">1910091</td>
                <td className="border border-gray-300 px-4 py-2">goodies</td>
              </tr>
            </tbody>
          </table>
        </div>
        This Workshop was conducted under event coordinators Abhineet Chaudhary (CS – 1710004) & Aditya Gautam (CS – 1710111) from date – 28th Feb to 1st March 2020.
      </>
    ),
    slides: [
      { title: 'Paradigm', img: "/image/rd/cloud-computing-cell/Paradigm3.jpeg" },
      { title: 'Paradigm', img: "/image/rd/cloud-computing-cell/Paradigm2.jpeg" },
      { title: 'Paradigm', img: "/image/rd/cloud-computing-cell/Paradigm1.jpeg" },
    ]
  },
  {
    title: "Screening Program of Cloud Computing Cell- SPOCC",
    desc: (
      <>
        Team CLOUD COMPUTING CELL organized a recruitment drive – SPOCC’19 in odd semester 2019-20. In order to continue the trends of the cell for effective learning and capturing intelligent minds to serve the college in even bigger and better way, it is necessary to involve the participation of bright and innovative students and prepare them to achieve the common goal therefore we organized this event. This event includes two rounds. First round consists of aptitude, HTML-CSS, C LANGUAGE and cloud computing based questions whereas second round is personal interview.
      </>
    ),
  },
  {
    title: "Workshop on Flutter & Firebase",
    desc: (
      <>
        Flutter is an app SDK for building high-performance, high-fidelity apps for iOS, Android, web, and desktop from a single codebase.
        Firebase is a mobile- and web application development platform, backed by Google, to help developers deliver richer app experiences. <br /> <br />
        This Workshop was conducted under event coordinators Prashant Shishodia (CSE- 1610088) & Harsh Gupta (IT – 1613104) from date 5th March to 9th March 2019.
      </>
    ),
  },
  {
    title: "3rd Inception Day",
    desc: (
      <>
        Cloud Lab Co-ordinators: Mr. J. K. Seth, Ms. Anupama Sharma <br />
        Event Name: 3rd Inception Day <br />
        Date: 19th April, 2019 <br />
        Event Name: 5 days Workshop on Flutter and Firebase <br />
        Dates: 5th-9th March, 2019 <br />
        Details of event: 50+ students from 1st and 2nd year attended the workshop <br />
      </>
    ),
  },
  {
    title: "Quizard",
    desc: (
      <>
        Name of Event: ‘Quizard’ <br />
        Dates: 22nd and 23rd October 2019. <br />
        Prizes, if any: The top three winners of the event were awarded with a cash price of 1000, 800 and 500 respectively. <br />
        Theme of the event: The event completed in two rounds, the first round presented the question on web series on a mobile app (developed by CCC) and the second round was based on the questions related to aptitude, programming and puzzles.
      </>
    ),
  },
  {
    title: "Workshop on Amazon Web Services with Alexa",
    desc: (
      <>
        Amazon web service is a platform that offers flexible, reliable, scalable, easy-to-use, and cost-effective cloud computing solutions.
        Alexa is the brain behind the Echo devices. Using Alexa is as simple as asking a question to someone–just ask and Alexa will respond. Alexa updates through the cloud automatically and is continually learning, adding new functionality and skills. <br />
        This Workshop was conducted under event coordinators Shivam Dhama (IT) & Lavish Jain (CS) from date 12th April to 15th April 2018.
      </>
    ),
  },
  {
    title: "Workshop on Cloud Essentials & Linux",
    desc: (
      <>
        Cloud Computing is the delivery of computing services which includes servers, storage, databases, networking, software, analytics, and intelligence over the Internet to offer faster innovation, flexible resource management, and boost economies of scale. Linux is a family of open source operating systems based on the Linux kernel. <br /> <br />
        This Workshop was conducted under event coordinators Shivam Dhama (IT) & Shrey Tripathi (CS) from date 9th to 11th November 2017.
      </>
    ),
  },
];

const sessionReport = [
  { year: "2022-23", url: "/pdf/cloud-computing-cell/CCC-2022-23.pdf" },
  { year: "2021-22", url: "/pdf/cloud-computing-cell/CCC-2021-22.pdf" },
  { year: "2020-21", url: "/pdf/cloud-computing-cell/CCC-2020-21.pdf" },
  { year: "2019-20", url: "/pdf/cloud-computing-cell/CCC-2019-20.pdf" },
  { year: "2018-19", url: "/pdf/cloud-computing-cell/CCC-2018-19.pdf" },
  { year: "2017-18", url: "/pdf/cloud-computing-cell/CCC-2017-18.pdf" },
]

const CloudComputing = () => {
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
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
              <p className="mb-4">
                Cloud Computing Cell, the technical society, has been a part of Ajay Kumar Garg
                Engineering College since February 2016. The members are exposed to the
                latest Cloud Technologies that enable them to be market ready thereby
                increasing their opportunities in placements and research. It provides a
                platform to the students to compute, manage and deploy the cloud. The Cell is
                coordinated by Mr.Santosh Kumar Mishra and Mr. Sundeep Raj, faculty
                members, IT department.
              </p>
              <p className="mb-4">
                Cloud computing is a growing computing technology that provides almost
                unlimited computing resources on demand. It connects a number of other
                technologies like IoT, Big Data, Fog etc. The users of cloud can access data,
                applications and storage etc. with least management of local environment. It
                can be understood as a delivery system that delivers computing in the same
                way as a power grid delivers electricity. The Cloud Computing Cell, has
                successfully installed private cloud using Apache Cloudstack. Cloudstack works
                on the IaaS model of cloud where the services are the complete virtual
                computers that are able to do the computation as on local machine.
              </p>
              <p>
                The members are exposed to the latest Cloud Technologies that enable them
                to be market ready thereby increasing their opportunities in placements and
                research. It provides a platform to the students to compute, manage and
                deploy the cloud and related services.
              </p>
            </div>
            <div>
              <Image
                src="/image/rd/cloud-computing-cell/cloud.jpg"
                alt="Cloud Computing Cell Group Photo"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
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

          <div>
            <h2 className="text-2xl font-semibold mb-4">Activities</h2>
            <p className="mb-4">
              The cell helps students to boost their learning about latest technological trends. The cell is also promoting research work and projects in the field of cloud computing and related technologies.
            </p>
            <p>
              The cell conducts a series of activities every year few of them are mentioned here.
            </p>
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
        <div className="grid grid-cols-3 gap-3 mt-10">
          <div className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#42BCE2" className="h-20 w-20" viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" /></svg>
            <span className="font-novaBold text-xl">CLOUD</span>
            <p className="text-gray-600">Workshop on <strong>“Cloud Essentials & Linux”.</strong></p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#42BCE2" className="h-20 w-20" viewBox="0 0 448 512"><path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" /></svg>
            <span className="font-novaBold text-xl">Amazon</span>
            <p className="text-gray-600">Workshop on <strong>“Amazon Web Services with Alexa”.</strong></p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#42BCE2" className="h-20 w-20" viewBox="0 0 512 512"><path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" /></svg>
            <span className="font-novaBold text-xl">CLOUD</span>
            <p className="text-gray-600">A Recruitment Drive <strong>“SPOCC 2018”.</strong></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudComputing;