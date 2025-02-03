import localFont from "next/font/local";


export const inter_init = localFont({
    src: "./Inter-VariableFont_opsz,wght.ttf",
    display: "swap",
    style: "normal",
    weight: "100 200 300 400 500 600 700 800 900",
    variable: "--font-inter",
});

export const montserrat_init = localFont({
    src: "./Montserrat-VariableFont_wght.ttf",
    display: "swap",
    style: "normal",
    weight: "100 200 300 400 500 600 700 800 900",
    variable: "--font-montserrat",
});

export const inter = inter_init.variable;
export const montserrat = montserrat_init.variable;
