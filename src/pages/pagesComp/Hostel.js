import Image from 'next/image';

const facilities = [
    { id: 1, name: "Furnished rooms including Curtains, Mattress, Pillow, Bed Sheets", icon: "/image/icons/furnished-rooms.png" },
    { id: 2, name: "Clean and Hygienic – Mess & Dining", icon: "/image/icons/clean-and-hygienic.png" },
    { id: 3, name: "High-speed Internet Facility (Wi-Fi)", icon: "/image/icons/internet-facility.png" },
    { id: 4, name: "Solar Water Heaters (Eco-friendly)", icon: "/image/icons/solarwater-heaters.png" },
    { id: 5, name: "Modern Gymnasium", icon: "/image/icons/gymnasium.png" },
    { id: 6, name: "TV Lounge with Entertainment Facilities", icon: "/image/icons/tv-room.png" },
    { id: 7, name: "Well-stocked Library", icon: "/image/icons/librarery.png" },
    { id: 8, name: "Indoor and Outdoor Sports Facilities", icon: "/image/icons/indoor-and-outdoor.png" },
    { id: 9, name: "24/7 Canteen Services", icon: "/image/icons/canteen.png" },
    // { id: 10, name: "Utility Store for Daily Needs", icon: "/image/icons/utility-store.png" },
    // { id: 11, name: "Laundry Services", icon: "/image/icons/laundry.png" },
    // { id: 12, name: "24/7 Security & CCTV Surveillance", icon: "/image/icons/security.png" },
];

export default function HostelFacility() {
    return (
        <div className="">
            <div className="">
                <h1 className="text-4xl font-novaReg mb-4 max-md:text-3xl max-2xl:px-2 max-xl:px-2 max-lg:px-2 max-md:px-2 max-sm:text-xl max-sm:font-novaSemi">Comfortable Living Spaces for Students</h1>
                <p className="text-gray-700 mb-6 text-sm text-justify max-2xl:px-2 max-xl:px-2 max-lg:px-2 max-md:px-2 max-sm:px-2">
                    AKGEC offers state-of-the-art hostel facilities designed to provide a comfortable and secure living environment for students. Our residential complexes include separate accommodations for boys and girls, with modern amenities that create a perfect home-away-from-home experience. The hostels feature spacious rooms with ample natural light and ventilation, creating an ideal atmosphere for both study and relaxation.
                </p>
                <p className="text-gray-700 mb-6 text-sm text-justify max-2xl:px-2 max-xl:px-2 max-lg:px-2 max-md:px-2 max-sm:px-2">
                    We understand the importance of nutrition for academic success, which is why our hostel mess serves balanced, hygienic meals prepared under strict quality control. The campus also features recreational areas, study lounges, and common spaces that encourage social interaction and community building. With round-the-clock security, maintenance services, and dedicated wardens, we ensure a safe and supportive environment for all residents.
                </p>
            </div>
            <div className="max-w-7xl mx-auto my-10 p-6">
                <h2 className="text-3xl font-novaSemi text-center mb-8 max-sm:text-2xl">Premium Hostel Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities?.map((facility) => (
                        <div key={facility.id} className="flex bg-white flex-col text-center text-slate-700 shadow-lg shadow-gray-100 border border-gray-200 min-h-36 justify-center items-center p-4 hover:shadow-md transition-all">
                            <Image 
                                src={facility.icon} 
                                alt={facility.name} 
                                width={60} 
                                height={60} 
                                className="mb-4 object-contain h-12 w-12"
                            />
                            <p className='text-sm font-medium max-w-56'>{facility.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}