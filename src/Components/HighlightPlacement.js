import React from 'react'
import Button from './Button'

const placementHighlights = [
    {
        "value": "12000+",
        "label": <>Placement<br /> Offers</>
    },
    {
        "value": "1000+",
        "label": <>Company<br /> Visits</>
    },
    {
        "value": "2.5 CR",
        "label": <>Highest International<br /> Package Offered</>
    },
    {
        "value": "60 LPA",
        "label": <>Highest National<br /> Package Offered</>
    },
    {
        "value": "25 LPA",
        "label": <>Package Offered<br /> by 20+ Companies</>
    },
    {
        "value": "15 LPA",
        "label": <>Package Offered<br /> by 30+ Companies</>
    },
    {
        "value": "12 LPA",
        "label": <>Package Offered<br /> by 50+ Companies</>
    },
    {
        "value": "8 LPA",
        "label": <>Package Offered<br /> by 200+ Companies</>
    }
];

const HighlightPlacement = () => {
    return (
        <section className="bg-[#249ee1] py-16">
            <div className="max-w-[1400px] mx-auto px-3 flex flex-col justify-center p-5 md:p-10 lg:p-16 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-novaLight text-center mb-5">
                    <span className="font-novaSemi bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent">PLACEMENT</span> HIGHLIGHTS 2023-24
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 my-6 text-center">
                    {placementHighlights.map((highlight, index) => (
                        <div key={index} className={`p-4 ${index % 4 === 3 ? "" : "border-r"} ${index >= 4 && index < 8 ? "" : "border-b border-white"}`}>
                            <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">
                                {highlight.value.includes("CR") ? (
                                    <>
                                        {highlight.value.split(" ")[0]} <small className="font-novaLight -ml-1 text-lg">CR</small>
                                    </>
                                ) : (
                                    <>
                                        {highlight.value.split(" ")[0]} <small className="font-novaLight -ml-1 text-lg">LPA</small>
                                    </>
                                )}
                            </p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">{highlight.label}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center space-x-4 mt-5 max-lg:justify-center">
                    <Button text={"APPLY TODAY"} className="bg-secondary text-white text-sm font-novaBold px-6 py-2 rounded-md hover:bg-[#3c5686] transition-transform duration-500 scale-y-105" />
                </div>
            </div>
        </section>
    )
}

export default HighlightPlacement