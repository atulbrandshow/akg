import React from 'react'

const Migration = () => {
  return (
    <div className="py-4">
      <h1 className="text-[42px] leading-none max-w-md font-novaReg mb-4 max-sm:text-2xl max-sm:mb-2">AKG University Migration Policy</h1>
      <ul className="list-disc ml-6 space-y-2 max-sm:ml-3 max-sm:pl-2">
        <li className='text-base max-sm:text-sm'><strong className='text-base max-sm:text-sm font-novaBold'>Postgraduate Programs:</strong> Migration is not allowed in postgraduate courses due to the limited duration of these degree programs.</li>
        <li className='text-base max-sm:text-sm'><strong className='text-base max-sm:text-sm font-novaBold'>Undergraduate Programs:</strong> Migration is permitted only until the end of the third semester. After that, students will not be allowed to migrate.</li>
        <li className='text-base max-sm:text-sm'><strong className='text-base max-sm:text-sm font-novaBold'>Calculation of CGPA:</strong> The CGPA will be calculated based solely on the credits earned at AKG University. Students will receive a Detailed Mark Certificate (DMC) for the subjects they have completed according to the university's curriculum.</li>
        <li className='text-base max-sm:text-sm'><strong className='text-base max-sm:text-sm font-novaBold'>Reappear Policy:</strong> Students with any reappear examinations from their previous institution will not be permitted to migrate.
        </li>
      </ul>
    </div>
  )
}

export default Migration