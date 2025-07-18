import React from 'react'

const CoeVideos = () => {
  return (
    <section className='px-5'>
      <div className='space-y-5'>
        <h2 className='text-4xl font-novaReg leading-5'>COE Videos: Insight into Our Center of Excellence</h2>
        <p className='text-lg max-w-5xl leading-6 font-novaReg'>Delve into the world of cutting-edge technology and innovation with our COE (Center of Excellence) video series. These videos showcase our commitment to excellence in fields such as robotics, artificial intelligence, advanced manufacturing, and more. Watch as our students and faculty collaborate on groundbreaking projects, explore the latest industry tools, and engage in hands-on learning experiences. Our COE Videos offer a glimpse into the future of engineering and technology, and highlight the skills, creativity, and passion that drive our students to excel.</p>
      </div>
      <div className='mt-10'>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/svdHlBpwykg?start=2"
          title="AKGU Visual Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default CoeVideos