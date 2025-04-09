import React from 'react';

const SupplyTableTwo = ({ data, title = "Electricity Supply" }) => {
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
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="border border-white rounded-lg">
                {/* Header Row */}
                <div className="flex border-b border-white">
                    <div className="w-1/3 p-3 font-bold border-r border-white">Aspect</div>
                    <div className="w-2/3 p-3 font-bold">Value/Requirement</div>
                </div>
                
                {/* Data Rows */}
                {tableData.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex border-b border-white last:border-b-0"
                    >
                        <div className="w-1/3 p-3 border-r border-white font-medium">{item.aspect}</div>
                        <div className="w-2/3 p-3 text-sm">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupplyTableTwo