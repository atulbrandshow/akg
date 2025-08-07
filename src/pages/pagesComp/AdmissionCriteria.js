import Table from '@/Components/Table'
import React from 'react'

const admissionData = [
  {
    courseName: "B.Tech (All Branches)",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in Computer Science Engineering",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in Data Science",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in AI & Machine Learning",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in Information Technology",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in Electronics & Communication Engineering",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in Electrical & Electronics Engineering",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in Mechanical Engineering",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "B.Tech in Civil Engineering",
    head: "UG",
    description: "10+2 with Physics, Chemistry, Mathematics. Minimum 50% aggregate (varies by program). Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "BBA (Bachelor of Business Administration)",
    head: "UG",
    description: "10+2 in any stream with minimum 50% aggregate. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "BCA (Bachelor of Computer Applications)",
    head: "UG",
    description: "10+2 with Mathematics/Computer Science as one subject. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "M.Tech in Computer Science Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "M.Tech in Electronics & Communication Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "M.Tech in Electrical & Electronics Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "M.Tech in Mechanical Engineering",
    head: "PG",
    description: "B.Tech in relevant discipline with minimum 55% marks. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "MCA (Master of Computer Applications)",
    head: "PG",
    description: "BCA/B.Sc (CS/IT) with minimum 50% marks and Mathematics at 10+2 or UG level. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "MBA (Master of Business Administration)",
    head: "PG",
    description: "Graduation in any stream with minimum 50% marks. Entrance: JEE Main / Merit-Based / Personal Interview.",
  },
  {
    courseName: "Ph.D. Programs",
    head: "Doctoral",
    description: "Master’s degree in relevant field with minimum 55% marks. Entrance: JEE Main / Merit-Based / Personal Interview.",
  }
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