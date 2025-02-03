"use client";

import Image from "next/image";
import Link from "next/link";
import { useCursorForTranslating } from "@/components/mousecontext";
import { motion } from "framer-motion";

import HeroImage from "@/public/assets/home_hero/home_hero.png";
import Herobgpattern from "@/components/patterns/herobgpattern";


const HomeHeroSection = () => {

    const { lightTransform, darkTransform } = useCursorForTranslating();

    return (
        <>
            <section id="home-hero_content_container" className="relative w-full h-auto lg:h-[max(620px,_calc(92vh-49px))] text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)]">
                <div className="relative z-10 w-full h-full md:flex md:items-center md:justify-center container min-[480px]:max-md:max-w-[480px] min-[976px]:max-lg:max-w-none min-[1200px]:max-w-[1200px] font-inter">
                    <div className="h-fit lg:flex-[65] xl:flex-[75]">
                        <header className="max-w-2xl lg:space-y-6 space-y-[16px] mb-[32px]">
                            <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-montserrat text-res-head-1 text-white">
                                {`Embrace the future of finance`}
                            </h1>
                            <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-montserrat">
                                {`Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation`}
                            </h5>
                        </header>
                        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-8 max-w-xl">
                            <Link href="#" className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main bg-opacity-100 group">
                                <span className="[transform:_translateX(var(--motion-translateX))] [--motion-translateX:_0px] group-hover:[--motion-translateX:_-2.5px] transition-[transform] duration-300 delay-[20ms] ease-[cubic-bezier(0.65, -0.6, 0.25, 1.6)]">
                                    Reach Out to Us
                                </span>
                                <svg
                                    width="6"
                                    height="9"
                                    viewBox="0 0 6 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="[transform:_translateX(var(--motion-translateX))] [--motion-translateX:_0px] group-hover:[--motion-translateX:_2.5px] transition-[transform] duration-300 ease-[cubic-bezier(0.65, -0.6, 0.25, 1.6)]"
                                >
                                    <path
                                        d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
                </div>
                <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
                    <motion.figure
                        initial={{
                            translateX: "3%",
                            translateY: "0%",
                        }}
                        animate={{
                            translateX: "-12%",
                            translateY: "0%",
                            transition: { delay: 0.3, duration: 1.1, ease: [0, 0.3, 0.8, 1] },
                        }}
                        className="h-[115%] w-[115%]"
                    >
                        <Image
                            src={HeroImage}
                            alt="Hero Section Image"
                            fill
                            quality={100}
                            draggable="false"
                            priority
                            className="h-full w-full object-cover"
                        />
                    </motion.figure>
                    <div className="gradient-overlay-custom-home"></div>
                </div>
                <Herobgpattern fgPatternsTransform={lightTransform} bgPatternsTransform={darkTransform} />
            </section>
            <div className="block lg:hidden translate-y-[-20%] -mb-[10%]">
                <figure
                    className="overflow-hidden"
                    style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}
                >
                    <Image
                        src={HeroImage}
                        alt="Hero Section Image"
                        width={7952}
                        height={5304}
                        className="h-full w-full object-cover scale-150"
                    />
                </figure>
                <div className="gradient-overlay"></div>
            </div>
        </>
    );
}

export default HomeHeroSection;
