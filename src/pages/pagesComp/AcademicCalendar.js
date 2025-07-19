
const AcademicCalendar = ({calendarData, currentSemester}) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-[40px] max-2xl:text-3xl max-md:text-2xl leading-none font-novaReg mb-2.5 ">
                {currentSemester === 'even' ? 'Even Semester' : 'Odd Semester'}
            </h1>
            <div className="mb-6 mt-4 rounded-lg">
                <table className="min-w-full my-4 bg-white rounded-lg">
                    <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                Date
                            </th>
                            <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">
                                Day
                            </th>
                            <th className="px-4 py-2 text-left rounded-tr-lg">
                                Activity
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                        {calendarData?.map((entry, index) => (
                            <tr
                                key={index}
                                className={`bg-indigo-950 text-white ${index === calendarData.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                            >
                                <td className={`p-4  max-sm:p-3 border-b border-white border-opacity-20 ${index === calendarData.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                    {entry.StartDate || entry.Date}
                                </td>
                                <td className="p-4 text-center max-sm:p-3 border-b border-l border-white border-opacity-20">
                                    {entry.Days ? entry.Days.split('-')[0] : entry.Day}
                                </td>
                                <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20 ${index === calendarData.length - 1 ? 'rounded-br-lg' : ''}`}>
                                    {entry.Activity} {entry.EndDate ? `-till ${entry.EndDate}` : ''}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AcademicCalendar;