import React, { useState, useEffect } from "react";
import {
  placementData,
  buInternationalStars,
  internshipData,
  startupData,
  awardsData,
} from "@/Json/PlacementJsonData";

const PlacementUi = () => {
  const [activeTab, setActiveTab] = useState("Placements");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ["Placements", "BU International", "Internships", "Startups", "Awards"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % getDataForActiveTab().length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab]);

  const getDataForActiveTab = () => {
    switch (activeTab) {
      case "Placements":
        return placementData;
      case "BU International":
        return buInternationalStars;
      case "Internships":
        return internshipData;
      case "Startups":
        return startupData;
      case "Awards":
        return awardsData;
      default:
        return placementData;
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - getItemsPerPage() < 0 ? getDataForActiveTab().length - getItemsPerPage() : prevIndex - getItemsPerPage()
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + getItemsPerPage() >= getDataForActiveTab().length ? 0 : prevIndex + getItemsPerPage()
    );
  };

  const getItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      return 4; // 4 items for large screens (lg)
    } else if (window.innerWidth >= 640) {
      return 2; // 2 items for medium screens (sm - md)
    } else {
      return 1; // 1 item for small screens (sm)
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center mb-8">
        <div className="bg-red-600 text-white p-4 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold">450+</h3>
          <p className="text-sm lg:text-base">Companies for Placements</p>
        </div>
        <div className="bg-red-800 text-white p-4 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold">₹ 1.37 Cr/Yr.</h3>
          <p className="text-sm lg:text-base">Highest Package</p>
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold">₹ 26.20 LPA</h3>
          <p className="text-sm lg:text-base">Top 10 Percentile</p>
        </div>
        <div className="bg-sky-400 text-white p-4 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold">₹ 10 LPA</h3>
          <p className="text-sm lg:text-base">1 in 3 B.Tech Students</p>
        </div>
        <div className="bg-blue-900 text-white p-4 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold">₹ 4.2 Lac pm</h3>
          <p className="text-sm lg:text-base">Highest Internship Stipend</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm sm:text-base rounded-md ${activeTab === tab ? "bg-red-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Placement Cards Section */}
      <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Cards Wrapper with Flexbox */}
        <div className="flex items-center justify-between w-full">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="bg-white transform text-2xl sm:text-4xl text-gray-600 hover:text-gray-800 transition z-10"
          >
            &lt;
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
            {getDataForActiveTab()
              .slice(currentIndex, currentIndex + getItemsPerPage())
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden mx-auto w-full max-w-xs transform transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 sm:h-56 lg:h-64 w-full object-cover transform transition-all duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="p-4 sm:p-6 text-center">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 lg:mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm lg:text-base text-red-500">{item.course}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="bg-white transform text-2xl sm:text-4xl text-gray-600 hover:text-gray-800 transition z-10"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementUi;
