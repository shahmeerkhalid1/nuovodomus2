import React,{useEffect,useState} from 'react'
import { useSwiper } from 'swiper/react';

const SwiperNavigationTwo = ({ totalSlides }) => {
    const swiper = useSwiper();
    const [activeIndex, setActiveIndex] = useState(swiper?.realIndex || 0);
    
    // Update activeIndex on slide change
    useEffect(() => {
        if (swiper) {
            const handleSlideChange = () => {
                setActiveIndex(swiper.realIndex);
            };

            swiper.on('slideChange', handleSlideChange);

            // Cleanup event listener on component unmount
            return () => {
                swiper.off('slideChange', handleSlideChange);
            };
        }
    }, [swiper]);

    // Generate an array based on total slides
    const dots = Array.from({ length: totalSlides || 5 }, (_, index) => index);

    return (
        <div className='flex items-center gap-2 justify-center mt-8 md:mt-3'>
            {dots.map((index) => (
                <button 
                    key={index}
                    onClick={() => swiper.slideToLoop(index)} 
                    className={`w-3 h-3 rounded-full transition-all ${
                        activeIndex === index ? 'bg-primary-foreground w-5' : 'bg-black opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    )
}

export default SwiperNavigationTwo