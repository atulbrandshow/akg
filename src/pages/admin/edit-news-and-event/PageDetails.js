"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { API_NODE_URL } from "@/configs/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

// Import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), { 
  ssr: false,
  loading: () => <div className="p-4 bg-gray-100 rounded">Loading editor...</div>
});

// FileUpload component (unchanged)
const FileUpload = ({ label, id, onChange, selectedFile, dimensions }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="border-2 border-dashed border-gray-300 p-4 text-center">
        <p className="text-sm text-gray-500 mb-2">
          File should be an image with webp extension
        </p>
        <p className="text-sm text-gray-500 mb-2">{dimensions}</p>
        <input
          type="file"
          accept="image/webp"
          onChange={onChange}
          className="hidden"
          id={id}
        />
        <label
          htmlFor={id}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
        >
          Choose file
        </label>
        <span className="text-sm text-gray-500">
          {selectedFile?.name || "No file chosen"}
        </span>
      </div>
    </div>
  );
};

export default function PageDetailsForm({ page_id }) {
  const router = useRouter();
  const editor = useRef(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    page_id: "",
    parent_id: "",
    languageId: "",
    price: "",
    name: "",
    parentPage: "",
    date: "",
    shortdesc: "",
    description: "",
    banner_img: "",
    featured_img: "",
    mainReportImage: "",
    galleryimg: [],
    type: "",
    // ... other fields
  });

  // Jodit editor configuration
  const editorConfig = {
    readonly: false,
    height: 400,
    toolbarAdaptive: false,
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'align', 'outdent', 'indent', '|',
      'table', 'link', '|',
      'undo', 'redo', '|',
      'hr', 'eraser', 'fullsize'
    ],
    style: {
      border: '1px solid #e2e8f0',
      borderRadius: '0.375rem'
    }
  };

  const fetchParent = async (parent_id) => {
    if (!parent_id) return "";
    try {
      const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${parent_id}`);
      const result = await response.json();
      return result?.data?.name || "";
    } catch (err) {
      console.error("Error fetching parent:", err);
      return "";
    }
  };

  useEffect(() => {
    if (!page_id) return;

    const fetchPageData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${page_id}`);
        const data = await response.json();

        if (data.status) {
          const parent_id = data?.data?.parent_id;
          const parentPageName = parent_id !== 0 ? await fetchParent(parent_id) : data?.data?.name;

          setFormData({
            ...data.data,
            parentPage: parentPageName,
            date: data.data.date ? new Date(data.data.date).toISOString().split("T")[0] : "",
            galleryimg: data.data.galleryimg || [],
          });
        } else {
          toast.error("Failed to fetch page details.");
        }
      } catch (error) {
        console.error("Error fetching page details:", error);
        toast.error("Error fetching page details");
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [page_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [field]: e.target.files[0] }));
    }
  };

  const handleGalleryImg = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ 
        ...prev, 
        galleryimg: [...prev.galleryimg, ...files] 
      }));
    }
  };

  const handleEditorChange = (value, field) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const insertPage = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.status) {
        toast.success("Page updated successfully");
        setTimeout(() => router.push("/admin/highlight-banner-list"), 2000);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error updating page:", error);
      toast.error("An error occurred while processing your request.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertPage();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg cursor-pointer hover:bg-red-200 transition-colors">
        Click Here to Generate Page Meta Using AI (Artificial Intelligence)
      </div>
      <h2 className="text-2xl font-bold mb-6">Edit Page Details</h2>

      <div className="space-y-6">
        {/* Basic Details */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Basic Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Parent Page
              </label>
              <input
                type="text"
                name="parentPage"
                value={formData.parentPage}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Page Details */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Page Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Page Title*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Page Date*
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Page Type*
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Announcement">Announcement</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Jodit Editors */}
        <section className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description*
            </label>
            <div className="border rounded overflow-hidden">
              <JoditEditor
                ref={editor}
                value={formData.shortdesc}
                config={editorConfig}
                onBlur={(value) => handleEditorChange(value, "shortdesc")}
                onChange={(value) => handleEditorChange(value, "shortdesc")}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Page Description*
            </label>
            <div className="border rounded overflow-hidden">
              <JoditEditor
                ref={editor}
                value={formData.description}
                config={editorConfig}
                onBlur={(value) => handleEditorChange(value, "description")}
                onChange={(value) => handleEditorChange(value, "description")}
              />
            </div>
          </div>
        </section>

        {/* File Uploads */}
        <section className="grid grid-cols-3 gap-4">
          <FileUpload
            label="Upload Banner*"
            id="banner_img"
            onChange={(e) => handleFileChange(e, "banner_img")}
            selectedFile={formData.banner_img}
            dimensions="(936 W X 337 H)"
          />
          <FileUpload
            label="Upload Featured Image*"
            id="featured_img"
            onChange={(e) => handleFileChange(e, "featured_img")}
            selectedFile={formData.featured_img}
            dimensions="(100 W x 75 H)"
          />
          <FileUpload
            label="Upload Main Report Image*"
            id="mainReportImage"
            onChange={(e) => handleFileChange(e, "mainReportImage")}
            selectedFile={formData.mainReportImage}
            dimensions="(936 W X 337 H)"
          />
        </section>

        {/* Gallery Images */}
        <section className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gallery Images
            </label>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center">
              <p className="text-sm text-gray-500 mb-2">
                File should be an image with webp extension
              </p>
              <p className="text-sm text-gray-500 mb-2">(100 W x 75 H)</p>
              <input
                type="file"
                accept="image/webp"
                multiple
                onChange={handleGalleryImg}
                className="hidden"
                id="galleryimg"
              />
              <label
                htmlFor="galleryimg"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
              >
                Choose files
              </label>
              <div className="text-sm text-gray-500 mt-2">
                {formData.galleryimg.length > 0 ? (
                  formData.galleryimg.map((file, index) => (
                    <p key={index}>{file.name}</p>
                  ))
                ) : (
                  "No files chosen"
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded-xl uppercase font-novaSemi text-sm mt-4 hover:bg-blue-600 hover:scale-105 transition duration-200 ease-linear"
          >
            Update Page
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </form>
  );
}