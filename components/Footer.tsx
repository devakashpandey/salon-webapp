"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Scissors, Phone, Mail, MapPin, Instagram, Facebook, Youtube,
    ArrowUp, ChevronRight, Calendar,
} from "lucide-react";

const footerLinks = {
    services: [
        "Hair Styling", "Skin & Facial", "Bridal Makeup", "Nail Art",
        "Spa & Wellness", "Beard Grooming",
    ],
    quickLinks: [
        { label: "About Us", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Book Now", href: "#booking" },
        { label: "Contact", href: "#contact" },
    ],
};

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative bg-white dark:bg-background border-t border-primary/5">
            {/* CTA Banner */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
                <div className="container py-24 text-center relative z-10">
                    <Badge variant="outline" className="mb-4 rounded-full px-6 py-2 border-primary/20 bg-primary/10 text-primary text-[10px] tracking-[0.3em] uppercase font-black">
                        GET GLOWING
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
                        Ready to Look <span className="text-primary">Iconic?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto font-bold opacity-80">
                        The spotlight is waiting for you! Grab your spot and let&apos;s create some magic together.
                    </p>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[1.5rem] tracking-[0.3em] uppercase text-[10px] font-black px-12 h-18 hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(0,201,167,0.4)] border-none">
                        <a href="#booking" className="flex items-center gap-3">
                            <Calendar className="w-5 h-5" />
                            Book My Glow Up
                        </a>
                    </Button>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container py-20 pb-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-lg rotate-3">
                                <Scissors className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <span className="text-2xl font-display font-black tracking-wider text-primary">
                                    VIBE
                                </span>
                                <span className="block text-[8px] tracking-[0.5em] text-muted-foreground uppercase -mt-1 font-black">
                                    Salon & Studio
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-bold opacity-80">
                            The most colorful, fun spot in town for your hair, skin, and soul. 15+ years of spreading pure joy and epic glow-ups.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="w-12 h-12 rounded-xl border-none bg-primary/5 text-primary hover:text-white hover:bg-primary hover:rotate-12 transition-all duration-500"
                                >
                                    <a href="#" aria-label="Social">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[10px] font-black mb-8 uppercase tracking-[0.4em] text-primary bg-primary/5 w-fit px-4 py-1.5 rounded-full">SERVICES</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((svc) => (
                                <li key={svc}>
                                    <a
                                        href="#services"
                                        className="flex items-center gap-3 text-sm font-bold text-muted-foreground hover:text-primary transition-all group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-secondary group-hover:bg-primary transition-all group-hover:scale-125" />
                                        {svc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[10px] font-black mb-8 uppercase tracking-[0.4em] text-primary bg-primary/5 w-fit px-4 py-1.5 rounded-full">GUIDE</h4>
                        <ul className="space-y-4">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-3 text-sm font-bold text-muted-foreground hover:text-primary transition-all group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-secondary group-hover:bg-primary transition-all group-hover:scale-125" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[10px] font-black mb-8 uppercase tracking-[0.4em] text-primary bg-primary/5 w-fit px-4 py-1.5 rounded-full">SQUAD BASE</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 text-sm font-bold text-muted-foreground leading-relaxed">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <span className="pt-2">Premium Boulevard, MG Road, Bangalore – 560 001</span>
                            </div>
                            <div className="flex gap-4 text-sm font-bold text-muted-foreground">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <span className="pt-2">+91 98765 43210</span>
                            </div>
                            <div className="flex gap-4 text-sm font-bold text-muted-foreground">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <span className="pt-2">hello@vibesalon.in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary/5 py-8">
                <div className="container flex flex-col items-center justify-center">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] text-center">
                        © {new Date().getFullYear()} VIBE SALON & SPA. KEEPING IT FRESH.
                    </p>
                </div>
            </div>

            {/* Scroll to Top */}
            <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="fixed bottom-28 right-8 w-16 h-16 rounded-2xl border-none bg-white/90 dark:bg-card/90 backdrop-blur-md text-primary hover:bg-primary hover:text-white z-50 shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
                <ArrowUp className="w-7 h-7 group-hover:animate-bounce" />
            </Button>

            {/* Floating WhatsApp */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-16 h-16 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center z-50 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-12 group"
            >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </footer>
    );
}
