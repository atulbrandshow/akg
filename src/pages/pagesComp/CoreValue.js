import React from 'react'

const CoreValue = () => {
    return (
        <div className="">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-novaReg mb-3">Core Values</h1>
            <p className="font-novaReg mb-2 max-sm:text-sm">The Core Values of the University are as follows:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-2">

                <div className="bg-HumanDignity bg-[#3b210c] text-white p-10 max-sm:p-2 flex items-center gap-5 bg-center bg-cover bg-blend-overlay min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-1.webp"
                        alt="excellence-icon"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Excellence</h4>
                        <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                            <li>Unwavering commitment to quality in teaching, research, and campus life.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#6a7414] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-2.webp"
                        alt="integrity-icon"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Integrity</h4>
                        <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                            <li>Transparency, ethics, and fairness in all dealings.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#c75622] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-3.webp"
                        alt="inclusivity-icon"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Inclusivity</h4>
                        <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                            <li>Cultivate a diverse, welcoming environment for students and staff.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-Giving bg-[#251470] text-white p-10 max-sm:p-2 bg-center bg-cover bg-blend-overlay flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-4.webp"
                        alt="innovation-icon"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Innovation</h4>
                        <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                            <li>Encourage creative thinking, discovery, and continuous improvement.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-IndustryFocus bg-[#0b4d4d] text-white p-10 max-sm:p-2 bg-center bg-cover bg-blend-overlay flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-5.webp"
                        alt="industry-icon"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Industry Focus</h4>
                        <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                            <li>Active collaboration with business, healthcare, legal, and technology partners.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#5e2a84] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-6.webp"
                        alt="social-responsibility-icon"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Social Responsibility</h4>
                        <ul className="max-lg:text-sm font-novaReg list-disc ml-5">
                            <li>Dedication to community service and development.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoreValue
