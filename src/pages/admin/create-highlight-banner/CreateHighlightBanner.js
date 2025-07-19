"use client";

import React, { useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const CreateHighlightBanner = () => {
  const router = useRouter();
  const [allPages, setAllPages] = useState([]);
  const [displayedPages, setDisplayedPages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [pageIndex, setPageIndex] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const fetchPages = async (searchTerm = "") => {
    try {
      const response = await fetch(`${API_NODE_URL}slug/getParents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchTerm, page: 1, limit: 10 }),
      });
      const data = await response.json();
      const fetchedPages = data.data.pages || [];

      if (fetchedPages.length === 1) {
        setAllPages([]);
        setDisplayedPages([]);
        setHasMore(false);
      } else {
        setAllPages(fetchedPages);
        setDisplayedPages(fetchedPages.slice(0, 10));
        setHasMore(fetchedPages.length > 10);
      }
    } catch (error) {
      console.error("Error fetching parent pages:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length > 0) {
      fetchPages(value);
      setShowDropdown(true);
    } else {
      setDisplayedPages(allPages.slice(0, 10));
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (page) => {
    setSearchValue(page.name);
    setSelectedPage(page);
    setShowDropdown(false);
  };

  const handleShowMore = () => {
    const newIndex = pageIndex + 10;
    setDisplayedPages(allPages.slice(0, newIndex));
    setPageIndex(newIndex);
    if (newIndex >= allPages.length) {
      setHasMore(false);
    }
  };

  const handleAddClick = async () => {
    if (!selectedPage || !bannerImage || !description || !link) {
      toast.warning(
        "All fields are required: pageid, banner, description, and link."
      );
      return;
    }
    const payload = {
      pageid: selectedPage.page_id,
      description,
      link,
      banner: "/this is a dummy banner url",
    };
    try {
      const response = await fetch(`${API_NODE_URL}highlight-banner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status) {
        toast.success("Highlight banner added successfully.");
        setTimeout(() => {
          router.push("/admin/highlight-banner-list");
        }, 2000);
      } else {
        toast.error(result.message || "Failed to add highlight banner.");
      }
    } catch (err) {
      console.error("Error: ", err);
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <h2 className="font-novaSemi text-xl text-white tracking-wide">
          Add Highlight Banner
        </h2>
      </div>
      <div className="max-w-md bg-white shadow-md rounded-2xl p-6">
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="parent-page"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Choose Page
            </label>
            <input
              id="parent-page"
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Search and Choose Page"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                {displayedPages.length > 0 &&
                  displayedPages.map(
                    (page, index) =>
                      page.page_id !== 0 && (
                        <li
                          key={index}
                          onClick={() => handleSuggestionClick(page)}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                          {page.name}{" "}
                          {page?.page_id && ` - Page Id: ${page.page_id}`}
                        </li>
                      )
                  )}
                {displayedPages.length === 0 && (
                  <li className="px-4 py-2">No results found</li>
                )}
              </ul>
            )}
            {hasMore && displayedPages.length > 0 && (
              <button
                type="button"
                onClick={handleShowMore}
                className="mt-2 text-blue-500 hover:underline"
              >
                Show More
              </button>
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
              onClick={handleAddClick}
              type="button"
              className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md uppercase font-novaSemi text-sm mt-4 hover:bg-green-600 hover:scale-105 transition duration-200 ease-linear"
            >
              Add
            </button>
            <button
              type="button"
              className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md uppercase font-novaSemi text-sm mt-4 hover:bg-red-600 hover:scale-105 transition duration-200 ease-linear"
              onClick={() => {
                setSearchValue("");
                setSelectedPage(null);
                setBannerImage(null);
                setDescription("");
                setLink("");
                setShowDropdown(false);
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CreateHighlightBanner;
