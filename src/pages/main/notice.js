"use client"

import { useState } from "react"

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState("all")

  const notices = [
    {
      id: 1,
      title: "Mid-Semester Examinations",
      category: "academic",
      date: "2024-03-15",
      priority: "high",
      content:
        "Mid-semester examinations will commence soon. Check your examination schedule and report any issues immediately.",
      department: "Examination Cell",
      attachment: true,
    },
    {
      id: 2,
      title: "Annual Technical Festival",
      category: "events",
      date: "2024-03-12",
      priority: "medium",
      content:
        "Registration is now open for our annual technical festival. Multiple competitions and exhibitions await.",
      department: "Student Activities",
      attachment: false,
    },
    {
      id: 3,
      title: "Library Extended Hours",
      category: "general",
      date: "2024-03-10",
      priority: "medium",
      content:
        "Library will have extended operating hours during examination period. Additional study spaces available.",
      department: "Library",
      attachment: false,
    },
    {
      id: 4,
      title: "Campus Placement Drive",
      category: "placement",
      date: "2024-03-08",
      priority: "high",
      content: "Major tech company placement drive scheduled. Eligible students should register before the deadline.",
      department: "Training & Placement",
      attachment: true,
    },
    {
      id: 5,
      title: "Technology Workshop",
      category: "events",
      date: "2024-03-05",
      priority: "medium",
      content: "Multi-day workshop on emerging technologies with industry experts. Limited seats available.",
      department: "CSE Department",
      attachment: false,
    },
    {
      id: 6,
      title: "Fee Payment Extension",
      category: "academic",
      date: "2024-03-03",
      priority: "high",
      content: "Fee payment deadline has been extended due to technical issues. Late fees waived for extended period.",
      department: "Accounts Section",
      attachment: false,
    },
    {
      id: 7,
      title: "Annual Sports Championship",
      category: "events",
      date: "2024-03-01",
      priority: "low",
      content: "Annual sports meet featuring multiple sporting events. Registration forms available at sports complex.",
      department: "Sports Committee",
      attachment: false,
    },
    {
      id: 8,
      title: "Industry Visit Program",
      category: "academic",
      date: "2024-02-28",
      priority: "medium",
      content: "Industrial visit to leading tech company. Transportation provided. Formal dress code required.",
      department: "CSE & IT Department",
      attachment: true,
    },
  ]

  const filteredNotices = activeTab === "all" ? notices : notices.filter((notice) => notice.category === activeTab)

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "academic":
        return "📚"
      case "events":
        return "🎯"
      case "placement":
        return "💼"
      case "general":
        return "📢"
      default:
        return "📋"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white border-opacity-30 overflow-hidden ">
                 <img
                  onClick={() => router.push("/")}
                  src="/image/AKGEC_LOGO.webp"
                  alt="AKG University Logo"
                  className={`logo  object-contain bg-blend-color-dodge cursor-pointer `}
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  AKGEC University
                </h1>
                <p className="text-blue-100 mt-2 text-lg">Digital Notice Board</p>
              </div>
            </div>
            <div className="text-right bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-sm text-blue-100">Last Updated</div>
              <div className="font-semibold text-lg">{formatDate(new Date().toISOString())}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Modern Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{notices.length}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Priority</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {notices.filter((n) => n.priority === "high").length}
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Academic</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {notices.filter((n) => n.category === "academic").length}
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Active</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {notices.filter((n) => n.category === "events").length}
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Filter Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-12 border border-gray-100">
          <div className="p-2">
            <nav className="flex space-x-2">
              {[
                { key: "all", label: "All", icon: "📋" },
                { key: "academic", label: "Academic", icon: "📚" },
                { key: "events", label: "Events", icon: "🎯" },
                { key: "placement", label: "Placement", icon: "💼" },
                { key: "general", label: "General", icon: "📢" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm flex items-center justify-center space-x-3 transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    className={`py-1 px-3 rounded-full text-xs font-bold ${
                      activeTab === tab.key ? "bg-white bg-opacity-20 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tab.key === "all" ? notices.length : notices.filter((n) => n.category === tab.key).length}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Modern Notices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-xl">{getCategoryIcon(notice.category)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{notice.title}</h3>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="font-medium">{notice.department}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>{formatDate(notice.date)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-xl text-xs font-bold border-2 ${getPriorityColor(notice.priority)}`}
                  >
                    {notice.priority.toUpperCase()}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-base">{notice.content}</p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Details
                    </button>
                    {notice.attachment && (
                      <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Download
                      </button>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <span className="text-lg">🔗</span>
                    </button>
                    <button className="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <span className="text-lg">📤</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-6xl">📭</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No notices found</h3>
            <p className="text-gray-600 text-lg">There are no notices in this category at the moment.</p>
          </div>
        )}
      </div>

      {/* Modern Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Contact
              </h4>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Delhi-Meerut Expressway, Ghaziabad</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>+91-120-2782000</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>info@akgec.ac.in</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quick Access
              </h4>
              <div className="space-y-4 text-gray-300">
                <p className="hover:text-white transition-colors cursor-pointer">Student Portal</p>
                <p className="hover:text-white transition-colors cursor-pointer">Faculty Portal</p>
                <p className="hover:text-white transition-colors cursor-pointer">Examination Results</p>
                <p className="hover:text-white transition-colors cursor-pointer">Academic Calendar</p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Stay Updated
              </h4>
              <div className="space-y-4 text-gray-300">
                <p className="hover:text-white transition-colors cursor-pointer">Mobile App</p>
                <p className="hover:text-white transition-colors cursor-pointer">Email Notifications</p>
                <p className="hover:text-white transition-colors cursor-pointer">SMS Alerts</p>
                <p className="hover:text-white transition-colors cursor-pointer">Social Media</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">&copy; 2024 AKGEC University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
