import React from 'react';

const DynamicTable = ({ tableHeaders, tableData, headerToKeyMap }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        {/* Dynamic thead */}
        <thead>
          <tr className="bg-gray-100">
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 px-4 py-2 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Dynamic tbody */}
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {tableHeaders.map((header, colIndex) => {
                const key = headerToKeyMap[header]; // Map header to key
                return (
                  <td
                    key={colIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {Array.isArray(row[key])
                      ? row[key].join(', ') // Join arrays (e.g., students)
                      : row[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
