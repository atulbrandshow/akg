import React from 'react'

const PlacementPolicy = () => {
  return (
    <section className="pb-5">
      <h2 className="text-4xl font-novaReg mb-2 max-md:text-3xl max-sm:text-2xl">Placement Policy</h2>
      <main className="space-y-6 text-justify max-md:space-y-5 max-sm:space-y-4">
        <p className="text-base max-sm:text-sm">
          The objective of the placement policy at AKGU is to outline the overall structure and processes involved in
          the Training and Placement, ensuring clear responsibilities for all teams working toward successful placements.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-2 max-sm:text-base">The policy aims to ensure that</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Maximum number of students secure on-campus placements</li>
            <li>Deserving students are given the opportunity to pursue careers with companies of their choice</li>
            <li>High-quality job offers are consistently maintained</li>
            <li>All teams adhere to defined processes to achieve the university's placement objectives</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 max-sm:text-base">Scope</h3>
          <p className="text-base max-sm:text-sm">
            This policy applies to all Engineering, Management, and other programs coordinated by AKGU and relevant to:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Students being assessed for their respective courses</li>
            <li>Completion requirements necessary for the award of an AKGU degree</li>
            <li>Campus recruitment available exclusively for final-year students</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 max-sm:text-base">The University</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>The term "University" in this policy refers to AKG University</li>
            <li>T&P stands for Training and Placement teams</li>
            <li>
              The role of T&P is to provide placement support to graduating students. T&P strives to bridge the gap between students
              and potential employers, facilitating interactions between them.
            </li>
            <li>
              T&P communicates with organizations, arranges interviews, and coordinates the various activities related to placements
              for AKGU students.
            </li>
            <li>All placements at AKGU are managed through the T&P department</li>
          </ul>
        </div>
      </main>
    </section>

  )
}

export default PlacementPolicy