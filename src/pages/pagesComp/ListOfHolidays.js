const ListOfHolidays = ({ holidays = [], title = "List of Holidays" }) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl font-novaBold text-brand-blue mb-4 leading-tight">
                {title}
            </h1>
            <div className="mb-6">
                <table className="min-w-full my-4 bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-brand-blue text-white h-[48px] font-novaSemi uppercase text-sm lg:text-base">
                        <tr className="border-b">
                            <th className="px-4 max-[350px]:px-2 py-2 text-left border-r border-white border-opacity-10">
                                S.No.
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 border-r border-white border-opacity-10 text-left">
                                Festival
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 text-left border-r border-white border-opacity-10">
                                Date
                            </th>
                            <th className="px-4 max-[350px]:px-2 py-2 text-left">
                                Day
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-novaReg text-sm sm:text-base text-gray-800">
                        {holidays?.map((entry, index) => (
                            <tr
                                key={entry.SNo}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                            >
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-gray-200 text-center">
                                    {entry.SNo}
                                </td>
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-l border-gray-200">
                                    {entry.Festival}
                                </td>
                                <td className="py-4 px-4 max-[350px]:px-2 border-b border-l border-gray-200">
                                    {entry.Date}
                                </td>
                                <td className="py-4 text-center px-4 max-[350px]:px-2 border-b border-l border-gray-200">
                                    {entry.Day}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListOfHolidays;
