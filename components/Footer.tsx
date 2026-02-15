"use client";

import { Button } from "@/components/ui/button";
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
        <footer className="relative bg-background border-t border-border">
            {/* CTA Banner */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10" />
                <div className="container py-24 text-center relative z-10">
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                        Ready to Look <span className="text-gold-gradient">Amazing?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                        Book your appointment today and let our experts craft your perfect look.
                    </p>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-[0.2em] uppercase text-xs font-black px-12 h-16 hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_40px_rgba(201,169,110,0.3)]">
                        <a href="#booking" className="flex items-center gap-3">
                            <Calendar className="w-5 h-5" />
                            Book Appointment
                        </a>
                    </Button>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-gold-dark flex items-center justify-center shadow-lg">
                                <Scissors className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                                <span className="text-2xl font-display font-bold tracking-wider text-gold-gradient">
                                    LUXE
                                </span>
                                <span className="block text-[10px] tracking-[0.4em] text-muted-foreground uppercase -mt-1 font-black">
                                    Salon & Spa
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-medium">
                            Where beauty meets luxury. Premium unisex salon offering world-class
                            hair, skin, nail, spa & bridal services with 15+ years of excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="w-12 h-12 rounded-2xl border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-card transition-all duration-300"
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
                        <h4 className="font-display text-xl font-bold mb-8 uppercase tracking-widest text-foreground">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((svc) => (
                                <li key={svc}>
                                    <a
                                        href="#services"
                                        className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-all group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                                        {svc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-xl font-bold mb-8 uppercase tracking-widest text-foreground">Quick Links</h4>
                        <ul className="space-y-4">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-all group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-xl font-bold mb-8 uppercase tracking-widest text-foreground">Contact</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 text-sm font-medium text-muted-foreground leading-relaxed">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Premium Boulevard, MG Road, Bangalore – 560 001</span>
                            </div>
                            <div className="flex gap-4 text-sm font-medium text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex gap-4 text-sm font-medium text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@luxesalon.in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/50">
                <div className="container py-8 flex flex-col items-center justify-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">
                        © {new Date().getFullYear()} Luxe Salon & Spa. Crafted with Excellence.
                    </p>
                </div>
            </div>

            {/* Scroll to Top */}
            <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="fixed bottom-24 right-8 w-14 h-14 rounded-2xl border-primary/30 bg-background/80 backdrop-blur-md text-primary hover:bg-primary hover:text-primary-foreground z-50 shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
                <ArrowUp className="w-6 h-6" />
            </Button>

            {/* Floating WhatsApp */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-8 w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center z-50 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-6"
            >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </footer>
    );
}
