import React from 'react'
import Card from '../ui/Card'
import Table from '../ui/Table'

const Layout = () => {
    const cardData = [
        {
        heading: "custom Heading",
        value: 200,
        footer: "custom Footer"
    },
        {
        heading: "custom Heading1",
        value: 120,
        footer: "custom Footer56"
    },
        {
        heading: "custom Heading2",
        value: 700,
        footer: "custom Footer34"
    },
        {
        heading: "custom Heading234",
        value: 400,
        footer: "custom Footer23"
    },
        {
        heading: "custom Headingasd ",
        value: 901,
        footer: "custom Footer1"
    },
]


const tableData = [
    { name: "John Michael" },
    { name: "Alice Smith" },
    { name: "Bob Johnson" },
  ];

  return (
    <div>
      {/* Cards */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex gap-4">
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>

      {/* Table */}
      <div className='flex justify-evenly m-auto'>
      <Table data={tableData} />
      <Table data={tableData} />
      </div>
    </div>
  );
};

export default Layout;







 