import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CubeSlider from "@/Components/CubeSlider";

const results = [
  {
    title: "METAHUNT - Recruitment Drive",
    desc: (
      <>
      <ul style={{listStyleType: "disc"}} className="ml-4">
        <li>Date: September 22, 2024</li>
        <li>Rounds: Concept Submission → Prototype Development → Final Presentations</li>
        <li>Objective: Identify top AR/VR developers & 3D designers for the Centre of Metaverse</li>
        <li>Outcome: Selection of the most promising individuals for future projects</li>
      </ul>
      <p className="mt-4">METAHUNT was a highly competitive recruitment event designed to identify the most talented AR/VR developers and 3D designers among AKGEC students. The event comprised multiple rounds, starting with concept submissions, followed by prototype development, and concluding with final presentations evaluated by expert mentors. Participants showcased their skills in immersive technology development, and the most promising individuals were selected to join the Centre of Metaverse. The event provided a platform for aspiring technologists to demonstrate their creativity and problem-solving abilities.</p>
      </>
    ),
    // slides: [
    //   { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_1.jpg" },
    //   { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_2.jpg" },
    //   { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_3.jpg" },
    //   { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_4.jpg" },
    //   { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_5.jpg" },
    //   { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_6.jpg" },
    //   { title: 'Blockchain', img: "/image/rd/blockchain/Blockchain_7.jpg" },
    // ]
  },
  {
    title: "ORION - AR Hunt Competition",
    desc: (
      <>
      <ul style={{listStyleType: "disc"}} className="ml-4">
        <li>Date: December 8, 2024</li>
        <li>Speaker: Chhavi Garg (Immersive Tech Expert)</li>
        <li>Event Segments: Expert Session → AR Hunt Competition → Awards Ceremony</li>
        <li>Prize Pool: ₹3,000 for top performers</li>
      </ul>
        The day team BRL meets to commemorate our founders PRAKHAR AGARWAL, SHAKTI JAISWAL & SHUBH SINGHAL who have bequeathed resources to its development. It’s been a long way since establishment, and we are enthused to see the place BRL has achieved so far through manifesting both compassion and hard work together. <br /> <br />
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1">
            <img src="/image/rd/blockchain/brl7.png" alt="Blockchain" />
          </div>
          <div className="col-span-2">
            <img src="/image/rd/blockchain/brl8.png" alt="Blockchain" />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "RELOAD",
    desc: (
      <>
        Blockchain Research Lab conducts a recruitment drive to recruit second year students. The event takes place in two parts – a test followed by a personal interview round with a motive of putting the participants’ analytical and logical skills to test.
      </>
    ),
    slides: [
      { title: 'Blockchain', img: "/image/rd/blockchain/brl9.png" },
      { title: 'Blockchain', img: "/image/rd/blockchain/brl10.png" },
      { title: 'Blockchain', img: "/image/rd/blockchain/brl11.png" },
    ]
  },
  {
    title: "HASHEZ",
    desc: (
      <div className="grid grid-cols-2 gap-5">
        <p>Blockchain Research Lab in collaboration with DLT LABS organises an interactive online workshop “Hashez" every year. This inter college session covers basics of Blockchain technology and Smart Contracts to advance with hands-on experience on DL Unify by industry experts. A verified certificate and exciting prizes are awarded to the winners and participants.</p>
        <img src="/image/rd/blockchain/brl12.png" alt="Blockchain" />
      </div>
    ),
  },
  {
    title: "BLOCKVERSE",
    desc: (
      <>
        It is the team's most exciting event which is usually conducted for first & second year students. It comprises two phases: first one being the project building round followed by a rejuvenating treasure hunt game, CryptHunt, where the participants had to brainstorm over the hints and solve the riddles within the specified time limit. Exciting cash prizes, goodies and certificates are awarded to the winners. <br />
        <div className="grid grid-cols-2 gap-3">
          <img src="/image/rd/blockchain/brl13.png" alt="Blockchain" />
          <img src="/image/rd/blockchain/brl14.png" alt="Blockchain" />
        </div>
      </>
    ),
  },
  {
    title: "TECHNIVAL",
    desc: (
      <>
        It is a multi-branch unique event that incorporates two stages: TECHNOPIAD, a technical Olympiad to brainstorm over critical engineering and computational problems followed by BIDBUZZ, a fun-filled yet enthralling auction experience poured with problem-solving where teams battle while individuals learned. <br />
        <div className="grid grid-cols-2 gap-3">
          <img src="/image/rd/blockchain/brl15.png" alt="Blockchain" />
          <img src="/image/rd/blockchain/brl16.png" alt="Blockchain" />
        </div>
      </>
    ),
  },
  {
    title: "EXCLUSIVE INTERACTIVE SESSIONS",
    desc: (
      <>
        The society organises regular webinars for the students to interact with entrepreneurs and tech masters. One among them was a most awaited session with the founder of GeeksForGeeks by Sandeep Jain Sir. It was an enlightening conclave, wherein Sir shared his experiences as an engineering student and took all the participants on the ride of his entrepreneurial journey in establishing GeeksforGeeks. He also addressed numerous queries of the inquisitive students.
        <div className="grid grid-cols-2 gap-3">
          <img src="/image/rd/blockchain/brl17.png" alt="Blockchain" />
          <img src="/image/rd/blockchain/brl18.png" alt="Blockchain" />
        </div>
      </>
    ),
  },
];


const CentreOfMetaverse = () => {
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
        <div className="max-w-7xl mx-auto text-center font-novaReg text-lg text-gray-600 mb-5">
          <p>Centre of Metaverse is a research and development centre at Ajay Kumar Garg Engineering College, founded in 2023. We are a group of students who share a passion for augmented reality, virtual reality, and 3D modelling. We are a hub for innovation, where we experiment with the latest technologies and work on various exciting projects, turning our imagination into reality. We welcome you to come with us on a wonderful journey into the Metaverse, where we will be your reliable companions in this exhilarating adventure where the real and the virtual worlds blend.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5 items-start bg-[#E5F4F1] py-6">
          <div className="relative flex items-center justify-center">
            <img
              src="/image/rd/metaverse/Metaverse_1.jpg"
              alt="3D modelled interior room on laptop"
              className="w-fit  h-auto" />
          </div>
          <div className="space-y-6">
            <h1 className="text-xl text-center font-novaSemi text-gray-900">
              Our Mission
            </h1>
            <p className="text-gray-700 text-sm leading-relaxed">
              The “Centre of Metaverse" is dedicated to serving as a creative sanctuary for students with a passion for augmented reality, virtual reality, and 3D modelling. Equipped with advanced technology, we encourage exploration and innovation, where technology and creativity converge harmoniously.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start py-6">
          <div className="space-y-6">
            <h1 className="text-xl text-center font-novaSemi text-gray-900">
              A Glimpse into Our World
            </h1>
            <p className="text-gray-700 text-sm leading-relaxed">
              The “Centre of Metaverse" society is dedicated to exploring exciting technologies like augmented reality, virtual reality, and 3D modelling. Our activities encompass cutting-edge research, creative projects, and skill development opportunities in these domains. We offer workshops, training, and seminars to equip our members with the latest tools and knowledge, keeping them at the forefront of innovation. <br />
              The “Centre of Metaverse" society is dedicated to exploring exciting technologies like augmented reality, virtual reality, and 3D modelling. Our activities encompass cutting-edge research, creative projects, and skill development opportunities in these domains. We offer workshops, training, and seminars to equip our members with the latest tools and knowledge, keeping them at the forefront of innovation.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src="/image/rd/metaverse/Metaverse_2.jpg"
              alt="3D modelled interior room on laptop"
              className="w-52 h-auto"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start bg-[#E5F4F1] py-6">
          <div className="relative flex items-center justify-center">
            <img
              src="/image/rd/metaverse/Metaverse_3.jpg"
              alt="3D modelled interior room on laptop"
              className="w-fit h-auto"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-xl text-center font-novaSemi text-gray-900">
              Augmented Reality
            </h1>
            <div className="mt-6 text-sm">
              <p className="font-medium text-gray-900 mb-4">
                Augmented reality (AR) is a groundbreaking technology that seamlessly integrates digital elements into our physical environment, offering an enhanced and interactive experience. Among its various applications, “Home Decor" is a standout project that revolutionises interior design by enabling real-time visualisation and customisation of living spaces. With AR, users can experiment with furniture, decor, and colour schemes within their homes, providing an immersive preview of their design choices. This innovative blend of creativity and technology offers a practical and engaging solution for transforming living spaces with style and precision.
                In recent years, Augmented Reality (AR) has transcended the realm of science fiction and seamlessly integrated itself into our daily lives, bringing about transformative changes across various industries, some of such applications are:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    AR in Healthcare: Surgeons can use AR to overlay virtual images onto a patient's anatomy during surgery, providing real-time guidance and enhancing precision.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    AR in Navigation: Navigation systems are enhanced with contextual information, aiding urban planning and tourism.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    AR in Marketing: Marketing landscapes evolve with interactive campaigns. Customers virtually try products, enhancing the purchasing experience.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start py-6">
          <div className="space-y-6">
            <h1 className="text-xl text-center font-novaSemi text-gray-900">
              Virtual Reality
            </h1>
            <p className="text-gray-700 text-sm leading-relaxed">
              Virtual Reality (VR) is a groundbreaking technology that immerses users in digital environments, from realistic to fantastical experiences. “VR-RescueX" is an innovative project revolutionising disaster training, using the Oculus Quest 2 to simulate CBRN disaster scenarios for NDRF trainees. This offers a safe yet realistic environment for skill refinement, marking a significant advancement in disaster preparedness and response training. <br />
              VR with Meta Quest 2 employs a high-resolution headset and handheld controllers to create immersive experiences. It tracks head and hand movements, allowing users to interact with the virtual world seamlessly, whether for exploration, gaming, or simulating real-life situations. This hardware-software fusion ensures a captivating and immersive VR experience.
            </p>
            <div className="mt-6 text-sm">
              <p className="font-medium text-gray-900 mb-4">
                The impact of Virtual Reality (VR) extends far beyond our imagination. These technologies redefine real-life scenarios such as:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    VR in Education: Education becomes immersive, allowing students to explore historical events, travel to distant places, or engage in complex scientific simulations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    VR in Corporate Training: Employee training programs leverage VR for simulated environments, improving safety and efficiency.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Virtual Shopping: Retailers use VR to create virtual stores, enabling customers to browse and shop for products in a virtual environment
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src="/image/rd/metaverse/Metaverse_4.jpg"
              alt="3D modelled interior room on laptop"
              className="w-fit h-auto"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start bg-[#E5F4F1] py-6">
          <div className="relative flex items-center justify-center">
            <img
              src="/image/rd/metaverse/macbook_air.png"
              alt="3D modelled interior room on laptop"
              className="w-fit h-auto"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-xl text-center font-novaSemi text-gray-900">
              Three-dimensional Modelling
            </h1>
            <p className="text-gray-700 text-sm leading-relaxed">
              Three-dimensional modelling, or 3D modelling, is a creative and versatile digital process used in fields like animation, gaming, architecture, and product design. It transforms our perception and interaction with virtual spaces, creating lifelike environments. Blender, an open-source 3D modelling software, is a top choice for its extensive features. The process involves creating the model's structure, refining it through mesh editing, adding details and textures, and enhancing realism with lighting and rendering. Blender's animation system adds dynamic movement, and the final product can be exported in various formats, making it indispensable for 3D modelling, animation, and visualisation in the various industries.
            </p>
            <div className="mt-6 text-sm">
              <p className="font-medium text-gray-900 mb-4">
                Let's explore the real-life usages of 3D modelling:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Architectural Visualisation: 3D modelling is used to create realistic visualisations of architectural designs, allowing architects and clients to explore and understand the spatial layout before construction.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Game Environments: 3D modelling is used to design and render realistic game environments, enhancing the overall gaming experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Virtual Sets: Virtual reality (VR) and augmented reality (AR) productions leverage 3D modelling to create immersive virtual sets.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-center text-2xl font-semibold mb-12">FACULTY COORDINATORS:</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/metaverse/Rahul_Metaverse.jpg"
                  alt="Faculty mentor"
                  width={400}
                  height={300}
                  className="h-72 object-cover object-top mb-4 rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-medium mb-2">(Head of Department)</h2>
                  <p className="text-gray-600">Dr. Rahul Sharma</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/metaverse/Pancham_Metaverse.jpg"
                  alt="Faculty head"
                  width={400}
                  height={300}
                  className="h-72 object-cover object-top mb-4 rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-medium mb-2">(Faculty Coordinator)</h2>
                  <p className="text-gray-600">Mr. Pancham Singh</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/metaverse/Pankaj_Metaverse.jpg"
                  alt="Faculty head"
                  width={400}
                  height={300}
                  className="h-72 object-cover object-top mb-4 rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-medium mb-2">(Faculty Coordinator)</h2>
                  <p className="text-gray-600">Mr. Pankaj Singh</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center text-2xl font-semibold mb-12">STUDENT COORDINATORS:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/metaverse/Sandeep_Metaverse.jpg"
                  alt="Student coordinator"
                  width={300}
                  height={300}
                  className="h-72 object-cover mb-4 rounded-lg"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">SANDEEP GUPTA</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs flex flex-col justify-center items-center">
                <Image
                  src="/image/rd/metaverse/Ananya_Metaverse.jpg"
                  alt="Student coordinator"
                  width={300}
                  height={300}
                  className="h-72 object-cover mb-4 rounded-lg"
                />
                <div className="text-center">
                  <p className="text-lg font-medium">ANANYA AGARWAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl text-center py-10 font-novaSemi">ACTIVITIES AND EVENTS</h2>
        <div className="max-w-7xl mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
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

export default CentreOfMetaverse;