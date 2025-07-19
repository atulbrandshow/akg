import React from 'react';
import Image from 'next/image';

const plant = [
  {
    img: '/image/environment-protection/plantation.jpg',
    title: 'Eco Friendly Environment',
    desc: 'In view of the increasing problems of global warming, deforestation, ozone layer depletion, pollution and many more due to modern development, it is believed globally that the awareness about the present status of the environment to sensitize people about the inherent relationships with Nature has become very important.'
  },
  {
    img: '/image/environment-protection/nature-club-1.jpg',
    title: 'Nature Club Activities',
    desc: 'The club organized the event VASUDHA-2K19 during 15-19 April, 2019. During the event various competitions like Poster Making and Creative Ideas on enrichment, protection and right utilization of nature and Best Out of Waste were organized. The club celebrated International Earth Day on 22 April, 2019.'
  },
  {
    img: '/image/environment-protection/nature-club-2.jpg',
    title: 'Nature Club',
    desc: 'AKGU has established ‘Nature Club’ which is committed not only to spreading awareness about the problems but also to motivate students to find solutions to the problems in the light of inherent relationships.'
  },
  {
    img: '/image/environment-protection/nature-club-3.jpg',
    title: 'Unnat Bharat',
    desc: 'AKG University’s Recycling Program is aimed at educating students on waste segregation and recycling practices. Through this program, the university fosters a culture of sustainability, ensuring proper waste management and minimizing environmental impact.'
  }
];


function InstitutionalSocialResponsibilities() {
  return (
    <section className='pt-10'>
      <div className='max-w-[1400px] mx-auto px-4'>
        <h1 className="text-4xl font-novaReg mb-1">Environment Protection</h1>
        <p className="">
          AKG University Launches ‘Eco Friendly Environment: Our Earth, Our Responsibility’ Initiative to Promote Environmental Awareness
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-5 px-4">
        {plant.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-3 border border-blue-500 border-dashed">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-novaReg mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm text-justify">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-green-600 text-white py-10 text-center">
        <h2 className="text-2xl font-montserrat font-bold">Join Us in Making a Difference !</h2>
        <button className="mt-4 text-sm uppercase font-novaBold inline-block bg-white text-green-600 py-2 px-4 rounded-lg transition duration-300">
          Learn More
        </button>
      </div>
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 text-white rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Unnat Bharat Abhiyaan</h2>
              <p className="text-sm text-justify">
                An Awareness campaign for cleanliness and environment was conducted by the Ajay Kumar Garg University, Ghaziabad under Unnat Bharat Abhiyan by college National Social Service students at Galand and Raghunathpur villages.
              </p>
              <p className="text-sm text-justify">
                First of all the students inititated a cleanliness drive at Panchayat house of Galand village of Ghaziabad district in which the cooperation of the village head Mr.Sanjay Singh ji was unforgettable.The program moved ahead when students have started a rally on swachh bharat abhiyan through an awareness was created for cleanliness program under Swachh Bharat Abhiyan on the main road of Galand village.
              </p>
              <button className="bg-yellow-500 uppercase px-2 py-1 font-novaSemi rounded-md hover:bg-yellow-600 text-black">SEE OUR PROGRAM</button>
            </div>
            <Image
              src="/image/environment-protection/unnat-bharat.jpg"
              alt="Unnat Bharat Abhiyaan"
              width={400}
              height={200}
              className="w-full h-64 object-cover object-bottom"
            />
          </div>
          <div className="space-y-4">
            <div className="bg-cyan-600 text-white rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-bold">Nature Club Programs</h2>
              <p className="text-sm text-justify">
                In view of the increasing problems of global warming, deforestation, ozone layer depletion, pollution and many more due to modern development, it is believed globally that the awareness about the present status of the environment to sensitize people about the inherent relationships with Nature has become very important.
              </p>
              <h3 className="text-xl font-semibold">» Establish Program</h3>
              <p className="text-sm text-justify">
                AKGU has established ‘Nature Club’ which is committed not only to spreading awareness about the problems but also to motivate students to find solutions to the problems in the light of inherent relationships. The effort will improve the competence of students to contribute towards the sustainability of nature and avoid environmental degradation in their individual capacity as well as in groups.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/image/environment-protection/nature-club-1.jpg"
                  alt="Quiz Competition 1"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
                <Image
                  src="/image/environment-protection/nature-club-2.jpg"
                  alt="Quiz Competition 2"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="bg-yellow-500 uppercase px-2 py-1 font-novaSemi rounded-md hover:bg-yellow-600 text-black">Discover Our Program</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-BG29 bg-cover bg-center bg-zinc-800 bg-blend-multiply opacity-90 py-20 ">
        <div className='max-w-7xl mx-auto text-white'>
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-novaReg mr-2">Why Is Environmental Protection Important ?</h2>
            <span className="text-green-600 text-4xl">&#8594;</span>
          </div>
          <div className="flex items-center mb-4 justify-center">
            <p className="mb-4 text-justify">
              Environmental protection is essential for maintaining the health of our planet and ensuring a sustainable future for generations to come. Here are some key reasons why it matters:
            </p>
          </div>
          <ul className="list-disc list-inside mb-6 pl-4">
            <li>Preserves natural resources for future generations.</li>
            <li>Reduces pollution and improves air and water quality.</li>
            <li>Helps combat climate change and its effects.</li>
            <li>Protects biodiversity and habitats.</li>
          </ul>
          <h3 className="text-3xl font-novaReg text-center mb-4">Get Involved!</h3>
          <p className=" text-center mb-6 px-4">
            You can make a difference by participating in local clean-up events, reducing waste, recycling, and spreading awareness about environmental issues.
          </p>
        </div>
      </div>

    </section>
  );
}

export default InstitutionalSocialResponsibilities;
