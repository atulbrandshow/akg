"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
} from "lucide-react"
import { API_NODE_URL } from "@/configs/config"

const navSections = [
  {
    title: "Overview",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/admin",
      },
    ],
  },
  {
    title: "Content Management",
    items: [
      {
        icon: FilePlus2,
        label: "Page",
        nestedLinks: [
          { label: "Add New Page", href: "/admin/create-page" },
          { label: "List of Pages", href: "/admin/page-list" },
        ],
      },
      {
        icon: Newspaper,
        label: "News",
        nestedLinks: [
          { label: "Add News", href: "/admin/create-news" },
          { label: "List of News", href: "/admin/news-list" },
        ],
      },
      {
        icon: Waypoints,
        label: "Article",
        nestedLinks: [
          { label: "Add Article", href: "/admin/create-article" },
          { label: "List of Article", href: "/admin/article-list" },
        ],
      },
      {
        icon: CalendarRange,
        label: "Event",
        nestedLinks: [
          { label: "Add Event", href: "/admin/create-event" },
          { label: "List of Event", href: "/admin/event-list" },
        ],
      },
      {
        icon: RefreshCcwDot,
        label: "Circuler",
        nestedLinks: [
          { label: "Add Circuler", href: "/admin/create-circuler" },
          { label: "List of Circuler", href: "/admin/circuler-list" },
        ],
      },
      {
        icon: BellDot,
        label: "Announcement",
        nestedLinks: [
          { label: "Add Announcement", href: "/admin/create-announcement" },
          { label: "List of Announcement", href: "/admin/announcement-list" },
        ],
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
        icon: School,
        label: "School",
        nestedLinks: [
          { label: "Add School", href: "/admin/create-school" },
          { label: "List of School", href: "/admin/school-list" },
        ],
      },
      {
        icon: BriefcaseBusiness,
        label: "Department",
        nestedLinks: [
          { label: "Add Department", href: "/admin/create-department" },
          { label: "List of Department", href: "/admin/department-list" },
        ],
      },
      {
        icon: Users,
        label: "Faculty",
        nestedLinks: [
          { label: "Add Faculty", href: "/admin/create-faculty" },
          { label: "List of Faculty", href: "/admin/faculty-list" },
        ],
      },
    ],
  },
]

export default function SideBar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [expandedSections, setExpandedSections] = useState({})
  const [trigger, setTrigger] = useState(false);
  const [expandedNavSections, setExpandedNavSections] = useState({ 0: true }) // Dashboard section expanded by default

  useEffect(() => {
    const userDataDATA = localStorage.getItem("user")
    if (!userDataDATA) {
      router.push("/admin")
    }
  }, [])

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

  const isActive = (href) => router.pathname === href

  const handleClick = async () => {
    try {
      const res = await fetch(`${API_NODE_URL}auth/logout`, {
        credentials: "include"
      });
      if (res.status === 200) {
        localStorage.removeItem("user")
        router.push("/")
      }
    } catch (error) {
      console.error("Logout error: ", error)
    }
  }

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? "w-80" : "w-20"
        }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className={`text-2xl font-novaBold ${isOpen ? "block" : "hidden"}`}>Admin Panel</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-lg:block p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                  <h3 className="text-sm font-novaSemi text-gray-400 uppercase">{section.title}</h3>
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
                          className={`p-3 flex items-center rounded-lg transition-colors duration-200 ${isActive(item.href) ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                            }`}
                        >
                          <item.icon className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
                          <span className={`${isOpen ? "block" : "hidden"} font-novaSemi text-sm`}>{item.label}</span>
                        </Link>
                      ) : (
                        <div>
                          <div
                            onClick={() => toggleSection(sectionIndex, itemIndex)}
                            className={`p-3 flex justify-between items-center rounded-lg cursor-pointer transition-colors duration-200 ${expandedSections[`${sectionIndex}-${itemIndex}`] ? "bg-gray-700" : "hover:bg-gray-700"
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
                                  className={`pl-11 pr-3 py-2 block rounded-lg font-medium text-sm transition-colors duration-200 ${isActive(nestedItem.href)
                                    ? "bg-blue-500 text-white"
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
              className="flex items-center p-3 font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Home className={`w-5 h-5 ${isOpen ? "mr-3" : ""}`} />
              <span className={isOpen ? "block" : "hidden"}>Home</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleClick()}
              className="flex items-center w-full p-3 font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
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
