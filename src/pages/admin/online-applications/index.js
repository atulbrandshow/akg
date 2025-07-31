"use client"

import ApplicationTable from "../Components/ApplicationTable"
import SideBar from "../Components/SideBar"

const OnlineApplication = () => {
    

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <SideBar />
            <div className="flex-1 pt-10 px-10 overflow-x-auto">
                <ApplicationTable />
            </div>
        </div>
    )
}

export default OnlineApplication
