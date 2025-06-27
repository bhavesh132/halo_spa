const CardSection = ({ data }) => {
  if (!data || data.length === 0) return null;

  // Compute total agents
  const totalAgents = data.reduce((sum, item) => sum + Number(item.value), 0);

  return (
    <div className="space-y-4">
      {/* Total agents summary card */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center h-32">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Total Agents
        </p>
        <p className="text-2xl font-semibold text-gray-800 mt-1">
          {totalAgents}
        </p>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center transform transition duration-200 hover:scale-105 hover:shadow-md h-32"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {item.label}
            </p>
            <p className="text-2xl font-semibold text-gray-800 mt-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
