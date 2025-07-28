"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { API_NODE_URL } from "@/configs/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

// Import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), { 
  ssr: false,
  loading: () => <div className="p-4 bg-gray-100 rounded">Loading editor...</div>
});


export default function PageDetailsForm({ page_id }) {
  const router = useRouter();
  const editor = useRef();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    page_id: "",
    parent_id: "",
    languageId: "",
    price: "",
    name: "",
    parentPage: "",
    name: "",
    date: "",
    shortdesc: "",
    description: "",
    param1: "",
    paramvalue1: "",
    param_img1: "",
    param_url1: "",
    param2: "",
    paramvalue2: "",
    param_img2: "",
    param_url2: "",
    param3: "",
    paramvalue3: "",
    param_img3: "",
    param_url3: "",
    param4: "",
    paramvalue4: "",
    param_img4: "",
    param_url4: "",
    param5: "",
    paramvalue5: "",
    param_img5: "",
    param_url5: "",
    param6: "",
    paramvalue6: "",
    param_img6: "",
    param_url6: "",
    param7: "",
    paramvalue7: "",
    param_img7: "",
    param_url7: "",
    param8: "",
    paramvalue8: "",
    param_img8: "",
    param_url8: "",
    param9: "",
    paramvalue9: "",
    param_img9: "",
    param_url9: "",
    param10: "",
    paramvalue10: "",
    param_img10: "",
    param_url10: "",
    banner_img: "",
    tag1: "",
    tag2: "",
    tag3: "",
    schemaid: "",
    nic_name: "",
    featured_img: "",
    col_width: "",
    video_url: "",
    old_url: "",
    featured_status: "",
    highlightBanner: "",
    galleryimg: [],
    type: "",
    mainReportImage: "",
    metatitle: "",
    metadesc: "",
    keywords_tag: "",
  });

  const fetchParent = async (parent_id) => {
    if (parent_id) {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${parent_id}`, {
          credentials: "include",
        });
        const result = await response.json();
        return result?.data?.name || "";
      } catch (err) {
        console.error("Error fetching parent:", err);
        return "";
      }
    }
    return "";
  };


  useEffect(() => {
    if (!page_id) return;

    const fetchPageData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_NODE_URL}slug/getbyid?page_id=${page_id}`, {
            credentials: "include",
          }
        );
        const data = await response.json();
        if (data.status) {
          const parent_id = data?.data?.parent_id;
          const parentPageName =
            parent_id !== 0 ? await fetchParent(parent_id) : data?.data?.name;

          setFormData({
            page_id: data?.data?.page_id || "",
            parent_id: data?.data?.parent_id != 0 ? data?.data?.parent_id : 0,
            languageId: data?.data?.languageId || 1,
            price: data?.data?.price || "",
            name: data?.data?.name || "",
            parentPage: parentPageName,
            name: data.data.name || "",
            date: data.data.date ? new Date(data.data.date).toISOString().split("T")[0] : "",
            shortdesc: data?.data?.shortdesc || "",
            description: data?.data?.description || "",

            param1: data?.data?.param1 || "",
            paramvalue1: data?.data?.paramvalue1 || "",
            param_img1: data?.data?.param_img1 || "",
            param_url1: data?.data?.param_url1 || "",

            param2: data?.data?.param2 || "",
            paramvalue2: data?.data?.paramvalue2 || "",
            param_img2: data?.data?.param_img2 || "",
            param_url2: data?.data?.param_url2 || "",

            param3: data?.data?.param3 || "",
            paramvalue3: data?.data?.paramvalue3 || "",
            param_img3: data?.data?.param_img3 || "",
            param_url3: data?.data?.param_url3 || "",

            param4: data?.data?.param4 || "",
            paramvalue4: data?.data?.paramvalue4 || "",
            param_img4: data?.data?.param_img4 || "",
            param_url4: data?.data?.param_url4 || "",

            param5: data?.data?.param5 || "",
            paramvalue5: data?.data?.paramvalue5 || "",
            param_img5: data?.data?.param_img5 || "",
            param_url5: data?.data?.param_url5 || "",

            param6: data?.data?.param6 || "",
            paramvalue6: data?.data?.paramvalue6 || "",
            param_img6: data?.data?.param_img6 || "",
            param_url6: data?.data?.param_url6 || "",

            param7: data?.data?.param7 || "",
            paramvalue7: data?.data?.paramvalue7 || "",
            param_img7: data?.data?.param_img7 || "",
            param_url7: data?.data?.param_url7 || "",

            param8: data?.data?.param8 || "",
            paramvalue8: data?.data?.paramvalue8 || "",
            param_img8: data?.data?.param_img8 || "",
            param_url8: data?.data?.param_url8 || "",

            param9: data?.data?.param9 || "",
            paramvalue9: data?.data?.paramvalue9 || "",
            param_img9: data?.data?.param_img9 || "",
            param_url9: data?.data?.param_url9 || "",

            param10: data?.data?.param10 || "",
            paramvalue10: data?.data?.paramvalue10 || "",
            param_img10: data?.data?.param_img10 || "",
            param_url10: data?.data?.param_url10 || "",

            banner_img: data?.data?.banner_img || "",
            tag1: data?.data?.tag1 || "",
            tag2: data?.data?.tag2 || "",
            tag3: data?.data?.tag3 || "",
            schemaid: data?.data?.schemaid || "",
            nic_name: data?.data?.nic_name || "",
            featured_img: data?.data?.featured_img || "",
            col_width: data?.data?.col_width || "",
            video_url: data?.data?.video_url || "",
            old_url: data?.data?.old_url || "",
            featured_status: data?.data?.featured_status || "",
            highlightBanner: data?.data?.highlightBanner || "",
            galleryimg: data.data.galleryimg,
            type: data.data.type || "",
            mainReportImage: data?.data?.mainReportImage || "",
            metatitle: data?.data?.metatitle || "",
            metadesc: data?.data?.metadesc || "",
            keywords_tag: data?.data?.keywords_tag || "",
          });

        } else {
          alert("Failed to fetch page details.");
        }
      } catch (error) {
        console.error("Error fetching page details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [page_id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.files[0],
    }));
  };

  // Handle gallery images
  const handleGalleryImg = (e, field) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ...files],
    }));
  };

 const handleShortDescChange = (value) => {
    setFormData(prev => ({ ...prev, shortdesc: value || "" }));
  };

  const handleDescChange = (value) => {
    setFormData(prev => ({ ...prev, description: value || "" }));
  };

  const insertPage = async () => {
    if (!formData) {
      alert("Form data is not ready!");
      return;
    }

    try {
      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.status) {
        toast.success("Page edited Successfully");
        setTimeout(() => {
          router.push("/admin/highlight-banner-list");
        }, 2000);
      } else {
        toast.error(`Something went wrong: ${data?.message}`);
      }
    } catch (error) {
      console.error("Error fetching parent pages:", error);
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

      <h2 className="text-2xl font-bold mb-6">Add Page Details</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-4">Basis Detail</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="parentPage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Choose Parent Page
              </label>
              <input
                type="text"
                id="parentPage"
                name="parentPage"
                value={formData.parentPage}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                disabled
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Page Detail</h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Page Title*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="pageDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Page Date*
                </label>
                <input
                  type="date"
                  id="pageDate"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Page Type*
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Page Type</option>
                  <option value="Announcement">Announcement</option>
                </select>
              </div>
            </div>
          </div>
        </section>

       <section className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description*
            </label>
            <JoditEditor
              ref={editor}
              value={formData.shortdesc || ''}
              onBlur={handleShortDescChange}
              onChange={handleShortDescChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Page Description*
            </label>
            <JoditEditor
              ref={editor}
              value={formData.description || ''}
              onBlur={handleDescChange}
              onChange={handleDescChange}
            />
          </div>
        </section>

        <section className="grid grid-cols-4 gap-4">
          <div>
            <label
              htmlFor="tag1"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tag 1
            </label>
            <input
              type="text"
              id="tag1"
              name="tag1"
              value={formData.tag1}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="tag2"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tag 2
            </label>
            <input
              type="text"
              id="tag2"
              name="tag2"
              value={formData.tag2}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="tag3"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tag 3
            </label>
            <input
              type="text"
              id="tag3"
              name="tag3"
              value={formData.tag3}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="schemaid"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Schema ID
            </label>
            <input
              type="number"
              id="schemaid"
              name="schemaid"
              value={formData.schemaid}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </section>

        <section className="grid grid-cols-4 gap-4">
          <div>
            <label
              htmlFor="nic_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nickname
            </label>
            <input
              type="text"
              id="nic_name"
              name="nic_name"
              value={formData.nic_name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="col_width"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Col Width
            </label>
            <input
              type="number"
              id="col_width"
              name="col_width"
              value={formData.col_width}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="featured_status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Featured Status
            </label>
            <select
              id="featured_status"
              name="featured_status"
              value={formData.featured_status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Page Type</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="video_url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Video URL
            </label>
            <input
              type="text"
              id="video_url"
              name="video_url"
              value={formData.video_url}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="old_url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Old URL
            </label>
            <input
              type="text"
              id="old_url"
              name="old_url"
              value={formData.old_url}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </section>

        <section className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="banner"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Banner*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center">
              <p className="text-sm text-gray-500 mb-2">
                File should be an image with webp extension
              </p>
              <p className="text-sm text-gray-500 mb-2">(936 W X 337 H)</p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "banner_img")}
                className="hidden"
                id="banner_img"
              />
              <label
                htmlFor="banner_img"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-500">
                {formData.banner_img
                  ? formData.banner_img.name
                  : "No file chosen"}
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="featuredImage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Featured Image*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center">
              <p className="text-sm text-gray-500 mb-2">
                File should be an image with webp extension
              </p>
              <p className="text-sm text-gray-500 mb-2">(100 W x 75 H)</p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "featured_img")}
                className="hidden"
                id="featured_img"
              />
              <label
                htmlFor="featured_img"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-500">
                {formData.featured_img
                  ? formData.featured_img.name
                  : "No file chosen"}
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="mainReportImage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Main Report Image*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center">
              <p className="text-sm text-gray-500 mb-2">
                File should be an image with webp extension
              </p>
              <p className="text-sm text-gray-500 mb-2">
                (Banner Size: 936 W X 337 H)
              </p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "mainReportImage")}
                className="hidden"
                id="uploadMainReportImage"
              />
              <label
                htmlFor="uploadMainReportImage"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-500">
                {formData.mainReportImage
                  ? formData.mainReportImage.name
                  : "No file chosen"}
              </span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <label
              htmlFor="highlightBanner"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Highlight Banner
            </label>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center">
              <p className="text-sm text-gray-500 mb-2">
                File should be an image with webp extension
              </p>
              <p className="text-sm text-gray-500 mb-2">(936 W X 337 H)</p>
              <input
                type="file"
                accept="image/webp"
                onChange={(e) => handleFileChange(e, "highlightBanner")}
                className="hidden"
                id="highlightBanner"
              />
              <label
                htmlFor="highlightBanner"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-500">
                {formData.highlightBanner
                  ? formData.highlightBanner.name
                  : "No file chosen"}
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="galleryimg"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
                onChange={(e) => handleGalleryImg(e, "galleryimg")}
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
                {formData.galleryimg.length > 0
                  ? formData.galleryimg.map((file, index) => (
                    <p key={index}>{file.name}</p>
                  ))
                  : "No files chosen"}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Page Meta Detail</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="metatitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Meta Title*
              </label>
              <input
                type="text"
                id="metatitle"
                name="metatitle"
                value={formData.metatitle}
                onChange={handleChange}
                className="w-full p-2 border rounded h-12" // Set a fixed height
              />
            </div>
            <div>
              <label
                htmlFor="metadesc"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Meta Description*
              </label>
              <textarea
                id="metadesc"
                name="metadesc"
                rows={1} // Set rows to 1
                value={formData.metadesc}
                onChange={handleChange}
                className="w-full p-2 border rounded resize-none h-12" // Set a fixed height and make it non-resizable
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="keywords_tag"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Keywords*
              </label>
              <input
                type="text"
                id="keywords_tag"
                name="keywords_tag"
                value={formData.keywords_tag}
                onChange={handleChange}
                className="w-full p-2 border rounded h-12" // Set a fixed height
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Params</h3>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 10 }, (_, index) => {
              const paramIndex = index + 1; // 1-based index
              return (
                <React.Fragment key={paramIndex}>
                  <div>
                    <label
                      htmlFor={`param${paramIndex}`}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Param {paramIndex}
                    </label>
                    <input
                      type="text"
                      id={`param${paramIndex}`}
                      name={`param${paramIndex}`}
                      value={formData[`param${paramIndex}`]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`paramvalue${paramIndex}`}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Value
                    </label>
                    <input
                      type="text"
                      id={`paramvalue${paramIndex}`}
                      name={`paramvalue${paramIndex}`}
                      value={formData[`paramvalue${paramIndex}`]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`param_img${paramIndex}`}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Upload Image
                    </label>
                    <div className="border border-gray-200 py-2.5 px-1 rounded-md">
                      <input
                        type="file"
                        accept="image/webp"
                        onChange={(e) =>
                          handleFileChange(e, `param_img${paramIndex}`)
                        }
                        className="hidden"
                        id={`param_img${paramIndex}`}
                      />
                      <label
                        htmlFor={`param_img${paramIndex}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
                      >
                        Choose file
                      </label>
                      <span className="text-sm text-gray-500">
                        {formData[`param_img${paramIndex}`]
                          ? formData[`param_img${paramIndex}`].name
                          : "No file chosen"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor={`param_url${paramIndex}`}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      URL
                    </label>
                    <input
                      type="text"
                      id={`param_url${paramIndex}`}
                      name={`param_url${paramIndex}`}
                      value={formData[`param_url${paramIndex}`]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded h-12"
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-6 rounded-xl uppercase font-novaSemi text-sm mt-4 hover:bg-blue-600 hover:scale-105 transition duration-200 ease-linear"
        >
          Submit
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </form>
  );
}
