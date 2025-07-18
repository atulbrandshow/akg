import React from 'react'

const SpotlightHighlight = () => {
    return (
        <section className="max-w-7xl mx-auto px-3">
            <div className="py-8 max-sm:py-4">
                <div className="max-w-3xl mx-auto mb-7">
                    <h1 className="text-4xl font-novaBold text-center mb-4">Spotlight at AKG</h1>
                    <p className="text-center text-lg font-novaLight my-4">Who knows us? EVERYONE! Where are we? EVERYWHERE!</p>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="bg-blue-900 text-white p-10 w-full h-auto rounded-t-3xl rounded-l-3xl max-sm:px-2.5">
                            <h3 className="text-xs uppercase mb-2 font-novaReg text-secondary">AICRA 2018 Award</h3>
                            <p className="text-3xl font-novaBold my-4 max-sm:text-xl max-md:text-2xl">AICRA 2018 Awards for Best Technology Infrastructure of the Year and Best Vocational Robotics Educational Centre</p>
                            <button className="bg-yellow-500 text-black font-bold py-3 px-5 rounded-lg max-sm:py-1.5 max-sm:text-sm max-sm:px-2.5">KNOW MORE →</button>
                        </div>
                        <div className="shadow-lg w-full h-auto">
                            <img src="/image/national-admission/sport-light.jpg" alt="University officials" className="rounded-t-3xl" />
                        </div>
                        <div className="bg-[#ffedbd] p-6 shadow-lg w-full h-auto rounded-t-3xl rounded-r-3xl">
                            <h3 className="text-xs uppercase mb-2 font-novaReg text-primary">AICRA 2020 Awards</h3>
                            <p className="text-3xl font-novaBold my-4 max-sm:text-xl max-md:text-2xl">India STEM College Award and Best Robolab Setup</p>
                            <button className="bg-yellow-500 text-black font-bold py-3 px-5 rounded-lg max-sm:py-1.5 max-sm:text-sm max-sm:px-2.5">KNOW MORE →</button>
                        </div>
                        <div className="bg-teal-500 p-6 shadow-lg w-full h-auto rounded-l-3xl rounded-b-3xl">
                            <h3 className="text-xs uppercase mb-2 font-novaReg text-secondary">Dialogue India 2018 Award</h3>
                            <p className="text-3xl font-novaBold my-4 max-sm:text-xl max-md:text-2xl text-white">Dialogue India 2018 Award for Best Private University in North India</p>
                            <button className="bg-primary text-white font-bold py-3 px-5 rounded-lg max-sm:py-1.5 max-sm:text-sm max-sm:px-2.5 hover:bg-transparent">KNOW MORE →</button>
                        </div>
                        <div className="shadow-lg w-full h-auto rounded-b-3xl">
                            <img src="/image/national-admission/award-for-excellence.jpg" alt="Convocation ceremony" className="rounded-b-3xl" />
                        </div>
                        <div className="bg-secondary text-white p-6  w-full h-auto rounded-r-3xl rounded-b-3xl">
                            <h3 className="text-xs uppercase mb-2 font-novaReg text-primary">NABL</h3>
                            <p className="text-3xl text-black font-novaBold my-4 max-sm:text-xl max-md:text-2xl">Accreditation of Measurement and Metrology Centre by National Accreditation Board for Testing and Calibration Laboratories</p>
                            <button className="bg-primary text-white font-bold py-3 px-5 rounded-lg max-sm:py-1.5 max-sm:text-sm max-sm:px-2.5">KNOW MORE →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpotlightHighlight