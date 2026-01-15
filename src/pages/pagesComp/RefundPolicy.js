import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-5xl w-full p-6 bg-white rounded-md max-sm:p-3">
      <h2 className="mb-4 text-4xl font-novaReg max-sm:text-2xl">
        Refund Policy (UGC 2024–25)
      </h2>

      <p className="text-base text-gray-700 mb-4 max-sm:text-sm">
        The refund of fees shall be governed by the University Grants Commission
        (UGC) Fee Refund Policy for the Academic Session 2024–25 and shall remain
        applicable for subsequent sessions until revised by UGC.
      </p>

      <p className="text-base text-gray-700 mb-6 max-sm:text-sm">
        All Higher Educational Institutions are required to strictly comply with
        the UGC guidelines regarding refund of fees on cancellation or withdrawal
        of admission.
      </p>

      {/* Refund Table */}
      <div className="max-sm:overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-indigo-950 text-white font-novaReg">
            <tr className="text-base max-sm:text-sm">
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">
                Point of Time When Notice of Withdrawal is Received
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Percentage of Refund
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-base max-sm:text-sm">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">
                15 days or more before the formally notified last date of admission
              </td>
              <td className="border border-gray-300 px-4 py-2">100%</td>
            </tr>

            <tr className="text-base max-sm:text-sm">
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">
                Less than 15 days before the formally notified last date of admission
              </td>
              <td className="border border-gray-300 px-4 py-2">90%</td>
            </tr>

            <tr className="text-base max-sm:text-sm">
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">
                15 days or less after the formally notified last date of admission
              </td>
              <td className="border border-gray-300 px-4 py-2">80%</td>
            </tr>

            <tr className="text-base max-sm:text-sm">
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">
                30 days or less but more than 15 days after the last date of admission
              </td>
              <td className="border border-gray-300 px-4 py-2">50%</td>
            </tr>

            <tr className="text-base max-sm:text-sm">
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">
                More than 30 days after the formally notified last date of admission
              </td>
              <td className="border border-gray-300 px-4 py-2">0%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes */}
      <div className="mt-6 text-gray-700 text-base max-sm:text-sm space-y-2">
        <p>
          • A processing fee of not more than <strong>₹1000/-</strong> may be
          deducted where applicable, as per UGC norms.
        </p>
        <p>
          • <strong>Caution money and security deposit</strong>, if not part of
          the fee, shall be refunded in full.
        </p>
        <p>
          • The refund shall be made within <strong>15 days</strong> from the
          date of receipt of a written request from the student.
        </p>
        <p>
          • No institution shall retain original academic or personal
          certificates of the student under any circumstances.
        </p>
        <p>
          • Any violation of the UGC Fee Refund Policy shall invite punitive
          action as per UGC regulations.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
