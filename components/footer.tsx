import Image from "next/image";
import Link from "next/link";

import Applogo from "@/public/assets/applogo.svg";
import LinkedInIcon from "@/public/assets/icons/linkedIn.webp";
import TelephoneIcon from "@/public/assets/icons/phonecall.webp";
import MailIcon from "@/public/assets/icons/mail.webp";


const Footer = () => {
    return (
        <footer className="font-inter">
            <div className="bg-[#002045]">
                <div className="flex items-center justify-between py-11 container min-[480px]:max-md:max-w-[480px] min-[976px]:max-lg:max-w-none min-[1200px]:max-w-[1200px]">
                    <Link href="#" >
                        <picture className="relative flex items-stretch bg-cover">
                            <Image
                                src={Applogo}
                                alt="AnyTech"
                                quality={100}
                                width={200}
                                height={32}
                                draggable="false"
                                className="w-[217px] object-contain"
                            />
                        </picture>
                    </Link>
                    <div className="hidden lg:flex items-center text-[#00E9EA]">
                        <p className="border-r border-blue-dark px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">
                            Our Solutions
                        </p>
                        <ul className="flex items-center">
                            <li>
                                <Link href="#" className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1">
                                    AnyCaaS
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1">
                                    AnyBaaS
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1">
                                    AnyPaaS
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-6 lg:hidden">
                        <a href="#"
                            className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <picture className="relative flex items-stretch shrink-0">
                                <Image
                                    src={LinkedInIcon}
                                    alt="AnyTech LinkedIn"
                                    width={320}
                                    height={343}
                                    draggable="false"
                                    className="w-[24px] object-contain h-auto"
                                />
                            </picture>
                        </a>
                        <a href="#"
                            className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <picture className="relative flex items-stretch shrink-0">
                                <Image
                                    src={TelephoneIcon}
                                    alt="AnyTech Tel"
                                    width={320}
                                    height={339}
                                    draggable="false"
                                    className="w-[24px] object-contain h-auto"
                                />
                            </picture>
                        </a>
                        <a href="#"
                            className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <picture className="relative flex items-stretch shrink-0">
                                <Image
                                    src={MailIcon}
                                    alt="AnyTech Mail"
                                    width={320}
                                    height={240}
                                    draggable="false"
                                    className="w-[24px] object-contain h-auto"
                                />
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-b border-blue-dark"></div>
            <div className="bg-[#00152D]">
                <div className="container min-[480px]:max-md:max-w-[480px] min-[976px]:max-lg:max-w-none min-[1200px]:max-w-[1200px] flex flex-col lg:flex-row items-center justify-between py-6 text-res-body-p2 text-blue-main lg:text-body-p2">
                    <p>
                        <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
                    </p>
                    <div className="flex items-center gap-[14px] max-lg:mt-4">
                        <div>
                            <Link href="#" className="transition-colors duration-300 hover:text-blue-highlight">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
