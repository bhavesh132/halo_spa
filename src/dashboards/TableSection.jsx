// src/dashboards/TableSection.jsx
const TableSection = ({ data }) => {
  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-200 dark:border-blue-800 text-sm">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-3 py-2 border bg-blue-100 dark:bg-blue-900 text-left text-blue-900 dark:text-white"
              >
                {col.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-blue-50 ">
              {columns.map((col, cIdx) => (
                <td key={cIdx} className="px-3 py-2 border text-gray-800">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
