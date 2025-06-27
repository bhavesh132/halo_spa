import haloClient from "../auth/haloClient.js";

const STATUS_MAP = {
  0: "Available",
  1: "Busy",
  2: "Out of Office",
  3: "Away",
  "-2": "Idle",
  "-1": "Offline",
};

const getAgentStatus = async () => {
  // Fetch data
  const online_status = await haloClient()
    .get("/online-agents")
    .then((res) => res.data);
  const agent_ids = await haloClient()
    .get("/agent_listbyID")
    .then((res) => res.data);

  // Build id -> name map
  const idToNameMap = {};
  agent_ids.forEach((agent) => {
    idToNameMap[agent.id] = agent.agent_name;
  });

  // Enrich data
  const cleanedAgents = online_status.map((agent) => ({
    agent_name: idToNameMap[agent.techID] || "Unknown",
    agent_status_code: agent.agent_status,
    agent_status: STATUS_MAP[agent.agent_status] || "Unknown",
    lastOnlineDate: agent.lastOnlineDate,
  }));

  // Compute statusCounts (object: { status: count })
  const statusCounts = {};
  cleanedAgents.forEach((agent) => {
    statusCounts[agent.agent_status] =
      (statusCounts[agent.agent_status] || 0) + 1;
  });

  // Build CardData
  const CardData = Object.entries(statusCounts).map(([status, count]) => ({
    label: status,
    value: count,
  }));

  // ChartData (same structure works for charts)
  const ChartData = CardData.map(({ label, value }) => ({
    agent_status: label,
    count: value,
  }));

  // TableData
  const TableData = cleanedAgents.map((agent) => ({
    agent_name: agent.agent_name,
    agent_status: agent.agent_status,
    lastOnlineDate: agent.lastOnlineDate,
  }));

  return { ChartData, TableData, CardData };
};

export default getAgentStatus;
