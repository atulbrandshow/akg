"use client";

import React, { useState } from 'react';

const studentData = [
    { name: 'Anshuman Nandan', company: 'Goldman Sachs', ctc: '30' },
    { name: 'Vibhu Dixit', company: 'Q Benefi Global Corp', ctc: '21' },
    { name: 'Dhruv Goyal', company: 'Q Benefi Global Corp', ctc: '21' },
    { name: 'Archas Srivastava', company: 'Q Benefi Global Corp', ctc: '21' },
    { name: 'Ayush Raghuwanshi', company: 'Q Benefi Global Corp', ctc: '21' },
    { name: 'Suhail Ahmad', company: 'Q Benefi Global Corp', ctc: '21' },
    { name: 'Ketan Singh', company: 'Blog Vault', ctc: '14' },
    { name: 'Rani', company: 'Amazon', ctc: '13.2' },
    { name: 'Garima Gautam', company: 'Amazon', ctc: '13.2' },
    { name: 'Himanshi Tripathi', company: 'Amazon', ctc: '13.2' },
    { name: 'Soumya Maheshwari', company: 'Google', ctc: '13.2' },
    { name: 'Nikhil Mishra', company: 'EUCLID PROTOCOL', ctc: '12.43' },
    { name: 'Krish Agarwal', company: 'Mobilicis India Pvt Ltd', ctc: '12' },
    { name: 'Alan Ansari', company: 'RT Camp', ctc: '12' },
    { name: 'Parth Suyal', company: 'SWAAYATT ROBOTS', ctc: '11' },
    { name: 'Ramest Gupta', company: 'Arrise Solution', ctc: '11' },
    { name: 'Prakhar Maheshwari', company: 'Arrise Solution', ctc: '11' },
    { name: 'Lakshya Verma', company: 'Arrise Solution', ctc: '11' },
    { name: 'Yash Varshney', company: 'Arrise Solution', ctc: '11' },
    { name: 'Divyanshu Rana', company: 'SHL', ctc: '10.63' },
    { name: 'Kshitiz Agarwal', company: 'SHL', ctc: '10.63' },
    { name: 'Annanay Aggarwal', company: 'UDYOGTECH VENTURES', ctc: '10' },
    { name: 'Sajal Rastogi', company: 'Restroworks', ctc: '10' },
    { name: 'Sajal Aggarwal', company: 'Info Edge India Ltd.', ctc: '10' },
    { name: 'Sneha Vasisth', company: 'Leewayhertz', ctc: '9.5' },
    { name: 'Siddhant Gurung', company: 'Infosys', ctc: '9.5' },
    { name: 'Tushar Chauhan', company: 'Infosys', ctc: '9.5' },
    { name: 'Kshitij Garg', company: 'Infosys', ctc: '9.5' },
    { name: 'Priya Agrahari', company: 'Infosys', ctc: '9.5' },
    { name: 'Parth Pandey', company: 'Infosys', ctc: '9.5' },
    { name: 'Priyanshi Varyani', company: 'Infosys', ctc: '9.5' },
    { name: 'Akansha Gangwar', company: 'Infosys', ctc: '9.5' },
    { name: 'Harshit', company: 'Infosys', ctc: '9.5' },
    { name: 'Arman Siddiqui', company: 'Infosys', ctc: '9.5' },
    { name: 'Ayush Mishra', company: 'Infosys', ctc: '9.5' },
    { name: 'Harsh Sharma', company: 'Infosys', ctc: '9.5' },
    { name: 'Vaibhav Saran', company: 'Infosys', ctc: '9.5' },
    { name: 'Prabal Tripathi', company: 'Infosys', ctc: '9.5' },
    { name: 'Dhruv Kushwaha', company: 'Optimus', ctc: '9' },
    { name: 'Palak Sharma', company: 'Intellipaat', ctc: '9' },
    { name: 'Niyati Singh', company: 'Intellipaat', ctc: '9' },
    { name: 'Divyanshu Ranjan Singh', company: 'Intellipaat', ctc: '9' },
    { name: 'Dipika Gautam', company: 'Intellipaat', ctc: '9' },
    { name: 'Raghav Aggarwal', company: 'Intellipaat', ctc: '9' },
    { name: 'Palak Agarwal', company: 'Intellipaat', ctc: '9' },
    { name: 'Ayush Gupta', company: 'Intellipaat', ctc: '9' },
    { name: 'Ashmit Pandey', company: 'Intellipaat', ctc: '9' },
    { name: 'Pulomja Singh', company: 'Intellipaat', ctc: '9' },
    { name: 'Shobhit Sharma', company: 'Intellipaat', ctc: '9' },
    { name: 'Bhavishya Tyagi', company: 'Intellipaat', ctc: '9' },
    { name: 'VANSH TYAGI', company: 'Intellipaat', ctc: '9' },
    { name: 'Sanya Jain', company: 'Intellipaat', ctc: '9' },
    { name: 'kanishk upadhyay', company: 'Intellipaat', ctc: '9' },
    { name: 'Yug Tyagi', company: 'Intellipaat', ctc: '9' },
    { name: 'Ashmit Tyagi', company: 'Intellipaat', ctc: '9' },
    { name: 'Anant Tyagi', company: 'Intellipaat', ctc: '9' },
    { name: 'Ankur Yadav', company: 'Intellipaat', ctc: '9' },
    { name: 'Madhav Saxena', company: 'Intellipaat', ctc: '9' },
    { name: 'MAYANK SINGHAL', company: 'Intellipaat', ctc: '9' },
    { name: 'Ashish chahal', company: 'Intellipaat', ctc: '9' },
    { name: 'Anshul Chaudhary', company: 'Intellipaat', ctc: '9' },
    { name: 'ADARSH SINGH ', company: 'Intellipaat', ctc: '9' },
    { name: 'Akash Singh Sikarwar ', company: 'Intellipaat', ctc: '9' },
    { name: 'Abhinav Singh ', company: 'Intellipaat', ctc: '9' },
    { name: 'Dev Yadav', company: 'Intellipaat', ctc: '9' },
    { name: 'Pratham Shukla', company: 'Intellipaat', ctc: '9' },
    { name: 'Dhruv Govil', company: 'Intellipaat', ctc: '9' },
    { name: 'Bhavishya Prakash', company: 'Intellipaat', ctc: '9' },
    { name: 'Nupur Tomar', company: 'Intellipaat', ctc: '9' },
    { name: 'Rashank Agrawal', company: 'Intellipaat', ctc: '9' },
    { name: 'Arav Maurya', company: 'Intellipaat', ctc: '9' },
    { name: 'Aviral Tyagi', company: 'Intellipaat', ctc: '9' },
    { name: 'Akash kumar', company: 'Intellipaat', ctc: '9' },
    { name: 'Vaibhav Singh', company: 'Intellipaat', ctc: '9' },
    { name: 'ANUPAM SINGH', company: 'Intellipaat', ctc: '9' },
    { name: 'SARTHAK SINGH ', company: 'Intellipaat', ctc: '9' },
    { name: 'Shivam Maddheshiya ', company: 'Intellipaat', ctc: '9' },
    { name: 'Anuj Kumar Gupta', company: 'Intellipaat', ctc: '9' },
    { name: 'PRAKHAR PANDEY', company: 'Intellipaat', ctc: '9' },
    { name: 'Priyanshu Agrahari', company: 'Intellipaat', ctc: '9' },
    { name: 'SUPRIYA  MAURYA', company: 'Intellipaat', ctc: '9' },
    { name: 'HARSH MISHRA', company: 'Intellipaat', ctc: '9' },
    { name: 'Ahad Malik', company: 'Intellipaat', ctc: '9' },
    { name: 'Divya Tyagi', company: 'Intellipaat', ctc: '9' },
    { name: 'Shaleen Saifi', company: 'Intellipaat', ctc: '9' },
    { name: 'Aditya Trivedi', company: 'Intellipaat', ctc: '9' },
    { name: 'Ratnesh Mishra', company: 'Waldo Aio Inc.', ctc: '8.16' },
    { name: 'Vaibhav Dubar', company: 'HashedIn Technologies', ctc: '8.1' },
    { name: 'Vaidic Dodwani', company: 'NEODOCS HEALTHCARE', ctc: '8' },
    { name: 'Simran Yadav', company: 'Zigram', ctc: '8' },
    { name: 'Adarsh Shukla', company: 'Rohde & Schwarz', ctc: '8' },
    { name: 'Samarth Srivastava', company: 'Triple - A Technologies', ctc: '7.85' },
    { name: 'Mohd Asjad Raza Ansari', company: 'Arohana Technologies', ctc: '7.68' },
    { name: 'Tanishka Sachdeva', company: 'THE INNOVATION STORY', ctc: '7.5' },
    { name: 'Ishika Gupta', company: 'RETAIN IQ', ctc: '7.5' },
    { name: 'Anshuman Tiwari', company: 'Waterdip Labs', ctc: '7.5' },
    { name: 'Divyanshi Srivastava', company: 'ASBL', ctc: '7.5' },
    { name: 'Aanirudh Mehra', company: 'ASBL', ctc: '7.5' },
    { name: 'Sneha Garg', company: 'ASBL', ctc: '7.5' },
    { name: 'Priyanshi', company: 'ASBL', ctc: '7.5' },
    { name: 'Dev Brat Tripathi', company: 'ASBL', ctc: '7.5' },
    { name: 'Prateek Kumar Srivastav', company: 'ASBL', ctc: '7.5' },
    { name: 'Shaurya Shiwach', company: 'ASBL', ctc: '7.5' },
    { name: 'Vishesh Pandey', company: 'ASBL', ctc: '7.5' },
    { name: 'Isha Vats', company: 'ASBL', ctc: '7.5' },
    { name: 'Yashdeep Singh Kushwaha', company: 'ASBL', ctc: '7.5' },
    { name: 'Divy Sharma', company: 'ASBL', ctc: '7.5' },
    { name: 'Kanishka Sharma', company: 'ASBL', ctc: '7.5' },
    { name: 'Kushagra Srivastava', company: 'ASBL', ctc: '7.5' },
    { name: 'Ashutosh Kumar Kushwaha', company: 'GROWW', ctc: '7.32' },
    { name: 'Saurabh Mishra', company: 'Argusoft India', ctc: '7.12' },
    { name: 'Navodita', company: 'Argusoft India', ctc: '7.12' },
    { name: 'Anushka Tyagi', company: 'Argusoft India', ctc: '7.12' },
    { name: 'Sunakshi Singh', company: 'Argusoft India', ctc: '7.12' },
    { name: 'Utkarsh Shukla', company: 'Argusoft India', ctc: '7.12' },
    { name: 'Samriddhi Narayan', company: 'Argusoft India', ctc: '7.12' },
    { name: 'Keshav Gupta', company: 'Argusoft India', ctc: '7.12' },
    { name: 'Divyanshu Pathak', company: 'CONTEVOLVE', ctc: '7' },
    { name: 'Tanya Agarwal', company: 'CONTEVOLVE', ctc: '7' },
    { name: 'Vanshika Singhal', company: 'WORKFORCE CLOUD TECH', ctc: '7' },
    { name: 'Shipra Tripathi', company: 'UKG', ctc: '7' },
    { name: 'Shreyas Agrawal', company: 'UKG', ctc: '7' },
    { name: 'Utkarsh Tripathi', company: 'Newgen Software', ctc: '7' },
    { name: 'Khushi Khurana', company: 'Newgen Software', ctc: '7' },
    { name: 'Ishita Srivastava', company: 'Newgen Software', ctc: '7' },
    { name: 'Aditya Arya', company: 'Newgen Software', ctc: '7' },
    { name: 'Arjun Agarwal', company: 'TCS', ctc: '7' },
    { name: 'Prasoon Pathak', company: 'TCS', ctc: '7' },
    { name: 'Shambhavi Mishra', company: 'Emerson Automation Solution', ctc: '6.8' },
    { name: 'Uditya Prakash', company: 'Cognizant', ctc: '6.75' },
    { name: 'Ayush Tripathi', company: 'Cognizant', ctc: '6.75' },
    { name: 'Aarke Tripathi', company: 'Cognizant', ctc: '6.75' },
    { name: 'Shivam Kumar', company: 'VIKRAM SOLAR', ctc: '6.68' },
    { name: 'Yashvi Agarwal', company: 'S.K. FROZEN FOODS', ctc: '6.5' },
    { name: 'Janhavi Dubey', company: 'CORIZO', ctc: '6.5' },
    { name: 'Arnav Srivastava', company: 'CORIZO', ctc: '6.5' },
    { name: 'Kanishka Sharma', company: 'CORIZO', ctc: '6.5' },
    { name: 'Dinesh Pandey', company: 'CORIZO', ctc: '6.5' },
    { name: 'Atul Kumar', company: 'CORIZO', ctc: '6.5' },
    { name: 'Tushar Gupta', company: 'CORIZO', ctc: '6.5' },
    { name: 'Utkarsh Pandit', company: 'CORIZO', ctc: '6.5' },
    { name: 'Dhiraj Singh', company: 'CORIZO', ctc: '6.5' },
    { name: 'Ayush Ojha', company: 'CORIZO', ctc: '6.5' },
    { name: 'Siddhartha Tyagi', company: 'CORIZO', ctc: '6.5' },
    { name: 'Megha Jain', company: 'CORIZO', ctc: '6.5' },
    { name: 'Anugya Tiwari', company: 'CORIZO', ctc: '6.5' },
    { name: 'Pranav Singhal', company: 'CORIZO', ctc: '6.5' },
    { name: 'Rupanshi Rohilla', company: 'CORIZO', ctc: '6.5' },
    { name: 'Shreya Chaudhary', company: 'CORIZO', ctc: '6.5' },
    { name: 'Aastha', company: 'CORIZO', ctc: '6.5' },
    { name: 'Nandini Mittal', company: 'CORIZO', ctc: '6.5' },
    { name: 'Akhil Gupta', company: 'CORIZO', ctc: '6.5' },
    { name: 'Saumya Sachan', company: 'CORIZO', ctc: '6.5' },
    { name: 'Yash Mishra', company: 'CORIZO', ctc: '6.5' },
    { name: 'Prince Yadav', company: 'CORIZO', ctc: '6.5' },
    { name: 'Neeti Singh', company: 'CORIZO', ctc: '6.5' },
    { name: 'Samaviah Waize', company: 'CORIZO', ctc: '6.5' },
    { name: 'Prajjwal Kumar', company: 'CORIZO', ctc: '6.5' },
    { name: 'Alokit Pathak', company: 'CORIZO', ctc: '6.5' },
    { name: 'Mansi Pandey', company: 'CORIZO', ctc: '6.5' },
    { name: 'Aman Goel', company: 'CORIZO', ctc: '6.5' },
    { name: 'Akshat Shukla', company: 'CORIZO', ctc: '6.5' },
    { name: 'Shagun Singh', company: 'CORIZO', ctc: '6.5' },
    { name: 'Vani Chaudhary', company: 'CORIZO', ctc: '6.5' },
    { name: 'Naina Singh', company: 'CORIZO', ctc: '6.5' },
    { name: 'Amrit Singh', company: 'CORIZO', ctc: '6.5' },
    { name: 'Bhavya Goel', company: 'CORIZO', ctc: '6.5' },
    { name: 'Mudit Agarwal', company: 'CORIZO', ctc: '6.5' },
    { name: 'Nitin Kumar Singh', company: 'CORIZO', ctc: '6.5' },
    { name: 'Mahendra Pandey', company: 'CORIZO', ctc: '6.5' },
    { name: 'Nikhil Saraswat', company: 'CORIZO', ctc: '6.5' },
    { name: 'Aditi Agarwal', company: 'CORIZO', ctc: '6.5' },
    { name: 'Khushi Sharma', company: 'CORIZO', ctc: '6.5' },
    { name: 'Saumya Upadhyay', company: 'CORIZO', ctc: '6.5' },
    { name: 'Aditi Mishra ', company: 'Corizo', ctc: '6.50' },
    { name: 'JAHANVI SINHA', company: 'Corizo', ctc: '6.50' },
    { name: 'Devansh Singhal', company: 'Corizo', ctc: '6.50' },
    { name: 'NITIN KUMAR MISHRA', company: 'Corizo', ctc: '6.50' },
    { name: 'Rishu Maddheshiya ', company: 'Corizo', ctc: '6.50' },
    { name: 'SHIVAM SHARMA ', company: 'Corizo', ctc: '6.50' },
    { name: 'Neha Rajpoot ', company: 'Corizo', ctc: '6.50' },
    { name: 'NIKKI KUMAR', company: 'Corizo', ctc: '6.50' },
    { name: 'Chandra Prakash ', company: 'Corizo', ctc: '6.50' },
    { name: 'sarthak chadha', company: 'Corizo', ctc: '6.50' },
    { name: 'Harsh Garg', company: 'Corizo', ctc: '6.50' },
    { name: 'MOHIT KUMAR', company: 'Corizo', ctc: '6.50' },
    { name: 'Pavitra Sharma', company: 'Corizo', ctc: '6.50' },
    { name: 'Aman Singh', company: 'Corizo', ctc: '6.50' },
    { name: 'Aditya Singh', company: 'Corizo', ctc: '6.50' },
    { name: 'Harsh Rana', company: 'Corizo', ctc: '6.50' },
    { name: 'JATIN SRIVASTAVA ', company: 'Corizo', ctc: '6.50' },
    { name: 'SHIVAM  YADAV', company: 'Corizo', ctc: '6.50' },
    { name: 'Harsh Vikram Srivastav', company: 'Corizo', ctc: '6.50' },
    { name: 'Siddharth Agarwal', company: 'Equihorizon Advisors', ctc: '6.3' },
    { name: 'Gunendra M. Chaturvedi', company: 'Infosys', ctc: '6.25' },
    { name: 'Ishika Tyagi', company: 'Infosys', ctc: '6.25' },
    { name: 'Amit Verma', company: 'Infosys', ctc: '6.25' },
    { name: 'Abhishek Mishra', company: 'Infosys', ctc: '6.25' },
    { name: 'Aarushi Bhardwaj', company: 'Infosys', ctc: '6.25' },
    { name: 'Vaishali Tiwari', company: 'Infosys', ctc: '6.25' },
    { name: 'Atul Kumar Singh', company: 'Infosys', ctc: '6.25' },
    { name: 'Siddharth Singh', company: 'Infosys', ctc: '6.25' },
    { name: 'Sandeep Yadav', company: 'SALESFORCE', ctc: '6' },
    { name: 'Sarish Hanif Mir', company: 'Nayepank Foundation', ctc: '6' },
    { name: 'Sarthak Srivastava', company: 'DOCSTRIBE', ctc: '6' },
    { name: 'Divyansh Srivastava', company: 'Digiketing Software Consulting', ctc: '6' },
    { name: 'Prashant Shukla', company: 'She Can Foundation', ctc: '6' },
    { name: 'Ashish Singh', company: 'Hypweb Solutions', ctc: '6' },
    { name: 'Praveen Kushwaha', company: 'Unthinkable', ctc: '6' },
    { name: 'Akshay', company: 'Unthinkable', ctc: '6' },
    { name: 'Harsh Gupta', company: 'Unthinkable', ctc: '6' },
    { name: 'Aditi Rai', company: 'Rockwell Automation', ctc: '6' },
    { name: 'Anvesha Pandey', company: 'Rockwell Automation', ctc: '6' },
    { name: 'Harshit Garg', company: 'MAQ Software', ctc: '6' },
    { name: 'Tushar', company: 'MAQ Software', ctc: '6' },
    { name: 'Rishabh Gupta', company: 'MAQ Software', ctc: '6' },
    { name: 'Umang Sharma', company: 'MAQ Software', ctc: '6' },
    { name: 'Daksh Pandey', company: 'MAQ Software', ctc: '6' },
    { name: 'Harshit Rai', company: 'MAQ Software', ctc: '6' },
    { name: 'Arpit Verma', company: 'MAQ Software', ctc: '6' },
    { name: 'Ayushi Yadav', company: 'MAQ Software', ctc: '6' },
    { name: 'Shubham Kumar', company: 'MAQ Software', ctc: '6' },
    { name: 'Shivanshu Singh', company: 'Rockwell Automation', ctc: '6' },
    { name: 'Avanish Shukla', company: 'District - D', ctc: '6' },
    { name: 'Pratyush Sharma', company: 'District - D', ctc: '6' },
    { name: 'Tanu Sharma', company: 'District - D', ctc: '6' },
    { name: 'Upendra Yadav', company: 'District - D', ctc: '6' },
    { name: 'Raghav Kumar Bhaskar', company: 'District - D', ctc: '6' },
    { name: 'Aditya Kumar Singh', company: 'Arrise Solution', ctc: '6' },
    { name: 'Satyam Gupta', company: 'Arrise Solution', ctc: '6' },
    { name: 'Arpit Tyagi', company: 'Arrise Solution', ctc: '6' },
    { name: 'Harsh Jain', company: 'Arrise Solution', ctc: '6' },
    { name: 'Adarsh Shukla', company: 'Arrise Solution', ctc: '6' },
    { name: 'Kartik', company: 'Arrise Solution', ctc: '6' },
    { name: 'Divanshu Rawat', company: 'Arrise Solution', ctc: '6' },
    { name: 'Sarthak Kumar Singh', company: 'Interra Systems', ctc: '6' },
    { name: 'Ishita Gupta', company: 'Think 41', ctc: '6' },
    { name: 'Kuldeep Singh', company: 'CloudKeeper ', ctc: '6' },
    { name: 'Sanika Goyal', company: 'Eka Care', ctc: '6' }
];

const TopPlacement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = studentData.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.ctc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const indexOfFirstEntry = startIndex;
    const indexOfLastEntry = startIndex + paginatedData.length - 1;

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleSelectChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <section>
            <div className="mb-8">
                <h2 className="text-4xl max-lg:text-3xl max-sm:text-2xl  font-novaReg mb-4">AKG University - Student Success in Placements</h2>
                <p className="text-gray-700 max-sm:text-sm font-novaReg mb-2 text-justify">
                    AKG University takes pride in shaping the future of its students by offering top-notch academic programs and world-class placement opportunities. Below is a glimpse of our recent graduates who have secured placements in prestigious companies.
                </p>
                <p className="text-gray-700 max-sm:text-sm font-novaReg text-justify">
                    Explore the student placement details across various companies and CTC packages, showcasing the diverse talents nurtured at our institution.
                </p>
            </div>
            <div className="flex justify-start">
                <div className="text-sm mb-2 mr-5">
                    <label className="text-gray-700">
                        Show
                        <select
                            name="example_length"
                            aria-controls="example"
                            className="ml-2 mr-2 border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={itemsPerPage}
                            onChange={handleSelectChange}
                        >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                        entries
                    </label>
                </div>

                <div className="text-sm mb-2 mr-5">
                    <label className="text-gray-700">
                        Search:
                        <input
                            type="search"
                            className="ml-2 border-2 border-primary rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-controls="example"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-secondary max-md:text-sm max-sm:text-xs uppercase border-inherit">
                            <th className="px-4 max-sm:px-3 py-2 text-left rounded-tl-lg">Student Name</th>
                            <th className="px-4 max-sm:px-3 py-2 text-left">Name of Company</th>
                            <th className="px-4 max-sm:px-3 py-2 text-left rounded-tr-lg">CTC (LPA)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((student, index) => {
                            const isLastRow = index === paginatedData.length - 1;
                            return (
                                <tr key={index} className="bg-indigo-950 text-gray-200 text-sm max-sm:text-xs border-inherit">
                                    <td className={`px-4 max-sm:px-3 py-2 ${isLastRow ? 'rounded-bl-lg' : 'border-b border-gray-300'}`}>
                                        {student.name}
                                    </td>
                                    <td className={`border-l px-4 max-sm:px-3 py-2 ${isLastRow ? '' : 'border-b border-gray-300'}`}>
                                        {student.company}
                                    </td>
                                    <td className={`border-l px-4 max-sm:px-3 py-2 ${isLastRow ? 'rounded-br-lg' : 'border-b border-gray-300'}`}>
                                        {student.ctc}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-between max-sm:flex-col max-sm:gap-2">
                <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry + 1, filteredData.length)} of {filteredData.length} entries
                </div>
                <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                    <button
                        className={`max-[400px]:hidden text-white px-4 py-2.5 rounded ${currentPage === 1 ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <button
                            key={pageIndex + 1}
                            className={`text-white px-4 py-2.5 rounded ${currentPage === pageIndex + 1 ? 'bg-primary' : ''}`}
                            onClick={() => handlePageChange(pageIndex + 1)}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                    <button
                        className={`max-[400px]:hidden text-white px-3 py-2 rounded ${currentPage === totalPages ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopPlacement;
