"use client";

import React, { useState } from "react";
import JournalTable from "./JournalTable";
import { ChevronDown, ChevronUp } from "lucide-react";
import JournalButtons from "./JournalButtons";


const Accordion = ({years, dataMapping}) => {
const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id); // Toggle the active ID
  };

  return (
    <div className="accordion">
      {years.map((journal) => (
        <div key={journal.id} className="border rounded-lg mb-2 overflow-hidden text-black hover:text-white border-gray-300">
          <button
            onClick={() => handleToggle(journal.id)}
            className={`flex justify-between items-center w-full text-left p-4 hover:bg-indigo-950 ${activeId === journal.id && "bg-indigo-950 text-white"}`}
          >
            <span className="">{journal.title}</span>
            <span>{activeId === journal.id ? <ChevronUp /> : <ChevronDown />}</span>
          </button>
          {activeId === journal.id && (
            <div className="p-4 text-black bg-gray-50">
              {journal.id >= 14 && journal.id <= 19 ? <JournalButtons journalData={dataMapping[journal.id]} /> : <JournalTable journalData={dataMapping[journal.id]} cseData={dataMapping[journal.id]} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;