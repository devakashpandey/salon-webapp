"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
    Scissors, Sparkles, Crown, Palette, Hand, Star, ArrowRight,
} from "lucide-react";

const services = [
    {
        id: "hair",
        title: "Hair Styling",
        subtitle: "Cut • Color • Style",
        description:
            "From trendy cuts to stunning color transformations, our master stylists create looks that turn heads. Premium products, personalized consultations.",
        image: "/images/haircut.png",
        icon: Scissors,
        features: [
            "Women's & Men's Haircuts",
            "Hair Coloring & Highlights",
            "Hair Straightening & Keratin",
            "Hair Spa & Treatments",
            "Blow Dry & Styling",
        ],
        startingPrice: "₹299",
    },
    {
        id: "skin",
        title: "Skin & Facial",
        subtitle: "Glow • Rejuvenate • Shine",
        description:
            "Achieve radiant, flawless skin with our advanced facial treatments and skincare therapies. Customized solutions for every skin type.",
        image: "/images/skincare.png",
        icon: Sparkles,
        features: [
            "Premium Facials",
            "De-Tan & Bleach Treatments",
            "Chemical Peels",
            "Anti-Ageing Therapies",
            "Clean Up & Brightening",
        ],
        startingPrice: "₹499",
    },
    {
        id: "bridal",
        title: "Bridal & Makeup",
        subtitle: "Elegant • Timeless • Perfect",
        description:
            "Your special day deserves the best. Our bridal experts create enchanting looks that complement your style and make you feel like royalty.",
        image: "/images/makeup.png",
        icon: Crown,
        features: [
            "Bridal Makeup",
            "Party & Event Makeup",
            "Pre-Bridal Packages",
            "Groom Grooming",
            "Mehendi & Draping",
        ],
        startingPrice: "₹2,999",
    },
    {
        id: "nails",
        title: "Nail Art & Care",
        subtitle: "Design • Polish • Perfect",
        description:
            "Express yourself through stunning nail art. From classic manicures to intricate designs, we craft nail masterpieces.",
        image: "/images/nails.png",
        icon: Palette,
        features: [
            "Gel & Acrylic Nails",
            "Nail Extensions",
            "Creative Nail Art",
            "Manicure & Pedicure",
            "French & Chrome Nails",
        ],
        startingPrice: "₹399",
    },
    {
        id: "spa",
        title: "Spa & Wellness",
        subtitle: "Relax • Restore • Renew",
        description:
            "Escape into tranquility with our luxurious spa treatments. Rejuvenate your body and mind in our serene wellness sanctuary.",
        image: "/images/spa.png",
        icon: Hand,
        features: [
            "Body Massage & Therapy",
            "Hot Stone Treatment",
            "Aromatherapy",
            "Body Polishing",
            "Relaxation Packages",
        ],
        startingPrice: "₹799",
    },
    {
        id: "beard",
        title: "Beard & Grooming",
        subtitle: "Shape • Define • Perfect",
        description:
            "Expert grooming for the modern man. Precision beard styling, clean shaves, and grooming treatments that define your look.",
        image: "/images/beard.png",
        icon: Star,
        features: [
            "Beard Shaping & Styling",
            "Hot Towel Shave",
            "Beard Coloring",
            "Face Clean Up for Men",
            "Grooming Packages",
        ],
        startingPrice: "₹199",
    },
];

export default function Services() {
    const [activeTab, setActiveTab] = useState("hair");

    return (
        <section id="services" className="section-padding relative overflow-hidden bg-background">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="pt-12 text-center">
                    <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 border-primary/30 bg-primary/5 text-primary text-xs tracking-[0.2em] uppercase font-bold">
                        What We Offer
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                        Our <span className="text-gold-gradient">Premium</span> Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Discover a world of beauty and wellness with our curated range of
                        services designed for both men and women.
                    </p>
                    <Separator className="w-24 mx-auto mt-8 bg-linear-to-r from-transparent via-primary to-transparent" />
                </div>

                {/* Service Tabs */}
                <Tabs defaultValue="hair" className="w-full" onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-10">
                        <TabsList className="flex flex-wrap h-auto p-1 bg-secondary/50 border border-border/50 rounded-full gap-1">
                            {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <TabsTrigger
                                        key={service.id}
                                        value={service.id}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg bg-transparent text-muted-foreground hover:text-primary rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2"
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{service.title}</span>
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>

                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <TabsContent key={service.id} value={service.id} className="mt-0 outline-none animate-in fade-in zoom-in-95 duration-500">
                                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                    {/* Image Side */}
                                    <div className="relative group">
                                        <div className="relative aspect-4/3 rounded-4xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(196,160,93,0.3)]">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60" />

                                            {/* Floating Price Badge */}
                                            <Card className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-xl border-primary/20 rounded-2xl p-5 shadow-2xl">
                                                <span className="text-xs text-muted-foreground block uppercase tracking-widest font-bold mb-1">Starting from</span>
                                                <span className="text-3xl font-display font-bold text-primary">
                                                    {service.startingPrice}
                                                </span>
                                            </Card>
                                        </div>
                                        {/* Decorative Frame */}
                                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl -z-10" />
                                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/40 rounded-br-3xl -z-10" />
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex flex-col items-start text-left">
                                        <Badge variant="outline" className="mb-6 rounded-full px-5 py-2 border-primary/20 bg-primary/5 text-primary text-xs tracking-widest uppercase font-bold flex items-center gap-2">
                                            <Icon className="w-4 h-4" />
                                            {service.subtitle}
                                        </Badge>

                                        <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
                                            {service.title}
                                        </h3>

                                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 font-medium">
                                            {service.description}
                                        </p>

                                        {/* Features Grid */}
                                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 w-full">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-4 group">
                                                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                                    <span className="text-foreground/90 font-semibold text-base">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-5 w-full">
                                            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-widest uppercase text-xs font-black px-10 h-16 shadow-[0_10px_30px_rgb(var(--primary)/0.3)] flex-1 sm:flex-none">
                                                <a href="#booking">
                                                    Book This Service
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </a>
                                            </Button>
                                            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none tracking-widest uppercase text-xs font-black px-10 h-16 flex-1 sm:flex-none">
                                                <a href="#pricing">View Full Pricing</a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>

                {/* Quick Access Categories */}
                <div className="mt-20">
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-center">Explore All Categories</h3>
                    <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={service.id}
                                className={`relative rounded-2xl p-6 text-center cursor-pointer transition-all duration-500 overflow-hidden group border-border shadow-none ${activeTab === service.id ? "bg-primary/5 border-primary/40 ring-1 ring-primary/20" : "bg-card/50 hover:bg-card hover:border-primary/20 hover:-translate-y-2"}`}
                                onClick={() => {
                                    setActiveTab(service.id);
                                    document.querySelector(`[value="${service.id}"]`)?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                                }}
                            >
                                <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 ${activeTab === service.id ? "bg-primary text-primary-foreground rotate-6" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 shadow-sm"}`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <span className="text-base font-bold block mb-2">{service.title}</span>
                                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                                    From {service.startingPrice}
                                </span>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
