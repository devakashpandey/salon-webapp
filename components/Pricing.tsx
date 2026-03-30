"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Scissors, Sparkles, Hand, Crown, ArrowRight, Clock } from "lucide-react";

interface PricingItem {
    name: string;
    price: string;
    duration: string;
}

interface PricingCategory {
    id: string;
    title: string;
    icon: typeof Scissors;
    items: PricingItem[];
}

const pricingData: PricingCategory[] = [
    {
        id: "hair",
        title: "Hair Services",
        icon: Scissors,
        items: [
            { name: "Women's Haircut & Styling", price: "₹499", duration: "45 min" },
            { name: "Men's Haircut", price: "₹299", duration: "30 min" },
            { name: "Hair Coloring (Global)", price: "₹2,499", duration: "120 min" },
            { name: "Hair Highlights", price: "₹1,999", duration: "90 min" },
            { name: "Hair Straightening / Keratin", price: "₹3,999", duration: "180 min" },
            { name: "Hair Spa Treatment", price: "₹999", duration: "60 min" },
            { name: "Root Touch-Up", price: "₹799", duration: "45 min" },
            { name: "Blow Dry & Styling", price: "₹599", duration: "30 min" },
        ],
    },
    {
        id: "skin",
        title: "Skin & Facial",
        icon: Sparkles,
        items: [
            { name: "Classic Clean-Up", price: "₹499", duration: "30 min" },
            { name: "Premium Gold Facial", price: "₹1,499", duration: "60 min" },
            { name: "De-Tan Treatment", price: "₹699", duration: "45 min" },
            { name: "Vitamin C Facial", price: "₹1,299", duration: "60 min" },
            { name: "Anti-Ageing Facial", price: "₹1,999", duration: "75 min" },
            { name: "Chemical Peel", price: "₹2,499", duration: "45 min" },
            { name: "Bleach Treatment", price: "₹399", duration: "20 min" },
            { name: "Charcoal Face Mask", price: "₹599", duration: "30 min" },
        ],
    },
    {
        id: "spa",
        title: "Spa & Wellness",
        icon: Hand,
        items: [
            { name: "Swedish Massage", price: "₹1,499", duration: "60 min" },
            { name: "Deep Tissue Massage", price: "₹1,999", duration: "60 min" },
            { name: "Hot Stone Therapy", price: "₹2,499", duration: "75 min" },
            { name: "Aromatherapy Massage", price: "₹1,799", duration: "60 min" },
            { name: "Body Polishing", price: "₹2,999", duration: "90 min" },
            { name: "Manicure (Classic)", price: "₹399", duration: "30 min" },
            { name: "Pedicure (Premium)", price: "₹699", duration: "45 min" },
            { name: "Full Body Waxing", price: "₹1,999", duration: "60 min" },
        ],
    },
    {
        id: "bridal",
        title: "Bridal & Makeup",
        icon: Crown,
        items: [
            { name: "Party Makeup", price: "₹2,999", duration: "60 min" },
            { name: "HD Bridal Makeup", price: "₹14,999", duration: "180 min" },
            { name: "Airbrush Bridal Makeup", price: "₹19,999", duration: "180 min" },
            { name: "Pre-Bridal Package", price: "₹9,999", duration: "Full Day" },
            { name: "Groom Grooming Package", price: "₹4,999", duration: "120 min" },
            { name: "Engagement Makeup", price: "₹7,999", duration: "120 min" },
            { name: "Mehendi Night Makeup", price: "₹5,999", duration: "90 min" },
            { name: "Saree Draping", price: "₹999", duration: "30 min" },
        ],
    },
];

const packages = [
    {
        name: "Classic",
        price: "₹1,999",
        description: "Perfect for a quick refresh",
        features: [
            "Haircut & Styling",
            "Basic Facial Clean-Up",
            "Threading (Eyebrows)",
            "10% Off on next visit",
        ],
        highlighted: false,
    },
    {
        name: "Premium",
        price: "₹4,999",
        description: "Complete beauty transformation",
        features: [
            "Haircut & Hair Spa",
            "Premium Gold Facial",
            "Full Body Waxing",
            "Manicure & Pedicure",
            "Threading & Bleach",
            "20% Off on next visit",
        ],
        highlighted: true,
    },
    {
        name: "Bridal",
        price: "₹24,999",
        description: "For your special day",
        features: [
            "HD Bridal Makeup",
            "Pre-Bridal Skin Treatment",
            "Hair Styling & Setting",
            "Mehendi Night Makeup",
            "Full Body Polishing",
            "Saree Draping",
            "Groom Basic Grooming",
            "30% Off for family",
        ],
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <Badge variant="outline" className="mb-2 rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary text-[10px] tracking-widest uppercase font-bold">
                        Transparent Pricing
                    </Badge>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mt-1 mb-2 text-center">
                        Our <span className="text-gold-gradient">Pricing</span>
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto font-medium opacity-80">
                        Premium quality services at competitive prices. No hidden charges.
                    </p>
                </div>

                {/* Pricing Tabs */}
                <div className="mb-12">
                    <Tabs defaultValue="hair" className="w-full">
                        <div className="flex justify-center mb-10">
                            <TabsList className="flex flex-wrap h-auto p-1 bg-secondary/50 border border-border/50 rounded-full gap-1">
                                {pricingData.map((cat) => {
                                    const Icon = cat.icon;
                                    return (
                                        <TabsTrigger
                                            key={cat.id}
                                            value={cat.id}
                                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-transparent text-muted-foreground hover:text-primary rounded-full px-8 py-3 text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {cat.title}
                                        </TabsTrigger>
                                    );
                                })}
                            </TabsList>
                        </div>

                        {pricingData.map((cat) => (
                            <TabsContent key={cat.id} value={cat.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500 outline-none">
                                <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-4">
                                    {cat.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between py-2 px-6 rounded-2xl bg-card/40 border border-border/10 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 group shadow-sm hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                                    <cat.icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <span className="text-base font-bold text-foreground block mb-0.5 group-hover:text-primary transition-colors">{item.name}</span>
                                                    <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest flex items-center gap-2">
                                                        <Clock className="w-2.5 h-2.5 text-primary/60" />
                                                        {item.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="text-right">
                                                    <span className="text-xl font-display font-bold text-gold-gradient block">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                <Button asChild size="sm" variant="ghost" className="hidden sm:flex text-primary hover:text-primary-foreground hover:bg-primary font-bold uppercase tracking-[0.2em] text-[9px] rounded-full px-4 h-8 border border-primary/20">
                                                    <a href="#booking">Book</a>
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>

                {/* Packages */}
                <div className="pt-8 text-center">
                    <div className="mb-8">
                        <Badge variant="outline" className="mb-2 rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary text-[10px] tracking-widest uppercase font-bold">
                            Exclusive Offers
                        </Badge>
                        <h3 className="font-display text-3xl md:text-5xl font-bold mb-3">
                            Special <span className="text-gold-gradient">Packages</span>
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground mb-7 max-w-xl mx-auto font-medium">
                            Premium artisanal sets for your complete parlor and salon experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 items-stretch max-w-7xl mx-auto">
                        {packages.map((pkg) => (
                            <Card
                                key={pkg.name}
                                className={`relative rounded-3xl p-6 transition-all duration-700 flex flex-col items-center text-center shadow-none border border-border/10 ${pkg.highlighted
                                    ? "bg-card shadow-primary/20 ring-1 ring-primary/30 scale-105 z-10"
                                    : "bg-card/40 border-border/20 hover:border-primary/30 hover:shadow-xl hover:bg-card/80"
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <Badge className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground tracking-[0.3em] uppercase text-xs font-black px-8 py-3 rounded-full shadow-2xl border-none">
                                        Best Value
                                    </Badge>
                                )}

                                <div className="mb-4">
                                    <h4 className="font-display text-2xl md:text-3xl font-bold mb-3">{pkg.name}</h4>
                                    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.2em]">{pkg.description}</p>
                                </div>

                                <div className="mb-4 flex flex-col border-y border-primary/10 w-full py-4">
                                    <span className="text-4xl md:text-5xl font-display font-bold text-gold-gradient leading-none">
                                        {pkg.price}
                                    </span>
                                    <span className="text-muted-foreground text-[8px] uppercase tracking-[0.3em] font-bold mt-2">All-Inclusive Set</span>
                                </div>

                                <ul className="space-y-2 mb-6 w-full text-left">
                                    {pkg.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs font-semibold text-foreground/90 group/li">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/li:bg-primary transition-colors">
                                                <Check className="w-2.5 h-2.5 text-primary group-hover/li:text-primary-foreground" />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    className={`mt-auto w-full h-14 rounded-none tracking-[0.3em] uppercase text-[10px] font-bold transition-all duration-500 cursor-pointer ${pkg.highlighted
                                        ? "bg-linear-to-br from-primary to-gold-dark text-primary-foreground shadow-2xl hover:scale-[1.02]"
                                        : "border-primary/40 border-2 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                        }`}
                                >
                                    <a href="#booking">Choose Experience</a>
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
