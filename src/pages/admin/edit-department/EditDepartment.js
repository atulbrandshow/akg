"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useSearchParams } from "next/navigation";

function EditDepartment() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const _id = searchParams.get("_id");

  const [formData, setFormData] = useState({
    name: "",
    school: "", // Holds selected school ID
    description: "",
    departmentCode: "",
    programsOffered: "",
  });

  const [schools, setSchools] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!_id) return;

    const fetchDepartment = async () => {
      try {
        const response = await fetch(
          `${API_NODE_URL}department/get-by-id?id=${_id}`
        );
        const result = await response.json();

        if (response.ok && result.status) {
          const department = result.data;
          setFormData({
            name: department.name,
            school: department.school, // Assume this is the school ID
            description: department.description,
            departmentCode: department.departmentCode,
            programsOffered: department.programsOffered,
          });
          setSearchQuery(department.schoolName || ""); // Optional school name display
        } else {
          toast.error(result.message || "Failed to fetch department details.");
        }
      } catch (error) {
        console.error("Error fetching department:", error);
        toast.error("An error occurred while fetching department details.");
      }
    };

    fetchDepartment();
  }, [_id]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(
          `${API_NODE_URL}school/search?search=${searchQuery}`
        );
        const result = await response.json();

        if (response.ok && result.status) {
          setSchools(
            Array.isArray(result.data.schools) ? result.data.schools : []
          );
        } else {
          setSchools([]);
          toast.error(result.message || "Failed to fetch schools.");
        }
      } catch (error) {
        console.error("Error fetching schools:", error);
        toast.error("An error occurred while fetching schools.");
        setSchools([]);
      }
    };

    if (searchQuery.trim()) fetchSchools();
  }, [searchQuery]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSchoolSelect = (school) => {
    setFormData((prevState) => ({ ...prevState, school: school }));
    setSearchQuery(school.name);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const progressBar = document.getElementById("progress-bar");

    try {
      progressBar.style.width = "0%";
      progressBar.style.transition = "none";
      requestAnimationFrame(() => {
        progressBar.style.transition = "width 0.5s ease";
        progressBar.style.width = "100%";
      });

      const response = await fetch(`${API_NODE_URL}department/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, _id, school: formData.school._id }),
      });

      const result = await response.json();

      if (response.ok && result.status) {
        toast.success("Department updated successfully!");
        setTimeout(() => {
          router.push("/admin/department-list");
        }, 2000);
      } else {
        toast.error(result.message || "Failed to update department.");
      }
    } catch (error) {
      console.error("Error updating department:", error);
      toast.error("An error occurred while updating the department.");
    } finally {
      progressBar.style.width = "0%";
    }
  };

  return (
    <div className="w-full mb-10">
      <div
        id="progress-bar"
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
      ></div>
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <h2 className="font-novaSemi text-xl text-white tracking-wide">
          Update Department
        </h2>
      </div>
      <div className="max-w-md bg-white shadow-md rounded-2xl p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { label: "Department Name", name: "name", type: "text" },
            { label: "Description", name: "description", type: "text" },
            { label: "Department Code", name: "departmentCode", type: "text" },
            {
              label: "Programs Offered",
              name: "programsOffered",
              type: "text",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleInputChange}
                placeholder={`Enter ${field.label.toLowerCase()}...`}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="schoolSearch"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              School
            </label>
            <input
              id="schoolSearch"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search and select school..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showDropdown && (
              <ul className="border border-gray-300 mt-1 max-h-40 overflow-y-auto rounded-md bg-white shadow-md">
                {schools.map((school) => (
                  <li
                    key={school._id}
                    onClick={() => handleSchoolSelect(school)}
                    className="px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                  >
                    {school.name}
                  </li>
                ))}
              </ul>
            )}
            <li className="px-3 py-2 cursor-pointer bg-green-300 mt-2 rounded-lg  list-none">
              {formData.school.name}
            </li>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md uppercase font-novaSemi text-sm mt-4 hover:bg-green-600 hover:scale-105 transition duration-200 ease-linear"
          >
            Update Department
          </button>
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
}

export default EditDepartment;
