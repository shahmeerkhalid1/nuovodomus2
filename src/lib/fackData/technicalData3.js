// import project_img_1 from "@/assets/images/project-overview-img-1.jpg"
// import project_img_2 from "@/assets/images/project-overview-img-2.jpg"
// import project_img_3 from "@/assets/images/project-overview-img-3.jpg"
// import project_img_4 from "@/assets/images/project-overview-img-4.jpg"

import project_img_1 from "@/assets/images/smart-home/electric-supply-2.jpg";
import project_img_2 from "@/assets/images/smart-home/water-supply-2.jpg";
import project_img_3 from "@/assets/images/smart-home/food-supply-2.jpg";
import project_img_4 from "@/assets/images/smart-home/air-quality-2.jpg";
import project_img_5 from "@/assets/images/smart-home/medical-supply-2.jpg";
import project_img_6 from "@/assets/images/smart-home/safty.jpg";
import project_img_7 from "@/assets/power-supply.gif";
// import project_img_1 from "@/assets/images/home-solar-power.webp";
// import project_img_4 from "@/assets/images/houses/calliope/4.jpg";
// import project_img_3 from "@/assets/images/smart-home-water-supply.webp";
// import project_img_2 from "@/assets/images/climate-control-system.webp";

export const technicalData3 = [
  {
    id: 1,
    technical_figure_name: "Electricity Supply",
    technical_figure_img: project_img_1,
    technical_figure_table_data:[
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
      ]

  },
  
{
    id: 2,
    technical_figure_name: "Water Supply",
    technical_figure_img: project_img_2,
    technical_figure_table_data: [
        {
            aspect: "Daily Consumption",
            value: "Approx. 50 liters per person per day (including drinking, cooking, hygiene; minimum ~15 liters in emergencies)"
        },
        {
            aspect: "Total Storage (30 Days)",
            value: "Approx. 7,500 liters total (approximately 7.5 m³ water supply for 5 people over 30 days)"
        },
        {
            aspect: "Rainwater Harvesting",
            value: "Approx. 2,300 liters collected per 25 mm of rainfall on 100 m² roof area (approximately 600 gallons per 1 inch of rain on 1,000 sqft)"
        },
        {
            aspect: "Water Purification System",
            value: "Filtration unit (Activated Carbon + UV) with a throughput of approx. 250-300 liters/day (matches daily demand)"
        }
    ]
},
{
    id: 3,
    technical_figure_name: "Food Supply",
    technical_figure_img: project_img_3,
    technical_figure_table_data: [
        {
            aspect: "Caloric Intake",
            value: "Approx. 2,100 kcal per person per day (standard emergency nutrition)"
        },
        {
            aspect: "Total Food Supply (5 People/30 Days)",
            value: "300,000 kcal total (approximately 60,000 kcal per person; equivalent to approx. 75-80 kg of long-lasting dry food)"
        },
        {
            aspect: "Storage Requirement",
            value: "Approx. 0.25-0.3 m³ of storage volume (for 5 people x 30 days of food)"
        }
    ]
},
{
    id: 4,
    technical_figure_name: "Air Quality and Climate Control",
    technical_figure_img: project_img_4,
    technical_figure_table_data: [
        {
            aspect: "Ventilation",
            value: "Approx. 25-30 m³/h of fresh air per person (approximately 15 CFM); total of 125-150 m³/h for 5 people (according to indoor air quality standards)"
        },
        {
            aspect: "Air Filtration",
            value: "HEPA and activated carbon filter unit for 150 m³/h of airflow (filters particulate matter and chemical pollutants in case of outdoor contamination)"
        },
        {
            aspect: "Fan Power Consumption",
            value: "Approx. 12-15 W for approx. 170 m³/h airflow (approximately 100 CFM fan) – continuous operation around the clock"
        }
    ]
},
{
    id: 5,
    technical_figure_name: "Medical Supplies",
    technical_figure_img: project_img_5,
    technical_figure_table_data: [
        {
            aspect: "First Aid Kit",
            value: "Comprehensive set (e.g., ~25 bandages, 2 compresses, gauze, disinfectants, etc.) – sufficient for approx. 5 people"
        },
        {
            aspect: "Medication Stock",
            value: "30-day supply of essential medications: Painkillers, disinfectants, anti-diarrheal drugs, antihistamines, potentially antibiotics"
        },
        {
            aspect: "Shelf Life of Medications",
            value: "Typically ~3-5 years under proper storage conditions (some items only last ~1-2 years); regular inspection and rotation recommended"
        }
    ]
},
{
    id: 6,
    technical_figure_name: "Safety and Construction",
    technical_figure_img: project_img_6,
    technical_figure_table_data: [
        {
            aspect: "Earthquake Protection",
            value: "Foundation anchored firmly to the ground; walls/structure reinforced with steel – compliant with California seismic building codes"
        },
        {
            aspect: "Tornado Protection",
            value: "Extremely wind-resistant structure designed to withstand up to 250 mph winds; walls and roof resistant to debris impact"
        },
        {
            aspect: "Flood Protection",
            value: "Living area elevated (minimum 0.6-1 m above the 100-year flood level); robust base construction with flood openings or stilts to allow water flow"
        },
        {
            aspect: "Autonomous Heating",
            value: "Heat pump system, approx. 15 kW heating capacity – no external energy (gas) required"
        },
        {
            aspect: "Autonomous Cooling",
            value: "High-efficiency climate control system (heat pump), approx. 30,000 BTU/h cooling capacity – powered by solar system/battery"
        }
    ]
}
  
].map((project) => ({
  ...project,
  link: `/project-single/${project.id}`
}));
