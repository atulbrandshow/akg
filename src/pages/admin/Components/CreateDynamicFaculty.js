"use client"

import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { uploadImages } from "@/utills/ImageUpload"

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading editor...</span>
        </div>
    ),
})

const ImagePreview = ({ file, imageUrl, onDelete, label, isUploading }) => {
    const [previewUrl, setPreviewUrl] = useState(null)

    React.useEffect(() => {
        if (imageUrl) {
            // If imageUrl already includes IMAGE_PATH, use it as is, otherwise prepend IMAGE_PATH
            const fullUrl = imageUrl?.startsWith("http") ? imageUrl : `${IMAGE_PATH}${imageUrl}`
            setPreviewUrl(fullUrl)
        } else if (file && typeof file === "object") {
            const url = URL.createObjectURL(file)
            setPreviewUrl(url)
            return () => URL.revokeObjectURL(url)
        }
    }, [file, imageUrl])

    if (!file && !imageUrl) return null

    return (
        <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-novaSemi text-gray-700 mb-2">{label}</p>
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <img
                                src={previewUrl || "/placeholder.svg?height=64&width=64"}
                                alt="Preview"
                                className="w-16 h-16 object-cover rounded-lg border"
                                onError={(e) => {
                                    e.target.src = "/placeholder.svg?height=64&width=64"
                                }}
                            />
                            {isUploading && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-600 truncate">
                                {typeof file === "string" ? "Uploaded Image" : file?.name || "Image"}
                            </p>
                            {file?.size && <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>}
                            {isUploading && <p className="text-xs text-blue-500">Uploading...</p>}
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onDelete}
                    disabled={isUploading}
                    className="ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Delete image"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

const SearchableDropdown = ({
    label,
    value,
    onChange,
    onInputChange,
    options,
    showDropdown,
    onToggleDropdown,
    placeholder,
    required = false,
    error,
}) => {
    return (
        <div className="relative">
            <label className="block text-sm font-novaSemi text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={onInputChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
            {showDropdown && options.length > 0 && (
                <div className="absolute z-20 w-full bg-white border border-gray-300 font-novaReg rounded-lg mt-1 max-h-64 overflow-auto shadow-lg">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => onToggleDropdown(option)}
                            className="cursor-pointer px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                        >
                            <div className="font-novaSemi text-gray-900">{option.name}</div>
                            <div className="text-sm text-gray-500">{option.type}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default function CreateFacultyForm({ type, componentType }) {
    const searchParams = useSearchParams()
    const page_id = searchParams.get("page_id")
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [errors, setErrors] = useState({})

    // Form states
    const [isEditMode, setIsEditMode] = useState(!!page_id)
    const [loading, setLoading] = useState(!!page_id)

    // Upload states
    const [uploadingStates, setUploadingStates] = useState({})
    const [allData, setAllData] = useState({})

    // Social Links state
    const [socialLinks, setSocialLinks] = useState([])
    const [socialLinkInput, setSocialLinkInput] = useState("")
    const [qualificationInput, setQualificationInput] = useState("");


    const [formData, setFormData] = useState({
        // Personal Information
        firstName: "",
        lastName: "",
        emailAddress: "",
        designation: "",
        // Academic Information - separate selections
        selectedSchool: null,
        selectedDepartment: null,
        selectedProgram: null,
        subjectsTaught: "",
        // Additional Information
        profilePicture: "",
        socialLinks: [],
        bio: "",
        // Backend fields
        page_id: "",
        parent_id: "",
        languageId: 1,
        name: "",
        parentPage: "",
        pageTitle: "",
        date: "",
        shortdesc: "",
        description: "",
        banner_img: "",
        featured_img: "",
        mainReportImage: "",
        tag1: "", // School name
        tag2: "", // Department name
        tag3: "", // Program name
        video_url: "",
        featured_status: "",
        type: "",
        metatitle: "",
        metadesc: "",
        keywords_tag: "",
        // Social media URLs in params
        param1: "", // Social Link 1
        param2: "", // Social Link 2
        param3: "", // Social Link 3
        param4: "", // Subjects Taught
        param5: "", // Additional info
        qualification: [], // Add this line for qualification array
        param9: "",
    })

    // Add separate states for each dropdown
    const [schoolSearchValue, setSchoolSearchValue] = useState("")
    const [departmentSearchValue, setDepartmentSearchValue] = useState("")
    const [programSearchValue, setProgramSearchValue] = useState("")
    const [showSchoolDropdown, setShowSchoolDropdown] = useState(false)
    const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
    const [showProgramDropdown, setShowProgramDropdown] = useState(false)
    const [schoolPages, setSchoolPages] = useState([])
    const [departmentPages, setDepartmentPages] = useState([])
    const [programPages, setProgramPages] = useState([])


    // Fetch functions
    const fetchSchools = async (searchTerm = "") => {
        try {
            const response = await fetch(`${API_NODE_URL}slug/getParents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ query: searchTerm, page: 1, limit: 10, type: ["School"] }),
            })
            const data = await response.json()
            const fetchedPages = data.data.pages || []
            setSchoolPages(fetchedPages)
        } catch (error) {
            console.error("Error fetching schools:", error)
        }
    }

    const fetchDepartments = async (searchTerm = "") => {
        try {
            const response = await fetch(`${API_NODE_URL}slug/getParents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ query: searchTerm, page: 1, limit: 10, type: ["Department"] }),
            })
            const data = await response.json()
            const fetchedPages = data.data.pages || []
            setDepartmentPages(fetchedPages)
        } catch (error) {
            console.error("Error fetching departments:", error)
        }
    }

    const fetchPrograms = async (searchTerm = "") => {
        try {
            const response = await fetch(`${API_NODE_URL}slug/getParents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ query: searchTerm, page: 1, limit: 10, type: ["Program"] }),
            })
            const data = await response.json()
            const fetchedPages = data.data.pages || []
            setProgramPages(fetchedPages)
        } catch (error) {
            console.error("Error fetching programs:", error)
        }
    }

    useEffect(() => {
        fetchSchools()
        fetchDepartments()
        fetchPrograms()
        if (isEditMode && page_id) {
            fetchExistingData()
        }
    }, [page_id, isEditMode])

    const fetchExistingData = async () => {
        if (!page_id) return
        setLoading(true)
        try {
            const response = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${page_id}`, {
                credentials: "include",
            })
            const result = await response.json()
            if (result.status && result.data) {
                const data = result.data;
                console.log(data);

                const qualificationArray = data.param9
                    ? data.param9.split(',').map(q => q.trim()).filter(q => q)
                    : [];

                setFormData((prev) => ({
                    ...prev,
                    page_id: data.page_id,
                    parent_id: data.parent_id,
                    firstName: data.param7 || "",
                    lastName: data.param8 || "",
                    emailAddress: data.param6 || "",
                    designation: data.param5 || "",
                    subjectsTaught: data.param4 || "",
                    profilePicture: data.banner_img || "",
                    bio: data.shortdesc || "",
                    tag1: data.tag1 || "",
                    tag2: data.tag2 || "",
                    tag3: data.tag3 || "",
                    name: data.name || "",
                    parentPage: data.parentPage || "",
                    pageTitle: data.pageTitle || "",
                    date: data.date || "",
                    shortdesc: data.shortdesc || "",
                    description: data.description || "",
                    banner_img: data.banner_img || "",
                    featured_img: data.featured_img || "",
                    mainReportImage: data.mainReportImage || "",
                    video_url: data.video_url || "",
                    featured_status: data.featured_status || "",
                    type: data.type || "",
                    metatitle: data.metatitle || "",
                    metadesc: data.metadesc || "",
                    keywords_tag: data.keywords_tag || "",
                    param1: data.param1 || "",
                    param2: data.param2 || "",
                    param3: data.param3 || "",
                    param4: data.param4 || "",
                    param5: data.param5 || "",
                    qualification: qualificationArray,
                    param9: data.param9 || "",
                }))


                // Set social links from params
                const socialLinksArray = [data.param1, data.param2, data.param3].filter((link) => link && link.trim())
                setSocialLinks(socialLinksArray)

                // Set search values for dropdowns
                if (data.tag1) {
                    setSchoolSearchValue(data.tag1)
                }
                if (data.tag2) {
                    setDepartmentSearchValue(data.tag2)
                }
                if (data.tag3) {
                    setProgramSearchValue(data.tag3)
                }
            }
        } catch (error) {
            console.error("Error fetching existing data:", error)
            toast.error("Failed to load existing data")
        } finally {
            setLoading(false)
        }
    }

    // Handler functions
    const handleSchoolInputChange = (e) => {
        const value = e.target.value
        setSchoolSearchValue(value)
        if (value.length > 0) {
            fetchSchools(value)
            setShowSchoolDropdown(true)
        } else {
            setShowSchoolDropdown(false)
        }
    }

    const handleDepartmentInputChange = (e) => {
        const value = e.target.value
        setDepartmentSearchValue(value)
        if (value.length > 0) {
            fetchDepartments(value)
            setShowDepartmentDropdown(true)
        } else {
            setShowDepartmentDropdown(false)
        }
    }

    const handleProgramInputChange = (e) => {
        const value = e.target.value
        setProgramSearchValue(value)
        if (value.length > 0) {
            fetchPrograms(value)
            setShowProgramDropdown(true)
        } else {
            setShowProgramDropdown(false)
        }
    }

    const handleSchoolSuggestionClick = (page) => {
        setSchoolSearchValue(page.name)
        setFormData((prev) => ({
            ...prev,
            selectedSchool: page,
            tag1: page.name,
            parent_id: page.page_id, // Use school as parent
            parentPage: page.name,
        }))
        setShowSchoolDropdown(false)
    }

    const handleDepartmentSuggestionClick = (page) => {
        setDepartmentSearchValue(page.name)
        setFormData((prev) => ({
            ...prev,
            selectedDepartment: page,
            tag2: page.name,
        }))
        setShowDepartmentDropdown(false)
    }

    const handleProgramSuggestionClick = (page) => {
        setProgramSearchValue(page.name)
        setFormData((prev) => ({
            ...prev,
            selectedProgram: page,
            tag3: page.name,
        }))
        setShowProgramDropdown(false)
    }

    // Social links handlers
    const handleSocialLinkAdd = () => {
        if (socialLinkInput.trim() && !socialLinks.includes(socialLinkInput.trim())) {
            const newLinks = [...socialLinks, socialLinkInput.trim()]
            setSocialLinks(newLinks)
            setFormData((prev) => ({
                ...prev,
                socialLinks: newLinks,
                param1: newLinks[0] || "",
                param2: newLinks[1] || "",
                param3: newLinks[2] || "",
            }))
            setSocialLinkInput("")
        }
    }

    const handleSocialLinkRemove = (linkToRemove) => {
        const newLinks = socialLinks.filter((link) => link !== linkToRemove)
        setSocialLinks(newLinks)
        setFormData((prev) => ({
            ...prev,
            socialLinks: newLinks,
            param1: newLinks[0] || "",
            param2: newLinks[1] || "",
            param3: newLinks[2] || "",
        }))
    }

    const handleSocialLinkKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSocialLinkAdd()
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleFileChange = async (e, field) => {
        const file = e.target.files[0]
        if (file) {
            setUploadingStates((prev) => ({
                ...prev,
                [field]: true,
            }))

            try {
                const imageUrl = await uploadImages(file)
                setFormData((prev) => ({
                    ...prev,
                    [field]: imageUrl,
                }))
                toast.success("Image uploaded successfully!")
            } catch (error) {
                console.error("Upload error:", error)
                toast.error("Failed to upload image")
            } finally {
                setUploadingStates((prev) => ({
                    ...prev,
                    [field]: false,
                }))
            }
        }
    }

    const handleDeleteFile = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: "",
        }))
    }

    const handleBioChange = (newContent) => {
        setFormData((prev) => ({
            ...prev,
            bio: newContent,
        }))
    }

    // Add these handler functions
    const handleQualificationAdd = () => {
        if (qualificationInput.trim() && !formData.qualification.includes(qualificationInput.trim())) {
            const newQualifications = [...formData.qualification, qualificationInput.trim()];
            setFormData(prev => ({
                ...prev,
                qualification: newQualifications,
                param9: newQualifications.join(', ') // Store as comma-separated string in param9
            }));
            setQualificationInput("");
        }
    };

    const handleQualificationRemove = (qualToRemove) => {
        const newQualifications = formData.qualification.filter(q => q !== qualToRemove);
        setFormData(prev => ({
            ...prev,
            qualification: newQualifications,
            param9: newQualifications.join(', ') // Update param9 when removing
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        // Validation
        const newErrors = {}
        if (!formData.firstName) newErrors.firstName = "First name is required"
        if (!formData.lastName) newErrors.lastName = "Last name is required"
        // if (!formData.emailAddress) newErrors.emailAddress = "Email address is required"
        if (!formData.designation) newErrors.designation = "Designation is required"
        if (!isEditMode && !formData.selectedSchool) newErrors.selectedSchool = "Please select a school"
        // if (!formData.subjectsTaught) newErrors.subjectsTaught = "Subjects taught is required"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setSubmitting(false)
            return
        }

        setErrors({})

        const progressBar = document.getElementById("progress-bar")
        try {
            progressBar.style.width = "0%"
            progressBar.style.transition = "none"
            requestAnimationFrame(() => {
                progressBar.style.transition = "width 0.5s ease"
                progressBar.style.width = "50%"
            })

            if (isEditMode) {
                // Edit mode - only update
                const updatePayload = {
                    page_id: formData.page_id,
                    parent_id: formData.parent_id,
                    languageId: 1,
                    name: `${formData.firstName} ${formData.lastName}`,
                    parentPage: formData.parentPage,
                    pageTitle: `${formData.firstName} ${formData.lastName}`,
                    date: formData.date || new Date().toISOString().split("T")[0],
                    shortdesc: formData.bio,
                    description: formData.bio,
                    banner_img: formData.profilePicture,
                    featured_img: formData.profilePicture,
                    mainReportImage: formData.profilePicture,
                    tag1: formData.tag1,
                    tag2: formData.tag2,
                    tag3: formData.tag3,
                    video_url: formData.video_url || "",
                    featured_status: formData.featured_status || "No",
                    type: formData.type,
                    metatitle: `${formData.firstName} ${formData.lastName} - ${formData.designation}`,
                    metadesc: `${formData.firstName} ${formData.lastName}, ${formData.designation}. Subjects: ${formData.subjectsTaught}`,
                    keywords_tag: `${formData.firstName}, ${formData.lastName}, ${formData.designation}, ${formData.tag1}, ${formData.subjectsTaught}`,
                    ComponentType: componentType,
                    param1: formData.socialLinks[0] || "",
                    param2: formData.socialLinks[1] || "",
                    param3: formData.socialLinks[2] || "",
                    param4: formData.subjectsTaught,
                    param5: formData.designation,
                    param6: formData.emailAddress,
                    param7: formData.firstName,
                    param8: formData.lastName,
                    param9: formData.qualification.join(', '),
                }

                const updateResponse = await fetch(`${API_NODE_URL}slug/update`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(updatePayload),
                })

                const updateResult = await updateResponse.json()
                if (updateResult.status) {
                    progressBar.style.width = "100%"
                    toast.success(`${type} updated successfully!`)
                    setTimeout(() => {
                        router.push(`/admin/${type?.toLowerCase().replace(/\s+/g, "-")}-list`)
                    }, 1000)
                } else {
                    throw new Error(updateResult.message)
                }
            } else {
                // Create mode
                const createPayload = {
                    parent_id: formData.selectedSchool?.page_id,
                    name: `${formData.firstName} ${formData.lastName}`,
                    type: type,
                    ComponentType: componentType,
                }

                const createResponse = await fetch(`${API_NODE_URL}slug/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(createPayload),
                })

                const createResult = await createResponse.json()
                if (!createResult.status) {
                    if (createResult.message === "Page already exists with this title") {
                        toast.warn("Name Already Exists")
                    }
                    return
                }

                setAllData(createResult?.data)
                progressBar.style.width = "75%"

                const updatePayload = {
                    page_id: createResult?.data?.page_id,
                    parent_id: createResult?.data?.parent_id,
                    languageId: 1,
                    name: `${formData.firstName} ${formData.lastName}`,
                    parentPage: 0,
                    pageTitle: `${formData.firstName} ${formData.lastName}`,
                    date: new Date().toISOString().split("T")[0],
                    shortdesc: formData.bio,
                    description: formData.bio,
                    banner_img: formData.profilePicture,
                    featured_img: formData.profilePicture,
                    mainReportImage: formData.profilePicture,
                    tag1: formData.tag1,
                    tag2: formData.tag2,
                    tag3: formData.tag3,
                    video_url: "",
                    featured_status: "No",
                    type: createResult?.data?.type,
                    metatitle: `${formData.firstName} ${formData.lastName} - ${formData.designation}`,
                    metadesc: `${formData.firstName} ${formData.lastName}, ${formData.designation}. Subjects: ${formData.subjectsTaught}`,
                    keywords_tag: `${formData.firstName}, ${formData.lastName}, ${formData.designation}, ${formData.tag1}, ${formData.subjectsTaught}`,
                    ComponentType: componentType,
                    param1: formData.socialLinks[0] || "",
                    param2: formData.socialLinks[1] || "",
                    param3: formData.socialLinks[2] || "",
                    param4: formData.subjectsTaught,
                    param5: formData.designation,
                    param6: formData.emailAddress,
                    param7: formData.firstName,
                    param8: formData.lastName,
                    param9: formData.qualification.join(', '),
                }

                const updateResponse = await fetch(`${API_NODE_URL}slug/update`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(updatePayload),
                })

                const updateResult = await updateResponse.json()
                if (updateResult.status) {
                    progressBar.style.width = "100%"
                    toast.success(`${type} created successfully!`)
                    setTimeout(() => {
                        router.push(`/admin/${type?.toLowerCase().replace(/\s+/g, "-")}-list`)
                    }, 1000)
                } else {
                    throw new Error(updateResult.message)
                }
            }
        } catch (error) {
            console.error(`Error ${isEditMode ? "updating" : "creating"} faculty:`, error)
            toast.error(`Error: ${error.message}`)
        } finally {
            setTimeout(() => {
                progressBar.style.width = "0%"
            }, 1000)
            setSubmitting(false)
        }
    }

    const handleCancel = () => {
        router.back()
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading faculty data...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="">
            <div id="progress-bar" className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-500"></div>
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
            <div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Personal Information Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                                <h2 className="text-lg font-novaBold text-gray-900">Personal Information</h2>
                                {isEditMode && <span className="text-sm text-blue-600 bg-blue-100 px-2 font-novaReg py-1 rounded">Edit Mode</span>}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                        className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    />
                                    {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter last name"
                                        className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    />
                                    {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="emailAddress"
                                        name="emailAddress"
                                        value={formData.emailAddress}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    />
                                    {errors.emailAddress && <p className="text-sm text-red-600 mt-1">{errors.emailAddress}</p>}
                                </div>
                                <div>
                                    <label htmlFor="designation" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                        Designation <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="designation"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        placeholder="Enter designation"
                                        className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    />
                                    {errors.designation && <p className="text-sm text-red-600 mt-1">{errors.designation}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Academic Information Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                                <h2 className="text-lg font-novaBold text-gray-900">Academic Information</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <SearchableDropdown
                                    label="Select School"
                                    value={schoolSearchValue}
                                    onChange={handleSchoolInputChange}
                                    onInputChange={handleSchoolInputChange}
                                    options={schoolPages}
                                    showDropdown={showSchoolDropdown}
                                    onToggleDropdown={handleSchoolSuggestionClick}
                                    placeholder="Search and select school..."
                                    required={!isEditMode}
                                    error={errors.selectedSchool}
                                />
                                <SearchableDropdown
                                    label="Select Department"
                                    value={departmentSearchValue}
                                    onChange={handleDepartmentInputChange}
                                    onInputChange={handleDepartmentInputChange}
                                    options={departmentPages}
                                    showDropdown={showDepartmentDropdown}
                                    onToggleDropdown={handleDepartmentSuggestionClick}
                                    placeholder="Search and select department..."
                                />
                                <SearchableDropdown
                                    label="Select Program"
                                    value={programSearchValue}
                                    onChange={handleProgramInputChange}
                                    onInputChange={handleProgramInputChange}
                                    options={programPages}
                                    showDropdown={showProgramDropdown}
                                    onToggleDropdown={handleProgramSuggestionClick}
                                    placeholder="Search and select program..."
                                />
                            </div>
                            <div>
                                <label htmlFor="subjectsTaught" className="block text-sm font-novaSemi text-gray-700 mb-2">
                                    Subjects Taught <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="subjectsTaught"
                                    name="subjectsTaught"
                                    value={formData.subjectsTaught}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Enter subjects taught (comma separated)"
                                    className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none"
                                />
                                {errors.subjectsTaught && <p className="text-sm text-red-600 mt-1">{errors.subjectsTaught}</p>}
                            </div>
                        </div>

                        {/* Additional Information Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                                <h2 className="text-lg font-novaBold text-gray-900">Additional Information</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-novaSemi text-gray-700 mb-2">Profile Picture</label>
                                    <div className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100">
                                        <input
                                            type="file"
                                            id="profilePicture"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(e, "profilePicture")}
                                            className="hidden"
                                            disabled={uploadingStates.profilePicture}
                                        />
                                        <label
                                            htmlFor="profilePicture"
                                            className={`cursor-pointer inline-flex items-center px-4 py-2 text-sm font-novaSemi rounded-lg transition-colors ${uploadingStates.profilePicture
                                                ? "bg-gray-400 text-white cursor-not-allowed"
                                                : "bg-blue-600 text-white hover:bg-blue-700"
                                                }`}
                                        >
                                            {uploadingStates.profilePicture ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                                                    Uploading...
                                                </>
                                            ) : (
                                                "Choose File"
                                            )}
                                        </label>
                                        <p className="text-xs text-gray-500 mt-2">No file chosen</p>
                                    </div>
                                    <ImagePreview
                                        imageUrl={formData.profilePicture}
                                        onDelete={() => handleDeleteFile("profilePicture")}
                                        label="Profile Picture"
                                        isUploading={uploadingStates.profilePicture}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Social Links Field (keep existing) */}
                                    <div>
                                        <label className="block text-sm font-novaSemi text-gray-700 mb-2">Social Links</label>
                                        <div className="space-y-3">
                                            <div className="flex space-x-2">
                                                <input
                                                    type="url"
                                                    value={socialLinkInput}
                                                    onChange={(e) => setSocialLinkInput(e.target.value)}
                                                    onKeyPress={handleSocialLinkKeyPress}
                                                    placeholder="Enter social media links"
                                                    className="flex-1 px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleSocialLinkAdd}
                                                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            {socialLinks.length > 0 && (
                                                <div className="space-y-2">
                                                    {socialLinks.map((link, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
                                                        >
                                                            <span className="text-sm text-gray-700 truncate">{link}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleSocialLinkRemove(link)}
                                                                className="text-red-500 hover:text-red-700 ml-2"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M6 18L18 6M6 6l12 12"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Qualifications Field (new implementation) */}
                                    <div>
                                        <label className="block text-sm font-novaSemi text-gray-700 mb-2">Qualifications</label>
                                        <div className="space-y-3">
                                            <div className="flex space-x-2">
                                                <input
                                                    type="text"
                                                    value={qualificationInput}
                                                    onChange={(e) => setQualificationInput(e.target.value)}
                                                    onKeyPress={(e) => {
                                                        if (e.key === 'Enter') {
                                                            e.preventDefault();
                                                            handleQualificationAdd();
                                                        }
                                                    }}
                                                    placeholder="Add qualification (e.g. B.Tech)"
                                                    className="flex-1 px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleQualificationAdd}
                                                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            {formData.qualification.length > 0 && (
                                                <div className="space-y-2">
                                                    {formData.qualification.map((qual, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
                                                        >
                                                            <span className="text-sm text-gray-700">{qual}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleQualificationRemove(qual)}
                                                                className="text-red-500 hover:text-red-700 ml-2"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M6 18L18 6M6 6l12 12"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bio Section */}
                            <div>
                                <label className="block text-sm font-novaSemi text-gray-700 mb-2">Bio</label>
                                <div className="border border-gray-300 font-novaReg rounded-lg overflow-hidden">
                                    <JoditEditor value={formData.bio} onBlur={handleBioChange} />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-6 py-3 border border-gray-300 font-novaReg text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={submitting || Object.values(uploadingStates).some(Boolean)}
                                className="inline-flex items-center px-6 py-3 bg-blue-600 font-novaSemi text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                                        {isEditMode ? "Updating..." : "Creating..."}
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d={
                                                    isEditMode
                                                        ? "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        : "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                }
                                            />
                                        </svg>
                                        {isEditMode ? "Update Faculty Member" : "Add Faculty Member"}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
