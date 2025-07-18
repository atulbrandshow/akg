import React from 'react'
import { placementAnalysisData, placementTrackerData, placementPackageData } from '@/Json/PlacementData'

const PlacementLinks = () => {
  return (
    <section className="w-full bg-[#bb2225]">
          <div className="max-w-[1400px] max-xl:max-w-[1000px] max-lg:max-w-[700px] max-md:max-w-xl max-sm:max-w-sm text-white mx-auto grid grid-cols-3 max-md:grid-cols-1">
            <div className="px-5 max-lg:px-0 max-sm:px-3 py-10">
              <h1 className="text-3xl max-xl:text-2xl font-bold max-lg:text-xl leading-none max-w-72">
                University Placement Tracker
              </h1>
              <ul className="leading-9 max-xl:text-[14px] max-xl:leading-7 pt-5">
                {placementTrackerData?.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="flex items-center space-x-2 hover:underline">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.2 512.2" className="fill-white" height={16} width={16}><g><path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" /></g></svg>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#023e94] px-10 max-sm:px-3 max-lg:px-4 py-10">
              <h1 className="text-3xl font-bold leading-none max-xl:text-2xl max-lg:text-xl max-w-80">
                On-Campus Placement Packages
              </h1>
              <ul className="leading-9 pt-5 max-xl:text-[14px] max-xl:leading-7">
                {placementPackageData?.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="flex items-center space-x-2 hover:underline">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.2 512.2" className="fill-white" height={16} width={16}><g><path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" /></g></svg>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-10 px-10 max-lg:px-3 max-sm:px-3">
              <h1 className="text-3xl font-bold leading-none max-w-72 max-xl:text-2xl max-lg:text-xl">
                University Placement Analysis
              </h1>
              <ul className="pt-5 leading-9 max-xl:text-[14px] max-xl:leading-7">
                {placementAnalysisData?.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="flex items-center space-x-2 hover:underline">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.2 512.2" className="fill-white" height={16} width={16}><g><path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" /></g></svg>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
  )
}

export default PlacementLinks