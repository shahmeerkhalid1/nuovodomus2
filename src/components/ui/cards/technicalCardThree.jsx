"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
import SupplyTableThree from '../supplyTableThree'

const TechnicalCardThree = ({ imageVariants, cardVariants, technical_figure_name, technical_figure_img, technical_figure_table_data }) => {
    return (
        <div className='xl:max-w-[95%] w-full mx-auto relative overflow-hidden py-10'>
            <div className='container'>
                <div className='relative flex flex-col items-center'>
                    {/* GIF Section */}
                    <div className='w-full max-w-[900px] h-[600px] relative'>
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
                        className='absolute bottom-0 left-0 w-full z-10'
                        style={{ perspective: '1000px' }} // Adds 3D perspective
                    >
                        <div 
                            className='bg-gradient-to-t from-[#222044]/90 to-transparent p-6 shadow-2xl transform transition-all duration-300'
                            style={{
                                transform: 'rotateX(15deg)', // 3D tilt effect (tilting backward)
                                transformOrigin: 'bottom', // Tilt from the bottom edge
                            }}
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
    )
}

export default TechnicalCardThree