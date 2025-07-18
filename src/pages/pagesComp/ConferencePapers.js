import Link from 'next/link';
import React from 'react';

const department = [
  {
    serialNumber: '1',
    title: 'Computer Science & Engineering',
    links: '/cse-conference-papers',
  },
  {
    serialNumber: '2',
    title: 'Information Technology',
    links: '/it-conference-papers',
  },
  {
    serialNumber: '3',
    title: 'Electronics & Communication Engineering',
    links: '/ece-conference-papers',
  },
  {
    serialNumber: '4',
    title: 'Electrical & Electronics Engineering',
    links: '/en-conference-papers',
  },
  {
    serialNumber: '5',
    title: 'Mechanical Engineering',
    links: '/me-conference-papers',
  },
  {
    serialNumber: '6',
    title: 'Applied Science & Humanities',
    links: '/ash-conference-papers',
  },
  {
    serialNumber: '7',
    title: 'Civil Engineering',
    links: '/ce-conference-papers',
  },
  {
    serialNumber: '8',
    title: 'MCA',
    links: '/mca-conference-papers',
  }
];

const ConferencePapers = () => {
  return (
    <div>
      <h3 className="text-5xl leading-none font-novaBold text-center mb-6">Conference Papers</h3>
      <p className="text-lg font-novaSemi mb-8">Department Wise ConferencePapers Papers</p>

      <div className="mb-6 mt-4 rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
            <tr className="border-b">
              <th className="px-4 py-2 w-[20%] text-left border-r border-white border-opacity-10 rounded-tl-lg">S.No</th>
              <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">Department Title</th>
              <th className="px-4 py-2 w-[15%] text-left rounded-tr-lg">Links</th>
            </tr>
          </thead>
          <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
            {department.map((dept, index) => (
              <tr
                key={index}
                className={`bg-indigo-950 text-white ${index === department.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
              >
                <td className={`p-4 border-b border-white border-opacity-20 ${index === department.length - 1 ? 'rounded-bl-lg' : ''}`}>
                  {dept.serialNumber}
                </td>
                <td className="p-4 border-b border-l border-white border-opacity-20">{dept.title}</td>
                <td className={`p-4 border-b border-l border-white border-opacity-20 ${index === department.length - 1 ? 'rounded-br-lg' : ''}`}>
                  <Link href={dept.links} className="text-blue-400 hover:underline">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConferencePapers;
