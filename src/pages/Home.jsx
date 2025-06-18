import { useNavigate } from "react-router-dom";
import SummaryCard from "../dashboards/SummaryCard";
import { DASHBOARDS } from "../data/dashboardConfigs";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-blue-900 ">
        Choose a Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DASHBOARDS.map((ds) => (
          <SummaryCard
            key={ds.id}
            title={ds.title}
            onClick={() => navigate(`/dashboard/${ds.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
