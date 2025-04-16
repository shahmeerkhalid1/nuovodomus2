import React from 'react'
import Image from 'next/image'
import SectionTitle from '../../ui/sectionTitle'
import about_bg from "@/assets/images/about-image-2.jpg"
import SectionSidebarImg from '@/components/ui/sectionSidebarImg'
import section_bg from "@/assets/images/houses/calliope/3.jpg"

const aboutHeaderContent = {
    title:"Nuovodomus - The Future of Luxury Living",
    subTitle:"Imagine a home that doesn’t just shelter you but anticipates your every need. A home where elegance meets intelligence, where your space is not just a place to live, but a symphony of technology and design working in perfect harmony. Welcome to NuovoDomus, where the future isn’t coming—it’s already here."
  }
  

const AboutServices = () => {
    return (
        <section >
            <div className='container-fluid'>
                <SectionTitle sectionName={"Services"} sectionTitle={"Explore Our Design Offerings"}   />
                {/* <SectionTitle sectionName={"About Us"} sectionTitle={"Our Artistic Journey"} sectionDesc={"Unveiling the Passion, Vision, and Expertise Behind Our Designs"} /> */}
                <div className={`bg-primary xl:mt-[150px] lg:mt-25 md:mt-44 mt-[250px] xl:mb-20 mb-0`}>
                    <div className='container'>
                        <div className='flex lg:flex-row flex-col items-center justify-between gap-[66px]'>
                            <div className='md:-mt-25 -mt-[190px] -mb-25'>
                                <SectionSidebarImg img={section_bg} section_name={"about-bg"}/>
                            </div>
                            <div className='max-w-[533px] lg:pt-10 pt-20 sm:pt-20 pb-10 lg:pb-10'>
                                <h2 className='text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-10 max-w-[500px]'>Services</h2>
                                <p className=' text-secondary-foreground'>
                                At NuovoDomus, we transcend traditional design paradigms to curate environments that epitomize the pinnacle of luxury and innovation.
                                </p>
                                <p className='text-secondary-foreground mt-7'>
                                Our comprehensive suite of services is meticulously tailored to transform your vision into an extraordinary living experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutServices