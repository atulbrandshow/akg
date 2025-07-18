"use client";

import { ArrowDownUp, ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react';
import React, { useState, useMemo } from 'react'

const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Admin' },
    { id: 6, name: 'Eva Wilson', email: 'eva@example.com', role: 'Editor' },
    { id: 7, name: 'Frank Miller', email: 'frank@example.com', role: 'User' },
    { id: 8, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 9, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 10, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 11, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
    { id: 12, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Admin' },
    { id: 13, name: 'Eva Wilson', email: 'eva@example.com', role: 'Editor' },
    { id: 14, name: 'Frank Miller', email: 'frank@example.com', role: 'User' },
    { id: 15, name: 'Frank Miller', email: 'frank@example.com', role: 'User' },
    { id: 16, name: 'Frank Miller', email: 'frank@example.com', role: 'User' },
];

const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
];

const ApplicationTable = () => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    let itemsPerPage = 8;

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const filteredData = useMemo(() => {
        return data.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [data, searchTerm]);

    const sortedData = useMemo(() => {
        if (!sortColumn || !sortDirection) return filteredData;
        return [...filteredData].sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortColumn, sortDirection]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-novaSemi">Application Details</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="py-1.5 px-4 border outline-none border-gray-300 rounded-md w-64"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map((column) => (
                                <th key={column.key} className="p-3 text-left font-semibold border-b-2 border-gray-200">
                                    <button
                                        onClick={() => handleSort(column.key)}
                                        className="flex items-center space-x-1 focus:outline-none"
                                    >
                                        <span>{column.label}</span>
                                        {sortColumn === column.key ? (
                                            sortDirection === 'asc' ? (
                                                <ChevronUp className="h-4 w-4" />
                                            ) : sortDirection === 'desc' ? (
                                                <ChevronDown className="h-4 w-4" />
                                            ) : null
                                        ) : (
                                            <ChevronsUpDown className="h-4 w-4 opacity-50" />
                                        )}
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {columns.map((column) => (
                                    <td key={column.key} className="p-3 border-b border-gray-200">
                                        {item[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} entries
                </p>
                <div className="space-x-2">
                    <button
                        className="px-4 py-1 bg-gray-200 font-novaSemi text-gray-700 rounded-md disabled:opacity-50"
                        onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="px-4 py-1 bg-gray-200 font-novaSemi text-gray-700 rounded-md disabled:opacity-50"
                        onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ApplicationTable