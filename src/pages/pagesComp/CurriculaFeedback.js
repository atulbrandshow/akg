"use client";

import { useState } from "react"

const curriculaFeedback = {
    "2021-22": [
        { srNo: 1, programCode: "AKGU0201", programName: "Master of Science (Data Science)", feedbackAnalysis: "Positive", feedbackATR: "Implemented improvements." },
        { srNo: 2, programCode: "AKGU0202", programName: "Master of Arts (Psychology)", feedbackAnalysis: "Needs improvement", feedbackATR: "More practical sessions." },
        { srNo: 3, programCode: "AKGU0203", programName: "Bachelor of Science (Biotechnology)", feedbackAnalysis: "Positive", feedbackATR: "Very well received." },
        { srNo: 4, programCode: "AKGU0204", programName: "Bachelor of Arts (English)", feedbackAnalysis: "Positive", feedbackATR: "Engaging curriculum." },
        { srNo: 5, programCode: "AKGU0205", programName: "Master of Business Administration", feedbackAnalysis: "Needs improvement", feedbackATR: "Update case studies." },
        { srNo: 6, programCode: "AKGU0206", programName: "Bachelor of Technology (Computer Science)", feedbackAnalysis: "Mixed", feedbackATR: "More industry exposure needed." },
        { srNo: 7, programCode: "AKGU0207", programName: "Bachelor of Commerce (Honours)", feedbackAnalysis: "Positive", feedbackATR: "Comprehensive curriculum." },
        { srNo: 8, programCode: "AKGU0208", programName: "Master of Science (Information Technology)", feedbackAnalysis: "Positive", feedbackATR: "Well-structured courses." },
        { srNo: 9, programCode: "AKGU0209", programName: "Bachelor of Fine Arts", feedbackAnalysis: "Needs improvement", feedbackATR: "More workshops." },
        { srNo: 10, programCode: "AKGU0210", programName: "Master of Arts (History)", feedbackAnalysis: "Positive", feedbackATR: "Detailed content." },
        { srNo: 11, programCode: "AKGU0211", programName: "Bachelor of Science (Environmental Science)", feedbackAnalysis: "Positive", feedbackATR: "Great practical sessions." },
        { srNo: 12, programCode: "AKGU0212", programName: "Master of Science (Mathematics)", feedbackAnalysis: "Mixed", feedbackATR: "Revise some topics." },
        { srNo: 13, programCode: "AKGU0213", programName: "Bachelor of Technology (Electronics)", feedbackAnalysis: "Positive", feedbackATR: "Very applicable knowledge." },
        { srNo: 14, programCode: "AKGU0214", programName: "Master of Arts (Sociology)", feedbackAnalysis: "Positive", feedbackATR: "Rich in content." },
        { srNo: 15, programCode: "AKGU0215", programName: "Bachelor of Science (Physics)", feedbackAnalysis: "Needs improvement", feedbackATR: "More lab work." },
        { srNo: 16, programCode: "AKGU0216", programName: "Master of Technology (Cybersecurity)", feedbackAnalysis: "Positive", feedbackATR: "Cutting-edge curriculum." },
        { srNo: 17, programCode: "AKGU0217", programName: "Bachelor of Business Administration", feedbackAnalysis: "Mixed", feedbackATR: "Enhance practical exposure." },
        { srNo: 18, programCode: "AKGU0218", programName: "Master of Science (Physics)", feedbackAnalysis: "Positive", feedbackATR: "Good theoretical knowledge." },
        { srNo: 19, programCode: "AKGU0219", programName: "Bachelor of Design (Fashion)", feedbackAnalysis: "Needs improvement", feedbackATR: "More field trips." },
        { srNo: 20, programCode: "AKGU0220", programName: "Master of Science (Biochemistry)", feedbackAnalysis: "Positive", feedbackATR: "Well-reviewed." }
    ],
    "2020-21": [
        { srNo: 1, schoolName: "School of Science", departmentName: "Biology", programCode: "AKGU1101", programName: "Bachelor of Science (Biochemistry)", feedbackAnalysis: "Positive", feedbackATR: "Excellent lab facilities." },
        { srNo: 2, schoolName: "School of Arts", departmentName: "Literature", programCode: "AKGU1102", programName: "Master of Arts (Literature)", feedbackAnalysis: "Needs improvement", feedbackATR: "More diverse readings." },
        { srNo: 3, schoolName: "School of Engineering", departmentName: "Mechanical", programCode: "AKGU1103", programName: "Bachelor of Engineering (Mechanical)", feedbackAnalysis: "Mixed", feedbackATR: "More hands-on projects." },
        { srNo: 4, schoolName: "School of Business", departmentName: "Management", programCode: "AKGU1104", programName: "Master of Business Administration", feedbackAnalysis: "Positive", feedbackATR: "Very relevant content." },
        { srNo: 5, schoolName: "School of Technology", departmentName: "IT", programCode: "AKGU1105", programName: "Bachelor of Technology (IT)", feedbackAnalysis: "Positive", feedbackATR: "Strong technical base." },
        { srNo: 6, schoolName: "School of Arts", departmentName: "Performing Arts", programCode: "AKGU1106", programName: "Bachelor of Fine Arts", feedbackAnalysis: "Needs improvement", feedbackATR: "More workshops." },
        { srNo: 7, schoolName: "School of Science", departmentName: "Chemistry", programCode: "AKGU1107", programName: "Master of Science (Chemistry)", feedbackAnalysis: "Positive", feedbackATR: "Great faculty." },
        { srNo: 8, schoolName: "School of Engineering", departmentName: "Electrical", programCode: "AKGU1108", programName: "Bachelor of Technology (Electrical)", feedbackAnalysis: "Mixed", feedbackATR: "More practicals." },
        { srNo: 9, schoolName: "School of Arts", departmentName: "Visual Arts", programCode: "AKGU1109", programName: "Master of Fine Arts", feedbackAnalysis: "Positive", feedbackATR: "Highly creative environment." },
        { srNo: 10, schoolName: "School of Science", departmentName: "Mathematics", programCode: "AKGU1110", programName: "Bachelor of Science (Mathematics)", feedbackAnalysis: "Needs improvement", feedbackATR: "Additional resources needed." },
        { srNo: 11, schoolName: "School of Engineering", departmentName: "Civil", programCode: "AKGU1111", programName: "Bachelor of Engineering (Civil)", feedbackAnalysis: "Positive", feedbackATR: "Great real-world applications." },
        { srNo: 12, schoolName: "School of Business", departmentName: "Finance", programCode: "AKGU1112", programName: "Master of Business Administration (Finance)", feedbackAnalysis: "Mixed", feedbackATR: "Incorporate more case studies." },
        { srNo: 13, schoolName: "School of Technology", departmentName: "Software", programCode: "AKGU1113", programName: "Master of Technology (Software)", feedbackAnalysis: "Positive", feedbackATR: "Cutting-edge topics." },
        { srNo: 14, schoolName: "School of Arts", departmentName: "Media", programCode: "AKGU1114", programName: "Bachelor of Arts (Media Studies)", feedbackAnalysis: "Needs improvement", feedbackATR: "Expand practical elements." },
        { srNo: 15, schoolName: "School of Science", departmentName: "Physics", programCode: "AKGU1115", programName: "Master of Science (Physics)", feedbackAnalysis: "Positive", feedbackATR: "In-depth theoretical understanding." },
        { srNo: 16, schoolName: "School of Engineering", departmentName: "Chemical", programCode: "AKGU1116", programName: "Bachelor of Engineering (Chemical)", feedbackAnalysis: "Mixed", feedbackATR: "More focus on safety." },
        { srNo: 17, schoolName: "School of Business", departmentName: "Marketing", programCode: "AKGU1117", programName: "Master of Business Administration (Marketing)", feedbackAnalysis: "Positive", feedbackATR: "Engaging curriculum." },
        { srNo: 18, schoolName: "School of Technology", departmentName: "Network", programCode: "AKGU1118", programName: "Bachelor of Technology (Networking)", feedbackAnalysis: "Positive", feedbackATR: "Strong industry connections." },
        { srNo: 19, schoolName: "School of Arts", departmentName: "Theatre", programCode: "AKGU1119", programName: "Master of Arts (Theatre)", feedbackAnalysis: "Needs improvement", feedbackATR: "More production opportunities." },
        { srNo: 20, schoolName: "School of Science", departmentName: "Statistics", programCode: "AKGU1120", programName: "Bachelor of Science (Statistics)", feedbackAnalysis: "Positive", feedbackATR: "Relevant skills taught." }
    ],
    "2019-20": [
        { srNo: 1, programCode: "AKGU0101", programName: "Master of Science (Clinical Research)", feedbackAnalysis: "Positive", feedbackATR: "Innovative curriculum." },
        { srNo: 2, programCode: "AKGU0102", programName: "Master of Physiotherapy", feedbackAnalysis: "Mixed", feedbackATR: "More clinical hours recommended." },
        { srNo: 3, programCode: "AKGU0103", programName: "Bachelor of Science (Nutrition)", feedbackAnalysis: "Positive", feedbackATR: "Very informative." },
        { srNo: 4, programCode: "AKGU0104", programName: "Bachelor of Technology (Food Technology)", feedbackAnalysis: "Needs improvement", feedbackATR: "More industry visits." },
        { srNo: 5, programCode: "AKGU0105", programName: "Bachelor of Arts (Journalism)", feedbackAnalysis: "Positive", feedbackATR: "Hands-on projects." },
        { srNo: 6, programCode: "AKGU0106", programName: "Master of Arts (Public Relations)", feedbackAnalysis: "Mixed", feedbackATR: "Incorporate more real-life case studies." },
        { srNo: 7, programCode: "AKGU0107", programName: "Master of Science (Computer Science)", feedbackAnalysis: "Positive", feedbackATR: "Updated curriculum." },
        { srNo: 8, programCode: "AKGU0108", programName: "Bachelor of Commerce (General)", feedbackAnalysis: "Needs improvement", feedbackATR: "More practical applications." },
        { srNo: 9, programCode: "AKGU0109", programName: "Bachelor of Business Administration", feedbackAnalysis: "Positive", feedbackATR: "Excellent faculty." },
        { srNo: 10, programCode: "AKGU0110", programName: "Bachelor of Fine Arts (Theatre)", feedbackAnalysis: "Positive", feedbackATR: "Rich curriculum." },
        { srNo: 11, programCode: "AKGU0111", programName: "Master of Science (Physics)", feedbackAnalysis: "Needs improvement", feedbackATR: "More labs needed." },
        { srNo: 12, programCode: "AKGU0112", programName: "Bachelor of Technology (Civil Engineering)", feedbackAnalysis: "Positive", feedbackATR: "Solid foundation." },
        { srNo: 13, programCode: "AKGU0113", programName: "Master of Arts (Fine Arts)", feedbackAnalysis: "Positive", feedbackATR: "Engaging workshops." },
        { srNo: 14, programCode: "AKGU0114", programName: "Bachelor of Science (Environmental Studies)", feedbackAnalysis: "Mixed", feedbackATR: "Field trips necessary." },
        { srNo: 15, programCode: "AKGU0115", programName: "Bachelor of Design (Product)", feedbackAnalysis: "Positive", feedbackATR: "Innovative ideas encouraged." },
        { srNo: 16, programCode: "AKGU0116", programName: "Master of Technology (Information Systems)", feedbackAnalysis: "Positive", feedbackATR: "Relevant content." },
        { srNo: 17, programCode: "AKGU0117", programName: "Bachelor of Arts (Graphic Design)", feedbackAnalysis: "Mixed", feedbackATR: "More industry exposure." },
        { srNo: 18, programCode: "AKGU0118", programName: "Master of Business Administration (HR)", feedbackAnalysis: "Positive", feedbackATR: "Practical HR skills." },
        { srNo: 19, programCode: "AKGU0119", programName: "Bachelor of Commerce (Honours)", feedbackAnalysis: "Needs improvement", feedbackATR: "More guest lectures." },
        { srNo: 20, programCode: "AKGU0120", programName: "Master of Science (Mathematics)", feedbackAnalysis: "Positive", feedbackATR: "Strong theoretical background." }
    ]
};

const CurriculaFeedback = () => {
    const [selectedYear, setSelectedYear] = useState("2021-22")

    const columns = Object.keys(curriculaFeedback[selectedYear][0]);

    return (
        <div className="container mx-auto mb-5">
            <div className="flex gap-3 flex-wrap max-sm:text-sm my-6">
                <button
                    onClick={() => setSelectedYear("2021-22")}
                    className={`px-4 py-2 ${selectedYear === "2021-22" ? 'bg-indigo-950 text-white rounded-md' : 'bg-white text-black border border-gray-300 rounded-md'}`}
                >
                    2021-22
                </button>
                <button
                    onClick={() => setSelectedYear("2020-21")}
                    className={`px-4 py-2 ${selectedYear === "2020-21" ? 'bg-indigo-950 text-white rounded-md' : 'bg-white text-black border border-gray-300 rounded-md'}`}
                >
                    2020-21
                </button>
                <button
                    onClick={() => setSelectedYear("2019-20")}
                    className={`px-4 py-2 ${selectedYear === "2019-20" ? 'bg-indigo-950 text-white rounded-md' : 'bg-white text-black border border-gray-300 rounded-md'}`}
                >
                    2019-20
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map((col) => (
                                <th key={col} className="border p-2 max-sm:text-sm text-left bg-indigo-950 text-white font-novaReg capitalize">
                                    {col === 'curriculu' ? 'Curriculum' : col.replace(/([A-Z])/g, ' $1')}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {curriculaFeedback[selectedYear].map((programme, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {columns.map((col) => (
                                    <td key={col} className="border max-sm:text-sm font-novaReg p-2">
                                        {col === 'curriculu' ? (
                                            <a
                                                href={programme['curriculu']}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                View Curriculum
                                            </a>
                                        ) : (
                                            programme[col]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CurriculaFeedback