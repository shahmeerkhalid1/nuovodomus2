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

const ProjectsSliderThree = ({ text_muted, bg_muted }) => {
    const swiperRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0);

    const pagination = {
        clickable: true,
        el: ".project-pagination",
        renderBullet: function (index, className) {
            return `
                <div class="opacity-0 relative h-0 translate-y-15 ${className}">
                    <h2 class="text-secondary-foreground leading-120 text-[clamp(32px,3vw,50px)] whitespace-nowrap text-ellipsis font-extrabold">${projectsData[index].project_name}</h2>
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
                {/* Mobile/Tablet Layout (stacked) vs Desktop Layout (side-by-side) */}
                <div className='flex flex-col lg:flex-row'>
                    {/* Left column with project details - 40% width on large screens, hidden on smaller screens */}
                    <div className='hidden lg:block w-full lg:w-2/5 pr-0 lg:pr-6 mb-6 lg:mb-0 bg-primary'>
                        {/* Project title and description */}
                        <div className={`w-full bg-primary px-4 sm:px-6 pt-6 relative z-[1] ${bg_muted}`}>
                            <h2 className='text-secondary-foreground leading-tight text-[clamp(32px,3vw,50px)] font-extrabold'>
                                {projectsData[activeIndex].project_name}
                            </h2>
                            <p className='text-secondary-foreground mt-4 text-[clamp(14px,2vw,16px)]'>
                                {projectsData[activeIndex].project_desc?.substring(0, 180)}...
                                <Link href={`/project-single/${projectsData[activeIndex].id}`} className='inline-block ml-1'>see more</Link>
                            </p>
                        </div>

                        {/* Project metadata */}
                        <div className='p-6 mt-4'>
                            <div className='grid grid-cols-2 gap-6 mb-8'>
                                <h6 className='flex flex-col text-lg sm:text-xl font-bold leading-tight text-secondary-foreground'>
                                    Clients:
                                    <span className='text-sm sm:text-base font-normal mt-1'>{projectsData[activeIndex].client}</span>
                                </h6>
                                <h6 className='flex flex-col text-lg sm:text-xl font-bold leading-tight text-secondary-foreground'>
                                    Area:
                                    <span className='text-sm sm:text-base font-normal mt-1'>{projectsData[activeIndex].area}</span>
                                </h6>
                                <h6 className='flex flex-col text-lg sm:text-xl font-bold leading-tight text-secondary-foreground'>
                                    Project year:
                                    <span className='text-sm sm:text-base font-normal mt-1'>{projectsData[activeIndex].project_year}</span>
                                </h6>
                                <h6 className='flex flex-col text-lg sm:text-xl font-bold leading-tight text-secondary-foreground'>
                                    Project type:
                                    <span className='text-sm sm:text-base font-normal mt-1'>{projectsData[activeIndex].project_type}</span>
                                </h6>
                            </div>

                            {/* Navigation buttons */}
                            <div className='flex items-center gap-3'>
                                <div onClick={() => swiperRef.current?.slidePrev()}>
                                    <ButtonFill className={"rotate-180 h-12 w-12 sm:h-14 sm:w-14 px-2 border-secondary hover:border-secondary hover:bg-secondary hover:text-primary text-secondary-foreground"}>
                                        <RightArrow width={"24"} height={"16"} className="w-6 h-4" />
                                    </ButtonFill>
                                </div>
                                <div onClick={() => swiperRef.current?.slideNext()}>
                                    <ButtonFill className={`h-12 sm:h-14 px-6 text-sm sm:text-base after:left-0 after:${bg_muted} border-secondary hover:border-secondary hover:bg-secondary hover:text-primary text-secondary-foreground w-full`}>
                                        Next Project 
                                        <RightArrow width={"24"} height={"16"} className="ml-2 w-6 h-4" />
                                    </ButtonFill>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column with image slider - 60% width on large screens, 100% on smaller */}
                    <div className='w-full lg:w-3/5 relative'>
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
                            pagination={false}
                            modules={[Navigation, Autoplay]}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className="w-full h-full"
                        >
                            {
                                projectsData.map(({ id, project_img }) => {
                                    return (
                                        <SwiperSlide key={id}>
                                            <div 
                                                className='bg-cover bg-no-repeat bg-center w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[500px]' 
                                                style={{ backgroundImage: `url(${project_img.src})` }}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        
                        {/* Project title overlay for mobile/tablet - shown only on smaller screens */}
                        <div className=' lg:hidden relative bottom-0 left-0 right-0  bg-primary p-6'>
                            <h2 className='text-secondary-foreground leading-tight text-2xl sm:text-3xl md:text-4xl font-extrabold'>
                                {projectsData[activeIndex].project_name}
                            </h2>
                            <p className='text-secondary-foreground mt-2 text-sm sm:text-base'>
                                {projectsData[activeIndex].project_desc?.substring(0, 100)}...
                                <Link href={`/project-single/${projectsData[activeIndex].id}`} className='inline-block ml-1'>see more</Link>
                            </p>
                        </div>
                    </div>
                    
                    {/* Mobile project details section - only visible on smaller screens */}
                    <div className='lg:hidden w-full mt-4 mb-8'>
                        <div className='flex flex-wrap justify-between items-end px-4 sm:px-6'>
                            <div className='grid grid-cols-2 sm:grid-cols-4 2sm:grid-cols-2 gap-6 px-4'>
                                <h6 className='flex flex-col text-lg font-bold leading-tight text-primary-foreground whitespace-nowrap'>
                                    Clients:
                                    <span className='text-base font-normal'>{projectsData[activeIndex].client}</span>
                                </h6>
                                <h6 className='flex flex-col text-lg font-bold leading-tight text-primary-foreground'>
                                    Area:
                                    <span className='text-base font-normal'>{projectsData[activeIndex].area}</span>
                                </h6>
                                <h6 className='flex flex-col text-lg font-bold leading-tight text-primary-foreground whitespace-nowrap'>
                                    Project year:
                                    <span className='text-base font-normal'>{projectsData[activeIndex].project_year}</span>
                                </h6>
                                <h6 className='flex flex-col text-lg font-bold leading-tight text-primary-foreground whitespace-nowrap'>
                                    Project type:
                                    <span className='text-base font-normal'>{projectsData[activeIndex].project_type}</span>
                                </h6>
                            </div>
                            
                            {/* Navigation buttons for mobile */}
                            <div className='flex items-center gap-3 mt-8 sm:mt-4 2sm:mt-0 w-full sm:w-auto'>
                                <div onClick={() => swiperRef.current?.slidePrev()} className='w-16'>
                                    <ButtonFill className={"rotate-180 h-14 w-full px-2 border-secondary hover:border-secondary hover:bg-secondary hover:text-primary text-secondary-foreground"}>
                                        <RightArrow width={"24"} height={"16"} className="w-6 h-4" />
                                    </ButtonFill>
                                </div>
                                <div onClick={() => swiperRef.current?.slideNext()} className='flex-1'>
                                    <ButtonFill className={`h-14 px-6 text-base after:left-0 after:${bg_muted} border-secondary hover:border-secondary hover:bg-secondary hover:text-primary text-secondary-foreground w-full`}>
                                        Next Project 
                                        <RightArrow width={"24"} height={"16"} className="ml-2 w-6 h-4" />
                                    </ButtonFill>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSliderThree