"use client";

import Link from "next/link";
import BottomBgPattern1 from "@/components/patterns/bottombgpattern1";
import { useCursorForTranslating } from "@/components/mousecontext";

const BottomSection = () => {

    const { lightTransform, darkTransform } = useCursorForTranslating();


    return (
        <section 
            className="z-0 md:z-20 relative h-[60vh] lg:h-[530px] w-full text-white overflow-hidden bg-no-repeat bg-cover bg-[radial-gradient(24.45%_88.58%_at_23.57%_2%,#00e9ea_0%,#1f80f0_52.08%,#005bc4_100%)] [clip-path:_polygon(0_0,_100%_14%,_100%_100%,_0%_100%)] xl:[clip-path:_polygon(0_0,_100%_49%,_100%_100%,_0%_100%)]"
        >
            <div className="relative z-10 flex flex-col w-full justify-center h-full mt-6 container min-[480px]:max-md:max-w-[480px] min-[976px]:max-lg:max-w-none min-[1200px]:max-w-[1200px] font-inter">
                <h2 className="font-montserrat text-res-head-2 lg:text-head-2 text-white font-[600] mb-[24px]">
                    Legacy no longer
                </h2>
                <p className="font-inter text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
                    Talk to us to find out how we can transform your organisation for the future
                </p>
                <div className="flex w-full lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0">
                    <Link href="#" className="flex items-center justify-center md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white space-x-[8px] bg-orange-main bg-opacity-100 group">
                        <span className="[transform:_translateX(var(--motion-translateX))] [--motion-translateX:_0px] group-hover:[--motion-translateX:_-2.5px] transition-[transform] duration-300 delay-[20ms] ease-[cubic-bezier(0.65, -0.6, 0.25, 1.6)]">
                            Contact Us
                        </span>

                        <svg width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="[transform:_translateX(var(--motion-translateX))] [--motion-translateX:_0px] group-hover:[--motion-translateX:_2.5px] transition-[transform] duration-300 ease-[cubic-bezier(0.65, -0.6, 0.25, 1.6)]"
                        >
                            <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                                fill="white"
                            >
                            </path>
                        </svg>
                    </Link>
                </div>
            </div>
            <BottomBgPattern1 lightPatternsTransform={lightTransform} darkPatternsTransform={darkTransform} />
        </section >
    );
}

export { BottomSection };
