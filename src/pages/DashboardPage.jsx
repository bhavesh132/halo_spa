import { useParams } from "react-router-dom";
import { DASHBOARDS } from "../data/dashboardConfigs";
import DashboardCard from "../dashboards/DashboardCard";

const DashboardPage = () => {
  const { id } = useParams();
  const dashboard = DASHBOARDS.find((d) => d.id === id);

  if (!dashboard)
    return <p className="text-center p-6 text-red-500">Dashboard not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50  p-6">
      <DashboardCard dashboard={dashboard} />
    </div>
  );
};

export default DashboardPage;
