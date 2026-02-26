"use client";

import { useState, useEffect } from "react";

const ListOfHolidays = ({ holidays = [], title = "List of Holidays", itemsPerPage = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [holidays]);

    const totalEntries = holidays?.length || 0;
    const totalPages = Math.ceil(totalEntries / itemsPerPage);

    const indexOfLastEntry = currentPage * itemsPerPage;
    const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
    const currentEntries = holidays?.slice(indexOfFirstEntry, indexOfLastEntry);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl font-novaBold text-brand-blue mb-4 leading-tight">
                {title}
            </h1>
            <div className="mb-6">
                <table className="min-w-full my-4 bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-brand-blue text-white h-[48px] font-novaSemi uppercase text-sm lg:text-base">
                        <tr className="border-b">
                            <th className="px-4 max-[350px]:px-2 py-2 text-left border-r border-white border-opacity-10">
                                S.No.
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 border-r border-white border-opacity-10 text-left">
                                Festival
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 text-left border-r border-white border-opacity-10">
                                Date
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 text-left">
                                Day
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-novaReg text-sm sm:text-base text-gray-800">
                        {currentEntries?.map((entry, index) => (
                            <tr
                                key={entry.SNo}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                            >
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-gray-200 text-center">
                                    {entry.SNo}
                                </td>
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-l border-gray-200">
                                    {entry.Festival}
                                </td>
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-l border-gray-200">
                                    {entry.Date}
                                </td>
                                <td className="py-4 text-center px-4 max-[350px]:px-2 border-b border-l border-gray-200">
                                    {entry.Day}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {totalEntries > itemsPerPage && (
                    <div className="flex justify-between max-sm:flex-col text-base">
                        <div className="text-base mb-2.5 mr-5 pt-3 text-gray-700">
                            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
                        </div>
                        <div className="text-base w-fit bg-brand-blue rounded-lg flex items-center">
                            <button
                                className={`text-white px-4 py-2.5 rounded ${currentPage === 1 ? 'bg-brand-blue cursor-not-allowed' : ''}`}
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Previous
                            </button>
                            {[...Array(totalPages)]?.map((_, pageIndex) => (
                                <button
                                    key={pageIndex + 1}
                                    className={`text-white px-4 py-2.5 rounded ${currentPage === pageIndex + 1 ? 'bg-[#3C567B]' : ''}`}
                                    onClick={() => handlePageChange(pageIndex + 1)}
                                >
                                    {pageIndex + 1}
                                </button>
                            ))}
                            <button
                                className={`text-white px-3 py-2 rounded ${currentPage === totalPages ? 'bg-brand-blue cursor-not-allowed' : ''}`}
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListOfHolidays;