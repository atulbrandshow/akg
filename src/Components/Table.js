"use client";
import { useState } from "react";
import Link from "next/link";

const Table = ({ tableHeadings, heading, paragraph, data }) => {
    const [entries, setEntries] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectChange = (e) => {
        setEntries(parseInt(e.target.value));
        setCurrentPage(1); // Reset to first page whenever entries per page change
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page whenever search term changes
    };

    const filteredCourses = data.filter(course =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastEntry = currentPage * entries;
    const indexOfFirstEntry = indexOfLastEntry - entries;
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
            <h1 className="text-[42px] font-novaReg leading-none mb-4">{heading}</h1>
            <p className="mb-6 text-sm leading-5">{paragraph}</p>

            <div className="flex justify-start max-sm:flex-col">
                <div className="text-sm mb-2 mr-5">
                    <label className="text-gray-700">
                        Show
                        <select
                            name="example_length"
                            aria-controls="example"
                            className="ml-2 mr-2 border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                <div className="text-sm mb-2 mr-5">
                    <label className="text-gray-700">
                        Search:
                        <input
                            type="search"
                            className="ml-2 border-2 border-primary rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-controls="example"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>

            <table className="min-w-full my-4 bg-white border border-gray-300">
                <thead>
                    <tr className="bg-amber-500 border-inherit text-white h-[44px]">
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
                    {currentEntries?.map((course, index) => (
                        <tr key={index} className="bg-blue-800 text-white border-inherit">
                            <td className="py-4 px-4 text-sm border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <Link href={`/course/${course.id}`} passHref className="text-white hover:underline">
                                    {course.courseName}
                                </Link>
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {course.head}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {course.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between max-sm:flex-col">
                <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredCourses.length)} of {filteredCourses.length} entries
                </div>
                <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                    <button
                        className="text-white px-4 py-2.5 cursor-pointer hover:bg-blue-900 hover:rounded-lg"
                        disabled={isPreviousDisabled}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)]?.map((_, pageIndex) => (
                        <button
                            key={pageIndex + 1}
                            className={`text-white px-4 py-2.5 hover:bg-blue-900 rounded ${currentPage === pageIndex + 1 ? 'bg-blue-900' : ''}`}
                            onClick={() => handlePageChange(pageIndex + 1)}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                    <button
                        className="text-white px-3 py-2 rounded hover:bg-blue-900"
                        disabled={isNextDisabled}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
