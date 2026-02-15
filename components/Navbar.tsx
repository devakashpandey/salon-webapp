"use client";

import { useState, useEffect } from "react";
import { Scissors, Menu, Phone, Calendar, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-3 shadow-lg" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-primary to-gold-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Scissors className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                    <div>
                        <span className={`text-xl md:text-2xl font-display font-bold tracking-wider transition-colors duration-500 ${isScrolled ? "text-gold-gradient" : "text-white"}`}>
                            LUXE
                        </span>
                        <span className={`block text-[8px] md:text-[10px] tracking-[0.3em] uppercase -mt-1 font-medium transition-colors duration-500 ${isScrolled ? "text-muted-foreground" : "text-white/60"}`}>
                            Salon & Spa
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-medium transition-all tracking-wide hover:text-primary ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <ModeToggle />
                    <Button asChild className="bg-linear-to-br from-primary to-gold-dark hover:from-gold-dark hover:to-primary text-primary-foreground border-none rounded-full px-6 shadow-lg transform active:scale-95 transition-all cursor-pointer">
                        <a href="#booking">
                            <Calendar className="w-4 h-4" />
                            Book Now
                        </a>
                    </Button>
                </div>

                {/* Mobile Nav */}
                <div className="flex lg:hidden items-center gap-4">
                    <ModeToggle />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={`cursor-pointer transition-colors ${isScrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"}`}>
                                <Menu className="w-7 h-7" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background border-l border-border w-full sm:max-w-md p-0">
                            <div className="flex flex-col h-full bg-card/30 backdrop-blur-xl">
                                <div className="p-8 pb-4">
                                    <header className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-gold-dark flex items-center justify-center">
                                                <Scissors className="w-5 h-5 text-primary-foreground" />
                                            </div>
                                            <span className="text-xl font-display font-bold tracking-wider text-gold-gradient">LUXE</span>
                                        </div>
                                    </header>
                                    <Separator className="bg-border/50" />
                                </div>

                                <nav className="flex-1 px-8 py-4 flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="group flex items-center justify-between py-4 text-lg font-display text-foreground hover:text-primary border-b border-border/50 transition-all"
                                        >
                                            {link.label}
                                            <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </a>
                                    ))}
                                </nav>

                                <div className="p-8 space-y-6">
                                    <div className="space-y-4">
                                        <Badge variant="outline" className="text-xs tracking-widest uppercase py-1 border-primary/20 text-primary">Need Help?</Badge>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Experience world-class grooming in the heart of Bangalore.
                                        </p>
                                    </div>
                                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-none uppercase tracking-widest font-bold">
                                        <a href="#booking">Book Appointment</a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
