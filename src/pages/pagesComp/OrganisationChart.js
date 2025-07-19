import React from 'react'

const OrganisationChart = () => {
  return (
    <section className='px-5'>
      <div className='space-y-5'>
        <h2 className='text-4xl font-novaReg leading-5'>Organization Chart: Understanding Our Structure</h2>
        <p className='text-lg max-w-5xl leading-6 font-novaReg'>Our Organization Chart provides a clear overview of the structure and hierarchy within our institution. It highlights the various departments, key personnel, and their roles, illustrating how we work collaboratively to achieve our mission. From academic leadership to administrative support, every member of our team plays a vital role in fostering an environment of excellence and innovation. Explore the chart to better understand our organizational framework and how we are committed to supporting students, faculty, and staff in their pursuits.</p>
      </div>
     <div className='mt-10 w-full'>
      <img className='mx-auto ' src="/image/OrganisationChart.jpg" alt="Organisation Chart" />
     </div>
    </section>
  )
}

export default OrganisationChart