"use client";

import React, { useState } from "react";
import PageDetailsForm from "./PageDetails";
import { API_NODE_URL } from "@/configs/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const CreateCirculer = () => {
  const [showPageDetails, setShowPageDetails] = useState(false);
  const [allPages, setAllPages] = useState([]); // To hold all pages from API
  const [displayedPages, setDisplayedPages] = useState([]); // To hold currently displayed pages
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [pageIndex, setPageIndex] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [title, setTitle] = useState("");
  const [pageType, setPageType] = useState("");
  const [allData, setAllData] = useState({});

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

      if (fetchedPages.length === 0) {
        setAllPages([]);
        setDisplayedPages([{ name: "This is parent page", reportId: null }]);
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

  // Handle selection of a suggestion
  const handleSuggestionClick = (page) => {
    console.log(page);

    setSearchValue(page.name); // Show the name in the input
    setSelectedPage(page); // Set the selected page
    setShowDropdown(false); // Hide the dropdown after selection
  };

  // Handle 'Show More' button click
  const handleShowMore = () => {
    const newIndex = pageIndex + 10;
    setDisplayedPages(allPages.slice(0, newIndex)); // Show next 10 pages
    setPageIndex(newIndex); // Update index
    if (newIndex >= allPages.length) {
      setHasMore(false); // Hide 'Show More' if no more pages
    }
  };

  const handleAddClick = async () => {
    if (!pageType) {
      toast.warning("Please select page type");
      return;
    }
    if (!selectedPage) {
      toast.warning("Please select a parent page.");
      return;
    }
    if (!title) {
      toast.warning("Please enter a title.");
      return;
    }

    const payload = {
      parent_id: selectedPage?.page_id,
      name: title,
      type: pageType,
    };

    const progressBar = document.getElementById("progress-bar");

    try {
      progressBar.style.width = "0%";
      progressBar.style.transition = "none";
      requestAnimationFrame(() => {
        progressBar.style.transition = "width 0.5s ease";
        progressBar.style.width = "100%";
      });

      const response = await fetch(`${API_NODE_URL}slug/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status) {
        setAllData(result?.data);
        toast.success("Page added Successfully");
        setTimeout(() => {
          setShowPageDetails(true);
        }, 1000);
      } else if (result.message === 'Slug already exists') {
        setAllData({});
        toast.warning("Page already exists")
      } else {
        setAllData({});
        toast.error("Failed to Add Page");
      }
    } catch (err) {
      console.error("Error: ", err);
      toast.error("An error occurred while processing your request.");
    } finally {
      progressBar.style.width = "0%";
    }
  };

  return (
    <div className="w-full">
      <div id="progress-bar" className="fixed top-0 left-0 h-1 bg-red-500 z-50"></div>
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-add"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
            <h2 className="font-novaSemi text-xl text-white tracking-wide">
              Add Circuler
            </h2>
          </div>
        </div>
      </div>
      {!showPageDetails && (
        <div className="max-w-md bg-white shadow-md rounded-2xl p-6">
          <form className="space-y-4">
            <div className="relative">
              <label
                htmlFor="parent-page"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Choose Parent Page
              </label>
              <input
                id="parent-page"
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search and Choose Page"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Dropdown for suggestions */}
              {showDropdown && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                  {displayedPages.map((page, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(page)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    >
                      {/* Display both name and page_id */}
                      {page.name}{" "}
                      {page?.page_id && ` - Page Id : ${page.page_id}`}
                    </li>
                  ))}
                </ul>
              )}

              {/* 'Show More' button */}
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
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title*
              </label>
              <input
                id="title"
                type="text"
                value={title}
                placeholder="Write a title..."
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="page-type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Page Type*
              </label>
              <select
                id="page-type"
                value={pageType}
                onChange={(e) => setPageType(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Page Type</option>
                <option value="Circuler">Circuler</option>
              </select>
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
                  setShowPageDetails(false);
                  setSearchValue("");
                  setTitle("");
                  setSelectedPage(null);
                  setPageType(""); // Reset to default type
                  setShowDropdown(false);
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      )}
      {showPageDetails && (
        <PageDetailsForm allData={allData} parentPage={selectedPage} />
      )}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default CreateCirculer;
