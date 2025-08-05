import React from 'react'
import { IMAGE_PATH } from '@/configs/config';

const DirectorMessage = ({ data }) => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div className="grid grid-cols-8 gap-5 mb-20 max-md:border-t-2 max-md:border-t-gray-200 pt-5">
                <div className="col-span-3 max-md:col-span-8">
                    <div className="relative">
                        <img
                            src={IMAGE_PATH + data?.Director_Image}
                            alt="director-general"
                            className="w-full aspect-square object-cover h-96"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-white/0 pt-16 p-4">
                            <b className="font-novaSemi text-lg text-white">{data?.Director_Name}</b>
                            <small className="block text-white font-novaReg text-[11px] -mt-1">Director, AKGEC</small>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-5 max-md:col-span-8 h-full sm:max-h-[550px] text-sm font-novaReg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 text-justify px-3 sm:px-0 sm:pr-5">
                    <p className="leading-snug max-sm:text-sm font-novaReg text-justify" dangerouslySetInnerHTML={{__html: data?.Director_Msg }} />
                </div>
            </div>
        </section>
    )
}

export default DirectorMessage