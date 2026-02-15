"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Search, Scissors, Sparkles, Crown, Palette, Hand, Star, X } from "lucide-react";

const categories = [
    { id: "all", label: "All Styles", icon: Star },
    { id: "hair", label: "Hair", icon: Scissors },
    { id: "skin", label: "Skin", icon: Sparkles },
    { id: "bridal", label: "Bridal", icon: Crown },
    { id: "nails", label: "Nails", icon: Palette },
    { id: "spa", label: "Spa", icon: Hand },
    { id: "grooming", label: "Men", icon: Scissors },
];

const galleryItems = [
    { id: 1, category: "hair", image: "/images/haircut.png", title: "Signature Blow Dry" },
    { id: 2, category: "bridal", image: "/images/makeup.png", title: "Royal Bridal Look" },
    { id: 3, category: "skin", image: "/images/skincare.png", title: "Hydra Glow Facial" },
    { id: 4, category: "hair", image: "/images/hair-color.png", title: "Global Hair Color" },
    { id: 5, category: "nails", image: "/images/nails.png", title: "Creative Nail Art" },
    { id: 6, category: "grooming", image: "/images/beard.png", title: "Precision Beard Trim" },
    { id: 7, category: "spa", image: "/images/spa.png", title: "Full Body Polish" },
    { id: 8, category: "bridal", image: "/images/wedding.png", title: "Pre-Bridal Glow" },
    { id: 9, category: "hair", image: "/images/hair-style.png", title: "Mens Trendy Cut" },
];

export default function Gallery() {
    const [filter, setFilter] = useState("all");

    const filteredItems =
        filter === "all"
            ? galleryItems
            : galleryItems.filter(item => item.category === filter);

    return (
        <section id="gallery" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <Badge variant="outline" className="mb-4 rounded-full px-5 py-2 border-primary/20 bg-primary/10 text-primary text-xs tracking-widest uppercase font-black">
                        The Lookbook
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-6">
                        Squad <span className="text-primary">Masterpieces</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-bold">
                        Check out some of our coolest hair flips and glow-ups!
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                variant={filter === cat.id ? "default" : "outline"}
                                className={`rounded-2xl px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-500 cursor-pointer ${filter === cat.id
                                    ? "bg-primary text-primary-foreground shadow-[0_10px_25px_rgba(0,201,167,0.4)] scale-105 rotate-2"
                                    : "bg-white dark:bg-card/50 border-primary/10 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                                    }`}
                            >
                                <Icon className="w-4 h-4 mr-2" />
                                <span className="inline-block">{cat.label}</span>
                            </Button>
                        );
                    })}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {filteredItems.map((item) => (
                        <Dialog key={item.id}>
                            <DialogTrigger asChild>
                                <div className="group relative aspect-3/4 rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(0,201,167,0.3)] transition-all duration-500 border-8 border-white dark:border-white/5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                        <div className="w-20 h-20 rounded-3xl bg-white/95 flex items-center justify-center mb-6 shadow-2xl backdrop-blur-sm rotate-6">
                                            <Search className="w-8 h-8 text-primary" />
                                        </div>
                                        <h4 className="text-white text-3xl font-display font-black mb-2 text-center">{item.title}</h4>
                                        <Badge variant="secondary" className="bg-white/20 text-white border-none font-black text-[10px] tracking-[0.2em] uppercase">{item.category}</Badge>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-2xl border-primary/20 shadow-2xl rounded-[3rem]">
                                <DialogHeader className="sr-only">
                                    <DialogTitle>{item.title}</DialogTitle>
                                </DialogHeader>
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute bottom-10 left-10 md:bottom-12 md:left-12 z-10 p-8 bg-white/90 dark:bg-card/90 backdrop-blur-md rounded-3xl border border-primary/10 shadow-2xl">
                                        <Badge variant="outline" className="text-primary text-[10px] uppercase tracking-[0.3em] font-black mb-2 border-primary/20">{item.category}</Badge>
                                        <h3 className="text-foreground text-2xl md:text-4xl font-display font-black">{item.title}</h3>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

            </div>
        </section>
    );
}
