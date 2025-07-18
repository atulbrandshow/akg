import React from 'react'
import { IndianRupee } from 'lucide-react'

const ProgramHeroSection = () => {
    return (
        <div className='relative bg-BG43 bg-cover h-[90vh]'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
            <div className='absolute inset-0 flex justify-center items-start flex-col max-w-7xl mx-auto'>
                <div className='px-10 max-[400px]:px-2
                '>
                    <span className='font-novaReg text-gray-300 pl-1 max-sm:pl-0 max-sm:text-xs tracking-wider mb-2 uppercase max-lg:text-sm'>Empowering Digital Innovators</span>
                    <h2 className="text-pretty text-4xl max-[500px]:text-3xl font-novaReg tracking-tighter text-white sm:text-5xl md:text-6xl">
                        B.Tech Computer<br />
                        <span className="relative whitespace-nowrap">
                            <svg aria-hidden="true" viewBox="0 0 281 40" preserveAspectRatio="none" className="absolute left-0 top-1/2 h-[0.8em] w-full fill-blue-300/70"><path fillRule="evenodd" clipRule="evenodd" d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"></path></svg>
                            <span className="relative font-novaBold text-yellow-500">Science and Engineering</span>
                        </span>
                    </h2>
                    <button className="mt-8 py-3 max-sm:px-6 max-sm:text-xs px-10 text-[15px] rounded-xl font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform  scale-y-105 tracking-widest">Apply Now</button>
                </div>
                {/* <div className='mt-auto py-10 w-full grid grid-cols-4 max-lg:grid-cols-2 gap-5 max-[400px]:gap-2
                    '>
                    <div className='flex flex-col items-center justify-center text-gray-300 border-r-4 border-yellow-400 max-sm:border-none'>
                        <span className='flex items-center text-6xl max-xl:text-5xl max-lg:text-4xl max-[400px]:text-3xl font-novaBold'><IndianRupee className='w-12 h-12 max-xl:h-8 max-xl:w-8 max-lg:h-6 max-lg:w-6' />1.13<small className='text-2xl max-lg:text-base max-lg:mt-3 font-novaReg mt-5'>CR</small></span>
                        <span className='font-novaSemi tracking-wider text-sm max-sm:text-xs w-32 text-center text-gray-400'>Highest National Package</span>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-300 border-r-4 max-lg:border-none border-yellow-400'>
                        <span className='flex items-center text-6xl max-xl:text-5xl max-lg:text-4xl max-[400px]:text-3xl font-novaBold'>1406<small className='text-2xl font-novaReg mt-5'></small></span>
                        <span className='font-novaSemi tracking-wider text-sm max-sm:text-xs w-28 max-sm:w-24 text-center text-gray-400'>Placement Offers</span>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-300 border-r-4 border-yellow-400 max-sm:border-none'>
                        <span className='flex items-center text-6xl max-xl:text-5xl max-lg:text-4xl max-[400px]:text-3xl font-novaBold'><IndianRupee className='w-12 h-12 max-xl:h-8 max-xl:w-8 max-lg:h-6 max-lg:w-6' />33.80 <small className='text-2xl max-lg:text-base max-lg:mt-3 font-novaReg mt-5'>LPA</small></span>
                        <span className='font-novaSemi tracking-wider text-sm max-sm:text-xs w-48 max-sm:w-32 text-center text-gray-400'>Highest International Package</span>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-300'>
                        <span className='flex items-center text-6xl max-xl:text-5xl max-lg:text-4xl max-[400px]:text-3xl font-novaBold'>282<small className='text-2xl font-novaReg mt-5'></small></span>
                        <span className='font-novaSemi tracking-wider text-sm max-sm:text-xs w-28 max-sm:w-20 text-center text-gray-400'>Highest Package</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ProgramHeroSection