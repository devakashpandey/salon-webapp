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
                <div className="text-center mb-8">
                    <Badge variant="outline" className="mb-2 rounded-full px-4 py-1 border-primary/30 bg-primary/5 text-primary text-[10px] tracking-widest uppercase font-bold">
                        Get In Touch
                    </Badge>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-2 text-center">
                        Connect <span className="text-gold-gradient">With Us</span>
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto font-medium">
                        We&apos;re here to answer your questions and help you book your experience.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Side: Contact Info */}
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: MapPin, title: "Our Location", content: "Premium Boulevard, MG Road, Bangalore, India 560001", link: "#", linkText: "Get Directions" },
                                { icon: Phone, title: "Phone Support", content: "+91 98765 43210\n+91 80 4455 6677", link: "tel:+919876543210", linkText: "Call Now" },
                                { icon: Mail, title: "Email Address", content: "hello@luxesalon.com\nbooking@luxesalon.com", link: "mailto:hello@luxesalon.com", linkText: "Email Us" },
                                { icon: Clock, title: "Working Hours", content: "Mon – Sun: 9:00 AM – 9:00 PM\nPeak hours: Fri – Sun", link: "#booking", linkText: "Book Slot" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex flex-col gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                                            <Icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-display text-lg font-bold mb-1 uppercase tracking-wide">{item.title}</h4>
                                            <p className="text-muted-foreground text-[11px] font-medium leading-relaxed whitespace-pre-line mb-1.5">
                                                {item.content}
                                            </p>
                                            <a href={item.link} className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-gold-light transition-colors inline-flex items-center gap-2">
                                                {item.linkText} <ExternalLink className="w-2.5 h-2.5" />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Map Placeholder */}
                        <div className="group relative rounded-4xl overflow-hidden border border-border shadow-2xl aspect-video bg-card/60">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Salon Location"
                            />
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Stay Connected</h4>
                            <div className="flex gap-3">
                                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                    <Button key={i} variant="outline" size="icon" className="w-10 h-10 rounded-xl border-border bg-card/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                        <Icon className="w-4 h-4" />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div>
                        <Card className="bg-card/60 backdrop-blur-xl border-border rounded-3xl p-6 md:p-8 shadow-none">
                            <CardContent className="p-0">
                                <div className="mb-6 text-center">
                                    <h3 className="font-display text-2xl font-bold mb-2">Send a Message</h3>
                                    <p className="text-xs text-muted-foreground font-medium">Fill out the form below and we&apos;ll get back to you.</p>
                                </div>

                                {formSent ? (
                                    <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
                                            <Send className="w-10 h-10 text-primary" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4">Message Sent!</h4>
                                        <p className="text-muted-foreground font-medium mb-10">
                                            Our concierge team will reach out to you shortly.
                                        </p>
                                        <Button onClick={() => setFormSent(false)} variant="link" className="text-primary font-black uppercase tracking-widest text-xs">
                                            Send Another Message
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
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Input
                                                required
                                                placeholder="Your Name"
                                                className="bg-transparent border-b-2 border-border focus:border-primary px-0 font-medium"
                                            />
                                            <Input
                                                required
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="bg-transparent border-b-2 border-border focus:border-primary px-0 font-medium"
                                            />
                                        </div>
                                        <Input
                                            required
                                            type="email"
                                            placeholder="Email Address"
                                            className="bg-transparent border-b-2 border-border focus:border-primary px-0 font-medium"
                                        />
                                        <Textarea
                                            required
                                            placeholder="How can we help you?"
                                            className="bg-transparent border-b-2 border-border focus:border-primary px-0 font-medium min-h-[100px]"
                                        />
                                        <Button
                                            type="submit"
                                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-none tracking-[0.2em] uppercase text-[10px] font-bold shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                        >
                                            Process Inquiry
                                            <Send className="w-4 h-4 ml-3" />
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>

                        {/* Quick WhatsApp CTA */}
                        <a
                            href="https://wa.me/919876543210"
                            className="mt-6 flex items-center justify-center gap-4 p-5 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 group transition-all duration-500 hover:bg-[#25D366]/20"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl shadow-[#25D366]/20">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[8px] font-bold uppercase tracking-widest text-[#25D366]">Chat on WhatsApp</span>
                                <span className="block text-base font-bold">Instant Support Available</span>
                            </div>
                            <ArrowRight className="w-4 h-4 ml-auto text-[#25D366] transition-transform group-hover:translate-x-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
