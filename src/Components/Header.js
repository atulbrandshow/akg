"use client";

import { useState } from "react";

const bgImages = {
    'BG1': "/image/building/building1.webp",
    'BG2': "/image/building/building2.webp",
    'BG3': "/image/building/building3.webp",
    'BG4': "/image/building/building4.webp",
    'BG5': "/image/building/building5.webp",
    'BG6': "/image/building/building6.webp",
    'BG7': "/image/building/building7.webp",
    'BG8': "/image/building/building8.webp",
    'BG9': "/image/building/building9.webp",
    'BG10': "/image/building/building10.webp",
    'BG11': "/image/building/central_Library.webp",
    'BG12': "/image/building/girls hostel.webp",
    'BG13': "/image/building/lecture theatre.webp",
};

const formConfigs = {
    applyNow: {
        title: "Apply Now",
        fields: [
            { id: "name", type: "text", label: "Full Name", required: true },
            { id: "email", type: "email", label: "Email", required: true },
            { id: "phone", type: "tel", label: "Phone Number", required: true },
            {
                id: "course",
                type: "select",
                label: "Select Course",
                options: ["B.Tech", "MBA", "MCA", "Other"],
                required: true
            },
            { id: "message", type: "textarea", label: "Message", required: true },
        ],
    },
    contactUs: {
        title: "Contact Us",
        fields: [
            { id: "name", type: "text", label: "Your Name", required: true },
            { id: "email", type: "email", label: "Your Email", required: true },
            { id: "message", type: "textarea", label: "Your Message", required: true },
        ],
    },
};

export default function Header({
    title,
    height,
    subHeading,
    buttonType,
    buttonText = "Click Here",
    buttonLink = "#",
    formKey = "applyNow",
    gradient = true,
    position = "center",
    bgKey = "BG3"
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const bg = bgImages[bgKey] || "/image/header-image.jpg";
    const formConfig = formConfigs[formKey];

    return (
        <div className={`relative isolate xl:overflow-hidden py-24 sm:py-32 xl:py-36 max-[400px]:py-12 ${height}`}>
            <div className="absolute inset-0 -z-10 h-full w-full">
                <img alt="" src={bg} className={`h-full w-full object-${position} object-cover`} />
                {gradient && <div className={`absolute inset-0 ${typeof gradient === "string" ? gradient : "bg-gradient-to-r from-black/70 to-transparent"}`}></div>}
            </div>

            <div className="relative mx-auto max-w-[1400px] px-6 py-20">
                <div className="mx-auto lg:mx-0 space-y-6">
                    <h2 className="text-3xl max-w-lg font-novaReg tracking-tight text-white sm:text-[40px]">{title}</h2>
                    <p className="mt-4 text-white font-novaReg max-w-xl text-xl lg:text-2xl">{subHeading}</p>

                    {buttonType && (
                        buttonType === "link" ? (
                            <a
                                href={buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md uppercase bg-btn-gradient animate-gradient px-5 py-3 max-sm:py-2 max-sm:text-sm mt-2 text-base font-novaBold tracking-wider text-white hover:pl-8 shadow-sm duration-500"
                            >
                                {buttonText} ➜
                            </a>
                        ) : (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-md uppercase bg-btn-gradient animate-gradient px-5 py-3 max-sm:py-2 max-sm:text-sm mt-2 text-base font-novaBold tracking-wider text-white hover:pl-8 shadow-sm duration-500"
                            >
                                {buttonText} ➜
                            </button>
                        )
                    )}
                </div>
            </div>

            {isModalOpen && formConfig && (
                <div className="relative md:absolute right-10 inset-0 flex items-center justify-end z-10">
                    <div className="bg-white p-6 md:p-4 xl:p-6 rounded-lg shadow-lg w-[400px] max-w-full mr-4 animate-slide-in">
                        <button
                            className="absolute right-8 text-gray-500 hover:text-gray-900 transition"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ✖
                        </button>
                        <h2 className="text-xl xl:text-2xl font-bold mb-4 text-gray-800">{formConfig.title}</h2>
                        <form>
                            {formConfig.fields.map((field) => (
                                <div className="relative mb-4" key={field.id}>
                                    {field.type === "select" ? (
                                        <select
                                            id={field.id}
                                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none bg-transparent"
                                            required={field.required}
                                        >
                                            <option value="" disabled selected>{field.label}</option>
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : field.type === "textarea" ? (
                                        <textarea
                                            id={field.id}
                                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none h-24 resize-none bg-transparent"
                                            placeholder=" "
                                            required={field.required}
                                        ></textarea>
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none bg-transparent"
                                            placeholder=" "
                                            required={field.required}
                                        />
                                    )}
                                </div>
                            ))}

                            <div className="flex justify-end gap-2">
                                <button type="button" className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}