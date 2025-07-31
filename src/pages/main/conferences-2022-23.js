import Header from "@/Components/Header";
import CubeSlider from "@/Components/CubeSlider";

const Button = {
    name: "Apply Now",
    Link: "",
};

const acegcSummary = [
    {
        desc: "Conservation of energy resources, environmental protection and sustainable development are the three major challenges that the world faces at present. A general consensus among the countries of the world is that greater emphasis should be placed on the use of green energy resources for electric power generation. Various other countries have been transitioning to green energy alternatives and there seems an urgency to pace up the speed and support the green revolution. This green revolution not only includes the transition to green energy rather there is a need to shift to green computing alternatives as well."
    },
    {
        desc: "Green Energy is produced from renewable sources, while Green Computing refers to the study and practice of environmentally sustainable computing. The goal of green computing, therefore, consists in maximizing energy efficiency and the use of renewable energy. Modern IT systems rely upon a complicated mix of people, networks, and hardware so green computing covers all of these areas.",
        url: '/image/conferences-2022-23/ICAKGEC.webp'
    },
    {
        desc: "In last few decades, a lot of development and advancement is witnessed in this field of green energy but we all know “Everything comes at a price”, so there are also challenges associated with it. There is a great need to explore the concerns, challenges, and also the solutions, merged with computational intelligence so that we can meet the challenges, uncertainties, complexities with the same pace with which it is escalating. For this purpose and to learn as well as share this knowledge among all, the conference on “Advancements and Challenges in Green Energy and Computing” was organized. The prime objective of Conference was to bring together researchers, scientists, students, and industry professionals to discuss innovative ideas, opportunities, challenges, advancements and research results in the field of Green Energy, Computing and security, sustainable development, Artificial intelligence and Embedded Systems on an international premier forum. Green Energy. Electric Drives and Smart Grid, Computing and Security, Sustainable Technology and Development, and Artificial Intelligence were the four tracks of the conference."
    },
    {
        desc: "The conference received an overwhelming response with over 205 entries under 4 tracks. All the papers were blind peer reviewed by our esteemed reviewers from across the globe. The program flow of the conference was well-organized, and it included various sessions viz the inaugural program, keynote addresses, oral and poster paper presentations, panel discussions, and the valedictory program."
    },
    {
        desc: "The conference was inaugurated in the benign presence of Prof. Bhim Singh, IIT Delhi as the Chief Guest, Mr. Sudhanshu Sekhar Barpanda, Director (MO), Grid Controller of India as Guest of Honour, Mr. Meenu Singhal, RMD, Socomac as the inaugural keynote and Dr. R. K. Agarwal, Director General, AKGU."
    },
    {
        desc: "The keynote speakers from India and abroad included Dr. Sanjeet Dwivedi, Senior Project manager from Everfuel, Denmark, Prof. Akshay Rathore from SIT Singapore, Ms. Shivi Jindal, RSM from Fronius and Mr. Sumit Tiwari from SNU who shared their insights on various topics related to green energy and computing."
    },
    {
        desc: "The conference also included a panel discussion on the “Threats and Opportunities for the Adoption of Green Energy” under the presence of expert panelists – Prof. Prerna Gaur, Director NSUT West Campus, Prof. R. P. Maheshwari, IIT Roorkee, Prof. Ashish Shrivastava, Shri Vishwakarma Skill University, Mr. A. B. Sengupta, Chief Manager and alternate CISO, Grid Controller of India and Mr. Vish Iyer, Global Chief Commercial Officer, Jakson Greens."
    },
    {
        desc: "Prof. Santanu Mishra, IIT Delhi, Dr. Vineet Saini from DST and Mr. Kushagra Nandan, MD & CEO of SunSource Energy graced the Valedictory Program and provided valuable insights in the field of green energy and computing. A strong need for collaborative efforts to promote Green Energy for sustainable development was emphasized during the valedictory program. The conference was concluded with a motivational quote “Investment in Green Energy is the investment for future.”"
    },
];

const imgassets = [
    {
        slides: [
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC1.webp' },
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC2.webp' },
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC3.webp' },
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC4.webp' },
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC5.webp' },
        ]
    },
    {
        slides: [
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC6.webp' },
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC7.webp' },
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC8.webp' },
            { title: 'conferences-2022-23', img: '/image/conferences-2022-23/ICAKGEC9.webp' }
        ]
    }
];

const Home = () => {
    return (
        <>
            <div className="">
                <Header title={"Conferences 2022-23"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto">
                    <section className="max-w-7xl mx-auto px-3 py-10">
                        <div className='p-3'>
                            <h3 className="text-2xl font-novaBold text-center mb-5">International conference on “Advancements and Challenges in Green Energy and Computing”</h3>
                            {acegcSummary.map((item, index) => (
                                <div key={index} className="mb-3">
                                    <p className='text-lg font-novaReg'>{item.desc}</p>
                                    {item.url && <img src={item.url} alt={`Conference Image ${index}`} className="my-4 max-w-full float-left mr-4" />}
                                </div>
                            ))}
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto'>
                            {imgassets.map((asset, index) => (
                                <CubeSlider key={index} slides={asset.slides} />
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </>
    )
}


export default Home;