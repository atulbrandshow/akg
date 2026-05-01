"use client";

const CustomFeeTable = () => {
  return (
    <div className="overflow-x-auto w-full bg-white shadow-xl rounded-lg">
      <table className="min-w-full border-collapse border border-gray-300 font-novaReg text-[#333]">
        <thead>
          <tr className="bg-[#fecc00] text-black">
            <th className="border border-gray-300 px-4 py-4 text-center w-16 font-novaBold uppercase text-sm">S.No</th>
            <th className="border border-gray-300 px-4 py-4 text-left font-novaBold uppercase text-sm">Name of the Schools</th>
            <th className="border border-gray-300 px-4 py-4 text-left font-novaBold uppercase text-sm">Programs</th>
            <th className="border border-gray-300 px-4 py-4 text-left font-novaBold uppercase text-sm">Courses</th>
            <th className="border border-gray-300 px-4 py-4 text-center font-novaBold uppercase text-sm">Tuition Fee (Annual)</th>
          </tr>
        </thead>
        <tbody>
          {/* School 1 */}
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle" rowSpan={2}>1</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaBold text-[#3c5686]" rowSpan={2}>School of Computer Science</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi">Under Graduate Programs</td>
            <td className="border border-gray-300 px-4 py-3">
              <span className="font-novaBold text-[#3c5686]">B.Tech in Computer Science & Engineering specialization in:</span>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
                <li>Information Technology</li>
                <li>Cyber Security</li>
                <li>Cloud Technology</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Blockchain</li>
              </ul>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 135,000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi">Postgraduate Programs</td>
            <td className="border border-gray-300 px-4 py-3">
               <span className="font-novaBold text-[#3c5686]">M.Tech in Computer Science and Engineering specialization in:</span>
               <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                <span>• Artificial Intelligence</span>
                <span>• AI & Machine Learning</span>
                <span>• Data Science</span>
                <span>• Cyber Security</span>
                <span>• Cloud Technology</span>
                <span>• Information Technology</span>
                <span>• Blockchain</span>
               </div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 82,000</td>
          </tr>

          {/* School 2 */}
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 text-center align-middle" rowSpan={4}>2</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaBold text-[#3c5686]" rowSpan={4}>School of Engineering & Technology</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi" rowSpan={3}>Graduate Programs</td>
            <td className="border border-gray-300 px-4 py-3">
              <span className="font-novaBold text-[#3c5686]">B.Tech in Electronics & Communication Engineering specialization in:</span>
              <div className="mt-2 ml-2 italic text-gray-600">VLSI Design, IoT, 5G/6G Technology, Artificial Intelligence</div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 135,000</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3">
              <span className="font-novaBold text-[#3c5686]">B.Tech in Electrical Engineering specialization in:</span>
              <div className="mt-2 ml-2 italic text-gray-600">Electrical Vehicles, Artificial Intelligence</div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 135,000</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3">
              <span className="font-novaBold text-[#3c5686]">B.Tech in Mechanical Engineering with specialization in:</span>
              <div className="mt-2 ml-2 italic text-gray-600">Mechatronics, Robotics, Artificial Intelligence, Additive Manufacturing</div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 135,000</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi">Postgraduate Programs</td>
            <td className="border border-gray-300 px-4 py-3">
               <div className="flex flex-col gap-3">
                 <div className="pb-1 border-b border-gray-200 text-[#3c5686]">M.Tech in Electronics & Communication</div>
                 <div className="pb-1 border-b border-gray-200 text-[#3c5686]">M.Tech in Electrical Engineering</div>
                 <div className="text-[#3c5686]">M.Tech in Mechanical Engineering</div>
               </div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">
               <div className="flex flex-col gap-3">
                 <div className="pb-1 border-b border-gray-200">₹ 72,000</div>
                 <div className="pb-1 border-b border-gray-200">₹ 62,000</div>
                 <div>₹ 62,000</div>
               </div>
            </td>
          </tr>

          {/* School 3 */}
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle" rowSpan={2}>3</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaBold text-[#3c5686]" rowSpan={2}>School of Computing</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi">Graduate Programs</td>
            <td className="border border-gray-300 px-4 py-3">
              <span className="font-novaBold text-[#3c5686]">BCA with specializations in:</span>
              <div className="mt-2 ml-2">AI-ML, Data Science, Cyber security</div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 75,000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi">Postgraduate Programs</td>
            <td className="border border-gray-300 px-4 py-3 font-novaBold text-[#3c5686]">MCA</td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 96,000</td>
          </tr>

          {/* School 4 */}
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 text-center align-middle" rowSpan={2}>4</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaBold text-[#3c5686]" rowSpan={2}>School of Management</td>
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi">Graduate Programs</td>
            <td className="border border-gray-300 px-4 py-3">
              <span className="font-novaBold text-[#3c5686]">BBA specialization in:</span>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <span>• Artificial Intelligence</span>
                <span>• Generative AI & BI</span>
                <span>• Data Science</span>
                <span>• Digital Marketing</span>
                <span>• HR</span>
                <span>• Finance</span>
                <span>• International Trades</span>
              </div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 111,500</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 align-middle font-novaSemi">Postgraduate Programs</td>
            <td className="border border-gray-300 px-4 py-3">
              <span className="font-novaBold text-[#3c5686]">MBA specialization in:</span>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <span>• Artificial Intelligence</span>
                <span>• Generative AI & BI</span>
                <span>• Data Science</span>
                <span>• Digital Marketing</span>
                <span>• HR</span>
                <span>• Finance</span>
              </div>
            </td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 126,500</td>
          </tr>

          {/* School 5 */}
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold">5</td>
            <td className="border border-gray-300 px-4 py-3 font-novaBold text-[#3c5686] text-center align-middle uppercase tracking-wide">Doctoral Program</td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaSemi">Ph.D</td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle italic text-gray-600">All Specializations</td>
            <td className="border border-gray-300 px-4 py-3 text-center align-middle font-novaBold text-lg">₹ 46,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const CourseFee = () => {
  const heading = "Course Fee";
  const paragraph = "Ajay Kumar Garg University (AKGU) provides quality education with a strong focus on affordability and value for money. AKGU offers industry-aligned programs in Engineering, MBA, MCA, and various other disciplines, ensuring students receive the best Return on Investment (ROI). With competitive fees, AKGU stands out as a premier choice for students seeking a cost-effective, high-quality education in the region.";

  return (
    <div className="container mx-auto">
      <h1 className="text-[42px] font-novaReg leading-none mb-4 text-[#3c5686]">{heading}</h1>
      <p className="mb-10 text-lg md:text-xl leading-relaxed text-gray-700">{paragraph}</p>
      <CustomFeeTable />
      
      {/* Fee Notes Section */}
      <div className="mt-12 bg-[#f8fafc] p-8 rounded-xl border-l-8 border-[#fecc00] shadow-md">
        <h3 className="text-2xl font-novaBold text-[#3c5686] mb-6 underline underline-offset-8 decoration-[#fecc00]">Note:</h3>
        <div className="space-y-4 text-lg font-novaSemi text-gray-800">
          <p className="flex items-start">
            <span className="text-[#3c5686] font-novaBold mr-2">1)</span> 
            <span><strong className="text-black">B.Tech</strong> (Other charges: Rs. 34000/- Annually, One time fee: Rs. 19500/-)</span>
          </p>
          <p className="flex items-start">
            <span className="text-[#3c5686] font-novaBold mr-2">2)</span> 
            <span><strong className="text-black">M.Tech/MBA/MCA</strong> (Other charges: Rs. 34000/- Annually, One time fee: Rs. 17000/-)</span>
          </p>
          <p className="flex items-start">
            <span className="text-[#3c5686] font-novaBold mr-2">3)</span> 
            <span><strong className="text-black">BBA/BCA</strong> (Other charges: Rs. 34000/- Annually, One time fee: Rs. 18250/-)</span>
          </p>
          <p className="flex items-start">
            <span className="text-[#3c5686] font-novaBold mr-2">4)</span> 
            <span><strong className="text-black">Ph.D</strong> (Other charges: Rs. 14000/- Annually, One time fee: Rs. 19500/-)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseFee;