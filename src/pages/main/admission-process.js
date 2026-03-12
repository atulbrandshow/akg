import Header from "@/Components/Header";

export const Home = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Header
                    title={<span className="leading-[45px] flex">Admission Flow</span>}
                    bgKey="BG11"
                    gradient={"bg-gradient-to-r from-black to-white/"}
                />
                <section className="w-full max-w-[1400px] mx-auto py-20 px-6 flex justify-center items-center">
                    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-12 text-center border-t-8 border-[#fecc00] transform transition-all duration-500 hover:scale-[1.02]">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1 rounded-full bg-[#fcefb5] text-[#3c5686] font-novaBold text-sm uppercase tracking-widest mb-4">
                                Section Update
                            </span>
                            <h2 className="text-5xl font-novaBold text-[#3c5686] mb-4">
                                Coming Soon
                            </h2>
                            <div className="w-24 h-1 bg-[#fecc00] mx-auto mb-8"></div>
                            <p className="text-xl text-gray-600 font-novaReg leading-relaxed">
                                We are currently refining our admission process to provide you with a more seamless and intuitive experience. Please check back shortly for the updated flow.
                            </p>
                        </div>
                        {/* <div className="mt-10">
                            <button className="px-10 py-4 bg-[#3c5686] text-white font-novaBold rounded-lg hover:bg-[#2a3f63] transition-all duration-300 shadow-xl">
                                Notify Me
                            </button>
                        </div> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;