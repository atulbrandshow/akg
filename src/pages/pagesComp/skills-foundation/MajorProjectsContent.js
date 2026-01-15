import Image from 'next/image';

const projects = [
  { 
    title: "Technology Transfer for RAKSHITA Bike Ambulance for DRDO", 
    description: "AKGEC delivered end-to-end engineering support for DRDO's RAKSHITA bike ambulance, featuring a modular Casualty Evacuation Seat (CES) for rapid deployment. Developed by the Institute of Nuclear Medicine and Allied Sciences (INMAS), a premier DRDO laboratory in Delhi. This innovation enables swift first aid and evacuation in difficult terrains. The solution benefits military, paramilitary, and potential civilian emergency response where conventional ambulances cannot operate.",
    image: "/image/major-project-images/image1.jpg"
  },
  { 
    title: "3D Scanning and Scaled Printing of Combat Vehicle for Indian Air Force", 
    description: "A detailed 3D scanning and 1:10 scale fabrication of the OSA-AK-M combat vehicle was executed by AKGEC for the 7 Base Repair Depot, Indian Air Force. The project enabled accurate digital reconstruction and physical model manufacturing for technical study and display purposes. This initiative highlights advanced defence prototyping capability and collaborative innovation between academia and the armed forces.",
    image: "/image/major-project-images/image2.png"
  },
  { 
    title: "Cycle Time Optimization through Robotic Integration for Micromatic Grinding", 
    description: "AKGEC successfully integrated robotic automation with CNC systems at Micromatic Grinding, significantly enhancing operational efficiency. This innovation reduced the process time from 163 seconds to just 52 seconds, showcasing a remarkable improvement in productivity. The project exemplifies industry–academia collaboration for smart manufacturing and automation excellence.",
    image: "/image/major-project-images/image3.jpg"
  },
  { 
    title: "Vision-Based Inspection System for Ghaziabad Precision Products", 
    description: "AKGEC designed and deployed a customized machine vision inspection system for Rocker Arm assemblies at Ghaziabad Precision Products (GPP). Built using LabVIEW, the solution enhances quality assurance through precise defect detection and automated inspection. This initiative demonstrates advanced industrial automation capability and supports improved manufacturing reliability.",
    image: "/image/major-project-images/image4.jpg"
  },
  { 
    title: "3D Printed Prototype of Humsafar Coach for Indian Railways", 
    description: "A precision-engineered 3D printed model of the newly designed Humsafar Coach, developed by Modern Coach Factory, Raebareli. This prototype visually communicates key design features and structural enhancements of the coach. The model was proudly showcased and presented to the Honorable Railway Minister of India, symbolizing innovation and advancement in passenger coach development.",
    image: "/image/major-project-images/image5.jpg"
  },
  { 
    title: "Rapid Prototype of Pressure Regulating System for Air Liquide India", 
    description: "A detailed working model of the Pressure Regulating System, Bulk Storage Installation, and Air Liquide Healthcare setup was developed to demonstrate Cryogenic Liquid Oxygen installations in industries and hospitals. Executed for Air Liquide India, the project visually represented critical safety and process features. Remarkably, the complete prototype was delivered in a record time of just 10 days, reflecting technical agility and execution excellence.",
    image: "/image/major-project-images/image6.jpg"
  },
  { 
    title: "Innovative Orthopedic Screw Developed via Metal 3D Printing", 
    description: "AKGEC engineered an advanced orthopedic screw featuring a variable thread pitch and a lightweight internal lattice structure. Manufactured using the Metallic SLM 280 3D printer, the design enhances strength while reducing material usage. This breakthrough showcases the potential of metal additive manufacturing in next-generation biomedical implants.",
    image: "/image/major-project-images/image7.png"
  },
  { 
    title: "Lightweight Ergonomic Surgical Handle Designed for AIIMS New Delhi", 
    description: "AKGEC developed a customized surgical handle featuring improved ergonomics and reduced weight to enhance surgeon comfort and precision. Fabricated using Selective Laser Melting (SLM) metal 3D printing technology, the product reflects advanced biomedical engineering capability. The solution was designed and produced for AIIMS New Delhi, supporting healthcare innovation through additive manufacturing.",
    image: "/image/major-project-images/image8.png"
  },
  { 
    title: "Consistent Tender Participation and Delivery for Indian Railways", 
    description: "With a strong presence on the Indian Railways E-Procurement System (IREPS), we have participated in over 300 tenders and successfully delivered more than 40 job work orders. Our projects span multiple Railway divisions, including North Western, Eastern, and Southern Railways. This achievement reflects our reliability, capability, and sustained execution excellence in railway sector engagements.",
    image: "/image/major-project-images/image9.jpg"
  }
];

export default function MajorProjectsContent() {
  return (
    <div className="">
      <h2 className="text-3xl font-novaBold text-indigo-950 mb-8 border-b pb-4">Major Projects @ ASF</h2>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 last:border-0">
            <div className="w-full md:w-1/3 aspect-video bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 relative group">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm italic">Project Image {index + 1}</div>
              )}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-novaBold text-indigo-900 mb-4">{index + 1}. {project.title}</h3>
              <p className="text-gray-600 leading-relaxed text-justify font-novaReg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
