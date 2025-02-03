import FutureOfFinanceClientComp from "./future-of-finance-rcc";

const FutureOfFinanceSection = () => {
    return (
        <>
            <section className="container min-[480px]:max-md:max-w-[480px] min-[976px]:max-lg:max-w-none min-[1200px]:max-w-[1200px]">
                <header className="md:space-y-6 space-y-4 text-center">
                    <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-montserrat">TECHNOLOGY BUILT FOR YOU</h6>
                    <h2 className="whitespace-pre-line font-montserrat text-res-head-2 text-blue-text lg:text-head-2">The future of finance</h2>
                </header>
                <FutureOfFinanceClientComp />
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
                        fill="url(#paint0_linear_6055_471)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6055_471"
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

export default FutureOfFinanceSection;
