import Breadcrumb from "@/Components/Breadcrumb";
import StudentServices from "../pagesComp/StudentServices";
import BannerSlider from "@/Components/BannerSlider";



const slides = [
    {
        title: "Student Services",
        subHeading: "Promote a Healthy Lifestyle",
        subtitle: "Fostering Physical Fitness and Well-being",
        description: "We encourage students to embrace physical fitness by engaging in sports and recreational activities, enhancing overall health.",
        buttonText: "Explore Fitness",
        image: "/image/student-services/main-banner-1.jpg",
    },
    {
        title: "Student Services",
        subHeading: "Experience Exceptional Campus Living",
        subtitle: "A Comfortable and Modern Residence",
        description: "At AKGU, we provide state-of-the-art accommodations that prioritize comfort, ensuring a conducive environment for personal growth.",
        buttonText: "Explore Accommodation",
        image: "/image/student-services/main-banner-2.jpg",
    },
    {
        title: "Student Services",
        subHeading: "Celebrate Cultural Diversity",
        subtitle: "Bringing Together a Global Community",
        description: "AKGU takes pride in its culturally diverse student body, fostering an inclusive environment for learning and collaboration.",
        buttonText: "Explore Diversity",
        image: "/image/student-services/main-banner-3.jpg",
    },
]


export const Home = ({data}) => {
    return (
        <>
            <section className="w-full mx-auto grid grid-cols-12 gap-10 max-sm:gap-0">
                <div className="col-span-12 max-xl:col-span-12 max-lg:col-span-12">
                  

                    
                    <BannerSlider slides={slides} />
                    <section className='max-w-[1400px] mx-auto px-5 max-sm:px-2 py-5'>
                        {data?.breadCrumb && <Breadcrumb data={data?.breadCrumb} />}
                    </section>
                    <StudentServices />
                </div>
            </section>
        </>
    )
}


export default Home;