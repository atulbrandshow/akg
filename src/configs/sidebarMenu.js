import { LayoutDashboard, Users, FilePlus2, Newspaper, Waypoints, CalendarRange, RefreshCcwDot, BellDot, NotepadText, School, LibraryBig, Book, BookmarkCheck, Download, Notebook, Shield, ShieldAlert, FileClock } from "lucide-react";

// Admin
export const menuItems = [
    {
        name: "Dashboard",
        href: "admin/dashboard",
        icon: (
            <LayoutDashboard className="w-5 h-5" />
        ),
        permission: "Dashboard",
    },
    {
        name: "Online Application",
        href: "admin/online-applications",
        icon: (
            <Users className="w-5 h-5" />
        ),
        permission: "Online Application",
    },
    {
        name: "Page",
        href: "admin/page-list",
        icon: (
            <FilePlus2 className="w-5 h-5" />
        ),
        permission: "Page",
    },
    {
        name: "News",
        href: "admin/news-list",
        icon: (
            <Newspaper className="w-5 h-5" />
        ),
        permission: "News",
    },
    {
        name: "Article",
        href: "admin/article-list",
        icon: (
            <Waypoints className="w-5 h-5" />
        ),
        permission: "Article",
    },
    {
        name: "Event",
        href: "admin/event-list",
        icon: (
            <CalendarRange className="w-5 h-5" />
        ),
        permission: "Event",
    },
    {
        name: "Circular",
        href: "admin/circular-list",
        icon: (
            <RefreshCcwDot className="w-5 h-5" />
        ),
        permission: "Circular",
    },
    {
        name: "Announcement",
        href: "admin/announcement-list",
        icon: (
            <BellDot className="w-5 h-5" />
        ),
        permission: "Announcement",
    },
    {
        name: "Notice",
        href: "admin/notice-list",
        icon: (
            <NotepadText className="w-5 h-5" />
        ),
        permission: "Notice",
    },
    {
        name: "Schools",
        href: "admin/school-list",
        icon: (
            <School className="w-5 h-5" />
        ),
        permission: "Schools",
    },
    {
        name: "Departments",
        href: "admin/department-list",
        icon: (
            <LibraryBig className="w-5 h-5" />
        ),
        permission: "Departments",
    },
    {
        name: "Programs",
        href: "admin/program-list",
        icon: (
            <Book className="w-5 h-5" />
        ),
        permission: "Programs",
    },
    {
        name: "Faculty",
        href: "admin/faculty-list",
        icon: (
            <Users className="w-5 h-5" />
        ),
        permission: "Faculty",
    },
    {
        name: "Student Reviews",
        href: "admin/student-reviews",
        icon: (
            <BookmarkCheck className="w-5 h-5" />
        ),
        permission: "Student Reviews",
    },
    {
        name: "Testimonial",
        href: "admin/testimonial-list",
        icon: (
            <Users className="w-5 h-5" />
        ),
        permission: "Testimonial",
    },
    {
        name: "Download Center",
        href: "admin/download-center-list",
        icon: (
            <Download className="w-5 h-5" />
        ),
        permission: "Download Center",
    },
    {
        name: "Highlight Banner",
        href: "admin/highlight-banner-list",
        icon: (
            <Notebook className="w-5 h-5" />
        ),
        permission: "Highlight Banner",
    },
    {
        name: "Topper Management",
        href: "admin/topper-management",
        icon: (
            <Users className="w-5 h-5" />
        ),
        permission: "Topper Management",
    },
    {
        name: "Admin Management",
        href: "admin/admin-management",
        icon: (
            <Users className="w-5 h-5" />
        ),
        permission: "Admin Management",
    },
    {
        name: "Permission Management",
        href: "admin/permission-management",
        icon: (
            <ShieldAlert className="w-5 h-5" />
        ),
        permission: "Permission Management",
    },
    {
        name: "Admin Logs",
        href: "admin/admin-logs",
        icon: (
            <FileClock className="w-5 h-5" />
        ),
        permission: "Admin Logs",
    },
];
export const submodules = [
    {
        name: 'Create Page',
        href: 'admin/create-page'
    },
    {
        name: 'Create News',
        href: 'admin/create-news'
    },
    {
        name: 'Create Article',
        href: 'admin/create-article'
    },
    {
        name: 'Create Event',
        href: 'admin/create-event'
    },
    {
        name: 'Create Circular',
        href: 'admin/create-circular'
    },
    {
        name: 'Edit Page',
        href: 'admin/edit-page'
    },
    {
        name: 'Edit News',
        href: 'admin/edit-news'
    },
    {
        name: 'Edit Path',
        href: 'admin/edit-path'
    },
    {
        name: 'Student Review',
        href: 'admin/add-review'
    },
    {
        name: 'Create Testimonial',
        href: 'admin/add-testimonial'
    },
    {
        name: 'Create FAQ',
        href: 'admin/add-faq'
    },
    {
        name: 'Dynamic Page',
        href: 'admin/page-content-manager'
    },
    {
        name: 'Extra Components',
        href: 'admin/extra-components'
    }
]