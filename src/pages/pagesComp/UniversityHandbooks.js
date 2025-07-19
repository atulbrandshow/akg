import Link from "next/link";

const handbooksData = [
  {
    id: 1,
    title: "Undergraduate Handbook",
    description: "Comprehensive guide for undergraduate students of AKG University.",
    image: "/image/university-handbooks/book-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Postgraduate Handbook",
    description: "Essential information for postgraduate students at AKG University.",
    image: "/image/university-handbooks/book-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Research Handbook",
    description: "Detailed guidelines for research students and scholars at AKG University.",
    image: "/image/university-handbooks/book-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Advanced Handbook",
    description: "Comprehensive research guidelines for scholars at AKG University.",
    image: "/image/university-handbooks/book-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Doctoral Handbook",
    description: "In-depth guide for PhD candidates and researchers at AKG University.",
    image: "/image/university-handbooks/book-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Engineering Handbook",
    description: "Guidelines for engineering students at AKG University.",
    image: "/image/university-handbooks/book-6.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Management Handbook",
    description: "Complete guide for management students at AKG University.",
    image: "/image/university-handbooks/book-7.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "IT Handbook",
    description: "A guide for students pursuing Information Technology at AKG University.",
    image: "/image/university-handbooks/book-8.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Soft Skills Handbook",
    description: "Guidelines on soft skills development at AKG University.",
    image: "/image/university-handbooks/book-9.jpg",
    link: "#",
  },
];


const UniversityHandbooks = () => {

  return (
    <>
      <div className="py-10">
        <h2 className="text-4xl max-lg:text-3xl font-novaReg">University Handbooks</h2>
        <p className="mt-2 font-novaReg leading-5">
          Explore our university handbooks to get comprehensive information and guidelines for your academic journey.
        </p>
        <div className="mt-5 grid max-[420px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {handbooksData.map(({ id, title, description, image, link }) => (
            <div key={id} className="rounded-lg shadow-md p-3 min-h-96 flex flex-col justify-around">
              <img
                src={image}
                alt={title}
                className="mx-auto w-32 rounded-lg shadow-cardShadow border border-gray-200"
              />
              <div className="">
                <h3 className="font-semibold items-center">{title}</h3>
                <p className="text-gray-600 text-sm font-novaReg mt-2">{description}</p>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 w-full bg-blue-900 text-white text-xs py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                    Download Handbook
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UniversityHandbooks;
