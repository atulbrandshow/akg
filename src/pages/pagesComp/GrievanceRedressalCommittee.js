"use client";

import React from 'react';

const gRCMembers = [
    {
        name: "Dr. Hemant Ahuja, Director (Chairperson)",
        mobile: "09899008275"
    },
    {
        name: "Prof. S.L. Kapoor, Dean 1st Year & Proctor",
        mobile: "09312072348"
    },
    {
        name: "Dr. Vani Bhargava, Associate Professor, EN",
        mobile: "09968479672"
    },
    {
        name: "Dr. Aditya Pratap Singh, Associate Professor, IT",
        mobile: "09958883636"
    },
    {
        name: "Mr. Naresh Kumar, Assistant Professor, ECE",
        mobile: "09416467489"
    },
    {
        name: "Dr. Kumar Sambhav, University Member",
        mobile: "09455680200"
    }
];

const GrievanceRedressalCommittee = () => {
    return (
        <div className=''>

            <div className="mb-6 mt-4 rounded-lg">
                <div className='text-center'>
                    <h2 className="text-2xl font-novaReg mb-4">Grievance Redressal Committee (GRC)</h2>
                </div>
                <div className='font-novaReg text-lg'>
                    <p className='font-novaReg text-lg mb-2'>
                        In order to address the grievances of Faculty & Staff members of the College, which are not taken care of by the normal available channels, a separate “Grievance Redressal Committee (GRC)” is constituted as follows:
                    </p>
                    <div className="mb-6 mt-4 rounded-lg"></div>
                    <table className="min-w-full my-4 bg-white rounded-lg shadow-md">
                        <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                            <tr className="border-b">
                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                    Name
                                </th>
                                <th className="px-4 py-2 text-left rounded-tr-lg">
                                    Mobile No.
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                            {gRCMembers.map((member, index) => (
                                <tr
                                    key={index}
                                    className={`bg-indigo-950 text-white ${index === gRCMembers.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                >
                                    <td className={`p-4 border-b border-white border-opacity-20 ${index === gRCMembers.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                        {member.name}
                                    </td>
                                    <td className={`p-4 border-b border-l border-white border-opacity-20 ${index === gRCMembers.length - 1 ? 'rounded-br-lg' : ''}`}>
                                        {member.mobile}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='px-4'>
                    <p className="font-novaReg text-lg mt-4">
                        The concerned Faculty / Staff should contact any member of the committee, preferably in writing, about their grievance so that suitable remedial action, if required, may be initiated by the committee. The grievance may also be registered online at <a href="https://www.akgec.ac.in" className="text-blue-600">www.akgec.ac.in</a>. It may be noted that anonymous/ unnamed grievance / complaints without proper details and complaints against general norms and policies which are prerogative of the college will not be entertained.
                    </p>

                    <p className="font-novaReg text-lg mt-4">
                        It is expected that this will help maintain a positive, harmonious and conducive atmosphere in the College.
                    </p>

                    <p className="font-novaReg text-lg mt-4">
                        Dr. R.K. Agarwal<br />
                        Director General
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GrievanceRedressalCommittee;
