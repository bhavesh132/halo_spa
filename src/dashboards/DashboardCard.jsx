import React from "react";
import CardSection from "./CardSection";
import TableSection from "./TableSection";
import ChartSection from "./ChartSection";

const DashboardCard = ({ dashboard }) => {
  const { title, data, chart, cards, table } = dashboard;

  console.log(data);

  if (!data) {
    return (
      <p className="text-gray-500 text-center">
        No data available for this dashboard.
      </p>
    );
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow space-y-4">
      <h2 className="text-lg font-semibold text-blue-900">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.ChartData?.length > 0 && (
          <div className="min-h-[500px] h-full w-full mt-3 mx-auto">
            <ChartSection
              data={data.ChartData}
              chart={
                chart || { type: "bar", xKey: "agent_status", yKey: "count" }
              }
            />
          </div>
        )}

        {cards?.length > 0 && (
          <div className="w-full">
            <CardSection data={data.CardData} fields={cards} />
          </div>
        )}
      </div>

      {table && <TableSection data={data.TableData} />}
    </div>
  );
};

export default DashboardCard;
