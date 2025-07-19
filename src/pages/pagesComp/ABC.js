import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ABC = () => {

  const videos = [
    { id: 'video1', title: 'Introduction to Academic Bank of Credits', videoId: '9AQYf9wSHXg', duration: '3:25' },
    { id: 'video2', title: 'Academic Bank of Credits: What is ABC-Video-1', videoId: 'tDSNKZWXs7E', duration: '2:31' },
    { id: 'video3', title: 'Academic Bank of Credits: What is ABC-Video-2', videoId: 'X_JXB1U09ZY', duration: '2:15' },
    { id: 'video4', title: 'Academic Bank of Credits: What is ABC-Video-3', videoId: 'bvR8vgEalz8', duration: '2:42' },
  ];
  
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-6 max-sm:px-2 py-10 grid grid-cols-1 lg:grid-cols-2  gap-5">
        <div className='pr-5'>
          <h1 className="text-4xl max-lg:text-3xl max-sm:text-2xl max-sm:font-novaSemi font-novaReg mb-4">Academic Bank of Credits (ABC)</h1>
          <p className="text-gray-700 max-[400px]:text-sm mb-6">
            The <strong>Academic Bank of Credits (ABC)</strong> is an exciting new initiative by the <strong>Government of India</strong> to help students explore their educational journeys in a flexible way. Here’s what you need to know:
          </p>

          <h2 className="text-2xl font-novaReg mb-2">What is ABC?</h2>
          <ul className="list-disc pl-5 space-y-2 max-[400px]:text-sm text-gray-700 mb-4">
            <li>The ABC is a digital platform designed to support your learning experience by allowing you to collect, transfer, and redeem academic credits as you study.</li>
            <li>Think of it as a bank where you can store your academic achievements!</li>
          </ul>

          <h2 className="text-2xl font-novaReg mb-2">Why is ABC Important?</h2>
          <p className="text-gray-700 max-[400px]:text-sm mb-4">
            It gives you the freedom to choose your subjects and courses from different colleges and universities. You can mix and match different subjects to create your own unique educational path, helping you build a strong foundation for your future goals.
          </p>

          <h2 className="text-2xl font-novaReg mb-2">How Does ABC Work?</h2>
          <ul className="list-disc pl-5 space-y-2 max-[400px]:text-sm text-gray-700 mb-4">
            <li><strong>Registration:</strong> To get started, you need to create an account using your <strong>DigiLocker</strong>. This will give you a unique ABC ID.</li>
            <li><strong>Interactive Dashboard:</strong> Once registered, you’ll have access to a user-friendly dashboard where you can easily track your credits and see how many you’ve accumulated.</li>
            <li><strong>Credit Transfer:</strong> If you decide to switch institutions or programs, ABC makes it easy to transfer your credits, so you don’t lose any of your hard work.</li>
            <li><strong>Choice-Based Learning:</strong> You can choose courses based on your interests, making your education more enjoyable and tailored to your ambitions.</li>
          </ul>

          <h2 className="text-2xl font-novaReg mb-2">Benefits of ABC:</h2>
          <ul className="list-disc pl-5 space-y-2 max-[400px]:text-sm text-gray-700 mb-4">
            <li><strong>Flexibility:</strong> You can customize your learning journey according to your interests and career goals.</li>
            <li><strong>Seamless Mobility:</strong> Easily move between different higher education institutions without losing your credits.</li>
            <li><strong>Diverse Learning:</strong> Explore subjects across various fields and gain knowledge from multiple disciplines.</li>
          </ul>

          <p className="text-gray-700 max-[400px]:text-sm">
            With the <strong>Academic Bank of Credits</strong>, you have the power to shape your educational experience and pave the way for your future success!
          </p>
        </div>
        <div className=''>
          <Image src="/image/ABC-ID.png" alt="Academic Bank of Credits" width={1400} height={800} />
          <div className='mt-5'>
            <ul className='list-disc pl-10 space-y-2 font-novaReg text-blue-700'>
              <li>
                <Link className='hover:underline font-novaReg text-blue-700' href="https://www.abc.gov.in/" target='_blank' rel='noopener noreferrer'>Go to ABC Portal</Link>
              </li>
              <li>
                <Link className='hover:underline font-novaReg text-blue-700' href="https://www.digilocker.gov.in/" target='_blank' rel='noopener noreferrer'>Go to DigiLocker</Link>
              </li>
              <li>
                <Link className='hover:underline font-novaReg text-blue-700' href="/pdf/abc/Academic-Bank-of-Credits_User_Manual_V3.pdf" target='_blank' rel='noopener noreferrer'><strong className='text-[#17018b]'>User Manual:</strong> Student Registration and Credit Transfer under ABC</Link>
              </li>
            </ul>
          </div>
          <div className='mt-8'>
            <h2 className='text-2xl font-novaReg'>Informative Videos about ABC</h2>
            <div className="mt-3 grid grid-cols-2 max-[450px]:grid-cols-1 gap-6">
              {videos.map(video => (
                <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  />
                  <div className="p-4">
                    <h3 className="font-novaSemi">{video.title}</h3>
                    <p className="text-gray-600 text-sm">Duration: {video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ABC