const marks = [
    {
        "name": "Theory",
        "internal": 40,
        "external": 60,
        "total": 100
    },
    {
        "name": "Practical",
        "internal": 40,
        "external": 60,
        "total": 100
    }
]

const grades = [
    {
        "grade": "A+",
        "description": "Outstanding",
        "points": 10
    },
    {
        "grade": "A",
        "description": "Excellent",
        "points": 9
    },
    {
        "grade": "B⁺",
        "description": "Very Good",
        "points": 8
    },
    {
        "grade": "B",
        "description": "Good",
        "points": 7
    },
    {
        "grade": "C⁺",
        "description": "Average",
        "points": 6
    },
    {
        "grade": "C",
        "description": "Below Average",
        "points": 5
    },
    {
        "grade": "D",
        "description": "Marginal",
        "points": 4
    },
    {
        "grade": "E",
        "description": "Exposed",
        "points": 0
    },
    {
        "grade": "F",
        "description": "Fail/Poor",
        "points": 0
    },
    {
        "grade": "I",
        "description": "Incomplete",
        "points": 0
    }
]


const SystemOfEvaluation = () => {
    return (
        <>
            <div className="pb-12">
                <h2 className="text-4xl max-md:text-3xl leading-none font-novaReg mb-2.5">Evaluation System <br /> at AKG University</h2>
                <p className="mb-5 mt-2.5 font-novaReg text-lg max-sm:text-base">The examination system at AKG University has been crafted to incorporate the best practices for evaluation and certification, ensuring global recognition. Its fundamental principle is rooted in being “scientific, objective, and transparent,” minimizing any potential bias from individual evaluators, specific subjects, or particular groups of students.</p>
                <p className="mb-5 mt-2.5 font-novaReg text-lg max-sm:text-base">The examination system is categorized as follows:</p>
                <p className="mb-5 mt-2.5 font-novaReg text-lg max-sm:text-base">1. Internal Assessment:
                    This includes the first hourly test, second hourly test, surprise tests, quizzes, tutorials, and assignments.</p>
                <p className="mb-5 mt-2.5 font-novaReg text-lg max-sm:text-base">2. External Assessment:
                    A final examination is conducted at the end of the semester to assess a student’s overall performance.</p>
                <div>
                    <table className="min-w-full my-4 bg-white rounded-lg">
                        <thead className="bg-[#363c83] text-white h-[44px] rounded-t-lg">
                            <tr className="border-b">
                                <th className="px-4 max-[350px]:px-2 py-2 text-left border-r border-white border-opacity-10 text-base max-md:text-sm max-[400px]:text-xs rounded-tl-lg">Criteria</th>
                                <th className="px-4 max-[350px]:px-2 py-2 border-r border-white border-opacity-10 text-left text-base max-md:text-sm max-[400px]:text-xs">Internal Marks</th>
                                <th className="px-4 max-[350px]:px-2 py-2 border-r border-white border-opacity-10 text-left text-base max-md:text-sm max-[400px]:text-xs">External Marks</th>
                                <th className="px-4 max-[350px]:px-2 py-2 border-r border-white border-opacity-10 text-left text-base max-md:text-sm max-[400px]:text-xs rounded-tr-lg">Total Marks</th>
                            </tr>
                        </thead>
                        <tbody className="border-t-2 rounded-lg">
                            {marks.map((entry, index) => (
                                <tr
                                    key={index}
                                    className={`bg-indigo-950 text-white ${index === marks.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                >
                                    <td className={`py-4 max-[350px]:px-2 px-4 text-sm max-sm:text-xs border-b border-white border-opacity-20 ${index === marks.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                        {entry.name}
                                    </td>
                                    <td className="py-4 max-[350px]:px-2 px-4 text-sm max-sm:text-xs border-b border-l border-white border-opacity-20">
                                        {entry.internal}
                                    </td>
                                    <td className="py-4 max-[350px]:px-2 px-4 text-sm max-sm:text-xs border-b border-l border-white border-opacity-20">
                                        {entry.external}
                                    </td>
                                    <td className={`py-4 max-[350px]:px-2 px-4 text-sm max-sm:text-xs border-b border-l border-white border-opacity-20 ${index === marks.length - 1 ? 'rounded-br-lg' : ''}`}>
                                        {entry.total}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h3 className="font-novaReg text-2xl">Salient Features</h3>
                <p className="text-lg max-sm:text-base font-novaReg mt-2.5 mb-5">The examination system at AKG University incorporates the following key features:</p>
                <ul className="list-disc mb-6 pl-4">
                    <li className="mb-2 text-sm">Automated Paper Setting:
                        Final exam papers are generated using automated software from a dedicated question bank created specifically for this purpose.</li>
                    <li className="mb-2 text-sm">Uniform Evaluation:
                        Final semester examinations are evaluated through Table Marking at the University, with question-wise assessments to ensure consistency.</li>
                    <li className="mb-2 text-sm">External Review:
                        To maintain fairness and equity, 10% of answer scripts will be randomly evaluated by external experts.</li>
                    <li className="mb-2 text-sm">Student Access to Evaluated Papers:
                        Evaluated answer books will be made available to students for review. Students must sign these papers to acknowledge their agreement with the evaluation.</li>
                    <li className="mb-2 text-sm">Review Process:
                        If a student disputes the evaluation, they can request a review by the Evaluation Review Board for a prescribed fee. Individual teachers cannot change marks.</li>
                    <li className="mb-2 text-sm">Finality of Decisions:
                        The decisions made by the Evaluation Review Board are final and binding.</li>
                    <li className="mb-2 text-sm">Refund Policy:
                        If the Evaluation Review Board recommends a mark increase exceeding 10% of the maximum for the subject, the review fee will be refunded to the student.</li>
                    <li className="mb-2 text-sm">Transparency in Internal Evaluation:
                        The final internal evaluations will be displayed by departments/institutes prior to submission to the University.</li>
                    <li className="mb-2 text-sm">Grade Conversion:
                        The total marks from both internal and external examinations will be submitted to the Controller of Examination Office for conversion into grades using a relative grading system.</li>
                    <li className="mb-2 text-sm">Objective Grading:
                        Grades will be assigned based on Normal Distribution, ensuring an absence of subjectivity.</li>
                    <li className="mb-2 text-sm">Grade Criteria:<br />
                        Students scoring below 35% of the highest marks in the class will receive an ‘F’ grade.<br />

                        Students achieving over 50% of the highest marks will not receive an ‘F’ grade.<br />
                        Students with scores between 35% and 50% of the highest marks may receive an ‘F’ grade based on the subject's mean and variance.</li>
                    <li className="mb-2 text-sm">Grade Reporting:
                        Final semester grades, along with the Semester Grade Point Average (SGPA), will be published at the time of results declaration.</li>
                    {/* <li className="mb-2 text-sm">A student getting marks between 35% to 50% of the highest marks scored in the class may be awarded “F” grade depending upon the mean and variance for the subject.</li>
                    <li className="mb-2 text-sm">The final grades of the semester will be displayed along with SGPA (Semester Grade Point Average) at the time of declaration of results.</li> */}
                </ul>
                <h3 className="text-2xl font-novaReg w-full">Prevention of Unfair Means</h3>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">Credit and Grade Point System</h3>
                <p className="text-lg max-sm:text-base font-novaReg mt-2.5 mb-5">The examination system at AKG University emphasizes integrity and fairness. Any student found using unfair means—such as communicating with others, seeking outside assistance, bringing written materials, or using a mobile phone in the examination hall—will face penalties ranging from cancellation of one exam paper to disqualification from all examinations for up to two years. To address these issues, a special committee for the Prevention of Unfair Means (CPUM) has been established.</p>
                <ul className="pl-4 mb-6 list-decimal text-sm font-novaReg">
                    <li>At the end of each semester, students will receive a letter grade for each registered course based on their overall performance, which includes mid-semester exams, both announced and surprise tests, laboratory evaluations, tutorial assignments, seminars, home assignments, and the end-semester examination.</li>
                    <li>Letter grades will be assigned as follows, with each grade representing the level of performance in the course and corresponding grade points used for calculating the Semester Grade Point Average (SGPA), Aggregate Grade Point Average (AGPA), and Cumulative Grade Point Average (CGPA).
                        <br />
                        <div className="mb-4 mt-2">
                            <table className="min-w-full my-4 bg-white rounded-lg">
                                <thead className="bg-[#363c83] text-white h-[44px] rounded-t-lg">
                                    <tr className="border-b">
                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 text-base max-sm:text-sm rounded-tl-lg">Grade</th>
                                        <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base max-sm:text-sm">Description</th>
                                        <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base max-sm:text-sm rounded-tr-lg">Points</th>
                                    </tr>
                                </thead>
                                <tbody className="border-t-2 rounded-lg">
                                    {grades.map((entry, index) => (
                                        <tr
                                            key={index}
                                            className={`bg-indigo-950 text-white ${index === grades.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                        >
                                            <td className={`py-4 px-4 text-sm border-b border-white border-opacity-20 ${index === grades.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                {entry.grade}
                                            </td>
                                            <td className="py-4 px-4 text-sm border-b border-l border-white border-opacity-20">
                                                {entry.description}
                                            </td>
                                            <td className={`py-4 px-4 text-sm border-b border-l border-white border-opacity-20 ${index === grades.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                {entry.points}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li>E Grade: This grade is given to students who have attended at least 75% of the scheduled lectures for a subject but are unable to sit for the End Semester Exam. Such students must take the final exam during the relevant semester when it is next offered, paying only the examination fee. Alternatively, they may opt to receive their grade based on the marks earned in various internal evaluations.</li>
                    <li>F Grade: This grade is assigned to students who have attended 75% of the scheduled lectures but have performed poorly in the subject. These students are required to retake the examination in the relevant semester by paying the examination fee.</li>
                    <li>I Grade: - This grade is awarded to the student who is unable to attain the attendance requirements of 75% of the scheduled lectures of the respective subject. In this case student has to register again for the course when it is offered in the relevant semester by paying the requisite paper wise fee.</li>
                    <li>In exceptional cases, if four or more students choose a specific paper, it may be offered during the Summer Semester. Students can register for a maximum of two theory papers and one practical paper during the summer session.</li>
                </ul>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">
                    Cumulative Grade Point Average (CGPA)</h3>
                <p className="text-lg max-sm:text-base font-novaReg mt-2.5 mb-5">The Cumulative Grade Point Average (CGPA) reflects the weighted average of all grades a student has received since starting at the university, including the most recent semester. To calculate it, each course's grade points are multiplied by its corresponding credits. Then, the total of these weighted grade points is divided by the total number of credits attempted. This process gives a comprehensive measure of a student's academic performance over time.</p>
                <hr className="my-4" />
                <h3 className="text-2xl font-novaReg w-full">
                    Promotion to the Next Year and Conditions for Year Back</h3>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Undergraduate Courses</h3>
                <p className="text-lg max-sm:text-base font-novaReg mt-2.5 mb-5">A student must meet the following criteria to continue in the program:<br />
                    End of First Year: The student must secure a CGPA of 3.5 or higher, or earn at least 40% of the credits offered during the first year.<br />
                    End of Second Year: The student must achieve a CGPA of 4.50 or higher, or earn at least 40% of the credits offered during both the first and second years.
                    Lateral entry students are considered as second-year students.<br />
                    Students who do not meet the minimum CGPA requirement will lose one academic year.</p>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Post-Graduate Courses</h3>
                <p className="text-lg max-sm:text-base font-novaReg mt-2.5 mb-5">For post-graduate students, the following criteria apply:<br />
                    End of First Year: The minimum required CGPA is 4.50, or the student must earn at least 40% of the credits offered during the first year.<br />
                    Failure to meet this requirement will result in the loss of one academic year.<br /></p>
                <h3 className="text-2xl font-novaReg w-full">
                    Requirements for Award of Degree</h3>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Undergraduate Courses</h3>
                <p className="text-lg max-sm:text-base font-novaReg mt-2.5 mb-5">To be eligible for the award of an undergraduate degree, a student must have earned a CGPA of 4.50 or higher.</p>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Post-graduate Courses</h3>
                <p className="text-lg max-sm:text-base font-novaReg mt-2.5 mb-5">The minimum CGPA required for the award of all post-graduate degrees is 5.0.</p>
            </div>
        </>
    );
}

export default SystemOfEvaluation;