import React from "react";

const RefundPolicy = () => {
  return (

<div className="max-w-4xl w-full p-6 bg-white rounded-md max-sm:p-3">
      <h2 className="mb-2 text-4xl font-novaReg max-sm:text-2xl">Refund Policy</h2>
      <p className="text-base mb-6 text-gray-700 max-sm:text-sm max-sm:mb-2">In case of cancellation of admission, the fee will be refunded as per the AICTE notification and G.O. passed by the U.P. Government.</p>

      <div className="max-sm:overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-indigo-950 text-white font-novaReg">
            <tr className="text-base px-4 py-2 max-sm:text-sm">
              <th className="border border-gray-300">S.No</th>
              <th className="border border-gray-300">Request for Refund</th>
              <th className="border border-gray-300">Refund</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-base max-sm:text-sm">
              <td className="border border-gray-300 px-4 py-2">a.</td>
              <td className="border border-gray-300 px-4 py-2">Request received before start of session</td>
              <td className="border border-gray-300 px-4 py-2">Entire fee after deduction of Rs. 1000/-</td>
            </tr>
            <tr className="text-base max-sm:text-sm">
              <td className="border border-gray-300 px-4 py-2">b.</td>
              <td className="border border-gray-300 px-4 py-2">Request received after start of session and seat not being filled by the university till the last date of admissions</td>
              <td className="border border-gray-300 px-4 py-2">Caution money only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-base mt-6 text-gray-700 max-sm:text-sm max-sm:mt-4">In case of withdrawal from hostel, only security and mess charges (for unutilized months) are refundable on a pro-rata basis.</p>
    </div>
  );
};

export default RefundPolicy;
