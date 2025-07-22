"use client"

import { useState } from "react"

export default function EventList({ data }) {
    const [activeFilter, setActiveFilter] = useState("all")

    const events = [
        {
            id: 1,
            title: "Tech Innovation Summit 2024",
            date: "2024-03-15",
            time: "10:00 AM",
            location: "Main Auditorium",
            category: "technology",
            image: "/placeholder.svg?height=300&width=400",
            description:
                "Join us for an exciting day of technological innovation featuring guest speakers from top tech companies.",
            price: "Free",
            spots: "150 spots left",
        },
        {
            id: 2,
            title: "Spring Music Festival",
            date: "2024-03-22",
            time: "6:00 PM",
            location: "Campus Grounds",
            category: "cultural",
            image: "/placeholder.svg?height=300&width=400",
            description: "Experience an evening of live music performances by local bands and student artists.",
            price: "$15",
            spots: "500 spots left",
        },
        {
            id: 3,
            title: "Career Fair 2024",
            date: "2024-03-28",
            time: "9:00 AM",
            location: "Student Center",
            category: "academic",
            image: "/placeholder.svg?height=300&width=400",
            description: "Connect with top employers and explore internship and job opportunities across various industries.",
            price: "Free",
            spots: "Open to all",
        },
        {
            id: 4,
            title: "Basketball Championship",
            date: "2024-04-05",
            time: "7:00 PM",
            location: "Sports Complex",
            category: "sports",
            image: "/placeholder.svg?height=300&width=400",
            description: "Cheer for our college team in the regional championship finals. School spirit required!",
            price: "$10",
            spots: "200 spots left",
        },
        {
            id: 5,
            title: "International Food Festival",
            date: "2024-04-12",
            time: "12:00 PM",
            location: "Campus Plaza",
            category: "cultural",
            image: "/placeholder.svg?height=300&width=400",
            description: "Taste authentic cuisines from around the world prepared by our international student community.",
            price: "$8",
            spots: "300 spots left",
        },
        {
            id: 6,
            title: "Research Symposium",
            date: "2024-04-18",
            time: "2:00 PM",
            location: "Science Building",
            category: "academic",
            image: "/placeholder.svg?height=300&width=400",
            description: "Showcase of groundbreaking research projects by our students and faculty members.",
            price: "Free",
            spots: "100 spots left",
        },
    ]

    const categories = [
        { id: "all", name: "All Events", color: "bg-purple-500" },
        { id: "academic", name: "Academic", color: "bg-blue-500" },
        { id: "cultural", name: "Cultural", color: "bg-pink-500" },
        { id: "sports", name: "Sports", color: "bg-green-500" },
        { id: "technology", name: "Technology", color: "bg-orange-500" },
    ]

    const filteredEvents = activeFilter === "all" ? events : events.filter((event) => event.category === activeFilter)

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Campus Events
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                            Discover amazing events, connect with peers, and make unforgettable memories
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                Browse Events
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                                Create Event
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Filter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeFilter === category.id
                                ? `${category.color} text-white shadow-lg`
                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Event Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={event.image || "/placeholder.svg"}
                                    alt={event.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white rounded-lg px-3 py-2 shadow-md">
                                        <div className="text-sm font-bold text-gray-800">{formatDate(event.date)}</div>
                                        <div className="text-xs text-gray-600">{event.time}</div>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${categories.find((cat) => cat.id === event.category)?.color || "bg-gray-500"
                                            }`}
                                    >
                                        {categories.find((cat) => cat.id === event.category)?.name}
                                    </span>
                                </div>
                            </div>

                            {/* Event Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>

                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    {event.location}
                                </div>

                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <span className="text-2xl font-bold text-purple-600">{event.price}</span>
                                    </div>
                                    <div className="text-sm text-green-600 font-semibold">{event.spots}</div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md">
                                    Know More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Out on Amazing Events!</h2>
                    <p className="text-xl mb-8 text-purple-100">
                        Subscribe to our newsletter and get notified about upcoming events
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
                        />
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Campus Events</h3>
                            <p className="text-gray-400">Your gateway to amazing college experiences and networking opportunities.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        All Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Academic
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Sports
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Cultural
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 College Events. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
