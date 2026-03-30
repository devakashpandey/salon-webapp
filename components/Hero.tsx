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
                    src="/images/hero-ultra-premium.png"
                    alt="Premium Luxury Salon"
                    fill
                    priority
                    className="object-cover scale-110"
                    sizes="100vw"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/20" />
            </div>

            <div className="container relative z-10 pt-32 pb-20 md:pt-0 md:pb-0">
                <div className="max-w-3xl">
                    <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 border-primary/30 bg-primary/20 text-white text-xs tracking-[0.2em] uppercase font-bold">
                        Premium Salon & Parlor
                    </Badge>

                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white text-balance">
                        Where <span className="text-gold-gradient">Beauty</span>
                        <br />
                        Meets <span className="italic font-elegant font-medium text-white/90">Luxury</span>
                    </h1>

                    <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl font-medium">
                        Experience world-class hair, skin, nail & spa services crafted by
                        120+ expert professionals using premium international products.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-widest uppercase text-[10px] font-bold px-8 h-12 shadow-primary/30 border-none">
                            <a href="#booking" className="flex items-center gap-2">
                                Book Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-black rounded-none tracking-widest uppercase text-sm font-bold px-10 h-14 bg-transparent">
                            <a href="#services">Explore Services</a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10 border-l-2 border-primary/30 pl-6">
                        <div>
                            <span className="text-2xl md:text-3xl font-display font-bold text-primary block">15+</span>
                            <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider font-semibold">Years of Excellence</span>
                        </div>
                        <div>
                            <span className="text-2xl md:text-3xl font-display font-bold text-primary block">50K+</span>
                            <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider font-semibold">Happy Clients</span>
                        </div>
                        <div>
                            <span className="text-2xl md:text-3xl font-display font-bold text-primary block">4.9★</span>
                            <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider font-semibold">Google Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block border-t border-border bg-background/80 backdrop-blur-xl">
                <div className="container py-6">
                    <div className="flex justify-between items-center text-sm font-medium">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Premium Boulevard, MG Road, Bangalore</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-muted-foreground">Open Daily: 9AM – 9PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-primary fill-primary" />
                                <span className="text-muted-foreground">4.9 Rating (2K+ Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
