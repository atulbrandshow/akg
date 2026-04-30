import Table from '@/Components/Table'
import React from 'react'

const admissionData = [
  {
    courseName: "B.Tech",
    head: "UG",
    description: "Minimum 60% marks in Physics, Mathematics and Chemistry/Computer Science/Information Technology/Informatics Practices/Electronics/Engineering Graphics/Technical Vocational Subjects in Class XIIth.\n\nStudents with a JEE-Mains / JEE-Advance / AKGUEE score will be given preference in the merit list",
  },
  {
    courseName: "BCA",
    head: "UG",
    description: "Minimum 50% marks aggregate at XII level (Including English & Maths / Computer Science / Informatics Practice / Computer Applications / Multimedia & Web)\n\n(for students having NO Mathematics background compulsory bridge course will be framed by the University)\n\nStudents with a good CUET / AKGUEE score will be given preference in the merit list.",
  },
  {
    courseName: "BBA",
    head: "UG",
    description: "XII with minimum 50% Marks\n\nStudents with a good CUET / AKGUEE score will be given preference in the merit list.",
  },
  {
    courseName: "M.Tech",
    head: "PG",
    description: "B.E/B.Tech with minimum 50% marks or equivalent in CGPA in relevant stream or MCA/M.Sc Computer Science/IT\n\nStudents with a CUET / GATE / AKGUEE score will be given preference in the merit list.",
  },
  {
    courseName: "MCA",
    head: "PG",
    description: "Minimum 50% marks in graduation degree (e.g.: B.E. / B.Tech./ B.Sc / B.Com. / B.A./ B.Voc. / BCA etc.,) preferably with Mathematics at 10+2 level or at Graduation level.\n\n(for students having NO Mathematics background compulsory bridge course will be framed by the University)\n\nStudents with a good CUET / AKGUEE score will be given preference in the merit list.",
  },
  {
    courseName: "MBA",
    head: "PG",
    description: "Bachelor Degree with Minimum 50% aggregate marks\n\nStudents having MAT / XAT / CMAT / NMAT / GMAT/ CUET/ AKGUEE Score will be given preference in merit list.",
  },
  {
    courseName: "Ph.D",
    head: "Doctoral Programme",
    description: "1. A candidate seeking admission after a 2-year (4-semester) master’s degree should have at least an aggregate of 55% marks or its equivalent grade ‘B’ on the UGC 10-point scale.\n\n2. A candidate seeking admission after a 4-year (8-semester) bachelor’s degree in research should have a minimum CGPA of 7.5/10 with DBT-BET/ ICMR-JRF/ GATE/ UGC-NET/ CSIR-JRF/ ARS-NET/ GPAT qualifications.\n\n3. Candidates who have secured their master’s degree under (10+2)+3+2 or (10+2)+4+2 or (10+2)+4 patterns of study are eligible to enroll in the PhD programmes as per NEP 2020.\n\n4. A 1-year (2-semester) master’s degree after 4-year undergraduate degree/ 5 years integrated master’s degree with at least an aggregate 55% marks or its equivalent grade ‘B’ in the UGC 10-point scale or an equivalent grade on a point scale wherever grading system is followed or an equivalent degree from a foreign educational institution accredited by approved, recognized by an authority, and established or incorporated under a law in its home country or any other statutory authority in that country to assess, accredit or assure quality and standards of educational institutions.",
  }
];


const AdmissionCriteria = () => {
  const tableHeadings = ["Course Name", "Program", "Eligibility Criteria"];
  const heading = "Admission Criteria";
  const paragraph = "AKGU offers top-notch, industry-focused professional programs designed to meet global standards. Our diverse and innovative curriculum provides students with a wide array of options, allowing them to choose courses that align with their interests and career aspirations. Each program comes with its own unique specifications and specializations, enabling AKGU to implement distinct admission criteria tailored to each course.";
  return (
    <>
      <Table 
        heading={heading} 
        paragraph={paragraph} 
        tableHeadings={tableHeadings} 
        data={admissionData} 
        showPagination={false}
        primaryColor="#3c5686"
        secondaryColor="#fecc00"
        headerTextColor="black"
      />
      <p className="mt-4 text-lg font-novaBold text-[#3c5686]">
        <span className="text-black">*Note:</span> 5% relaxation in marks for reserved categories.
      </p>
    </>
  )
}

export default AdmissionCriteria