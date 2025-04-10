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
        <div className="w-full max-w-[600px] text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            <div className="border border-white/50 rounded-lg backdrop-blur-sm">
                <div className="flex border-b border-white/50 bg-gray-800/50">
                    <div className="w-1/3 p-3 font-bold border-r border-white/50">Aspect</div>
                    <div className="w-2/3 p-3 font-bold">Value/Requirement</div>
                </div>
                
                {tableData.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex border-b border-white/50 last:border-b-0 hover:bg-gray-700/50 transition-all duration-200"
                    >
                        <div className="w-1/3 p-3 border-r border-white/50 font-medium">{item.aspect}</div>
                        <div className="w-2/3 p-3 text-sm">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupplyTableThree