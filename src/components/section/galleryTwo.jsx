"use client"
import React from 'react'
import SectionTitle from '../ui/sectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import ProgressAndNatigation from '../ui/progressAndNatigation';
import ServiceCard from '../ui/cards/serviceCard';
import { servicesData } from '@/lib/fackData/servicesData';
import { galleryData } from '@/lib/fackData/galleryData';
import GalleryCard from '../ui/cards/galleryCard';


const GalleryTwo = ({ text_muted, bg_muted }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <section className='pt-20'>
            <div className='container-fluid'>
                <SectionTitle
                    sectionName={"Gallery"}
                    sectionTitle={"Explore Our Design Offerings"}
                    sectionDesc={"Explore our curated gallery, showcasing spaces where imagination takes flight and excellence blossoms"}
                    link={"/project-archive"}
                    button_text={"View All Projects"}
                    text_muted={text_muted}
                    bg_muted={bg_muted}
                />
                <div className='lg:pt-30 2sm:pt-20 pt-14'>
                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            560: {
                                slidesPerView: 2
                            },
                            1200: {
                                slidesPerView: 3
                            },
                            1400: {
                                slidesPerView: 3
                            }
                        }}
                        pagination={pagination}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className=''
                    >
                        {
                            galleryData.map(({ id, img_title, img_desc, img,link }) => <SwiperSlide key={id}> <GalleryCard gallery_img={img} id={id} gallery_desc={img_desc} gallery_name={img_title} text_muted={text_muted}  link={link}/> </SwiperSlide>)
                        }
                        <div className='container'>
                            <ProgressAndNatigation />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default GalleryTwo
