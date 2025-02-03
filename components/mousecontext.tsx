"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";


type TransformAxes = {
    x: number;
    y: number;
};

export type MouseContextType = {
    lightTransform: TransformAxes;
    darkTransform: TransformAxes;
};


export const MouseContext = createContext<MouseContextType>({
    lightTransform: { x: 0, y: 0 },
    darkTransform: { x: 0, y: 0 },
});


export const MouseProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const [lightTransform, setLightTransform] = useState<TransformAxes>({ x: 0, y: 0 });
    const [darkTransform, setDarkTransform] = useState<TransformAxes>({ x: 0, y: 0 });
    const [introDone, setIntroDone] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const introtimer = setTimeout(() => setIntroDone(true), 2000);
        return () => clearTimeout(introtimer);
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - left;  // Mouse X relative to the container
        const mouseY = e.clientY - top;   // Mouse Y relative to the container

        const ratioX = mouseX / width;  // Value between 0 (left) and 1 (right)
        const ratioY = mouseY / height; // Value between 0 (top) and 1 (bottom)

        const maxTranslateX = 26;  // Max horizontal translation (px)
        const maxTranslateY = 26;  // Max vertical translation (px)

        // Adjusting translation for light patterns
        const lightX = (0.5 - ratioX) * maxTranslateX;
        const lightY = (0.5 - ratioY) * maxTranslateY;

        // Adjusting translation for dark patterns (opposite direction)
        const darkX = (ratioX - 0.5) * maxTranslateX;
        const darkY = (ratioY - 0.5) * maxTranslateY;

        setLightTransform({ x: lightX, y: lightY });
        setDarkTransform({ x: darkX, y: darkY });
    };

    return (
        <MouseContext.Provider value={{
            lightTransform,
            darkTransform,
        }}
        >
            <div
                ref={containerRef}
                onMouseMove={introDone ? handleMouseMove : undefined}
                className="w-full"
            >
                {children}
            </div>
        </MouseContext.Provider>
    );
}

export const useCursorForTranslating = () => useContext(MouseContext);
