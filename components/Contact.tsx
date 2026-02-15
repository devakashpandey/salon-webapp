"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
    MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube, MessageSquare, ExternalLink, ArrowRight
} from "lucide-react";

export default function Contact() {
    const [formSent, setFormSent] = useState(false);

    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <Badge variant="outline" className="mb-4 rounded-full px-5 py-2 border-primary/20 bg-primary/10 text-primary text-xs tracking-widest uppercase font-black">
                        Say Hello!
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-4 text-center">
                        The Squad is <span className="text-primary">Ready!</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl font-bold">
                        Got questions? Want to say hi? We&apos;re all ears!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Side: Contact Info */}
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { icon: MapPin, title: "Find Us", content: "Premium Boulevard, MG Road, Bangalore, India 560001", link: "#", linkText: "Open Map" },
                                { icon: Phone, title: "Ring Us", content: "+91 98765 43210\n+91 80 4455 6677", link: "tel:+919876543210", linkText: "Call Squad" },
                                { icon: Mail, title: "Ping Us", content: "hello@luxesalon.com\nbooking@luxesalon.com", link: "mailto:hello@luxesalon.com", linkText: "Send Mail" },
                                { icon: Clock, title: "Open Slates", content: "Mon – Sun: 9:00 AM – 9:00 PM\nPeak hours: Fri – Sun", link: "#booking", linkText: "Book Slot" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex flex-col gap-4 group">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-secondary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-6">
                                            <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-display text-xl font-black mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-muted-foreground text-sm font-black leading-relaxed whitespace-pre-line mb-3 opacity-80">
                                                {item.content}
                                            </p>
                                            <a href={item.link} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-primary/70 transition-colors inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
                                                {item.linkText} <ArrowRight className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Map Placeholder */}
                        <div className="group relative rounded-[3rem] overflow-hidden border-8 border-white dark:border-white/10 shadow-2xl aspect-video bg-card/60">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Salon Location"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 bg-primary/5 w-fit px-6 py-2 rounded-full">JOIN THE SQUAD</h4>
                            <div className="flex gap-4">
                                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                    <Button key={i} variant="outline" size="icon" className="w-16 h-16 rounded-2xl border-primary/5 bg-white dark:bg-card/60 hover:bg-primary hover:text-primary-foreground hover:rotate-12 transition-all duration-500 shadow-sm border-none">
                                        <Icon className="w-7 h-7" />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div>
                        <Card className="bg-white/80 dark:bg-card/60 backdrop-blur-xl border-primary/5 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] -z-10" />
                            <CardContent className="p-0">
                                <div className="mb-10 text-center">
                                    <h3 className="font-display text-3xl font-black mb-4">Drop a Line</h3>
                                    <p className="text-muted-foreground font-bold">Tell us what&apos;s on your mind!</p>
                                </div>

                                {formSent ? (
                                    <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                                        <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 rotate-12">
                                            <Send className="w-10 h-10 text-primary" />
                                        </div>
                                        <h4 className="text-2xl font-black mb-4">You&apos;re All Set!</h4>
                                        <p className="text-muted-foreground font-bold mb-10">
                                            The squad will ping you shortly. Stay fresh!
                                        </p>
                                        <Button onClick={() => setFormSent(false)} variant="ghost" className="text-primary font-black uppercase tracking-widest text-xs h-16 px-10 rounded-2xl">
                                            Send Another Vibe
                                        </Button>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setFormSent(true);
                                        }}
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Input
                                                required
                                                placeholder="Who are you?"
                                                className="bg-secondary/30 border-primary/5 h-16 rounded-2xl px-6 font-black"
                                            />
                                            <Input
                                                required
                                                type="tel"
                                                placeholder="Your Number"
                                                className="bg-secondary/30 border-primary/5 h-16 rounded-2xl px-6 font-black"
                                            />
                                        </div>
                                        <Input
                                            required
                                            type="email"
                                            placeholder="Your Email"
                                            className="bg-secondary/30 border-primary/5 h-16 rounded-2xl px-6 font-black"
                                        />
                                        <Textarea
                                            required
                                            placeholder="What's the magic about?"
                                            className="bg-secondary/30 border-primary/5 rounded-2xl p-6 font-black min-h-[160px]"
                                        />
                                        <Button
                                            type="submit"
                                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-2xl tracking-[0.2em] uppercase text-xs font-black shadow-[0_10px_30px_rgba(0,201,167,0.4)] transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            Send It!
                                            <Send className="w-5 h-5 ml-3" />
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>

                        {/* Quick WhatsApp CTA */}
                        <a
                            href="https://wa.me/919876543210"
                            className="mt-8 flex items-center justify-center gap-6 p-8 rounded-[3rem] bg-[#25D366]/10 border border-[#25D366]/20 group transition-all duration-500 hover:bg-[#25D366]/20 shadow-sm"
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-[#25D366] flex items-center justify-center text-white shadow-xl shadow-[#25D366]/30 group-hover:rotate-12 transition-transform">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#25D366] mb-1">CHAT ON WHATSAPP</span>
                                <span className="block text-xl font-black">Instant Support!</span>
                            </div>
                            <ArrowRight className="w-6 h-6 ml-auto text-[#25D366] transition-transform group-hover:translate-x-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
