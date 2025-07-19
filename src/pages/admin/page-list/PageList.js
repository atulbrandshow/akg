"use client";
import React, { useEffect, useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const PageList = () => {
  const router = useRouter();
  const [newsAndEvents, setNewsAndEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // For progress bar

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${API_NODE_URL}slug/getbytype?type=Admission,Page,Article`
      );
      const data = await response.json();
      setNewsAndEvents(data.data || []);
    } catch (error) {
      console.error("Error fetching news and events:", error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (event) => {
    try {
      setProgress(0);
      requestAnimationFrame(() => {
        setProgress(100);
      });

      const response = await fetch(`${API_NODE_URL}slug/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page_id: event.page_id,
          name: event.name,
          status: false,
          deleteflag: true
        }),
      });

      const data = await response.json();

      if (data.status) {
        toast.success("Page deleted successfully!");
        fetchData();
      } else {
        toast.error(data.message || "Failed to delete page.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete page.");
    } finally {
      setProgress(0);
    }
  };

  return (
    <div className="w-full">
      {/* Progress bar using React state */}
      <div
        className="fixed top-0 left-0 h-1 bg-red-500 z-50"
        style={{
          width: `${progress}%`,
          transition: progress > 0 ? 'width 0.5s ease' : 'none'
        }}
      ></div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <circle cx="4" cy="6" r="1" />
              <circle cx="4" cy="12" r="1" />
              <circle cx="4" cy="18" r="1" />
            </svg>

            <h2 className="font-novaSemi text-xl text-white tracking-wide">
              Page List
            </h2>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto h-[85vh] bg-white rounded-lg shadow-md p-6">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Short Desc</th>
                <th className="border px-4 py-2 text-left">Date</th>
                <th className="border px-4 py-2 text-left">Type</th>
                <th className="border px-4 py-2 text-left">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsAndEvents.length > 0 ? (
                newsAndEvents.map((event) => (
                  <tr key={event._id}>
                    <td className="border px-4 py-2">{event.name}</td>
                    <td
                      className="border px-4 py-2"
                      dangerouslySetInnerHTML={{ __html: event.shortdesc || '' }}
                    ></td>
                    <td className="border px-4 py-2">
                      {event?.date?.split("T")[0]}
                    </td>
                    <td className="border px-4 py-2">{event.type}</td>
                    <td className="border px-4 py-2">
                      {event.status ? "Active" : "Inactive"}
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex justify-center space-x-2">
                        {/* Existing Edit Button */}
                        <button
                          onClick={() =>
                            router.push(
                              `/admin/edit-page?page_id=${event?.page_id}`
                            )
                          }
                          className="bg-green-500 text-black px-3 py-1 rounded-xl flex items-center gap-1 hover:scale-90 transition duration-200 ease-in-out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-pencil"
                          >
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                            <path d="m15 5 4 4" />
                          </svg>
                          Edit
                        </button>

                        {/* New Edit Path Button */}
                        <button
                          onClick={() =>
                            router.push(
                              `/admin/edit-path?page_id=${event?.page_id}`
                            )
                          }
                          className="bg-blue-500 text-white px-3 py-1 rounded-xl flex items-center gap-1 hover:scale-90 transition duration-200 ease-in-out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-route"
                          >
                            <circle cx="6" cy="19" r="3" />
                            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                            <circle cx="18" cy="5" r="3" />
                          </svg>
                          Edit Path
                        </button>

                        {/* Existing Delete Button */}
                        <button
                          onClick={() => handleDelete(event)}
                          className="bg-red-600 text-white px-3 py-1 rounded-xl flex items-center gap-1 hover:scale-90 transition duration-200 ease-in-out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    No pages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
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

export default PageList;