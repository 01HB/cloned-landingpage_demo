"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import FemaleEmp from "@/public/assets/powering/female_employee.png";
import AnyBaaS from "@/public/assets/powering/anybaas.svg";
import AnyPaaS from "@/public/assets/powering/anypaas.svg";
import AnyCaaS from "@/public/assets/powering/anycaas.svg";
import FutureOfFinanceBg from "@/public/assets/powering/futureoffinance_background.svg";
import FutureOfFinanceFg from "@/public/assets/powering/futureoffinance_foreground.png";

const PoweringSection = () => {

    const { scrollY } = useScroll();
    const yRange = [25, 80, 1000];
    // translation from -20px to 20px
    const bgY_Transform = useTransform(scrollY, yRange, [0, -25, 25]);
    const fgY_Transform = useTransform(scrollY, [100, 1000], [5, -10]);
    // spring effect
    const smoothYBG = useSpring(bgY_Transform, { stiffness: 35, damping: 25 });
    const smoothYFG = useSpring(fgY_Transform, { stiffness: 35, damping: 25 });

    return (
        <>
            <section className="container min-[480px]:max-md:max-w-[480px] min-[976px]:max-lg:max-w-none min-[1200px]:max-w-[1200px] mt-[62px] font-inter">
                <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-[15px]">
                    <div className="space-y-4 md:space-y-6">
                        <h6 className="text-res-head-6 lg:text-head-6 uppercase text-blue-main font-montserrat">
                            POWERING THE FUTURE OF FINANCE
                        </h6>
                        <h2 className="whitespace-pre-line font-montserrat text-res-head-2 text-blue-text lg:text-head-2">
                            Uncovering new ways to delight customers
                        </h2>
                        <div className="relative !my-[60px] md:hidden block h-fit lg:text-clip">
                            <figure className="w-[76%] mx-auto [box-shadow:_0px_23px_30px_0px_#16437763]" >
                                <Image
                                    src={FemaleEmp}
                                    width={1124}
                                    height={1364}
                                    alt="POWERING THE FUTURE OF FINANCE"
                                    className="object-cover w-full h-full"
                                    sizes="(min-width: 1024px) 45vw, 95vw"
                                />
                            </figure>
                            <div>
                                <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl animate-floatinWindRight delay-[150ms]">
                                    <Image
                                        src={AnyBaaS}
                                        alt="anybaas"
                                        width={116}
                                        height={115}
                                        quality={100}
                                        draggable={false}
                                        sizes="115px"
                                        className="object-contain w-full h-full"
                                    />
                                </figure>

                                <figure
                                    className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl animate-floatinWind"
                                >
                                    <Image
                                        src={AnyPaaS}
                                        alt="anypaas"
                                        width={89}
                                        height={88}
                                        quality={100}
                                        draggable={false}
                                        sizes="87px"
                                        className="object-contain w-full h-full"
                                    />
                                </figure>

                                <figure
                                    className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl animate-floatinWindLeft delay-100"
                                >
                                    <Image
                                        src={AnyCaaS}
                                        alt="anycaas"
                                        width={74}
                                        height={75}
                                        quality={100}
                                        draggable={false}
                                        sizes="73px"
                                        className="object-contain w-full h-full"
                                    />
                                </figure>
                            </div>

                            <motion.figure className="absolute inset-0 w-full h-full -z-10"
                                style={{
                                    y: smoothYBG,
                                }}
                            >
                                <Image
                                    src={FutureOfFinanceBg}
                                    fill
                                    alt="background frame"
                                    className="object-cover w-full h-full overflow-visible"
                                />
                            </motion.figure>

                            <motion.figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                                style={{
                                    y: smoothYFG,
                                }}
                            >
                                <Image
                                    src={FutureOfFinanceFg}
                                    alt="foreground frame"
                                    fill
                                    className="object-cover w-full h-full overflow-visible"
                                />
                            </motion.figure>
                        </div>
                        <div className="lg:pt-2">
                            <div>
                                <div className="text-body-1 md:text-[16px]">
                                    <p className="font-bold">
                                        {`AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.`}
                                    </p>
                                </div>
                                <div className="text-body-1 md:text-[16px]">
                                    <p>
                                        <br />
                                        {`Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden md:block relative h-fit lg:text-clip">
                        <figure className="w-[76%] mx-auto [box-shadow:_0px_23px_30px_0px_#16437763]" >
                            <Image
                                src={FemaleEmp}
                                width={1124}
                                height={1364}
                                alt="POWERING THE FUTURE OF FINANCE"
                                className="object-cover w-full h-full"
                                sizes="(min-width: 1024px) 45vw, 95vw"
                            />
                        </figure>
                        <div>
                            <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl animate-floatinWindRight delay-150">
                                <Image
                                    src={AnyBaaS}
                                    alt="anybaas"
                                    width={116}
                                    height={115}
                                    quality={100}
                                    draggable={false}
                                    sizes="115px"
                                    className="object-contain w-full h-full"
                                />
                            </figure>

                            <figure
                                className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl animate-floatinWind"
                            >
                                <Image
                                    src={AnyPaaS}
                                    alt="anypaas"
                                    width={89}
                                    height={88}
                                    quality={100}
                                    draggable={false}
                                    sizes="87px"
                                    className="object-contain w-full h-full"
                                />
                            </figure>

                            <figure
                                className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl animate-floatinWindLeft delay-100"
                            >
                                <Image
                                    src={AnyCaaS}
                                    alt="anycaas"
                                    width={74}
                                    height={75}
                                    quality={100}
                                    draggable={false}
                                    sizes="73px"
                                    className="object-contain w-full h-full"
                                />
                            </figure>
                        </div>

                        <motion.figure className="absolute inset-0 w-full h-full -z-10"
                            style={{
                                y: smoothYBG,
                            }}
                        >
                            <Image
                                src={FutureOfFinanceBg}
                                fill
                                alt="background frame"
                                className="object-cover w-full h-full overflow-visible"
                            />
                        </motion.figure>

                        <motion.figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                            style={{
                                y: smoothYFG,
                            }}
                        >
                            <Image
                                src={FutureOfFinanceFg}
                                alt="foreground frame"
                                fill
                                className="object-cover w-full h-full overflow-visible"
                            />
                        </motion.figure>
                    </div>
                </div>
            </section>
            <section className="w-full">
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
                        fill="url(#paint0_linear_6055_471_poweringsection)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6055_471_poweringsection"
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

export default PoweringSection;
