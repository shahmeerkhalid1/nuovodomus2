"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SupplyTableThree from "../supplyTableThree";

const TechnicalCardFour = ({
  imageVariants,
  cardVariants,
  technical_figure_name,
  technical_figure_img,
  technical_figure_table_data,
}) => {
  return (
    <div className="xl:max-w-[95%] w-full mx-auto relative overflow-hidden py-10">
      <div className="container">
        <div className="relative flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full max-w-[900px] h-[120px] xm:h-[140px] sm:h-[220px] md:h-[290px] lg:h-[600px] relative">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={imageVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              
             <Image
                src={technical_figure_img}
                alt="smart-home-gif"
                width={900}
                height={600}
                className="rounded-lg shadow-lg h-full w-full object-cover"
              />

              
            </motion.div>
          </div>

          {/* Table Section */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full z-10 lg:absolute lg:bottom-0 lg:left-0"
            style={{ perspective: "1000px" }}
          >
            <div
            //   className="bg-gradient-to-t from-[#222044]/90 to-transparent p-6 shadow-2xl transform transition-all duration-300 lg:transform lg:rotate-x-[15deg] lg:transform-origin-bottom"
            className="bg-gradient-to-t from-[#361c70]/100 to-[#361c70]/40 lg:bg-gradient-to-t lg:from-[#361c70]/90 lg:to-transparent  p-6 shadow-2xl transform transition-all duration-300 lg:transform lg:rotate-x-[15deg] lg:transform-origin-bottom rounded-lg lg:rounded-none"
            >
              <SupplyTableThree
                title={technical_figure_name}
                data={technical_figure_table_data}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCardFour;