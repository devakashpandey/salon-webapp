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
                        <Badge variant="outline" className="mb-6 rounded-full px-5 py-2 border-primary/20 bg-primary/10 text-primary text-xs tracking-widest uppercase font-black">
                            Our Vibe
                        </Badge>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Spreading <span className="text-primary">Good Vibes</span> <br />
                            Since 2008
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 font-bold italic">
                            &ldquo;We don&apos;t just style hair, we boost your confidence and make your day a whole lot brighter!&rdquo;
                        </p>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 font-bold">
                            What started as a tiny studio in Bangalore has exploded into
                            a community of trendsetters. We&apos;re here to give you that perfect glow-up
                            while hanging out in the most colorful, fun spot in town.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {[
                                { icon: Shield, title: "Super Clean", desc: "Shiny tools & happy space" },
                                { icon: Heart, title: "Top Quality", desc: "Only the best for our squad" },
                                { icon: Users, title: "Trendsetters", desc: "Expert stylists who get you" },
                                { icon: Check, title: "All Are Welcome", desc: "Unisex gear for everyone" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-500 shadow-sm">
                                            <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-base mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <Separator className="mb-8 bg-primary/20 h-0.5 rounded-full" />

                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-14 h-14 rounded-2xl border-4 border-white overflow-hidden relative shadow-lg bg-primary/20 flex items-center justify-center">
                                        <Users className="w-7 h-7 text-primary" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <span className="text-sm font-black block text-foreground tracking-tight">120+ Style Icons</span>
                                <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Rocking Bangalore & Mumbai</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visuals */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative aspect-4/3 rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-white dark:border-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,201,167,0.3)] group">
                                <Image
                                    src="/images/about.png"
                                    alt="Our Salon Interior"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Floating Badge */}
                                <div className="absolute top-8 right-8 bg-white/90 dark:bg-card/90 backdrop-blur-md rounded-[2rem] p-8 text-center shadow-2xl border border-primary/10 rotate-6 hover:rotate-0 transition-transform duration-500">
                                    <span className="text-5xl font-display font-black text-primary block mb-1">15+</span>
                                    <span className="text-[10px] text-primary uppercase tracking-[0.3em] font-black">Years of Love</span>
                                </div>
                            </div>

                            {/* Back Image */}
                            <div className="absolute -bottom-12 -left-12 w-2/3 aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-8 border-white dark:border-white/10 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,201,167,0.2)] group/back">
                                <Image
                                    src="/images/makeup.png"
                                    alt="Styling in progress"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover/back:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/back:opacity-100 transition-opacity" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-teal/20 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
