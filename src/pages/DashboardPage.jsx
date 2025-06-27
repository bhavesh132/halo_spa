import { useParams } from "react-router-dom";
import { DASHBOARDS } from "../data/dashboardConfigs";
import { useState, useEffect, use } from "react";
import DashboardCard from "../dashboards/DashboardCard";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();
  const dashboard = DASHBOARDS.find((d) => d.id === id);

  const POLL_INTERVAL = 300000; // 5 minutes in ms

  useEffect(() => {
    let intervalId;

    const fetchData = () => {
      if (
        dashboard.apiEndpoint &&
        typeof dashboard.apiEndpoint === "function"
      ) {
        setLoading(true);
        dashboard
          .apiEndpoint()
          .then((res) => setData(res))
          .catch((err) => {
            console.error(err);
            setError("Failed to fetch dashboard data.");
          })
          .finally(() => setLoading(false));
      }
    };

    fetchData(); // Fetch immediately when dashboard loads

    // Set up polling
    if (dashboard.apiEndpoint && typeof dashboard.apiEndpoint === "function") {
      intervalId = setInterval(fetchData, POLL_INTERVAL);
    }

    // Cleanup on unmount or dashboard change
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [dashboard]);

  if (!dashboard)
    return <p className="text-center p-6 text-red-500">Dashboard not found.</p>;

  if (error) {
    return <p className="text-center p-6 text-red-500">{error}</p>;
  }

  if (loading) {
    return <p className="text-center p-6 text-gray-500">Loading data...</p>;
  }
  return (
    <div className="min-h-screen bg-gray-50  p-6">
      <DashboardCard dashboard={{ ...dashboard, data }} />
    </div>
  );
};

export default DashboardPage;
