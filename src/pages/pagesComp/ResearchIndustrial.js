'use client'

import { useState } from 'react'
import { Mail, Phone, UserSquare2 } from 'lucide-react'

const ResearchIndustrial = () => {
  const [activeTab, setActiveTab] = useState('composition')

  const objectives = [
    "To create a collaborative environment between industry and academia through joint projects and consulting assignments.",
    "To develop a self sustaining and technologically fertile environment.",
    "To encourage and enable the alignment of R&D activities to potential needs of industry.",
    "To provide world class infrastructure at AKGEC for R&D activities."
  ]

  const projects = [
    { "sr": "1", "title": "Computer Aided Design of Grinding Machine", "agency": "Kalson Hydromatic Machine Tools, Ghaziabad", "year": "2007" },
    { "sr": "2", "title": "Reverse Engineering of Grinding Machine", "agency": "Kalson Hydromatic Machine Tools, Ghaziabad", "year": "2007" },
    { "sr": "3", "title": "Advanced Training in Pro/Engineer for Industrial Professional", "agency": "CADD Centre, Ghaziabad", "year": "2008" },
    { "sr": "4", "title": "Fast Track Training Course in Pro/Engineer", "agency": "Lord Krishna Engg. College, Ghaziabad", "year": "2008" },
    { "sr": "5", "title": "Short Term Training Program in Auto CAD for Industrial Personnel", "agency": "Shiv-Vani-Oil-Gas-Exploration-Services-Ltd, Faridabad", "year": "2008" },
    { "sr": "6", "title": "Training Program in ANSYS", "agency": "AKGEC, Ghaziabad", "year": "2009" },
    { "sr": "7", "title": "FEM Analysis of Pressure Vessel Component", "agency": "Altair Hyper Works", "year": "2009" },
    { "sr": "8", "title": "Development of Rescue Robot", "agency": "Creative Robotics Pvt. Ltd, Ghaziabad", "year": "2010" },
    { "sr": "9", "title": "AutoCAD & Pro/E Training", "agency": "AKGEC, Ghaziabad", "year": "2010" },
    { "sr": "10", "title": "Auto CAD Training", "agency": "BIT, Meerut", "year": "2010" },
    { "sr": "11", "title": "Virtual Assembly, Design of Roller Fixture", "agency": "VATEC ENGINEERS, Indore (M.P.)", "year": "2010" },
    { "sr": "12", "title": "Automatic Visual Inspection System", "agency": "VERTEX Automation, Noida", "year": "2011" },
    { "sr": "13", "title": "AutoCAD and Pro/Engineer Training", "agency": "AKGEC, Ghaziabad", "year": "2011" },
    { "sr": "14", "title": "AutoCAD and Pro/Engineer Training", "agency": "AKGEC, Ghaziabad", "year": "2012" },
    { "sr": "15", "title": "Design of Laser Based Field Leveling System", "agency": "Apogee Precision Lasers, Ahmedabad", "year": "2012" },
    { "sr": "16", "title": "Design of Super Structure for Solar Generator", "agency": "JAKSON Pvt. Ltd., Gr. Noida", "year": "2012" },
    { "sr": "17", "title": "Design and development of Automatic Ball Sorting Machine", "agency": "SMC Pneumatics (India) Pvt Ltd , Noida", "year": "2013" },
    { "sr": "18", "title": "Training in \"AutoCAD and Pro/Engineer\"", "agency": "AKGEC, Ghaziabad", "year": "2013" },
    { "sr": "19", "title": "Development of Vision System for Sheet Inspection", "agency": "Creative Robotics Pvt. Ltd. Ghaziabad", "year": "2013" },
    { "sr": "20", "title": "Training in \"AutoCAD and Pro/Engineer\"", "agency": "AKGEC, Ghaziabad", "year": "2013" },
    { "sr": "21", "title": "Training in \"AutoCAD and Pro/Engineer\"", "agency": "AKGEC, Ghaziabad", "year": "2014" },
    { "sr": "22", "title": "Optimization of high precision grinding machine bed", "agency": "Micromatic Grinding Technology Ltd. Ghaziabad.", "year": "2014" },
    { "sr": "23", "title": "Design and Development of Control Circuit for low cost controller for hydraulic machines", "agency": "Micromatic Grinding Technology Ltd. Ghaziabad.", "year": "2014" },
    { "sr": "24", "title": "IT Asset Management System", "agency": "Micromatic Grinding Technology Ltd. Ghaziabad.", "year": "2014" },
    { "sr": "25", "title": "Design and Development of Low cost Microcontroller based system for hydraulic machines", "agency": "Micromatic Grinding Technology Ltd. Ghaziabad.", "year": "2014" },
    { "sr": "26", "title": "Diagnostic System for CNC operated Grinding Machine.", "agency": "Micromatic Grinding Technology Ltd. Ghaziabad.", "year": "2014" },
    { "sr": "27", "title": "Training in Pro/E and Ansys", "agency": "AKGEC, Ghaziabad", "year": "2015" },
    { "sr": "28", "title": "Training in FEM / Ansys", "agency": "Hero Majestic,Greater Noida", "year": "2016" },
    { "sr": "29", "title": "Design of Containerized Solar Generator", "agency": "Jakson , Noida", "year": "2016" },
    { "sr": "30", "title": "Design and Development of Condenser Water Box", "agency": "BHEL , Hardwar", "year": "2017" },
    { "sr": "31", "title": "Design and Development of FDM based 3D Printer", "agency": "AKGEC, Ghaziabad", "year": "2017" },
    { "sr": "32", "title": "Training on 3D Printer", "agency": "S D Global School, Ghaziabad", "year": "2018" },
    { "sr": "33", "title": "Awarded 3D Printer in Technovation", "agency": "CORE, AKGEC", "year": "2018" },
    { "sr": "34", "title": "Developed FDM based 3D Printer", "agency": "S D Global School, Ghaziabad", "year": "2018" }
  ]

  return (
    <div className="">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-6">
          Research and Industrial Consultancy Centre (RICC) has been established in the college to promote industrial consultation and extend consultancy and Research as per industry needs. The composition of the RICC, its objective are as follows –
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="grid grid-cols-3 mb-6 border border-indigo-900 rounded-lg overflow-hidden">
        <button
          onClick={() => setActiveTab('composition')}
          className={`p-4 max-sm:p-2 max-sm:text-sm text-center font-medium ${activeTab === 'composition'
            ? 'bg-indigo-950 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-300'
            }`}
        >
          Composition
        </button>
        <button
          onClick={() => setActiveTab('objective')}
          className={`p-4 max-sm:p-2 max-sm:text-sm text-center font-medium ${activeTab === 'objective'
            ? 'bg-indigo-950 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-300'
            }`}
        >
          Objective
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`p-4 max-sm:p-2 max-sm:text-sm text-center font-medium ${activeTab === 'projects'
            ? 'bg-indigo-950 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-300'
            }`}
        >
          Projects Completed
        </button>
      </div>

      {/* Tab Content */}
      <div className="border rounded-lg p-6 max-sm:p-3">
        {activeTab === 'composition' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="font-medium mb-2">Director</h3>
              <h2 className="text-xl font-bold mb-2">Dr. R.K. Agarwal</h2>
              <p className="text-gray-600">Chairman</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-medium mb-2">ME Deptt.</h3>
              <h2 className="text-xl font-bold mb-2">Mr. Pradeep Jain</h2>
              <p className="text-gray-600">Head, RICC</p>
            </div>
          </div>
        )}

        {activeTab === 'objective' && (
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="text-gray-700">{objective}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="overflow-auto max-h-96">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 max-sm:p-1 text-center font-novaReg max-sm:text-sm">S.No</th>
                  <th className="p-3 max-sm:p-1 text-left font-novaReg max-sm:text-sm">TITLE</th>
                  <th className="p-3 max-sm:p-1 text-left font-novaReg max-sm:text-sm">SPONSORING AGENCY</th>
                  <th className="p-3 max-sm:p-1 text-left font-novaReg max-sm:text-sm">YEAR</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.sr} className="border-b">
                    <td className="p-3 max-sm:p-1 max-sm:text-sm">{project.sr}</td>
                    <td className="p-3 max-sm:p-1 max-sm:text-sm">{project.title}</td>
                    <td className="p-3 max-sm:p-1 max-sm:text-sm">{project.agency}</td>
                    <td className="p-3 max-sm:p-1 max-sm:text-sm">{project.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Contact Footer */}
      <div className="grid md:grid-cols-3 gap-6 mt-8 border border-gray-200 p-6 rounded-xl">
        <div className="flex items-center flex-col justify-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#42BCE2" className="h-14 w-14" viewBox="0 0 576 512"><path d="M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>
          <div className="text-center">
            <h3 className="font-medium">Head RICC & Associate.</h3>
            <p className="text-gray-600">Prof. ME Deptt.</p>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#42BCE2" className="h-12 w-12" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <div className="mt-2 text-center">
            <h3 className="font-medium">0120-2762841 (Extn. - 2714)</h3>
            <p className="text-gray-600">91-9810355681</p>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center gap-3 mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#42BCE2" className="h-14 w-14" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          <div className="text-center">
            <h3 className="font-medium">ricc@akgec.org</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchIndustrial