"use client";

import React, { useState } from 'react'

const CSEForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        city: '',
        program: 'Engineering',
        subProgram: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="max-w-lg xl:max-w-xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
            <div className="text-center">
                <p className="text-gray-500 text-sm font-novaReg">APPLY TODAY FOR</p>
                <h1 className="text-xl font-novaBold text-gray-900">CSE ENGINEERING PROGRAM</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='grid grid-cols-2 gap-2'>
                    <input
                        type="text"
                        placeholder="STUDENT NAME"
                        className="w-full px-4 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />

                    <input
                        type="email"
                        placeholder="STUDENT EMAIL ID"
                        className="w-full px-4 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 text-sm">
                        +91
                    </span>
                    <input
                        type="tel"
                        placeholder="STUDENT MOBILE NO"
                        className="flex-1 px-4 py-2 border font-novaReg border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                </div>

                <div className='grid grid-cols-2 gap-2'>
                    <input
                        type="date"
                        placeholder="SELECT DOB"
                        className="w-full px-4 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    />

                    <select
                        className="w-full px-4 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                        <option value="">STUDENT CITY</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <select
                        className="w-full px-4 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                        <option value="engineering">Engineering</option>
                    </select>

                    <select
                        className="w-full px-4 py-2 border font-novaReg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={formData.subProgram}
                        onChange={(e) => setFormData({ ...formData, subProgram: e.target.value })}
                    >
                        <option value="">SELECT PROGRAM</option>
                        <option value="cse">Computer Science Engineering</option>
                        <option value="ece">Electronics Engineering</option>
                        <option value="me">Mechanical Engineering</option>
                    </select>
                </div>

                <p className="text-sm font-novaReg text-gray-500">
                    By submitting this form, I agree to receive notifications from the University in the form of SMS/E-mail/Call.
                </p>

                <button
                    type="submit"
                    className="w-full font-novaSemi bg-btn-gradient animate-gradient text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    APPLY NOW
                </button>
            </form>

            <p className="text-center text-sm font-novaReg">
                Already Registered ? Click to{' '}
                <a href="#" className="text-blue-600 font-novaSemi hover:text-red-700">
                    Login
                </a>
            </p>
        </div>
    )
}

export default CSEForm