"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { cn } from "@/lib/utils";
import ButtonFill from "@/components/ui/buttons/buttonFill";
import { useRef, useState, useEffect } from "react";
import RightArrow from "@/assets/icons/rightArrow";
// import LeftArrow from "@/assets/icons/leftArrow";

const BannerFour = ({ data, text_muted, bg_muted }) => {
  const swiperRef = useRef();
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  // Calculate content-section height after component mounts and on window resize
  useEffect(() => {
    const updateHeights = () => {
      if (sectionRef.current) {
        const contentSection = document.querySelector('.content-section');
        if (contentSection) {
          // Set a minimum height or use content's natural height
          const calculatedHeight = Math.max(contentSection.offsetHeight, 90); // Ensure at least 90px
          setContentHeight(calculatedHeight);
        }
      }
    };

    // Run after initial render and on resize
    updateHeights();
    window.addEventListener('resize', updateHeights);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', updateHeights);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    // Calculate next index with loop consideration
    setNextIndex((swiper.realIndex + 1) % data.length);
  };

  return (
    <section ref={sectionRef} className="relative banner-one">
      {/* Main container with calculated height */}
      <div className={`h-[calc(100vh-90px)]`}>
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
          className="h-full"
        >
          {data.map(({ id, banner_img, heading_one, heading_two, sub_heading }, index) => {
            return (
              <SwiperSlide key={index} className="relative h-full">
                <div
                  className="w-full h-full bg-cover bg-top bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${banner_img.src})`,
                    backgroundSize: "cover", 
                    backgroundPosition: "top"
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      
      {/* Content section with responsive primary and secondary colors, using contentHeight */}
      <div 
        className="content-section flex flex-col md:flex-row"
        style={{ minHeight: `${contentHeight}px` }}
      >
        {/* Left/top side with primary color */}
        <div className="bg-primary w-full md:w-1/2 py-3 flex items-center">
          <div className="container-fluid md:container md:px-4 xl:px-10 h-full">
            <div className="flex justify-center md:justify-start items-center h-full">
              <div className="lg:w-3/5">
                {data && data.length > 0 && (
                  <h1 className="text-2xl sm:text-3xl leading-[1.1] md:text-[2.5rem] whitespace-nowrap font-extrabold text-primary-foreground mb-0 text-center md:text-left">
                    <span className={cn(`text-secondary-foreground animate-fill animate-fill-secondary after:${bg_muted} ${text_muted}`)}>
                      {data[activeIndex].heading_one}
                    </span>{" "}
                    <span className="text-secondary-foreground">{data[activeIndex].heading_two}</span>
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right/bottom side with secondary color */}
        <div className="bg-secondary w-full md:w-1/2 py-3 flex items-center">
          <div className="container-fluid md:container md:px-4 xl:px-10 h-full">
            <div className="flex justify-center md:justify-end items-center h-full">
              <div className="lg:w-2/5">
                <div className="flex items-center justify-center md:justify-end gap-2">
                  {/* Custom pagination showing current and next */}
                  <div className="flex items-center justify-between lg:w-auto gap-4 sm:gap-6">
                    {/* Current slide */}
                    <div className="flex items-center cursor-pointer" onClick={() => {}}>
                      <span className="inline-block mr-2 text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary">
                        0{activeIndex + 1}
                      </span>
                      <span className="title text-xs sm:text-sm md:text-base font-semibold text-primary-foreground max-w-24 sm:max-w-32">
                        {data[activeIndex].title}
                      </span>
                    </div>
                    
                    {/* Next slide */}
                    <div
                      className="flex items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      <span className="inline-block mr-2 text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary">
                        0{nextIndex + 1}
                      </span>
                      <span className="title text-xs sm:text-sm md:text-base font-semibold text-primary-foreground max-w-24 sm:max-w-32">
                        {data[nextIndex].title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center h-8 sm:h-10">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      className={cn(
                        `bg-primary-foreground text-secondary-foreground flex justify-center items-center h-full w-8 sm:w-10 rotate-180`
                      )}
                    >
                      <RightArrow width={"16"} height={"10"} className="sm:w-[20px] sm:h-[12px]" />
                    </button>
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      className={cn(
                        `bg-primary ${bg_muted} text-secondary-foreground flex justify-center items-center h-full w-8 sm:w-10`
                      )}
                    >
                      <RightArrow width={"16"} height={"10"} className="sm:w-[20px] sm:h-[12px]" />
                    </button>
                  </div>
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