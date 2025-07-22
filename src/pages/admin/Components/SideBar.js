"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Home,
  School,
  BriefcaseBusiness,
  Users,
  LogOut,
  ReplaceAll,
  CalendarRange,
  ChevronUp,
  ChevronDown,
  RefreshCcwDot,
  FilePlus2,
  LayoutDashboard,
  BellDot,
  Download,
  Notebook,
  Boxes,
  Newspaper,
  Waypoints,
} from "lucide-react";
const navLinks = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: Boxes,
    label: "Component Manage",
    href: "/admin/component-management",
  },
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
];

export default function SideBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    const userDataDATA = localStorage.getItem("user");

    if (!userDataDATA) {
      router.push("/admin");
    }
  }, []);

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isActive = (href) => router.pathname === href;

  const handleClick = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? "w-80" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1
          className={`text-2xl font-novaBold ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Admin Panel
        </h1>
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
              d={
                isOpen
                  ? "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }
            />
          </svg>
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto modern-scrollbar">
        <ul className="p-4 space-y-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              {!item.nestedLinks ? (
                <Link
                  href={item.href}
                  className={`p-2 flex items-center rounded-md hover:bg-gray-700 ${
                    isActive(item.href) ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isOpen ? "mr-3" : null}`} />
                  <span
                    className={`${
                      isOpen ? "block" : "hidden"
                    } font-novaSemi text-sm`}
                  >
                    {item.label}
                  </span>
                </Link>
              ) : (
                <div
                  onClick={() => toggleSection(index)}
                  className={`p-2 flex justify-between items-center rounded-md cursor-pointer hover:bg-gray-700 ${
                    expandedSections[index] ? "bg-gray-700" : null
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon
                      className={`w-5 h-5 ${isOpen ? "mr-3" : null}`}
                    />
                    <span
                      className={` ${
                        isOpen ? "block" : "hidden"
                      } font-novaSemi text-sm `}
                    >
                      {item.label}
                    </span>
                  </div>
                  {expandedSections[index] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              )}
              {item.nestedLinks && (
                <ul
                  className={`space-y-1 overflow-hidden ${
                    expandedSections[index] ? "max-h-screen" : "max-h-0"
                  } ${isOpen ? "block" : "hidden"}`}
                >
                  {item.nestedLinks.map((nestedItem, nestedIndex) => (
                    <li key={nestedIndex} className="mt-2">
                      <Link
                        href={nestedItem.href}
                        className="pl-12 block p-1.5 rounded-md font-novaSemi text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {nestedItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        {/* <div className="flex items-center mb-4">
                    <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User avatar"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className={isOpen ? 'block' : 'hidden'}>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-gray-400">john@example.com</p>
                    </div>
                </div> */}
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 rounded-md hover:bg-gray-700"
            >
              <Home className={`w-5 h-5 ${isOpen ? "mr-3" : null}`} />
              <span className={isOpen ? "block" : "hidden"}>Home</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleClick()}
              className="flex items-center w-full p-2 rounded-md hover:bg-gray-700"
            >
              <LogOut className={`w-5 h-5 ${isOpen ? "mr-3" : null}`} />
              <span className={isOpen ? "block" : "hidden"}>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
