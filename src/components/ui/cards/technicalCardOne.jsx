"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
import RightArrow from '@/assets/icons/rightArrow'
import ButtonFill from '../buttons/buttonFill'
import Link from 'next/link'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import SupplyTable from '../supplyTable'

const TechnicalCardOne = ({ order, position, imageVariants, cardVariants, technical_figure_name, technical_figure_img, technical_figure_table_data }) => {
    return (
        <div className='xl:max-w-[95%] w-full mx-auto relative overflow-hidden'>
            <div className='container'>
                <div className='flex lg:flex-row flex-col items-center lg:pb-[170px] pb-25'>
                    <div className={`${order} lg:w-1/2`}> {/* Reduced from lg:w-1/2 to lg:w-1/3 */}
                        <div className={`${position} w-full xl:max-w-[1100px] max-w-[800px] max-h-[700px] h-full`}>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={imageVariants}
                                viewport={{ once: true, amount: 0 }}
                            >
                                <Image 
                                    src={technical_figure_img} 
                                    loading='lazy'  
                                    placeholder='blur' 
                                    blurDataURL={staticBluarDataUrl}  
                                    alt='project-img-1' 
                                    width={"auto"} 
                                    height={"auto"} 
                                    className='h-full' 
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0 }}
                        className='lg:w-1/2 lg:mt-[187px] relative z-[1]' // Increased from lg:w-1/2 to lg:w-2/3
                    >
                        <div className={`bg-primary opacity-90 xl:px-16 px-8 xl:pt-[50px] pt-10 xl:pb-[40px] pb-7`}>
                            <SupplyTable title={technical_figure_name} data={technical_figure_table_data} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalCardOne