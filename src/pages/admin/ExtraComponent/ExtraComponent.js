"use client"

import { useState, useEffect } from "react"

const ExtraParamsManager = () => {
  const [params, setParams] = useState([])
  const [selectedPageId, setSelectedPageId] = useState("")
  const [usedHolders, setUsedHolders] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingParam, setEditingParam] = useState(null)
  const [loading, setLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    pageid: "",
    param: "",
    paramDesc: "",
    paramImg: "",
    paramUrl: "",
    orderSequence: 0,
    type: "",
    holder: "",
    status: true,
    addedby: "",
    calid: "",
  })

  // Predefined holders organized by sections
  const holderSections = {
    Banner: ["Holder 1", "Holder 2", "Holder 3", "Holder 4", "Holder 5"],
    Title: ["Holder 6", "Holder 7", "Holder 8", "Holder 9", "Holder 10"],
    Description: [
      "Holder 11",
      "Holder 12",
      "Holder 13",
      "Holder 14",
      "Holder 15",
      "Holder 16",
      "Holder 17",
      "Holder 18",
      "Holder 19",
      "Holder 20",
      "Holder 21",
      "Holder 22",
      "Holder 23",
      "Holder 24",
      "Holder 25",
      "Holder 26",
      "Holder 27",
      "Holder 28",
      "Holder 29",
      "Holder 30",
    ],
    Footer: ["Holder 31", "Holder 32", "Holder 33", "Holder 34", "Holder 35"],
  }

  // Fetch all params
  const fetchParams = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/extra-component-data/all")
      const result = await response.json()
      if (result.status) {
        setParams(result.data || [])
      }
    } catch (error) {
      console.error("Error fetching params:", error)
    }
    setLoading(false)
  }

  // Fetch used holders for a specific page
  const fetchUsedHolders = async (pageid) => {
    if (!pageid) return
    try {
      const response = await fetch(`/api/extra-component-data/used-holders/${pageid}`)
      const result = await response.json()
      if (result.status) {
        setUsedHolders(result.data || [])
      }
    } catch (error) {
      console.error("Error fetching used holders:", error)
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = editingParam ? `/api/extra-component-data/${editingParam._id}` : "/api/extra-component-data/create"

      const method = editingParam ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.status) {
        alert(result.message)
        setShowForm(false)
        setEditingParam(null)
        resetForm()
        fetchParams()
        if (selectedPageId) {
          fetchUsedHolders(selectedPageId)
        }
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("Error saving data")
      console.error("Error:", error)
    }
    setLoading(false)
  }

  // Handle delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this parameter?")) return

    setLoading(true)
    try {
      const response = await fetch(`/api/extra-component-data/${id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.status) {
        alert(result.message)
        fetchParams()
        if (selectedPageId) {
          fetchUsedHolders(selectedPageId)
        }
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("Error deleting data")
      console.error("Error:", error)
    }
    setLoading(false)
  }

  // Reset form
  const resetForm = () => {
    setFormData({
      pageid: selectedPageId || "",
      param: "",
      paramDesc: "",
      paramImg: "",
      paramUrl: "",
      orderSequence: 0,
      type: "",
      holder: "",
      status: true,
      addedby: "",
      calid: "",
    })
  }

  // Handle edit
  const handleEdit = (param) => {
    setEditingParam(param)
    setFormData({
      pageid: param.pageid,
      param: param.param,
      paramDesc: param.paramDesc || "",
      paramImg: param.paramImg || "",
      paramUrl: param.paramUrl || "",
      orderSequence: param.orderSequence || 0,
      type: param.type,
      holder: param.holder,
      status: param.status,
      addedby: param.addedby || "",
      calid: param.calid || "",
    })
    setShowForm(true)
  }

  // Handle add new
  const handleAddNew = () => {
    setEditingParam(null)
    resetForm()
    setShowForm(true)
  }

  // Filter params by selected page
  const filteredParams = selectedPageId ? params.filter((param) => param.pageid === selectedPageId) : params

  // Get unique page IDs
  const uniquePageIds = [...new Set(params.map((param) => param.pageid))]

  useEffect(() => {
    fetchParams()
  }, [])

  useEffect(() => {
    if (selectedPageId) {
      fetchUsedHolders(selectedPageId)
    }
  }, [selectedPageId])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold">Extra Component Data Manager</h1>
          </div>

          <div className="flex">
            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Page Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Page ID</label>
                <select
                  value={selectedPageId}
                  onChange={(e) => setSelectedPageId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Pages</option>
                  {uniquePageIds.map((pageId) => (
                    <option key={pageId} value={pageId}>
                      {pageId}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="mb-6 flex gap-4">
                <button
                  onClick={handleAddNew}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Add New Parameter
                </button>
                <button
                  onClick={fetchParams}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>

              {/* Parameters List */}
              {!showForm && (
                <div className="bg-white rounded-lg border">
                  <div className="bg-gray-50 px-6 py-3 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Parameters List {selectedPageId && `(Page: ${selectedPageId})`}
                    </h2>
                  </div>

                  {loading ? (
                    <div className="p-6 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="mt-2 text-gray-600">Loading...</p>
                    </div>
                  ) : filteredParams.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">No parameters found</div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Page ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Holder
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Parameter
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredParams.map((param) => (
                            <tr key={param._id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{param.pageid}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{param.holder}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{param.param}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{param.type}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                    param.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {param.status ? "Active" : "Inactive"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                  onClick={() => handleEdit(param)}
                                  className="text-blue-600 hover:text-blue-900 mr-3"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(param._id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Form */}
              {showForm && (
                <div className="bg-white rounded-lg border">
                  <div className="bg-gray-50 px-6 py-3 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {editingParam ? "Edit Parameter" : "Add New Parameter"}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Page ID *</label>
                        <input
                          type="text"
                          value={formData.pageid}
                          onChange={(e) => setFormData({ ...formData, pageid: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Holder *</label>
                        <select
                          value={formData.holder}
                          onChange={(e) => setFormData({ ...formData, holder: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select Holder</option>
                          {Object.entries(holderSections).map(([section, holders]) => (
                            <optgroup key={section} label={section}>
                              {holders.map((holder) => (
                                <option key={holder} value={holder}>
                                  {holder}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Parameter *</label>
                        <input
                          type="text"
                          value={formData.param}
                          onChange={(e) => setFormData({ ...formData, param: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                        <input
                          type="text"
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Parameter Description</label>
                        <textarea
                          value={formData.paramDesc}
                          onChange={(e) => setFormData({ ...formData, paramDesc: e.target.value })}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Parameter Image URL</label>
                        <input
                          type="url"
                          value={formData.paramImg}
                          onChange={(e) => setFormData({ ...formData, paramImg: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Parameter URL</label>
                        <input
                          type="url"
                          value={formData.paramUrl}
                          onChange={(e) => setFormData({ ...formData, paramUrl: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Order Sequence</label>
                        <input
                          type="number"
                          value={formData.orderSequence}
                          onChange={(e) =>
                            setFormData({ ...formData, orderSequence: Number.parseInt(e.target.value) || 0 })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Added By</label>
                        <input
                          type="text"
                          value={formData.addedby}
                          onChange={(e) => setFormData({ ...formData, addedby: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Calendar ID</label>
                        <input
                          type="text"
                          value={formData.calid}
                          onChange={(e) => setFormData({ ...formData, calid: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                            className="mr-2"
                          />
                          <span className="text-sm font-medium text-gray-700">Active Status</span>
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                      >
                        {loading ? "Saving..." : editingParam ? "Update" : "Create"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowForm(false)
                          setEditingParam(null)
                          resetForm()
                        }}
                        className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Holder Status Sidebar */}
            <div className="w-80 bg-gray-50 border-l p-6">
              <div className="bg-white rounded-lg border">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold">Holder Status</h3>
                  {selectedPageId && <p className="text-sm opacity-90">Page: {selectedPageId}</p>}
                </div>

                <div className="p-4 space-y-4">
                  {Object.entries(holderSections).map(([section, holders]) => (
                    <div key={section}>
                      <div className="bg-yellow-400 text-black px-3 py-2 rounded-md font-medium text-center mb-2">
                        {section}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {holders.map((holder) => {
                          const isUsed = usedHolders.includes(holder)
                          return (
                            <div
                              key={holder}
                              className={`p-2 rounded-md text-sm font-medium flex items-center justify-between ${
                                isUsed ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                              }`}
                            >
                              <span>{holder}</span>
                              <span className="text-xs">{isUsed ? "✓" : "✗"}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraParamsManager
