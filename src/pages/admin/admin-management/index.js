"use client"
import { useState, useEffect } from "react"
import { API_NODE_URL } from "@/configs/config";
import Layout from "../Components/Layout";

export default function AdminManagement({ currentAdmin }) {
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "SubAdmin",
    });

    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token").replaceAll(`"`, "") : "";

    useEffect(() => {
        fetchAdmins();
    }, []);

    // ✅ Fetch all admins
    const fetchAdmins = async () => {
        try {
            const res = await fetch(`${API_NODE_URL}admin/all`, {
                headers: { Authorization: `Bearer ${token}` },
                credentials: "include",
            });
            const data = await res.json();
            if (data.status) {
                setAdmins(data.data);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error fetching admins:", error);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Add or Update admin
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = editingAdmin
                ? `${API_NODE_URL}admin/update/${editingAdmin._id}`
                : `${API_NODE_URL}admin/register`;

            const method = editingAdmin ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.status) {
                resetForm();
                fetchAdmins();
                alert(data.message)
            } else {
                alert(data.message || "Failed to save admin.");
            }
        } catch (error) {
            console.error("Error saving admin:", error);
        }
    };

    // ✅ Delete admin
    const handleDelete = async (adminId) => {
        if (!confirm("Are you sure you want to delete this admin?")) return;
        try {
            const res = await fetch(`${API_NODE_URL}admin/delete/${adminId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
                credentials: "include",
            });
            const data = await res.json();
            if (data.status) {
                fetchAdmins();
            } else {
                alert(data.message || "Failed to delete.");
            }
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    const resetForm = () => {
        setFormData({ name: "", email: "", password: "", role: "SubAdmin" });
        setShowAddForm(false);
        setEditingAdmin(null);
    };

    const handleEdit = (admin) => {
        setEditingAdmin(admin);
        setFormData({
            name: admin.name,
            email: admin.email,
            password: "", // Don't show current password
            role: admin.role,
        });
        setShowAddForm(true);
    };

    // ✅ Loading Spinner
    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    return (
        <Layout>
            <div className="pt-5 px-5 overflow-x-auto min-h-screen max-h-full bg-white bg-cover">
                <div className="">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10 mb-5">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Admin Management</h1>
                            <p className="text-gray-600 mt-1">Manage system administrators</p>
                        </div>
                        <button
                            onClick={() => setShowAddForm(true)}
                            className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            Add New Admin
                        </button>
                    </div>

                    {/* Add/Edit Form Modal */}
                    {showAddForm && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                <h2 className="text-xl font-bold mb-4">{editingAdmin ? "Edit Admin" : "Add New Admin"}</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Password {editingAdmin && "(leave blank to keep current)"}
                                        </label>
                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required={!editingAdmin}
                                        />
                                    </div>
                                    <div className="flex space-x-3 pt-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                                        >
                                            {editingAdmin ? "Update" : "Add"} Admin
                                        </button>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Admins Table */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Admin
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {admins.filter(admin => admin.role !== "SuperAdmin").map((admin) => (
                                        <tr key={admin._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                        {admin.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                                                        <div className="text-sm text-gray-500">{admin.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${admin.role === "SuperAdmin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
                                                        }`}
                                                >
                                                    {admin.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleEdit(admin)}
                                                        className="text-blue-600 hover:text-blue-900 transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(admin._id)}
                                                        className="text-red-600 hover:text-red-900 transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
