import Table from '@/Components/Table'
import React from 'react'

const admissionData = [
  {
    courseName: "B.Tech (All Branches)",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics, minimum 50% aggregate (varies by program). Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "Computer Science Engineering",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "Data Science",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "AI & Machine Learning",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "Information Technology",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "Electronics & Communication Engineering",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "Electrical & Electronics Engineering",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "Mechanical Engineering",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "Civil Engineering",
    head: "UG",
    description: "10+2 with PCM, minimum 50% aggregate. Entrance: AKGCET / JEE Main / Merit-Based.",
  },
  {
    courseName: "BBA (Bachelor of Business Administration)",
    head: "UG",
    description: "10+2 in any stream with minimum 50% aggregate. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "BCA (Bachelor of Computer Applications)",
    head: "UG",
    description: "10+2 with Mathematics/Computer Science as one subject. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "M.Tech (All Specializations)",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "M.Tech in Computer Science Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "M.Tech in Electronics & Communication Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "M.Tech in Electrical & Electronics Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "M.Tech in Mechanical Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "MCA (Master of Computer Applications)",
    head: "PG",
    description: "BCA/B.Sc (CS/IT) with minimum 50% marks and Mathematics at 10+2 or UG level. Entrance: AKGCET / Merit-Based.",
  },
  {
    courseName: "MBA (Master of Business Administration)",
    head: "PG",
    description: "Graduation in any stream with minimum 50% marks. Entrance: AKGCET / CAT / MAT / XAT / Group Discussion & Interview.",
  },
  {
    courseName: "Ph.D. Programs",
    head: "Doctoral",
    description: "Master’s degree in relevant field with minimum 55% marks. Entrance Test + Personal Interview.",
  },
];


const AdmissionCriteria = () => {
  const tableHeadings = ["Course Name", "Specialization", "Eligibility Criteria"];
  const heading = "AKG University, Admission Criteria";
  const paragraph = "AKGU offers top-notch, industry-focused professional programs designed to meet global standards. Our diverse and innovative curriculum provides students with a wide array of options, allowing them to choose courses that align with their interests and career aspirations. Each program comes with its own unique specifications and specializations, enabling AKGU to implement distinct admission criteria tailored to each course.";
  return (
    <Table heading={heading} paragraph={paragraph} tableHeadings={tableHeadings} data={admissionData} />
  )
}

export default AdmissionCriteria