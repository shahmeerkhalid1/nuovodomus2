import React from 'react';

const SupplyTable = ({ data, title = "Electricity Supply" }) => {
  // Default data if none is provided
  const defaultData = [
    {
      aspect: "Solar Power Generation",
      value: "Approx. 40-45 kWh per day (e.g., ~10 kW PV system produces ~16,000 kWh/year approximately 44 kWh/day)"
    },
    {
      aspect: "Battery Storage (30 Days)",
      value: "Approx. 1,000 kWh capacity (to ensure 30-day autonomy with a daily consumption of ~30-35 kWh)"
    },
    {
      aspect: "Power Consumption",
      value: "Approx. 7-10 kWh per person per day (average household usage)"
    }
  ];

  const tableData = data || defaultData;

  return (
    <div className="w-full max-w-2xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="border border-white">
        <div className="flex border-b border-white">
          <div className="w-1/3 p-2 font-bold bg-gray-100 border-r border-gray-300">Aspect</div>
          <div className="w-2/3 p-2 font-bold bg-gray-100">Value/Requirement</div>
        </div>
        
        {tableData.map((item, index) => (
          <div key={index} className="flex border-b border-white last:border-b-0">
            <div className="w-1/3 p-2 border-r border-white font-medium">{item.aspect}</div>
            <div className="w-2/3 p-2">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyTable