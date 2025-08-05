import { GraduationCap, Factory, Earth, BriefcaseBusiness, Sprout } from "lucide-react"

const SchoolHeader = ({ heading, desc, gradientColors, banner, data }) => {

    const icons = [GraduationCap, Factory, Earth, BriefcaseBusiness, Sprout]

    const items = [];
    for (let i = 1; i <= 10; i++) {
        const title = data?.[`HT-${i}`];

        if (title) {
            const IconComponent = icons[i % icons.length];
            items.push({
                icon: <IconComponent size={24} strokeWidth={1} />,
                title,
            });
        }
    }

    const gradientStyle = {
        background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
    };
    return (
        <section className={`relative ${banner} bg-cover bg-top w-full text-white`}>
            <div className='absolute inset-0 max-lg:w-full opacity-75' style={gradientStyle}></div>
            <div className='max-w-7xl pt-56 mx-auto relative z-10'>
                <div className='grid grid-cols-2 gap-10 pb-10 max-lg:pb-0 max-lg:grid-cols-1'>
                    <div className='pb-10 px-5 max-lg:pb-0'>
                        <h2 className='text-4xl max-lg:text-3xl max-md:text-2xl  font-novaReg leading-10'>{heading}</h2>
                        <p className='font-novaReg mt-4 leading-5'>{desc}</p>
                        <ul className='grid grid-cols-2 gap-5 mt-16'>
                            {items.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-2'>
                                        {item.icon}
                                        <p className='font-novaReg'>{item.title}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SchoolHeader