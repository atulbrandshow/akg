import React from 'react';

const InternshipPolicy = () => {
  return (
    <section className="pb-10">
      <h2 className="text-4xl font-novaBold text-brand-blue mb-6">Internship Policy</h2>
      <main className="space-y-8 text-justify">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-brand-yellow">
          <p className="text-lg font-novaReg text-gray-700 leading-relaxed">
            The Internship Policy at AKG University aims to provide students with practical industry exposure, 
            allowing them to apply their academic knowledge in real-world professional environments. internships are 
            an integral part of our curriculum, fostering professional growth and enhancing employability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-novaBold text-brand-blue mb-4 flex items-center">
              <span className="w-2 h-8 bg-brand-yellow mr-3 rounded-full"></span>
              Objectives
            </h3>
            <ul className="list-disc list-inside space-y-3 font-novaReg text-gray-700">
              <li>Facilitate hands-on learning experiences in diverse industries.</li>
              <li>Bridge the gap between theoretical knowledge and practical application.</li>
              <li>Develop professional skills, ethics, and workplace etiquette.</li>
              <li>Enable students to explore potential career paths and specializations.</li>
              <li>Provide networking opportunities with industry professionals.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-novaBold text-brand-blue mb-4 flex items-center">
              <span className="w-2 h-8 bg-brand-yellow mr-3 rounded-full"></span>
              Internship Guidelines
            </h3>
            <ul className="list-disc list-inside space-y-3 font-novaReg text-gray-700">
              <li>Internships are typically scheduled during summer and winter breaks.</li>
              <li>Duration ranges from 4 to 8 weeks depending on the program requirements.</li>
              <li>Students must obtain prior approval from the Training & Placement cell.</li>
              <li>Regular progress reports and attendance must be maintained.</li>
              <li>A comprehensive internship report must be submitted upon completion.</li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-blue p-8 rounded-2xl text-white shadow-xl">
          <h3 className="text-2xl font-novaBold mb-6 text-brand-yellow">Roles & Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-blue-800 rounded-lg bg-blue-900/30">
              <h4 className="font-novaBold mb-2 text-lg">Student</h4>
              <p className="text-sm font-novaReg text-blue-100">Maintain professionalism, adhere to company rules, and achieve learning objectives.</p>
            </div>
            <div className="p-4 border border-blue-800 rounded-lg bg-blue-900/30">
              <h4 className="font-novaBold mb-2 text-lg">Industrial Supervisor</h4>
              <p className="text-sm font-novaReg text-blue-100">Provide mentorship, assign relevant tasks, and evaluate student performance.</p>
            </div>
            <div className="p-4 border border-blue-800 rounded-lg bg-blue-900/30">
              <h4 className="font-novaBold mb-2 text-lg">University Coordinator</h4>
              <p className="text-sm font-novaReg text-blue-100">Monitor progress, provide guidance, and facilitate coordination with industries.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-novaBold text-brand-blue mb-4">Internship Process</h3>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            {[
              { step: "01", title: "Registration", desc: "Register with the T&P Cell for internship opportunities." },
              { step: "02", title: "Application", desc: "Apply to companies through the university portal." },
              { step: "03", title: "Selection", desc: "Participate in interviews and selection processes." },
              { step: "04", title: "Execution", desc: "Complete the internship at the assigned organization." },
              { step: "05", title: "Certification", desc: "Submit the report and receive the completion certificate." }
            ].map((item, idx) => (
              <div key={idx} className="flex-1">
                <div className="text-3xl font-novaBold text-gray-100 mb-2">{item.step}</div>
                <h4 className="font-novaBold text-brand-blue mb-1">{item.title}</h4>
                <p className="text-xs font-novaReg text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default InternshipPolicy;
