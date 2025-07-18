import React from 'react'
import ApplicationTable from './ApplicationTable';

const DashboardSection2 = () => {
    return (
        <div className="mt-8 grid grid-cols-5 gap-8">
            <div className='col-span-3 bg-white border border-gray-200 p-6 shadow-md rounded-2xl'>
                <ApplicationTable />
            </div>
            <div className="col-span-2 bg-white border border-gray-200 p-6 shadow-md rounded-2xl">
                <div className='flex justify-center items-center h-full'>
                    <h2 className='text-xl font-novaReg'>Coming Soon...!!</h2>
                </div>
            </div>
        </div>
    )
}

export default DashboardSection2