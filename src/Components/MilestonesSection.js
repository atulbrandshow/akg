"use client";
import { IMAGE_PATH } from '@/configs/config';
import React from 'react';

const MilestonesSection = ({ data }) => {
  const d = data?.pageData;

  const logos = d?.Achievements_Logos;

  const words = d?.Achievements_Title?.trim().split(" ");
  const last = words?.pop();
  const first = words?.join(" ");

  const milestones = []
  for (let i = 1; i <= 10; i++) {
    const rank = d?.[`Rank-${i}`]
    const description = d?.[`RankDesc-${i}`]

    if (rank && description) {
      const match = rank.match(/^(\d+)(\D+)$/); // matches digits + non-digits
      const number = match?.[1] || rank;
      const sup = match?.[2] || '';

      milestones.push({
        rank: number,
        sup,
        description,
      })
    }
  }

  return (
    <section className='bg-white'>
      <div className="max-w-[1400px] mx-auto py-12">
        <div className="text-center mb-10 ">
          <div className='flex gap-1 justify-center text-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>

          </div>
          <h2 className="text-5xl font-novaLight max-lg:text-4xl max-md:text-3xl text-gray-800 mt-5">{first} {" "}<span className='font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient'>{last}</span>!</h2>
          <div className="my-14 flex justify-center space-x-14 max-lg:grid max-lg:grid-cols-3 max-sm:grid-cols-3 max-lg:space-x-0 max-lg:gap-4 max-lg:place-items-center">
            {logos?.map((logo, index) => (
              <img
                key={index}
                src={IMAGE_PATH + logo}
                alt={`Logo ${index + 1}`}
                className="h-12 max-lg:h-10 max-sm:h-8 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between space-x-0 max-lg:space-x-0  mx-auto max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-lg:justify-start max-lg:gap-y-5">
          {milestones?.map((milestone, index) => (
            <div key={index} className="text-left after:content-link relative after:absolute after:left-5 after:top-0 after:w-6 after:h-full px-10 mb-1">
              <p className="text-xs uppercase bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent font-novaBold">Ranked</p>
              <p className="text-4xl font-novaLight text-gray-900 max-lg:text-2xl">{milestone.rank}<sup className='text-3xl font-novaLight max-lg:text-lg ml-1'>{milestone.sup}</sup></p>
              <p className="text-sm font-novaReg text-black max-lg:text-xs max-sm:text-[10px]">among The Best</p>
              <p className="text-[15px] font-novaReg capitalize max-lg:text-xs max-sm:text-[10px]">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
