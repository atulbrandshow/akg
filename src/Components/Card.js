import React from 'react'

const Card = ({ img, title, desc }) => {
    return (
        <div className='bg-white col-span-4 max-lg:col-span-6 max-sm:col-span-12 rounded-lg border-b-[5px] border-yellow-500 overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]'>
            <div className='h-60 max-2xl:h-48 w-full overflow-hidden group'>
                <img className='h-full w-full object-cover object-top transition-transform duration-[5s] group-hover:scale-125' src={img} alt={title} />
            </div>
            <div className='mt-3 px-4 max-sm:px-2'>
                <h2 className=' max-xl:text-base leading-none uppercase font-novaBold'>
                    {title}
                </h2>
                <p className='py-2 leading-none text-sm italic font-novaReg'>{desc}</p>
            </div>
        </div>
    )
}

export default Card