"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { cn } from "@/lib/utils";
import ButtonFill from "@/components/ui/buttons/buttonFill";
import { useRef, useState } from "react";
import RightArrow from "@/assets/icons/rightArrow";
// import LeftArrow from "@/assets/icons/leftArrow";

const BannerFour = ({ data, text_muted, bg_muted }) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    // Calculate next index with loop consideration
    setNextIndex((swiper.realIndex + 1) % data.length);
  };

  return (
    <section className="relative banner-one">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        speed={500}
        autoplay={{
          delay: 4000,
        }}
        modules={[Navigation,Autoplay]}
      >
        {data.map(({ id, banner_img, heading_one, heading_two, sub_heading },index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <div
                className="w-full h-[100vh] bg-cover bg-top  bg-no-repeat"
                style={{ backgroundImage: `url(${banner_img.src})` }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
      {/* Content section below image with secondary background */}
      <div className="bg-secondary py-6" >
        <div className="container-fluid  md:container md:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-0 sm:gap-4">
            <div className="lg:w-3/5">
              {data && data.length > 0 && (
                <>
                  <h1 className='text-5xl leading-[1.2] sm:text-[3.45rem]  font-extrabold text-primary-foreground mb-6 text-center sm:text-left'>
                    <span className={cn(`text-primary-foreground animate-fill after:${bg_muted} ${text_muted}`)}>{data[activeIndex].heading_one}</span> <span className="text-primary">{data[activeIndex].heading_two}</span>
                  </h1>
                </>
              )}
            </div>
            <div className="lg:w-2/5">
              <div className="flex flex-col lg:flex-row lg:justify-between items-center sm:items-end flex-wrap xl:flex-nowrap lg:items-center gap-2">
                {/* Custom pagination showing current and next */}
                <div className="flex items-center justify-between w-full lg:w-auto gap-8">
                  {/* Current slide */}
                  <div className="flex items-center cursor-pointer" onClick={() => {}}>
                    <span className='inline-block mr-3 lg:text-5xl text-3xl font-extrabold text-primary'>
                      0{activeIndex + 1}
                    </span>
                    <span className='title md:text-lg text-sm font-semibold text-primary-foreground max-w-56'>
                      {data[activeIndex].title}
                    </span>
                  </div>
                  
                  {/* Next slide */}
                  <div 
                    className="flex items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity" 
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <span className='inline-block mr-3 lg:text-5xl text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary'>
                      0{nextIndex + 1}
                    </span>
                    <span className='title md:text-lg text-sm font-semibold text-primary-foreground max-w-56'>
                      {data[nextIndex].title}
                    </span>
                  </div>
                 
                </div>
                <div className="flex items-center justify-between mr-2 lg:mr-0 h-12 ml-auto">
                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={cn(
                          `bg-primary-foreground text-secondary-foreground flex justify-center items-center h-full w-12 rotate-180`
                        )}
                      >
                        <RightArrow width={"25"} height={"16"} />
                      </button>
                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={cn(
                          `bg-primary ${bg_muted} text-secondary-foreground flex justify-center items-center h-full w-12`
                        )}
                      >
                        <RightArrow width={"25"} height={"16"} />
                      </button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
