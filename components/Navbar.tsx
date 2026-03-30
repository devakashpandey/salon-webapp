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
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const themes = [
    { id: "luxe-gold", color: "#c9a96e", label: "Luxe Gold" },
    { id: "rose-elegance", color: "#d69f7e", label: "Rose Elegance" },
    { id: "emerald-velvet", color: "#2d6a4f", label: "Emerald Velvet" },
    { id: "royal-silver", color: "#6c757d", label: "Royal Silver" },
    { id: "midnight-glow", color: "#5a189a", label: "Midnight Glow" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("luxe-gold");

    const navLinks = [
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        
        // Initial theme from LS or default
        const savedTheme = localStorage.getItem("salon-theme") || "luxe-gold";
        setCurrentTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = (val: string) => {
        setCurrentTheme(val);
        document.documentElement.setAttribute('data-theme', val);
        localStorage.setItem("salon-theme", val);
    };

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
                            Salon & Parlor
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
                <div className="hidden lg:flex items-center gap-6">
                    <TooltipProvider>
                        <div className="flex items-center gap-2 bg-card/30 backdrop-blur-md rounded-full px-3 py-1.5 border border-border/20">
                            {themes.map((t) => (
                                <Tooltip key={t.id}>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => toggleTheme(t.id)}
                                            className={`w-4 h-4 rounded-full border border-white/20 transition-all duration-300 hover:scale-125 cursor-pointer ${currentTheme === t.id ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110" : "opacity-60 hover:opacity-100"
                                                }`}
                                            style={{ backgroundColor: t.color }}
                                            aria-label={`Switch to ${t.label} theme`}
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-background border-border text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                                        {t.label}
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </TooltipProvider>
                    <ModeToggle />
                    <Button asChild className="bg-linear-to-br from-primary to-gold-dark hover:from-gold-dark hover:to-primary text-primary-foreground border-none rounded-full px-6 shadow-lg transform active:scale-95 transition-all cursor-pointer h-10">
                        <a href="#booking" className="flex items-center gap-2">
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
                            <div className="flex flex-col h-full bg-card/30 backdrop-blur-xl overflow-y-auto">
                                <div className="p-6 pb-4">
                                    <header className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-gold-dark flex items-center justify-center">
                                                <Scissors className="w-5 h-5 text-primary-foreground" />
                                            </div>
                                            <span className="text-xl font-display font-bold tracking-wider text-gold-gradient">LUXE</span>
                                        </div>
                                    </header>
                                    
                                    {/* Mobile Theme Selector */}
                                    <div className="mb-6">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-3">Choose Aesthetic</span>
                                        <div className="flex items-center gap-3">
                                            {themes.map((t) => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => toggleTheme(t.id)}
                                                    className={`w-8 h-8 rounded-full border border-border/20 transition-all cursor-pointer ${currentTheme === t.id ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-60"
                                                        }`}
                                                    style={{ backgroundColor: t.color }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <Separator className="bg-border/50" />
                                </div>

                                <nav className="flex-1 px-6 py-2 flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="group flex items-center justify-between py-3 text-lg font-display text-foreground hover:text-primary border-b border-border/50 transition-all"
                                        >
                                            {link.label}
                                            <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </a>
                                    ))}
                                </nav>

                                <div className="p-6 space-y-6">
                                    <div className="space-y-4">
                                        <Badge variant="outline" className="text-xs tracking-widest uppercase py-1 border-primary/20 text-primary">Need Help?</Badge>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Experience world-class grooming in the heart of Bangalore.
                                        </p>
                                    </div>
                                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-none uppercase tracking-widest font-bold">
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
