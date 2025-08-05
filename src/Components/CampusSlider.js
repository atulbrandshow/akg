import { IMAGE_PATH } from '@/configs/config';
import Button from './Button'

const product = {
    name: 'Application UI Icon Pack',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    price: '$220',
    description:
        'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
    highlights: [
        '200+ SVG icons in 3 unique styles',
        'Compatible with Figma, Sketch, and Adobe XD',
        'Drawn on 24 x 24 pixel grid',
    ],
    imageSrc: '/image/home/building7.jpg',
    imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}

const CartData = [
    {
        title: "Research-Driven Excellence",
        description: "At Ajay Kumar Garg University, we foster big dreams—whether it's leading cutting-edge research, launching successful startups, excelling in competitive exams, or achieving global recognition in sports. We cultivate a passion for innovation and success."
    },
    {
        title: "Unmatched Industry Support",
        description: "Ajay Kumar Garg University benefits from the backing of industry leaders like Microsoft, IBM, and others. This strong industry collaboration, coupled with state-of-the-art infrastructure, drives technology-focused learning and continuous improvement."
    },
    {
        title: "Cutting-Edge Learning Approach",
        description: "At Ajay Kumar Garg University, we combine interactivity, technology, and innovation to foster adaptability and collaboration. Our modern learning dynamics provide personalized education, preparing students to meet the evolving demands of the future."
    }
]

export default function CampusSlider({ data }) {
    const d = data?.pageData;
    const title = d?.Students_Faculty_Title || "";

    const words = title.trim().split(" ");
    const first = words[0] || "";
    let middle = "";
    let last = "";

    if (words.length >= 4) {
        middle = words.slice(1, 4).join(" ");
        last = words.slice(4).join(" ");
    } else {
        middle = words.slice(1).join(" ");
        last = "";
    }

    const CartData = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`ICT-${i}`];
        const description = d?.[`ICD-${i}`];

        if (title && description) {
            CartData.push({
                title,
                description
            });
        }
    }

    return (
        <div className="bg-white py-8 max-sm:py-4">
            <div className="">
                <div className='max-w-6xl mx-auto relative z-10 max-lg:px-2 px-24 flex flex-col gap-6 mb-10 max-sm:mb-2'>
                    <h2 className="max-w-4xl mx-auto text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-novaLight text-center tracking-tight text-gray-900">
                        {first} {" "} <span className='font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient'>{middle} {" "}</span> {last}
                    </h2>
                    <p className="mt-2 mb-6 mx-auto text-2xl max-lg:text-xl max-sm:text-base text-gray-600 text-center font-novaLight">
                        {d?.Students_Faculty_Desc}
                    </p>
                </div>
                <div className='max-w-7xl mx-auto max-lg:w-full max-lg:px-0 relative z-10 px-24'>
                    <div className="lg:col-span-4 lg:row-end-1 relative">
                        <img
                            alt={product.imageAlt}
                            src={IMAGE_PATH + d?.Campus_Banner}
                            className="object-cover object-top h-[50vh] max-sm:h-72 rounded-lg max-lg:rounded-none w-full"
                        />
                        <div className="absolute max-lg:rounded-none inset-0 pb-8 pl-10 flex flex-col items-start justify-end bg-black bg-opacity-50 rounded-lg p-4">
                            <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-light mb-2 w-1/6 max-md:w-full">
                                {d?.Campus_Title}
                            </h2>
                            <p className="text-white w-1/2 max-md:w-full  text-sm md:text-base lg:text-base font-light mb-2 ">
                                {d?.Campus_Paragraph}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pt-48 bg-cover w-full flex flex-col justify-end pb-28 max-sm:pb-10 lg:-mt-36 max-lg:-mt-10 max-lg:h-auto max-lg:px-10 max-sm:px-0 max-md:px-5 max-lg:pt-16 px-20 xl:px-40'
                    style={{ backgroundImage: `url(${IMAGE_PATH + d?.Innovate_Section_Banner})` }}>
                    <div className='max-w-[1600px] mx-auto max-lg:p-10 max-sm:p-3'>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2 max-lg:col-span-3'>
                                <h3 className='text-6xl max-md:text-4xl leading-[50px] font-novaLight max-w-xl text-white mb-5'>
                                    {d?.Innovate_Section_Title}
                                </h3>
                            </div>
                            <div className='col-span-1 max-lg:col-span-3'>
                                <div className="flex justify-start space-x-4 z-10 ">
                                    <Button text={"REGISTER"} className="bg-btn-gradient animate-gradient tracking-wider text-white text-sm font-novaBold px-5 py-3 max-[400px]:text-xs rounded-xl hover:bg-[#3c5686]" />
                                    <Button text={"VIEW PLACEMENTS"} className="border border-white text-white text-sm font-novaBold px-5 py-3 rounded-xl max-[400px]:text-xs hover:bg-white hover:text-black" />
                                </div>
                            </div>
                            <div className='max-md:mt-0 max-lg:mt-10 col-span-3'>
                                <p className='text-white text-xl max-sm:text-lg max-sm:leading-5 leading-none font-novaLight max-md:pt-10'>{d?.Innovate_Section_Desc}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-16 gap-5'>
                            {CartData?.map((item, index) => (
                                <div className='col-span-1 max-lg:col-span-3 mr-10 ' key={index}>
                                    <div className='grid grid-cols-3'>
                                        <h3 className='col-span-2 max-w-52 text-white text-2xl font-novaSemi leading-none'>{item.title}</h3>
                                        <span className='text-white/50 col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></span>
                                    </div>
                                    <p className='text-white text-sm mt-5 font-novaReg'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
