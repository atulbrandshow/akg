"use client";

import { useEffect, useState } from "react";
import { API_NODE_URL } from "@/configs/config";

export default function EditPath({ pageId }) {
  const [type, setType] = useState("blogs");
  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");
  const [updateChildren, setUpdateChildren] = useState(false);
  const [parentId, setParentId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchPageData = async () => {
      if (!pageId) return;

      try {
        const response = await fetch(`${API_NODE_URL}edit-path/${pageId}`, {
          method: "GET",
          credentials: "include", // This ensures cookies or auth headers are sent
        });

        const data = await response.json();

        if (data?.name) setTitle(data.name);
        if (data?.path) setPath(data.path);
        if (data?.parent_id) setParentId(data.parent_id);
      } catch (err) {
        console.error("Error fetching page data:", err);
      }
    };

    fetchPageData();
  }, [pageId]);


  const handleUpdate = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_NODE_URL}edit-path/all`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          page_id: pageId,
          title,
          path,
          update_children: updateChildren,
        }),
      });

      const result = await res.json();
      if (result.status) {
        setMessage("✅ Updated successfully.");
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      console.error("Update error:", error);
      setMessage("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Message Box */}
      {message && (
        <div
          className={`px-4 py-2 rounded text-sm font-medium ${message?.startsWith("✅")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
            }`}
        >
          {message}
        </div>
      )}

      {/* Update Name Section */}
      <div className="bg-white shadow-md p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Update Name</h2>

        {/* Page ID */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Page ID</label>
          <input
            type="text"
            value={pageId || ""}
            disabled
            className="w-full border bg-gray-100 rounded px-3 py-2 text-gray-700"
          />
        </div>

        {/* Parent ID */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Parent ID</label>
          <input
            type="text"
            value={parentId || "—"}
            disabled
            className="w-full border bg-gray-100 rounded px-3 py-2 text-gray-700"
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1">Title*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            {loading ? "Updating..." : "Update"}
          </button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>

      {/* Update Path Section */}
      <div className="bg-white shadow-md p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Update Path</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Path (No Space Use "-" hyphen)*
          </label>
          <input
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            placeholder="e.g. blog/janmashtami/"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            checked={updateChildren}
            onChange={() => setUpdateChildren(!updateChildren)}
            className="w-4 h-4"
          />
          <label>Update All Child Pages Path</label>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            {loading ? "Updating..." : "Update"}
          </button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
