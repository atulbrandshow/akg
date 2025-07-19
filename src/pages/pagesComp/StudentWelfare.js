import { ArrowRight, CircleArrowRight } from "lucide-react";

const membersData = [
    {
        name: "Dr. Nitisha Shrivastava",
        role: "Dean, Students Welfare",
        image: "/image/Faculty/Dr. Nitisha Shrivastava.jpg",
    },
    {
        name: "Dr. J. G. Yadav",
        role: "Director, Sports",
        image: "/image/Faculty/Dr. J. G. Yadav.jpg",
    },
    {
        name: "Prof. V.K. Parashar",
        role: "Director, BCA",
        image: "/image/Faculty/Prof. V.K. Parashar.jpg",
    },
];

export default function StudentWelfare() {
    return (
        <div className="px-4 py-3 max-sm:px-2 max-sm:py-2">
            <h2 className="text-4xl font-novaReg text-gray-900 mb-6 max-md:text-2xl max-md:mb-4 max-sm:mb-3 max-sm:font-novaSemi">University Frameworks for Quality Learning</h2>
            <div className="mt-8 max-md:mt-5 max-sm:mt-3">
                <h3 className="text-xl font-novaSemi text-gray-900 mb-6 max-md:mb-4 max-sm:text-lg max-sm:mb-3">Members</h3>
                <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1 max-sm:gap-3">
                    {membersData?.map((member, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl rounded-xl group">
                        <div className="p-6">
                          <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-6">
                            <img
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-xl font-novaSemi whitespace-nowrap text-gray-900 mb-2">{member.name}</h4>
                            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-novaReg px-3 py-1 rounded-full mb-4">
                              {member.role}
                            </span>
                          </div>
                          <button className="mt-3 w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-blue-600">
                            <span className="mr-2 font-novaReg">View Profile</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
