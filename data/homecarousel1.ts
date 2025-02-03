import { StaticImageData } from "next/image";

import CustomerFocusedImg from "@/public/assets/future_of_finance/customer_focused.webp";
import AgileAndAdaptableImg from "@/public/assets/future_of_finance/agile_adaptable.webp";
import ComplianceReadyFocusedImg from "@/public/assets/future_of_finance/compliance_ready.webp";
import SecureAndSafeImg from "@/public/assets/future_of_finance/secure_safe.webp";

import philosophyCardIcon1 from "@/public/assets/philosophy/connect_50x50.svg";
import philosophyCardIcon2 from "@/public/assets/philosophy/bulb_50x51.png";
import philosophyCardIcon3 from "@/public/assets/philosophy/chip_50x50.svg";

export type homecarousel1Type = {
    slideimgsrc: StaticImageData | string;
    title: string;
    heading: string;
    body_bold: string;
    body: string;
}

export const home_Carousel_1: homecarousel1Type[] = [
    {
        slideimgsrc: CustomerFocusedImg,
        title: `Customer focused`,
        heading: `Purpose-built financial services`,
        body_bold: `Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.`,
        body: `Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.`,
    },
    {
        slideimgsrc: AgileAndAdaptableImg,
        title: `Agile and adaptable`,
        heading: `Agile and adaptable for growth`,
        body_bold: `Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.`,
        body: `Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.`,
    },
    {
        slideimgsrc: ComplianceReadyFocusedImg,
        title: `Compliance ready`,
        heading: `Manage compliance with ease`,
        body_bold: `Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.`,
        body: `Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.`,
    },
    {
        slideimgsrc: SecureAndSafeImg,
        title: `Secure and safe`,
        heading: `Highly secure and safe`,
        body_bold: `Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.`,
        body: `Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.`,
    },
];

export type homePhilosophyType = {
    slideimgsrc: StaticImageData | string;
    title: string;
    body: string;
}

export const home_philosophy: homePhilosophyType[] = [
    {
        slideimgsrc: philosophyCardIcon1,
        title: `Full-suite solutions`,
        body: `Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.`,
    },
    {
        slideimgsrc: philosophyCardIcon2,
        title: `Simplify the complex`,
        body: `Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.`,
    },
    {
        slideimgsrc: philosophyCardIcon3,
        title: `Cutting-edge tech`,
        body: `We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.`,
    },
];

