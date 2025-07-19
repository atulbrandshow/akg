"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";
import Image from "next/image";

const results = [
  {
    title: "NODE JAM",
    desc: (
      <>
        OSS R&D Centre conducted “Node Jam” – a workshop on node JS” and all its prerequisites such as HTML, CSS and JavaScript. ‘Node Jam’ was a workshop conducted to give a fresh start to students for web development and mainly in the field of backend development. The workshop started from the very basics of web development and gradually moved towards more advanced concepts such as modern javascript, node, Express and mongodb. <br />
        The workshop was successfully conducted in the Computer Centre – 1 (CS-IT Block) from 4:00 pm to 7:00pm on 26 May to 28 May 2022. <br />
        35 students participated in this workshop; all students are provided certificates of participation to encourage further participation in such knowledgeable events. <br />
        The workshop fulfilled its purpose by providing students the right path to become a full stack developer. It has allowed students to have a deep understanding of how web works and what should be the pathway to learn development. <br />
      </>
    ),
  },
  {
    title: "CYPHER ’20",
    desc: (
      <>
        OSS R&D Centre, conducted “Cypher’20” – a Workshop on Web security on 29th February & 1st March 2020. ‘Cypher’20’ was a workshop conducted to spread awareness amongst college students about cyber security paving a way towards building a strong foundation. The workshop was mainly focused on ways to secure application and spread awareness about threats in modern technology and ways to prevent them. <br />
        The workshop was successfully conducted in the Computer Centre – 1 (CS-IT Block) from 9:00 am to 5:00 pm on 29th March 2020 and 9:00 am to 5:00 pm on 1st March 2020. Total 72 students registered for the workshop. The workshop fulfilled its main purpose- ‘To introduce the students the basics of web security and spread awareness for it.
      </>
    ),
  },
  {
    title: "Code-O-Fiesta 2019",
    desc: (
      <>
        OSS R&D Centre, AKGEC in association with CodeChef conducted “Code-O-Fiesta 2019 – an Online Coding Contest on 26 September 2019. ‘Code-O-Fiesta’ was an initiative which aroused from a combative attitude that paves a way towards building a strong foundation. The contest was basically a step to upgrade the knowledge and combative spirit of students regarding their coding skills and competence. The contest was successfully conducted in the CSE Labs from 4:00 pm to 6:30 pm on 26 September 2019. Total 70 teams (97 Students) registered for the event and out of these 43 teams (69 Students) actually participated in the event. Out of total registered teams, 18 teams (27 students) were from non CS/IT branch. A set of 5 questions were given to the candidates to solve within the time limit (2 hours) and teams were ranked by CodeChef on the basis of marks and the time engrossed to solve the problem.
      </>
    ),
  },
  {
    title: "CYPHER (2019)",
    desc: (
      <>
        OSS R&D Centre conducted “Cypher’19” – a Workshop on Cyber security and Linux on 09 & 10 March 2019. ‘Cypher 19’ was a workshop conducted to spread awareness amongst college students about cyber security paving a way towards building a strong foundation. The workshop was mainly focused on ways to secure application and spread awareness about threats in modern technology and ways to prevent them. The workshop was successfully conducted in the Computer Centre – 1 (CS-IT Block) from 4:00 pm to 6:00 pm on 9 March 2019 and 9:00 am to 6:00 pm on 10 March 2019. Total 45 students registered for the workshop.
      </>
    ),
  },
  {
    title: "The Codechef Event (2018)",
    desc: (
      <>
        CONATUS and OSS R&D Centre, AKGEC in association with CodeChef conducted “Code-O-Fiesta 2018 – an Online Coding Contest on 20 September 2018. <strong>‘Code-O-Fiesta’</strong> was an initiative which aroused from a combative attitude that paves a way towards building a strong foundation. The contest was basically a step to upgrade the knowledge and combative spirit of students regarding their coding skills and competence. The top 3 teams were awarded with Rs 1500, Rs 1000 and Rs 500 respectively and certificates.
      </>
    ),
  },
  {
    title: "The Codechef Event (2017)",
    desc: (
      <>
        The event was conducted on 6 September, 2017 where over 60 teams participated in the coding event powered by CodeChef and OSSRNDC. The top 3 teams were awarded with Rs 1000, Rs 800 and Rs 500 respectively and certificates.
      </>
    ),
  },
  {
    title: "The Triwazard Tournament (2017)",
    desc: (
      <>
        The event was conducted on 4 March 2017 where over 30 teams participated in first round. In the final round 3 teams were selected based on their coding performance in previous rounds. The winner teams were awarded with certificates.
      </>
    ),
  },
];

const OpenSourceSoftware = () => {
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
        <main className="py-8">
          {/* Introduction Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                In the present day scenario, the open source software is replacing the proprietary software because of manifold advantages they have over proprietary software. Even though Free/Open Source Software (FOSS) is widely used, much of the computer science research community has yet to fully recognise its potential to change the world of research and developement of software intensive systems across disciplines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The establishment of this research and development centre is expected to create a unique opportunity to all stake holders of the institute. The facility so created shall be useful to carry out research/developement/training/consultancy related to open source software. The centre will customize the open source software according to the requirements. It will also train the students and facilities of our institute and will involve them in the developement and customisation of recent open source software.
              </p>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/image/rd/open-source/open-source.jpg"
                alt="Group photo of the research center members"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Supervision Info */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <p className="text-gray-700">
              The Open Source Software Research and Development Center will function in Computer Science & Engineering Department under the supervision of Dr. Anu Chaudhary, HoD CSE. The Composition of the team, the functionaries and the funtion to be performed are listed below:-
            </p>
          </div>

          {/* Committee Structure */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Advisory Board */}
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Advisory Board</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Dr. R.K. Agarwal, Director, AKGEC (Chairman)</li>
                <li>Dr. Anu Chaudhary, HoD CSE (Member)</li>
                <li>Special invitees from other departments.</li>
              </ul>
            </div>

            {/* Working Committee */}
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Working Committee</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Center Head - HoD CSE</li>
                <li>Chief Organiser - Dr. Sonam Gupta</li>
              </ul>
            </div>

            {/* Project Implementation Committee */}
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project Implementation Committee</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Principal Investigator(PI) - Faculty, on project basis</li>
                <li>Research Assistant(RA) - Student, on project basis</li>
              </ul>
            </div>
          </div>

          {/* Activities/Events Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Activities/Events</h2>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">COMMIT – 2 DAY Open Source Workshop</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  On 30th April and 1st May 2024 Open Source Software and Cyber Security Club of Ajay Kumar Garg Engineering College hosted a two-day open source workshop "Commit". The workshop was successfully conducted in the CSIT/Auditorium from 4:00 pm to 7:00 pm on 30th April & 1st May 2024.
                </p>
                <p>
                  The workshop introduced students to the world of open source development through a mix of lectures and hands-on activities. Sessions were designed to cover a range of topics, including version control with Git, collaborative coding on platforms like GitHub, and contributing to open-source projects. Students got to work with Linux environments and learned about major open-source programs like Google Summer of Code (GSoC).
                </p>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  The event featured a coding contest that allowed students to apply their new skills. The contest had various challenges designed to test the students' understanding of open-source development and collaborative coding. The competition was intense, with participants racing against the clock to solve the challenges.
                </p>
                <p>
                  Prizes and certificates were awarded to the top three finishers in the contest. The first-place winner received a cash prize of Rs 3500, while the second place and third place winners received Rs 2500 and Rs 1500, respectively. All participants received certificates of participation, and a bag of goodies.
                </p>
                <p>
                  Overall, "Commit" was a positive experience, team OSS is aiming to increase interest in open-source development. The workshop was conducted successfully under the guidance of Dr. Sonam Gupta, faculty coordinator. A total of 40 students registered for the workshop.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Image
                    src="/image/rd/open-source/Commit_2.jpg"
                    alt="Students attending the workshop"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/image/rd/open-source/Commit_1.jpg"
                    alt="Workshop participants in the auditorium"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-8 mb-4">"Hour of Code" Coding Competition</h3>
                <p>
                  On 5 December 2023, the ACM student Chapter at Ajay Kumar Garg Engineering College held its annual "Hour of Code" coding competition. The event was a great success, with 109 students from the college participating.
                </p>
                <p>
                  The workshop was successfully conducted in the Project Lab (CS-IT Block) from 4:00 pm to 6:30pm on 5th December 2022.
                </p>
                <p>
                  The competition was held in the college's computer lab, which was set up with 109 computers for the participants. Each computer was equipped with the necessary software and tools for the competition. The competition consisted of a series of coding challenges in languages such as C, C++, and Java. The challenges were designed to test the students' problem-solving skills and knowledge of programming concepts such as loops, variables, and data types. The competition was fierce, with students working hard to complete the challenges as quickly and accurately as possible. The competition consisted of a series of coding challenges, designed to test the students' skills and knowledge in a variety of programming languages.
                </p>
                <p>
                  The winners of the competition will be awarded a cash prize and certificates. The first-place finisher will receive a cash prize of Rs 2000, while the second will receive Rs 1000, and third-place finishers will receive a cash prize of Rs 500.
                </p>
                <p>
                  The "Hour of Code" coding competition was a great success and an enjoyable experience for all the students who participated.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Image
                    src="/image/rd/open-source/HourofCode2.jpg"
                    alt="Students participating in Hour of Code competition"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/image/rd/open-source/HourofCode1.jpg"
                    alt="Computer lab during Hour of Code competition"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-8 mb-4">Cyber Security Challenges</h3>
                <p>
                  One day seminar on "CYBER SECURITY CHALLENGES" was organized by ACM Student Chapter and Open Source Software & Cyber Security Club under Department of Computer Science and Engineering on 27 February 2023 for 6th semester CSE students.
                </p>
                <p>
                  The seminar was conducted by Mr. Ashwani Kumar. He is a cyber security practitioner, learning and guiding about security management, vulnerability assessment, Incident response, threat hunting and more. Currently he is working with Linear Stack where he researches, analyze and defend to provide cyber security in much better way. He is also Cyber Crime Intervention Officer certified by Information Sharing and Analysis Center, India where he was able to add up his name under National Security Database.
                </p>
                <p>
                  126 students participated in the seminar and explored various dimensions of cyber security. The workshop encouraged students to gain knowledge on various challenges of cyber security. The coordinators of the workshop were Dr. Sonam Gupta, Dr. Charu Agarwal, and Mr. Pradeep Gupta.
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <Image
                    src="/image/rd/open-source/CyberSec1.jpeg"
                    alt="Cyber Security Challenges seminar - Speaker presenting"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <Image
                    src="/image/rd/open-source/CyberSec2-1.jpeg"
                    alt="Cyber Security Challenges seminar - Audience view"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <Image
                    src="/image/rd/open-source/CyberSec3.jpeg"
                    alt="Cyber Security Challenges seminar - Another view of the audience"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
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

export default OpenSourceSoftware;