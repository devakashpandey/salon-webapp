"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Heart, Shield, Users } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Content */}
                    <div className="order-2 lg:order-1 text-left">
                        <Badge variant="outline" className="mb-6 rounded-full px-5 py-2 border-primary/20 bg-primary/5 text-primary text-xs tracking-widest uppercase font-bold">
                            Our Story
                        </Badge>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Crafting <span className="text-gold-gradient">Masterpieces</span> <br />
                            Since 2008
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 font-medium italic font-elegant">
                            "Luxe is not just a salon, it's a sanctuary where your natural beauty
                            is enhanced through art and science."
                        </p>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 font-medium">
                            What started as a single small studio in Bangalore has grown into
                            multiple locations across India. Our journey began with a simple
                            vision: to create a space where beauty meets luxury, and every
                            client feels like royalty.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {[
                                { icon: Shield, title: "Hygiene First", desc: "100% sanitized tools & environment" },
                                { icon: Heart, title: "Premium Products", desc: "Only international luxury brands" },
                                { icon: Users, title: "Expert Staff", desc: "Global certified professionals" },
                                { icon: Check, title: "Unisex Focus", desc: "Dedicated zones for everyone" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                            <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-base mb-1">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground font-semibold">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <Separator className="mb-8 bg-primary/20" />

                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden relative shadow-lg bg-primary/20 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <span className="text-sm font-bold block text-foreground">120+ Expert Stylists</span>
                                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Across Bangalore & Mumbai</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visuals */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative aspect-4/3 rounded-4xl overflow-hidden shadow-2xl z-20 border-8 border-background/20 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(196,160,93,0.3)]">
                                <Image
                                    src="/images/about.png"
                                    alt="Our Salon Interior"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                                <Separator className="w-24 mx-auto mt-6 bg-linear-to-r from-transparent via-primary to-transparent" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                                {/* Floating Badge */}
                                <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center animate-bounce-slow">
                                    <span className="text-4xl font-display font-bold text-gold-gradient block">15+</span>
                                    <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-bold">Years of Trust</span>
                                </div>
                            </div>

                            {/* Back Image */}
                            <div className="absolute -bottom-12 -left-12 w-2/3 aspect-square rounded-4xl overflow-hidden shadow-2xl z-10 border-8 border-background transition-all duration-500 hover:shadow-[0_10px_30px_rgba(196,160,93,0.2)]">
                                <Image
                                    src="/images/makeup.png"
                                    alt="Styling in progress"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-dark/20 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
