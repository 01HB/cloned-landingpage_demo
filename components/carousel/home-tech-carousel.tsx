"use client";

import 'swiper/css/bundle';
import Image from "next/image";
import { homecarousel1Type } from "@/data/homecarousel1";


export const HomeTechSlide = ({ slideimgsrc, title, heading, body_bold, body }: homecarousel1Type) => {
    return (
        <article className="grid grid-cols-1 lg:grid-cols-2 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
            <section className="lg:space-y-8 space-y-6">
                <header className="lg:space-y-8 space-y-4">
                    <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-montserrat">
                        {title}
                    </h6>
                    <h3 className="text-blue-text text-res-head-3 lg:text-head-3 font-montserrat">
                        {heading}
                    </h3>
                </header>
                <figure className="relative md:hidden h-[150px]">
                    <Image
                        src={slideimgsrc}
                        alt="Customer Focused"
                        width={3672}
                        height={2712}
                        draggable="false"
                        sizes="max-width(768px) 90vw, 0px"
                        className="h-full w-full object-cover rounded-[8px]"
                    />
                </figure>
                <div>
                    <div className="text-body-1 md:text-[16px]">
                        <p className="font-bold">
                            {body_bold}
                        </p>
                    </div>
                    <div className="text-body-1 md:text-[16px]">
                        <p>
                            <br />{body}
                        </p>
                    </div>
                </div>
            </section>
            <figure className="relative hidden md:block h-[425px]">
                <Image
                    src={slideimgsrc}
                    alt="Customer Focused"
                    width={3672}
                    height={2712}
                    draggable="false"
                    sizes="35vw"
                    className="h-full w-full object-cover rounded-[16px]"
                />
            </figure>
        </article>
    );
}

