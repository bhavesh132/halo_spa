import React from "react";
import CardSection from "./CardSection";
import TableSection from "./TableSection";
import ChartSection from "./ChartSection";

const DashboardCard = ({ dashboard }) => {
  const { title, data, chart, cards, table } = dashboard;

  return (
    <div className="bg-white p-5 rounded-lg shadow space-y-4">
      <h2 className="text-lg font-semibold text-blue-900 ">{title}</h2>
      {cards?.length > 0 && <CardSection data={data} fields={cards} />}
      {chart && <ChartSection data={data} chart={chart} />}
      {table && <TableSection data={data} />}
    </div>
  );
};

export default DashboardCard;
