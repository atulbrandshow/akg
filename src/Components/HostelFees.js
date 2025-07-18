import React from 'react'

const HostelFees = () => {
    const hostelCharges = {
        boys: {
            singleSeater: { rentAndMessCharges: 135000, securityRefundable: 10000, total: 145000 },
            doubleSeater: { rentAndMessCharges: 125000, securityRefundable: 10000, total: 135000 },
            tripleSeater: { rentAndMessCharges: 115000, securityRefundable: 10000, total: 125000 }
        },
        girls: {
            doubleSeater: { rentAndMessCharges: 125000, securityRefundable: 10000, total: 135000 },
            tripleSeater: { rentAndMessCharges: 115000, securityRefundable: 10000, total: 125000 }
        }
    };

    const categories = [
        { label: 'Rent & Mess Charges', key: 'rentAndMessCharges' },
        { label: 'Security (Refundable)', key: 'securityRefundable' },
        { label: 'Total', key: 'total' }
    ];

    const seatTypes = [
        { label: 'Double Seater', key: 'doubleSeater', gender: 'boys' },
        { label: <>Triple Seater <br /> (If Available)</>, key: 'tripleSeater', gender: 'boys' },
        { label: 'Triple Seater', key: 'tripleSeater', gender: 'girls' }
    ];

    return (
        <div className="px-5 pb-4">
            <h2 className="font-novaBold mt-4 text-xl">Hostel Fee for the students to be admitted during the session 2024-25</h2>
            <table className="min-w-full my-4 bg-white rounded-lg">
                <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                    <tr className='border-b'>
                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg"></th>
                        <th colSpan={2} className="border border-gray-300 px-4 py-2">For Boys</th>
                        <th colSpan={2} className="px-4 py-2 border-r border-white border-opacity-10 rounded-tr-lg">For Girls</th>
                    </tr>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2"></th>
                        {seatTypes.map((seatType, index) => (
                            <th key={index} className="border border-gray-300 px-4 py-2">
                                {seatType.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='border-t-2 rounded-lg text-xs text-center lg:text-sm font-novaSemi'>
                    {categories.map((category, index) => (
                        <tr key={index} className={`bg-indigo-950 text-white ${index === categories.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}>
                            <td className={`p-4 max-sm:p-3 text-left border-b border-r border-white border-opacity-20 ${index === categories.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                {category.label}
                            </td>
                            <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">
                                {hostelCharges.boys.doubleSeater[category.key]}
                            </td>
                            <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">
                                {hostelCharges.boys.tripleSeater[category.key]}
                            </td>
                            <td className="p-4 max-sm:p-3 border-b border-r border-white border-opacity-20">
                                {hostelCharges.girls.tripleSeater[category.key]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <strong>Note:</strong>
            <ul className="list-disc list-inside mb-3">
                <li className='mb-2'>The fee structure is subject to change by the State Govt. / Fee Fixation Committee.</li>
                <li className='mb-2'>Medical charges include Medical Insurance on hospitalization up to Rs.50,000/-, Accidental Insurance up to Rs.1,00,000/- and free OPD & annual medical checkup at Dr. R.S.G. (Indo-German) Hospital.</li>
            </ul>

            <strong>Mode of Payment:</strong>
            <p className="mt-2 mb-2">1. By DD/PO in favour of “Ajay Kumar Garg University" payable at Ghaziabad or Delhi. Write your name and mobile number on the reverse of the draft. It may be submitted by post or in person.</p>
            <strong>OR</strong>
            <p className="mt-2 mb-2">2. Online transfer through NEFT/RTGS. Bank Account details of College for online payment are as under:</p>
            <ul className='list-inside pl-5 mb-3'>
                <li className='mb-2'>Name of the Beneficiary: Ajay Kumar Garg University</li>
                <li className='mb-2'>Name of the Bank: Kotak Mahindra Bank Ltd., Navyug Market, Ghaziabad -201001 (U.P.)-INDIA</li>
                <li className='mb-2'>Bank Account No.: 508010250461 (Saving Bank Account)</li>
                <li className='mb-2'>RTGS/NEFT/IFSC Code: KKBK0005295</li>
            </ul>
            <p><strong>Note:</strong> This Fee Structure is a demand letter from the college and valid for Bank Loan.</p>
        </div>
    )
}

export default HostelFees