import { GraduationCap, Factory, Earth, BriefcaseBusiness, Sprout } from "lucide-react"

const SchoolHeader = ({ heading, desc, banner, data }) => {

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

    
    return (
        <section className={`relative ${banner} bg-cover bg-center h-[70vh] lg:h-[90vh] w-full text-white`}>
            <div className='absolute inset-0 opacity-75 bg-gradient-to-r from-cyan-600 via-cyan-900 to-transparent'></div>
            <div className='max-w-[1440px] mx-auto relative z-10 h-full flex items-end justify-start'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-10'>
                    <div className='flex flex-col justify-center h-full pb-10'>
                        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-novaReg leading-tight lg:leading-snug'>{heading}</h2>
                        <p className='font-novaReg mt-4 lg:text-lg leading-snug max-w-2xl'>{desc}</p>
                        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 mt-10 lg:mt-16'>
                            {items.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-3'>
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