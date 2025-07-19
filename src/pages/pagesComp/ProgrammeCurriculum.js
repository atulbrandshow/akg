"use client";

import { useState } from "react"

const programmesData = {
    "2021-22": [
        { srNo: 1, programCode: "AKGU0101", programName: "Master of Science (Clinical Research)", curriculu: "http://example.com/2021-22/AKGU0101.pdf" },
        { srNo: 2, programCode: "AKGU0112", programName: "Master of Physiotherapy", curriculu: "http://example.com/2021-22/AKGU0112.pdf" },
        { srNo: 3, programCode: "AKGU0203", programName: "Bachelor of Science (Nursing)", curriculu: "http://example.com/2021-22/AKGU0203.pdf" },
        { srNo: 4, programCode: "AKGU0304", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2021-22/AKGU0304.pdf" },
        { srNo: 5, programCode: "AKGU0405", programName: "Bachelor of Dental Surgery", curriculu: "http://example.com/2021-22/AKGU0405.pdf" },
        { srNo: 6, programCode: "AKGU0506", programName: "Master of Dental Surgery", curriculu: "http://example.com/2021-22/AKGU0506.pdf" },
        { srNo: 7, programCode: "AKGU0607", programName: "Bachelor of Pharmacy", curriculu: "http://example.com/2021-22/AKGU0607.pdf" },
        { srNo: 8, programCode: "AKGU0708", programName: "Master of Pharmacy", curriculu: "http://example.com/2021-22/AKGU0708.pdf" },
        { srNo: 9, programCode: "AKGU0809", programName: "Bachelor of Science (Biotechnology)", curriculu: "http://example.com/2021-22/AKGU0809.pdf" },
        { srNo: 10, programCode: "AKGU0910", programName: "Master of Science (Biotechnology)", curriculu: "http://example.com/2021-22/AKGU0910.pdf" },
        { srNo: 11, programCode: "AKGU1011", programName: "Bachelor of Optometry", curriculu: "http://example.com/2021-22/AKGU1011.pdf" },
        { srNo: 12, programCode: "AKGU1112", programName: "Master of Optometry", curriculu: "http://example.com/2021-22/AKGU1112.pdf" },
        { srNo: 13, programCode: "AKGU1213", programName: "Bachelor of Audiology", curriculu: "http://example.com/2021-22/AKGU1213.pdf" },
        { srNo: 14, programCode: "AKGU1314", programName: "Master of Audiology", curriculu: "http://example.com/2021-22/AKGU1314.pdf" },
        { srNo: 15, programCode: "AKGU1415", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2021-22/AKGU1415.pdf" },
        { srNo: 16, programCode: "AKGU1516", programName: "Bachelor of Radiology", curriculu: "http://example.com/2021-22/AKGU1516.pdf" },
        { srNo: 17, programCode: "AKGU1617", programName: "Master of Radiology", curriculu: "http://example.com/2021-22/AKGU1617.pdf" },
        { srNo: 18, programCode: "AKGU1718", programName: "Bachelor of Medical Laboratory Technology", curriculu: "http://example.com/2021-22/AKGU1718.pdf" },
        { srNo: 19, programCode: "AKGU1819", programName: "Master of Medical Laboratory Technology", curriculu: "http://example.com/2021-22/AKGU1819.pdf" },
        { srNo: 20, programCode: "AKGU1920", programName: "Master of Public Health", curriculu: "http://example.com/2021-22/AKGU1920.pdf" },
    ],
    "2020-21": [
        { srNo: 1, programCode: "AKGU0101", departmentName: "CS", programName: "Science (Clinical Research)", curriculu: "http://example.com/2020-21/AKGU0101.pdf" },
        { srNo: 2, programCode: "AKGU0112", departmentName: "PD", programName: "Master of Physiotherapy", curriculu: "http://example.com/2020-21/AKGU0112.pdf" },
        { srNo: 3, programCode: "AKGU0203", departmentName: "CS", programName: "Bachelor of Science (Nursing)", curriculu: "http://example.com/2020-21/AKGU0203.pdf" },
        { srNo: 4, programCode: "AKGU0304", departmentName: "PD", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2020-21/AKGU0304.pdf" },
        { srNo: 5, programCode: "AKGU0405", departmentName: "CS", programName: "Bachelor of Dental Surgery", curriculu: "http://example.com/2020-21/AKGU0405.pdf" },
        { srNo: 6, programCode: "AKGU0506", departmentName: "PD", programName: "Master of Dental Surgery", curriculu: "http://example.com/2020-21/AKGU0506.pdf" },
        { srNo: 7, programCode: "AKGU0607", departmentName: "CS", programName: "Bachelor of Pharmacy", curriculu: "http://example.com/2020-21/AKGU0607.pdf" },
        { srNo: 8, programCode: "AKGU0708", departmentName: "PD", programName: "Master of Pharmacy", curriculu: "http://example.com/2020-21/AKGU0708.pdf" },
        { srNo: 9, programCode: "AKGU0809", departmentName: "CS", programName: "Bachelor of Science (Biotechnology)", curriculu: "http://example.com/2020-21/AKGU0809.pdf" },
        { srNo: 10, programCode: "AKGU0910", departmentName: "PD", programName: "Master of Science (Biotechnology)", curriculu: "http://example.com/2020-21/AKGU0910.pdf" },
        { srNo: 11, programCode: "AKGU1011", departmentName: "CS", programName: "Bachelor of Optometry", curriculu: "http://example.com/2020-21/AKGU1011.pdf" },
        { srNo: 12, programCode: "AKGU1112", departmentName: "PD", programName: "Master of Optometry", curriculu: "http://example.com/2020-21/AKGU1112.pdf" },
        { srNo: 13, programCode: "AKGU1213", departmentName: "CS", programName: "Bachelor of Audiology", curriculu: "http://example.com/2020-21/AKGU1213.pdf" },
        { srNo: 14, programCode: "AKGU1314", departmentName: "PD", programName: "Master of Audiology", curriculu: "http://example.com/2020-21/AKGU1314.pdf" },
        { srNo: 15, programCode: "AKGU1415", departmentName: "CS", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2020-21/AKGU1415.pdf" },
        { srNo: 16, programCode: "AKGU1516", departmentName: "PD", programName: "Bachelor of Radiology", curriculu: "http://example.com/2020-21/AKGU1516.pdf" },
        { srNo: 17, programCode: "AKGU1617", departmentName: "CS", programName: "Master of Radiology", curriculu: "http://example.com/2020-21/AKGU1617.pdf" },
        { srNo: 18, programCode: "AKGU1718", departmentName: "PD", programName: "Bachelor of Medical Laboratory Technology", curriculu: "http://example.com/2020-21/AKGU1718.pdf" },
        { srNo: 19, programCode: "AKGU1819", departmentName: "CS", programName: "Master of Medical Laboratory Technology", curriculu: "http://example.com/2020-21/AKGU1819.pdf" },
        { srNo: 20, programCode: "AKGU1920", departmentName: "PD", programName: "Master of Public Health", curriculu: "http://example.com/2020-21/AKGU1920.pdf" },
    ],
    "2019-20": [
        { srNo: 1, programCode: "AKGU0101", programName: "(Clinical Research)", curriculu: "http://example.com/2019-20/AKGU0101.pdf" },
        { srNo: 2, programCode: "AKGU0112", programName: "Master of Physiotherapy", curriculu: "http://example.com/2019-20/AKGU0112.pdf" },
        { srNo: 3, programCode: "AKGU0203", programName: "Bachelor of Science (Nursing)", curriculu: "http://example.com/2019-20/AKGU0203.pdf" },
        { srNo: 4, programCode: "AKGU0304", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2019-20/AKGU0304.pdf" },
        { srNo: 5, programCode: "AKGU0405", programName: "Bachelor of Dental Surgery", curriculu: "http://example.com/2019-20/AKGU0405.pdf" },
        { srNo: 6, programCode: "AKGU0506", programName: "Master of Dental Surgery", curriculu: "http://example.com/2019-20/AKGU0506.pdf" },
        { srNo: 7, programCode: "AKGU0607", programName: "Bachelor of Pharmacy", curriculu: "http://example.com/2019-20/AKGU0607.pdf" },
        { srNo: 8, programCode: "AKGU0708", programName: "Master of Pharmacy", curriculu: "http://example.com/2019-20/AKGU0708.pdf" },
        { srNo: 9, programCode: "AKGU0809", programName: "Bachelor of Science (Biotechnology)", curriculu: "http://example.com/2019-20/AKGU0809.pdf" },
        { srNo: 10, programCode: "AKGU0910", programName: "Master of Science (Biotechnology)", curriculu: "http://example.com/2019-20/AKGU0910.pdf" },
        { srNo: 11, programCode: "AKGU1011", programName: "Bachelor of Optometry", curriculu: "http://example.com/2019-20/AKGU1011.pdf" },
        { srNo: 12, programCode: "AKGU1112", programName: "Master of Optometry", curriculu: "http://example.com/2019-20/AKGU1112.pdf" },
        { srNo: 13, programCode: "AKGU1213", programName: "Bachelor of Audiology", curriculu: "http://example.com/2019-20/AKGU1213.pdf" },
        { srNo: 14, programCode: "AKGU1314", programName: "Master of Audiology", curriculu: "http://example.com/2019-20/AKGU1314.pdf" },
        { srNo: 15, programCode: "AKGU1415", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2019-20/AKGU1415.pdf" },
        { srNo: 16, programCode: "AKGU1516", programName: "Bachelor of Radiology", curriculu: "http://example.com/2019-20/AKGU1516.pdf" },
        { srNo: 17, programCode: "AKGU1617", programName: "Master of Radiology", curriculu: "http://example.com/2019-20/AKGU1617.pdf" },
        { srNo: 18, programCode: "AKGU1718", programName: "Bachelor of Medical Laboratory Technology", curriculu: "http://example.com/2019-20/AKGU1718.pdf" },
        { srNo: 19, programCode: "AKGU1819", programName: "Master of Medical Laboratory Technology", curriculu: "http://example.com/2019-20/AKGU1819.pdf" },
        { srNo: 20, programCode: "AKGU1920", programName: "Master of Public Health", curriculu: "http://example.com/2019-20/AKGU1920.pdf" },
    ],
};


const ProgrammeCurriculum = () => {
    const [selectedYear, setSelectedYear] = useState("2021-22")

    const columns = Object.keys(programmesData[selectedYear][0]);

    return (
        <div className="container mx-auto mb-5">
            <div className="flex gap-3 flex-wrap max-sm:text-sm my-6">
                <button
                    onClick={() => setSelectedYear("2021-22")}
                    className={`px-4 py-2 ${selectedYear === "2021-22" ? 'bg-indigo-950 text-white rounded-md' : 'bg-white text-black border border-gray-300 rounded-md'}`}
                >
                    Programme Curriculum 2021-22
                </button>
                <button
                    onClick={() => setSelectedYear("2020-21")}
                    className={`px-4 py-2 ${selectedYear === "2020-21" ? 'bg-indigo-950 text-white rounded-md' : 'bg-white text-black border border-gray-300 rounded-md'}`}
                >
                    Programme Curriculum 2020-21
                </button>
                <button
                    onClick={() => setSelectedYear("2019-20")}
                    className={`px-4 py-2 ${selectedYear === "2019-20" ? 'bg-indigo-950 text-white rounded-md' : 'bg-white text-black border border-gray-300 rounded-md'}`}
                >
                    Programme Curriculum 2019-20
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map((col) => (
                                <th key={col} className="border p-2 max-[350px]:p-1 text-left max-[350px]:text-center bg-indigo-950 text-white font-novaReg max-sm:text-sm capitalize">
                                    {col === 'curriculu' ? 'Curriculum' : col.replace(/([A-Z])/g, ' $1')}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {programmesData[selectedYear].map((programme, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {columns.map((col) => (
                                    <td key={col} className="border font-novaReg max-[350px]:text-sm p-2 max-[350px]:p-1">
                                        {col === 'curriculu' ? (
                                            <a
                                                href={programme['curriculu']}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                View
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

export default ProgrammeCurriculum