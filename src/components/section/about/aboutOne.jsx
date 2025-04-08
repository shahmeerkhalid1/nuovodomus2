"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
// import about_img from "@/assets/images/about-image.jpg"
import about_img from "@/assets/images/about-img4.jpg"
import SectionTitle from '../../ui/sectionTitle'
import { cardSlideAnimation, cn } from '@/lib/utils'
import { useInView } from 'react-intersection-observer'
import SectionSidebarImg from '@/components/ui/sectionSidebarImg'
import Link from 'next/link'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import RightArrow from '@/assets/icons/rightArrow'

const aboutList = [
    {
        id: "01",
        item: "Innovation Beyond Boundaries",
        item_desc: "We don’t just build homes—we create intelligent living experiences. Our designs fuse smart automation, modular architecture, and sustainable luxury to redefine modern living"
    },
    {
        id: "02",
        item: "Visionary Craftsmanship",
        item_desc: "Every NuovoDomus home is a masterpiece of elegance and precision. Designed for adaptability and sophistication, our residences blend cutting-edge technology with timeless aesthetics."
    },
    {
        id: "03",
        item: "Prestige & Recognition",
        item_desc: "Recognized globally for architectural innovation and sustainability, NuovoDomus sets the standard for luxury, exclusivity, and modern excellence."
    },

]
const AboutOne = ({ text_muted, bg_muted }) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.00,
        triggerOnce: true
    });
    return (
        <section className='pt-20'>
            <div className='container-fluid '>
                <SectionTitle sectionName={"About Us"} sectionTitle={"Foundations of NuovoDomus"} sectionDesc={"Crafting Architectural Masterpieces and Designing Interior Wonders"} text_muted={text_muted} bg_muted={bg_muted} />
                <div className={cn(`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0 ${bg_muted}`)}>
                    <div className='container py-4'>
                        <div className='flex lg:flex-row flex-col items-center gap-[50px]'>
                        <div className='lg:basis-[40%] 2xl:basis-auto'>
                            <SectionSidebarImg img={about_img} section_name={"about-bg"} className="md:-mt-25 -mt-[470px] -mb-25"/>
                        </div>
                            <ul className='lg:mt-0 mt-20 lg:pb-0 pb-10 lg:basis-[60%] 2xl:basis-auto'>
                                {
                                    aboutList.map(({ id, item, item_desc }) => {
                                        return (
                                            <li key={id} className='lg:flex gap-10 pb-10 last:pb-0 justify-between'>
                                                <svg ref={ref} strokeWidth="1" className={`h-[65px] w-20 relative -top-2 left-3 xl:text-4xl text-3xl mb-3 lg:mb-0 inline-block font-extrabold leading-120  ${inView ? "animate-text-line-animation stroke-secondary stroke-dasharray-1000 stroke-dashoffset-1000" : " fill-transparent stroke-secondary "}`}><text x="0%" dominantBaseline="middle" y="70%">{id}</text></svg>
                                                <div className='max-w-[534px]'>
                                                    <h4 className='text-xl 2sm:text-2xl font-bold leading-135 text-secondary-foreground'>{item}</h4>
                                                    <p className='text-lg text-secondary-foreground font-normal'>{item_desc}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                {/* <Link href={"/project-archive"} className='4xl:block hidden'>
                                                <ButtonOutline className="border-secondary text-secondary-foreground sm:px-10 px-3 whitespace-nowrap hover:border-primary">View Gallery</ButtonOutline>
                                </Link> */}
                              <Link href={"/about-us/"}>
                                <ButtonOutline className={cn(`ms-30 border-secondary text-secondary-foreground 2sm:px-10 px-3 after:left-0`)}>
                                    About
                                    <RightArrow height={"22"} width={"35"}/> 
                                </ButtonOutline>
                                </Link>
                        
                            </ul>
                             
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOne