"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DepartmentDynamicPage from "./DepartmentDynamicPage";
import usePermission from "@/hooks/usePermission";

function CreateDynamicDepartment({ type, componentType }) {
    const { hasPermission } = usePermission()
    const [showPageDetails, setShowPageDetails] = useState(false);
    const [allPages, setAllPages] = useState([]);
    const [displayedPages, setDisplayedPages] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [pageIndex, setPageIndex] = useState(10);
    const [hasMore, setHasMore] = useState(true);
    const [selectedPage, setSelectedPage] = useState(null);
    const [Name, setTitle] = useState("");
    const [allData, setAllData] = useState({});
    const [pageType, setPageType] = useState("")

    // Component Type states
    const [allComponents, setAllComponents] = useState([])
    const [displayedComponents, setDisplayedComponents] = useState([])
    const [componentSearchValue, setComponentSearchValue] = useState("")
    const [showComponentDropdown, setShowComponentDropdown] = useState(false)
    const [componentIndex, setComponentIndex] = useState(10)
    const [hasMoreComponents, setHasMoreComponents] = useState(true)
    const [selectedComponentType, setSelectedComponentType] = useState("")
    const [errors, setErrors] = useState({});

    const fetchPages = async (searchTerm = "") => {
        try {
            const response = await fetch(`${API_NODE_URL}slug/getParents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ query: searchTerm, page: 1, limit: 10, type: 'School' }),
            });
            const data = await response.json();
            console.log(data);


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

    const fetchComponents = async (searchTerm = "", page = 1) => {
        try {
            // URL with search parameter
            const url = new URL(`${API_NODE_URL}components/category/Page`);
            url.searchParams.append('page', page);
            url.searchParams.append('limit', 10);
            if (searchTerm) {
                url.searchParams.append('search', searchTerm);
            }

            const response = await fetch(url, {
                credentials: "include",
            });
            const result = await response.json();

            if (result.status) {
                if (page === 1) {
                    setAllComponents(result.data);
                } else {
                    setAllComponents(prev => [...prev, ...result.data]);
                }

                // Update displayed components
                setDisplayedComponents(result.data);

                // Check if more pages exist
                setHasMoreComponents(result.currentPage < result.totalPages);
            }
        } catch (error) {
            console.error("Error fetching components:", error);
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

    const handleComponentInputChange = (e) => {
        const value = e.target.value
        setComponentSearchValue(value)
        if (value.length > 0) {
            fetchComponents(value)
            setShowComponentDropdown(true)
        } else {
            fetchComponents()
            setShowComponentDropdown(false)
        }
    }

    const handleComponentSuggestionClick = (component) => {
        setComponentSearchValue(component.componentName)
        setSelectedComponentType(component.componentName)
        setShowComponentDropdown(false)
    }

    const handleSuggestionClick = (page) => {
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

    const handleShowMoreComponents = () => {
        const newIndex = componentIndex + 10
        setDisplayedComponents(allComponents.slice(0, newIndex))
        setComponentIndex(newIndex)
        if (newIndex >= allComponents.length) {
            setHasMoreComponents(false)
        }
    }

    const handlePageTypeChange = (e) => {
        const value = e.target.value
        setPageType(value)

        // Reset component selection when page type changes
        if (value !== "Page") {
            setSelectedComponentType("")
            setComponentSearchValue("")
        } else {
            // Fetch components when Page is selected
            fetchComponents()
        }
    }


    const handleAddClick = async () => {
        const newErrors = {};

        if (!selectedPage) {
            newErrors.selectedPage = "Please select a parent page.";
        }

        if (!Name) {
            newErrors.Name = "Please enter a Name.";
        }

        if (type === "Page" && !pageType) {
            newErrors.pageType = "Please select page type.";
        }

        if (pageType === "Page" && !selectedComponentType) {
            newErrors.selectedComponentType = "Please select a component type.";
        }

        // If there are any errors, update state and stop execution
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({}); // Clear previous errors

        const payload = {
            parent_id: selectedPage?.page_id,
            name: Name,
            type,
            ComponentType: selectedComponentType,
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
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.status) {
                setAllData(result?.data);
                toast.success(`${type} added Successfully`);
                setShowPageDetails(true);
            } else {
                alert(result.message);
                setAllData({});
            }
        } catch (err) {
            console.error("Error: ", err);
            toast.error("An error occurred while processing your request.");
        } finally {
            progressBar.style.width = "0%"
        }
    };

    const handleClear = () => {
        setShowPageDetails(false)
        setSearchValue("")
        setTitle("")
        setSelectedPage(null)
        setPageType("")
        setShowDropdown(false)
        setSelectedComponentType("")
        setComponentSearchValue("")
        setShowComponentDropdown(false)
    }

    return (
        <div className="w-full">
            <div id="progress-bar" className="fixed top-0 left-0 h-1 bg-red-500 z-50"></div>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-8 shadow-2xl">
                <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-novaBold text-white tracking-wide">Create {type}</h1>
                        <p className="text-blue-100 font-novaReg text-sm mt-1">Add a {type?.toLowerCase()} page to your website structure</p>
                    </div>
                </div>
            </div>
            {!showPageDetails && (
                <div className="bg-white max-w-xl rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form className="space-y-6">
                        <div className="relative">
                            <label htmlFor="parent-page" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                Search And Select School
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="parent-page"
                                    type="text"
                                    value={searchValue}
                                    onChange={handleInputChange}
                                    placeholder="Search and select parent page..."
                                    className="w-full border-2 font-novaReg border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            {errors.selectedPage && <p className="text-sm text-red-600 ml-1 mt-1">{errors.selectedPage}</p>}

                            {showDropdown && (
                                <div className="absolute z-20 w-full bg-white border-2 border-gray-200 rounded-xl mt-2 max-h-64 overflow-auto shadow-2xl">
                                    {displayedPages.map((page, index) => (
                                        page.page_id != 0 &&
                                        <div
                                            key={index}
                                            onClick={() => handleSuggestionClick(page)}
                                            className="cursor-pointer px-5 py-2 hover:bg-blue-100/60 border-b border-gray-200 last:border-b-0 transition-all duration-150 rounded-md hover:shadow-sm group"
                                        >
                                            <div className="font-semibold text-gray-800 text-base group-hover:text-blue-700">
                                                {page.name}
                                            </div>

                                            <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                                {page?.type && (
                                                    <span
                                                        className={`px-2 py-0.5 rounded-full text-xs
                                                        ${page.type === "School" ? "bg-blue-100 text-blue-700" :
                                                                page.type === "Department" ? "bg-green-100 text-green-700" :
                                                                    "bg-gray-100 text-gray-700"}`}
                                                    >
                                                        {page.type}
                                                    </span>

                                                )}
                                                {page?.page_id && (
                                                    <span className="text-xs">ID: <span className="font-medium text-gray-600">{page.page_id}</span></span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {hasMore && displayedPages.length > 0 && (
                                        <button
                                            type="button"
                                            onClick={handleShowMore}
                                            className="w-full px-4 py-3 text-blue-600 hover:bg-blue-50 font-novaReg transition-colors duration-150"
                                        >
                                            Load More Pages
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="Name" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                {type} Name
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="Name"
                                type="text"
                                value={Name}
                                placeholder={`Enter ${type} Name...`}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border-2 border-gray-200 font-novaReg rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                            />
                            {errors.Name && <p className="text-sm text-red-600 ml-1 mt-1">{errors.Name}</p>}
                        </div>

                        {type === "Page" && (
                            <div>
                                <label htmlFor="page-type" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                    Page Type
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <select
                                    id="page-type"
                                    value={pageType}
                                    onChange={handlePageTypeChange}
                                    className="w-full border-2 border-gray-200 font-novaReg rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                                >
                                    <option value="">Select page type...</option>
                                    <option value="Page">Page</option>
                                    <option value="Admission">Admission</option>
                                </select>
                                {errors.pageType && <p className="text-sm text-red-600 ml-1 mt-1">{errors.pageType}</p>}
                            </div>
                        )}

                        {pageType === "Page" && (
                            <div className="relative">
                                <label htmlFor="component-type" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                    Component Type
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        id="component-type"
                                        type="text"
                                        value={componentSearchValue}
                                        onChange={handleComponentInputChange}
                                        placeholder="Search and select component type..."
                                        className="w-full border-2 border-gray-200 font-novaReg rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                                    />
                                    {errors.selectedComponentType && <p className="text-sm text-red-600 ml-1 mt-1">{errors.selectedComponentType}</p>}
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>

                                {showComponentDropdown && (
                                    <div className="absolute z-20 w-full bg-white border-2 border-gray-200 rounded-xl mt-2 max-h-64 overflow-auto shadow-2xl">
                                        {displayedComponents.map((component, index) => (
                                            <div
                                                key={component._id}
                                                onClick={() => handleComponentSuggestionClick(component)}
                                                className="cursor-pointer px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                            >
                                                <div className="font-novaSemi text-gray-800">{component.componentName}</div>
                                            </div>
                                        ))}
                                        {hasMoreComponents && displayedComponents.length > 0 && (
                                            <button
                                                type="button"
                                                onClick={handleShowMoreComponents}
                                                className="w-full px-4 py-3 text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-150"
                                            >
                                                Load More Components
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* <div>
                            <label htmlFor="page-type" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                Page Type
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id="page-type"
                                value={type}
                                disabled
                                className="w-full border-2 border-gray-200 text-gray-500 font-novaSemi rounded-xl py-3 px-4  cursor-not-allowed"
                            >
                            </input>
                        </div> */}

                        <div className="flex space-x-4 pt-6">
                            {
                                hasPermission(`Create ${type}`,'create') &&
                                <button
                                    onClick={handleAddClick}
                                    type="button"
                                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-novaSemi text-sm uppercase tracking-wide hover:from-green-600 hover:to-green-700 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <span className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            ></path>
                                        </svg>
                                        <span>Add Page</span>
                                    </span>
                                </button>
                            }
                            <button
                                type="button"
                                onClick={handleClear}
                                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl font-novaSemi text-sm uppercase tracking-wide hover:from-red-600 hover:to-red-700 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        ></path>
                                    </svg>
                                    <span>Clear Form</span>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {showPageDetails && (
                <DepartmentDynamicPage allData={allData} parentPage={selectedPage} type={type} componentType={componentType} />
            )}
        </div>
    );
}

export default CreateDynamicDepartment;
