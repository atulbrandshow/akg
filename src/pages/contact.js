const Contact = () => {
    return (
        <>
            <div>
                <div
                    className="relative h-[667px] bg-cover bg-left-top bg-no-repeat bg-[#2c3035]"
                    style={{ backgroundImage: "url('/image/contact-banner.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-black opacity-75"></div>
                </div>

                <div className="relative w-full max-w-[1400px] mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-5 max-lg:w-10/12">
                        <div className="lg:order-2 order-1 flex-1 flex flex-col items-center max-lg:justify-center">
                            <div className="absolute w-8/12 -top-[70%] max-md:mx-auto pt-20">
                                <h2 className="mb-2 font-novaReg leading-none">
                                    <small className="text-2xl text-white w-full">Dial Toll Free:</small><br />
                                    <a href="tel:+1800121288800" className="text-white text-[42px]">1800-200-0777</a>
                                </h2>
                                <p className="mb-4 text-lg font-novaReg text-white">
                                    <strong>You Have a Question or a Comment</strong> <br />- We know that sometimes it's tough to find the information you need. SO, ASK!
                                </p>
                            </div>
                            <div className="absolute w-8/12 -top-[40%] max-md:mx-auto mt-8 overflow-hidden bg-white rounded-lg shadow-md">
                                <div className="p-14 max-sm:p-4">
                                    <form action="#" method="POST">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 mb-3">
                                            <div className="mb-2 h-16">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="w-full px-4 py-2 mb-4 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-14"
                                                    placeholder="Enter your full Name"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-2 h-16">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="w-full px-4 py-2 mb-4 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-14"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 mb-4">
                                            <div className="mb-2 h-16">
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="w-full px-4 py-2 mb-4 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-14"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-2 h-16">
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    className="w-full px-4 py-2 mb-4 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-14"
                                                    placeholder="Type your city & select from list"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            <div className="text-sm font font-novaReg">
                                                <h6>Choose Your Interested Program</h6>
                                            </div>
                                            <br />
                                            <div className="mb-4">
                                                <select id="program" name="program" className="w-full px-4 py-2 border-b border-[#dddddd] text-sm font-novaLight" required>
                                                    <option value="" disabled selected>Select Discipline</option>
                                                    <option value="engineering">Engineering</option>
                                                    <option value="business">Business Administration</option>
                                                    <option value="arts">Arts & Humanities</option>
                                                    <option value="science">Science</option>
                                                    <option value="law">Law</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <select id="program" name="program" className="w-full px-4 py-2 border-b border-[#dddddd] text-sm font-novaLight" required>
                                                    <option value="" disabled selected>Select your program</option>
                                                    <option value="engineering">Engineering</option>
                                                    <option value="business">Business Administration</option>
                                                    <option value="arts">Arts & Humanities</option>
                                                    <option value="science">Science</option>
                                                    <option value="law">Law</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                                                How old are you?
                                            </label>
                                            <div className="flex space-x-2">
                                                <select id="day" name="day" className="w-1/3 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                                    <option value="" disabled selected>DD</option>
                                                    {Array.from({ length: 31 }, (_, i) => (
                                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                    ))}
                                                </select>
                                                <select id="month" name="month" className="w-1/3 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                                    <option value="" disabled selected>MM</option>
                                                    {Array.from({ length: 12 }, (_, i) => (
                                                        <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
                                                    ))}
                                                </select>
                                                <select id="year" name="year" className="w-1/3 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                                    <option value="" disabled selected>YYYY</option>
                                                    {Array.from({ length: 100 }, (_, i) => (
                                                        <option key={i} value={2023 - i}>{2023 - i}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-4">
                                                <button
                                                    type="submit"
                                                    className="w-full sm:w-1/2 bg-secondary text-sm font-novaBold tracking-wide uppercase px-4 py-3 rounded-md hover:bg-indigo-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    Register Now
                                                </button>
                                                <a
                                                    href="#"
                                                    className="w-full sm:w-1/2 bg-gray-300 text-sm font-novaBold tracking-wide uppercase px-4 py-3 rounded-md text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    Already Registered
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="max-w-4xl mx-auto pt-32 bg-background text-foreground items-start">
                                <h2 className="text-[36px] text-[#111] font-custom mt-2 mb-4 font-normal leading-5">AKG University City Office</h2>
                                <p className="mb-6 text-sm">27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad - 201015</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-2 border border-[#e6f1f2] bg-[#e5eef9] rounded-md p-4">
                                    <div className="p-0 bg-muted rounded-lg">
                                        <h3 className="font-custom mt-0 font-medium leading-5 mb-4 text-lg text-custom-gray text-[#333]">General Helpline</h3>
                                        <ul className="list-contact">
                                            <li className="align-middle mb-4">
                                                <a href="tel:+911605017000" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/phone.png" alt="Phone Icon" width={30} height={30} className="grayscale align-middle mr-3" />
                                                    +91-8744052891-93
                                                </a>
                                            </li>
                                            <li className="align-middle mb-4">
                                                <a href="tel:+918067947100" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/phone.png" alt="Phone Icon" width={30} height={30} className="grayscale align-middle mr-3" />
                                                    +91-7290034978
                                                </a>
                                                <span className="italic ml-10 text-xs text-[#d92a2b]">(24*7 Helpline No.)</span>
                                            </li>
                                            <li className="align-middle mb-4">
                                                <a href="mailto:info@cumail.in" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/mail.png" alt="Mail Icon" width={30} height={30} className="grayscale align-middle mr-3" />
                                                    info@akgec.ac.in
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-0 bg-muted rounded-lg">
                                        <h3 className="font-custom mt-0 font-medium leading-5 mb-4 text-lg text-custom-gray text-[#333]">Admissions Helpline</h3>
                                        <ul className="list-contact">
                                            <li className="align-middle mb-4">
                                                <a href="tel:+919915999223" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/phone.png" alt="Phone Icon" width={30} height={30} className="grayscale align-middle mr-3" />
                                                    1800-200-0777
                                                </a>
                                            </li>
                                            <li className="align-middle mb-5">
                                                <a href="tel:+918146651550" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/phone.png" alt="Phone Icon" width={30} height={30} className="grayscale align-middle mr-3" />
                                                    +91-7290034978
                                                </a>
                                            </li>
                                            <li className="align-middle mb-4">
                                                <a href="tel:+919915999224" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/phone.png" alt="Phone Icon" width={30} height={30} className="grayscale align-middle mr-3" />
                                                    +91-8744052891-93
                                                </a>
                                            </li>
                                            <li className="align-middle mb-4">
                                                <a href="mailto:admissions@cumail.in" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/mail.png" alt="Mail Icon" width={30} height={30} className="grayscale align-middle mr-3" />
                                                    info@akgec.ac.in
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-0 bg-muted rounded-lg pb-4">
                                        <h3 className="font-custom mt-0 font-medium leading-5 mb-4 text-lg text-[#333]">International Admissions Helpline</h3>
                                        <ul className="list-contact">
                                            <li className="align-middle mb-4">
                                                <a href="tel:+917626862200" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/phone.png" alt="Phone Icon" width={24} height={24} className="grayscale align-middle mr-3" />
                                                    +91-8744052891-93
                                                </a>
                                            </li>
                                            <li className="align-middle mb-4">
                                                <a href="tel:+918146651606" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/phone.png" alt="Phone Icon" width={24} height={24} className="grayscale align-middle mr-3" />
                                                    +91-7290034978
                                                </a>
                                            </li>
                                            <li className="align-middle mb-4">
                                                <a href="mailto:international@cumail.in" className="flex items-center text-sm text-gray-800">
                                                    <img src="/image/icons/mail.png" alt="Mail Icon" width={24} height={24} className="grayscale align-middle mr-3" />
                                                    info@akgec.ac.in
                                                </a>
                                            </li>
                                            <li className="bg-[#d92a2b] p-2 mt-8 mb-0 text-center rounded-[6px]">
                                                <a
                                                    href="#"
                                                    className="text-white text-sm font-normal hover:text-[#f5c8c8]"
                                                >
                                                    View International Offices
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <aside className="flex flex-col max-md:items-start lg:w-4/12 lg:order-1 lg-w-1/3 max-lg:w-full max-md:w-full bg-background p-1 border-border max-lg:justify-center">
                            <h2 className="mt-6 mb-2 leading-10 text-2xl lg:text-4xl md:text-xl max-md:w-full  custom-font font-normal bg-white">
                                Contact - AKG <br />AKG University
                            </h2>
                            <ul className="mt-4 space-y-3 max-md:w-full ">
                                <li className="block text-sm font-light leading-5 pl-1">
                                    <span className="text-red-500">◆</span> About AKG
                                </li>
                                <li className="block text-sm font-light leading-5 pl-1">
                                    <span className="text-red-500">◆</span> General Enquiry Form
                                </li>
                                <li className="block text-sm font-light leading-5 pl-1">
                                    <span className="text-red-500">◆</span> Feedback Form
                                </li>
                                <li className="block text-sm font-light leading-5 pl-1">
                                    <span className="text-red-500">◆</span> Admission Offices
                                </li>
                                <li className="block text-sm font-light leading-5 pl-1">
                                    <span className="text-red-500">◆</span> Maps & Directions
                                </li>
                                <li className="block text-sm font-light leading-5 pl-1">
                                    <span className="text-red-500">◆</span> Distance Calculator
                                </li>
                                <li className="block text-sm font-light leading-5 pl-1">
                                    <span className="text-red-500">◆</span> How to Reach AKG University
                                </li>
                            </ul>
                            <div className="mt-6 max-md:w-full">
                                <h3 className="bg-[#162b5a] block px-4 py-2.5 text-lg text-white font-semibold uppercase">
                                    ADMISSIONS QUICK LINKS
                                </h3>
                                <ul className="mt-2 space-y-5">
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> Course Fee
                                    </li>
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> How to Apply?
                                    </li>
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> AKG Scholarship
                                    </li>
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> Online REGISTRATION Form
                                    </li>
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> International Admission Form
                                    </li>
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> Admission Offices
                                    </li>
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> Visit THE CAMPUS
                                    </li>
                                    <li className="block text-sm font-light leading-5 pl-1">
                                        <span className="text-red-500">◆</span> Migration Policy
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className="w-full mx-auto mt-8 overflow-hidden bg-[#f5f5f5] p-6 rounded-lg shadow-md">
                    <div className="w-full max-w-[700px] mx-auto bg-[#f5f5f5] border-t border-[#eeefef] py-12 text-center  ">
                        <h2 className="text-center text-[#333] text-[42px]">Admission Offices in other cities</h2>
                        <p className="mt-2">Select a State to view the details of Admission Offices in that region</p>
                        <select className="border border-border rounded-md w-full border-[#bbbbbb]  p-3   mt-2 text-[16px] text-[#8d8d8d]">
                            <option>Select Your State</option>
                            <option>Uttar Pradesh</option>
                            <option>Madhya Pradesh</option>
                            <option>Bihar</option>
                            <option>Rajasthan</option>
                            <option>Gujrat</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;