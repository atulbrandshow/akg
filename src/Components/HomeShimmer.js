import Shimmer from "./Shimmer";



export default function HomeShimmer() {
    return (
        <section className="">
            <div className="min-h-screen bg-gray-100 animate-pulse">
                <div className="bg-blue-600 w-full py-8 sm:py-10 md:py-14 lg:py-20"></div>
                <div className="max-w-[1200px] mx-auto h-full flex max-lg:mt-20 justify-center  items-center sm:px-10">
                    <div className="w-full flex justify-between gap-10 items-center max-lg:flex-col sm:mt-16">
                        <div className="sm:w-1/2">
                            <Shimmer className="h-12 w-60 bg-gray-300 rounded-lg" />
                            <Shimmer className="mt-3 h-12 bg-gray-300 sm:w-96 rounded-lg" />
                            <div className="mt-5 space-y-3">
                                <Shimmer className="py-2.5 bg-gray-300 w-full rounded-lg" />
                                <Shimmer className="py-6 w-44 bg-gray-300 rounded-lg" />
                            </div>
                        </div>
                        <div className="h-full sm:w-1/2 flex justify-end">
                            <div className="h-full sm:w-[450px] rounded-xl bg-gray-300 animate-pulse py-3">
                                <Shimmer className="bg-gray-400 py-2 w-52 mx-auto mt-5" />
                                <Shimmer className="bg-gray-400 py-3 w-72 mx-auto mt-10" />
                                <Shimmer className="bg-gray-400 py-4 rounded-xl w-72 mx-auto mt-2" />
                                <div className="mt-16 px-6 ">
                                    <div className="grid grid-cols-2 gap-5">
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-5">
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-5">
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                    </div>
                                    <div className="mt-5 grid grid-cols-3 gap-5">
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                        <Shimmer className="bg-gray-400 py-5 w-full rounded-lg" />
                                    </div>
                                    <div className="mt-5 flex justify-between items-center">
                                        <Shimmer className="bg-gray-400 py-6 rounded-xl w-44" />
                                        <Shimmer className="bg-gray-400 py-2 w-32 rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
