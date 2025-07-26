"use client";

import { BadgePlus } from "lucide-react";
import { useState } from "react";

export default function TopperForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    rollNo: "",
    school: "",
    department: "",
    batch: "",
    examName: "",
    subjectWiseMarks: [{ subject: "", marks: "" }],
    totalMarks: "",
    grade: "",
    topperCategory: "School Level",
    rank: "",
    percentage: "",
    remarks: "",
    award: "",
    awardedOn: "",
    profileImage: "",
    guardianContact: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const handleSubjectWiseMarksChange = (index, field, value) => {
    const updatedMarks = [...formData.subjectWiseMarks];
    updatedMarks[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      subjectWiseMarks: updatedMarks,
    }));
  };

  const addSubjectRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      subjectWiseMarks: [
        ...prevData.subjectWiseMarks,
        { subject: "", marks: "" },
      ],
    }));
  };

  const isAddButtonDisabled = () => {
    const lastEntry =
      formData.subjectWiseMarks[formData.subjectWiseMarks.length - 1];
    return !lastEntry.subject || !lastEntry.marks;
  };

  const removeSubjectRow = (index) => {
    if (index === 0) return;
    const updatedMarks = formData.subjectWiseMarks.filter(
      (_, i) => i !== index
    );
    setFormData((prevData) => ({
      ...prevData,
      subjectWiseMarks: updatedMarks,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 w-full">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
            <BadgePlus />
            <h2 className="font-novaSemi text-xl text-white tracking-wide">
              Add Topper
            </h2>
          </div>
        </div>
      </div>
      <div className="relative py-3 max-w-4xl">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="mx-auto">
            <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
              <div className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Existing Fields */}
                <div className="flex flex-col">
                  <label className="leading-loose">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Topper's first name"
                    required
                  />
                </div>

                {/* New Fields */}
                <div className="flex flex-col">
                  <label className="leading-loose">Batch</label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Batch (e.g., 2023)"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Exam Name</label>
                  <input
                    type="text"
                    name="examName"
                    value={formData.examName}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Exam Name"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <label className="leading-loose">Subject Wise Marks</label>
                    {formData.subjectWiseMarks.map((row, index) => (
                      <div key={index} className="flex space-x-4 mb-2">
                        <input
                          type="text"
                          value={row.subject}
                          onChange={(e) =>
                            handleSubjectWiseMarksChange(
                              index,
                              "subject",
                              e.target.value
                            )
                          }
                          placeholder="Subject"
                          className="px-4 py-2 border border-gray-300 rounded-md w-1/2"
                        />
                        <input
                          type="text"
                          value={row.marks}
                          onChange={(e) =>
                            handleSubjectWiseMarksChange(
                              index,
                              "marks",
                              e.target.value
                            )
                          }
                          placeholder="Marks"
                          className="px-4 py-2 border border-gray-300 rounded-md w-1/2"
                        />
                        <button
                          type="button"
                          onClick={() => removeSubjectRow(index)}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addSubjectRow}
                      className={`mt-2 text-blue-500 ${
                        isAddButtonDisabled()
                          ? "cursor-not-allowed text-gray-400"
                          : ""
                      }`}
                      disabled={isAddButtonDisabled()}
                    >
                      Add Subject
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Total Marks</label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={formData.totalMarks}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Total Marks"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Rank</label>
                  <input
                    type="text"
                    name="rank"
                    value={formData.rank}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Rank"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Percentage</label>
                  <input
                    type="text"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Percentage"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Remarks</label>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Remarks"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Award</label>
                  <input
                    type="text"
                    name="award"
                    value={formData.award}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Award (if any)"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Profile Image</label>
                  <input
                    type="file"
                    name="profileImage"
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Guardian Contact</label>
                  <input
                    type="tel"
                    name="guardianContact"
                    value={formData.guardianContact}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Guardian Contact Number"
                  />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
