"use client";
import Link from 'next/link';

const Patent = () => {
    const tableHeadings = ["S.No.", "Department", "Patent"];

    const heading = "AKG University Patents by Department";
    const paragraph = "Ajay Kumar Garg University (AKGU) has made significant strides in innovation and research. The institution has filed multiple patents across various departments, reflecting its commitment to fostering a culture of research and development.";

    const patentData = [
        { sno: 1, department: "Computer Science & Engineering", patents: 42, link: "/cse-patent" },
        { sno: 2, department: "Information Technology", patents: 42, link: "/it-patent" },
        { sno: 3, department: "Electronics & Communication Engineering", patents: 13, link: "/ece-patent" },
        { sno: 4, department: "Electrical & Electronics Engineering", patents: 2, link: "/en-patent" },
        { sno: 5, department: "Mechanical Engineering", patents: 2, link: "/me-patent" },
        { sno: 6, department: "Applied Science & Humanities", patents: 1, link: "/ash-patent" },
    ];

    return (
        <div className="container mx-auto">
            <h1 className="text-[42px] font-novaReg leading-none mb-4">{heading}</h1>
            <p className="mb-6 text-sm leading-5">{paragraph}</p>
            <table className="min-w-full my-4 bg-white border border-gray-300">
                <thead>
                    <tr className="bg-[#363c83] border-inherit text-white h-[44px]">
                        {tableHeadings.map((heading, index) => (
                            <th
                                key={index}
                                className="py-4 px-4 text-left text-sm"
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {patentData.map((item, index) => (
                        <tr key={index} className="bg-indigo-950 text-white border-inherit">
                            <td className="py-4 px-4 text-sm border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.sno}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.department}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <Link href={item.link}>
                                    <span className=" hover:underline cursor-pointer text-blue-300">View More</span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Patent;
