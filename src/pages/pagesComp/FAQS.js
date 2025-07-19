"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = {
    generalInformation: [
        {
            question: "When was AKG University Established?",
            answer: "AKG University was established in 2000 and has since become a prominent educational institution in Uttar Pradesh."
        },
        {
            question: "Is AKG University recognized by any educational bodies?",
            answer: "Yes, AKG University is recognized by the University Grants Commission (UGC) and other relevant accrediting bodies."
        },
        {
            question: "What programs are offered at AKG University?",
            answer: "AKG University offers a variety of programs across multiple disciplines, including engineering, management, sciences, arts, and humanities."
        },
        {
            question: "What are the campus facilities available at AKG University?",
            answer: "AKG University offers various facilities, including modern classrooms, laboratories, libraries, sports complexes, and hostels."
        },
        {
            question: "How can I contact the university administration?",
            answer: "You can contact the university administration through the official university website."
        },
        {
            question: "What are the library facilities like?",
            answer: "The university library is well-equipped with a vast collection of books, journals, and online resources."
        },
        {
            question: "What is the student-to-faculty ratio at AKG University?",
            answer: "The student-to-faculty ratio is designed to ensure personalized attention for students."
        },
        {
            question: "Are there any international collaborations for student exchange?",
            answer: "Yes, AKG University has established collaborations with various international institutions."
        },
        {
            question: "What is the university's commitment to sustainability?",
            answer: "AKG University is committed to sustainability through initiatives such as green campus practices."
        },
        {
            question: "How does AKG University support student mental health?",
            answer: "The university provides counseling services and wellness programs."
        },
    ],
    admissionProcess: [
        {
            question: "What are the eligibility criteria for admission?",
            answer: "Eligibility criteria for admission vary by program."
        },
        {
            question: "How can I apply for admission to AKG University?",
            answer: "To apply for admission, visit the official university website and complete the online application form."
        },
        {
            question: "What is the admission process at AKG University?",
            answer: "The admission process typically involves an online application and submission of required documents."
        },
        {
            question: "When does the admission process start?",
            answer: "The admission process usually starts in April and continues until the end of July."
        },
        {
            question: "Is there a separate entrance exam for specific courses?",
            answer: "Yes, certain courses may require specific entrance exams."
        },
        {
            question: "Can I apply for multiple programs at once?",
            answer: "Yes, students can apply for multiple programs."
        },
        {
            question: "Are there any interviews as part of the admission process?",
            answer: "Some programs may require personal interviews."
        },
        {
            question: "How will I know if my application is successful?",
            answer: "Applicants will receive notifications regarding their admission status through email."
        },
        {
            question: "What documents are required for admission?",
            answer: "Required documents typically include academic transcripts and identification proof."
        },
        {
            question: "Is there an application fee for admission?",
            answer: "Yes, there is usually an application fee."
        },
    ],
    feesAndScholarships: [
        {
            question: "What is the fee structure at AKG University?",
            answer: "The fee structure varies depending on the program and course."
        },
        {
            question: "Are there any scholarships available at AKG University?",
            answer: "Yes, AKG University offers various scholarships based on merit and financial need."
        },
        {
            question: "What payment methods are accepted for tuition fees?",
            answer: "Tuition fees can be paid through bank transfer or online payment portal."
        },
        {
            question: "What are the refund policies for tuition fees?",
            answer: "Refund policies vary depending on the timing of withdrawal from the program."
        },
        {
            question: "Is there an option for installment payments?",
            answer: "Yes, installment payment options may be available."
        },
        {
            question: "Are there any additional fees I should be aware of?",
            answer: "Additional fees may apply for specific courses."
        },
        {
            question: "How can I apply for a scholarship?",
            answer: "To apply for scholarships, visit the scholarship section of the official website."
        },
        {
            question: "Are there any merit-based scholarships available?",
            answer: "Yes, AKG University provides merit-based scholarships for outstanding academic performance."
        },
        {
            question: "Is financial aid available for students?",
            answer: "Yes, the university offers financial aid options for students facing financial difficulties."
        },
        {
            question: "What should I do if I have trouble paying my fees?",
            answer: "If you face difficulties, contact the finance office for assistance."
        },
    ],
    studentLifeAndServices: [
        {
            question: "Does AKG University provide medical insurance for students?",
            answer: "Yes, AKG University offers medical insurance coverage for its students."
        },
        {
            question: "What health and wellness services are provided?",
            answer: "The university has a health center that offers basic medical services."
        },
        {
            question: "What extracurricular activities are available at AKG University?",
            answer: "AKG University encourages students to participate in various extracurricular activities."
        },
        {
            question: "How can I give feedback or suggestions to the university?",
            answer: "Students can submit feedback through the online feedback portal available on the university website."
        },
        {
            question: "Are there opportunities for internships provided by the university?",
            answer: "Yes, AKG University has a dedicated placement cell for internships."
        },
        {
            question: "How can I access the university library?",
            answer: "The university library is open to all students with a university ID card."
        },
        {
            question: "What is the student dress code at AKG University?",
            answer: "Students are encouraged to dress appropriately and professionally."
        },
        {
            question: "How can I contact the faculty for academic queries?",
            answer: "Students can contact their faculty members via university email."
        },
        {
            question: "What support services are available for students with disabilities?",
            answer: "AKG University provides support services for students with disabilities."
        },
        {
            question: "Are there student organizations or clubs to join?",
            answer: "Yes, AKG University has various student organizations and clubs."
        },
    ]
};

const FAQS = () => {
    const [openIndices, setOpenIndices] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSection, setCurrentSection] = useState("generalInformation");

    const toggleFAQ = (index) => {
        if (openIndices.includes(index)) {
            setActiveIndex(null);
            setOpenIndices((prev) => prev.filter((i) => i !== index));
        } else {
            setActiveIndex(index);
            setOpenIndices((prev) => [...prev, index]);
        }
    };

    const handleSectionChange = (section) => {
        setCurrentSection(section);
        setOpenIndices([]);
        setActiveIndex(0);
    };

    return (
        <div className="bg-white p-2">
            <h2 className="text-2xl font-novaBold mb-6 max-sm:text-xl">
                Frequently Asked Questions
            </h2>

            <div className="flex gap-2 mb-6 w-full max-md:grid max-md:grid-cols-2 max-sm:grid max-sm:grid-cols-2 max-sm:gap-1.5 max-sm:mb-3">
                {Object.keys(faqItems).map((section) => (
                <button
                    key={section}
                    onClick={() => handleSectionChange(section)}
                    className={`px-4 py-2 transition-colors duration-200 rounded-md max-md:text-sm max-sm:text-sm max-sm:px-1.5 max-xl:px-3 max-lg:px-2.5 ${
                    currentSection === section
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black border border-blue-400"
                    }`}
                >
                    {section.charAt(0).toUpperCase() +
                    section.slice(1).replace(/([A-Z])/g, " $1")}
                </button>
                ))}
            </div>

            <div className="w-full text-black">
                {faqItems[currentSection].map((item, index) => (
                <div key={index} className="mb-4 border-b border-gray-300">
                    <a
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full cursor-pointer p-4 max-sm:p-2"
                    aria-expanded={openIndices.includes(index)}
                    >
                    <span
                        className={`font-novaSemi ${
                        openIndices.includes(index) ? "text-[#00BFE7]" : "text-black"
                        } max-sm:text-sm`}
                    >
                        {item.question}
                    </span>
                    {openIndices.includes(index) ? (
                        <ChevronUp className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                    ) : (
                        <ChevronDown className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                    )}
                    </a>
                    {openIndices.includes(index) && (
                    <div className="ml-5 px-3 max-sm:ml-2 max-sm:px-2">
                        <p className="text-sm mb-2">{item.answer}</p>
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>
    );
};

export default FAQS;
