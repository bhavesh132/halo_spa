import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const COLORS = [
  "#6366F1", // Indigo 500
  "#06B6D4", // Cyan 500
  "#10B981", // Emerald 500
  "#F59E0B", // Amber 500
  "#F97316", // Orange 500
  "#EF4444", // Red 500
  "#8B5CF6", // Violet 500
  "#3B82F6", // Blue 500
];

const ChartSection = ({ data, chart }) => {
  if (!data || data.length === 0 || !chart) return null;

  const { type, xKey, yKey } = chart;

  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={yKey} fill="#3182ce" />
          </BarChart>
        );

      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Line dataKey={yKey} stroke="#3182ce" />
          </LineChart>
        );

      case "pie":
        return (
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              dataKey={yKey}
              nameKey={xKey}
              cx="50%"
              cy="50%"
              outerRadius={150}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        );

      default:
        return (
          <p className="text-gray-400 text-sm">
            Unsupported chart type: {type}
          </p>
        );
    }
  };

  return (
    <div className="h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
