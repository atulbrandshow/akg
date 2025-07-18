import Image from "next/image";
import Button from "./Button";
import StudentStories from "./StudentStories";

export default function StudentReviews() {
    return (
        <section className="isolate py-6 sm:py-20 overflow-hidden bg-BG5 bg-no-repeat bg-center bg-white">
            <div className="w-full max-w-[1350px] mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <Image src="/image/quote.webp" width={50} height={50} alt="quote" />
                    <h2 className="text-2xl font-extralight text-center max-w-3xl tracking-tight text-gray-900 sm:text-5xl">
                        The <span className='font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient'>Echoes of Success</span> -
                        Hear More from Our Esteemed Graduates!
                    </h2>
                    <p className="mt-6 text-xl max-md:text-lg text-gray-700 font-light px-3 sm:px-20 text-center">
                        Discover the enriching stories and valuable insights directly from our accomplished graduates.
                    </p>
                </div>
                <StudentStories />
                {/* <div className="max-w-4xl mx-auto mt-10">
                    <div className="grid grid-cols-12 bg-[#f3f3f3] min-h-[380px] rounded-lg overflow-hidden">
                        <div className="col-span-12 sm:col-span-4 sm:order-last max-sm:w-64 max-sm:m-auto">
                            <img
                                alt=""
                                src="/image/str-1.jpg"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-8 p-10">
                            <figure className="relative isolate h-full flex flex-col justify-between">
                                <blockquote className="text-base font-extralight text-gray-700 sm:text-xl">
                                    <p>
                                        Ajay Kumar Garg University offers a robust Civil Engineering program with a strong focus on practical skills. The faculty are experienced and willing to help students with their queries.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-8 text-base">
                                    <div className="font-novaSemi bg-gradient-to-r from-blue-700 to-rose-900 bg-clip-text text-transparent text-2xl">Neha Verma</div>
                                    <div className="mt-1 text-gray-500">B.Tech in Civil Engineering</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div> */}
                <div className="w-full flex justify-center items-center">
                    <Button text={'Read All Reviews'} className=" py-3 max-[400px]:py-2 max-[400px]:px-6 px-10 mt-5 text-[15px] text-white rounded-xl font-novaBold uppercase bg-btn-gradient  w-max  hover:bg-[#3c5686] hover:border-b-4 hover:text-white hover:border-[#beb6ff] hover:transform hover:transition-transform hover:ease-in-out  hover:duration-500 scale-y-105" />
                </div>
            </div>
        </section>
    )
}