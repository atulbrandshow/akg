import { GraduationCap, Factory, Earth, BriefcaseBusiness, Sprout } from "lucide-react"

const SchoolHeader = ({ heading, desc, gradientColors, banner }) => {
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
                        <p className='text-xs mt-4 leading-5'>{desc}</p>
                        <ul className='grid grid-cols-2 gap-5 mt-16'>
                            <li className='flex items-center gap-2'>
                                <GraduationCap size={32} strokeWidth={1} />
                                <p className='font-novaReg'>Educational Mastery</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <Factory size={28} strokeWidth={1} />
                                <p className='font-novaReg'>Industry Collaboration</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <Earth size={32} strokeWidth={1} />
                                <p className='font-novaReg'>International Outlook</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BriefcaseBusiness size={28} strokeWidth={1} />
                                <p className='font-novaReg'>Flexible Career Paths</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <Sprout size={32} strokeWidth={1} />
                                <p className='font-novaReg'>Value for Investment</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SchoolHeader