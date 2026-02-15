"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    ShieldCheck, Award, Clock, Sparkles, Gem, Leaf,
    Settings, Zap, ZapOff, CheckCircle2
} from "lucide-react";

const features = [
    {
        title: "Eco-Friendly Products",
        description: "We use organic and sustainable products that are gentle on your skin and the environment.",
        icon: Leaf,
    },
    {
        title: "15+ Years Experience",
        description: "Our master stylists bring decades of combined global experience to every service.",
        icon: Award,
    },
    {
        title: "Luxury Ambiance",
        description: "Escape the city noise in our serene, marble-floored sanctuaries with golden lighting.",
        icon: Gem,
    },
    {
        title: "Advanced Technology",
        description: "State-of-the-art equipment for skincare and hair transformation treatments.",
        icon: Zap,
    },
    {
        title: "Strict Hygiene",
        description: "Medical-grade sterilization for all tools and 100% disposable materials used.",
        icon: ShieldCheck,
    },
    {
        title: "Personalized Care",
        description: "Every visit begins with a detailed professional consultation to understand your needs.",
        icon: CheckCircle2,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4 rounded-full px-5 py-2 border-primary/20 bg-primary/10 text-primary text-xs tracking-widest uppercase font-black">
                        The Squad Edge
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-6">
                        Why We <span className="text-primary">Rock!</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-bold">
                        We don&apos;t just do hair, we craft your new favorite look!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={i}
                                className="group relative bg-white/80 dark:bg-card/60 border border-primary/5 rounded-[3rem] p-10 hover:bg-card hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(0,201,167,0.2)] overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] -z-10 transition-all duration-500 group-hover:bg-primary/10" />

                                <CardContent className="p-0">
                                    <div className="w-20 h-20 rounded-[2rem] bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-500 shadow-sm">
                                        <Icon className="w-10 h-10 text-primary group-hover:text-white" />
                                    </div>
                                    <h3 className="font-display text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed font-bold">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom CTA Element */}
                <div className="mt-20 p-10 rounded-[3rem] bg-linear-to-r from-primary/10 via-brand-teal/10 to-primary/10 border border-primary/10 text-center relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />

                    <h4 className="font-display text-2xl md:text-3xl font-black mb-4 italic text-foreground">&ldquo;Confidence is the best accessory, but a fresh cut helps too!&rdquo;</h4>
                    <p className="text-primary text-xs font-black uppercase tracking-[0.4em]">— THE SQUAD</p>
                </div>
            </div>
        </section>
    );
}
