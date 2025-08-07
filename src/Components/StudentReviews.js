import Image from "next/image";
import Button from "./Button";
import StudentStories from "./StudentStories";

export default function StudentReviews({ data }) {
    const d = data?.pageData;
    const title = d?.Echoes_of_Success_Title || "";

    const words = title.trim().split(" ");
    const first = words[0] || "";
    let middle = "";
    let last = "";

    if (words.length >= 4) {
        middle = words.slice(1, 4).join(" ");
        last = words.slice(4).join(" ");
    } else {
        middle = words.slice(1).join(" ");
        last = "";
    }

    return (
        <section className="isolate py-6 sm:py-20 overflow-hidden bg-BG5 bg-no-repeat bg-center bg-white">
            <div className="w-full max-w-[1350px] mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <Image src="/image/quote.webp" width={50} height={50} alt="quote" />
                    <h2 className="text-2xl font-extralight text-center max-w-3xl tracking-tight text-gray-900 sm:text-5xl">
                        {first} {" "} <span className='font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient'>{middle} {" "}</span>
                        {last}
                    </h2>
                    <p className="mt-6 text-xl max-md:text-lg text-gray-700 font-light px-3 sm:px-20 text-center">
                        {d?.Echoes_of_Success_Desc}
                    </p>
                </div>
                <StudentStories studentReviews={data?.studentReviews} />
                <div className="w-full flex justify-center items-center">
                    <Button text={'Read All Reviews'} className=" py-3 max-[400px]:py-2 max-[400px]:px-6 px-10 mt-5 text-[15px] text-white rounded-xl font-novaBold uppercase bg-btn-gradient  w-max  hover:bg-[#3c5686] hover:border-b-4 hover:text-white hover:border-[#beb6ff] hover:transform hover:transition-transform hover:ease-in-out  hover:duration-500 scale-y-105" />
                </div>
            </div>
        </section>
    )
}