"use client";

import React, { useState } from 'react';

const firstSteps = [
    {
        main: "The AKG University Entrance Test (AKGET) consists of two phases: AKGET-I and AKGET-II. Each phase has specific dates, and benefits may vary between them."
    },
    {
        title: "Log on and Generate User Id and Password at https://erp.akg.edu.in/",
        content: "Visit the official AKG University website to initiate the registration process. Navigate to https://www.akg.edu.in/ and follow these steps."
    },
    {
        title: "Select the current phase of AKGET",
        content: "The AKGET includes multiple phases such as AKGET-I and AKGET-II. Each phase operates sequentially, and early applicants may receive additional advantages. Candidates must choose the active phase during their application for admissions into various courses."
    },
    {
        title: "Register by providing your Name, Email, Contact Number, and City",
        content: "Upon accessing the AKG University official website, candidates must register by filling in their details, including Name, Email, Contact Number, and City, in the designated fields on the homepage."
    },
    {
        title: "Choose the program that interests you",
        content: "After entering the required information, candidates should select the program they wish to apply for before completing the registration."
    },
    {
        title: "Complete your profile after registration",
        content: "Once registered, candidates should log in using the User ID and password sent via Email or SMS and complete their profile. Alternatively, a registered Email ID can be used as a username."
    },
    {
        title: "Confirmation message sent via SMS/Email after successful registration",
        content: "Candidates will receive a confirmation message regarding their successful registration on the provided contact number and Email address via SMS or Email."
    }
];

const offlineFirstSteps = [
    {
        main: "Admission Office, AKG University, 27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad - 201015"
    },
    {
        content: "To download the admission form, please visit www.akguniversity.edu."
    },
    {
        content: "Send the completed admission form along with a demand draft of $100 drawn in the name of 'AKG University', payable at City Name, to the following address:"
    },
];

const secondSteps = [
    {
        title: "Post-registration, download the e-Prospectus for $10 online",
        content: "Following registration, candidates are required to download the e-Prospectus, which is accessible after successful registration. The e-Prospectus includes the application form for admission and details about the entrance exam."
    },
    {
        title: "Complete the application form for Entrance Test included in the e-Prospectus",
        content: "After downloading the e-Prospectus, candidates must fill out the application form necessary for admission and participation in the entrance exam."
    }
];

const offlineSecondSteps = [
    {
        main: "Submit the admission form and obtain the prospectus by paying $10 at AKG University Campus or any local admission office."
    },
];

const thirdSteps = [
    {
        title: "Secure your seat by paying the registration fee online or offline",
        content: "Candidates can pay the registration fee online via net banking or debit/credit cards, or offline by generating a payment Challan."
    },
    {
        title: "Access the registration portal at https://akget.akguniversity.edu",
        content: "To pay the registration fee, candidates must visit the AKG University registration portal at https://akget.akguniversity.edu and log into their account."
    },
    {
        title: "Log in using your AKG-ID or Registered Email ID",
        content: "Candidates should log in to their account using their assigned AKG-ID or Registered Email ID and password. Subsequent options will facilitate the registration fee payment."
    },
    {
        title: "Complete the application form available after logging into your profile",
        content: "Candidates must fill out the application form that appears after logging in, providing personal and academic information as required."
    }
];

const offlineThirdSteps = [
    {
        main: "For assistance, call Toll-Free 8744052891-93\n7290034978 Admissions Enquiry: 1800-200-0777 or email info@akgec.ac.in or SMS (Space) 'YOUR NAME' to 1234567890"
    },
];


const OnlineStepSection = ({ title, steps, isOpen, toggle }) => (
    <div className="border">
        <h2 className={`${isOpen ? 'bg-secondary' : ''}`}>
            <button
                className="flex py-4 px-5 text-base font-novaReg w-full max-sm:text-sm"
                onClick={toggle}
            >
                {title}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                )}
            </button>
        </h2>
        {isOpen && (
            <div className="content py-4 px-5">
                <div className='block overflow-x-auto'>
                    {steps.map((step, index) => (
                        <div key={index} className="mb-4">
                            <p className='text-base font-novaReg mb-4 max-sm:text-sm'>{step.main}</p>
                            <h5 className="font-novaReg text-xl mb-2 max-sm:text-base">{step.title}</h5>
                            <p className="text-base mb-6 font-novaReg max-sm:text-sm">{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const OfflineStepSection = ({ title, steps, isOpen, toggle }) => (
    <div className="border">
        <h2 className={`${isOpen ? 'bg-secondary' : ''}`}>
            <button
                className="flex text-base py-4 px-5 font-novaReg w-full max-sm:text-sm"
                onClick={toggle}
            >
                {title}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                )}
            </button>
        </h2>
        {isOpen && (
            <div className="content py-4 px-5">
                <div className='block overflow-x-auto'>
                    <ul className="mb-4 pl-5 list-disc">
                        {steps.slice(1).map((step, index) => (
                            <li key={index} className="text-base mb-2 font-novaReg max-sm:text-sm">{step.content}</li>
                        ))}
                    </ul>
                    <p className="text-base font-novaBold mb-4 max-sm:text-sm">{steps[0].main}</p>
                </div>
            </div>
        )}
    </div>
);

const HowToApply = () => {
    const [openIndexOnline, setOpenIndexOnline] = useState(0);
    const [openIndexOffline, setOpenIndexOffline] = useState(0);

    const toggleOnlineContent = (index) => {
        setOpenIndexOnline(openIndexOnline === index ? null : index);
    };

    const toggleOfflineContent = (index) => {
        setOpenIndexOffline(openIndexOffline === index ? null : index);
    };

    return (
        <>
            <div className="">
                <h3 className="text-4xl font-novaReg mb-3 w-full max-lg:text-3xl max-sm:text-xl max-sm:font-novaSemi">AKG University Admissions 2024</h3>
                <h3 className="text-2xl font-novaReg mb-5 w-full max-lg:text-xl max-md:mb-3 max-sm:text-lg max-sm:mb-3">How to Apply for AKG University Admissions 2024</h3>
                <hr className="w-full my-4" />

                {/* Online Mode Section */}
                <div className="w-full">
                    <h4 className="mb-2 text-xl md:text-2xl font-novaReg max-sm:text-lg">Online Mode - AKG Registration</h4>
                    <OnlineStepSection
                        title="Step 1 - Register at AKGET"
                        steps={firstSteps}
                        isOpen={openIndexOnline === 0}
                        toggle={() => toggleOnlineContent(0)}
                    />
                    <OnlineStepSection
                        title="Step 2 - Download E-Prospectus"
                        steps={secondSteps}
                        isOpen={openIndexOnline === 1}
                        toggle={() => toggleOnlineContent(1)}
                    />
                    <OnlineStepSection
                        title="Step 3 - Complete Application Process"
                        steps={thirdSteps}
                        isOpen={openIndexOnline === 2}
                        toggle={() => toggleOnlineContent(2)}
                    />
                </div>
                <br />
                <br />
                <div className="w-full">
                    <h4 className="mb-2 text-xl md:text-2xl font-novaReg max-sm:text-lg">Offline Mode - AKG Registration</h4>
                    <OfflineStepSection
                        title="Option 1 - Download Admission Form"
                        steps={offlineFirstSteps}
                        isOpen={openIndexOffline === 0}
                        toggle={() => toggleOfflineContent(0)}
                    />
                    <OfflineStepSection
                        title="Option 2 - Submit Admission Form"
                        steps={offlineSecondSteps}
                        isOpen={openIndexOffline === 1}
                        toggle={() => toggleOfflineContent(1)}
                    />
                    <OfflineStepSection
                        title="Option 3 - Email/ SMS"
                        steps={offlineThirdSteps}
                        isOpen={openIndexOffline === 2}
                        toggle={() => toggleOfflineContent(2)}
                    />
                </div>
            </div>
        </>
    );
};

export default HowToApply;
