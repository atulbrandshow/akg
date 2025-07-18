
const ContactIncubator = () => {
    return (
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/image/placement/4.png"
                        alt="Business man holding a folder"
                        className="rounded-lg w-full object-cover "
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-4xl font-novaLight mb-2">AKGU-Technology Business</h2>
                    <h1 className="text-4xl font-novaBold mb-4">Incubator</h1>
                    <p className="mb-6 text-lg font-novaReg text-gray-600">
                        AKG University is dedicated to fostering a culture of innovation and entrepreneurship, encouraging students to transform ideas into viable businesses.
                    </p>
                    <ul className="list-disc pl-4 text-gray-600">
                        <li className="text-sm mb-2.5">Government-Recognized Technology Business Incubator</li>
                        <li className="text-sm mb-2.5">Innovation & Entrepreneurship Development Cell (IEDC)</li>
                        <li className="text-sm mb-2.5">90+ Startups Supported and 15 Startups Graduated</li>
                    </ul>
                    <br />
                    <br />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white uppercase font-novaBold tracking-wider py-2.5 px-6 rounded-xl">
                        Join Now
                    </button>
                    <h2 className="text-3xl font-novaBold mt-8 mb-4">Get in Touch</h2>
                    <ul className="list-disc text-gray-600 pl-3 mb-5">
                        <li className="font-novaReg">
                            <a className="mb-2.5">incubator@akgecmail.in</a></li>
                        <li className="font-novaReg">
                            <a className="mb-2.5">iedc@akgecmail.in</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactIncubator