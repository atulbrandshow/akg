import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, FunnelIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { API_NODE_URL } from "@/configs/config"
import { getLocalStorageItem } from '../../../configs/localstorage';
import Layout from '../Components/Layout';

const AdminLogSystem = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({});
    const [filters, setFilters] = useState({
        modules: [],
        actions: [],
        admins: [] // Added this line
    });

    // Filter states
    const [currentFilters, setCurrentFilters] = useState({
        page: 1,
        limit: 20,
        adminId: '',
        module: '',
        action: '',
        startDate: '',
        endDate: '',
        search: '',
        sortBy: 'createdAt',
        sortOrder: 'desc'
    });

    const [showFilters, setShowFilters] = useState(false);

    // Fetch logs
    const fetchLogs = async () => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams();
            Object.entries(currentFilters).forEach(([key, value]) => {
                if (value) queryParams.append(key, value);
            });

            const token = localStorage.getItem("admin_token").replaceAll('"', "");
            const response = await fetch(`${API_NODE_URL}admin-log/get?${queryParams}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            console.log(result);

            if (result.status) {
                setLogs(result.data.logs);
                setPagination(result.data.pagination);
                setFilters(result.data.filters);
            }
        } catch (error) {
            console.error('Error fetching logs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, [currentFilters]);

    // Handle filter changes
    const handleFilterChange = (key, value) => {
        setCurrentFilters(prev => ({
            ...prev,
            [key]: value,
            page: 1 // Reset to first page when filtering
        }));
    };

    // Clear all filters
    const clearFilters = () => {
        setCurrentFilters({
            page: 1,
            limit: 20,
            adminId: '',
            module: '',
            action: '',
            startDate: '',
            endDate: '',
            search: '',
            sortBy: 'createdAt',
            sortOrder: 'desc'
        });
    };

    // Handle pagination
    const handlePageChange = (newPage) => {
        setCurrentFilters(prev => ({ ...prev, page: newPage }));
    };

    // Handle sorting
    const handleSort = (column) => {
        const newOrder = currentFilters.sortBy === column && currentFilters.sortOrder === 'desc' ? 'asc' : 'desc';
        setCurrentFilters(prev => ({
            ...prev,
            sortBy: column,
            sortOrder: newOrder
        }));
    };

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Get action badge color
    const getActionBadgeColor = (action) => {
        const colors = {
            'create': 'bg-green-100 text-green-800',
            'edit': 'bg-blue-100 text-blue-800',
            'delete': 'bg-red-100 text-red-800',
            'login': 'bg-purple-100 text-purple-800',
            'generate': 'bg-yellow-100 text-yellow-800',
            'view': 'bg-gray-100 text-gray-800'
        };
        return colors[action.toLowerCase()] || 'bg-gray-100 text-gray-800';
    };

    return (
        <Layout>
            <div className="pt-5 px-5 overflow-x-auto h-full bg-BG1 bg-cover">
                <div className="min-h-full bg-gray-50 p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">Admin Activity Logs</h1>
                            <p className="text-gray-600 mt-2">Monitor and track all administrative activities</p>
                        </div>

                        {/* Filters Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                            <div className="p-4 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => setShowFilters(!showFilters)}
                                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <FunnelIcon className="w-4 h-4" />
                                            <span>Filters</span>
                                        </button>

                                        {/* Search */}
                                        <div className="relative">
                                            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search ..."
                                                value={currentFilters.search}
                                                onChange={(e) => handleFilterChange('search', e.target.value)}
                                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={clearFilters}
                                        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <XMarkIcon className="w-4 h-4" />
                                        <span>Clear All</span>
                                    </button>
                                </div>
                            </div>

                            {/* Filter Controls */}
                            {showFilters && (
                                <div className="p-4 bg-gray-50 border-t border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                        {/* Module Filter */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Module</label>
                                            <select
                                                value={currentFilters.module}
                                                onChange={(e) => handleFilterChange('module', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">All Modules</option>
                                                {filters.modules.map(module => (
                                                    <option key={module} value={module}>{module}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Action Filter */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Action</label>
                                            <select
                                                value={currentFilters.action}
                                                onChange={(e) => handleFilterChange('action', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">All Actions</option>
                                                {filters.actions.map(action => (
                                                    <option key={action} value={action}>{action}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Admin Filter - NEW ADDITION */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Admin</label>
                                            <select
                                                value={currentFilters.adminId}
                                                onChange={(e) => handleFilterChange('adminId', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">All Admins</option>
                                                {filters.admins && filters.admins.map(admin => (
                                                    <option key={admin._id} value={admin._id}>
                                                        {admin.name} ({admin.email})
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Start Date */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                            <input
                                                type="date"
                                                value={currentFilters.startDate}
                                                onChange={(e) => handleFilterChange('startDate', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>

                                        {/* End Date */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                            <input
                                                type="date"
                                                value={currentFilters.endDate}
                                                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Results Summary */}
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                Showing {logs.length} of {pagination.totalLogs} results
                            </p>
                            <div className="flex items-center space-x-2">
                                <label className="text-sm text-gray-600">Show:</label>
                                <select
                                    value={currentFilters.limit}
                                    onChange={(e) => handleFilterChange('limit', e.target.value)}
                                    className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                        </div>

                        {/* Logs Table */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            {loading ? (
                                <div className="p-8 text-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                                    <p className="text-gray-600 mt-2">Loading logs...</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    onClick={() => handleSort('createdAt')}
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                >
                                                    <div className="flex items-center space-x-1">
                                                        <span>Timestamp</span>
                                                        {currentFilters.sortBy === 'createdAt' && (
                                                            <span className="text-blue-600">
                                                                {currentFilters.sortOrder === 'desc' ? '↓' : '↑'}
                                                            </span>
                                                        )}
                                                    </div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Admin
                                                </th>
                                                <th
                                                    onClick={() => handleSort('module')}
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                >
                                                    <div className="flex items-center space-x-1">
                                                        <span>Module</span>
                                                        {currentFilters.sortBy === 'module' && (
                                                            <span className="text-blue-600">
                                                                {currentFilters.sortOrder === 'desc' ? '↓' : '↑'}
                                                            </span>
                                                        )}
                                                    </div>
                                                </th>
                                                <th
                                                    onClick={() => handleSort('action')}
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                                >
                                                    <div className="flex items-center space-x-1">
                                                        <span>Action</span>
                                                        {currentFilters.sortBy === 'action' && (
                                                            <span className="text-blue-600">
                                                                {currentFilters.sortOrder === 'desc' ? '↓' : '↑'}
                                                            </span>
                                                        )}
                                                    </div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Target
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Description
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    IP Address
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {logs.map((log) => (
                                                <tr key={log._id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {formatDate(log.createdAt)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {log?.adminId?.name || 'Unknown'}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {log?.adminId?.email}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                                            {log?.module}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getActionBadgeColor(log?.action)}`}>
                                                            {log?.action}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {`${log?.module === "Login" ? "Login Time" : log?.targetLabel} :- ${log?.targetId}`}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate" title={log?.description}>
                                                        {log?.description || '-'}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {log.ipAddress}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* Empty State */}
                            {!loading && logs.length === 0 && (
                                <div className="p-8 text-center">
                                    <p className="text-gray-500">No logs found matching your criteria.</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {pagination.totalPages > 1 && (
                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-sm text-gray-700">
                                    Page {pagination.currentPage} of {pagination.totalPages}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                                        disabled={!pagination.hasPrev}
                                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeftIcon className="w-4 h-4 mr-1" />
                                        Previous
                                    </button>

                                    {/* Page Numbers */}
                                    <div className="flex items-center space-x-1">
                                        {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                                            const pageNum = Math.max(1, pagination.currentPage - 2) + i;
                                            if (pageNum > pagination.totalPages) return null;

                                            return (
                                                <button
                                                    key={pageNum}
                                                    onClick={() => handlePageChange(pageNum)}
                                                    className={`px-3 py-2 text-sm font-medium rounded-lg ${pageNum === pagination.currentPage
                                                        ? 'bg-blue-600 text-white'
                                                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {pageNum}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                                        disabled={!pagination.hasNext}
                                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                        <ChevronRightIcon className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminLogSystem;
