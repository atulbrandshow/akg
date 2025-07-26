"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const EditHighlightBanner = () => {
  const searchParams = useSearchParams(); // Use for query parameters
  const router = useRouter(); // Use for navigation
  const _id = searchParams.get("_id"); // Get `_id` from query parameters

  const [displayedPages, setDisplayedPages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [pageName, setPageName] = useState(null);
  useEffect(() => {
    if (_id) {
      fetchHighlightBannerById(_id);
      setIsEditMode(true);
    }
  }, [_id]);
  const fetchPage = async (pageid) => {
    if (pageid) {
      try {
        const response = await fetch(
          `${API_NODE_URL}slug/getbyid?page_id=${pageid}`, {
            credentials: "include",
          }
        );
        const result = await response.json();
        return result?.data?.name || "";
      } catch (err) {
        console.error("Error fetching parent:", err);
        return "";
      }
    }
    return "";
  };
  // Fetch the existing highlight banner details
  const fetchHighlightBannerById = async (id) => {
    try {
      const response = await fetch(
        `${API_NODE_URL}highlight-banner?_id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.status && data.data) {
        const { pageid, description, link, banner } = data.data;
        setSelectedPage({ page_id: pageid, name: `Page ${pageid}` });
        setSearchValue(`Page ${pageid}`);
        setDescription(description);
        setLink(link);
        setBannerImage(banner); // Assuming it's a URL or file path
        const name = await fetchPage(pageid);
        setPageName(name);
      } else {
        toast.error("Failed to fetch highlight banner details.");
      }
    } catch (error) {
      console.error("Error fetching highlight banner by id:", error);
      toast.error("An error occurred while fetching highlight banner details.");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length > 0) {
      fetchPages(value);
      setShowDropdown(true);
    } else {
      setDisplayedPages([]);
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (page) => {
    setSearchValue(page.name);
    setSelectedPage(page);
    setShowDropdown(false);
  };

  const handleUpdateClick = async () => {
    if (!selectedPage || !description || !link) {
      toast.warning("All fields are required: pageid, description, and link.");
      return;
    }

    const payload = {
      _id,
      pageid: selectedPage.page_id,
      description,
      link,
      banner: "/this is a dummy banner url", // Include existing banner or placeholder
    };

    try {
      const response = await fetch(`${API_NODE_URL}highlight-banner/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const result = await response.json();
      if (result.status) {
        toast.success("Highlight banner updated successfully.");
        setTimeout(() => {
          router.push("/admin/highlight-banner-list");
        }, [2000]);
      } else {
        toast.error(result.message || "Failed to update highlight banner.");
      }
    } catch (err) {
      console.error("Error: ", err);
      toast.error("An error occurred while updating the highlight banner.");
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <h2 className="font-novaSemi text-xl text-white tracking-wide">
          {isEditMode ? "Edit Highlight Banner" : "Add Highlight Banner"}
        </h2>
      </div>
      <div className="max-w-md bg-white shadow-md rounded-2xl p-6">
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="parent-page"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Selected Page
            </label>
            <input
              disabled
              id="parent-page"
              type="text"
              value={pageName || searchValue}
              onChange={handleInputChange}
              placeholder="Search and Choose Page"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                {displayedPages.map((page, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(page)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    {page.name} {page.page_id && ` - Page Id: ${page.page_id}`}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label
              htmlFor="bannerImage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Banner Image
            </label>
            <input
              type="file"
              id="bannerImage"
              onChange={(e) => setBannerImage(e.target.files[0])}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
              placeholder="Description"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Link
            </label>
            <input
              id="link"
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://example.com"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleUpdateClick}
              type="button"
              className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md uppercase font-novaSemi text-sm mt-4 hover:bg-green-600 hover:scale-105 transition duration-200 ease-linear"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHighlightBanner;
