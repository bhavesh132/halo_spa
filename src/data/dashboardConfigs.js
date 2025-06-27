// src/data/dashboardConfigs.js
import getAgentStatus from "../api/data/haloAgents";

export const DASHBOARDS = [
  {
    id: "agent-status",
    title: "Agent Status",
    apiEndpoint: getAgentStatus,
    chart: { type: "pie", xKey: "agent_status", yKey: "count" },
    cards: ["Available", "Idle", "Busy", "Out Of Office", "Away", "Offline"],
    table: true,
  },
  // add more dashboards as needed
];
