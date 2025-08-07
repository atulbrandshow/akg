"use client";
import { coursesData } from "@/Json/ProgramsData";
import Table from "@/Components/Table";

const CourseFee = () => {
 
    const tableHeadings = ["Name of Program", "Duration", "Fee Per Annum"];
    const heading = "AKG University Course Fee, Admission, Cutoff, Ranking";
    const paragraph = "Ajay Kumar Garg University (AKGU) provides quality education with a strong focus on affordability and value for money. AKGU offers industry-aligned programs in Engineering, MBA, MCA, and various other disciplines, ensuring students receive the best Return on Investment (ROI). With competitive fees, AKGU stands out as a premier choice for students seeking a cost-effective, high-quality education in the region.";

    return (
        <Table heading={heading} paragraph={paragraph} tableHeadings={tableHeadings} data={coursesData} />
    );
};

export default CourseFee;