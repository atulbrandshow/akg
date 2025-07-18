import Link from "next/link";
import React from "react";

const JournalTable = ({ journalData, cseData }) => {
    const renderData = (data) => {
        return Array.isArray(data)
            ? data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                    <td className="border border-gray-300 px-4 py-2">
                        {item.url ? (
                            <Link href={item.url} target="_blank" className="text-blue-600">
                                {item.title}
                            </Link>
                        ) : (
                            <span className="text-black">{item.title}</span>
                        )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.author}</td>
                    {cseData && <td className="border border-gray-300 px-4 py-2">{item.pages}</td>}
                </tr>
            ))
            : null;
    };

    return (
        <div className="table-container">
            {journalData?.data?.length > 0 && cseData && (
                <h2 className="font-novaSemi text-lg text-center">AKGEC International Journal of Technology</h2>
            )}
            <p className="font-novaReg text-gray-600 text-center text-lg">{journalData?.heading}</p>
            <table className="mt-3 border-collapse border border-gray-300 w-full text-left">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">S No.</th>
                        <th className="border border-gray-300 px-4 py-2">Content</th>
                        <th className="border border-gray-300 px-4 py-2">Author</th>
                        {cseData && <th className="border border-gray-300 px-4 py-2">Pages</th>}
                    </tr>
                </thead>
                <tbody>
                    {renderData(journalData?.data)}
                    {cseData && renderData(cseData)}
                </tbody>
            </table>
        </div>
    );
};

export default JournalTable;
