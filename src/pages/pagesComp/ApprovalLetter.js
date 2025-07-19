const approvalLetter = [
    { id: 1, year: "Year 2024-25", link: "/pdf/approval-letter/Year-2024-25.pdf" },
    { id: 2, year: "Year 2023-24", link: "/pdf/approval-letter/Year-2023-24.pdf" },
    { id: 3, year: "Year 2022-23", link: "/pdf/approval-letter/Year-2022-23.pdf" },
    { id: 4, year: "Year 2021-22", link: "/pdf/approval-letter/Year-2021-22.pdf" },
    { id: 5, year: "Year 2020-21", link: "/pdf/approval-letter/Year-2020-21.pdf" },
    { id: 6, year: "Year 2019-20", link: "" },
    { id: 7, year: "Year 2018-19", link: "" },
    { id: 8, year: "Year 2017-18", link: "" },
    { id: 9, year: "Year 2016-17", link: "" },
    { id: 10, year: "Year 2015-16", link: "/pdf/approval-letter/Year-2015-16.pdf" },
    { id: 11, year: "Year 2014-15", link: "/pdf/approval-letter/Year-2014-15.pdf" },
    { id: 12, year: "Year 2013-14", link: "/pdf/approval-letter/Year-2013-14.pdf" },
    { id: 13, year: "Year 2012-13", link: "/pdf/approval-letter/Year-2012-13.pdf" },
    { id: 14, year: "Year 2011-12", link: "/pdf/approval-letter/Year-2011-12.pdf" },
    { id: 15, year: "Year 2010-11", link: "/pdf/approval-letter/Year-2010-11.pdf" },
    { id: 16, year: "Year 2009-10", link: "/pdf/approval-letter/Year-2009-10.pdf" },
    { id: 17, year: "Year 2008-09", link: "/pdf/approval-letter/Year-2008-09.pdf" },
    { id: 18, year: "Year 2007-08", link: "/pdf/approval-letter/Year-2007-08.pdf" },
    { id: 19, year: "Year 2006-07", link: "/pdf/approval-letter/Year-2006-07.pdf" },
    { id: 20, year: "Year 2005-06", link: "/pdf/approval-letter/Year-2005-06.pdf" },
    { id: 21, year: "Year 2003-06", link: "/pdf/approval-letter/Year-2003-06.pdf" },
    { id: 22, year: "Year 2002-03", link: "/pdf/approval-letter/Year-2002-03.pdf" },
    { id: 23, year: "Year 2001-03", link: "/pdf/approval-letter/Year-2001-03.pdf" },
    { id: 24, year: "Year 2000-01", link: "/pdf/approval-letter/Year-2000-01.pdf" },
    { id: 25, year: "Year 1999-00", link: "/pdf/approval-letter/Year-1999-00.pdf" },
    { id: 26, year: "Year 1998-99", link: "/pdf/approval-letter/Year-1998-99.pdf" },
];

export default function ApprovalLetter() {
    return (
        <div className="flex items-center justify-center ">
            <div className=" w-full">
                <table className="w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead className="text-white bg-indigo-900">
                        <tr>
                            <th className="py-2 px-4 border-b-4">S.No.</th>
                            <th className="py-2 px-4 border-b-4 border-l">Years</th>
                            <th className="py-2 px-4 border-b-4 border-l">Links</th>
                        </tr>
                    </thead>
                    <tbody className="text-white bg-blue-950 text-sm font-light">
                        {approvalLetter?.map((item) => (
                            <tr key={item.id}>
                                <td className="py-2 w-14 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">
                                    {item.id}
                                </td>
                                <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">
                                    {item.year}
                                </td>
                                <td className="py-2 px-4 border-b border-r border-gray-300 border-opacity-50 text-center">
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-600 transition ease-in-out duration-300"
                                        >
                                            View PDF
                                        </a>
                                    ) : (
                                        "N/A"
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
