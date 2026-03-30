"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    MessageSquare, Smartphone, BellRing, 
    Share2, QrCode, Sparkles, TrendingUp 
} from "lucide-react";

const automations = [
    {
        title: "WhatsApp Integrated",
        desc: "Automated booking confirmation and reminders sent directly to WhatsApp.",
        icon: MessageSquare,
        color: "text-green-500",
    },
    {
        title: "QR Digital Bill",
        desc: "Customers can scan a QR code to view their bill and pay instantly.",
        icon: QrCode,
        color: "text-blue-500",
    },
    {
        title: "Auto-Review Link",
        desc: "A Google Review link is sent 2 hours after service to build your online reputation.",
        icon: Share2,
        color: "text-gold",
    },
    {
        title: "Staff Notifications",
        desc: "Stylists get real-time alerts on their phones for new bookings.",
        icon: BellRing,
        color: "text-purple-500",
    },
];

export default function SmartFeatures() {
    return (
        <section id="smart-features" className="section-padding bg-secondary/20 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary text-[10px] tracking-widest uppercase font-black">
                        Built-in Automation
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
                        We Don&apos;t Just Make <span className="text-gold-gradient">Websites</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-medium opacity-80">
                        We provide a complete operating system for your salon. Automate 90% of your manual work and focus on growing your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {automations.map((item, i) => (
                        <Card key={i} className="bg-card/40 border-border/10 backdrop-blur-xl p-8 rounded-4xl group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                            <CardContent className="p-0">
                                <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 ${item.color} group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-display mb-4">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
