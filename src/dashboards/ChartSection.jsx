// src/dashboards/ChartSection.jsx
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartSection = ({ data, chart }) => {
  if (!data || data.length === 0 || !chart) return null;

  const { type, xKey, yKey } = chart;

  return (
    <div className="h-60">
      <ResponsiveContainer width="100%" height="100%">
        {type === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={yKey} fill="#3182ce" />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Line dataKey={yKey} stroke="#3182ce" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
