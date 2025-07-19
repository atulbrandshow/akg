import React from 'react'

const CoreValue = () => {
    return (
        <div className="">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-novaReg mb-3">Core Values</h1>
            <p className="font-novaReg mb-2 max-sm:text-sm">The Core Values of the University as under</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-2">
                <div className="bg-HumanDignity text-white p-10 max-sm:p-2 flex items-center gap-5 bg-center bg-cover bg-[#3b210c] bg-blend-overlay min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-1.webp"
                        alt="carrer-icon-1"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Human Dignity</h4>
                        <ul className='max-lg:text-sm font-novaReg'>
                            <li className="list-disc">Encouraging Respect</li>
                            <li className="list-disc">Ensuring Fairness and Inclusivity</li>
                        </ul>
                    </div>
                </div>

                <div className="text-white p-10 max-sm:p-2 bg-[#6a7414] flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-2.webp"
                        alt="carrer-icon-1"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Empathy</h4>
                        <ul className='max-lg:text-sm font-novaReg'>
                            <li className="list-disc">Demonstrating Sensitivity to Other's Struggles</li>
                            <li className="list-disc">Showing Solidarity through Action</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#c75622] text-white p-10 max-sm:p-2 flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-3.webp"
                        alt="carrer-icon-1"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Humility</h4>
                        <ul className='max-lg:text-sm font-novaReg'>
                            <li className="list-disc">Balancing Success with Humility</li>
                            <li className="list-disc">Cultivating an Open Attitude towards Learning</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-Giving text-white p-10 max-sm:p-2 bg-center bg-cover bg-[#251470] bg-blend-overlay flex items-center gap-5 min-h-52 max-sm:min-h-48">
                    <img
                        src="/image/core-value/carrer-icon-4.webp"
                        alt="carrer-icon-1"
                        className="align-middle overflow-clip mr-4 max-sm:w-16"
                    />
                    <div>
                        <h4 className="text-2xl max-sm:text-xl font-semi-bold mb-3">Giving</h4>
                        <ul className='max-lg:text-sm font-novaReg'>
                            <li className="list-disc">Enhancing Society, Nation, and Family</li>
                            <li className="list-disc">Empowering Others through Knowledge to Promote a Purposeful and Enlightened Community</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreValue