"use client"

import ApplicationTable from "../Components/ApplicationTable"
import SideBar from "../Components/SideBar"

const OnlineApplication = () => {
    

    return (
        <div className="flex bg-gray-50">
            <SideBar />
            <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
                <ApplicationTable />
            </div>
        </div>
    )
}

export default OnlineApplication
