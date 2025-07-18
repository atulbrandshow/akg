import Link from 'next/link';
import React from 'react';

const documents = [
    { title: "Mandatory Disclosure 2024-25", link: "/pdf/mandatory-disclosure/AKGU-Mandatory-Disclosure-_2024-25.pdf" },
    { title: "Income and Expenditure account", link: "/pdf/mandatory-disclosure/Income_Expenditure.xls" },
    { title: "Balance Sheet", link: "/pdf/mandatory-disclosure/BALANCE_SHEET.xls" },
    { title: "Disability Resource Center", link: "/disability-resource-center" },
    { title: "NBA, NAAC Accreditation Status", link: "/nbanaa-accreditation-status" },
];

const MandatoryDisclosure = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto">
                    <h1 className="text-4xl font-novaReg mb-2.5 leading-none">Mandatory Disclosure</h1>
                    <div className="mb-6">
                        <table className="min-w-full my-4 bg-white rounded-lg">
                            <thead className="bg-indigo-950 text-white h-[44px] rounded-t-lg font-novaBold uppercase text-xs lg:text-sm">
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">S.No.</th>
                                    <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">Title</th>
                                    <th className="px-4 py-2 text-left rounded-tr-lg">View PDF</th>
                                </tr>
                            </thead>
                            <tbody className="border-t-2 rounded-lg font-novaSemi text-xs sm:text-sm sm:font-novaReg">
                                {documents.map((document, index) => (
                                    <tr key={index} className={`bg-indigo-950 text-white`}>
                                        <td className="py-4 px-4 border-b border-white border-opacity-20">{index + 1}</td>
                                        <td className="py-4 px-4 border-b border-l border-white border-opacity-20">{document.title}</td>
                                        <td className="py-4 text-center px-4 border-b border-l border-white border-opacity-20">
                                            <Link href={document.link} className="text-[#00BFE7]">
                                                Click to view
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MandatoryDisclosure;
