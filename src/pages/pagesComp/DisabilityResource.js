const DisabilityResource = () => {
    return (
        <section className='px-5'>
            <div className=''>
                <h2 className='text-4xl font-novaReg'>Disability Resource Center: Empowering All Students</h2>
                <p className='mt-3 mb-6 text-xl font-novaReg'>A “Disability Resource Centre” has been established in Ajay Kumar Garg University, Ghaziabad, U.P.</p>
                <p className='font-novaReg text-lg'>Following are the members of this centre</p>
                <div className='grid grid-cols-2 gap-4 mt-3'>
                    <div className='flex justify-center items-start flex-col border border-gray-300 rounded-3xl p-7 '>
                        <h2 className='text-2xl font-semibold'>Prof. P.K. Chopra</h2>
                        <span className='my-2'>The facilities provided by this centre to students are:</span>
                        <ul className='list-disc pl-5 text-lg font-novaReg'>
                            <li>Ramp and lift with signage.</li>
                            <li>Hospital and ambulance facility.</li>
                            <li>Reserve seating in class to ensure accessibility.</li>
                            <li>Allow students to record during sessions.</li>
                            <li>Allow breaks during practicals.</li>
                            <li>Separate toilets with signage.</li>
                        </ul>
                    </div>
                    <div className='flex justify-start items-start flex-col border border-gray-300 rounded-3xl p-7 '>
                        <h2 className='text-2xl font-semibold'>Prof. S.L. Kapoor</h2>
                    </div>
                    <div className='flex justify-start items-start flex-col border border-gray-300 rounded-3xl p-7 h-72'>
                        <h2 className='text-2xl font-semibold'>Prof. V.K. Parashar</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DisabilityResource