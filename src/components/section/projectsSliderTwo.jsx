"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import SectionTitle from '../ui/sectionTitle'
import RightArrow from '@/assets/icons/rightArrow';
import { cn } from '@/lib/utils';
import ButtonOutline from '../ui/buttons/buttonOutline';
import ButtonFill from '../ui/buttons/buttonFill';
import { projectsData } from '@/lib/fackData/projectsData';

const ProjectsSliderTwo = ({ text_muted, bg_muted }) => {
    const swiperRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0);

    const pagination = {
        clickable: true,
        el: ".project-pagination",
        renderBullet: function (index, className) {
            return `
                <div class="opacity-0 relative h-0 translate-y-15 ${className}">
                    <h2 class="text-secondary-foreground leading-120 text-[clamp(32px,4vw,64px)] whitespace-nowrap text-ellipsis font-extrabold">${projectsData[index].project_name}</h2>
                    <a href="/project-single/${projectsData[index].id}" class="text-secondary-foreground mt-4 inline-block text-[clamp(14px,2vw,16px)]" onClick="event.stopPropagation();">${projectsData[index].project_desc.substring(0, 100)}...see more</a>
                </div>
            `;
        },
    };

    return (
        <section className='pt-10 md:pt-16 lg:pt-20'>
            <div className='container-fluid px-4 sm:px-6 lg:px-8'>
                <SectionTitle
                    sectionName={"Projects"}
                    sectionTitle={"Creative Showcase"}
                    sectionDesc={"Where Imagination Meets Reality in Every Frame"}
                    button_text={"All Projects"}
                    link={"/project-archive"}
                    bg_muted={bg_muted}
                    text_muted={text_muted}
                />
            </div>
            <div className='container-fluid px-4 sm:px-6 lg:px-8 relative pt-10 sm:pt-14 lg:pt-20'>
                <Swiper
                    slidesPerView={1}
                    loop
                    speed={500}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    pagination={pagination}
                    modules={[Pagination, Navigation,Autoplay]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full"
                >
                    {
                        projectsData.map(({ id, area, client, project_img, project_type, project_year }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <div 
                                        className='bg-cover bg-no-repeat bg-center w-full h-[300px] sm:h-[400px] md:h-[500px] ' 
                                        style={{ backgroundImage: `url(${project_img.src})` }}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='flex flex-col xl:flex-row items-stretch justify-center xl:justify-start gap-4 lg:gap-6 mt-4'>
                    <div className={cn(`project-pagination w-full max-w-full  2xl:max-w-[800px] bg-primary px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-4 relative z-[1] mt-[-20px] sm:mt-[-30px] ${bg_muted}`)}></div>
                    <div className='flex flex-col justify-between w-full xl:w-auto'>
                        <div className='flex flex-col sm:flex-row justify-center xl:justify-end gap-4 sm:gap-6 lg:gap-8 xl:gap-10 my-6 sm:my-8 lg:my-10 px-4 sm:px-0'>
                            <h6 className='flex flex-col text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-primary-foreground whitespace-nowrap'>
                                Clients:
                                <span className='text-sm sm:text-base lg:text-lg font-normal'>{projectsData[activeIndex].client}</span>
                            </h6>
                            <h6 className='flex flex-col text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-primary-foreground'>
                                Area:
                                <span className='text-sm sm:text-base lg:text-lg font-normal'>{projectsData[activeIndex].area}</span>
                            </h6>
                            <h6 className='flex flex-col text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-primary kaikkk-foreground whitespace-nowrap'>
                                Project year:
                                <span className='text-sm sm:text-base lg:text-lg font-normal'>{projectsData[activeIndex].project_year}</span>
                            </h6>
                            <h6 className='flex flex-col text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-primary-foreground whitespace-nowrap'>
                                Project type:
                                <span className='text-sm sm:text-base lg:text-lg font-normal'>{projectsData[activeIndex].project_type}</span>
                            </h6>
                        </div>
                        <div className='flex items-end justify-center xl:justify-start gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-0'>
                            <div onClick={() => swiperRef.current?.slidePrev()}>
                                <ButtonFill className={"rotate-180 h-12 w-12 sm:h-16 sm:w-16 lg:h-[75px] lg:w-[75px] px-2 sm:px-3 after:bg-secondary border-secondary hover:border-primary hover:bg-primary hover:text-secondary text-primary-foreground"}>
                                    <RightArrow width={"24"} height={"16"} className="sm:w-[30px] sm:h-[20px] lg:w-[35px] lg:h-[22px]" />
                                </ButtonFill>
                            </div>
                            <div onClick={() => swiperRef.current?.slideNext()}>
                                <ButtonFill className={cn(`h-12 sm:h-16 lg:h-[75px] px-4 sm:px-6 lg:px-10 text-sm sm:text-base after:left-0 after:${bg_muted} hover:border-primary`)}>
                                    Next Project 
                                    <RightArrow width={"24"} height={"16"} className="ml-2 sm:w-[30px] sm:h-[20px] lg:w-[35px] lg:h-[22px]" />
                                </ButtonFill>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSliderTwo