"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
import SupplyTable from '../supplyTable'
import SupplyTableTwo from '../supplyTableTwo'

const TechnicalCardTwo = ({ imageVariants, cardVariants, technical_figure_name, technical_figure_img, technical_figure_table_data }) => {
    return (
        <div className='xl:max-w-[95%] w-full mx-auto relative overflow-hidden py-10 pb-[30rem]'>
            <div className='container'>
                <div className='relative flex flex-col items-center'>
                    {/* GIF Section */}
                    <div className='max-w-[900px]  relative'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={imageVariants}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Image 
                                src={technical_figure_img} // Path to your GIF
                                alt='smart-home-gif'
                                width={900}
                                height={600}
                                className='rounded-lg shadow-lg h-full w-full object-cover'
                            />
                        </motion.div>
                    </div>

                    {/* Table Section - Horizontal Across the Entire Width with 3D Effect */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0.2 }}
                        className='absolute -bottom-[15rem] left-0 w-full z-10  '
                        style={{ perspective: '0' }} // Adds 3D perspective
                    >
                        <div 
                            className='bg-gradient-to-t rounded-lg from-[#222044]/90 to-transparent p-6 shadow-2xl transform transition-all duration-300'
                    
                        >
                            <SupplyTableTwo 
                                title={technical_figure_name} 
                                data={technical_figure_table_data} 
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalCardTwo