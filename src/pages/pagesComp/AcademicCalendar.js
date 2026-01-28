
const AcademicCalendar = ({calendarData, currentSemester}) => {
    const notes = calendarData?.filter(entry => entry.type === "note");
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl max-md:text-2xl font-novaBold text-brand-blue mb-4 leading-tight">
                {currentSemester === 'even' ? 'Even Semester' : 'Odd Semester'}
            </h1>
            <div className="mb-6 mt-4 rounded-lg overflow-hidden shadow-sm">
                <table className="min-w-full my-4 bg-white">
                    <thead className="bg-brand-blue text-white h-[48px] font-novaSemi uppercase text-sm lg:text-base">
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left border-r border-white border-opacity-10">
                                Date
                            </th>
                            <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">
                                Day
                            </th>
                            <th className="px-4 py-2 text-left">
                                Activity
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-novaReg text-sm sm:text-base text-gray-800">
                        {calendarData?.map((entry, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                            >
                                <td className={`p-4 max-sm:p-3 border-b border-gray-200`}>
                                    {entry.StartDate || entry.Date}
                                </td>
                                <td className="p-4 text-center max-sm:p-3 border-b border-l border-gray-200">
                                    {entry.Days ? entry.Days.split('-')[0] : entry.Day}
                                </td>
                                <td className={`p-4 max-sm:p-3 border-b border-l border-gray-200`}>
                                    {entry.Activity} {entry.EndDate ? `-till ${entry.EndDate}` : ''}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Notes Section */}
                {notes?.length > 0 && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 text-yellow-900 p-5 mt-8 rounded-xl shadow-sm">
                        <div className="flex items-start gap-2">
                            <span className="text-yellow-700 font-novaBold uppercase tracking-wide text-sm">
                                Disclaimer:
                            </span>
                        </div>
                        <p className="font-novaSemi text-base leading-relaxed mt-2 whitespace-pre-line">
                            {notes[0].description
                                .replace(/^(Note|Disclaimer):/i, "")
                                .trim()}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AcademicCalendar;