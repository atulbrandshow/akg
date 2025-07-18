
const DynamicSection = () => {
    return (
        <section className={`relative ${backgroundImage} bg-center bg-no-repeat bg-cover h-[90vh]`}>
            <div className="max-w-7xl mx-auto px-3">
                <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full"></div>
                    <div className={`w-1/2 ${overlayColor} opacity-80 h-full flex items-center justify-center flex-col`}>
                        <div className="max-w-xl">
                            <h2 className="text-6xl font-novaReg uppercase mb-3">Proudly <span className="font-semibold text-white">Graduating</span> Future Leaders</h2>
                            <h6 className="font-novaReg text-2xl border-y py-3 border-gray-600 text-center">A Day to Celebrate and Reflect on Success</h6>
                            <p className="mt-3 font-novaSemi text-center">Celebrating graduates' achievements as they embark on new journeys.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DynamicSection