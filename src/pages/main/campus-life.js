"use client";

import React, { useState } from 'react';
import Slider from "@/Components/Slider";
import BannerSlider from "@/Components/BannerSlider";
import Link from 'next/link';


const slides = [
    {
        title: "Igniting",
        subHeading: "Minds",
        subtitle: "University Focused on Student Success",
        description: "Maximizing Learning Outcomes Through Comprehensive Experiences and Support Services",
        buttonText: "VIDEO TOUR",
        image: "/image/campus-life/campus-life-banner-1.webp",
        link: "/admissions/campus-virtual-tour"
    },
    {
        title: "Building",
        subHeading: "Leaders",
        subtitle: "Pioneering Research and Cutting-Edge Innovation",
        description: "Innovative Experiential Learning Through Advanced Technology and State-of-the-Art Labs",
        buttonText: "VIDEO TOUR",
        image: "/image/campus-life/cultural.jpg",
        link: "/admissions/campus-virtual-tour"
    },
    {
        title: "Cultivating",
        subHeading: "Success",
        subtitle: "Elite Sports Facilities, Expert Mentorship, and Exceptional Opportunities",
        description: "Exceptional Mentorship, Cutting-Edge Sports Facilities, and Boundless Opportunities",
        buttonText: "VIDEO TOUR",
        image: "/image/campus-life/campus-life-banner-3.webp",
        link: "/admissions/campus-virtual-tour"
    },
    // Add more slides here
]

const studentSpeaks = [
    {
        description: "Being a graduate of AKGEC, I truly appreciate the strong academic base the institution helped me build. The well-planned infrastructure, serene green surroundings, and modern facilities created a comfortable and motivating atmosphere for growth, both academically and personally. Supportive faculty members and accessible learning resources played a key role in guiding us throughout our journey. Apart from academics, the campus experience at AKGEC was dynamic and engaging, with numerous cultural and technical communities to be part of. Among them, the Software Incubator stood out as a particularly enriching experience. These platforms gave me the opportunity to collaborate with peers, explore new ideas, and develop practical and leadership skills. Altogether, AKGEC offered a balanced and enriching environment that made my college life memorable and rewarding.",
        name: "Ankit Mishra",
        title: "Btach 2019-2023",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "As a former student of AKGEC, I found the institution to be a well-rounded place that balances academics with overall development. The campus features updated laboratories, comfortable classrooms, and ample greenery, which together create a positive and focused learning environment. The teaching staff is experienced and approachable, emphasizing hands-on learning and preparing students for real industry challenges. Student involvement is strongly encouraged through various technical and interest-based clubs. Platforms such as the Software Incubator provide exposure to innovation, project development, and entrepreneurial thinking, while other technical societies organize events, workshops, and contests that keep learning interactive. Although large-scale cultural events are few, the enthusiasm of student-led groups builds a close and energetic campus culture. Overall, AKGEC plays an important role in shaping students with both technical competence and essential life skills for their future careers.",
        name: "Ritik Gupta",
        title: "Batch 2018-2022",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGEC played a significant role in shaping me not just academically, but also as a professional. The environment pushed me to take responsibility for my work, think critically, and confidently handle real-world challenges in software development. Over time, I noticed a clear difference in both technical competence and overall confidence when compared to peers from other institutions. The CSE faculty during my time was highly supportive and motivating. They constantly encouraged participation in hackathons, hands-on project development, and meaningful interactions with people in the tech community. This guidance helped me build practical skills, improve collaboration, and develop a mindset that has been extremely valuable in my career journey.",
        name: "Rishabh Tyagi",
        title: "Batch 2018-2022",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "To be honest, AKGEC has been a crucial part of my personal and professional growth. It offered much more than a theoretical engineering education, focusing strongly on practical exposure and preparing students to handle real-world challenges with confidence. The guidance and support from experienced faculty members played a major role in helping me continuously improve my technical knowledge and adapt to new technologies. In addition to academics, the institute encouraged active participation in various extracurricular activities and campus events, which contributed greatly to my overall development. These experiences helped me grow not only as a professional but also as an individual, shaping my mindset, values, and approach toward teamwork and responsibility.",
        name: "Prabhanshu Chauhan",
        title: "Batch 2016-2020",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "My time at Ajay Kumar Garg Engineering College was a transformative experience that shaped both my ambitions and outlook. It was a place where my interests gradually turned into purpose, and I became more aware of my abilities by learning alongside motivated and creative peers. The campus brought together students from varied backgrounds, creating an environment rich in ideas, collaboration, and healthy competition. Learning extended far beyond lectures and practical sessions, as teamwork, problem-solving, and innovation became part of everyday life. Whether through intense problem-solving sessions, collaborative assignments, or long hours spent refining projects, I was constantly challenged to grow. The guidance and encouragement from faculty and mentors made the journey even more meaningful. AKGEC didn’t just equip me with technical knowledge; it connected me to a driven community that inspired me to think bigger and continually push my limits.",
        name: "Garima Pandey",
        title: "Batch 2019-2023",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGEC was far more than an educational institution for me; it was a space where I truly evolved as a person. The years spent there were filled with learning, emotions, and experiences that went well beyond textbooks and classrooms. Surrounded by an energetic campus environment and supportive mentors, I found the encouragement needed to grow both intellectually and personally. What I value most are the moments shared with friends—long discussions, group study sessions, shared struggles, and small joys that strengthened our bonds. The faculty members were not only teachers but guides who consistently motivated us and believed in our potential. Over time, the campus became a close-knit ecosystem where friendships turned into lifelong connections. AKGEC is not just an institution I studied at; it represents memories, growth, and a sense of belonging that will always remain a part of me.",
        name: "SUHAIL AHMAD",
        title: "Batch 2021-2025",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "My experience at AKGEC stands out as a defining phase of my development, as the institution continuously encouraged growth, learning, and self-discovery. It offered a strong blend of structured academics and experiential learning, enabling students to convert concepts into practical outcomes. The campus environment itself promoted learning everywhere—from advanced labs and collaborative spaces to calm areas meant for reflection and focus. What truly set the experience apart was the role of the faculty, who went beyond conventional teaching to encourage analytical thinking and creativity. Alongside academics, various student-led initiatives and societies created opportunities to take initiative, collaborate, and contribute meaningfully. AKGEC provided more than technical expertise; it instilled confidence, adaptability, and a growth-oriented mindset that continues to guide me well beyond my college years.",
        name: "Ayush Raghuwanshi",
        title: "Batch 2021-2025",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Looking back, the college played a meaningful role in shaping both my professional journey and personal outlook. It offered far more than classroom instruction by creating an environment that encouraged questioning, creativity, and initiative. Through thoughtfully designed coursework, practical lab work, workshops, and exposure to industry practices, I was able to understand how theoretical concepts translate into real-world solutions. The faculty members were not limited to teaching subjects; they acted as mentors who consistently pushed me to improve and believe in my abilities. Equally important was the vibrant student culture, enriched by active clubs and societies that allowed me to explore my interests beyond academics. My involvement in the Software Incubator was particularly impactful, as it helped me collaborate with peers, work on meaningful projects, and develop a strong sense of teamwork and leadership. The values I gained during my time at AKGEC—perseverance, integrity, and responsibility—continue to guide the way I approach challenges and opportunities today.",
        name: "Ayush Jain",
        title: "Batch 2020-2024",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Reflecting on my college years, I realize how deeply they influenced both my career path and personal growth. The institution provided much more than academic knowledge; it fostered a culture that encouraged independent thinking, innovation, and proactive learning. A well-balanced mix of structured academics, hands-on laboratory sessions, workshops, and industry exposure helped me bridge the gap between theory and practical application. The faculty played a crucial role in this journey, not just as educators but as mentors who motivated me to push boundaries and continuously evolve. Alongside academics, the dynamic campus life greatly enriched my experience. Active student groups and societies offered opportunities to explore interests beyond the classroom and develop essential life skills. My time with the Software Incubator proved especially valuable, as it allowed me to collaborate closely with peers, build impactful projects, and strengthen my leadership and teamwork abilities. The principles and values I developed during my time at AKGEC—such as resilience, honesty, and accountability—remain integral to how I approach both professional and personal challenges today.",
        name: "Himanshu Sachan",
        title: "Batch 2019-2023",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "When I look back on my college journey, it’s clear that those years played a significant role in shaping who I am today, both professionally and personally. The institution went beyond delivering coursework by creating an environment that promoted curiosity, creativity, and self-driven learning. Through a thoughtful combination of academic rigor, practical lab work, workshops, and exposure to industry-oriented practices, I learned how to apply theoretical concepts to real-world situations. The guidance of faculty members was instrumental, as they consistently encouraged growth, confidence, and continuous improvement. Beyond academics, campus life added immense value to my overall experience. Student-led clubs and societies provided a platform to discover new interests, collaborate with others, and develop crucial soft skills. My involvement with the Software Incubator was particularly impactful, offering opportunities to work on meaningful projects, learn collaboration firsthand, and grow as a leader. The lessons and values I gained at AKGEC—such as perseverance, integrity, and responsibility—continue to influence the way I handle challenges and opportunities in every aspect of my life.",
        name: "Akshay Agarwal",
        title: "Batch 2017-2021",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Thinking back on my time in college, I can clearly see how it helped shape both my professional outlook and personal development. The experience extended far beyond academics, offering an atmosphere that encouraged exploration, original thinking, and taking initiative. A strong blend of structured learning, practical laboratory exposure, workshops, and industry-focused activities helped me understand how classroom concepts translate into practical solutions. Throughout this journey, the faculty played an essential role by offering constant support, motivation, and guidance that pushed me to grow with confidence. Equally meaningful was the vibrant student environment, which played a major part in my growth outside the classroom. Involvement in various clubs and societies allowed me to explore my interests, work closely with peers, and strengthen important interpersonal skills. Being part of the Software Incubator was especially enriching, as it gave me the chance to contribute to real projects, learn the value of teamwork, and develop leadership qualities. The values instilled during my time at AKGEC—such as resilience, ethics, and accountability—continue to guide my approach to both professional challenges and personal goals.",
        name: "Kavi Kumar",
        title: "Batch 2018-2022",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Looking back at my college years, I realize how influential they were in shaping my career direction and overall personality. The institution offered much more than formal education by cultivating an environment that inspired curiosity, independent thought, and proactive learning. A balanced mix of academic structure, hands-on laboratory work, workshops, and exposure to industry practices helped me bridge the gap between theory and real-world application. The faculty members were a constant source of encouragement, providing mentorship and guidance that helped me build confidence and grow steadily. Outside the academic framework, campus life played a vital role in my personal development. Active participation in student groups and societies allowed me to explore new interests, collaborate with diverse individuals, and refine essential communication and teamwork skills. My experience with the Software Incubator stood out, as it offered practical exposure through project-based work and opportunities to develop leadership abilities. The principles I carried forward from AKGEC—such as perseverance, integrity, and a strong sense of responsibility—continue to shape how I approach challenges and opportunities in my professional and personal life.",
        name: "Deepanshu Jain",
        title: "Batch 2016-2020",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "As an alumnus of AKGEC, I’m thankful for the solid foundation it provided. The college’s excellent infrastructure, green campus, and well-equipped facilities created an environment that supported both learning and personal growth. The dedicated faculty, along with abundant resources, ensured that we had the support needed to succeed. Beyond studies, AKGEC offered a vibrant campus life with a mix of cultural and technical societies, with the Software Incubator holding a special place in my heart. These groups allowed me to explore different interests, work on team projects, and meet students with similar passions. Being part of these societies helped me build leadership skills and broaden my perspective. Overall, AKGEC provided a great mix of learning and activities that made my time there truly meaningful.",
        name: "SIMRANPREET KAUR",
        title: "Batch 2015-2019",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "As an alum of AKGEC, I can genuinely say the college offers a solid blend of academics, infrastructure, and extracurriculars. The campus is well-equipped with modern labs, spacious classrooms, and green spaces, creating an excellent atmosphere for learning. The faculty is knowledgeable and supportive, with a strong focus on practical skills and industry relevance. Societies like the Software Incubator allow students to gain real-world experience through projects and startups, while other clubs, like robotics and coding, provide workshops and competitions that keep students engaged beyond regular studies. Though large cultural fests are limited, the active student clubs foster a tight-knit community and make campus life lively. AKGEC genuinely supports a well-rounded education, helping students gain both technical and personal skills for future success",
        name: "Pranat Sharma",
        title: "Batch 2018-2022",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Akgec gave me an overall personality development platform which helped me in my current career. It helped me in understanding the ownership of my work learning handling challenges in the software development. I could spot great difference technically as well as overall personality development wise....... between akgec students and others. The faculty of CSE was wery good at my time . they encouraged me to go to hackathons , try to build different projects and how to network with people.",
        name: "Aditya Gupta",
        title: "Batch 2017-2021",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Frankly speaking, AKGEC has played a very vital role in my journey. It was not just an engineering college with just academic foundation but also quite practical and hand-on about the teaching me to face the challenges that come my way. I must say that this helped me a lot by being supported by excellent faculty that helped me to learn new things and update my technical skills. Beyond that , extra curricular activities and events like saksham ( and my favourite football club) , overall shaped me as a better human being too",
        name: "Arnav Jain",
        title: "Batch 2018-2022",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "My journey at Ajay Kumar Garg Engineering College was more than just a chapter in my academic life; it was where I found my passion, discovered my strengths, and connected with incredible, like-minded people who inspired me daily. Beyond the classrooms and labs, the college became a platform that brought together talented individuals from diverse backgrounds, each with their own unique ideas and skills. Being around such driven people, whether it was in coding contests, group projects, or late-night hackathons, gave me new perspectives and pushed me to up my game. I still remember the adrenaline of coding challenges, the thrill of collaborative projects, and the constant encouragement from professors and mentors who genuinely wanted us to succeed. The college didn’t just provide an education—it gave me a community and a network of talented peers who motivated me to aim higher, solve harder problems, and keep striving.",
        name: "Suyash Singh",
        title: "Batch 2020-2024",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGEC wasn't just a college; it was a second home. It was a place where I spent countless hours, not just studying, but also laughing, crying, and growing. The campus, with its vibrant atmosphere and dedicated faculty, was the perfect setting for intellectual and personal development. I'll always cherish the memories of late-night study sessions, heated debates, and the camaraderie we shared. The professors, with their passion for teaching and their unwavering support, were instrumental in shaping me into the engineer I am today. And mechanical engineering canteen ke iconic chola samosa , chai auir baate . It was a network jungle where we forged lifelong friendships and connections. AKGEC is more than a name; it's a feeling. It's a feeling of belonging, of aspiration, and of limitless possibilities. A feeling that will stay with me forever.",
        name: "Vinayak Gupta",
        title: "Batch 2017-2021",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "I distinctly remember that the college role played in both my career and character. Here, I not only received technical education but also the ecosystem to foster curiosity, innovation, and leadership. Structured academic programs provided real-world experiences ranging from hands-on labs, workshops, and industry collaborations that bridged theory and practice. They were more than instructors of themselves; they were mentors who guided and inspired me to reach my potential. The college community was full of lively clubs and societies where I could pursue my passions, particularly in the Software Incubator, where I got friends, built projects, and learned the nuance of teamwork and leadership. AKGEC has taught me tenacity and honesty, the attributes I utilize in any project I take up at this point in time.",
        name: "Ayush Verma",
        title: "Batch 2019-2023",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "My time at AKGEC is really special because this college was a dynamic space for growth, nurturing and shaping aspirations and the skills in students. Rigorous academics and hands-on exploration together formed a powerful balance that students were able to use for turning ideas into real achievements. The campus was not just a place to study, but rather a vibrant center where learning permeated into every nook and corner—be it in well-equipped laboratories, bustling student centers, or quiet retreats. It was from the faculty that one acquired this experience, which teaches one not just knowledge but provokes a critical and innovative mind. Societies and initiatives by AKGEC provided the student beyond their regular curriculum: to lead, innovate, and build a community. AKGEC has given me much more than just the academic skills needed to go through it; it gave me the mind-set that would support my growth, resilience, and community for long even after graduation.",
        name: "Alok Ranjan",
        title: "Batch 2017-2021",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "At AKG, it's more than just studying – it's about experiencing a community that supports your growth. The campus has a lively atmosphere where academics, culture, and extracurriculars come together, making learning enjoyable and enriching. I feel like AKG is shaping me into a confident professional ready for the future.",
        name: "Aman Chauhan",
        title: "Batch 2022",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKG feels like my second home. From the vibrant campus life to the endless opportunities to grow beyond academics, it’s a place that helps you discover your potential. Whether it's participating in cultural events or taking up leadership roles, AKG gives you the tools to excel in all areas of life.",
        name: "Priti Singh",
        title: "Batch 2023",
        img: "/image/student/2.png",
        rating: 4
    },
    {
        description: "Being at AKG has been an incredible journey. The dynamic environment here allows us to combine academics with fun activities, making every day on campus exciting. It's a place that truly helps you prepare for a bright and successful future, both professionally and personally.",
        name: "Sakshi Sharma",
        title: "Batch 2024",
        img: "/image/student/3.png",
        rating: 5
    },
    {
        description: "AKG isn’t just a place for education; it’s a community where you grow as an individual. The campus is always buzzing with events, and there’s always something new to learn or participate in. I’m proud to be a part of a college that goes beyond academics to nurture creativity and leadership.",
        name: "Atul Kumar",
        title: "Batch 2024",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "Life at AKG is vibrant and fulfilling. It offers a perfect blend of academics and extracurriculars, helping you develop holistically. The experiences here have made me more confident and prepared for the challenges of the real world. It truly feels like a second home where I can grow and thrive.",
        name: "Raghav Shukla",
        title: "Batch 2024",
        img: "/image/student/2.png",
        rating: 5
    },

]

const facultySpeaks = [
    {
        description: "Our programs are designed with flexibility and experiential learning at their core, allowing students to explore multiple disciplines and grow holistically. The inclusive and supportive atmosphere we nurture on campus is one of the reasons we attract students from over 50 countries, creating a truly global learning environment.",
        name: "Dr. Meena Verma",
        title: "Professor of CS",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "At AKGU, we emphasize interdisciplinary learning and hands-on experiences, ensuring students receive an education that goes beyond textbooks. The welcoming culture here, built on inclusivity and openness, has fostered a diverse community, with students joining us from more than 50 nations.",
        name: "Dr. Rakesh Gupta",
        title: "Dean of Engineering",
        img: "/image/student/2.png",
        rating: 5
    },
    {
        description: "The academic framework at AKGU encourages students to engage in experiential learning while exploring diverse disciplines, creating a unique and enriching educational experience. Our commitment to inclusivity and a friendly campus culture has been pivotal in attracting a growing international student body from 50+ countries.",
        name: "Dr. Anjali Sharma",
        title: "Head of ME",
        img: "/image/student/3.png",
        rating: 5
    },
    {
        description: "We believe in an education that is flexible, practical, and interdisciplinary, enabling students to gain valuable real-world experience alongside their academic studies. The inclusive and supportive environment here has been instrumental in building our diverse student community, with students from over 50 nations choosing AKGU.",
        name: "Dr. Vijay Singh",
        title: "Professor of EE",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGU offers students a dynamic blend of experiential learning and interdisciplinary education, preparing them to excel in an ever-changing world. The sense of belonging and inclusivity we foster on campus has been a key driver in attracting a diverse range of students from more than 50 countries.",
        name: "Dr. Priya Mehta",
        title: "Professor of CE",
        img: "/image/student/2.png",
        rating: 5
    },
]

const distinguishedGuests = [
    {
        description: "This University, I think, has made significant contributions to help the world move further as a whole. I really enjoyed having the honor to speak with the public.",
        name: "Dr. Ramesh Kumar",
        title: "Former President, ISRO",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGU has created an incredible platform for fostering innovation and collaboration. The dedication to shaping the next generation of leaders is truly commendable. I was honored to be part of such an inspiring event.",
        name: "Ms. Shalini Verma",
        title: "CEO, Global Tech Solutions",
        img: "/image/student/2.png",
        rating: 5
    },
    {
        description: "It was an absolute pleasure to witness the brilliant minds at AKGU. The institution is not just advancing knowledge but also shaping future innovators who will positively impact the world.",
        name: "Prof. Arvind Sharma",
        title: "Nobel Laureate, Physics",
        img: "/image/student/3.png",
        rating: 5
    },
    {
        description: "The academic excellence and community engagement at AKGU are truly impressive. It’s clear that this institution is committed to pushing the boundaries of knowledge and creating global leaders.",
        name: "Mr. Rajiv Mehra",
        title: "Chairman",
        img: "/image/student/1.png",
        rating: 5
    },
    {
        description: "AKGU has established itself as a beacon of educational brilliance. It was a pleasure interacting with students and faculty alike, and I believe the impact this institution has on the future is profound.",
        name: "Dr. Priya Menon",
        title: "Director",
        img: "/image/student/2.png",
        rating: 5
    },
    {
        description: "My visit to AKGU left me deeply impressed by their focus on both academic and personal development. The enthusiasm of the students and faculty is inspiring, and I look forward to seeing their continued contributions to society.",
        name: "Mr. Anil Kapoor",
        title: "Vice Chancellor",
        img: "/image/student/3.png",
        rating: 5
    }
];



const CampusLife = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <>
            <BannerSlider slides={slides} />

            <div className="bg-indigo-900 text-white min-h-screen py-20">
                <div className="max-w-7xl max-xl:max-w-5xl max-lg:grid-cols-1 max-lg:max-w-3xl mx-auto grid grid-cols-5 gap-5 px-5">
                    <div className="col-span-3">
                        <div className="space-y-8">
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/convocation.jpg" alt="Ceremony" className="w-full h-full !bg-top object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Ceremony</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/tt_tournament.jpg" alt="Table Tennis" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Table Tennis</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200 rounded-xl">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/FresherParty.png" alt="Fresher's Party" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Fresher's Party</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200 rounded-xl">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 max-lg:col-span-1">
                        <div className="space-y-6 text-right">
                            <div>
                                <h1 className="text-5xl font-bold max-w-lg max-lg:max-w-full uppercase">
                                    Where Comfort Meets<span className="text-orange-400"> New</span>
                                    <span className="text-orange-400"> Beginnings</span>
                                </h1>
                                <p className="mt-4 text-3xl leading-none font-novaReg">
                                    A Cosmopolitan Campus: Where Cultures Converge, <strong>Ideas Flourish, and Opportunities Abound</strong> </p>
                            </div>
                            <Link href="/admissions/campus-virtual-tour" className="flex justify-end">
                                <button className="py-2.5 px-6 rounded-xl bg-yellow-500 text-black font-novaBold tracking-wider text-sm hover:bg-orange-600 flex items-center gap-2">
                                    {slides[currentSlide].buttonText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                                </button>
                            </Link>
                        </div>

                        <div className="flex justify-end mt-32 max-xl:mt-10 max-lg:mt-20">
                            <svg className="w-12 h-12 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h2 className="text-2xl font-novaBold text-right leading-none max-w-48 mb-4 flex items-center">
                                WHAT PEOPLE SAY ABOUT US?
                            </h2>
                        </div>
                        <div className="space-y-12 max-xl:space-y-3 max-lg:space-y-10 mt-10">
                            <Slider right={true} heading={"Student Speaks"} slidesData={studentSpeaks} />
                            <Slider right={true} white={true} heading={"Faculty Speaks"} slidesData={facultySpeaks} />
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl max-xl:max-w-5xl max-lg:grid-cols-1 max-lg:max-w-3xl mx-auto grid grid-cols-5 items-end gap-8 px-5 mt-20 max-lg:mt-5">
                    <div className="col-span-3">
                        <div className="space-y-8 mb-auto">
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/DiwaliMela.png" alt="Diwali Mela" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Diwali Mela</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/cultural.jpg" alt="Garba" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Garba</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-[400px]">
                                <img src="/image/campus-life/ceremony.jpg" alt="Ceremony" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Ceremony</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 mb-auto">
                        <div className="space-y-8">
                            <Slider right={true} heading={"Distinguished Guests"} slidesData={distinguishedGuests} />
                            <div className="relative group overflow-hidden rounded-2xl h-[450px]">
                                <img src="/image/campus-life/plantation.jpeg" alt="Plantation" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Plantation</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-[450px]">
                                <img src="/image/campus-life/sports.jpg" alt="Sports" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                                <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Sports</h3>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                    <Link href="/admissions/campus-virtual-tour">
                                        <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl max-xl:max-w-5xl max-lg:grid-cols-1 max-lg:max-w-3xl mx-auto grid grid-cols-3 gap-8 px-5 mt-20">
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/Award2023.jpg" alt="Awards" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Awards</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <Link href="/admissions/campus-virtual-tour">
                                <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/sports-fest.jpg" alt="Sports Fest" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Sports Fest</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <Link href="/admissions/campus-virtual-tour">
                                <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/Yoga2023.jpg" alt="Yoga" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Yoga</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <Link href="/admissions/campus-virtual-tour">
                                <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/sports.jpg" alt="Sports" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Sports</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <Link href="/admissions/campus-virtual-tour">
                                <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/plantation.jpeg" alt="Plantation" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Plantation</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md">
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl h-[300px]">
                        <img src="/image/campus-life/cultural.jpg" alt="Garba" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-125" />
                        <h3 className="absolute z-10 top-5 left-1/2 -translate-x-1/2 text-4xl w-full text-center font-novaReg">Garba</h3>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 flex justify-center items-end translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                            <Link href="/admissions/campus-virtual-tour">
                                <button className="mb-10 px-6 py-3 uppercase tracking-wider bg-secondary font-novaBold text-black rounded-md hover:bg-white transition-colors">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampusLife