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
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-2 rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary text-[10px] tracking-widest uppercase font-bold">
                        The Luxe Edge
                    </Badge>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">
                        Why <span className="text-gold-gradient">Choose</span> Luxe
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto font-medium">
                        We craft experiences that redefine your style in our premium salon and parlor.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={i}
                                className="group relative bg-card/60 border border-border/50 rounded-3xl p-6 hover:bg-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 shadow-none overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 transition-all duration-500 group-hover:bg-primary/10" />

                                <CardContent className="p-0">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom CTA Element */}
                <div className="mt-12 p-8 rounded-3xl bg-linear-to-r from-primary/10 via-background to-primary/10 border border-primary/10 text-center">
                    <h4 className="font-display text-xl font-bold mb-2 italic">&ldquo;Professionalism is our signature, Luxury is our standard.&rdquo;</h4>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest">— TEAM LUXE</p>
                </div>
            </div>
        </section>
    );
}
