"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import Card from "@/Components/Card"
import { ArrowRight, CalendarDays } from "lucide-react"
import Image from "next/image"

export default function EventList({ data }) {
    const [eventsData, setEventsData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const fetchEvents = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=Event`, {
                credentials: "include",
            }
            )
            const data = await response.json()
            if (data.status && data.data) {
                setEventsData(data.data)
                setTotalPages(data.pagination.totalPages)
            } else {
                setEventsData([])
            }
        } catch (error) {
            console.error("Failed to fetch events:", error)
            setEventsData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [page, searchTerm])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const stripHtml = (html) => {
        const tmp = document.createElement("DIV")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    return (
        <div className=" ">
            <section className="relative bg-BG27 bg-center bg-no-repeat bg-cover h-full">
                <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80' />
                <div className="max-w-7xl mx-auto px-3 py-52 md:py-80">
                    <div className="absolute inset-0 flex">

                        <div className="w-full md:w-1/2 bg-blue-300 opacity-80 h-full flex items-center justify-center flex-col">
                            <div className="max-w-xl px-4 text-center pt-20 md:pt-32">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-novaReg uppercase mb-3">
                                    Elevating <span className="font-semibold text-white">Events</span>, Creating Experiences
                                </h2>
                                <h6 className="font-novaReg text-lg md:text-xl lg:text-2xl border-y py-2 md:py-3 border-gray-600">
                                    Where Every Occasion Becomes a Celebration
                                </h6>
                                <p className="mt-3 text-sm md:text-base lg:text-lg font-novaSemi">
                                    Join us for inspiring events that bring people together, spark ideas, and leave lasting memories.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block w-1/2 h-full"></div>
                    </div>
                </div>
            </section>
            <section className="bg-[#faf9f6]">
                <div className="max-w-[1400px] mx-auto px-3 py-10">
                    <div className="mb-7">
                        <div className="w-full text-center">
                            <h3 className="text-3xl font-novaReg mb-2 max-md:text-2xl max-sm:text-xl">Explore Our Event Archives</h3>
                            <p className="text-base font-novaReg text-gray-400 max-sm:text-sm">Life at India's Most Vibrant Campus</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-8 py-10 max-sm:gap-4'>
                        {eventsData?.map((event) => (
                            <div key={event._id} className='bg-white col-span-4 max-lg:col-span-6 max-sm:col-span-12 rounded-lg border-b-[5px] border-yellow-500 overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]'>
                                <div className='relative h-60 max-2xl:h-48 w-full overflow-hidden group'>
                                    {event.banner_img && (
                                        <div className="relative h-full w-full overflow-hidden">
                                            <Image className='h-full w-full object-cover object-top transition-transform duration-[5s] group-hover:scale-125'
                                                height={500}
                                                width={1000}
                                                src={IMAGE_PATH + event.banner_img}
                                                alt={event.name}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent mt-36" />
                                        </div>
                                    )}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-white rounded-lg px-2 py-1 shadow-md flex items-center gap-1">
                                            <CalendarDays size={16} />
                                            <div className="text-sm font-novaBold text-gray-800">{formatDate(event.date)}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3 px-4 max-sm:px-2'>
                                    <h2 className=' max-xl:text-base leading-none uppercase font-novaBold'>
                                        {event.name}
                                    </h2>
                                    <p className='mt-2 leading-none text-sm italic line-clamp-2 font-novaReg'>{stripHtml(event.description)}</p>
                                    <Link className="group my-4 flex items-center gap-1 text-blue-600 font-novaSemi" href={event?.path || "#"}>
                                        Know More
                                        <ArrowRight className="group-hover:translate-x-1 transition-all duration-200 ease-in-out" size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
