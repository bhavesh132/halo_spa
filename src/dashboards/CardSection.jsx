// src/dashboards/CardSection.jsx
const CardSection = ({ data, fields }) => {
  if (!data || data.length === 0) return null;

  const computeSummary = (field) => {
    const values = data
      .map((row) => Number(row[field]))
      .filter((n) => !isNaN(n));
    if (field.toLowerCase().includes("avg")) {
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      return avg.toFixed(2);
    }
    const sum = values.reduce((a, b) => a + b, 0);
    return sum;
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {fields.map((field, idx) => (
        <div
          key={idx}
          className="bg-blue-100 dark:bg-blue-800 p-4 rounded shadow"
        >
          <p className="text-sm uppercase text-blue-700 dark:text-white">
            {field.replace(/_/g, " ")}
          </p>
          <p className="text-xl font-bold text-blue-900 dark:text-white">
            {computeSummary(field)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
