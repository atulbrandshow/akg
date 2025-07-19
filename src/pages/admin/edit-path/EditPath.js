"use client";

import { useState } from "react";

export default function EditPath() {
  const [type, setType] = useState("blogs");
  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");
  const [updateChildren, setUpdateChildren] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Update Name Section */}
      <div className="bg-white shadow-md p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Update Name</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Select Type*</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="blogs">Blogs | blogs</option>
            {/* Add more options if needed */}
          </select>
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
          <button className="bg-blue-900 text-white px-6 py-2 rounded">Update</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded">Cancel</button>
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
          <button className="bg-blue-900 text-white px-6 py-2 rounded">Update</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}
