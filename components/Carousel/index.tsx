"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }: any) {

    const [slide, setSlide] = useState(0);

    const prev = () => setSlide((curr) => curr === 0 ? 0 : curr - 1);

    const next = () => setSlide((curr) => curr === slides.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(next, autoSlideInterval);
        // clean up interval on dismount 
        return () => clearInterval(slideInterval);
    }, [])

    return (
        <div className="overflow-hidden relative h-full">
            <div className="flex transition-transform ease-out duration-1000 h-full" style={{ transform: `translateX(-${slide * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className={"bg-white/80 w-8 h-8 rounded-full"}>
                    <i className="fa-solid fa-circle-chevron-left text-2xl"></i>
                </button>
                <button onClick={next} className={"bg-white/80 w-8 h-8 rounded-full"}>
                    <i className="fa-solid fa-circle-chevron-right text-2xl"></i>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_: any, i: number) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full
                        ${slide === i ? "p-2" : "opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}