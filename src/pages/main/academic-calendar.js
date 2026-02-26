"use client";

import React from "react";
import Header from "@/Components/Header";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header
                title={<>Academic Calendar <br /> 2026-27</>}
                bgKey="BG11"
                gradient={"bg-gradient-to-r from-black to-slate-700/"}
            />
            <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-10 px-6 max-sm:px-4 text-center">
                <div className="bg-white p-8 md:p-12 shadow-sm rounded-lg border border-gray-100 mt-8">
                    <p className="text-xl md:text-2xl font-novaSemi text-[#1c2b4d]">
                        Academic Calendar (2026-27) ODD Semester - <span className="text-[#c1272d] font-novaBold">COMING SOON</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;