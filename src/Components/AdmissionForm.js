import React from 'react'

const AdmissionForm = () => {
    return (
        <div className="max-xl:static max-w-md md:max-w-2xl xl:max-w-md mx-0 rounded-lg mt-8 lg:mt-0 bg-white">
            <div className="p-10 max-sm:p-4">
                <form action="#" method="POST">
                    <div className="mb-4 flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full Name"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                    </div>

                    {/* Mobile Number and City in one line */}
                    <div className="mb-4 flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full px-4 py-2 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="w-full px-4 py-2 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your city"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">How old are you?</label>
                        <div className="flex space-x-2">
                            <select
                                id="day"
                                name="day"
                                className="w-1/3 px-4 py-2 border placeholder:font-serif placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required>
                                <option value="" disabled>DD</option>
                                {Array.from({ length: 31 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="month"
                                name="month"
                                className="w-1/3 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required>
                                <option value="" disabled>MM</option>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {new Date(0, i).toLocaleString("en", {
                                            month: "long",
                                        })}
                                    </option>
                                ))}
                            </select>
                            <select
                                id="year"
                                name="year"
                                className="w-1/3 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required>
                                <option value="" disabled>YYYY</option>
                                {Array.from({ length: 100 }, (_, i) => (
                                    <option key={i} value={2023 - i}>
                                        {2023 - i}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Program Selector in one line */}
                    <div className="mb-4">
                        <select
                            id="program"
                            name="program"
                            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                            <option value="" disabled>
                                Select your program
                            </option>
                            <option value="engineering">Engineering</option>
                            <option value="business">Business Administration</option>
                            <option value="arts">Arts & Humanities</option>
                            <option value="science">Science</option>
                            <option value="law">Law</option>
                        </select>
                    </div>

                    {/* Additional Information */}
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Additional Information
                        </label>
                        <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border placeholder:font-serif placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter any additional information"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full bg-secondary text-sm font-novaBold uppercase px-4 py-3 rounded-md hover:bg-indigo-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">Submit Application</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdmissionForm