import React from 'react';

const SupplyTableThree = ({ data, title = "Electricity Supply" }) => {
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
        <div className="w-full text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-4 backdrop-blur-sm">
                {tableData.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex-1 p-4 bg-gray-800/50 rounded-lg border border-white/30 hover:bg-gray-700/50 transition-all duration-300"
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.aspect}</h3>
                        <p className="text-sm">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupplyTableThree