"use client";

import React, { useState } from 'react';

const studentData = [
    { name: 'John Doe', course: 'Computer Science', company: 'Google' },
    { name: 'Jane Smith', course: 'Mechanical Engineering', company: 'Tesla' },
    { name: 'Alice Johnson', course: 'Electrical Engineering', company: 'Siemens' },
    { name: 'Bob Brown', course: 'Information Technology', company: 'Amazon' },
    { name: 'Charlie Davis', course: 'Civil Engineering', company: 'Bechtel' },
    { name: 'David Wilson', course: 'Biotechnology', company: 'Pfizer' },
    { name: 'Eva Martinez', course: 'Business Administration', company: 'Deloitte' },
    { name: 'Frank Garcia', course: 'Data Science', company: 'Facebook' },
    { name: 'Grace Lee', course: 'Graphic Design', company: 'Adobe' },
    { name: 'Henry Miller', course: 'Marketing', company: 'Coca-Cola' },
    { name: 'Ivy Lopez', course: 'Finance', company: 'Goldman Sachs' },
    { name: 'Jack Walker', course: 'Economics', company: 'McKinsey' },
    { name: 'Lily Hall', course: 'Psychology', company: 'Mental Health Corp' },
    { name: 'Michael Allen', course: 'Pharmacy', company: 'Walgreens' },
    { name: 'Nina Young', course: 'Nursing', company: 'HealthFirst' },
    { name: 'Oliver King', course: 'Hospitality Management', company: 'Marriott' },
    { name: 'Paul Wright', course: 'Education', company: 'Teach For All' },
    { name: 'Quinn Scott', course: 'Law', company: 'Skadden' },
    { name: 'Rose Green', course: 'Art History', company: 'Art Institute' },
    { name: 'Sam Thompson', course: 'Environmental Science', company: 'Greenpeace' },
    { name: 'Tina White', course: 'Statistics', company: 'Nielsen' },
    { name: 'Ursula Harris', course: 'Information Systems', company: 'Oracle' },
    { name: 'Victor Garcia', course: 'Web Development', company: 'WordPress' },
    { name: 'Wendy Lee', course: 'Cyber Security', company: 'FireEye' },
    { name: 'Xander Robinson', course: 'Software Engineering', company: 'Red Hat' },
    { name: 'Yara Clark', course: 'Social Work', company: 'Charity Org' },
    { name: 'Zane Lewis', course: 'Physics', company: 'NASA' },
    { name: 'Abigail Hall', course: 'Graphic Design', company: 'Canva' },
    { name: 'Brandon Martinez', course: 'Mechanical Engineering', company: 'Boeing' },
    { name: 'Chloe Robinson', course: 'Business Analytics', company: 'IBM' },
    { name: 'Daniel Anderson', course: 'Chemistry', company: 'BASF' },
    { name: 'Ella Scott', course: 'Public Relations', company: 'Edelman' },
    { name: 'Finn Lewis', course: 'Marine Biology', company: 'NOAA' },
    { name: 'Gina Turner', course: 'Nursing', company: 'Kaiser Permanente' },
    { name: 'Henry Lee', course: 'Journalism', company: 'The New York Times' },
    { name: 'Isla Green', course: 'Philosophy', company: 'Think Tanks' },
    { name: 'Jake Cooper', course: 'Construction Management', company: 'Turner Construction' },
    { name: 'Kira Wright', course: 'Theatre Arts', company: 'Broadway' },
    { name: 'Leo Martinez', course: 'Interior Design', company: 'IKEA' },
    { name: 'Maya Thompson', course: 'Fashion Design', company: 'Gucci' },
    { name: 'Nolan Harris', course: 'Linguistics', company: 'Rosetta Stone' },
    { name: 'Olivia King', course: 'Culinary Arts', company: 'Top Chef' },
    { name: 'Paige Baker', course: 'Veterinary Medicine', company: 'Banfield' },
    { name: 'Quincy Carter', course: 'Information Technology', company: 'Cisco' },
    { name: 'Rita Wood', course: 'Data Analytics', company: 'DataRobot' },
    { name: 'Sophie James', course: 'Human Resources', company: 'HR Solutions' },
    { name: 'Tony Hill', course: 'Artificial Intelligence', company: 'Nvidia' },
    { name: 'Ulysses Carter', course: 'Geology', company: 'Shell' },
    { name: 'Victoria Simmons', course: 'Sports Management', company: 'ESPN' },
    { name: 'William Young', course: 'Cyber Security', company: 'Kaspersky' },
    { name: 'Xena Collins', course: 'Animal Science', company: 'Farmers\' Association' },
    { name: 'Yvonne Patel', course: 'Biomedical Engineering', company: 'Medtronic' },
    { name: 'Zachary Mitchell', course: 'Pharmaceutical Sciences', company: 'GSK' },
    { name: 'John Doe', course: 'Computer Science', company: 'Google' },
    { name: 'Jane Smith', course: 'Mechanical Engineering', company: 'Tesla' },
    { name: 'Alice Johnson', course: 'Electrical Engineering', company: 'Siemens' },
    { name: 'Bob Brown', course: 'Information Technology', company: 'Amazon' },
    { name: 'Charlie Davis', course: 'Civil Engineering', company: 'Bechtel' },
    { name: 'David Wilson', course: 'Biotechnology', company: 'Pfizer' },
    { name: 'Eva Martinez', course: 'Business Administration', company: 'Deloitte' },
    { name: 'Frank Garcia', course: 'Data Science', company: 'Facebook' },
    { name: 'Grace Lee', course: 'Graphic Design', company: 'Adobe' },
    { name: 'Henry Miller', course: 'Marketing', company: 'Coca-Cola' },
    { name: 'Ivy Lopez', course: 'Finance', company: 'Goldman Sachs' },
    { name: 'Jack Walker', course: 'Economics', company: 'McKinsey' },
    { name: 'Lily Hall', course: 'Psychology', company: 'Mental Health Corp' },
    { name: 'Michael Allen', course: 'Pharmacy', company: 'Walgreens' },
    { name: 'Nina Young', course: 'Nursing', company: 'HealthFirst' },
    { name: 'Oliver King', course: 'Hospitality Management', company: 'Marriott' },
    { name: 'Paul Wright', course: 'Education', company: 'Teach For All' },
    { name: 'Quinn Scott', course: 'Law', company: 'Skadden' },
    { name: 'Rose Green', course: 'Art History', company: 'Art Institute' },
];

const TopPlacement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = studentData.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const indexOfFirstEntry = startIndex;
    const indexOfLastEntry = startIndex + paginatedData.length - 1;

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleSelectChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <section>
            <div className="mb-8">
                <h2 className="text-4xl max-lg:text-3xl max-sm:text-2xl  font-novaReg mb-4">AKG University - Student Success in Placements</h2>
                <p className="text-gray-700 max-sm:text-sm font-novaReg mb-2 text-justify">
                    AKG University takes pride in shaping the future of its students by offering top-notch academic programs and world-class placement opportunities. Below is a glimpse of our recent graduates who have secured placements in prestigious companies.
                </p>
                <p className="text-gray-700 max-sm:text-sm font-novaReg text-justify">
                    Explore the student placement details across various courses and industries, showcasing the diverse talents nurtured at our institution.
                </p>
            </div>
            <div className="flex justify-start">
                <div className="text-sm mb-2 mr-5">
                    <label className="text-gray-700">
                        Show
                        <select
                            name="example_length"
                            aria-controls="example"
                            className="ml-2 mr-2 border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={itemsPerPage}
                            onChange={handleSelectChange}
                        >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
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
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-secondary max-md:text-sm max-sm:text-xs uppercase border-inherit">
                            <th className="px-4 max-sm:px-3 py-2 text-left rounded-tl-lg">Student Name</th>
                            <th className="px-4 max-sm:px-3 py-2 text-left">Course</th>
                            <th className="px-4 max-sm:px-3 py-2 text-left rounded-tr-lg">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((student, index) => {
                            const isLastRow = index === paginatedData.length - 1;
                            return (
                                <tr key={index} className="bg-indigo-950 text-gray-200 text-sm max-sm:text-xs border-inherit">
                                    <td className={`px-4 max-sm:px-3 py-2 ${isLastRow ? 'rounded-bl-lg' : 'border-b border-gray-300'}`}>
                                        {student.name}
                                    </td>
                                    <td className={`border-l px-4 max-sm:px-3 py-2 ${isLastRow ? '' : 'border-b border-gray-300'}`}>
                                        {student.course}
                                    </td>
                                    <td className={`border-l px-4 max-sm:px-3 py-2 ${isLastRow ? 'rounded-br-lg' : 'border-b border-gray-300'}`}>
                                        {student.company}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-between max-sm:flex-col max-sm:gap-2">
                <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry + 1, filteredData.length)} of {filteredData.length} entries
                </div>
                <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                    <button
                        className={`max-[400px]:hidden text-white px-4 py-2.5 rounded ${currentPage === 1 ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <button
                            key={pageIndex + 1}
                            className={`text-white px-4 py-2.5 rounded ${currentPage === pageIndex + 1 ? 'bg-primary' : ''}`}
                            onClick={() => handlePageChange(pageIndex + 1)}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                    <button
                        className={`max-[400px]:hidden text-white px-3 py-2 rounded ${currentPage === totalPages ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopPlacement;
