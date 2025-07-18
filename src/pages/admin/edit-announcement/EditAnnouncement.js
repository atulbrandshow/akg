"use client";

import PageDetailsForm from "./PageDetails"; 
import { useSearchParams } from "next/navigation";

const EditAnnouncement = () => {
  const searchParams = useSearchParams();
  const page_id = searchParams.get("page_id");

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
            <h2 className="font-novaSemi text-xl text-white tracking-wide">
              Edit Page
            </h2>
          </div>
        </div>
      </div>
      {page_id ? (
        <PageDetailsForm page_id={page_id} />
      ) : (
        <div className="text-center text-gray-600">Loading page details...</div>
      )}
    </div>
  );
}

export default EditAnnouncement;