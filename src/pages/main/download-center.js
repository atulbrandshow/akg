import Header from '@/Components/Header';
import { Download } from 'lucide-react';
import React, { useState } from 'react';

const DownloadCenter = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const downloadCategories = [
    { id: 'all', name: 'All Downloads', count: 156 },
    { id: 'academic', name: 'Academic Resources', count: 45 },
    { id: 'forms', name: 'Forms & Documents', count: 32 },
    { id: 'software', name: 'Software & Tools', count: 28 },
    { id: 'research', name: 'Research Papers', count: 31 },
    { id: 'student', name: 'Student Resources', count: 20 }
  ];

  const downloadItems = [
    {
      id: 1,
      title: 'Academic Calendar 2024-2025',
      description: 'Complete academic calendar with important dates, holidays, and examination schedules.',
      category: 'academic',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      downloads: 1247,
      date: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Student Enrollment Form',
      description: 'Official enrollment form for new and returning students.',
      category: 'forms',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      downloads: 892,
      date: '2024-01-10',
      featured: false
    },
    {
      id: 3,
      title: 'Research Methodology Guidelines',
      description: 'Comprehensive guide for conducting academic research and thesis writing.',
      category: 'research',
      fileType: 'PDF',
      fileSize: '5.2 MB',
      downloads: 634,
      date: '2024-01-08',
      featured: true
    },
    {
      id: 4,
      title: 'Campus WiFi Setup Guide',
      description: 'Step-by-step instructions for connecting to university WiFi network.',
      category: 'student',
      fileType: 'PDF',
      fileSize: '1.1 MB',
      downloads: 2156,
      date: '2024-01-05',
      featured: false
    },
    {
      id: 5,
      title: 'Statistical Analysis Software',
      description: 'Licensed statistical software package for research and academic use.',
      category: 'software',
      fileType: 'EXE',
      fileSize: '245 MB',
      downloads: 456,
      date: '2024-01-03',
      featured: false
    },
    {
      id: 6,
      title: 'Graduation Application Form',
      description: 'Application form for students planning to graduate this semester.',
      category: 'forms',
      fileType: 'PDF',
      fileSize: '0.9 MB',
      downloads: 723,
      date: '2024-01-01',
      featured: false
    }
  ];

  const filteredItems = downloadItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'PDF':
        return (
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'EXE':
        return (
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Download Center"
        gradient="bg-gradient-to-r from-gray-800 to-transparent"
        bgUrl={data?.banner_img}
        custom={true}
        subHeading={
          "Access academic resources, forms, software, and research materials. Everything you need for your academic journey in one place."
        }
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-36">
              <h3 className="text-lg font-novaSemi text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {downloadCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCategory === category.id
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-novaSemi">{category.name}</span>
                      <span className={`text-sm px-2 font-novaReg py-1 rounded-full ${selectedCategory === category.id
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-gray-100 text-gray-600'
                        }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search downloads..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border font-novaReg border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div className="md:w-48">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 font-novaReg rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Featured Downloads */}
            <div className="mb-8">
              <h2 className="text-2xl font-novaBold text-gray-900 mb-6">Featured Downloads</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredItems.filter(item => item.featured).map((item) => (
                  <div key={item.id} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                    <div className="flex items-start gap-4">
                      {getFileIcon(item.fileType)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-novaSemi text-gray-900">{item.title}</h3>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-novaSemi">
                            Featured
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 font-novaReg">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm font-novaSemi text-gray-500">
                            <span>{item.fileType} • {item.fileSize}</span>
                          </div>
                          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-novaSemi transition-colors flex items-center gap-1">
                            <Download size={18} />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Downloads */}
            <div>
              <h2 className="text-2xl font-novaBold text-gray-900 mb-6">All Downloads</h2>
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      {getFileIcon(item.fileType)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-novaSemi text-gray-900">{item.title}</h3>
                          {item.featured && (
                            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-novaSemi">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3 font-novaReg">{item.description}</p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-1 font-novaSemi">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                            </svg>
                            {item.fileType} • {item.fileSize}
                          </span>
                          <span className="flex items-center font-novaSemi gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 flex items-center gap-1 rounded-lg font-novaSemi transition-colors">
                        <Download size={18} />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No Results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-novaSemi text-gray-900 mb-2">No downloads found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-novaBold mb-4">Need Help Finding Something?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you locate the right resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-novaSemi transition-colors">
                Contact Support
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-novaSemi transition-colors">
                Request New Resource
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCenter;
