"use client";

import React, { useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicPageDetails from "./DynamicPageDetails";
import DynamicSchoolDetails from "./DynamicSchoolDetails";

function CreateSchoolPages({ type, componentType, parentId }) {
    const [showPageDetails, setShowPageDetails] = useState(false);
    const [selectedPage, setSelectedPage] = useState(null);
    const [Name, setTitle] = useState("");
    const [allData, setAllData] = useState({});
    const [errors, setErrors] = useState({});


    const handleAddClick = async () => {
        const newErrors = {};

        if (!Name) {
            newErrors.Name = "Please enter School Name.";
        }

        // If there are any errors, update state and stop execution
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({}); // Clear previous errors

        const payload = {
            parent_id: parentId,
            name: Name,
            type,
            ComponentType: componentType,
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
                if (result.message == "Page already exists with this title") {
                    alert("School Name Already Taken");
                } else {
                    alert(result.message);
                }
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
        setTitle("")
        setSelectedPage(null)
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

                        <div className="flex space-x-4 pt-6">
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
                                    <span>Add {type}</span>
                                </span>
                            </button>
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
                <DynamicSchoolDetails allData={allData} parentPage={selectedPage} type={type} componentType={componentType} />
            )}
        </div>
    );
}

export default CreateSchoolPages;
