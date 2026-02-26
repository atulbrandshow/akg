"use client";

import Image from "next/image";
import Link from "next/link";

const researchDomains = [
  {
    title: "Fundamental Research",
    description: "Advancing theoretical knowledge and scientific discovery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Applied Research",
    description: "Developing practical solutions to real-world challenges.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Sponsored Research",
    description: "Funded projects from government and non-government agencies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Consultancy & Contract Research",
    description: "Industry-driven projects and advisory services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
  {
    title: "International Collaborations",
    description: "Partnerships with global institutions and agencies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.319-.464 1.545l-1.612.443a1.107 1.107 0 00-.638 1.442l.338 1.5a1.107 1.107 0 01-1.353 1.309l-.497-.101a1.107 1.107 0 00-1.134.336l-1.077 1.25a2.25 2.25 0 01-1.397.712l-.995.146a.435.435 0 00-.317.387l-.096.347a.26.26 0 01-.197.189l-.26.046a.375.375 0 00-.306.452l.216.71a.375.375 0 00.354.266h.756a3.75 3.75 0 003.738-4.067L5.617 16.9m6.443-12.87A60.01 60.01 0 0116.5 4.125c.343.344.689.684 1.033 1.025m-6.79-2.12A11.968 11.968 0 0112 3c.697 0 1.381.045 2.051.13M3.75 14.25c.427-.582.903-1.13 1.428-1.637m0 0l-.369-3.085a1.875 1.875 0 011.39-2.062l.859-.19c.683-.15 1.413-.016 1.996.368l.942.604c.15.097.327.147.505.147h.171c.731 0 1.39-.379 1.76-1.013l.363-.604a.375.375 0 01.32-.187h.375a.375.375 0 01.375.375v.231c0 .216.037.43.108.636l.572 1.635c.164.47.608.808 1.107.828l.746.03a2.25 2.25 0 011.892 1.47l.551 1.655a.375.375 0 00.569.112l.175-.123a2.25 2.25 0 011.921-.295l2.427.81a.375.375 0 01.218.471l-.19.57a3.75 3.75 0 01-3.1 2.476l-1.08.17a3.75 3.75 0 00-2.458 1.57l-.27.42a.375.375 0 00.316.578h.423a.75.75 0 01.26.046c.92.32 1.393 1.332.996 2.214l-.38 1.066a3.75 3.75 0 01-3.528 2.492H12A18.006 18.006 0 013.75 14.25zm.75-9c0-.414.336-.75.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm1.5 6a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z" />
      </svg>
    ),
  },
];

const Research = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-BG45 bg-cover w-full h-[60vh] min-h-[650px] flex items-center">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4  w-full">
          <div className="max-w-3xl pt-36">
            <h5 className="text-[#f7a600] text-lg md:text-xl font-novaBold uppercase tracking-wider mb-2">
              Research Overview
            </h5>
            <h1 className="text-4xl md:text-6xl text-white font-novaBold mb-6 leading-tight">
              Driving Innovation. <br />
              Creating Impact. <br />
              Building Leaders.
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-novaReg leading-relaxed">
              Research at AKG University stands as a pillar of academic excellence and institutional growth. Since its inception, the University has been committed to building a vibrant research ecosystem that promotes innovation, interdisciplinary collaboration, and leadership among faculty and students.
            </p>
          </div>
        </div>
      </section>

      {/* RDC Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-novaBold text-black mb-6">
                Research & Development Cell <span className="text-[#f7a600]">(RDC)</span>
              </h2>
              <p className="text-lg text-gray-700 font-novaReg leading-relaxed mb-6">
                The Research & Development Cell (RDC) serves as the central hub for planning, promoting, and monitoring research initiatives across the University. We are dedicated to nurturing a culture where curiosity meets discipline, leading to breakthroughs that matter.
              </p>
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/image/research/research-female.webp"
                  alt="Research at AKG"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2 bg-gray-50 p-8 rounded-2xl shadow-sm border-l-4 border-[#f7a600]">
              <h3 className="text-2xl font-novaBold text-black mb-6">Our Objectives</h3>
              <ul className="space-y-6">
                {[
                  "Foster a strong research culture across all schools and departments",
                  "Encourage interdisciplinary and collaborative research",
                  "Develop leadership qualities among researchers and scholars",
                  "Enhance research quality, visibility, and global impact"
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f7a600]/20 flex items-center justify-center text-[#f7a600] font-bold">
                      {index + 1}
                    </span>
                    <span className="text-lg text-gray-800 font-novaReg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-novaBold text-black mb-4">
              Research Domains
            </h2>
            <p className="text-lg text-gray-600 font-novaReg max-w-2xl mx-auto">
              AKG University actively supports diverse research activities across multiple disciplines, pushing the boundaries of what is possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchDomains.map((domain, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#f7a600] transition-colors duration-300">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-novaBold text-black mb-3 group-hover:text-[#f7a600] transition-colors">
                  {domain.title}
                </h3>
                <p className="text-gray-600 font-novaReg leading-relaxed">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas & Infrastructure Split */}
      <section className="py-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Key Research Areas */}
          <div className="lg:w-1/2 bg-blue-600 py-20 px-4 lg:px-16 flex flex-col justify-center">
            <div className="max-w-lg mx-auto lg:mr-0">
              <h2 className="text-3xl md:text-4xl font-novaBold text-white mb-8">
                Key Research Areas
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Science",
                  "Engineering & Technology",
                  "Management & Business Studies",
                  "Emerging & Interdisciplinary Fields"
                ].map((area, idx) => (
                  <li key={idx} className="flex items-center text-white text-lg font-novaReg border-b border-white/20 pb-2">
                    <span className="w-2 h-2 bg-[#f7a600] rounded-full mr-4 inline-block"></span>
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-white/90 font-novaLight italic">
                &quot;The University continuously expands into new-age domains aligned with national priorities and global technological trends.&quot;
              </p>
            </div>
          </div>

          {/* Right: Infrastructure */}
          <div className="lg:w-1/2 bg-black py-20 px-4 lg:px-16 flex flex-col justify-center relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f7a600]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-lg mx-auto lg:ml-0 relative z-10">
              <h2 className="text-3xl md:text-4xl font-novaBold text-[#f7a600] mb-8">
                Research Infrastructure
              </h2>
              <p className="text-white mb-8 font-novaReg">
                AKG University is committed to strengthening research capabilities through:
              </p>
              <div className="grid gap-6">
                {[
                  "State-of-the-art laboratories and research centers",
                  "Advanced computing and technical resources",
                  "Innovation and incubation support systems",
                  "Progressive research policies and funding assistance"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white font-novaReg text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-novaBold text-black mb-8">
              Industry & Academic Collaborations
            </h2>
            <p className="text-xl text-gray-700 font-novaLight mb-12">
              We actively engage with industry leaders, academic institutions, and research organizations to:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                "Share knowledge and best practices",
                "Pool expertise and resources",
                "Promote innovation-driven solutions",
                "Translate research into societal and industrial impact"
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-xl border-t-4 border-blue-600 shadow-sm hover:shadow-md transition">
                  <p className="text-gray-800 font-novaBold leading-tight">{item}</p>
                </div>
              ))}
            </div>

            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-600 to-[#f7a600]">
              <div className="bg-white px-8 py-4 rounded-full">
                <p className="text-gray-800 font-novaBold text-lg">
                  Through these partnerships, AKG University ensures meaningful and outcome-oriented research contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-[#f7a600] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-novaBold mb-2">Our Vision</h2>
              <div className="h-2 w-20 bg-black mb-4"></div>
              <p className="text-black font-novaBold text-xl">
                AKG University aspires to:
              </p>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              {[
                "Become a center of excellence in research and innovation",
                "Strengthen global academic and industry partnerships",
                "Promote sustainable and socially responsible research",
                "Transform ideas into impactful solutions"
              ].map((item, idx) => (
                <div key={idx} className="bg-black/10 p-6 rounded-lg backdrop-blur-sm border border-black/5 hover:bg-black/20 transition">
                  <p className="font-novaReg text-lg leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Research;