"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace("/404");
    }, [router]);

    useEffect(() => {
        // Add spin-earth animation on hover
        const earth = document.querySelector('.object_earth');
        if (earth) {
            const handleEarthHover = () => {
                earth.classList.add('spin-earth-on-hover');
            };

            const handleEarthLeave = () => {
                earth.classList.remove('spin-earth-on-hover');
            };

            earth.addEventListener('mouseenter', handleEarthHover);
            earth.addEventListener('mouseleave', handleEarthLeave);

            return () => {
                earth.removeEventListener('mouseenter', handleEarthHover);
                earth.removeEventListener('mouseleave', handleEarthLeave);
            };
        }
    }, []);

    return (
        <div className="min-h-screen bg-purple-900 overflow-hidden relative font-dosis">
            {/* Background stars effect */}
            <div className="stars absolute inset-0 bg-repeat bg-contain bg-left-top"
                style={{ backgroundImage: 'url("http://salehriaz.com/404Page/img/overlay_stars.svg")' }}>

                {/* Central content */}
                <div className="central-body flex items-center justify-center flex-col h-full w-full px-16 text-center">
                    <img className="image-404 mx-auto" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="404" />
                    <Link href="/" className="btn-go-home whitespace-nowrap mt-4 mx-auto w-fit py-2.5 px-4 border border-yellow-400 rounded-full text-white text-xs tracking-widest hover:bg-yellow-400 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl z-20 relative block">
                        GO BACK HOME
                    </Link>
                </div>

                {/* Animated objects */}
                <div className="objects">
                    <img
                        className="object_rocket absolute z-50 top-1/2 left-1/4 transform -translate-x-12 animate-rocket-movement"
                        src="http://salehriaz.com/404Page/img/rocket.svg"
                        width="40px"
                        alt="Rocket"
                    />
                    <div className="earth-moon">
                        <img
                            className="object_earth absolute bottom-40 left-1/3 z-40 transition-transform duration-200000"
                            src="http://salehriaz.com/404Page/img/earth.svg"
                            width="100px"
                            alt="Earth"
                        />
                        <img
                            className="object_moon absolute top-1/2 right-1/3 z-40"
                            src="http://salehriaz.com/404Page/img/moon.svg"
                            width="80px"
                            alt="Moon"
                        />
                    </div>
                    <div className="box_astronaut absolute top-2/3 right-1/4 z-50 animate-move-astronaut">
                        <img
                            className="object_astronaut w-36 animate-rotate-astronaut"
                            src="http://salehriaz.com/404Page/img/astronaut.svg"
                            alt="Astronaut"
                        />
                    </div>
                </div>

                {/* Glowing stars */}
                <div className="glowing_stars">
                    <div className="star absolute rounded-full bg-white w-1 h-1 opacity-30 animate-glow-star-1"></div>
                    <div className="star absolute rounded-full bg-white w-1 h-1 opacity-30 animate-glow-star-2"></div>
                    <div className="star absolute rounded-full bg-white w-1 h-1 opacity-30 animate-glow-star-3"></div>
                    <div className="star absolute rounded-full bg-white w-1 h-1 opacity-30 animate-glow-star-4"></div>
                    <div className="star absolute rounded-full bg-white w-1 h-1 opacity-30 animate-glow-star-5"></div>
                </div>
            </div>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500');
        
        @keyframes rocket-movement {
          100% { transform: translate(1200px, -600px); }
        }
        
        @keyframes spin-earth {
          100% { transform: rotate(-360deg); transition: transform 20s; }
        }
        
        @keyframes move-astronaut {
          100% { transform: translate(-160px, -160px); }
        }
        
        @keyframes rotate-astronaut {
          100% { transform: rotate(-720deg); }
        }
        
        @keyframes glow-star {
          40% { opacity: 0.3; }
          90%, 100% { opacity: 1; transform: scale(1.2); border-radius: 999999px; }
        }
        
        .spin-earth-on-hover {
          transition: ease 200s !important;
          transform: rotate(-3600deg) !important;
        }
        
        .animate-rocket-movement {
          animation: rocket-movement 200s linear infinite both running;
        }
        
        .animate-move-astronaut {
          animation: move-astronaut 50s infinite linear both alternate;
        }
        
        .animate-rotate-astronaut {
          animation: rotate-astronaut 200s infinite linear both alternate;
        }
        
        .animate-glow-star-1 {
          top: 80%;
          left: 25%;
          animation: glow-star 2s infinite ease-in-out alternate 1s;
        }
        
        .animate-glow-star-2 {
          top: 20%;
          left: 40%;
          animation: glow-star 2s infinite ease-in-out alternate 3s;
        }
        
        .animate-glow-star-3 {
          top: 25%;
          left: 25%;
          animation: glow-star 2s infinite ease-in-out alternate 5s;
        }
        
        .animate-glow-star-4 {
          top: 75%;
          left: 80%;
          animation: glow-star 2s infinite ease-in-out alternate 7s;
        }
        
        .animate-glow-star-5 {
          top: 90%;
          left: 50%;
          animation: glow-star 2s infinite ease-in-out alternate 9s;
        }
        
        .stars {
          background-image: url("http://salehriaz.com/404Page/img/bg_purple.png");
        }
        
        @media only screen and (max-width: 600px) {
          .navbar-links {
            display: none;
          }
          
          .custom-navbar {
            text-align: center;
          }
          
          .brand-logo img {
            width: 120px;
          }
          
          .box_astronaut {
            top: 70%;
          }
          
          .central-body {
            padding-top: 25%;
          }
        }
      `}</style>
        </div>
    );
};

export default NotFound;