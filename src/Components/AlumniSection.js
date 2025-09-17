import Image from 'next/image'
import React from 'react'

const alumniData = [
    {
        id: 1,
        img: "/image/student/1.png",
        name: "Shivani Singh",
        companyName: "Amazon",
        package: "10.50 LPA",
        uid: "4B37H37K7768",
    },
    {
        id: 2,
        img: "/image/student/2.png",
        name: "Riya Verma",
        companyName: "Google",
        package: "12.00 LPA",
        uid: "7D29F48G9821",
    },
    {
        id: 3,
        img: "/image/student/3.png",
        name: "Priya Sharma",
        companyName: "Microsoft",
        package: "11.20 LPA",
        uid: "6C48J59L4729",
    },
    {
        id: 4,
        img: "/image/student/4.png",
        name: "Aditya Mehra",
        companyName: "Infosys",
        package: "8.40 LPA",
        uid: "9E15K62M8347",
    },
    {
        id: 5,
        img: "/image/student/1.png",
        name: "Neha Gupta",
        companyName: "TCS",
        package: "7.80 LPA",
        uid: "3A94P71N6254",
    },
    {
        id: 6,
        img: "/image/student/4.png",
        name: "Arjun Yadav",
        companyName: "Wipro",
        package: "6.50 LPA",
        uid: "8F63Q82R1936",
    },
]


const AlumniSection = () => {
    return (
        <div className="mb-10 max-w-7xl mx-auto sm:px-4 md:px-6">
            {/* Blue header section */}
            <div className="bg-blue-600 h-60 rounded-t-md p-6 flex flex-col items-center text-center justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-novaReg mb-4">
                    Meet the Shining Stars of BBA, AKG University.
                </h2>
                <p className="text-white/80 max-w-4xl text-sm sm:text-base md:text-lg font-novaReg">
                    Our alumni have set benchmarks of excellence by securing top positions in
                    leading global companies. Their success is a testament to the quality of
                    education and guidance at AKG University.
                </p>
            </div>

            {/* Gray section with alumni cards */}
            <div className="bg-gray-50 py-10 max-[430px]:px-10  px-4 md:px-10 lg:px-20 xl:px-28">
                <div className="grid max-[430px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                    {alumniData.map((alumni) => (
                        <div
                            key={alumni.id}
                            className="bg-white rounded-3xl p-5 drop-shadow-2xl border border-gray-200"
                        >
                            <div className="h-32 w-32 rounded-full overflow-hidden border-8 mx-auto">
                                <Image
                                    src={alumni.img}
                                    height={200}
                                    width={200}
                                    alt={alumni.name}
                                    className="h-full w-full object-cover object-top"
                                />
                            </div>
                            <div className="mt-5">
                                <ul className="text-sm space-y-2 font-novaSemi">
                                    <li className="text-blue-600">
                                        NAME:
                                        <br />
                                        <span className="text-black">{alumni.name}</span>
                                    </li>
                                    <li className="text-blue-600">
                                        COMPANY NAME:
                                        <br />
                                        <span className="text-black">{alumni.companyName}</span>
                                    </li>
                                    <li className="text-blue-600">
                                        PACKAGE:
                                        <br />
                                        <span className="text-black">{alumni.package}</span>
                                    </li>
                                    <li className="text-blue-600">
                                        UID:
                                        <br />
                                        <span className="text-black">{alumni.uid}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AlumniSection