"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useSearchParams } from "next/navigation";

function EditFaculty() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const _id = searchParams.get("_id");
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [searchQuery1, setSearchQuery1] = useState("");
  const [departmentSuggestions, setDepartmentSuggestions] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [schoolSuggestions, setSchoolSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    school: "",
    departments: [], // Now an array for multiple departments
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    hireDate: "",
    salary: "",
    subjectsTaught: "", // Added missing field
    researchInterests: "", // Added missing field
    profilePicture: null, // Added missing field
    socialLinks: "", // Added missing field
  });

  useEffect(() => {
    if (!_id) return;

    const fetchDepartment = async () => {
      try {
        const response = await fetch(
          `${API_NODE_URL}faculty/get-by-id?_id=${_id}`
        );
        const result = await response.json();
        const faculty = result.data || {};
        console.log("Faculty:", faculty);

        if (response.ok && result.status) {
          setFormData({
            _id,
            firstName: faculty.firstName,
            lastName: faculty.lastName,
            email: faculty.email,
            designation: faculty.designation,
            departments: faculty?.department?.map((dept) => dept._id) || [], // Get department IDs
            phoneNumber: faculty.phoneNumber,
            school: faculty.school[0]._id || "", // Get school ID
            address: faculty.address,
            dateOfBirth: faculty.dateOfBirth,
            hireDate: faculty.hireDate,
            salary: faculty.salary,
            subjectsTaught: faculty.subjectsTaught,
            researchInterests: faculty.researchInterests,
            profilePicture: null,
            socialLinks: faculty.socialLinks,
          });
          setSelectedSchool(faculty.school[0] || {});
          setSelectedDepartments(faculty.department || []);
        } else {
          toast.error(result.message || "Failed to fetch Faculty details.");
        }
      } catch (error) {
        console.error("Error fetching Faculty:", error);
        toast.error("An error occurred while fetching Faculty details.");
      }
    };

    fetchDepartment();
  }, [_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData((prev) => ({ ...prev, profilePicture: files[0] }));
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "designation",
      "school",
      "departments", // Ensure at least one department is selected
      "phoneNumber",
      "dateOfBirth",
      "hireDate",
      "salary",
      "subjectsTaught", // Ensure this field is filled
      "researchInterests", // Ensure this field is filled
    ];
    for (const field of requiredFields) {
      if (
        !formData[field] ||
        (field === "departments" && formData[field].length === 0)
      ) {
        toast.error(`Please fill out the ${field} field.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    if (!validateForm()) return;

    try {
      setLoading(true);
      const payload = {
        ...formData,
        department: formData.departments, // Update to use the first department
        profilePicture: "", // Handle file uploads separately if needed
      };

      const response = await fetch(`${API_NODE_URL}faculty/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status) {
        toast.success("Faculty member update successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          designation: "",
          school: "",
          departments: [],
          phoneNumber: "",
          address: "",
          dateOfBirth: "",
          hireDate: "",
          salary: "",
          subjectsTaught: "",
          researchInterests: "",
          profilePicture: null,
          socialLinks: "",
        });
        setDepartmentSuggestions([]);
        setSearchQuery1("");
        setTimeout(() => {
          router.push("/admin/faculty-list");
        }, 2000);
      } else {
        toast.error(result.message || "Failed to update faculty member.");
      }
    } catch (err) {
      console.error("Error: ", err);
      toast.error("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  const searchSchool = async (e) => {
    setSearchQuery1(e.target.value);
    if (e.target.value?.length < 3) return;

    try {
      const response = await fetch(
        `${API_NODE_URL}school/search?search=${searchQuery1}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log("Schools:", result);

      if (result.status) {
        if (searchQuery1 === "") {
          setSchoolSuggestions([]);
          return;
        }
        setSchoolSuggestions(result.data?.schools || []);
      } else {
        setSchoolSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const addSchool = (school) => {
    setSelectedSchool(school);
    setDepartmentSuggestions(school.departments || []);
    setFormData((prev) => ({
      ...prev,
      school: school._id,
    }));
    setSearchQuery1(school.name);
    setSchoolSuggestions([]);
  };

  return (
    <div className="w-full mb-10">
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
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <h2 className="font-novaSemi text-xl text-white tracking-wide">
          Update Faculty Member
        </h2>
      </div>
      <div className="max-w-md bg-white shadow-md rounded-2xl p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Existing Form Fields */}
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Designation", name: "designation", type: "text" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
            { label: "Address", name: "address", type: "text" },
            { label: "Date of Birth", name: "dateOfBirth", type: "date" },
            { label: "Hire Date", name: "hireDate", type: "date" },
            { label: "Salary", name: "salary", type: "number" },
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

          {/* School Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School
            </label>
            <input
              type="text"
              value={searchQuery1}
              onChange={(e) => searchSchool(e)}
              placeholder="Search school..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {schoolSuggestions.length > 0 && (
              <ul className="bg-white border border-gray-300 mt-2 rounded-md shadow-md">
                {schoolSuggestions.map((sc, index) => (
                  <li
                    key={index}
                    onClick={() => addSchool(sc)}
                    className="p-2 cursor-pointer hover:bg-blue-100"
                  >
                    {sc.name}
                  </li>
                ))}
              </ul>
            )}
            {selectedSchool && (
              <ul className="mt-2">
                <li className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                  <span>{selectedSchool?.name}</span>
                </li>
              </ul>
            )}
          </div>
          {/* Department Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Departments
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-2 text-gray-700 border-2 border-gray-400 bg-white  rounded-lg shadow-sm outline-none  sm:text-sm"
                multiple
                onChange={(e) => {
                  const selected = Array.from(e.target.selectedOptions).map(
                    (option) => option.value
                  );
                  setFormData((prev) => ({
                    ...prev,
                    departments: selected,
                  }));
                }} // Update selected departments
                size={5} // Adjust size for visible options
              >
                {departmentSuggestions.map((dept, index) => (
                  <option
                    className="p-2 rounded-lg bg-slate-300 mb-2 "
                    key={index}
                    value={dept._id}
                  >
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
            <label className="block text-sm font-medium text-gray-700 my-2">
              Selected
            </label>
            <ul className="bg-gray-100 p-2 rounded-md">
              {selectedDepartments.map((dept, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>
                    {dept.name}
                    {/* {departmentSuggestions.find((d) => d._id === dept)?.name} */}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Missing Fields: Subjects Taught, Research Interests, Profile Picture, Social Links */}
          <div>
            <label
              htmlFor="subjectsTaught"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subjects Taught
            </label>
            <input
              id="subjectsTaught"
              name="subjectsTaught"
              type="text"
              value={formData.subjectsTaught}
              onChange={handleInputChange}
              placeholder="Enter subjects taught..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="researchInterests"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Research Interests
            </label>
            <input
              id="researchInterests"
              name="researchInterests"
              type="text"
              value={formData.researchInterests}
              onChange={handleInputChange}
              placeholder="Enter research interests..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Picture
            </label>
            <input
              id="profilePicture"
              name="profilePicture"
              type="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="socialLinks"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Social Links
            </label>
            <input
              id="socialLinks"
              name="socialLinks"
              type="text"
              value={formData.socialLinks}
              onChange={handleInputChange}
              placeholder="Enter social links..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg w-full"
            >
              {loading ? "Adding Faculty..." : "Add Faculty"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFaculty;
