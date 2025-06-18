// src/dashboards/SummaryCard.jsx
import React from "react";

const SummaryCard = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-blue-900 text-blue-900 dark:text-white p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all"
    >
      <h2 className="text-lg font-semibold text-center">{title}</h2>
    </div>
  );
};

export default SummaryCard;
