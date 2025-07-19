import Table from '@/Components/Table'
import React from 'react'

const admissionData = [
  {
    "courseName": "Bachelor of Technology in Computer Science and Engineering",
    "head": "UG",
    "description": "Candidates must have completed 10+2 or equivalent examination with Mathematics as one of the subjects and a minimum of 50% marks in aggregate from a recognized board."
  },
  {
    "courseName": "Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
    "head": "UG",
    "description": "Candidates should have completed 10+2 with Mathematics and at least 50% marks in aggregate. An interest in AI and ML concepts is beneficial."
  },
  {
    "courseName": "Bachelor of Technology in Computer Science and Engineering (Data Science)",
    "head": "UG",
    "description": "Candidates must have completed 10+2 with Mathematics and at least 50% marks in aggregate. Familiarity with statistical concepts is a plus."
  },
  {
    "courseName": "Bachelor of Science in Computer Science",
    "head": "UG",
    "description": "10+2 in Science stream with Mathematics as a subject and at least 50% marks in aggregate from a recognized board."
  },
  {
    "courseName": "Bachelor of Technology in Computer Science and Engineering (Hindi Medium)",
    "head": "UG",
    "description": "Candidates should have passed 10+2 or equivalent examination with Mathematics and a minimum of 50% marks in aggregate, with instruction in Hindi."
  },
  {
    "courseName": "Bachelor of Technology in Artificial Intelligence & Machine Learning",
    "head": "UG",
    "description": "Candidates must have completed 10+2 with Mathematics and at least 50% marks. A passion for technology and innovation is essential."
  },
  {
    "courseName": "Bachelor of Technology in Information Technology",
    "head": "UG",
    "description": "Candidates should have completed 10+2 with Mathematics and at least 50% marks in aggregate from a recognized board."
  },
  {
    "courseName": "Bachelor of Technology in Computer Science and Information Technology",
    "head": "UG",
    "description": "Candidates must have completed 10+2 with Mathematics and a minimum of 50% marks in aggregate."
  },
  {
    "courseName": "Bachelor of Technology in Electronics and Communication Engineering",
    "head": "UG",
    "description": "Candidates must have completed 10+2 with Physics and Mathematics, and at least 50% marks in aggregate from a recognized board."
  },
  {
    "courseName": "Bachelor of Technology in Mechanical Engineering",
    "head": "UG",
    "description": "Candidates should have completed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 50% marks in aggregate."
  },
  {
    "courseName": "Bachelor of Technology in Electrical and Electronics Engineering",
    "head": "UG",
    "description": "Candidates must have completed 10+2 with Physics and Mathematics and at least 50% marks in aggregate."
  },
  {
    "courseName": "Bachelor of Technology in Civil Engineering",
    "head": "UG",
    "description": "Candidates should have completed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 50% marks in aggregate."
  },
  {
    "courseName": "Master of Technology in Computer Science and Engineering",
    "head": "PG",
    "description": "Bachelor's degree in Computer Science or related field with a minimum of 50% marks. Entrance exam scores may be required."
  },
  {
    "courseName": "Master of Technology in Electrical and Electronics Engineering",
    "head": "PG",
    "description": "Bachelor's degree in Electrical Engineering or related field with a minimum of 50% marks. Entrance exam scores may be required."
  },
  {
    "courseName": "Master of Technology in Electronics and Communication Engineering",
    "head": "PG",
    "description": "Bachelor's degree in Electronics Engineering or related field with a minimum of 50% marks. Entrance exam scores may be required."
  },
  {
    "courseName": "Master of Technology in Mechanical Engineering",
    "head": "PG",
    "description": "Bachelor's degree in Mechanical Engineering or related field with a minimum of 50% marks. Entrance exam scores may be required."
  },
  {
    "courseName": "Master of Computer Applications (MCA)",
    "head": "PG",
    "description": "Bachelor's degree in any discipline with Mathematics at 10+2 level, with at least 50% marks from a recognized university. Entrance exam scores may be required."
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