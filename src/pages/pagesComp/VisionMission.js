export default function VisionAndMission() {
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1 bg-white max-sm:col-span-2 max-sm:bg-gradient-to-tr from-purple-400 to-cyan-100 p-5">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl max-sm:text-3xl w-full text-start font-novaReg mb-4 max-w-[350px]">OUR VISION</h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] text-justify">
                            To introduce undergraduate and postgraduate courses for all engineering branches and award of Ph.D degree to be one of the best engineering colleges in the country and to be a deemed university.
                        </p>
                    </div>
                </div>
                <div
                    className="col-span-1 max-sm:hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/target.png')" }}
                >
                    <div className="bg-gradient-to-r from-white to-blue-800/50 w-full h-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1 bg-white max-sm:col-span-2 max-sm:bg-gradient-to-tr from-cyan-400 to-purple-100 p-5">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl max-sm:text-3xl w-full text-start font-novaReg max-w-[350px] mb-4">OUR MISSION</h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] text-justify">
                            We strive to provide and maintain academic environment and systems, enabling maximum learning to produce competent professionals. We also aim at achieving this through transparent academic and administrative policies in the college. We intend to provide conducive atmosphere for research, development and consultancy services to our faculty at national and international level.
                        </p>
                    </div>
                </div>
                <div
                    className="col-span-1 max-sm:hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/mission-1.jpg')" }}
                >
                    <div className="bg-gradient-to-r from-white to-blue-800/20 w-full h-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1 bg-white max-sm:col-span-2 max-sm:bg-gradient-to-tr from-amber-400 to-cyan-100 p-5">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl max-sm:text-3xl w-full text-start font-novaReg mb-4 max-w-[350px]">OUR QUALITY POLICY</h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] text-justify">
                            To provide and continually improve academic environment and systems which give total satisfaction and enable students to develop their full potential and mature into competent professionals and responsible members of society.
                        </p>
                    </div>
                </div>
                <div
                    className="col-span-1 max-sm:hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/Quality.jpg')" }}
                >
                    <div className="bg-gradient-to-r from-white to-blue-800/20 w-full h-full" />
                </div>
            </div>
        </div>
    );
}