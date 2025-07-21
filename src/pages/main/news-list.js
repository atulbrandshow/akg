"use client"

import { useState } from "react"

function NewsListPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Revolutionary AI Technology Transforms Healthcare Industry",
      description:
        "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnosis with unprecedented accuracy.",
      category: "Technology",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Global Climate Summit Reaches Historic Agreement",
      description:
        "World leaders unite on ambitious climate goals, setting new standards for carbon reduction and renewable energy adoption.",
      category: "Environment",
      author: "Michael Chen",
      date: "2024-01-14",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Stock Markets Hit Record Highs Amid Economic Recovery",
      description:
        "Major indices surge as investors show confidence in post-pandemic economic growth and corporate earnings.",
      category: "Business",
      author: "Emily Rodriguez",
      date: "2024-01-13",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Breakthrough in Quantum Computing Achieved",
      description:
        "Scientists demonstrate quantum supremacy in new computing paradigm that could transform cybersecurity and data processing.",
      category: "Technology",
      author: "David Kim",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Olympic Games Preparation Enters Final Phase",
      description:
        "Athletes from around the world prepare for the upcoming games as venues undergo final safety and security checks.",
      category: "Sports",
      author: "Lisa Thompson",
      date: "2024-01-11",
      readTime: "3 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Space Mission Discovers New Exoplanets",
      description:
        "NASA's latest space telescope reveals potentially habitable worlds in distant solar systems, expanding our understanding of the universe.",
      category: "Science",
      author: "Robert Martinez",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = ["all", "Technology", "Environment", "Business", "Sports", "Science"]

  const filteredNews = newsData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">Latest News</h1>
              <p className="text-gray-600 mt-1">Stay updated with the latest headlines and stories</p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search news..."
                className="pl-10 pr-4 py-2 w-full md:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467.881-6.127 2.325.302-.76 1.283-1.325 2.127-1.325z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium text-gray-700">{article.author}</span>
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">NewsHub</h3>
              <p className="text-gray-400 mb-4">
                Your trusted source for the latest news and updates from around the world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Science
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NewsHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NewsListPage
