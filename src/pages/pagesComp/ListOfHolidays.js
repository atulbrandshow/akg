"use client";

import { useState, useEffect } from "react";

const ListOfHolidays = ({ holidays = [], activeTab, itemsPerPage = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

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
            <h1 className="text-[42px] max-lg:text-3xl max-sm:text-2xl max-sm:font-novaSemi font-novaReg mb-2.5 leading-none">
                List of {activeTab === "gazetted" ? "Gazetted" : "Restricted"} Holidays
            </h1>
            <div className="mb-6">
                <table className="min-w-full my-4 bg-white rounded-lg">
                    <thead className="bg-indigo-950 text-white h-[44px] rounded-t-lg font-novaReg uppercase text-xs lg:text-sm">
                        <tr className="border-b">
                            <th className="px-4 max-[350px]:px-2 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                S.No.
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 border-r border-white border-opacity-10 text-left">
                                Festival
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 text-left">
                                Date
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 border-l border-white border-opacity-10 text-left rounded-tr-lg">
                                Day
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border-t-2 rounded-lg font-novaSemi text-xs sm:text-sm sm:font-novaReg">
                        {currentEntries?.map((entry) => (
                            <tr
                                key={entry.SNo}
                                className={`bg-indigo-950 text-white`}
                            >
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-white border-opacity-20">
                                    {entry.SNo}
                                </td>
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-l border-white border-opacity-20">
                                    {entry.Festival}
                                </td>
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-l border-white border-opacity-20">
                                    {entry.Date}
                                </td>
                                <td className="py-4 text-center px-4 max-[350px]:px-2 border-b border-l border-white border-opacity-20">
                                    {entry.Day}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between max-sm:flex-col">
                    <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                        Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
                    </div>
                    <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                        <button
                            className={`text-white px-4 py-2.5 rounded ${currentPage === 1 ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)]?.map((_, pageIndex) => (
                            <button
                                key={pageIndex + 1}
                                className={`text-white px-4 py-2.5 rounded ${currentPage === pageIndex + 1 ? 'bg-primary' : ''}`}
                                onClick={() => handlePageChange(pageIndex + 1)}
                            >
                                {pageIndex + 1}
                            </button>
                        ))}
                        <button
                            className={`text-white px-3 py-2 rounded ${currentPage === totalPages ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListOfHolidays;