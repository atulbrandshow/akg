"use client";
import React, { useState } from "react";

// Loan data
const loanData = [
    {
        heading: "Bank Loan",
        subheadings: [
            {
                title: "Key Advantages of Educational Loans",
                content: "Educational loans offer several benefits, including lower interest rates compared to personal loans, flexible repayment options, and the ability to cover tuition fees and other related expenses. These loans are tailored specifically for students, making them a viable option for financing higher education."
            },
            {
                title: "Digital Study Loan Features from Major Banks",
                content: "Leading banks such as Bank of Baroda, ICICI Bank, and IDFC Bank provide digital study loan options that streamline the application process. These loans often come with quick approvals, online document submissions, and user-friendly interfaces to track application status, making it easier for students to secure financial support."
            },
            {
                title: "Essential Documents for Obtaining a Study Loan",
                content: "To avail of a study loan, students typically need to submit several documents, including proof of identity (Aadhaar card, passport), proof of income (income tax return of parents/guardians), admission confirmation from the educational institution, and any collateral documents if required. It's important to have all documents organized to expedite the application process."
            },
            {
                title: "How to Register and Apply for a Study Loan",
                content: "The application process generally involves several steps: First, students need to research and select the bank that offers the best loan terms. Next, fill out the loan application form, which can usually be done online. After that, submit the required documents and wait for the bank's verification. Once approved, the loan amount will be disbursed, often directly to the educational institution."
            },
            {
                title: "Understanding the Center Sector Interest Subsidy Scheme, 2009",
                content: "This government scheme is designed to provide interest subsidies on educational loans taken by students from economically weaker sections. Under this scheme, eligible students are granted an interest subsidy for the duration of their course, making higher education more accessible. It's essential for students to check their eligibility and the application process for this scheme."
            },
            {
                title: "Frequently Asked Questions about Educational Loans",
                content: "Students often have questions regarding the educational loan process, such as: What is the maximum loan amount? How is the interest calculated? What are the repayment options available? It's advisable to consult with the bank or financial advisor to clear any doubts before applying for a loan."
            },
        ]
    },
    {
        heading: "EMI Services",
        subheadings: [
            {
                title: "Understanding Short-Term Loans and EMIs",
                content: "An EMI, or Equated Monthly Installment, is a fixed amount paid by a borrower to a lender at a specified date each calendar month. Short-term loans typically have a repayment period of 1 to 5 years, making EMIs a popular choice for students to finance their education. The structured repayment helps in budgeting monthly expenses effectively."
            },
            {
                title: "Unique Selling Propositions (USP) of EMI Services",
                content: "EMI services offer flexible repayment options, competitive interest rates, and pre-payment facilities. Additionally, various banks provide customization in the EMI structure based on the borrower's financial capability. These services are designed to make repayment manageable and to avoid financial strain on students."
            },
            {
                title: "Overview of Available EMI Services",
                content: "Several banks, including HDFC, SBI, and Axis Bank, offer distinct EMI services that cater specifically to student loans. Each bank may have its own set of features, interest rates, and eligibility criteria. Students should explore multiple options to find the service that best meets their financial needs."
            },
            {
                title: "Key Terms and Conditions of EMI Loans",
                content: "Before applying for EMI services, it's important to thoroughly understand the terms and conditions, including interest rates, repayment tenure, late payment fees, and the penalties for defaulting on loans. This information helps students make informed decisions and plan their finances accordingly."
            },
            {
                title: "Flow Chart of the EMI Loan Process",
                content: "The loan application and disbursal process typically involves several steps: application submission, document verification, loan approval, disbursement of funds, and finally, repayment through EMIs. A flow chart can help visualize this process, making it easier to understand each stage and the requirements involved."
            },
            {
                title: "Frequently Asked Questions about EMI Services",
                content: "This section addresses common queries regarding EMI services, such as: What is the minimum and maximum loan amount? How is EMI calculated? Are there any hidden charges? Students are encouraged to consult bank representatives or financial advisors to clarify their doubts before proceeding."
            },
        ]
    }
    ,
    {
        heading: "State Government Loan Services",
        subheadings: [
            {
                title: "Overview of Available Loan Types",
                content: "State governments offer a variety of financial aid options to support students pursuing higher education. These include: \n1. **Merit-Based Loans**: Awarded based on academic performance and achievements.\n2. **Need-Based Loans**: Designed for students from low-income families, ensuring financial support is available to those who need it most.\n3. **Interest Subsidy Schemes**: Programs that offer to subsidize interest rates for eligible students, making repayment more manageable.\n4. **Specialized Loans**: Some states may offer loans targeted at specific fields of study, such as engineering, medicine, or education, to encourage students to enter critical sectors."
            },
            {
                title: "Application Process for State Loans",
                content: "Applying for state government loans is a straightforward process, typically involving the following steps:\n1. **Research**: Students should explore the specific loan programs available in their state by visiting official government websites or education portals.\n2. **Gather Required Documents**: Common documents include proof of identity, income certificates, admission letters, and educational qualifications.\n3. **Online Application**: Many states allow online applications through dedicated portals. Students need to create an account, fill in the necessary details, and upload documents.\n4. **Verification and Approval**: Once submitted, applications are reviewed for eligibility, and students may need to provide additional information if requested.\n5. **Loan Disbursement**: Upon approval, the loan amount is typically disbursed directly to the educational institution, covering tuition and other related costs."
            },
        ]
    }

];

const partnerBanks = [
    { src: '/image/admission/bank1.png', alt: 'Bank 1 Logo', name: 'SBI' },
    { src: '/image/admission/bank2.png', alt: 'Bank 2 Logo', name: 'HDFC' },
    { src: '/image/admission/bank3.png', alt: 'Bank 3 Logo', name: 'ICICI' },
    { src: '/image/admission/bank4.png', alt: 'Bank 4 Logo', name: 'BOI' },
    { src: '/image/admission/bank5.png', alt: 'Bank 5 Logo', name: 'BOB' },
    { src: '/image/admission/bank6.png', alt: 'Bank 6 Logo', name: 'AXIS' },
];

const CollaboratingBanks = [
    { src: '/image/admission/bank1.png', alt: 'Bank 1 Logo', name: 'SBI' },
    { src: '/image/admission/bank2.png', alt: 'Bank 2 Logo', name: 'HDFC' },
    { src: '/image/admission/bank3.png', alt: 'Bank 3 Logo', name: 'ICICI' },
    { src: '/image/admission/bank4.png', alt: 'Bank 4 Logo', name: 'BOI' },
    { src: '/image/admission/bank5.png', alt: 'Bank 5 Logo', name: 'BOB' },
    { src: '/image/admission/bank6.png', alt: 'Bank 6 Logo', name: 'AXIS' },
];

const bankData = [
    {
        logo: '/image/admission/bank1.png', alt: 'Bank 1 Logo', name: 'SBI',
        contacts: [
            { name: 'Bhupender Sharma', mobile: '+91-987654321', email: ['bhupender.shivam@icicibank.com'] },

        ]
    },
    {
        logo: '/image/admission/bank6.png', alt: 'Bank 6 Logo', name: 'AXIS',
        contacts: [

            { name: 'Anita Jat', mobile: '+91-8732868465', email: ['anita.sharma@axisbank.com'] },

        ]
    },
    {
        logo: '/image/admission/bank3.png', alt: 'Bank 3 Logo', name: 'ICICI',
        contacts: [

            { name: 'Ranveer Singh', mobile: '+91-7889638683', email: ['ranveer.mehta@icicibank.com'] },

        ]
    },
    {
        logo: '/image/admission/bank4.png', alt: 'Bank 4 Logo', name: 'BOI',
        contacts: [

            { name: 'Aarohi Roy', mobile: '+91-9784597865', email: ['sneha.roy@boi.com'] },

        ]
    },
    {
        logo: '/image/admission/bank2.png', alt: 'Bank 2 Logo', name: 'HDFC',
        contacts: [

            { name: 'Yatish Singh', mobile: '+91-84678674645', email: ['yatish.choudhary@hdfcbank.com'] }
        ]
    }
];

const EducationLoan = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="mx-auto p-5 max-w-[1400px] max-sm:max-w-lg max-sm:p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-novaSemi mb-7 max-sm:text-2xl max-md:mb-3">
                Financial Aid & Study Loans For AKG Students
            </h2>
            <p className="text-sm text-gray-600 mb-4 max-md:mb-2 max-sm:mb-2">
                Ajay Kumar Garg University (AKGU) serves as a vital launchpad for students eager to turn their aspirations into achievements. Recognizing the financial barriers many students face in pursuing higher education, numerous banks, NBFCs, EMI service providers, and state governments have stepped in to offer student loans. This financial support aims to empower students to pursue their academic goals and unlock their potential for a successful future.
            </p>
            <p className="text-sm text-gray-600 mb-5 max-md:mb-3 max-sm:mb-2">
                Ajay Kumar Garg University (AKGU) is committed to facilitating students in their pursuit of higher education. To aid students during the admission process—whether online or offline—the university has established a dedicated loan assistance cell. This initiative helps students secure financial support through loans from banks partnered with the university, ensuring they have the resources needed to achieve their academic ambitions.
            </p>
            <div className="flex space-x-4 mb-6 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
                {loanData.map((loan, index) => (
                    <button
                        key={index}
                        className={`flex-1 py-2 rounded-lg font-novaSemi transition-colors duration-300 ${selectedTab === index ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-800"
                            }`}
                        onClick={() => setSelectedTab(index)}
                    >
                        {loan.heading}
                    </button>
                ))}
            </div>
            <div className="border border-gray-300 rounded-lg shadow-lg p-4 max-sm:p-2">
                {loanData[selectedTab].subheadings.map((sub, subIndex) => (
                    <div key={subIndex} className="mt-3">
                        <h4 className="text-md font-novaSemi text-gray-800 max-sm:text-sm max-sm:mb-1">{sub.title}</h4>
                        <p className="text-sm text-gray-600">{sub.content}</p>
                    </div>
                ))}
            </div>
            <div className="p-4 bg-yellow-400 h-28 mt-5 flex justify-between items-center gap-10 rounded-md max-lg:flex-col max-lg:h-max max-lg:gap-4 max-lg:text-center max-sm:p-4">
                <div className="max-sm:w-full">
                    <h6 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-novaBold"> Download the E-Brochure for Education Loans </h6>
                    <p className="text-sm mt-2 max-lg:mt-1">
                        Unlock Your Potential! Access comprehensive information and valuable insights about our education loan programs.
                    </p>
                </div>
                <button className="px-6 py-2 max-sm:py-2 max-sm:w-fit bg-white flex justify-center items-center rounded-lg text-sm text-black max-lg:justify-center">
                    DOWNLOAD BROCHURE
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8 max-sm:my-5 max-sm:gap-2 max-md:gap-3">
                <div className="flex flex-col gap-5 justify-center items-center w-full">
                    <div className="flex flex-col gap-5 text-center max-sm:gap-2">
                        <h5 className="text-2xl font-novaSemi max-lg:text-lg max-sm:text-lg">Our Loan Approval Success</h5>
                        <div className="flex flex-col lg:flex-row lg:gap-16 px-0 lg:px-10">
                            <div className="flex justify-center items-center flex-col text-red-700 mb-5 lg:mb-0">
                                <span className="text-3xl max-sm:text-lg">9,856</span>
                                <p className="text-[0.70rem] text-black">Education Loan Applications</p>
                            </div>
                            <div className="flex justify-center items-center flex-col text-black mb-5 lg:mb-0">
                                <span className="text-3xl max-sm:text-lg">15,232</span>
                                <p className="text-[0.70rem] text-black">Total Loans Approved</p>
                            </div>
                            <div className="flex justify-center items-center flex-col text-red-700 mb-5 lg:mb-0">
                                <span className="text-3xl max-sm:text-lg">80%</span>
                                <p className="text-[0.70rem] text-black">Approval Rate</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 max-sm:gap-3 max-md:gap-3">
                        <h5 className="text-xl font-novaSemi max-lg:text-center max-md:text-lg max-sm:text-base">Collaborating Banks</h5>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full max-md:grid-cols-3 max-md:gap-3 max-sm:grid-cols-2 max-sm:gap-2">
                            {CollaboratingBanks?.map((bank, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg cursor-pointer p-5 flex justify-center items-center relative overflow-hidden group h-32 max-sm:h-24"
                                >
                                    <img
                                        src={bank.src}
                                        alt={bank.alt}
                                        className="object-contain h-full w-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h6 className="font-novaSemi">{bank.name}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-col gap-5 max-lg:col-span-2 max-sm:mt-2 max-sm:gap-3 max-md:mt-3">
                    <h5 className="text-2xl font-novaSemi text-center max-sm:text-base">Partner Banks and Loan Schemes Associated with Ajay Kumar Garg University</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 w-full max-sm:gap-2">
                        {partnerBanks?.map((bank, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg cursor-pointer p-3 flex justify-center items-center relative overflow-hidden group h-20"
                            >
                                <img
                                    src={bank.src}
                                    alt={bank.alt}
                                    className="object-contain h-full w-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h6 className="font-novaSemi">{bank.name}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 max-sm:px-2 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg bg-white">
                <h1 className="text-2xl font-bold mb-4 max-sm:text-base max-sm:mb-3 max-sm:text-center">FOR ANY QUERY REGARDING BANK</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-gray-300">
                        <thead>
                            <tr className="text-sm bg-primary text-white max-sm:text-xs">
                                <th className="py-2 px-4 rounded-tl-lg">BANK NAME</th>
                                <th className="py-2 px-4">NAME/MOBILE</th>
                                <th className="py-2 px-4">EMAIL ID</th>
                                <th className="py-2 px-4 rounded-tr-lg">LOAN OFFER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bankData.map((bank, index) => (
                                <tr key={index} className="bg-blend-multiply text-center">
                                    <td className={`py-2 px-4 max-sm:px-1 border-b border-r ${index === bankData.length - 1 ? 'rounded-bl-lg border-b-0' : ''}`}>
                                        <img className="w-20 object-contain" src={bank.logo} alt={bank.name} />
                                    </td>
                                    <td className={`py-2 px-4 border-r max-sm:py-1 max-sm:px-2 max-sm:text-sm ${index === bankData.length - 1 ? 'border-b-0' : 'border-b'}`}>
                                        {bank.contacts.map((contact, contactIndex) => (
                                            <div key={contactIndex}>
                                                <p>{contact.name}</p>
                                                <p className="text-sm text-gray-600">{contact.mobile}</p>
                                            </div>
                                        ))}
                                    </td>
                                    <td className={`py-2 px-4 border-r max-sm:py-1 max-sm:px-2 ${index === bankData.length - 1 ? 'border-b-0' : 'border-b'}`}>
                                        {bank.contacts.map((contact, contactIndex) => (
                                            <div key={contactIndex}>
                                                {contact.email.map((email, emailIndex) => (
                                                    <p key={emailIndex} className="text-sm text-blue-600">{email}</p>
                                                ))}
                                            </div>
                                        ))}
                                    </td>
                                    <td className={`py-2 px-4 max-sm:py-1 max-sm:px-2 ${index === bankData.length - 1 ? 'border-b-0 rounded-br-lg' : 'border-b'}`}>
                                        <button className="bg-blue-500 text-xs hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EducationLoan;
