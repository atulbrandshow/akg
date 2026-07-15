import Head from "next/head";
import { useState } from "react";
import Header from "@/Components/Header";
import {
  Globe,
  Award,
  BookOpen,
  Users,
  Handshake,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Quote,
  CheckCircle2,
  Bookmark,
  Shield,
  Compass,
  ArrowRight,
  Calendar,
  Building,
  Briefcase,
  Sparkles,
  HeartHandshake
} from "lucide-react";

export default function InternationalAdmissions() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaculty, setActiveFaculty] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  // Core values data
  const values = [
    {
      title: "Vision",
      desc: "To be a globally recognized institution of excellence that fosters innovation, intercultural understanding, and transformative education for sustainable global development.",
      icon: <Globe className="w-8 h-8 text-[#FFC526]" />,
      bg: "from-[#002147] to-[#003366]"
    },
    {
      title: "Mission",
      desc: "AKG University is committed to delivering research-driven education aligned with international standards, cultivating global citizenship, and advancing knowledge through strategic partnerships and interdisciplinary collaboration.",
      icon: <Compass className="w-8 h-8 text-[#FFC526]" />,
      bg: "from-[#1a365d] to-[#2a4365]"
    },
    {
      title: "Core Values",
      desc: "We are guided by academic integrity, inclusivity, innovation, social responsibility, and global collaboration. Our strategy emphasizes measurable international engagement, research excellence, and student-centered development.",
      icon: <Shield className="w-8 h-8 text-[#FFC526]" />,
      bg: "from-[#2c3e50] to-[#34495e]"
    }
  ];

  // Global Footprint Points
  const footprintPoints = [
    "Active students exchange programs",
    "Active faculty exchange programs",
    "Semester-based student mobility pathways",
    "Dual and joint degree frameworks",
    "Collaborative Online International Learning (COIL)",
    "Joint research initiatives",
    "International conferences and academic diplomacy"
  ];

  // MoU List
  const mous = [
    { name: "KUKA Robotics", logoText: "KUKA" },
    { name: "BOSCH Automotive Ltd", logoText: "BOSCH" },
    { name: "National Formosa University", location: "Taiwan", logoText: "NFU" },
    { name: "Bosch Rexroth", location: "Germany", logoText: "REXROTH" },
    { name: "SIEMENS-PLM", logoText: "SIEMENS" },
    { name: "Tallinn University of Technology", location: "Estonia", logoText: "TalTech" },
    { name: "Karlsruhe University of Technology", location: "Germany", logoText: "KIT" },
    { name: "Technical University Vienna", location: "Austria", logoText: "TU Wien" },
    { name: "University of Mannheim", location: "Germany", logoText: "MANNHEIM" },
    { name: "Aalto University", location: "Finland", logoText: "AALTO" }
  ];

  // Faculty Testimonials
  const facultyList = [
    {
      name: "Prof. A. Min Tjoa",
      designation: "Full Professor & Director",
      dept: "Institute of Software Technology and Interactive Systems",
      institution: "Vienna University of Technology",
      quote: "I am happy to collaborate with AKG University, an institution strongly committed to academic excellence, global engagement, and research-driven innovation. Its focus on international partnerships, faculty mobility, and interdisciplinary learning reflects a clear vision aligned with global higher education standards. I look forward to continued collaboration that advances knowledge and strengthens international academic cooperation.",
      avatarBg: "bg-gradient-to-tr from-blue-500 to-indigo-700",
      initials: "AM",
      img: "/image/testimonial-images/cropped/tjoa_avatar.png"
    },
    {
      name: "Prof. Dr. Dirk Draheim",
      designation: "Full Professor & Academic Director",
      dept: "TalTech – Tallinn University of Technology",
      institution: "",
      quote: "It is a privilege to engage with AKG University, an institution that demonstrates strong academic leadership and a forward-looking vision in information technology and digital innovation. AKG’s commitment to research excellence, global collaboration, and next-generation technologies aligns well with contemporary developments in the information society. I look forward to continued cooperation that advances innovation and strengthens international academic partnerships.",
      avatarBg: "bg-gradient-to-tr from-purple-500 to-pink-700",
      initials: "DD",
      img: "/image/testimonial-images/cropped/draheim_avatar.png"
    },
    {
      name: "Prof. Silvia Lips",
      designation: "Scientific Expert, University of Luxembourg",
      dept: "Professor, Tallinn University of Technology (TalTech)",
      institution: "",
      quote: "It is a pleasure to engage with AKG University, an institution that demonstrates a strong commitment to innovation, digital governance, and interdisciplinary excellence. Its focus on integrating technology, policy, and global collaboration reflects a forward-thinking approach essential for advancing secure and effective digital ecosystems. I look forward to continued cooperation that strengthens academic exchange and contributes to the future of digital public services.",
      avatarBg: "bg-gradient-to-tr from-teal-500 to-emerald-700",
      initials: "SL",
      img: "/image/testimonial-images/cropped/lips_avatar.png"
    },
    {
      name: "Dr. Markus Bertel",
      designation: "Vienna University of Economics and Business",
      dept: "Vienna, Austria",
      institution: "",
      quote: "It is a pleasure to collaborate with AKG University, an institution that embraces data-driven innovation and the transformative potential of information technology and artificial intelligence. Its commitment to user-centric digital transformation and meaningful technological advancement reflects a forward-thinking vision aligned with global innovation standards. I look forward to continued collaboration that bridges technology and human needs to create impactful solutions for society.",
      avatarBg: "bg-gradient-to-tr from-orange-500 to-red-600",
      initials: "MB",
      img: "/image/testimonial-images/cropped/bertel_avatar.png"
    },
    {
      name: "Dr. Rozha Ahmed",
      designation: "Sulaimani Polytechnic University, Iraq",
      dept: "",
      institution: "",
      quote: "It is a privilege to collaborate with AKG University, an institution that demonstrates a strong commitment to digital transformation, innovation, and academic excellence. Its forward-looking policy, and research reflects a deep understanding of the evolving global digital landscape. I look forward to continued collaboration in advancing impactful research, consultancy, and education in the field of digital transformation.",
      avatarBg: "bg-gradient-to-tr from-rose-500 to-indigo-600",
      initials: "RA",
      img: "/image/testimonial-images/cropped/ahmed_avatar.png"
    }
  ];

  // Academic Mobility & Pathways
  const pathways = [
    {
      title: "Student Exchange Programs",
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: "Academic pathways maintaining complete academic integrity while providing transformative global exposure.",
      desc: "At AKG University, student mobility under international MOUs is implemented through carefully designed academic pathways that maintain academic integrity while providing transformative global exposure. Before departure, students undergo academic mapping processes to ensure course equivalency and credit transfer compatibility. Academic advisors and international coordinators jointly approve the study plan, ensuring seamless reintegration upon return. While abroad, students engage in immersive learning environments, experiencing different academic cultures, assessment systems, and interdisciplinary approaches. This exposure cultivates adaptability, intercultural competence, independent thinking, and global professional readiness.",
      bullets: [
        "Structured pre-departure orientation",
        "Cultural competency training",
        "Health insurance and safety compliance",
        "Continuous academic monitoring",
        "Post-return reintegration workshops"
      ],
      footerText: "Exchange participation enhances graduate employability by demonstrating international exposure, resilience, and cross-cultural collaboration skills."
    },
    {
      title: "Short-Term Global Mobility",
      icon: <Calendar className="w-5 h-5" />,
      tagline: "Designed as a structured developmental journey rather than a short-term international experience.",
      desc: "At AKG University, short term global mobility programs are designed as a structured developmental journey rather than a short-term international experience. Inbound exchange students enrich campus diversity by contributing international perspectives to classroom discussions, research teams, and student organizations. Outbound students receive comprehensive preparation including cultural intelligence training, academic readiness workshops, and safety briefings. Upon completion of mobility programs, students undergo structured reintegration processes to translate global experiences into academic and professional development outcomes.",
      bullets: [
        "Leadership confidence",
        "Global adaptability",
        "Multilingual communication skills",
        "Interdisciplinary collaboration"
      ],
      footerText: "Mobility experiences significantly enhance: Leadership confidence, Global adaptability, Multilingual communication skills, and Interdisciplinary collaboration."
    },
    {
      title: "Faculty Mobility & Excellence",
      icon: <Users className="w-5 h-5" />,
      tagline: "Faculty mobility strengthens intellectual exchange and academic benchmarking.",
      desc: "At AKG University, faculty mobility strengthens intellectual exchange and academic benchmarking. Through structured faculty exchange programs, international professors visit AKG University and engage in teaching assignments, research residencies, curriculum development, and doctoral supervision. Our students and faculty collaborate in priority research areas including artificial intelligence, sustainability, biotechnology, renewable energy, digital transformation, and social innovation. By fostering international research and teaching ecosystems, we ensure our academic community contributes meaningfully to solving global challenges.",
      bullets: [
        "International teaching assignments",
        "Co-authored publications in international journals",
        "Joint research grants",
        "Innovation and patent development",
        "Curriculum modernization",
        "Establishment of interdisciplinary research networks"
      ],
      footerText: "By fostering international research and teaching ecosystems, we ensure our academic community contributes meaningfully to solving global challenges."
    },
    {
      title: "COIL (Virtual Collaboration)",
      icon: <Globe className="w-5 h-5" />,
      tagline: "Collaborative Online International Learning (COIL) represents the democratization of global education.",
      desc: "At AKG University, Collaborative Online International Learning (COIL) represents the democratization of global education. It integrates cross-border academic collaboration directly into coursework without requiring physical travel. Through COIL, faculty from two or more partner institutions co-design course modules and integrate shared learning objectives. Students collaborate virtually in multicultural teams to complete joint assignments, research projects, and problem-solving case studies. COIL courses are carefully structured to ensure synchronized academic calendars, aligned grading rubrics, and collaborative assessment frameworks. The COIL model ensures that even students who cannot participate in physical mobility programs receive international exposure embedded within their degree. Institutionally, COIL expands global engagement scalability and strengthens digital internationalization strategy.",
      bullets: [
        "Digital collaboration",
        "Cross-cultural communication",
        "International teamwork",
        "Global project management",
        "Intercultural negotiation"
      ],
      footerText: "The COIL model ensures that even students who cannot participate in physical mobility programs receive international exposure embedded within their degree. Institutionally, COIL expands global engagement scalability and strengthens digital internationalization strategy."
    },
    {
      title: "Joint Degree Programs",
      icon: <Award className="w-5 h-5" />,
      tagline: "Global academic partnerships extend beyond mobility to strategic collaboration.",
      desc: "At AKG University, Global academic partnerships extend beyond mobility to strategic collaboration across governance, research, and innovation. AKG University’s partnerships involve joint academic councils, collaborative accreditation benchmarking, shared advisory boards, and cross-border program development. Through sustained collaboration, partnerships evolve from exchange-based agreements to long-term strategic academic ecosystems.",
      bullets: [
        "Joint degree development",
        "Dual certification programs",
        "Industry-integrated global learning",
        "International advisory engagement",
        "Faculty capacity building"
      ],
      footerText: "Through sustained collaboration, partnerships evolve from exchange-based agreements to long-term strategic academic ecosystems."
    },
    {
      title: "Joint Knowledge Creation",
      icon: <BookOpen className="w-5 h-5" />,
      tagline: "Joint research initiatives represent the intellectual core of international partnerships.",
      desc: "Joint research initiatives represent the intellectual core of international partnerships. AKG University collaborates with global institutions to address complex, interdisciplinary challenges that transcend borders. Research partnerships are structured around shared thematic priorities such as sustainability, digital transformation, biotechnology, public health, climate resilience, artificial intelligence, and social innovation. Faculty and doctoral scholars engage in collaborative fieldwork, laboratory research, data analytics, and international conferences. Research findings are disseminated through high-impact journals, policy white papers, and global symposiums.",
      bullets: [
        "Bilateral grant proposals",
        "Multilateral funding frameworks",
        "International consortium participation",
        "Shared research infrastructure",
        "Joint doctoral supervision"
      ],
      footerText: "These initiatives not only elevate research output but also contribute to: Global problem-solving, Innovation commercialization, Policy influence, Technology transfer, and International academic prestige."
    },
    {
      title: "Curriculum & Programs",
      icon: <Bookmark className="w-5 h-5" />,
      tagline: "Internationally benchmarked to align with global accreditation frameworks and industry expectations.",
      desc: "The curriculum at AKG University is internationally benchmarked to align with global accreditation frameworks and industry expectations. Dual and joint degree pathways allow students to complete portions of their studies at partner institutions, resulting in globally recognized qualifications.",
      bullets: [
        "Outcome-based education models",
        "Global case analysis",
        "Experiential learning components",
        "Research-led instruction",
        "Industry immersion modules"
      ],
      footerText: "Our graduates emerge with: Global citizenship mindset, Ethical leadership principles, Research competence, Innovation capability, and Cross-cultural intelligence."
    },
    {
      title: "Conferences & Outreach",
      icon: <Handshake className="w-5 h-5" />,
      tagline: "AKG University hosts several international conferences, research symposiums, and global forums.",
      desc: "AKG University hosts several international conferences, research symposiums, and global forums that convene students, scholars, policymakers, industry leaders, and innovators from around the world. Our outreach initiatives extend academic expertise into community development and international cooperation projects.",
      bullets: [
        "International Research dissemination",
        "Policy engagement",
        "Industry-academia collaboration",
        "Doctoral networking",
        "Global thought leadership"
      ],
      footerText: "Our outreach initiatives extend academic expertise into community development and international cooperation projects."
    }
  ];

  // Student Services data
  const services = [
    {
      title: "International Admissions & Student Support",
      icon: <Sparkles className="w-6 h-6 text-[#FFC526]" />,
      paragraphs: [
        "International admissions processes at AKG University are transparent, structured, and student-centered. Dedicated international advisors guide applicants from document submission to visa facilitation.",
        "Upon arrival, students receive orientation support, academic advising, career counselling, housing assistance, and wellness services.",
        "A holistic support ecosystem ensures academic success, personal well-being, and professional development throughout the student lifecycle.",
        "All applicants receive comprehensive guidance from document submission to visa processing."
      ],
      listTitle: "The admissions framework ensures:",
      bullets: [
        "Academic credential evaluation",
        "English proficiency assessment",
        "Transparent selection criteria",
        "Timely communication"
      ],
      footerText: "We welcome students who demonstrate academic potential, global curiosity, and commitment to personal growth."
    },
    {
      title: "Student Support & Campus Life",
      icon: <HeartHandshake className="w-6 h-6 text-[#FFC526]" />,
      paragraphs: [
        "At AKG University, International students receive holistic support throughout their academic journey."
      ],
      listTitle: "These services include:",
      bullets: [
        "Orientation programs",
        "Academic advising",
        "Career counselling",
        "Internship placement assistance",
        "Housing support",
        "Health and wellness services"
      ],
      footerText: "Our student life ecosystem encourages leadership development, community engagement, and professional readiness. We believe student success extends beyond the classroom."
    },
    {
      title: "Multicultural & Inclusive Campus",
      icon: <Users className="w-6 h-6 text-[#FFC526]" />,
      paragraphs: [
        "At AKG University, diversity is embedded within institutional identity. The university actively cultivates an environment where students from diverse cultural, linguistic, and socio-economic backgrounds thrive.",
        "Structured inclusion policies ensure equity, accessibility, and anti-discrimination compliance. Cultural celebrations, international student associations, language exchange programs, and intercultural dialogue forums promote social integration.",
        "Comprehensive support services include multilingual counselling, mental health programs, accessibility accommodations, and community engagement initiatives."
      ],
      listTitle: "",
      bullets: [],
      footerText: "The campus culture fosters belonging, mutual respect, and global solidarity."
    },
    {
      title: "Graduate Outcomes & Global Careers",
      icon: <Briefcase className="w-6 h-6 text-[#FFC526]" />,
      paragraphs: [
        "Our career services team collaborates with multinational employers, startups, NGOs, and research institutions to facilitate global employment pathways.",
        "Alumni networks span multiple countries, strengthening professional connections and institutional reputation worldwide."
      ],
      listTitle: "Graduates of AKG University are equipped with:",
      bullets: [
        "Global adaptability",
        "Research competence",
        "Intercultural communication skills",
        "Ethical leadership principles",
        "Innovation capacity"
      ],
      footerText: "Our career services team collaborates with multinational employers, startups, NGOs, and research institutions to facilitate global employment pathways, and alumni networks span multiple countries, strengthening professional connections and institutional reputation worldwide."
    }
  ];

  return (
    <>
      <Head>
        <title>International Admissions & Global Relations | AKG University</title>
        <meta
          name="description"
          content="Explore international admissions, global academic partnerships, student exchange programs, and international MoUs at AKG University. Learn about our vision without borders."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-slate-50 min-h-screen text-slate-900 font-novaReg">
        {/* Hero Section using existing Header component */}
        <Header
          title="EDUCATING GLOBAL LEADERS FOR A CONNECTED WORLD"
          subHeading="AKG University: A Global Campus, A World of Opportunities"
          bgKey="BG5" // BG5 is mapped to /image/dotted-map-bg.png which matches global theme
          gradient="bg-gradient-to-r from-[#002147]/95 to-slate-900/60"
          showButton={true}
        />

        {/* 1. Vice Chancellor Welcome Section */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Visual/Quote Branding */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#002147] to-[#1a365d] p-12 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background decorative pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div>
                <span className="bg-[#FFC526] text-[#002147] text-xs font-novaBold tracking-widest uppercase px-3 py-1 rounded-full">
                  Welcome Message
                </span>
                <h3 className="text-3xl font-novaBold mt-6 mb-4 text-[#FFC526]">
                  A Vision Without Borders
                </h3>
                <p className="text-slate-200 text-lg italic leading-relaxed">
                  "Education must evolve with the world it serves. We cultivate a learning ecosystem that transcends geography."
                </p>
              </div>

              <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-700/60">
                <p className="font-novaBold text-xl text-white">Prof. Amita Dev</p>
                <p className="text-slate-300 text-sm">Vice Chancellor, AKG University</p>
              </div>
            </div>

            {/* Right Column: Detailed Text */}
            <div className="lg:col-span-7 p-12 flex flex-col justify-center">
              <p className="text-slate-500 font-novaBold text-sm uppercase tracking-wider mb-2">
                Office of the Vice Chancellor
              </p>
              <h4 className="text-2xl font-novaBold text-[#002147] mb-6">
                Dear Prospective Students, Partners, and Scholars,
              </h4>
              
              <div className="space-y-4 text-slate-700 text-base leading-relaxed text-justify">
                <p>
                  Welcome to AKG University, an institution founded on the belief that education must evolve with the world it serves. In an era defined by global interconnectivity, digital transformation, and complex international challenges, universities must prepare students to navigate diversity, innovation, and collaboration across borders.
                </p>
                <p>
                  Our commitment to internationalization is not symbolic; it is embedded in our academic architecture. Through global academic partnerships, faculty exchange, research collaborations, and international student mobility, we cultivate a learning ecosystem that transcends geography.
                </p>
                <p>
                  We invite you to become part of a university where ambition meets opportunity, and where global engagement defines the student experience.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-novaBold text-[#002147]">Sincerely,</p>
                  <p className="text-[#002147] font-novaSemi text-lg mt-1">Prof. Amita Dev</p>
                  <p className="text-slate-500 text-sm">Vice Chancellor</p>
                </div>
                {/* Visual signature placeholder */}
                <div className="h-12 w-32 border-b-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs italic font-serif">
                  Amita Dev
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Vision, Mission & Values Section */}
        <section className="py-16 bg-slate-100 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-novaBold text-[#002147] mb-4">
                Our Core Philosophy
              </h2>
              <div className="h-1 w-20 bg-[#FFC526] mx-auto rounded" />
              <p className="text-slate-600 mt-4 text-lg">
                Building a framework of educational excellence with international benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#002147] hover:border-[#FFC526] flex flex-col h-full"
                >
                  <div className="mb-6 p-3 bg-slate-50 rounded-lg inline-block w-fit">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-novaBold text-[#002147] mb-4">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base flex-grow">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Global Footprint & MoUs Section */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Global Footprint checklist */}
            <div className="lg:col-span-5">
              <span className="text-[#FFC526] font-novaBold text-xs tracking-widest uppercase bg-[#002147] px-3 py-1 rounded-full">
                Global Network
              </span>
              <h2 className="text-4xl font-novaBold text-[#002147] mt-4 mb-6">
                Our Global Footprint
              </h2>
              <p className="text-slate-700 mb-8 text-lg leading-relaxed text-justify">
                AKG University maintains a strong and expanding global presence through international Memoranda of Understanding, academic partnerships, collaborative research networks, and student mobility programs. Our partnerships span multiple continents, enabling dynamic collaboration in teaching, research, innovation, and industry engagement.
              </p>

              <div className="space-y-3">
                {footprintPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#002147] mt-1 flex-shrink-0" />
                    <p className="text-slate-700 text-base">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-100 rounded-xl border-l-4 border-[#FFC526]">
                <p className="text-slate-700 italic">
                  "Our campus welcomes students and scholars from diverse nationalities, creating a vibrant multicultural academic environment that mirrors the global society our graduates will serve."
                </p>
              </div>
            </div>

            {/* Right: MoU list */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-novaBold text-[#002147]">
                    International Memoranda of Understanding
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed text-justify">
                    International MoUs at AKG University are not symbolic agreements; they are strategically designed frameworks that establish measurable academic, research, and institutional collaboration. Every partnership is guided by clearly defined objectives, deliverables, monitoring mechanisms, and performance indicators. The International Relations Office (IRO) oversees implementation, compliance, renewal evaluation, and impact measurement.
                  </p>
                </div>
                <Handshake className="w-10 h-10 text-[#002147] opacity-20 hidden sm:block" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[480px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300">
                {mous.map((mou, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[#002147] font-novaBold text-sm px-2 py-0.5 bg-slate-200/60 rounded">
                        {mou.logoText}
                      </span>
                      {mou.location && (
                        <span className="text-xs font-novaSemi text-slate-500 bg-white shadow-sm border px-2 py-0.5 rounded-full">
                          {mou.location}
                        </span>
                      )}
                    </div>
                    <h4 className="font-novaBold text-[#002147] my-3 text-base">
                      {mou.name}
                    </h4>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* 5. International Faculty Testimonials Section */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FFC526] font-novaBold text-xs tracking-widest uppercase bg-[#002147] px-3 py-1 rounded-full">
              Global Mentorship
            </span>
            <h2 className="text-4xl font-novaBold text-[#002147] mt-4 mb-4">
              Our International Faculty & Collaborations
            </h2>
            <div className="h-1 w-20 bg-[#FFC526] mx-auto rounded" />
            <div className="text-slate-600 mt-6 text-base max-w-4xl mx-auto space-y-3 text-justify">
              <p>
                AKG University proudly hosts distinguished scholars and industry experts from leading global institutions who enrich our academic ecosystem through teaching, research collaboration, and knowledge exchange.
              </p>
              <p>
                Our international faculty bring diverse perspectives, global research expertise, and real-world experience into the classroom, strengthening interdisciplinary learning and fostering a truly global academic environment.
              </p>
              <p>
                Through sustained international engagement, we ensure that our students benefit from world-class mentorship and exposure to global best practices.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Testimonial cards list (mini list) */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-between">
              <div className="space-y-3">
                {facultyList.map((faculty, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFaculty(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${
                      activeFaculty === idx
                        ? "bg-white border-[#FFC526] shadow-md scale-[1.01]"
                        : "bg-slate-50 border-slate-100 hover:bg-slate-100/70"
                    }`}
                  >
                    {faculty.img ? (
                      <img
                        src={faculty.img}
                        alt={faculty.name}
                        className="w-12 h-12 rounded-full object-cover shadow-sm border border-slate-100 flex-shrink-0"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-novaBold flex-shrink-0 ${faculty.avatarBg}`}>
                        {faculty.initials}
                      </div>
                    )}
                    <div className="truncate">
                      <h4 className="font-novaBold text-[#002147] text-base truncate">{faculty.name}</h4>
                      <p className="text-slate-500 text-xs truncate">{faculty.institution}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-[#002147] text-white p-6 rounded-xl mt-6 lg:mt-0">
                <h5 className="font-novaBold text-lg text-[#FFC526] mb-2">Global Classroom</h5>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our faculty bring diverse perspectives, global research expertise, and real-world experience into the classroom, strengthening interdisciplinary learning.
                </p>
              </div>
            </div>

            {/* Big display of active testimonial */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-150 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-slate-100 pointer-events-none">
                <Quote className="w-36 h-36 opacity-30 transform rotate-180" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  {facultyList[activeFaculty].img ? (
                    <img
                      src={facultyList[activeFaculty].img}
                      alt={facultyList[activeFaculty].name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg border-2 border-slate-100 flex-shrink-0"
                    />
                  ) : (
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-novaBold shadow-lg flex-shrink-0 ${facultyList[activeFaculty].avatarBg}`}>
                      {facultyList[activeFaculty].initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-novaBold text-[#002147]">
                      {facultyList[activeFaculty].name}
                    </h3>
                    <p className="text-slate-700 font-novaSemi text-sm">
                      {facultyList[activeFaculty].designation}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {facultyList[activeFaculty].dept}
                    </p>
                    <p className="text-[#002147] font-novaBold text-xs mt-0.5">
                      {facultyList[activeFaculty].institution}
                    </p>
                  </div>
                </div>

                <div className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-8 text-justify">
                  "{facultyList[activeFaculty].quote}"
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-between items-center relative z-10">
                <span className="text-xs font-novaSemi text-slate-500">
                  Faculty Collaborative Member
                </span>
                <span className="text-xs font-novaBold text-[#002147] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded">
                  Vienna / TalTech / Luxembourg
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Academic Mobility & Programs (Interactive Tabbed Accordion) */}
        <section className="py-20 bg-[#002147] text-white px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#FFC526] text-xs font-novaBold tracking-widest uppercase bg-slate-800/80 px-3 py-1 rounded-full">
                Pathways & Internships
              </span>
              <h2 className="text-4xl font-novaBold text-white mt-4 mb-4">
                Academic Mobility & Global Programs
              </h2>
              <p className="text-slate-300 text-lg">
                Structured frameworks to cultivate global leadership, research excellence, and interdisciplinary competence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Tab Selector List */}
              <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
                {pathways.map((path, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left font-novaSemi transition-all duration-300 text-sm sm:text-base flex-shrink-0 lg:flex-shrink ${
                      activeTab === idx
                        ? "bg-[#FFC526] text-[#002147] shadow-lg scale-[1.02]"
                        : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {path.icon}
                    <span>{path.title}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="lg:col-span-8 bg-white text-slate-800 p-8 sm:p-10 rounded-2xl shadow-2xl min-h-[420px] flex flex-col justify-between border border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-150 pb-4 mb-6">
                    <h3 className="text-2xl sm:text-3xl font-novaBold text-[#002147]">
                      {pathways[activeTab].title}
                    </h3>
                    <div className="p-3 bg-slate-100 rounded-xl text-[#002147]">
                      {pathways[activeTab].icon}
                    </div>
                  </div>

                  <p className="text-slate-500 font-novaBold text-sm uppercase tracking-wide mb-3">
                    {pathways[activeTab].tagline}
                  </p>

                  <p className="text-slate-700 text-base leading-relaxed mb-6 text-justify">
                    {pathways[activeTab].desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    <p className="font-novaBold text-[#002147] text-sm uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    {pathways[activeTab].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FFC526] mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700 text-base">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 rounded-b-2xl">
                  <p className="text-slate-600 text-sm italic font-novaSemi">
                    {pathways[activeTab].footerText}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Student Support & Campus Life Section */}

        <section className="py-20 bg-slate-100 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#FFC526] font-novaBold text-xs tracking-widest uppercase bg-[#002147] px-3 py-1 rounded-full">
                Student Lifecycle
              </span>
              <h2 className="text-4xl font-novaBold text-[#002147] mt-4 mb-4">
                Admissions, Support & Campus Life
              </h2>
              <div className="h-1 w-20 bg-[#FFC526] mx-auto rounded" />
              <p className="text-slate-600 mt-4 text-lg">
                Holistic student support ecosystem ensuring academic success, personal well-being, and career readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Tab Selector List */}
              <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
                {services.map((svc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveServiceTab(idx)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left font-novaSemi transition-all duration-300 text-sm sm:text-base flex-shrink-0 lg:flex-shrink ${
                      activeServiceTab === idx
                        ? "bg-[#002147] text-white shadow-lg scale-[1.02]"
                        : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${activeServiceTab === idx ? "bg-slate-800 text-[#FFC526]" : "bg-slate-100 text-[#002147]"}`}>
                      {svc.icon}
                    </div>
                    <span>{svc.title}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="lg:col-span-8 bg-white text-slate-800 p-8 sm:p-10 rounded-2xl shadow-xl min-h-[420px] flex flex-col justify-between border border-slate-100">
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-150 pb-4 mb-6">
                    <h3 className="text-2xl sm:text-3xl font-novaBold text-[#002147]">
                      {services[activeServiceTab].title}
                    </h3>
                    <div className="p-3 bg-slate-100 rounded-xl text-[#002147]">
                      {services[activeServiceTab].icon}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 text-slate-700 text-base leading-relaxed text-justify">
                    {services[activeServiceTab].paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {services[activeServiceTab].bullets && services[activeServiceTab].bullets.length > 0 && (
                    <div className="space-y-3 mb-8">
                      {services[activeServiceTab].listTitle && (
                        <p className="font-novaBold text-[#002147] text-sm uppercase tracking-wider">
                          {services[activeServiceTab].listTitle}
                        </p>
                      )}
                      {services[activeServiceTab].bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#FFC526] mt-0.5 flex-shrink-0" />
                          <p className="text-slate-700 text-base">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-6 rounded-b-2xl">
                  <p className="text-[#002147] font-novaBold text-sm leading-relaxed">
                    {services[activeServiceTab].footerText}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Call To Action & Contact Details Section */}
        <section className="py-20 bg-gradient-to-br from-[#002147] to-slate-900 text-white px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left CTA text */}
              <div className="lg:col-span-6">
                <span className="text-[#FFC526] font-novaBold text-xs tracking-widest uppercase bg-slate-800 px-3 py-1 rounded-full">
                  Join Our Global Community
                </span>
                <h2 className="text-4xl sm:text-5xl font-novaBold mt-4 mb-6 leading-tight">
                  Your Journey Toward Global Excellence Begins Here.
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  At AKG University, education is not confined by geography. It is shaped by collaboration, diversity, innovation, and purpose. We invite you to become part of a community committed to knowledge creation, cultural understanding, and transformative impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FFC526] rounded-full" />
                    <span className="font-novaSemi text-slate-200">Apply Today</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FFC526] rounded-full" />
                    <span className="font-novaSemi text-slate-200">Connect Globally</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FFC526] rounded-full" />
                    <span className="font-novaSemi text-slate-200">Lead Confidently</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#FFC526] hover:bg-yellow-500 text-[#002147] font-novaBold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2">
                    <span>Apply for Admissions</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-novaBold px-8 py-4 rounded-xl transition-all duration-300">
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Right Contact details card */}
              <div className="lg:col-span-6 bg-white text-slate-800 p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-novaBold text-[#002147] mb-6 pb-3 border-b">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-slate-100 rounded-lg text-[#002147] mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-400 font-novaBold tracking-wider">Address</p>
                      <p className="text-slate-700 font-novaSemi text-base mt-0.5">
                        27th KM Milestone, Delhi - Meerut Expy,
                        Ghaziabad, Uttar Pradesh 201015, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-slate-100 rounded-lg text-[#002147] mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-400 font-novaBold tracking-wider">Phone Helpline</p>
                      <p className="text-slate-700 font-novaSemi text-base mt-0.5">
                        +91 8744052891, 8744052892
                      </p>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-slate-100 rounded-lg text-[#002147] mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="w-full">
                      <p className="text-xs uppercase text-slate-400 font-novaBold tracking-wider">Emails</p>
                      <div className="mt-1 space-y-1.5">
                        <div className="flex justify-between items-center text-sm font-novaSemi text-slate-700 bg-slate-50 p-2 rounded hover:bg-slate-100 transition-colors">
                          <span>info@akgec.ac.in</span>
                          <span className="text-[10px] uppercase text-slate-400 font-novaBold px-2 bg-slate-200/50 rounded">General</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-novaSemi text-slate-700 bg-slate-50 p-2 rounded hover:bg-slate-100 transition-colors">
                          <span>admissiions@akgec.ac.in</span>
                          <span className="text-[10px] uppercase text-slate-400 font-novaBold px-2 bg-slate-200/50 rounded">Admissions</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm font-novaSemi text-slate-700 bg-[#FFC526]/10 border border-[#FFC526]/30 p-2.5 rounded gap-1">
                          <span className="font-novaBold text-[#002147]">internationaladmissions@akgec.ac.in</span>
                          <span className="text-[9px] uppercase bg-[#FFC526] text-[#002147] font-novaBold px-2 py-0.5 rounded self-start sm:self-center">
                            International admissions only
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-8 bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                  <p className="text-xs text-slate-500 font-novaSemi">
                    At AKG University, the world is not just studied—it is experienced.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
