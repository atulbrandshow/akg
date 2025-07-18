"use client";

import React, { useState } from 'react';
import { mcaResearchPapers } from '@/Json/ConferencePapers';

const MCAConferencePapers = () => {
  const [entries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastEntry = currentPage * entries;
  const indexOfFirstEntry = indexOfLastEntry - entries;
  const currentEntries = mcaResearchPapers.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(mcaResearchPapers.length / entries);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages || totalPages === 0;

  return (
    <div className="py-10 rounded-lg">
      <h3 className='text-4xl font-novaBold text-center mb-5'>MCA Conference Papers</h3>
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
          <tr className="border-b">
            <th className="px-4 py-2 w-[5%] text-left border-r border-white border-opacity-10 rounded-tl-lg">S.No</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Author(s)</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Title of the paper</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Name of the conference</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Year of publication</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">ISBN/ISSN number of the proceeding/DOI</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Name of the publisher</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Scopus / Non-Scopus</th>
          </tr>
        </thead>

        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
          {currentEntries.map((entry, index) => (
            <tr
              key={entry.id}
              className={`bg-indigo-950 text-white ${index === currentEntries.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
            >
              <td className={`p-4 border-b border-white border-opacity-20 ${index === currentEntries.length - 1 ? 'rounded-bl-lg' : ''}`}>
                {indexOfFirstEntry + index + 1}
              </td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.authors.join(',')}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.paperTitle}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.conferenceName}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.publicationYear}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.isbnIssn}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.publisherName}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.scopusStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between max-sm:flex-col mt-5">
        <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, mcaResearchPapers.length)} of {mcaResearchPapers.length} entries
        </div>
        <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
          <button
            className="text-white px-4 py-2.5 cursor-pointer hover:bg-blue-900 hover:rounded-lg"
            disabled={isPreviousDisabled}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, pageIndex) => (
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

export default MCAConferencePapers;
