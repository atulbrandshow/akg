import React from "react";

const Migration = () => {
  return (
    <div className="py-4">
      {/* Title */}
      <h1 className="text-[42px] leading-none max-w-3xl font-novaReg mb-6 max-sm:text-2xl max-sm:mb-3">
        AKG University Migration Policy
      </h1>

      {/* Section 1 */}
      <h2 className="text-xl font-novaBold mb-3 max-sm:text-lg">
        1. Inter-University Migration
      </h2>

      <ul className="list-disc ml-6 space-y-2 max-sm:ml-4 max-sm:pl-2">
        <li className="text-base max-sm:text-sm">
          The following conditions shall be applicable to cases of migration of
          students from other Universities/Institutes.
        </li>

        <li className="text-base max-sm:text-sm">
          Migration of students from other recognized
          Universities/Institutions to AKG University in undergraduate /
          postgraduate programs shall be allowed up to <strong>30 days prior</strong>{" "}
          to the date of commencement of the semester. Such migration shall be
          regulated as under:
        </li>
      </ul>

      {/* Sub-points */}
      <ul className="list-decimal ml-10 space-y-2 mt-3 max-sm:ml-6">
        <li className="text-base max-sm:text-sm">
          The candidate must have passed all the courses of the previous semester
          of the University from where he/she is migrating.
        </li>

        <li className="text-base max-sm:text-sm">
          The courses studied by the candidate must be mapped with the courses
          offered by AKG University. The student has to pass all those courses
          which are not mapped, whenever they are offered by the University.
        </li>

        <li className="text-base max-sm:text-sm">
          The candidate shall furnish an undertaking that he/she will attend
          classes and pass the courses which are not equivalent to the courses of
          AKG University.
        </li>

        <li className="text-base max-sm:text-sm">
          The candidate shall produce a <strong>No Objection Certificate (NOC)</strong>{" "}
          from the Institute/University where he/she is presently studying.
        </li>

        <li className="text-base max-sm:text-sm">
          Such migration shall be subject to the availability of seats in the
          program/branch in which migration is sought.
        </li>

        <li className="text-base max-sm:text-sm">
          Migration shall be governed by the rules and regulations of AKG
          University.
        </li>

        <li className="text-base max-sm:text-sm">
          In addition to the above, for admission in UG/PG programs, credit
          transfer shall be allowed up to a maximum of <strong>50%</strong> of the
          total credits of the program.
        </li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-novaBold mt-6 mb-3 max-sm:text-lg">
        2. Procedure for Inter-University Migration
      </h2>

      <ul className="list-disc ml-6 space-y-2 max-sm:ml-4 max-sm:pl-2">
        <li className="text-base max-sm:text-sm">
          A candidate seeking migration shall obtain a No Objection Certificate
          (NOC) in the prescribed format from the University/Institute where the
          student is studying and from AKG University where migration is sought.
        </li>

        <li className="text-base max-sm:text-sm">
          The candidate shall submit an application duly signed by him/her along
          with the NOC issued by the University/Institute last studied.
        </li>

        <li className="text-base max-sm:text-sm">
          AKG University shall authorize migration only if a vacant seat is
          available in the program/branch in which migration is sought.
        </li>

        <li className="text-base max-sm:text-sm">
          Such migration shall be governed by the rules and regulations of AKG
          University.
        </li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-novaBold mt-6 mb-3 max-sm:text-lg">
        3. Documents Required
      </h2>

      <ul className="list-disc ml-6 space-y-2 max-sm:ml-4 max-sm:pl-2">
        <li className="text-base max-sm:text-sm">
          Grade cards of first and second semesters issued by the Controller of
          Examinations Office.
        </li>

        <li className="text-base max-sm:text-sm">
          Requisite Migration Form duly signed along with the No Objection
          Certificate (NOC) for migration.
        </li>
      </ul>
    </div>
  );
};

export default Migration;
