"use client";

import React from 'react';

const complaintsCommittee = [
    {
        name: "Dr. Shiwani Singhal, Associate Professor, ASH",
        position: "Chair Person"
    },
    {
        name: "Prof. I.P. Sharma, Professor, ME",
        position: "Member"
    },
    {
        name: "Dr. Anu Chaudhary, Professor, IT",
        position: "Member"
    },
    {
        name: "Dr. Vani Bhargava, Associate Professor, EN",
        position: "Member"
    },
    {
        name: "Ms. Neelam Chhiber, HR Manager",
        position: "Member"
    },
    {
        name: "Mr. Vishal Goel, CPO",
        position: "Member"
    },
    {
        name: "Ms. Anvesha Pandey, Student (3rd Year, EN)",
        position: "Member"
    },
    {
        name: "Ms. Aditi Rai, Student (3rd Year, EN)",
        position: "Member"
    },
    {
        name: "Ms. Priya Sharma, Student (3rd Year, CSE)",
        position: "Member"
    }
];

const InternalComplaintsCommittee = () => {
    return (
        <div className=''>
            <div className='text-center'>
                <h1 className="text-4xl font-novaReg p-3 mb-4">Internal Complaints Committee</h1>
            </div>
            <div className='p-4'>
                <p className='font-novaReg text-lg'>
                    In continuation to notice AKGU/D.O.Notice/28/09-10 dated 9th August, 2009 and under the provision of the Sexual Harassment of Women at Prevention, Prohibition and Redressal Act, 2013, the following internal Complaint Committee is reformed with the following composition.
                </p>

                <div className="mb-6 mt-4 rounded-lg">
                    <table className="min-w-full my-4 bg-white rounded-lg shadow-md">
                        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                            <tr className="border-b">
                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                    Name
                                </th>
                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tr-lg">
                                    Position
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                            {complaintsCommittee.map((member, index) => (
                                <tr
                                    key={index}
                                    className={`bg-indigo-950 text-white ${index === complaintsCommittee.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                >
                                    <td className={`p-4 border-b border-white border-opacity-20 ${index === complaintsCommittee.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                        {member.name}
                                    </td>
                                    <td className={`p-4 border-b border-l border-white border-opacity-20 ${index === complaintsCommittee.length - 1 ? 'rounded-br-lg' : ''}`}>
                                        {member.position}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='px-4'>
                    <p className="font-novaReg text-lg">
                        In the event of any incident of sexual harassment, lady staff/student may feel free to contact any member of the committee.
                    </p>

                    <p className="font-novaReg text-lg mt-4">
                        Dr. R.K. Agarwal<br />
                        Director General
                    </p>

                    <p className="font-novaReg text-xl mt-4 text-secondary">
                        Grievance Registration
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InternalComplaintsCommittee;
