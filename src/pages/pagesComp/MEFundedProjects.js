"use client";

import React from 'react';
import { meProject } from '@/Json/FundedProjects';

const MEFundedProjects = () => {
  return (
    <div className="py-10 rounded-lg">
      <h3 className='text-4xl font-novaBold text-center mb-5'>ME Funded Projects</h3>
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
          <tr className="border-b">
            <th className="px-4 py-2 w-[5%] text-left border-r border-white border-opacity-10 rounded-tl-lg">S.No</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Department of Principal Investigator</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Name of the Principal Investigator/Co-investigator</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Year of Award</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Amount Sanctioned (in lakhs)</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Duration of the project</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Name of the Funding Agency</th>
            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">Type (Government/non-Government)</th>
          </tr>
        </thead>

        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
          {meProject.map((entry, index) => (
            <tr
              key={index}
              className={`bg-indigo-950 text-white ${index === meProject.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
            >
              <td className={`p-4 border-b border-white border-opacity-20 ${index === meProject.length - 1 ? 'rounded-bl-lg' : ''}`}>
                {index + 1}
              </td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.departmentPrincipalInvestigator}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.namePrincipalInvestigator}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.yearAward}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.amountSanctionedLakhs}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.projectDuration}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.fundingAgencyName}</td>
              <td className="p-4 border-b border-l border-white border-opacity-20">{entry.fundingType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MEFundedProjects;
