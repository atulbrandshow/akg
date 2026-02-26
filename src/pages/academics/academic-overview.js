import React from 'react';
import Header from "@/Components/Header";
import AcademicOverview from "../pagesComp/AcademicOverview";

export const Home = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Header
                    title={"Academic Overview"}
                    bgKey="BG3"
                    gradient={"bg-gradient-to-r from-gray-900 to-transparent"}
                />
                <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-5 px-4 max-sm:px-2">
                    <div className="w-full max-w-5xl mx-auto">
                        <AcademicOverview />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
