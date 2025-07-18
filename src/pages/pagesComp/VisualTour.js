import React from 'react'

const VisualTour = () => {
  return (
    <section className='px-5'>
      <div className='space-y-5'>
        <h2 className='text-4xl font-novaReg leading-5'>AKGU Visual Tour: Explore Our Campus from Anywhere</h2>
        <p className='text-lg max-w-5xl leading-6 font-novaReg'>Take a virtual journey through AKGU with our immersive Visual Tour! Discover our state-of-the-art facilities, green campus spaces, cutting-edge labs, and vibrant student life—all from the comfort of your own home. Our Visual Tour gives you a glimpse of what it’s like to be a part of the AKGU community, showcasing the resources and experiences that make our campus a unique and inspiring place to learn, grow, and succeed. Start exploring and see why AKGU is the perfect environment to pursue your academic and personal goals.</p>
      </div>
      <div className='mt-10'>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/tOl8-QPLIAU?start=2"
          title="AKGU Visual Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default VisualTour