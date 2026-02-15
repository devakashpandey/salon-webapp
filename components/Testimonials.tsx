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
        <section id="testimonials" className="section-padding relative overflow-hidden bg-card/50">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <Badge variant="outline" className="mb-4 rounded-full px-5 py-2 border-primary/30 bg-primary/5 text-primary text-xs tracking-[0.2em] uppercase font-bold">
                        Client Love
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                        What Our <span className="text-gold-gradient">Clients</span> Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Don&apos;t just take our word for it. Hear from thousands of happy clients.
                    </p>
                    <Separator className="w-24 mx-auto mt-6 bg-linear-to-r from-transparent via-primary to-transparent" />
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-5xl mx-auto px-12">
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
                                    <Card className="h-full bg-card/60 backdrop-blur-xl border-border/10 rounded-4xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                                        <Quote className="absolute top-10 right-10 w-20 h-20 text-primary/5 -z-10 group-hover:text-primary/10 transition-colors" />

                                        <CardContent className="p-0 flex flex-col items-center text-center">
                                            <div className="flex gap-1 mb-6">
                                                {Array.from({ length: t.rating }).map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                                                ))}
                                            </div>

                                            <p className="text-xl md:text-2xl text-foreground font-elegant italic leading-relaxed mb-10">
                                                &ldquo;{t.text}&rdquo;
                                            </p>

                                            <div className="flex flex-col items-center">
                                                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-gold-dark flex items-center justify-center mb-4 rotate-3 group-hover:rotate-6 transition-transform shadow-lg">
                                                    <span className="text-xl font-bold text-primary-foreground">{t.avatar}</span>
                                                </div>
                                                <h4 className="text-lg font-bold text-foreground">{t.name}</h4>
                                                <span className="text-xs text-primary font-black uppercase tracking-widest">{t.role}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="w-12 h-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground -left-16" />
                            <CarouselNext className="w-12 h-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground -right-16" />
                        </div>
                    </Carousel>
                </div>

                {/* Trust Bar */}
                <div className="mt-24 text-center">
                    <p className="text-xs text-muted-foreground mb-10 tracking-[0.3em] uppercase font-black">
                        Trusted by thousands across India
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-display font-black">Google</span>
                            <span className="text-xs font-bold tracking-widest">4.9 ★ RATING</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-display font-black">JustDial</span>
                            <span className="text-xs font-bold tracking-widest">VERIFIED</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-display font-black">Sulekha</span>
                            <span className="text-xs font-bold tracking-widest">PREMIUM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-display font-black">UrbanCompany</span>
                            <span className="text-xs font-bold tracking-widest">PARTNER</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
