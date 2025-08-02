"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import {
  Home,
  School,
  BriefcaseBusiness,
  Users,
  LogOut,
  CalendarRange,
  ChevronUp,
  ChevronDown,
  RefreshCcwDot,
  FilePlus2,
  LayoutDashboard,
  BellDot,
  Download,
  Notebook,
  Newspaper,
  Waypoints,
  NotepadText,
  Book,
  LibraryBig,
} from "lucide-react"
import { API_NODE_URL } from "@/configs/config"
import Image from "next/image"

const navSections = [
  {
    title: "Overview",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/admin",
      },
      {
        icon: Users,
        label: "Online Application",
        href: "/admin/online-applications"
      },
    ],
  },
  {
    title: "Content Management",
    items: [
      {
        icon: FilePlus2,
        label: "Page",
        href: "/admin/page-list"
      },
      {
        icon: Newspaper,
        label: "News",
        href: "/admin/news-list"
      },
      {
        icon: Waypoints,
        label: "Article",
        href: "/admin/article-list"
      },
      {
        icon: CalendarRange,
        label: "Event",
        href: "/admin/event-list"
      },
      {
        icon: RefreshCcwDot,
        label: "Circular",
        href: "/admin/circular-list"
      },
      {
        icon: BellDot,
        label: "Announcement",
        href: "/admin/announcement-list"
      },
      {
        icon: NotepadText,
        label: "Notice",
        href: "/admin/notice-list"
      },
      {
        icon: School,
        label: "Schools",
        href: "/admin/school-list"
      },
      {
        icon: LibraryBig,
        label: "Departments",
        href: "/admin/department-list"
      },
      {
        icon: Book,
        label: "Programs",
        href: "/admin/program-list"
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        icon: Download,
        label: "Download Center",
        nestedLinks: [
          { label: "Add Download Center", href: "/admin/create-download-center" },
          { label: "List of Download Center", href: "/admin/download-center-list" },
        ],
      },
      {
        icon: Notebook,
        label: "Highlight Banner",
        nestedLinks: [
          { label: "Add Highlight Banner", href: "/admin/create-highlight-banner" },
          {
            label: "List of Highlight Banner",
            href: "/admin/highlight-banner-list",
          },
        ],
      },
    ],
  },
  {
    title: "Academic Management",
    items: [
      {
        icon: Users,
        label: "Faculty",
        nestedLinks: [
          { label: "Add Faculty", href: "/admin/create-faculty" },
          { label: "List of Faculty", href: "/admin/faculty-list" },
        ],
      },
      {
        icon: Users,
        label: "Topper Management",
        nestedLinks: [
          { label: "Toppers", href: "/admin/topper-managment" },
        ],
      },
    ],
  },
]

export default function SideBar({ onLogout }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedNavSections, setExpandedNavSections] = useState({ 0: true, 1: true, 2: true, 3: true }) // Dashboard section expanded by default

  useEffect(() => {
    const userDataDATA = localStorage.getItem("user")
    if (!userDataDATA) {
      router.push("/admin")
    }
  }, [router])

  const toggleSection = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const toggleNavSection = (sectionIndex) => {
    setExpandedNavSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }))
  }

  const isActive = (href) => pathname === href

  const handleLogoutClick = async () => {
    if (!window.confirm("Are you sure you want to logout?")) {
      return
    }

    try {
      const res = await fetch(`${API_NODE_URL}auth/logout`, {
        credentials: "include",
      })

      if (res.status === 200) {
        localStorage.removeItem("user")
        onLogout() // Call the parent logout handler
        router.push("/admin")
      } else {
        // Even if server logout fails, clear local storage and logout
        localStorage.removeItem("user")
        onLogout()
        router.push("/admin")
      }
    } catch (error) {
      console.error("Logout error: ", error)
      // Fallback: clear local storage and logout even if API call fails
      localStorage.removeItem("user")
      onLogout()
      router.push("/admin")
    }
  }

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? "w-80" : "w-20"
        }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {/* AKG Logo */}
        <div className={`flex items-center space-x-3 ${isOpen ? "block" : "hidden"}`}>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <Image src="/image/AKGEC_LOGO.webp" className="rounded-full" height={50} width={50} alt="AKG Logo" />
          </div>
          <div>
            <h1 className="text-xl font-novaBold whitespace-nowrap">Admin Panel</h1>
            <p className="text-xs text-gray-400 font-novaReg">Management System</p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"}
            />
          </svg>
        </button>
      </div>

      {/* User Info */}
      {/* {isOpen && (
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-novaSemi text-sm">
                {user?.name?.charAt(0) || user?.email?.charAt(0) || "A"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-novaSemi text-white truncate">{user?.name || "Admin User"}</p>
              <p className="text-xs text-gray-400 truncate">{user?.email || "admin@akg.edu"}</p>
            </div>
          </div>
        </div>
      )} */}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="p-4 space-y-1">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Collapsible Section Title */}
              <div
                className={`mb-3 ${isOpen ? "block" : "hidden"} cursor-pointer`}
                onClick={() => toggleNavSection(sectionIndex)}
              >
                <div className="flex items-center justify-between px-2 py-3 rounded hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-sm font-novaSemi text-gray-400 uppercase tracking-wider">{section.title}</h3>
                  <div className="transition-transform duration-200">
                    {expandedNavSections[sectionIndex] ? (
                      <ChevronUp className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Collapsible Section Items */}
              <div
                className={`overflow-y-auto scrollbar-hidden transition-all duration-300 ${expandedNavSections[sectionIndex] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {!item.nestedLinks ? (
                        <Link
                          href={item.href}
                          className={`p-3 flex items-center rounded-lg transition-colors duration-200 ${isActive(item.href) ? "bg-blue-600 text-white shadow-lg" : "hover:bg-gray-700 text-gray-300"
                            }`}
                        >
                          <item.icon className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
                          <span className={`${isOpen ? "block" : "hidden"} font-novaSemi text-sm`}>{item.label}</span>
                        </Link>
                      ) : (
                        <div>
                          <div
                            onClick={() => toggleSection(sectionIndex, itemIndex)}
                            className={`p-3 flex justify-between items-center rounded-lg cursor-pointer transition-colors duration-200 ${expandedSections[`${sectionIndex}-${itemIndex}`]
                              ? "bg-gray-700 text-white"
                              : "hover:bg-gray-700 text-gray-300"
                              }`}
                          >
                            <div className="flex items-center">
                              <item.icon className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
                              <span className={`${isOpen ? "block" : "hidden"} font-novaSemi text-sm`}>{item.label}</span>
                            </div>
                            {isOpen && (
                              <div className="transition-transform duration-200">
                                {expandedSections[`${sectionIndex}-${itemIndex}`] ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </div>
                            )}
                          </div>

                          {/* Nested Links */}
                          <ul
                            className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${expandedSections[`${sectionIndex}-${itemIndex}`] && isOpen
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                              }`}
                          >
                            {item.nestedLinks.map((nestedItem, nestedIndex) => (
                              <li key={nestedIndex}>
                                <Link
                                  href={nestedItem.href}
                                  className={`pl-11 pr-3 py-2 block rounded-lg font-novaSemi text-sm transition-colors duration-200 ${isActive(nestedItem.href)
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "text-gray-300 hover:bg-gray-600 hover:text-white"
                                    }`}
                                >
                                  {nestedItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section Separator - only show if section is expanded */}
              {sectionIndex < navSections.length - 1 && expandedNavSections[sectionIndex] && (
                <div className="mt-2 mb-4 border-t border-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center p-3 font-novaSemi rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-300 hover:text-white"
            >
              <Home className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
              <span className={isOpen ? "block" : "hidden"}>Home</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogoutClick}
              className="flex items-center w-full p-3 font-novaSemi rounded-lg hover:bg-red-600 transition-colors duration-200 text-gray-300 hover:text-white"
            >
              <LogOut className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
              <span className={isOpen ? "block" : "hidden"}>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
