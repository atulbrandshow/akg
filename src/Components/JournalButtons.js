import Link from 'next/link'
import React from 'react'

const JournalButtons = ({ journalData }) => {

    return (
        <div className='p-5'>
            <h2 className='font-novaSemi text-center text-xl'>{journalData.heading}</h2>
            <div className='mt-10 grid grid-cols-2 gap-y-4 place-items-center'>
                {journalData?.data?.map((elem) =>
                    <Link href={elem.url} target='_blank' className='bg-cyan-500 w-fit text-white px-6 py-2 text-sm rounded-md hover:bg-black hover:text-white hover:scale-95 transition duration-150 ease-in-out'>{elem.name}</Link>
                )}
            </div>
        </div>
    )
}

export default JournalButtons