"use client";

import React, { useState } from "react";
import { calendarEven, calendarOdd } from "@/Json/CalendarData";
import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Calendar from "@/Components/Calendar";
import AcademicCalendar from "../pagesComp/AcademicCalendar";


const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

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
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-10 max-sm:gap-0 px-6 max-sm:px-0">
                <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12 max-sm:px-2">
                  <AcademicCalendar calendarData={calendarData} currentSemester={currentSemester}/>
                </div>
                <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12 px-2">
                    <Calendar currentSemester={currentSemester} setCurrentSemester={setCurrentSemester} />
                    <SideBar title={"About Us"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
        </>
    )
}


export default Home;