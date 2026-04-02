"use client";

import Link from "next/link";
import { useState } from "react";
import Form from "./Form";

const bgImages = {
  BG1: "/image/building/building1.webp",
  BG2: "/image/building/building2.webp",
  BG3: "/image/building/building3.webp",
  BG4: "/image/building/building4.webp",
  BG5: "/image/building/building5.webp",
  BG6: "/image/building/building6.webp",
  BG7: "/image/building/building7.webp",
  BG8: "/image/building/building8.webp",
  BG9: "/image/building/building9.webp",
  BG10: "/image/building/building10.webp",
  BG11: "/image/building/central_Library.webp",
  BG12: "/image/building/girls hostel.webp",
  BG13: "/image/building/lecture theatre.webp",
  "BG-Building-1": "/image/building/building-11.webp",
  "BG-Building-2": "/image/building/building-12.webp",
  "BG-Building-3": "/image/building/building-13.webp",
  "BG-Building-4": "/image/building/building-14.webp",
  "BG-Building-5": "/image/building/building-15.webp",
  "BG-Building-6": "/image/building/building-16.webp",
  "BG-Building-7": "/image/building/building-17.webp",
  "BG-Building-8": "/image/building/building-18.webp",
  "BG-Building-9": "/image/building/building-19.webp",
  "BG-Building-10": "/image/building/building-20.webp",
  "BG-Building-11": "/image/building/building-21.webp",
  "BG-Building-12": "/image/building/building-22.webp",
  "BG-Building-13": "/image/building/building-23.webp",
  "BG-Building-14": "/image/building/building-24.webp",
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
        required: true,
      },
      { id: "message", type: "textarea", label: "Message", required: true },
    ],
  },
  contactUs: {
    title: "Contact Us",
    fields: [
      { id: "name", type: "text", label: "Your Name", required: true },
      { id: "email", type: "email", label: "Your Email", required: true },
      {
        id: "message",
        type: "textarea",
        label: "Your Message",
        required: true,
      },
    ],
  },
};

export default function Header({
  title,
  height,
  subHeading,
  buttonText = "Click Here",
  buttonLink = "#",
  formKey = "applyNow",
  gradient = true,
  position = "center",
  bgKey = "BG3",
  bgUrl,
  bg,
  custom = false,
  titleColor = "text-white",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bg_url = custom ? bgUrl : bgImages[bgKey] || "/image/header-image.jpg";
  const formConfig = formConfigs[formKey];

  return (
    <div
      className={`relative isolate overflow-hidden flex flex-col justify-end pt-24 pb-12 sm:pt-32 xl:pt-48 max-[400px]:py-12 ${height}`}
    >
      <div className="absolute inset-0 -z-10 h-full w-full">
        {bg ? (
          <div className={`h-full w-full bg-cover bg-no-repeat bg-${position} ${bg}`} />
        ) : (
          <img
            alt=""
            src={bg_url}
            className={`h-full w-full object-${position} object-cover`}
          />
        )}
        {gradient && (
          <div
            className={`absolute inset-0 ${typeof gradient === "string"
              ? gradient
              : "bg-black/60"
              }`}
          ></div>
        )}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-0 pt-32 w-full">
        <div className="lg:mx-0">
          <h2 className={`text-3xl max-w-lg font-novaReg tracking-tight ${titleColor} sm:text-[40px]`}>
            {title}
          </h2>
          <p className="mt-2 text-white font-novaReg max-w-xl text-lg lg:text-xl">
            {subHeading}
          </p>
          <div className="mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-md uppercase bg-brand-yellow px-5 py-3 max-sm:py-2 max-sm:text-sm text-base font-novaBold tracking-wider text-brand-blue hover:pl-8 shadow-sm duration-500"
            >
              Apply Now ➜
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && formConfig && <Form setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
