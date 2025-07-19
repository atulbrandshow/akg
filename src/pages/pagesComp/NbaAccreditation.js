const NbaAccreditation = () => {
    return (
        <div className="flex w-full">
            <div className="">
                <h2 className="text-xl md:text-2xl mb-4">REGARDING NBA ACCREDITATION</h2>
                <p className="text-sm mb-4">All students are hereby informed that following B.tech branches are NBA accredited upto June 2025.</p>
                <table className="w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead className="text-white bg-indigo-900">
                        <tr>
                            <th className="py-2 px-4 font-normal text-sm border-b-4">S.No.</th>
                            <th className="py-2 px-4 font-normal text-sm border-b-4 border-l">Name of the Program</th>
                            <th className="py-2 px-4 font-normal text-sm border-b-4 border-l">Accrediation Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-white bg-blue-950 text-sm font-light">
                        <tr>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">1</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Computer Science & Engineering</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Accredited up to June 2025</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">2</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Electronics & Communication Engineering</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Accredited up to June 2025</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">3</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Electrical & Electronics Engineering</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Accredited up to June 2025</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">4</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Information Technology</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Accredited up to June 2025</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">5</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Mechanical Engineering</td>
                            <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-start">Accredited up to June 2025</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <p className="text-sm mb-4">Students are informed to read carefully NBA accreditation status of the courses and branches being run by the college. As of now, M.Tech, MCA, B.Tech Civil Engineering and all newly introduced branches namely Computer Science, Compuer Science and Information Technology, Computer Science & Engineering(Data Science), Computer Science & Engineering(AI&ML), Artificial Intelligence and Machine Learning and Computer Science & Engineering(Hindi) are not accredited.</p>
                <p className="font-bold">Note: As on date, the students belonging to OBC, Minority & SC/ST category are not covered under this notice and they are eligible for scholarship and freeship scheme.</p>
            </div>
        </div>
    );
}
export default NbaAccreditation;