import React from 'react'
import Image from 'next/image'
import SectionTitle from '../../ui/sectionTitle'
import about_bg from "@/assets/images/about-image-2.jpg"
import SectionSidebarImg from '@/components/ui/sectionSidebarImg'

const aboutHeaderContent = {
    title:"Nuovodomus - The Future of Luxury Living",
    subTitle:"Imagine a home that doesn’t just shelter you but anticipates your every need. A home where elegance meets intelligence, where your space is not just a place to live, but a symphony of technology and design working in perfect harmony. Welcome to NuovoDomus, where the future isn’t coming—it’s already here."
  }
  

const AboutTwo = () => {
    return (
        <section >
            <div className='container-fluid'>
                <SectionTitle sectionName={"About Us"} sectionTitle={"Nuovodomus - Future of Luxury Living"} sectionDesc={"Welcome to NuovoDomus, where the future isn’t coming—it’s already here"}  />
                {/* <SectionTitle sectionName={"About Us"} sectionTitle={"Our Artistic Journey"} sectionDesc={"Unveiling the Passion, Vision, and Expertise Behind Our Designs"} /> */}
                <div className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0`}>
                    <div className='container'>
                        <div className='flex lg:flex-row flex-col items-center justify-between gap-[66px]'>
                            <div className='md:-mt-25 -mt-[470px] -mb-25'>
                                <SectionSidebarImg img={about_bg} section_name={"about-bg"}/>
                            </div>
                            <div className='max-w-[533px] lg:pt-0 pt-20 lg:pb-0 pb-10'>
                                <h2 className='text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[500px]'>A Home That Thinks, Feels, and Elevates Your Life</h2>
                                <p className=' text-secondary-foreground'>
                                This is not just luxury. This is a revolution in living. Every NuovoDomus home is designed to blur the lines between art, innovation, and ultimate comfort—crafted for those who demand the extraordinary.
                                </p>
                                <p className='text-secondary-foreground mt-7'>
                                With intuitive automation, voice-controlled everything, and an environment that responds 
                                to your desires, our homes don’t just welcome you in. They embrace you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo