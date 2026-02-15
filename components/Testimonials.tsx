"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Bridal Client",
        rating: 5,
        text: "My bridal makeup was absolutely stunning! The team at Luxe made me feel like a queen on my special day. Every detail was perfect, from the hair styling to the makeup. Highly recommended!",
        avatar: "PS",
    },
    {
        name: "Rahul Mehta",
        role: "Regular Client",
        rating: 5,
        text: "Best men's grooming experience in the city. The attention to detail in beard styling is unmatched. Premium products, skilled barbers, and the ambiance is top-notch. My go-to salon!",
        avatar: "RM",
    },
    {
        name: "Ananya Reddy",
        role: "Hair Transformation",
        rating: 5,
        text: "Got my hair colored and styled here and I'm absolutely in love with the results! The stylist understood exactly what I wanted and the hair spa treatment left my hair feeling incredible.",
        avatar: "AR",
    },
    {
        name: "Vikram Singh",
        role: "Spa Regular",
        rating: 5,
        text: "The spa treatments here are world-class. I visit monthly for the deep tissue massage and it's always a rejuvenating experience. The ambiance is so relaxing, you forget you're in the city.",
        avatar: "VS",
    },
    {
        name: "Meera Patel",
        role: "Nail Art Client",
        rating: 5,
        text: "The nail art designs here are absolutely gorgeous! My manicurist creates the most intricate and beautiful designs. The gel nails last for weeks without chipping. Love this place!",
        avatar: "MP",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding relative overflow-hidden bg-white/50 dark:bg-card/30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <Badge variant="outline" className="mb-4 rounded-full px-5 py-2 border-primary/20 bg-primary/10 text-primary text-xs tracking-[0.2em] uppercase font-black">
                        The Fan Club
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-6">
                        Squad <span className="text-primary">Shoutouts</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-bold">
                        Don&apos;t just take our word for it—see what the squad is saying!
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-5xl mx-auto px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((t, i) => (
                                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/1">
                                    <Card className="h-full bg-white/80 dark:bg-card/60 backdrop-blur-xl border-primary/5 rounded-[3rem] p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,201,167,0.2)] hover:border-primary/20 group">
                                        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform">
                                            <Quote className="w-12 h-12 text-primary opacity-20" />
                                        </div>

                                        <CardContent className="p-0 flex flex-col items-center text-center">
                                            <div className="flex gap-1 mb-8">
                                                {Array.from({ length: t.rating }).map((_, i) => (
                                                    <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                                                ))}
                                            </div>

                                            <p className="text-xl md:text-2xl text-foreground font-bold italic leading-relaxed mb-10">
                                                &ldquo;{t.text}&rdquo;
                                            </p>

                                            <div className="flex flex-col items-center">
                                                <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mb-4 transition-transform group-hover:rotate-12 shadow-inner">
                                                    <span className="text-2xl font-black text-primary">{t.avatar}</span>
                                                </div>
                                                <h4 className="text-xl font-black text-foreground">{t.name}</h4>
                                                <Badge variant="outline" className="mt-2 bg-primary/5 text-primary border-none font-black text-[10px] tracking-widest uppercase">{t.role}</Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="w-16 h-16 rounded-[1.5rem] border-primary/20 text-primary hover:bg-primary hover:text-white -left-20 shadow-xl transition-all" />
                            <CarouselNext className="w-16 h-16 rounded-[1.5rem] border-primary/20 text-primary hover:bg-primary hover:text-white -right-20 shadow-xl transition-all" />
                        </div>
                    </Carousel>
                </div>

                {/* Trust Bar */}
                <div className="mt-24 text-center">
                    <p className="text-[10px] text-primary mb-12 tracking-[0.4em] uppercase font-black bg-primary/5 w-fit mx-auto px-6 py-2 rounded-full">
                        LOVED BY THOUSANDS ACROSS THE MAP
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <div className="flex flex-col items-center group cursor-pointer">
                            <span className="text-2xl md:text-4xl font-display font-black group-hover:text-primary transition-colors">Google</span>
                            <span className="text-[10px] font-black tracking-widest text-primary mt-1">4.9 ★ RATING</span>
                        </div>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <span className="text-2xl md:text-4xl font-display font-black group-hover:text-brand-teal transition-colors">JustDial</span>
                            <span className="text-[10px] font-black tracking-widest text-brand-teal mt-1">VERIFIED SQUAD</span>
                        </div>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <span className="text-2xl md:text-4xl font-display font-black group-hover:text-amber-500 transition-colors">Sulekha</span>
                            <span className="text-[10px] font-black tracking-widest text-amber-500 mt-1">PREMIUM TAG</span>
                        </div>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <span className="text-2xl md:text-4xl font-display font-black group-hover:text-emerald-500 transition-colors">UrbanCompany</span>
                            <span className="text-[10px] font-black tracking-widest text-emerald-500 mt-1">PARTNER SQUAD</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
