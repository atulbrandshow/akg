"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const btech = [
    {
        course: 'Computer Science and Engineering',
        sanctioned: '180'
    },
    {
        course: 'Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
        sanctioned: '120'
    },
    {
        course: 'Computer Science and Engineering (Data Science)',
        sanctioned: '120'
    },
    {
        course: 'Computer Science',
        sanctioned: '150'
    },
    {
        course: 'Computer Science and Engineering (Hindi)',
        sanctioned: '60'
    },
    {
        course: 'Artificial Intelligence & Machine Learning',
        sanctioned: '60'
    },
    {
        course: 'Information Technology',
        sanctioned: '180'
    },
    {
        course: 'Computer Science and Information Technology',
        sanctioned: '120'
    },
    {
        course: 'Electronics and Communication Engineering',
        sanctioned: '180'
    },
    {
        course: 'Mechanical Engineering',
        sanctioned: '60'
    },
    {
        course: 'Electrical and Electronics Engineering',
        sanctioned: '60'
    },
    {
        course: 'Civil Engineering',
        sanctioned: '30'
    }
];

const mtech = [
    {
        course: 'Computer Science and Engineering',
        sanctioned: '18'
    },
    {
        course: 'Electrical and Electronics Engineering',
        sanctioned: '18'
    },
    {
        course: 'Electronics and Communication Engineering',
        sanctioned: '18'
    },
    {
        course: 'Mechanical Engineering',
        sanctioned: '9'
    }
];

const mca = [
    {
        course: 'MCA',
        sanctioned: '120'
    }
];

const CoursesOffered = () => {
    const [openSections, setOpenSections] = useState({
        btech: true,
        mtech: false,
        mca: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className='py-5'>
            <h2 className="text-4xl font-novaReg mb-6">Courses Offered</h2>

            <div className="mb-4 border-b border-b-gray-300">
                <div
                    onClick={() => toggleSection('btech')}
                    className="flex justify-between items-center cursor-pointer mb-2 w-full py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                    <span className="font-semibold text-lg">B.Tech Courses</span>
                    {openSections.btech ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                </div>
                {openSections.btech && (
                    <div className="mb-6 mt-4 rounded-lg">
                        <table className="min-w-full my-4 bg-white rounded-lg">
                            <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                        Course
                                    </th>
                                    <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg" style={{ width: '200px' }}>
                                        Sanctioned Strength
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                {btech.map((course, index) => (
                                    <tr
                                        key={index}
                                        className={`bg-indigo-950 text-white ${index === btech.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                    >
                                        <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === btech.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                            {course.course}
                                        </td>
                                        <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === btech.length - 1 ? 'rounded-br-lg' : ''}`} style={{ width: '200px' }}>
                                            {course.sanctioned}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="mb-4 border-b border-b-gray-300">
                <div
                    onClick={() => toggleSection('mtech')}
                    className="flex justify-between items-center cursor-pointer mb-2 w-full py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                    <span className="font-semibold text-lg">M.Tech Courses</span>
                    {openSections.mtech ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                </div>
                {openSections.mtech && (
                    <div className="mb-6 mt-4 rounded-lg">
                        <table className="min-w-full my-4 bg-white rounded-lg">
                            <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                        Course
                                    </th>
                                    <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg" style={{ width: '200px' }}>
                                        Sanctioned Strength
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                {mtech.map((course, index) => (
                                    <tr
                                        key={index}
                                        className={`bg-indigo-950 text-white ${index === mtech.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                    >
                                        <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === mtech.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                            {course.course}
                                        </td>
                                        <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === mtech.length - 1 ? 'rounded-br-lg' : ''}`} style={{ width: '200px' }}>
                                            {course.sanctioned}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="mb-4 border-b border-b-gray-300">
                <div
                    onClick={() => toggleSection('mca')}
                    className="flex justify-between items-center cursor-pointer mb-2 w-full py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                    <span className="font-semibold text-lg">MCA Courses</span>
                    {openSections.mca ? <ChevronUp className="w-6 h-6 text-[#00BFE7]" /> : <ChevronDown className="w-6 h-6 text-[#00BFE7]" />}
                </div>
                {openSections.mca && (
                    <div className="mb-6 mt-4 rounded-lg">
                        <table className="min-w-full my-4 bg-white rounded-lg">
                            <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                        Course
                                    </th>
                                    <th className="px-4 py-2 border-r border-white border-opacity-10 text-left rounded-tr-lg" style={{ width: '200px' }}>
                                        Sanctioned Strength
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                {mca.map((course, index) => (
                                    <tr
                                        key={index}
                                        className={`bg-indigo-950 text-white ${index === mca.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                    >
                                        <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === mca.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                            {course.course}
                                        </td>
                                        <td className={`p-4 max-sm:p-3 border-b border-white border-opacity-20 ${index === mca.length - 1 ? 'rounded-br-lg' : ''}`} style={{ width: '200px' }}>
                                            {course.sanctioned}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoursesOffered;
