"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';

import PhilosophyImage from "@/public/assets/philosophy/philosophy_diagram.png";
import PhilosophyLgScreenImage from "@/public/assets/philosophy/philosophy_diagram_lg.png";

import { home_philosophy as home_philosophy_Data } from "@/data/homecarousel1";



const PhilosophySection = () => {
    return (
        <>
            <section className="container min-[480px]:max-md:max-w-[480px] min-[976px]:max-lg:max-w-none min-[1200px]:max-w-[1200px] md:mb-[128px] font-inter">
                <header className="md:space-y-6 space-y-4 text-center">
                    <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-montserrat">OUR PHILOSOPHY</h6>
                    <h2 className="whitespace-pre-line font-montserrat text-res-head-2 text-blue-text lg:text-head-2">Human-centred innovation</h2>
                </header>
                <figure className="relative py-[32px]">
                    <Image
                        src={PhilosophyImage}
                        alt="workflow"
                        width={640}
                        height={735}
                        quality={100}
                        draggable="false"
                        sizes="95vw"
                        className="h-full w-full object-contain md:hidden"
                    />
                    <Image
                        src={PhilosophyLgScreenImage}
                        alt="workflow"
                        width={2206}
                        height={727}
                        quality={100}
                        draggable="false"
                        sizes="95vw"
                        className="h-full w-full object-contain hidden md:block"
                    />
                </figure>
                <ul id="home-philosophies_card_container" className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {home_philosophy_Data.map((philcard, idx) => (
                        <motion.li key={`homephilcard${idx}`}
                            initial={{
                                opacity: 0,
                                translateY: "20%",
                            }}
                            whileInView={{
                                opacity: 1,
                                translateY: "0%",
                                transition: { duration: 0.4, delay: (idx === 0 ? 0 : (idx === 1 ? 0.07 : 0.14)) }
                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="z-20 h-full space-y-[8px] md:space-y-6 bg-[#F8FCFF] rounded-[20px] p-6 md:p-8"
                        >
                            <figure className="relative w-fit rounded-full">
                                <Image
                                    src={philcard.slideimgsrc}
                                    alt="Philosophy Card 1"
                                    width={50}
                                    height={50}
                                    draggable="false"
                                    sizes="50px"
                                    className="w-[32px] h-[32px] lg:w-[50px] lg:h-[50px]"
                                />
                            </figure>
                            <h4 className="font-montserrat text-blue-text text-res-head-4 lg:text-head-4">
                                {philcard.title}
                            </h4>
                            <p className="text-body-1 md:text-[16px] text-balance">
                                {philcard.body}
                            </p>
                        </motion.li>
                    ))}
                </ul>

                <div className="w-full md:hidden">
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={16}
                        speed={800}
                        threshold={1}
                        preventClicks
                        preventClicksPropagation
                        grabCursor
                        id="home-philosophy-swiper-carouselid"
                    >
                        {home_philosophy_Data.map((slidevals, idx) => (
                            <SwiperSlide key={`homephilswipercard${idx}`} className="!w-[273.33px] !h-auto">
                                <li
                                    className="z-20 h-full space-y-[8px] md:space-y-6 bg-[#F8FCFF] rounded-[20px] p-6 md:p-8"
                                >
                                    <figure className="relative w-fit rounded-full">
                                        <Image
                                            src={slidevals.slideimgsrc}
                                            alt="Philosophy Card 1"
                                            width={50}
                                            height={50}
                                            draggable="false"
                                            sizes="50px"
                                            className="w-[32px] h-[32px] lg:w-[50px] lg:h-[50px]"
                                        />
                                    </figure>
                                    <h4 className="font-montserrat text-blue-text text-res-head-4 lg:text-head-4">
                                        {slidevals.title}
                                    </h4>
                                    <p className="text-body-1 md:text-[16px] text-balance">
                                        {slidevals.body}
                                    </p>
                                </li>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </section>
            <section className="w-full md:hidden">
                <svg
                    className="max-h-[240px] md:my-6 my-[64px] w-full min-h-[60px]"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 2560 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.7"
                        d="M-240 0L1680 0L-240 280L-240 0Z"
                        fill="url(#paint0_linear_6055_471_philsection)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6055_471_philsection"
                            x1="458.5"
                            y1="1561.14"
                            x2="392.705"
                            y2="52.1879"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#1F80F0" />
                            <stop offset="1" stopColor="#1F80F0" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </section>
        </>
    );
}

export default PhilosophySection;
