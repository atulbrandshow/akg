"use client";
import { useState } from "react";
import Link from "next/link";

const Table = ({ tableHeadings, heading, paragraph, data, showPagination = true, primaryColor = "#3c5686", secondaryColor = "#fecc00", headerTextColor = "white" }) => {
    const [entries, setEntries] = useState(showPagination ? 10 : data.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSelectChange = (e) => {
        setEntries(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredCourses = data.filter((course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastEntry = showPagination ? currentPage * entries : filteredCourses.length;
    const indexOfFirstEntry = showPagination ? indexOfLastEntry - entries : 0;
    const currentEntries = filteredCourses.slice(indexOfFirstEntry, indexOfLastEntry);

    const totalPages = Math.ceil(filteredCourses.length / entries);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages || totalPages === 0;

    return (
        <div className="container mx-auto">
            <h1 className="text-[42px] font-novaReg leading-none mb-4" style={{ color: primaryColor }}>{heading}</h1>
            <p className="mb-6 text-lg md:text-xl leading-relaxed">{paragraph}</p>

            <div className="flex justify-between items-center max-sm:flex-col mb-4">
                <div className="flex items-center">
                    {showPagination && (
                        <div className="text-sm mr-5">
                            <label className="text-gray-700">
                                Show
                                <select
                                    name="example_length"
                                    className="ml-2 mr-2 border border-gray-300 rounded p-1 focus:outline-none focus:ring-2"
                                    style={{ focusRingColor: primaryColor }}
                                    value={entries}
                                    onChange={handleSelectChange}
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                entries
                            </label>
                        </div>
                    )}
                </div>

                <div className="text-sm">
                    <label className="text-gray-700">
                        Search:
                        <input
                            type="search"
                            className="ml-2 border-2 rounded-lg p-1 focus:outline-none focus:ring-2"
                            style={{ borderColor: primaryColor, focusRingColor: primaryColor }}
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>

            <table className="min-w-full my-4 bg-white border" style={{ borderColor: primaryColor }}>
                <thead>
                    <tr className="border-inherit h-[44px]" style={{ backgroundColor: secondaryColor, color: headerTextColor }}>
                        {tableHeadings.map((heading, index) => (
                            <th key={index} className="py-4 px-4 text-left text-base uppercase tracking-wider font-novaBold whitespace-nowrap">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentEntries?.map((course, index) => (
                        <tr key={index} className="text-white border-inherit" style={{ backgroundColor: primaryColor }}>
                            <td className="py-4 px-4 text-base border-b" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
                                <Link href={`/course/${course.id}`} passHref className="text-white hover:underline font-novaSemi">
                                    {course.courseName}
                                </Link>
                            </td>
                            <td className="py-4 px-4 text-base border-b border-l" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
                                {course.head}
                            </td>
                            <td className="py-4 px-4 text-base border-b border-l whitespace-pre-line" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
                                {course.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPagination && (
                <div className="flex justify-between items-center max-sm:flex-col mt-4">
                    <div className="text-sm text-gray-700">
                        Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredCourses.length)} of {filteredCourses.length} entries
                    </div>
                    <div className="text-sm w-fit rounded-lg flex items-center overflow-hidden border" style={{ borderColor: primaryColor }}>
                        <button
                            className="text-white px-4 py-2.5 disabled:opacity-50 transition-colors"
                            style={{ backgroundColor: primaryColor }}
                            disabled={isPreviousDisabled}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                        <div className="flex">
                            {[...Array(totalPages)]?.map((_, pageIndex) => (
                                <button
                                    key={pageIndex + 1}
                                    className={`px-4 py-2.5 transition-colors ${currentPage === pageIndex + 1 ? "text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                                    style={{ backgroundColor: currentPage === pageIndex + 1 ? primaryColor : "" }}
                                    onClick={() => handlePageChange(pageIndex + 1)}
                                >
                                    {pageIndex + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            className="text-white px-4 py-2.5 disabled:opacity-50 transition-colors"
                            style={{ backgroundColor: primaryColor }}
                            disabled={isNextDisabled}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;
