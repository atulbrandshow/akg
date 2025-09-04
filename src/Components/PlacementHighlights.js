'use client';

import Button from "./Button";
import PlacementSlider from "./PlacementSlider";

export default function PlacementHighlights({ data }) {
    const d = data?.pageData;

    const words = d?.Placement_Title?.trim().split(" ");
    const last = words?.pop();
    const first = words?.join(" ");

    const placementData = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`PT-${i}`];
        const desc = d?.[`PD-${i}`];

        if (title && desc) {
            placementData.push({
                title,
                desc,
            });
        }
    }

    const placement1 = d?.Placement_Images1 || [];
    const placement2 = d?.Placement_Images2 || [];
    const placement3 = d?.Placement_Images3 || [];
    const placement4 = d?.Placement_Images4 || [];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 max-sm:gap-2 h-auto">
            <div className="flex flex-col justify-center p-5 md:p-10 lg:p-16 bg-BG14 bg-center bg-cover text-white bg-black bg-blend-multiply bg-opacity-75">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-novaLight">
                    <span className='font-novaSemi bg-gradient-to-r from-green-500 to-indigo-400 bg-clip-text text-transparent animate-gradient'>{first}</span> {last}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl font-novaLight leading-5 mt-3">{d?.Placement_Paragraph}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
                    {placementData.map((item, index) => {
                        // Extract number and unit from title
                        const match = item.title.match(/^([\d.\-]+)\s?(LPA|CR)?$/i);
                        const number = match?.[1] || item.title;
                        const unit = match?.[2] || "";

                        return (
                            <div key={index} className="text-start">
                                <p className={`text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4 ${index >= 6 ? 'text-orange-300' : ''}`}>
                                    {number}
                                    {unit && (
                                        <small className={`font-novaLight text-lg ${index >= 6 ? 'text-white' : ''}`}>
                                            {unit}
                                        </small>
                                    )}
                                </p>
                                <p className="text-sm md:text-base font-novaReg leading-none mt-2">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-start space-x-4 mt-6 max-lg:justify-center">
                    <Button text={"REGISTER"} className="bg-btn-gradient tracking-wider text-white text-sm font-novaBold px-6 py-2 max-[360px]:text-[11px] rounded-md hover:bg-[#3c5686] hover:border-b-4 hover:border-[#ccce48] hover:transform hover:transition-transform hover:ease-in-out hover:duration-500 scale-y-105" />
                    <Button text={"VIEW PLACEMENTS"} className="border border-white tracking-wider text-white text-sm font-novaBold px-4 py-2 max-[360px]:text-[11px] rounded-md hover:bg-white hover:text-black" />
                </div>
            </div>
            <div className="flex flex-col justify-center my-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-sm:gap-2 max-sm:px-2 max-xl:px-5">
                    <PlacementSlider placement={placement1} delay={4000} />
                    <PlacementSlider placement={placement2} delay={3000} />
                    <PlacementSlider placement={placement3} delay={3500} />
                    <PlacementSlider placement={placement4} delay={4500} />
                </div>
            </div>
        </div>
    );
}