"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
    Gift, Crown, Star, CheckCircle2, 
    Zap, Sparkles, TrendingUp, Hand 
} from "lucide-react";

const loyaltyLevels = [
    { name: "Silver", points: "0-500", color: "bg-gray-400", features: ["10% Welcome Discount", "Free Eyebrow Threading"] },
    { name: "Gold", points: "501-1500", color: "bg-gold", features: ["15% Every Visit", "Priority Booking", "Bday Special"] },
    { name: "Platinum", points: "1501+", color: "bg-purple-600", features: ["25% All services", "Dedicated Stylist", "Free Signature Coffee"] },
];

export default function LoyaltySystem() {
    return (
        <section id="loyalty" className="section-padding bg-background relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Badge variant="outline" className="mb-6 rounded-full px-6 py-2 border-primary/40 bg-primary/10 text-primary text-xs tracking-[0.3em] uppercase font-black">
                            Customer Retention
                        </Badge>
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Build <span className="text-gold-gradient">Loyal Fans</span>, Not Just One-Time Customers
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 font-medium opacity-80 leading-relaxed">
                            Our built-in loyalty system automatically tracks your customers&apos; visits and awards them points. This keeps them coming back to your salon instead of going anywhere else.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Automated Reward Points", desc: "Every ₹1 spent = 1 Loyalty Point. No more paper cards." },
                                { title: "Tiered Memberships", desc: "Unlock Silver, Gold, or Platinum perks for regulars." },
                                { title: "Special Birthday Offers", desc: "Automatic WhatsApp wish with 50% discount coupon." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                                        <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Simulation of a Customer's Phone Screen */}
                        <div className="relative mx-auto w-[320px] h-[640px] bg-black rounded-[3rem] p-4 shadow-2xl border-8 border-gray-900 overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-gray-900 rounded-b-3xl z-10" />
                            
                            <div className="h-full bg-secondary/50 rounded-4xl overflow-y-auto scrollbar-hide pt-10 px-6">
                                <div className="text-center mb-8">
                                    <img src="/images/stylist1.png" className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary/20 object-cover" />
                                    <h3 className="text-lg font-bold">Luxe Rewards</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">Hi, Akash Pandey</p>
                                </div>

                                <Card className="bg-linear-to-br from-primary to-gold-dark text-primary-foreground border-none rounded-3xl p-6 mb-6 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Crown className="w-12 h-12" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-center mb-6">
                                            <Badge className="bg-white/20 text-white font-black text-[9px] border-none uppercase tracking-widest">Gold Member</Badge>
                                            <span className="text-[10px] font-black uppercase tracking-widest">LX-0824</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-4xl font-display font-black leading-none">1,250</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest ml-2 opacity-80">Points</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden mb-4">
                                            <div className="h-full bg-white w-2/3" />
                                        </div>
                                        <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">250 more for Platinum VIP</p>
                                    </div>
                                </Card>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] uppercase font-black tracking-widest text-primary mb-4">Available Perks</h4>
                                    {[
                                        { title: "Free Hair Spa", cost: "500 Points", icon: Gift },
                                        { title: "₹500 Discount", cost: "800 Points", icon: Zap },
                                        { title: "1+1 Color Day", cost: "1200 Points", icon: Sparkles },
                                    ].map((perk, i) => (
                                        <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-xl bg-primary/20 text-primary">
                                                    <perk.icon className="w-3.5 h-3.5" />
                                                </div>
                                                <div>
                                                    <h5 className="text-[11px] font-bold">{perk.title}</h5>
                                                    <p className="text-[8px] text-muted-foreground font-black uppercase">{perk.cost}</p>
                                                </div>
                                            </div>
                                            <Button size="sm" className="h-7 text-[8px] uppercase font-black px-4 rounded-full bg-primary text-primary-foreground hover:opacity-90">Redeem</Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decoration blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
