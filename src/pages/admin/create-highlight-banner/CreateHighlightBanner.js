"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { uploadImages } from "@/utills/ImageUpload";

const CreateHighlightBanner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('_id');
  const isEdit = Boolean(editId);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);
  const [schools, setSchools] = useState([]); // State to hold school options
  const [streamId, setStreamId] = useState("");
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    bannerAlt: "",
    status: true,
    size: "", // Add this line
  });
  const SIZE_OPTIONS = {
    "small": { label: "Small (600x300)", width: 600, height: 300 },
    "medium": { label: "Medium (1200x600)", width: 1200, height: 600 },
    "large": { label: "Large (1920x1080)", width: 1920, height: 1080 },
  };


  // UI state
  const [allPages, setAllPages] = useState([]);
  const [displayedPages, setDisplayedPages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  // Validation state
  const [errors, setErrors] = useState({});

  // Load existing banner data for edit
  useEffect(() => {
    if (isEdit && editId) {
      fetchBannerData(editId);
    }
  }, [isEdit, editId]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(
          `${API_NODE_URL}school/search?search=${searchQuery}`, {
          credentials: "include",
        }
        );
        const result = await response.json();
        if (result.status) {
          setSchools(
            Array.isArray(result?.data?.schools) ? result?.data?.schools : []
          );
        } else {
          toast.error(result.message || "Failed to fetch schools.");
          setSchools([]);
        }
      } catch (err) {
        console.error("Error fetching schools:", err);
        toast.error("An error occurred while fetching schools.");
        setSchools([]);
      }
    };
    fetchSchools();
  }, [searchQuery]);
  const handleSchoolSelect = (school) => {
    setStreamId(school._id);
    setSearchQuery(school.name); // Display school name in input
    setShowSchoolDropdown(false); // Hide dropdown
  };

  const uploadBannerImage = async (file) => {
    const urls = await uploadImages([file], 'HighlightBanner')
    return urls[0] || false
  };

  const fetchBannerData = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_NODE_URL}highlight-banner?_id=${id}`, {
        method: 'GET',
        credentials: 'include',
      });

      const data = await response.json();
      if (data.status && data.data) {
        const banner = data.data;
        setFormData({
          title: banner.title || "",
          description: banner.description || "",
          link: banner.link || "",
          bannerAlt: banner.bannerAlt || "",
          status: banner.status,
          stream: banner?.stream?._id
        });
        setSearchQuery(banner?.stream?.name);
        setStreamId(banner?.stream?._id)
        // Set page data
        if (banner.pageid) {
          const pageResponse = await fetch(`${API_NODE_URL}slug/getParents`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ query: "", page: 1, limit: 100 }),
          });
          const pageData = await pageResponse.json();
          const page = pageData.data.pages?.find(p => p.page_id === banner.pageid);
          if (page) {
            setSelectedPage(page);
            setSearchValue(page.name);
          }
        }

        // Set image preview
        if (banner.banner) {
          setImagePreview(`${API_NODE_URL.replace('/api/', '')}${banner.banner}`);
        }
      }
    } catch (error) {
      console.error("Error fetching banner data:", error);
      toast.error("Failed to load banner data");
    } finally {
      setLoading(false);
    }
  };

  const fetchPages = async (searchTerm = "") => {
    try {
      const response = await fetch(`${API_NODE_URL}slug/getParents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchTerm, page: 1, limit: 50 }),
        credentials: "include"
      });
      const data = await response.json();
      const fetchedPages = data.data.pages || [];

      setAllPages(fetchedPages);
      setDisplayedPages(fetchedPages.slice(0, 10));
      setHasMore(fetchedPages.length > 10);
    } catch (error) {
      console.error("Error fetching parent pages:", error);
      toast.error("Failed to fetch pages");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handlePageInputChange = (e) => {
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

  const handleSuggestionClick = (page) => {
    setSearchValue(page.name);
    setSelectedPage(page);
    setShowDropdown(false);
    if (errors.page) {
      setErrors(prev => ({ ...prev, page: "" }));
    }
  };

  const handleShowMore = () => {
    const newIndex = pageIndex + 10;
    setDisplayedPages(allPages.slice(0, newIndex));
    setPageIndex(newIndex);
    if (newIndex >= allPages.length) {
      setHasMore(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only JPEG, JPG, PNG, and WebP images are allowed");
        return;
      }

      // Validate dimensions
      const selectedSize = SIZE_OPTIONS[formData.size];
      if (!selectedSize) {
        toast.error("Please select a size before uploading the image");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          if (img.width !== selectedSize.width || img.height !== selectedSize.height) {
            toast.error(`Image size must be exactly ${selectedSize.width}x${selectedSize.height}`);
          } else {
            setBannerImage(file);
            setImagePreview(e.target.result);
            if (errors.banner) {
              setErrors(prev => ({ ...prev, banner: "" }));
            }
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };


  const validateForm = () => {
    const newErrors = {};

    if (!selectedPage) {
      newErrors.page = "Please select a page";
    }
    if (!formData.size) {
      newErrors.size = "Please select a banner size";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length > 200) {
      newErrors.title = "Title must be less than 200 characters";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }

    if (!formData.link.trim()) {
      newErrors.link = "Link is required";
    } else if (!/^https?:\/\/.+/.test(formData.link)) {
      newErrors.link = "Please enter a valid URL (starting with http:// or https://)";
    }

    if (!isEdit && !bannerImage) {
      newErrors.banner = "Banner image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }
    let bannerUrl;
    if (bannerImage) {
      bannerUrl = await uploadBannerImage(bannerImage);
      if (!bannerUrl) {
        setLoading(false);
        return; // Stop submission if upload failed
      }
    }

    setLoading(true);

    try {
      const formDataToSend = {
        pageid: selectedPage.page_id,
        title: formData.title.trim(),
        description: formData.description.trim(),
        link: formData.link.trim(),
        bannerAlt: formData.bannerAlt.trim(),
        status: formData.status,
        size: formData.size,
        stream: streamId
      };

      if (bannerImage) {
        formDataToSend.banner = bannerUrl; // Make sure this is a URL string, not a File
      }

      if (isEdit) {
        formDataToSend._id = editId;
      }

      const url = isEdit
        ? `${API_NODE_URL}highlight-banner/update`
        : `${API_NODE_URL}highlight-banner`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
        credentials: "include",
      });

      const result = await response.json();

      if (result.status) {
        toast.success(`Highlight banner ${isEdit ? 'updated' : 'added'} successfully!`);
        setTimeout(() => {
          router.push("/admin/highlight-banner-list");
        }, 1500);
      } else {
        toast.error(result.message || `Failed to ${isEdit ? 'update' : 'add'} highlight banner`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while processing your request");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      title: "",
      description: "",
      link: "",
      bannerAlt: "",
      status: true,
    });
    setSearchValue("");
    setSelectedPage(null);
    setBannerImage(null);
    setImagePreview(null);
    setShowDropdown(false);
    setErrors({});
  };

  if (loading && isEdit) {
    return (
      <div className="w-full">
        <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
          <h2 className="font-semibold text-xl text-white tracking-wide">
            Loading Banner Data...
          </h2>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <h2 className="font-semibold text-xl text-white tracking-wide">
          {isEdit ? 'Edit' : 'Add'} Highlight Banner
        </h2>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Page Selection */}
          <div className="relative">
            <label htmlFor="parent-page" className="block text-sm font-medium text-gray-700 mb-2">
              Choose Page <span className="text-red-500">*</span>
            </label>
            <input
              id="parent-page"
              type="text"
              value={searchValue}
              onChange={handlePageInputChange}
              placeholder="Search and Choose Page"
              className={`w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${errors.page ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.page && <p className="text-red-500 text-sm mt-1">{errors.page}</p>}

            {showDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto shadow-lg">
                {displayedPages.length > 0 ? (
                  displayedPages.map((page, index) =>
                    page.page_id !== 0 && (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(page)}
                        className="cursor-pointer px-4 py-3 hover:bg-purple-50 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium">{page.name}</div>
                        <div className="text-sm text-gray-500">Page ID: {page.page_id}</div>
                      </li>
                    )
                  )
                ) : (
                  <li className="px-4 py-3 text-gray-500">No results found</li>
                )}
                {hasMore && displayedPages.length > 0 && (
                  <li className="px-4 py-2 border-t">
                    <button
                      type="button"
                      onClick={handleShowMore}
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Show More
                    </button>
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className="relative">
            <label htmlFor="schoolSearch" className="block text-sm font-novaSemi text-gray-700 mb-2">
              Search School
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                id="schoolSearch"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSchoolDropdown(true)}
                placeholder="Search and select school..."
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
            {showSchoolDropdown && (
              <div className="absolute z-20 w-full bg-white border-2 border-gray-200 rounded-xl mt-2 max-h-64 overflow-auto shadow-2xl">
                {(Array.isArray(schools) ? schools : [])
                  .filter((school) =>
                    school.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((school) => (
                    <div
                      key={school.id}
                      onClick={() => handleSchoolSelect(school)}
                      className="cursor-pointer px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                    >
                      <div className="font-novaSemi text-gray-800">{school.name}</div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter banner title"
              maxLength={200}
              className={`w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <div className="flex justify-between mt-1">
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              <p className="text-gray-400 text-sm ml-auto">{formData.title.length}/200</p>
            </div>
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
              Select Banner Size <span className="text-red-500">*</span>
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className={`w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${errors.size ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">-- Select Size --</option>
              {Object.entries(SIZE_OPTIONS).map(([key, option]) => (
                <option key={key} value={key}>{option.label}</option>
              ))}
            </select>
            {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size}</p>}
          </div>

          {/* Banner Image */}
          <div>
            <label htmlFor="bannerImage" className="block text-sm font-medium text-gray-700 mb-2">
              Banner Image {!isEdit && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-4">
              <input
                type="file"
                id="bannerImage"
                onChange={handleImageChange}
                accept="image/jpeg,image/jpg,image/png,image/webp"
                className={`w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${errors.banner ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.banner && <p className="text-red-500 text-sm">{errors.banner}</p>}
              <p className="text-gray-500 text-sm">
                Supported formats: JPEG, JPG, PNG, WebP. Max size: 5MB
              </p>

              {imagePreview && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Banner preview"
                    className="max-w-full h-48 object-cover rounded-lg border border-gray-300"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Alt Text */}
          <div>
            <label htmlFor="bannerAlt" className="block text-sm font-medium text-gray-700 mb-2">
              Alt Text (for accessibility)
            </label>
            <input
              type="text"
              id="bannerAlt"
              name="bannerAlt"
              value={formData.bannerAlt}
              onChange={handleInputChange}
              placeholder="Describe the image for screen readers"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={`w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none ${errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
              rows="4"
              placeholder="Enter banner description"
              maxLength={500}
            />
            <div className="flex justify-between mt-1">
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              <p className="text-gray-400 text-sm ml-auto">{formData.description.length}/500</p>
            </div>
          </div>

          {/* Link */}
          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
              Link <span className="text-red-500">*</span>
            </label>
            <input
              id="link"
              name="link"
              type="url"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className={`w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${errors.link ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link}</p>}
          </div>


          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-wide hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isEdit ? 'Updating...' : 'Adding...'}
                </div>
              ) : (
                isEdit ? 'Update' : 'Add'
              )}
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-wide hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateHighlightBanner;
