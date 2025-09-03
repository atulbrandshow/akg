"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { Bars2Icon } from "@heroicons/react/20/solid";
import { About, Academics, Admissions, CampusLife, ResearchInnovation, Placements, Programs } from "../Json/MenuItem";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { easeIn } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import { Phone } from 'lucide-react';

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Official.AKGU",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-facebook'><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' /></svg>
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/official.akgec/",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-instagram'><rect width='20' height='20' x='2' y='2' rx='5' ry='5' /><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' /><line x1='17.5' y1='6.5' x2='17.51' y2='6.5' /></svg>
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/school/officialakgec",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-linkedin'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' /><rect width='4' height='12' x='2' y='9' /><circle cx='4' cy='4' r='2' /></svg>
  },
  {
    name: "Twitter",
    url: "https://x.com/official_akgec",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-twitter'><path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' /></svg>
  }
]

const notifications = [
  "Admissions Open: PGDM and MBA Programs 2024-2025",
  "Upcoming Workshop: Leadership and Soft Skills Training - Aug 2024",
];

export default function NewNavBar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null);
  const [isBelowLg, setIsBelowLg] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [BigMenuToggle, setBigMenuToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("School of Engineering & Technology");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsBelowLg(window.innerWidth < 1024);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = (menu) => {
    if (isBelowLg) {
      setOpenMenu(prevMenu => (prevMenu === menu ? null : menu));
    }
  };

  const LinksList = ({ title, links, titleClassName, ulClassName, setBigMenuToggle }) => (
    <div className="w-fit max-lg:mb-5 lg:mr-10 max-md:w-full">
      {title && <h3 className={`font-novaBold text-base text-blue-900 leading-none mb-3 ${titleClassName}`}>{title}</h3>}
      <ul className={`space-y-1 lg:space-y-2 ${ulClassName}`}>
        {links?.map((link, index) => (
          <li key={index} className="leading-none">
            <Link href={link?.url || "/"} className="hover:underline cursor-pointer text-left font-novaReg text-sm"
              onClick={() => {
                setBigMenuToggle(false); // Close the menu
              }}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  useGSAP(() => {
    gsap.from(".logo", { scale: 0, duration: 0.5, ease: easeIn })
    gsap.from(".notification", { y: -30, duration: 0.5, ease: easeIn })
  })

  return (
    <header
      className={`navbar z-[100] w-full fixed top-0 left-0 transition-all duration-200 ${isScrolled ? "bg-blue-700" : "bg-white/0"}`}>
      <div className={`hidden md:flex overflow-hidden w-full transition-all duration-300 ease-in-out ${isScrolled ? "-mt-4" : "py-1.5"} justify-end items-center px-3 border-b border-gray-400/30`}>
        <div className="notification w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {notifications.map((notification, index) => (
              <SwiperSlide key={index}>
                <p className={`text-center text-white font-novaReg cursor-pointer text-xs`}>{notification}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-10">
          {socialLinks?.map((item, index) => (
            <Link href={item.url} target="_blank" key={index} className="text-xs text-center flex flex-col justify-start items-center text-white">
              {item.svg}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center px-3 pt-1.5">
        <div className="flex">
          <div
            className={`text-white flex `}
          >
            <div className={`flex justify-start items-center gap-2 ${BigMenuToggle && "relative z-[20] shadow-lg w-screen pb-1.5"}`}>
              <div className="flex justify-center">
                <Link href="/">
                  <Image
                    src="/image/akg-logo.webp"
                    alt="AKG University Logo"
                    height={300}
                    width={800}
                    className={`logo h-12 lg:h-16 w-fit rounded-md object-contain bg-blend-color-dodge cursor-pointer`}
                  />
                </Link>
              </div>
              {BigMenuToggle &&
                <button
                  onClick={() => setBigMenuToggle(!BigMenuToggle)}
                  className="absolute right-5 top-3 text-black"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              }
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-end items-center px-2">
          <div className={`flex gap-x-6 justify-end items-center`}>
            <div className="flex gap-5 xl:gap-10 text-sm uppercase font-novaLight tracking-wider whitespace-nowrap text-white">
              <Link href="/news" className={`hover:underline hover:text-gray-400 transition duration-500`}>News</Link>
              <Link href="/events" className={`hover:underline hover:text-gray-400 transition duration-500`}>Event</Link>
              <Link href="/articles" className={`hover:underline hover:text-gray-400 transition duration-500`}>Article</Link>
              <Link href="/circulars" className={`hover:underline hover:text-gray-400 transition duration-500`}>Circulars</Link>
              <Link href="/notice" className={`hover:underline hover:text-gray-400 transition duration-500`}>Notices</Link>
              <Link href="/download-center" className={`hover:underline hover:text-gray-400 transition duration-500`}>Download Center</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className='bg-blue-500 flex justify-between gap-8 items-center rounded-md p-1 sm:p-3'>
            <Link href="tel:1800-200-0777" className='hidden sm:block'>
              <div className='flex gap-2'>
                <div className='h-10 w-10 flex items-center justify-center border-2 border-gray-300 rounded-full'>
                  <Phone size={20} className='text-white' />
                </div>
                <div className='flex flex-col justify-center leading-none text-white'>
                  <small className='font-novaReg text-xs'>Admission Helpline</small>
                  <span className='font-novaBold whitespace-nowrap leading-none text-lg'>1800-200-0777</span>
                </div>
              </div>
            </Link>
            <button onClick={() => setBigMenuToggle(!BigMenuToggle)} className='block lg:hidden text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-3 px-3'>
        <ul
          className={`${BigMenuToggle
            ? "fixed w-full h-full left-0 top-0 py-20 overflow-y-auto backdrop-blur-lg"
            : `hidden relative`} bg-white/30 lg:pt-2 rounded-xl lg:flex items-center justify-between max-lg:space-y-3 gap-2 text-white font-novaSemi px-4 lg:px-8 text-sm 2xl:text-base xl:px-6 2xl:px-20`}>
          {BigMenuToggle && <>
            <div className="my-10">
              <h2 className="text-center text-black text-sm font-novaSemi mb-1 uppercase">Notifications
              </h2>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
              >
                {notifications.map((notification, index) => (
                  <SwiperSlide key={index}>
                    <p className="text-center text-gray-800 font-novaReg cursor-grab text-sm">{notification}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>}
          <li className="relative group">
            <button onClick={() => toggleMenu('about')} className={` relative focus:outline-none font-novaBold flex lg:pb-2 items-center gap-1 tracking-widest`}>
              ABOUT{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              <span className="absolute inset-x-0 -top-2 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
            </button>
            <div
              className={`${BigMenuToggle ? "relative w-full bg-white/40" : "absolute w-max"
                } ${openMenu === 'about' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white text-black rounded-lg shadow-lg `}
            >
              <div className="grid grid-cols-3">
                <div className="col-span-2 max-md:col-span-3 p-5 transition-all">
                  <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                    <LinksList title="WHO WE ARE" links={About.sublinks["Who We Are"]} setBigMenuToggle={setBigMenuToggle} />
                    <LinksList title="Related Links" links={About.sublinks["Related Links"]} setBigMenuToggle={setBigMenuToggle} />
                  </div>
                </div>
                <div className="col-span-1 max-md:hidden">
                  <div className="bg-About bg-cover bg-center bg-black bg-blend-darken bg-opacity-80">
                    <div className="flex flex-col items-center p-5">
                      <p className="flex flex-col">
                        <span className="text-center font-normal text-xl font-novaLight text-white">
                          AKG University
                        </span>
                        <span className="text-center font-novaBold text-3xl text-secondary leading-none">
                          of Excellence
                        </span>
                      </p>
                    </div>
                    <div className="grid grid-cols-2 bg-indigo-950 mt-5">
                      <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sm:h-10 h-20"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                        <span className="mt-2 text-xs text-white font-novaLight">
                          Human Dignity
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 15 6 6" /><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" /></svg>
                        <span className="mt-2 text-xs text-white font-novaLight">
                          Empathy
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                        <span className="mt-2 text-xs text-white font-novaLight">
                          Humility
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" /></svg>
                        <span className="mt-2 text-xs text-white font-novaLight">
                          Giving
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <button onClick={() => toggleMenu('programs')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-widest`}>
              PROGRAMS{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              <span className="absolute inset-x-0 -top-2 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
            </button>
            <div
              className={`${BigMenuToggle ? "relative w-full bg-white/40" : "absolute w-[1100px]"
                } ${openMenu === 'programs' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg`}
            >
              <div className="grid grid-cols-12">
                <div className="col-span-9 max-lg:col-span-12 p-0 transition-all">
                  <div className=" w-full h-32 sm:h-16 flex justify-center items-center">
                    {
                      Object.keys(Programs.sublinks)?.map((key, index) => <button onClick={() => { setActiveTab(key) }} key={index}
                        className={`h-full w-full border-r border-r-gray-200 text-sm font-novaLight ${key === activeTab ? 'bg-gray-300/50' : 'bg-white'}`}>
                        {key}</button>)
                    }
                  </div>
                  <div className="flex max-lg:flex-col p-2">
                    {
                      Object.keys(Programs.sublinks[activeTab])?.map((key, index) => {
                        if (key === 'Graduate Program') {
                          return <LinksList key={index} title={key} links={Programs.sublinks[activeTab][key]} setBigMenuToggle={setBigMenuToggle} />
                        }
                        if (key === 'Program') {
                          return Object.keys(Programs.sublinks[activeTab][key])?.map((key1, index) => {
                            return <LinksList key={index} title={key1} links={Programs.sublinks[activeTab][key][key1]} setBigMenuToggle={setBigMenuToggle} />
                          })
                        }
                      })
                    }
                  </div>
                </div>

                <div className="col-span-3 w-full relative max-lg:hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg shadow-md"
                    style={{
                      backgroundImage:
                        "url('/image/lab/ece-lab.webp')",
                      backgroundPosition: "left"
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
                  </div>
                  <div className="relative z-10 p-6 text-white">
                    <h3 className="text-xl font-novaLight">University of</h3>
                    <h2 className="text-3xl font-novaBold leading-none text-secondary">
                      Top Placements
                    </h2>
                    <div className="mt-4">
                      <div className="bg-indigo-950 w-40 p-2 rounded-md">
                        <h3 className="text-3xl font-novaBold">1406</h3>
                        <p className="text-xs font-novaLight">PLACEMENTS</p>
                      </div>
                      <p className="text-xs font-novaLight mb-2">Offered in Batch 2023-24</p>
                      <div className="bg-indigo-950 w-40 p-2 rounded-md">
                        <h3 className="text-3xl font-novaBold">1.13 <small className="-ml-1 text-lg">CR</small></h3>
                        <p className="text-xs font-novaLight">INTERNATIONAL</p>
                      </div>
                      <p className="text-xs font-novaLight mb-2">Highest Package Offered</p>
                      <div className="bg-indigo-950 p-2 w-40 rounded-md">
                        <h3 className="text-3xl font-novaBold">33.80 <small className="-ml-1 text-lg">LPA</small></h3>
                        <p className="text-xs font-novaLight">NATIONAL</p>
                      </div>
                      <p className="text-xs font-novaLight">Highest Package Offered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button onClick={() => toggleMenu('academics')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-widest`}>
              ACADEMICS{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              <span className="absolute inset-x-0 -top-2 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
            </button>
            <div
              className={`${BigMenuToggle ? "relative w-full bg-white/40" : "absolute w-max"
                } ${openMenu === 'academics' && "absolute h-auto mt-0 w-full"} -left-52 max-lg:left-0 h-0  mt-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
            >
              <div className="grid grid-cols-12">
                <div className="col-span-8 max-md:col-span-12 p-5 transition-all">
                  <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                    <LinksList title="ACADEMICS" links={Academics.sublinks["Academics"]} setBigMenuToggle={setBigMenuToggle} />
                    <LinksList title="SCHOOLS" links={Academics.sublinks["Schools"]} setBigMenuToggle={setBigMenuToggle} />
                  </div>
                </div>
                <div className="col-span-4 max-md:hidden h-full">
                  <div className="bg-Academics bg-cover bg-black bg-blend-multiply bg-opacity-70 h-full flex flex-col justify-between">
                    <div className="flex flex-col items-center mt-20">
                      <span className="text-center text-lg font-novaLight text-white">
                        Milestones in
                      </span>
                      <span className="text-center text-2xl font-novaBold leading-none text-secondary">
                        Educational Achievement
                      </span>
                    </div>
                    <div className="grid grid-cols-2 bg-indigo-950">
                      <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /><path d="m7 16.5-4.74-2.85" /><path d="m7 16.5 5-3" /><path d="M7 16.5v5.17" /><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /><path d="m17 16.5-5-3" /><path d="m17 16.5 4.74-2.85" /><path d="M17 16.5v5.17" /><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /><path d="M12 8 7.26 5.15" /><path d="m12 8 4.74-2.85" /><path d="M12 13.5V8" /></svg>
                        <span className="mt-2 text-xs text-white font-novaLight">
                          Flexible Choice
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /></svg>
                        <span className="mt-2 text-xs text-white font-novaLight">
                          Electives
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-t border-r border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-dot"><circle cx="19" cy="6" r="3" /><path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /><path d="M12 17v4" /><path d="M8 21h8" /></svg>
                        <span className="mt-2 text-xs text-white font-novaLight">
                          Technologies
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-t border-t-white/50 p-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /><circle cx="13" cy="12" r="2" /><path d="M18 19c-2.8 0-5-2.2-5-5v8" /><circle cx="20" cy="19" r="2" /></svg>
                        <span className="mt-2 text-xs text-center text-white font-novaLight">
                          Experiential Learning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button onClick={() => toggleMenu('admissions')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-widest`}>
              ADMISSIONS{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              <span className="absolute inset-x-0 -top-2 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
            </button>
            <div
              className={`${BigMenuToggle ? "relative w-full bg-white/40" : "absolute"
                } ${openMenu === 'admissions' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
            >
              <div className="flex p-5 w-max transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col max-md:gap-5 max-md:w-full">

                <div className="w-52">
                  <LinksList title="ADMISSIONS" links={Admissions?.sublinks["Admission"].slice(0, Math.ceil(Admissions?.sublinks["Admission"].length / 2))} setBigMenuToggle={setBigMenuToggle} />
                </div>
                <div className="w-52">
                  <LinksList title='  ' titleClassName="mt-4" links={Admissions?.sublinks["Admission"].slice(Math.ceil(Admissions?.sublinks["Admission"].length / 2))} setBigMenuToggle={setBigMenuToggle} />
                </div>
              </div>
              <div className="w-full relative max-md:hidden ">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg shadow-md"
                  style={{
                    backgroundImage:
                      "url('/image/lab/User-Manual-AKGEC 2.jpg')",
                  }}
                >
                  <div className="absolute inset-0 bg-indigo-950 opacity-70 rounded-lg"></div>
                </div>
                <div className="relative bg-indigo-950">
                  <div className="relative h-1/2 z-10 text-white">
                    <h3 className="text-xl py-2 text-center font-novaLight">
                      Open Doors to Your Future
                    </h3>
                  </div>
                  <div className="flex justify-evenly">
                    <div className="flex flex-col items-center text-white p-7">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                      <span className="mt-2 text-xs text-white font-novaLight">
                        Scholarships
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-white p-7">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
                      <span className="mt-2 text-xs text-white font-novaLight">
                        Education Loan
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-white p-7">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" /></svg>
                      <span className="mt-2 text-xs text-white font-novaLight">
                        Futuristic
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button onClick={() => toggleMenu('campus-life')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 whitespace-nowrap tracking-widest`}>
              CAMPUS LIFE{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              <span className="absolute inset-x-0 -top-2 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
            </button>
            <div
              className={`${BigMenuToggle ? "relative w-full bg-white/40" : "absolute w-max"
                } ${openMenu === 'campus-life' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
            >
              <div className="grid grid-cols-2">
                <div className="col-span-2 transition-all">
                  <div className="flex p-5 group-hover:p-5 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                    <div className="w-52 ">
                      <LinksList title="CAMPUS LIFE" links={CampusLife.sublinks.slice(0, Math.ceil(CampusLife?.sublinks.length / 2))} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                    <div className="w-52 ">
                      <LinksList title="" links={CampusLife.sublinks.slice(Math.ceil(CampusLife?.sublinks.length / 2))} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                  </div>
                  <div className="w-full relative max-md:hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg shadow-md"
                      style={{
                        backgroundImage:
                          "url('/image/lab/User-Manual-AKGEC 4.webp')",
                      }}
                    >
                      <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
                    </div>
                    <div className="relative bg-indigo-950">
                      <div className="relative h-1/2 z-10 text-white">
                        <h3 className="text-xl py-2 text-center font-novaLight">
                          Place Like Home
                        </h3>
                      </div>
                      <div className="flex justify-evenly text-center">
                        <div className="flex flex-col items-center text-white p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ferris-wheel"><circle cx="12" cy="12" r="2" /><path d="M12 2v4" /><path d="m6.8 15-3.5 2" /><path d="m20.7 7-3.5 2" /><path d="M6.8 9 3.3 7" /><path d="m20.7 17-3.5-2" /><path d="m9 22 3-8 3 8" /><path d="M8 22h8" /><path d="M18 18.7a9 9 0 1 0-12 0" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Technology Infusion
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Student centered
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Supportive Environment
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <button onClick={() => toggleMenu('placements')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-widest`}>
              PLACEMENTS{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              <span className="absolute inset-x-0 -top-2 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
            </button>
            <div
              className={`${BigMenuToggle ? "relative w-full bg-white/40" : "absolute w-[650px]"
                } ${openMenu === 'placements' && "absolute h-auto mt-0 w-full"} right-0 h-0 mt-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
            >
              <div className="grid grid-cols-9">
                <div className="col-span-5 w-max p-5 transition-all max-md:col-span-2 max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                  <div className="w-max pr-5">
                    <LinksList title="PLACEMENTS" links={Placements.sublinks["Placements"]} setBigMenuToggle={setBigMenuToggle} />
                  </div>
                </div>
                <div className="col-span-4 max-md:hidden">
                  <div className="bg-Placement bg-cover bg-black bg-blend-multiply bg-opacity-50">
                    <div className="flex flex-col items-center p-4">
                      <p className="flex flex-col">
                        <span className="text-center font-novaLight text-base text-white">
                          Corporate Ties
                        </span>
                        <span className="text-center font-novaBold text-2xl text-secondary">
                          &
                        </span>
                        <span className="text-center font-novaLight text-base text-white">
                          Career Opportunities
                        </span>
                      </p>
                    </div>
                    <div className="grid grid-cols-2 bg-indigo-950">
                      <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                        <img src="/image/navbar/Google-logo.png" alt="google" />
                        <span className="mt-2 text-xs text-white font-novaSemi">
                          Google
                        </span>
                      </div>
                      <div className="mt-3 flex flex-col items-center text-white border-b border-t-white/50 p-7">
                        <img src="/image/navbar/Amazon-Logo.png" alt="Amazon" />
                        <span className="mt-2 text-xs text-white font-novaSemi">
                          Amazon
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                        <img src="/image/navbar/infosys-logo-png.png" alt="Infosys" />
                        <span className="mt-2 text-xs text-white font-novaSemi">
                          Microsoft
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                        <img src="/image/navbar/TCS.NS_BIG.png" alt="TCS" />
                        <span className="mt-4 text-xs text-white font-novaSemi">
                          TCS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <button onClick={() => toggleMenu('research')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 whitespace-nowrap tracking-widest`}>
              RESEARCH & INNOVATION{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              <span className="absolute inset-x-0 -top-2 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
            </button>
            <div
              className={`${BigMenuToggle ? "relative w-full bg-white/40" : "absolute w-[1050px]"
                } ${openMenu === 'research' && "absolute h-auto mt-0 w-full"} right-0 h-0 mt-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg`}
            >
              <div className="grid grid-cols-6">
                <div className="col-span-2 max-md:hidden">
                  <div className="bg-Research bg-cover bg-black bg-blend-multiply bg-opacity-70">
                    <div className="flex flex-col justify-start items-start pt-5 px-6">
                      <p className="flex flex-col pb-10">
                        <span className="font-novaLight text-xl text-white">
                          {" "}
                          Our Academic
                        </span>
                        <span className="font-novaLight text-xl text-white">
                          Ambitions
                        </span>
                      </p>
                    </div>
                    <div className="h-full">
                      <div className="relative z-10 p-6 text-white">
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div className="bg-indigo-950 w-36 px-10 py-4 rounded-md flex flex-col items-center text-center">
                            <h3 className="text-3xl font-novaBold">19K+</h3>
                            <p className="text-xs font-novaLight">Students Graduated</p>
                          </div>
                          <div className="bg-indigo-950 w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                            <h3 className="text-3xl font-novaBold">8</h3>
                            <p className="text-xs font-novaLight">Departmental Research Groups</p>
                          </div>
                          <div className="bg-indigo-950 w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                            <h3 className="text-3xl font-novaBold">213</h3>
                            <p className="text-xs font-novaLight">Students in Univ. Merit List</p>
                          </div>
                          <div className="bg-indigo-950 w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                            <h3 className="text-3xl font-novaBold">2000+</h3>
                            <p className="text-xs font-novaLight">Students Placed (2021-22)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 max-md:col-span-4 p-5 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                  <div className={`flex ${BigMenuToggle && "flex-col gap-y-5"}`}>
                    <div className={`w-52 pr-2 ${BigMenuToggle && "w-full"}`}>
                      <LinksList title="Research Intensive University" links={ResearchInnovation.sublinks['Research Intensive University']} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                    <div className={`w-52 pr-2 ${BigMenuToggle && "w-full"}`}>
                      <LinksList title="Entrepreneurship Cells" links={ResearchInnovation.sublinks['Entrepreneurship Cells']} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                    <div className={`w-52 pr-2 ${BigMenuToggle && "w-full"}`}>
                      <LinksList title="Sustainable Development Goals (SDG's)" links={ResearchInnovation.sublinks[`Sustainable Development Goals (SDG's)`]} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};