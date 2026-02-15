"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scissors, Sparkles, Wand2 } from "lucide-react";

const transformations = [
    {
        id: 1,
        title: "Signature Haircut",
        category: "Hair Styling",
        before: "/images/haircut_before.png",
        after: "/images/haircut_after.png",
        description: "Modern textured crop with a seamless fade. Perfectly tailored to face shape."
    },
    {
        id: 2,
        title: "Radiant Glow Facial",
        category: "Skin Care",
        before: "/images/facial_before.png",
        after: "/images/facial_after.png",
        description: "Deep hydration and brightening treatment for a naturally luminous skin tone."
    },
    {
        id: 3,
        title: "Color Transformation",
        category: "Hair Color",
        before: "/images/color_before.png",
        after: "/images/color_after.png",
        description: "From dull copper to premium ash blonde balayage with high-shine finish."
    }
];

export default function Transformations() {
    const [sliderPos, setSliderPos] = useState(50);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const relativeX = x - rect.left;
        const percent = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
        setSliderPos(percent);
    };

    return (
        <section id="transformations" className="section-padding bg-background relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <Badge variant="outline" className="mb-4 rounded-full px-5 py-2 border-primary/20 bg-primary/10 text-primary text-xs tracking-widest uppercase font-black">
                            Real Magic
                        </Badge>
                        <h2 className="font-display text-4xl md:text-6xl font-black">
                            Major <span className="text-primary">Glow-Ups</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-md text-lg font-bold">
                        Check out these epic transformations! Our squad knows how to bring the fire.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* List Side */}
                    <div className="lg:col-span-4 space-y-4">
                        {transformations.map((t, idx) => (
                            <button
                                key={t.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-500 group cursor-pointer ${activeIndex === idx
                                    ? "bg-primary/10 border-primary shadow-xl ring-2 ring-primary/20 scale-105"
                                    : "bg-white dark:bg-card/50 border-primary/5 hover:border-primary/20"
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-3 rounded-2xl transition-all duration-500 ${activeIndex === idx ? "bg-primary text-primary-foreground rotate-12" : "bg-primary/20 text-primary group-hover:rotate-12"}`}>
                                        {idx === 0 ? <Scissors className="w-5 h-5" /> : idx === 1 ? <Sparkles className="w-5 h-5" /> : <Wand2 className="w-5 h-5" />}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.category}</span>
                                </div>
                                <h3 className={`text-xl font-black mb-2 transition-colors ${activeIndex === idx ? "text-primary" : "text-foreground"}`}>{t.title}</h3>
                                <p className="text-sm text-muted-foreground font-bold line-clamp-2">{t.description}</p>
                            </button>
                        ))}
                    </div>

                    {/* Slider Side */}
                    <div className="lg:col-span-8">
                        <div
                            ref={containerRef}
                            className="relative aspect-video rounded-4xl md:rounded-[3rem] overflow-hidden cursor-ew-resize shadow-2xl border border-border group"
                            onMouseMove={handleMove}
                            onTouchMove={handleMove}
                        >
                            {/* After Image */}
                            <img
                                src={transformations[activeIndex].after}
                                alt="After"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Before Image (Clipped) */}
                            <div
                                className="absolute inset-0 w-full h-full overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                            >
                                <img
                                    src={transformations[activeIndex].before}
                                    alt="Before"
                                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>

                            {/* Slider Line */}
                            <div
                                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                                style={{ left: `${sliderPos}%` }}
                            >
                                <div className="w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-primary">
                                    <div className="flex gap-1">
                                        <div className="w-0.5 h-4 bg-primary/30 rounded-full" />
                                        <div className="w-0.5 h-4 bg-primary/30 rounded-full" />
                                    </div>
                                </div>

                                <Badge className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border-white/20 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                    Slide to Compare
                                </Badge>
                            </div>

                            {/* Badges */}
                            <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-[10px] uppercase font-black tracking-widest">
                                Before
                            </div>
                            <div className="absolute bottom-8 right-8 bg-primary/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white text-[10px] uppercase font-black tracking-widest">
                                After
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[150px] -z-10" />
        </section>
    );
}
