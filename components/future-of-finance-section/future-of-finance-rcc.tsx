"use client";

import { useRef, useState } from "react";
import { HomeTechSlide } from "@/components/carousel/home-tech-carousel";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { home_Carousel_1 as home_Carousel_1_Data } from "@/data/homecarousel1";



const FutureOfFinanceClientComp = () => {
    const [activeButton, setActiveButton] = useState<number>(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const handleOptionButtonClick = (activeindex: number) => {
        setActiveButton(activeindex);
        if (swiperRef.current) {
            swiperRef.current.slideTo(activeindex, 750);
        }
    };

    return (
        <div className="font-inter">
            <div className="hidden lg:flex justify-center items-center flex-wrap space-x-4 py-[32px]">
                <button onClick={() => handleOptionButtonClick(0)} type="button" className={`lg:text-body-p0 text-res-body-p0 font-[600] xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] text-blue-main ${activeButton === 0 ? 'bg-blue-highlight' : 'hover:bg-[#F5FAFF]'} bg-opacity-100 transition-colors duration-300`}>
                    Customer focused
                </button>
                <button onClick={() => handleOptionButtonClick(1)} type="button" className={`lg:text-body-p0 text-res-body-p0 font-[600] xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] text-blue-main ${activeButton === 1 ? 'bg-blue-highlight' : 'hover:bg-[#F5FAFF]'} bg-opacity-100 transition-colors duration-300`}>
                    Agile and adaptable
                </button>
                <button onClick={() => handleOptionButtonClick(2)} type="button" className={`lg:text-body-p0 text-res-body-p0 font-[600] xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] text-blue-main ${activeButton === 2 ? 'bg-blue-highlight' : 'hover:bg-[#F5FAFF]'} bg-opacity-100 transition-colors duration-300`}>
                    Compliance ready
                </button>
                <button onClick={() => handleOptionButtonClick(3)} type="button" className={`lg:text-body-p0 text-res-body-p0 font-[600] xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] text-blue-main ${activeButton === 3 ? 'bg-blue-highlight' : 'hover:bg-[#F5FAFF]'} bg-opacity-100 transition-colors duration-300`}>
                    Secure and safe
                </button>
            </div>
            <div id="home-tech-carousel-container" className="relative">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={50}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    preventClicks
                    preventClicksPropagation
                    speed={750}
                    id="home-tech-swiper-carouselid"
                    className="w-full max-md:mt-6"
                    style={{
                        filter: `drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)`,
                        WebkitFilter: `drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)`,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveButton(swiper.activeIndex);
                    }}
                >
                    {home_Carousel_1_Data.map((slidevals, idx) => (
                        <SwiperSlide key={`home-tech_slide${idx}`} className="w-full">
                            <HomeTechSlide
                                slideimgsrc={slidevals.slideimgsrc}
                                title={slidevals.title}
                                heading={slidevals.heading}
                                body_bold={slidevals.body_bold}
                                body={slidevals.body}
                            />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default FutureOfFinanceClientComp;
