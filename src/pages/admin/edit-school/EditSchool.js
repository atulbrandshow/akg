"use client";

import React, { useEffect, useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useSearchParams } from "next/navigation";

function EditSchool() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const _id = searchParams.get("_id");

  useEffect(() => {
    if (!_id) {
      return;
    }

    const fetchSchool = async () => {
      try {
        const response = await fetch(
          `${API_NODE_URL}school/get-by-id?id=${_id}`
        );
        const result = await response.json();
        console.log(result);

        if (result.status) {
          const school = result.data;
          setFormData({
            name: school.name,
            location: school.location,
            description: school.description,
            yearEstablished: school.yearEstablished,
            schoolType: school.schoolType,
            accreditation: school.accreditation,
            contactNumber: school.contactNumber,
            email: school.email,
            schoolCode: school.schoolCode,
          });
        } else {
          toast.error(result.message || "Failed to fetch school.");
        }
      } catch (err) {
        console.error("Error: ", err);
        toast.error("An error occurred while processing your request.");
      }
    };

    fetchSchool();
  }, [_id]);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    yearEstablished: "",
    schoolType: "",
    accreditation: "",
    contactNumber: "",
    email: "",
    schoolCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

      const response = await fetch(`${API_NODE_URL}school/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, _id }),
      });

      const result = await response.json();
      if (result.status) {
        toast.success("School Updated successfully!");
        setFormData({
          name: "",
          location: "",
          description: "",
          yearEstablished: "",
          schoolType: "",
          accreditation: "",
          contactNumber: "",
          email: "",
          schoolCode: "",
        });
        setTimeout(() => {
          router.push("/admin/school-list");
        }, 2000);
      } else {
        toast.error(result.message || "Failed to add school.");
      }
    } catch (err) {
      console.error("Error: ", err);
      toast.error("An error occurred while processing your request.");
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
          Update School
        </h2>
      </div>
      <div className="max-w-md bg-white shadow-md rounded-2xl p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { label: "School Name", name: "name", type: "text" },
            { label: "Location", name: "location", type: "text" },
            { label: "Description", name: "description", type: "text" },
            {
              label: "Year Established",
              name: "yearEstablished",
              type: "number",
            },
            { label: "Accreditation", name: "accreditation", type: "text" },
            { label: "Contact Number", name: "contactNumber", type: "tel" },
            { label: "Email", name: "email", type: "email" },
            { label: "School Code", name: "schoolCode", type: "text" },
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

          {/* Dropdown for School Type */}
          <div>
            <label
              htmlFor="schoolType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              School Type
            </label>
            <select
              id="schoolType"
              name="schoolType"
              value={formData.schoolType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select school type...
              </option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
              <option value="International">International</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md uppercase font-novaSemi text-sm mt-4 hover:bg-green-600 hover:scale-105 transition duration-200 ease-linear"
          >
            Update School
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

export default EditSchool;
