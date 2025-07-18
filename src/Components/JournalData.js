"use client"

import React, { useState } from "react"

export default function JournalData({tabs, content}) {
    const [activeTab, setActiveTab] = useState("About")

    return (
        <div className="grid grid-cols-8 bg-gray-100">
            <div className="col-span-2 sticky top-24 h-fit bg-white shadow-md rounded-lg">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-novaBold uppercase">Navigation</h2>
                </div>
                <div className="p-4">
                    <div className="flex flex-col space-y-2">
                        {tabs.map((tab) => (
                            <ul key={tab}>
                                <li className={`px-4 py-2 rounded font-novaReg cursor-pointer ${activeTab === tab ? "bg-black text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"} 
                            justify-start`} onClick={() => setActiveTab(tab)}>{tab}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-6 flex-grow ml-2 overflow-auto bg-white shadow-md rounded-lg">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-novaBold uppercase">{activeTab}</h2>
                </div>
                <div className="p-4">
                    <span className="whitespace-pre-wrap">{content[activeTab]}</span>
                </div>
            </div>
        </div>
    )
}