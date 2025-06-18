import React from "react";

const Card = ({data}) => {
  return (
    <div>
      <div class="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <h2 class="text-gray-500 p-2 font-medium text-sm">{data.heading}</h2>
        <p class="text-2xl font-bold">{data.value}</p>
        <span class="text-gray-400 text-sm mt-1">
          {data.footer}
        </span>
      </div>
    </div>
  );
};

export default Card;
