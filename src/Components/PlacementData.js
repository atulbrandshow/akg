import React from 'react'

const PlacementData = ({ data }) => {
    const placementsData = []
    for (let i = 1; i <= 10; i++) {
        const title = data?.[`Placement-Title-${i}`]
        const description = data?.[`Placement-Desc-${i}`]
        const companies = data?.[`Placement-Company-${i}`]
        const studentsSelected = data?.[`Placement-Students-${i}`]
        const highestPackage = data?.[`Placement-Package-${i}`]

        if (title && description && companies && studentsSelected && highestPackage) {
            const match = highestPackage.match(/^(\d+(?:\.\d+)?)([a-zA-Z]+)?$/);
            let packageValue = null, packageUnit = null;

            if (match) {
                packageValue = parseFloat(match[1]);
                packageUnit = match[2] || null;
            }

            placementsData.push({
                title,
                description,
                companies,
                studentsSelected,
                highestPackage: {
                    value: packageValue,
                    unit: packageUnit
                }
            });
        }
    }

    return (
        <section className="mx-auto max-w-7xl max-xl:max-w-5xl max-lg:max-w-2xl max-md:max-w-xl grid grid-cols-2 max-lg:grid-cols-1 gap-5 pb-10 px-4 max-md:px-2 py-10">
            {placementsData?.map((placement, index) => (
                <div key={index} className="flex flex-col justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
                    <div className="p-6 max-sm:p-4">
                        <span className="text-[#df8934] text-xl font-novaSemi">Placements</span>
                        <h1 className="mt-3 text-3xl font-novaReg leading-none">{placement.title}</h1>
                        <p className="text-[13px] leading-4 mt-3">{placement.description}</p>
                    </div>
                    <div className="flex w-full text-white">
                        <div className="flex-1 flex justify-center items-center flex-col text-center bg-center bg-contain py-8 max-sm:py-4 bg-[#261172] bg-blend-multiply bg-staff-bg">
                            <span className="block text-center text-5xl max-sm:text-2xl font-novaBold">{placement.companies}</span>
                            <p className="text-center text-sm leading-none max-w-20">Total Companies</p>
                        </div>
                        <div className="flex-1 flex justify-center items-center flex-col bg-[#00a362] py-5">
                            <span className="block text-center text-5xl max-sm:text-2xl font-novaBold">{placement.studentsSelected}</span>
                            <p className="text-center text-sm leading-none max-w-20">Students Selected</p>
                        </div>
                        <div className="flex-1 flex justify-center items-center flex-col bg-[#5c5c5c] py-5">
                            <span className="block text-center text-5xl max-sm:text-2xl font-novaBold">
                                {placement.highestPackage.value} <span className="text-xl max-sm:text-base -ml-2">{placement.highestPackage.unit}</span>
                            </span>
                            <p className="text-center text-sm leading-none max-w-28">International Highest Package</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default PlacementData