"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return;
            const scrolled = window.scrollY;
            parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-background">
            {/* Background with Parallax */}
            <div ref={parallaxRef} className="absolute inset-0 z-0">
                <Image
                    src="/images/vibrant_salon_bg.png"
                    alt="Vibrant Fun Salon"
                    fill
                    priority
                    className="object-cover scale-110"
                    sizes="100vw"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="container relative z-10 pt-32 pb-20 md:pt-0 md:pb-0">
                <div className="max-w-3xl">
                    <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 border-primary/30 bg-primary/10 text-primary text-xs tracking-[0.2em] uppercase font-black">
                        Your Daily Dose of Style
                    </Badge>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 text-foreground">
                        Look <span className="text-primary">Fabulous</span>
                        <br />
                        Feel <span className="text-primary animate-pulse">Amazing!</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-bold">
                        Transform your look with our squad of 120+ expert stylists!
                        From wild colors to sharp cuts, we've got you covered.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl tracking-widest uppercase text-sm font-black px-10 h-16 shadow-[0_10px_30px_rgba(0,201,167,0.4)] border-none">
                            <a href="#booking" className="flex items-center gap-2">
                                Book Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 rounded-2xl tracking-widest uppercase text-sm font-black px-10 h-16 bg-transparent">
                            <a href="#services">See Our Magic</a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-3 gap-8 md:gap-12 border-l-4 border-primary/40 pl-8">
                        <div>
                            <span className="text-3xl md:text-5xl font-display font-black text-primary block mb-1">15+</span>
                            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">Years of Fun</span>
                        </div>
                        <div>
                            <span className="text-3xl md:text-5xl font-display font-black text-primary block mb-1">50K+</span>
                            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">Happy Fans</span>
                        </div>
                        <div>
                            <span className="text-3xl md:text-5xl font-display font-black text-primary block mb-1">4.9★</span>
                            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">Epic Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block border-t border-primary/10 bg-white/40 dark:bg-black/40 backdrop-blur-2xl">
                <div className="container py-8">
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-foreground">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <span className="opacity-80">Premium Boulevard, MG Road, Bangalore</span>
                        </div>
                        <div className="flex items-center gap-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <span className="opacity-80">Open Daily: 9AM – 9PM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Star className="w-5 h-5 text-primary fill-primary" />
                                </div>
                                <span className="opacity-80">4.9 Rating (2K+ Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
