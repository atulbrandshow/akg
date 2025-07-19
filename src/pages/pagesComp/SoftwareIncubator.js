"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";
import Image from "next/image";
import Link from "next/link";


const results = [
  {
    title: "SDC ITeR8 Workshop",
    desc: (
      <>
        AKGEC’s SDC ITeR8 workshop, held from April 19th to April 22nd, 2024, introduced first-year students to Competitive Programming. It covered key topics such as C++ basics, Arrays and Strings, Functions, STL, Searching and Sorting algorithms, and Recursion, aiming to enhance problem-solving skills. The four-day event featured interactive sessions simplifying complex topics. On April 23rd, a coding contest enabled participants to apply their newly acquired skills in a competitive environment.
      </>
    ),
    slides: [
      { title: 'SDCIT', img: "/image/rd/software-incubator/SDCIT_1.jpg" },
      { title: 'SDCIT', img: "/image/rd/software-incubator/SDCIT_2.jpg" },
      { title: 'SDCIT', img: "/image/rd/software-incubator/SDCIT_3.jpg" },
    ]
  },
  {
    title: "“Runtym” workshop on Competitive Programming from 21 April, 2023 to 25 April, 2023",
    desc: (
      <>
        SDC-SI conducted a Workshop named “Runtym” for students of the first year to introduce them to the concepts of Competitive Programming. It helped the students to boost up their algorithmic thinking and problem-solving approaches. <br /> The purpose of the workshop was to introduce the students to the world of competitive programming and help them in solving well-defined problems by writing programs under specified limits, consequently raising their technical level. <br /> The workshop was interactive and informative. A presentation was prepared containing explanations for each topic in simple language with examples. Complicated topics were broken down into simpler explanations. Furthermore, study material and resources related to the topics were provided to the students to ease their journey of learning. Students were encouraged to ask their doubts which were cleared positively. <br /> It was a 22-hour long workshop spanned over four days from 21th April, 2023 to 24th April, 2023 followed by a coding contest in the college labs on 25th April, 2023. Certificates of participation are to be provided on behalf of SDC-SI.
      </>
    ),
  },
  {
    title: "SDC-SI At PARADIGM HACKATHON",
    desc: (
      <>
        Among the 1500+ national-level participants, four students from Software Development Centre-SI, Ajay Kumar Garg Engineering College, Ghaziabad, have made their college proud by bagging the First Runner-Up prize in the Paradigm Hackathon at Shiv Nadar University. The Rs.50000 prize pool included a cash prize of Rs.12000 and additional benefits such as AWS credits and Canva Pro. The talented students – Ayush Raghuwanshi, Suhail Ahmad, Vaidic Dodwani, and Dhruv Goyal, all second-year students, developed an International Shipment Management System that can predict the price of international shipments using AI technology. Their innovative solution stood out among the many entries and was highly praised by the judges for its practicality and potential impact on the industry. This success is a testament to the students’ hard work, dedication, and technical skills, and it is a great achievement for Ajay Kumar Garg Engineering College.
      </>
    ),
    slides: [
      { title: 'Paradigm', img: "/image/rd/software-incubator/Paradigm3.jpeg" },
      { title: 'Paradigm', img: "/image/rd/software-incubator/Paradigm2.jpeg" },
      { title: 'Paradigm', img: "/image/rd/software-incubator/Paradigm1.jpeg" },
    ]
  },
  {
    title: "Industrial Visit of SDC to Noida",
    desc: (
      <>
        <strong>Details of journey</strong><br />
        The 3rd and 4th year members of SDC-SI visited Vorphy and Exampur, Noida on 23rd November 2022 along with two faculty members. The visit was coordinated by the HOD of SDC-SI, Dr. Sachin Kumar. We departed from the college at 9:30 A.M. in the college bus and reached the headquarters of Vorphy at 10:30 A.M. At Vorphy, Mr. Saksham Saini, CTO and co-founder of Vorphy, coordinated our visit. We got a demonstration of their latest software based on AR/VR. The software is developed for students to ease their learning process through the visualisation of various concepts. <br />
        After lunch, we visited the headquarters of Exampur where we got an opportunity to experience the working of Exampur studios. The tour was led by the Chief Operations Officer of Exampur. A few of the SDC members also went live on the Exampur YouTube session. At Exampur, we met Mr. Vardaan Gandhi who is the co-founder of Exampur and an alumnus of AKGEC. He motivated us for the future and encouraged us to seek any kind of help from him and his team. We also interacted with various employees of Vorphy and Exampur and sought guidance from them. <br /> <br />
        <strong>Company Profile</strong> <br />
        <strong>Vorphy:</strong> <br />
        Vorphy is headquartered at Noida, Uttar Pradesh and is a small scale startup with over 50 employees. Vorphy aims at providing an incredibly engaging simulated learning environment where the students can equip their curriculum world with revolutionary virtual experiences via XR. <br />
        Extended Reality often referred to as XR includes the combination of Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR). It extends your reality by simulating the real environment using accessible sensors, networks and shared online virtual worlds.
        Students can participate in exciting activities and simulations in order to understand the practical concepts of various subjects. <br />
        Vorphy also uses 3D animations to aid comprehension. Learners can indulge themselves in different topics and lessons to determine which activity suits them depending on their skills. <br /> <br />
        <strong>Exampur:</strong> <br />
        Exampur is headquartered at Noida, Uttar Pradesh and is medium scale startup with over 100 employees. Exampur is one of the highly trusted and most magnificent online e-learning platforms with live classes, mock test papers, daily current affairs, and many more. Exampur is India’s best exam preparation app for several competitive examinations. <br />
        Their aim is to provide courses for government exam preparation, with a hybrid model that provides offline and online teaching facilities to aspirants from Tier II, III, and IV cities. They have a long list of achievements some of which are: <br />
        <ul className="list-disc pl-5">
          <li>10 Millions+ Subscribers on Youtube Channels</li>
          <li>1.1 Billions+ Views on Live/Video Classes</li>
          <li>25+ Youtube Channels on different Category</li>
          <li>Every Week 3-4 Videos In Trending On YouTube</li>
          <li>Daily 2.5 Million+ views</li>
          <li>Daily 150+ live classes</li>
        </ul> <br />
        <strong>Group Observation</strong> <br />
        At Vorphy, we got the demonstration of their latest software. Observed their workplace culture. Got to know about the process that, the software goes through, in its development phase. Interacted with the employees of their various departments and got a close overview of how the work is done. <br />
        At Exampur, we visited the studios where live classes are held. Got an opportunity to understand the business model of these companies. Sought guidance from the co-founders and various chief officers. Interacted with the software used in Exampur studios. <br /> <br />
        <strong>Conclusion</strong> <br />
        We are thankful to all our faculties for organising such an Informative event for us. Such visits are crucial for the development of our practical skills and knowledge. We got the opportunity to know about different types of software technologies used in Vorphy and Exampur. We are also thankful to Mr. Saksham Saini for coordinating our visit to Vorphy, and to Mr. Vardaan Gandhi for such an interactive meeting at Exampur. We would like to be a part of more such visits in the future.
      </>
    ),
    slides: [
      { title: 'Industrial', img: "/image/rd/software-incubator/Industrial1.jpg" },
      { title: 'Industrial', img: "/image/rd/software-incubator/Industrial2.jpg" },
      { title: 'Industrial', img: "/image/rd/software-incubator/Industrial3.jpg" },
    ]
  },
  {
    title: "5 days workshop on “Metaverse” (AR/VR Technology)",
    desc: (
      <>
        This workshop was conducted by the team of Vorphy for 3rd year students to introduce them to the concepts of virtual reality, augmented reality, metaverse etc. The workshop was designed for the students to increase their interests in upcoming technologies. <br />
        The purpose of the workshop was to introduce the students to the concept of virtual reality in a fun and interactive way. It also taught students about the necessity of such technologies in today’s world. <br />
        The workshop was interactive and informative. A presentation was prepared containing explanations for each topic in simple language with examples. Complicated topics were broken down into simpler explanations. Furthermore, study material and resources related to the topics were provided to the students to ease their journey of learning. Students were encouraged to ask their doubts which were cleared positively. <br />
        It was a 10-hour long workshop spanned over 5 days from 14th November 2022 to 18th November 2022. <br /> <br />
        <strong>Event Description</strong>
        The 5-day long workshop included both theory and practical implementation of each of the topics covered. Registration for the event was open for 3rd year students. The workshop was conducted in the Computer Centre. All attendees were provided with assignments and resources related to the topics covered on a daily basis. <br /><br />
        <strong>Topics covered in the workshop:</strong>
        Introduction to Augmented Reality <br />
        Introduction to Unity <br />
        Image targeting in AR using Vuforia and unity <br />
        Basics about general physics in unity <br />
        Hands on experience on snapchat AR lens studio <br />
        Basics about meshes, textures and other assets of 3D models <br />
        Basics about game development through unity <br />
        Created Snapchat filter using lab studio <br />
        Created 2 apps using unity <br /><br />
        <strong>Instructor:</strong> <br />
        Saksham Saini, CTO and Co-founder Vorphy. <br /><br />
        <strong>Accomplishments</strong> <br />
        SDC received an overwhelming 186 registrations* from the 3rd year students among which 70 lucky students were selected to attend the workshop. SDC-SI successfully conducted the workshop maintaining the audience’s attention and spirit of the event throughout the entire duration of the workshop. <br />
        The workshop introduced the participants to upcoming technologies like AR/VR. The participants gained practical knowledge about basic concepts, hands-on experience in creating 2 apps and a snapchat filter with the guidance from the instructor. The workshop broadened the horizon of the participants and ushered them to unfurl new milestones in this field and beyond. <br />
        * The list of attendees is attached for reference. <br />
        We received an overwhelming and extremely positive response from the 3rd year students. <br />
        “Lots of topics covered in very less time.” <br />
        “This workshop is good for beginners and a very convenient way to start building a grasp on AR/VR, unity etc.” <br />
        “Got to learn some new things even though having prior knowledge about unity.” <br />
      </>
    ),
    slides: [
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse1.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse2.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse3.jpg" },
    ]
  },
  {
    title: "“Metaverse” workshop on AR/VR Technology from 2nd Nov, 2022 to 3rd Nov 2022",
    desc: (
      <>
        SDC-SI, in association with VORPHY, conducted a workshop for students in the third year to introduce them to AR/VR. The trained professionals from Vorphy conducted the workshop. This helped the students to get informed and made it easier for them to explore their interests in AR/VR. <br />
        The seminar’s purpose was to spread awareness about this trending technology among the students to spark their interest and brief them about career prospects, roadmaps, and resources they should refer to.
        It was a 4 hours long event conducted on 2nd and 3rd November 2022 from 2:20 pm to 4 pm, which consisted of an introduction to emerging technologies such as blockchain, AR/VR, and the metaverse. <br />
        Each topic was explained in simple language with real-life examples in the workshop. Complicated and popular terminologies were broken down into more straightforward explanations. Furthermore, roadmaps and resources were provided to students to ease their exploration. <br />
        Students were encouraged to ask their doubts while we ourselves cleared the common doubts regarding emerging technologies and the metaverse. The students were also allowed to use and experience the oculus during the workshop. <br />
        SDC-SI successfully conducted the workshop and maintained the audience’s attention and spirit of the event throughout the entire duration of the workshop. <br />
        The workshop introduced the participants to various trending technologies. In addition, the participants gained practical knowledge about basic concepts and future possibilities in the fields, which broadened their horizons of the participants and ushered them to unfurl new milestones in this field and beyond. <br />
      </>
    ),
    slides: [
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_1.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_2.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_3.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_4.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_5.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_6.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_7.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_8.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_9.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_10.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_11.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_12.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_13.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_14.jpg" },
      { title: 'Metaverse', img: "/image/rd/software-incubator/Metaverse_15.jpg" },
    ]
  },
  {
    title: "“Sintax” workshop on Competitive Programming from 30th April, 2022 to 3rd May 2022",
    desc: (
      <>
        Software Incubator, the research and development center of Ajay Kumar Garg Engineering College conducted a workshop named “Sintax” with the motive to encourage and educate the first year students in the domain of Competitive Programming. <br />
        It was a 22-hour long workshop spanned over 4 days from 30th April, 2022 to 3rd May, 2022. The workshop was followed by a coding contest in the CSE labs and Computer Centre on 4th May, 2022. The workshop was organized under supervision of Dr. Sachin Kumar, Head SDC-SI. <br />
        The workshop saw the enthusiastic participation of 150 students from the First Year. Top 3 performers have been awarded with cash prizes worth Rs. 3000/-. Certificates of participation are provided to all attendees on behalf of SDC-SI. <br />
        The workshop was planned and conducted meticulously, to cater to students of all skill levels. A presentation was prepared containing explanations for each topic in simple language with examples. Furthermore, study material and resources related to the topics were provided to the students to ease their journey of learning. <br />
        The workshop introduced the students to the world of competitive programming and helped them gain practical knowledge about basic concepts, hands-on experience in writing well-organised codes and guidance from mentors, consequently raising their technical skills. <br />
      </>
    ),
    slides: [
      { title: 'Sintax', img: "/image/rd/software-incubator/Sintax1.jpg" },
      { title: 'Sintax', img: "/image/rd/software-incubator/Sintax2.jpg" },
      { title: 'Sintax', img: "/image/rd/software-incubator/Sintax3.jpg" },
      { title: 'Sintax', img: "/image/rd/software-incubator/Sintax4.jpg" },
      { title: 'Sintax', img: "/image/rd/software-incubator/Sintax5.jpg" },
      { title: 'Sintax', img: "/image/rd/software-incubator/Sintax6.jpg" },
      { title: 'Sintax', img: "/image/rd/software-incubator/Sintax7.jpg" },
    ]
  },
];

const SoftwareIncubator = () => {
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
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/image/rd/software-incubator/SI-SWISS-DESIGN_0.jpg"
              alt="Software Incubator Workspace"
              className="object-cover"
              fill
              priority
            />
          </div>

          {/* Description Section */}
          <section className="max-w-6xl mx-auto px-4 py-12">
            <p className="mb-6">
              <strong>SOFTWARE INCUBATOR</strong> is the research and development center of Ajay Kumar
              Garg Engineering College, Ghaziabad. The purpose of the department is to
              handle official projects as required by the college. The department consists of
              students from 2nd to 4th year who are proficient in a number of technical
              domains including Website Development, App Development, AI/ML, Blockchain,
              AR/VR Development, UI/UX Designing and other emerging technologies.
            </p>
            <p className="mb-6">
              The department is provided with a dedicated lab, equipped with the state-of-
              the-art infrastructure & hardware/software tools available to the SDC members
              throughout the day. This provides a highly conducive & stimulating
              environment for the young brains to explore & come out with innovative
              solutions using emerging technologies.
            </p>
            <p>
              Website: <Link href="https://silive.in/" target="_blank" className="text-blue-600 hover:underline">www.sllive.in</Link>
            </p>
          </section>

          {/* Team Section */}
          <section className="max-w-6xl mx-auto px-4 py-12">
            {/* Faculty Coordinator */}
            <div className="mb-16">
              <div className="max-w-sm mx-auto text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/image/rd/software-incubator/aman-pic.jpg"
                    alt="Faculty Coordinator"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-2">Faculty Coordinator</p>
                <h2 className="text-xl font-semibold">Ms. Aman Gupta</h2>
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Himanshu Sachan",
                  role: "Student Coordinator",
                  image: "/image/rd/software-incubator/Himanshu_SDC.jpg"
                },
                {
                  name: "Garima Pandey",
                  role: "Student Coordinator",
                  image: "/image/rd/software-incubator/Garima_SDC.jpg"
                },
                {
                  name: "Naman Srivastava",
                  role: "Student Coordinator",
                  image: "/image/rd/software-incubator/Naman_SDC.jpg"
                }
              ].map((coordinator, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src={coordinator.image}
                      alt={coordinator.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 mb-2">{coordinator.role}</p>
                  <h2 className="text-xl font-semibold">{coordinator.name}</h2>
                </div>
              ))}
            </div>
          </section>
        </main>
        <div className="grid md:grid-cols-2 items-center">
          <div className="">
            <Image
              src="/image/rd/software-incubator/desktop.jpg"
              alt="Desktop Development Illustration"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-sky-200 h-full p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              DESKTOP APPLICATION DEVELOPMENT
            </h2>
            <p className="text-gray-700">
              We have developers who are solely developing desktop applications and high end software products. We develop
              highly user interactive applications for industry as well as for personal use. We work on technologies that include
              high performance and minimize the system requirements.
            </p>
          </div>
        </div>

        {/* Mobile Development */}
        <div className="grid md:grid-cols-2 items-center">
          <div className="bg-fuchsia-600 text-white h-full p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              MOBILE APPLICATION DEVELOPMENT
            </h2>
            <p>
              We realize that the world is changing it's trends from typewriter to keyboard and now from click to touch. Hence,
              we here at Software Incubator develop mobile as well as tablet apps. The apps we make are for Android, iOS and
              Windows devices. Today in the market and even tomorrow, our apps never die.
            </p>
          </div>
          <div className="">
            <Image
              src="/image/rd/software-incubator/mobile.jpg"
              alt="Mobile Development Mockup"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Website Development */}
        <div className="grid md:grid-cols-2 items-center">
          <div className="">
            <Image
              src="/image/rd/software-incubator/website.jpg"
              alt="Website Development Illustration"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-amber-100 h-full p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              WEBSITE DEVELOPMENT
            </h2>
            <p className="text-gray-700">
              We offer great Websites and Web applications, understanding the clients' needs and requirements. We deliver
              the projects built on the latest technologies in the market-place at most diminishing costs. We give a larger hand
              to the latest trends of website development, especially SEO. The websites we provide are fully secure and give
              support to data security and integrity.
            </p>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h2 className="text-4xl font-novaSemi mb-8">Achievements</h2>

            <div className="space-y-8">
              {/* Bytepad */}
              <div>
                <h3 className="text-xl font-novaSemi mb-2">Bytepad</h3>
                <p className="text-gray-600 mb-4">
                  A platform to help students during their exams by providing previous year papers with solutions. It is
                  available both as a website and an Android application, with 1000+ daily website visitors, 1000+
                  downloads and 4.5/5 app rating on Play store.
                </p>
                <div className="space-y-1">
                  <p>
                    Link to the website:{" "}
                    <Link href="https://bytepad.silive.in/#" className="text-blue-600 hover:underline" target="_blank">
                      https://bytepad.silive.in/#
                    </Link>
                  </p>
                  <p>
                    Link to the app:{" "}
                    <Link href="https://play.google.com/store/apps/details?id=in.silive.bo" target="_blank" className="text-blue-600 hover:underline">
                      https://play.google.com/store/apps/details?id=in.silive.bo
                    </Link>
                  </p>
                </div>
              </div>

              {/* SINTAX */}
              <div>
                <h3 className="text-xl font-novaSemi mb-2">SINTAX</h3>
                <p className="text-gray-600 mb-4">
                  Members of the 2023 batch of SDC-SI conducted a workshop on Competitive Programming from
                  30th April – 3rd May 2022.
                </p>
                <p>
                  Details about the workshop:{" "}
                  <Link href="https://www.akgec.ac.in/sdc-sintax-workshop/" target="_blank" className="text-blue-600 hover:underline">
                    https://www.akgec.ac.in/sdc-sintax-workshop/
                  </Link>
                </p>
              </div>

              {/* SIH'22 */}
              <div>
                <h3 className="text-xl font-novaSemi mb-2">SIH&apos;22 Runner Ups</h3>
                <p className="text-gray-600">
                  A team of SDC-SI, containing 6 members of 2024 Batch secured runner up position.
                </p>
              </div>

              {/* MetaVerse Workshop */}
              <div>
                <h3 className="text-xl font-novaSemi mb-2">MetaVerse Workshop</h3>
                <p className="text-gray-600 mb-4">
                  A workshop spanning 5 days from 2nd Nov – 6th Nov 2022, where industry experts shared their
                  knowledge about AR/VR Technology.
                </p>
                <p>
                  Link to the details:{" "}
                  <Link href="https://www.akgec.ac.in/sdc-metaverse-workshop/" className="text-blue-600 hover:underline">
                    https://www.akgec.ac.in/sdc-metaverse-workshop/
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* SDC Project Reports */}
          <div>
            <h2 className="text-4xl font-novaSemi mb-8">SDC PROJECT REPORTS</h2>
            <div className="space-y-4">
              <Link
                href="/pdf/rd/SDC-SI-Report-for-Session-2021-22.pdf"
                target="_blank"
                className="block p-4 border border-gray-300 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                SDC-SI Report for Session 2021-22
              </Link>
              <Link
                href="/pdf/rd/SDC-SI-Report-for-Session-2020-21.pdf"
                target="_blank"
                className="block p-4 border border-gray-300 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                SDC-SI Report for Session 2020-21
              </Link>
              <Link
                href="/pdf/rd/SDC-SI-Report-for-Session-2019-20.pdf"
                target="_blank"
                className="block p-4 border border-gray-300 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                SDC-SI Report for Session 2019-20
              </Link>
            </div>
          </div>
        </div>
        <h2 className="py-10 text-3xl font-novaSemi">SDC ACTIVITIES</h2>
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
      </section>
    </>
  );
};

export default SoftwareIncubator;
