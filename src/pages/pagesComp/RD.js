import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const rdData = [
    {
        id: 1,
        title: "AKGEC IDEA LAB",
        img: "/image/rd/IDEA_LAB.png",
        path: "/akgec-idea-lab"
    },
    {
        id: 2,
        title: "SOFTWARE INCUBATOR",
        img: "/image/rd/incubator.png",
        path: "/rd/software-incubator-sdc"
    },
    {
        id: 3,
        title: "CLOUD COMPUTING CELL",
        img: "/image/rd/cloud.png",
        path: "/rd/cloud-computing-cell"
    },
    {
        id: 4,
        title: "RESEARCH AND INDUSTRIAL CONSULTANCY CENTRE",
        img: "/image/rd/consultancy.png",
        path: "/rd/research-and-industrial-consultancy-centre"
    },
    {
        id: 5,
        title: "BIG DATA CENTER OF EXCELLENCE",
        img: "/image/rd/excellence.png",
        path: "/rd/big-data-centre-of-excellence"
    },
    {
        id: 6,
        title: "OPEN SOURCE SOFTWARE RESEARCH AND DEVELOPMENT",
        img: "/image/rd/source.png",
        path: "/rd/open-source-software-rd-center"
    },
    {
        id: 7,
        title: "BLOCKCHAIN RESEARCH LAB",
        img: "/image/rd/blockchain.jpeg",
        path: "/blockchain-research-lab"
    },
    {
        id: 8,
        title: "CENTRE OF METAVERSE",
        img: "/image/rd/Metaverse.jpg",
        path: "/centre-of-metaverse"
    },
]

const RD = () => {
    return (
        <section>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-novaReg mb-5 max-sm:font-novaSemi'>Research and Development</h2>
            <div className='grid grid-cols-4 max-xl:grid-cols-3 max-[420px]:grid-cols-2 gap-3'>
                {rdData.map((ele) => (
                    <>
                        <Link href={ele.path} className='flex items-center justify-center flex-col text-center aspect-square'>
                            <Image className='mb-3 w-52 max-md:w-40 max-sm:w-32 p-8 bg-white' src={ele.img} height={200} width={200} priority alt={ele.title} />
                        <span className='font-novaSemi max-md:text-sm'>{ele.title}</span>
                        </Link>
                    </>
                ))}
            </div>
        </section>
    )
}

export default RD