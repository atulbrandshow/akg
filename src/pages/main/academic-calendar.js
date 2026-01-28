"use client";

import React, { useState } from "react";
import { calendarEven, calendarOdd } from "@/Json/CalendarData";
import Header from "@/Components/Header";
import Calendar from "@/Components/Calendar";
import AcademicCalendar from "../pagesComp/AcademicCalendar";


const Home = () => {
    const [currentSemester, setCurrentSemester] = useState('even');
    
    const calendarData = currentSemester === 'even' ? calendarEven : calendarOdd;

    return (
        <>
        <div className="bg-gray-100">
        <Header
            title={<>Academic <br /> Calendar 2024-25</>}
            bgKey="BG11"
            buttonText="Apply Now"
            buttonType={"form"}
            position="bottom"
            gradient={"bg-gradient-to-r from-black to-slate-700/"}
        />
            <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-5 px-6 max-sm:px-0">
                <div className="w-full max-sm:px-2">
                  <AcademicCalendar calendarData={calendarData} currentSemester={currentSemester}/>
                </div>
            </section>
        </div>
        </>
    )
}


export default Home;