import Link from 'next/link'
import React from 'react'

const data = [
    { id: 1, course: "B.Tech. (Computer Science & Engineering)" },
    { id: 2, course: "B.Tech. (Computer Science & Engineering)" },
    { id: 3, course: "B.Tech. (Computer Science & Engineering)" },
    { id: 4, course: "B.Tech. (Computer Science & Engineering)" },
    { id: 5, course: "B.Tech. (Computer Science & Engineering)" },
]


const AccreditationStatus = () => {
    return (
        <section className='px-5'>
            <div className='space-y-3'>
                <h2 className='text-3xl font-novaReg'>NAAC Accreditation Status</h2>
                <div className='flex justify-around items-center p-5 border border-gray-300'>
                    <img className='w-52' src="/image/NAACLogo.jpg" alt="NAAC++" />
                    <div className='flex flex-col max-w-lg'>
                        <span className='text-2xl font-novaSemi'>Accredited with A++ Grade</span>
                        <p className='mt-3 text-lg leading-5 font-novaReg'>Our institution stands as a hallmark of excellence in education, research, innovation, and holistic student success, fostering leadership and growth in a dynamic learning environment.</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 space-y-3'>
                <h2 className='text-3xl font-novaReg'>NBA Accreditation Status</h2>
                <div>
                    <table className="min-w-full my-4 bg-white rounded-lg">
                        <thead className="bg-[#363c83] text-white h-[44px] rounded-t-lg">
                            <tr className="border-b">
                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 text-base rounded-tl-lg">S.No.</th>
                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base rounded-tr-lg">Name of Programmes Accredited (Accredited for the period of three years and valid upto 30-06-2025)</th>
                            </tr>
                        </thead>
                        <tbody className="border-t-2 rounded-lg">
                            {data?.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`bg-indigo-950 text-white ${index === data.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                >
                                    <td className={`py-4 px-4 text-sm border-b border-white border-opacity-20 ${index === data.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                        {item.id}
                                    </td>
                                    <td className={`py-4 px-4 text-sm border-b border-l border-white border-opacity-20 ${index === data.length - 1 ? 'rounded-br-lg' : ''}`}>
                                        {item.course}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Link href="/pdf/mandatory-disclosure/NBA-Letter-2022-25.pdf" className='bg-gradient-to-r from-blue-600 to-violet-600 text-white py-1.5 rounded-md px-4'>Accreditation Letter</Link>
            </div>
        </section>
    )
}

export default AccreditationStatus