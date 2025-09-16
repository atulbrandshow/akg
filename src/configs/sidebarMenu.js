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
    BookmarkCheck,
} from "lucide-react"
export const menuItems = [
    {
        title: "Overview",
        items: [
            {
                icon: LayoutDashboard,
                label: "Dashboard",
                href: "/admin",
                permission: "dashboard",
            },
            {
                icon: Users,
                label: "Online Application",
                href: "/admin/online-applications",
                permission: "Online Application",
            },
        ],
    },
    {
        title: "Content Management",
        items: [
            {
                icon: FilePlus2,
                label: "Page",
                href: "/admin/page-list",
                permission: "Page",
            },
            {
                icon: Newspaper,
                label: "News",
                href: "/admin/news-list",
                permission: "News",
            },
            {
                icon: Waypoints,
                label: "Article",
                href: "/admin/article-list",
                permission: "Article",
            },
            {
                icon: CalendarRange,
                label: "Event",
                href: "/admin/event-list",
                permission: "Event",
            },
            {
                icon: RefreshCcwDot,
                label: "Circular",
                href: "/admin/circular-list",
                permission: "Circular",
            },
            {
                icon: BellDot,
                label: "Announcement",
                href: "/admin/announcement-list",
                permission: "Announcement",
            },
            {
                icon: NotepadText,
                label: "Notice",
                href: "/admin/notice-list",
                permission: "Notice",
            },
            {
                icon: School,
                label: "Schools",
                href: "/admin/school-list",
                permission: "Schools",
            },
            {
                icon: LibraryBig,
                label: "Departments",
                href: "/admin/department-list",
                permission: "Departments",
            },
            {
                icon: Book,
                label: "Programs",
                href: "/admin/program-list",
                permission: "Programs",
            },
            {
                icon: Users,
                label: "Faculty",
                href: "/admin/faculty-list",
                permission: "Faculty",
            },
        ],
    },
    {
        title: "Resources",
        items: [
            {
                icon: BookmarkCheck,
                label: "Student Reviews",
                href: "/admin/student-reviews",
                permission: "Student Reviews",
            },
            {
                icon: Users,
                label: "Testimonial",
                href: "/admin/testimonial-list",
                permission: "Testimonial",
            },
            {
                icon: Download,
                label: "Download Center",
                href: "/admin/download-center-list",
                permission: "Download Center",
            },
            {
                icon: Notebook,
                label: "Highlight Banner",
                href: "/admin/highlight-banner-list",
                permission: "Highlight Banner",
            },
        ],
    },
    {
        title: "Academic Management",
        items: [
            {
                icon: Users,
                label: "Topper Management",
                href: "/admin/topper-management",
                permission: "Topper Management",
            },
        ],
    },
]