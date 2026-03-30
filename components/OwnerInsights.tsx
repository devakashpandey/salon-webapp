"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
    TrendingUp, Users, Calendar, DollarSign, 
    ArrowUpRight, Clock, Star, Scissors 
} from "lucide-react";

const stats = [
    { label: "Today's Bookings", value: "14", change: "+12%", icon: Calendar, color: "text-blue-500" },
    { label: "New Customers", value: "8", change: "+5%", icon: Users, color: "text-green-500" },
    { label: "Daily Revenue", value: "₹8,450", change: "+18%", icon: DollarSign, color: "text-gold" },
    { label: "Staff Efficiency", value: "92%", change: "+2%", icon: Star, color: "text-purple-500" },
];

const topServices = [
    { name: "Global Hair Color", count: 42, revenue: "₹1,04,958", trend: "up" },
    { name: "Premium Gold Facial", count: 38, revenue: "₹56,962", trend: "up" },
    { name: "Bridal Makeup", count: 12, revenue: "₹1,79,988", trend: "down" },
    { name: "Keratin Treatment", count: 25, revenue: "₹99,975", trend: "up" },
];

const staffPerformance = [
    { name: "Alex Rivera", appointments: 8, rating: 4.9, status: "Available" },
    { name: "Sarah Chen", appointments: 12, rating: 5.0, status: "In Service" },
    { name: "Michael Ross", appointments: 6, rating: 4.7, status: "On Break" },
];

export default function OwnerInsights() {
    return (
        <section id="owner-insights" className="section-padding bg-secondary/30 relative overflow-hidden backdrop-blur-3xl">
            <div className="container relative z-10">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 border-primary/20 bg-primary/10 text-primary text-[10px] tracking-widest uppercase font-black">
                        For Business Owners
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
                        Everything You Need to <span className="text-gold-gradient">Manage Your Salon</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-medium opacity-80">
                        Stop using registers. Track your growth, staff, and revenue in real-time with our automated dashboard.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <Card key={i} className="bg-card/50 border-border/10 backdrop-blur-md hover:border-primary/20 transition-all duration-500 group">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-2xl bg-primary/10 ${stat.color}`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <Badge className="bg-green-500/10 text-green-500 border-none text-[10px] uppercase font-black tracking-widest">
                                        <ArrowUpRight className="w-3 h-3 mr-1" />
                                        {stat.change}
                                    </Badge>
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-1">{stat.value}</h3>
                                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Top Services Chart Simulation */}
                    <Card className="lg:col-span-2 bg-card/40 border-border/10 backdrop-blur-xl p-8 rounded-[2.5rem]">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold font-display">Most Popular Services</h3>
                            <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-widest text-primary">View Full Report</Button>
                        </div>
                        <div className="space-y-6">
                            {topServices.map((service, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-bold">{service.name}</span>
                                        <span className="text-primary font-black">{service.revenue}</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-linear-to-r from-primary to-gold-dark rounded-full transition-all duration-1000"
                                            style={{ width: `${(service.count / 42) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-[9px] uppercase tracking-widest font-black text-muted-foreground">
                                        <span>{service.count} Bookings</span>
                                        <span>Last 30 Days</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Staff Monitor */}
                    <Card className="bg-card/40 border-border/10 backdrop-blur-xl p-8 rounded-[2.5rem]">
                        <h3 className="text-xl font-bold font-display mb-8">Live Staff Performance</h3>
                        <div className="space-y-6">
                            {staffPerformance.map((staff, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-white/5">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center font-bold text-primary">
                                        {staff.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold">{staff.name}</h4>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${staff.status === "In Service" ? "bg-orange-500 animate-pulse" : staff.status === "Available" ? "bg-green-500" : "bg-gray-500"}`} />
                                            <span className="text-[9px] uppercase font-black text-muted-foreground">{staff.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3 h-3 text-gold fill-gold" />
                                            <span className="text-xs font-bold">{staff.rating}</span>
                                        </div>
                                        <p className="text-[9px] text-muted-foreground font-black uppercase">{staff.appointments} Done</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-8 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground text-[10px] font-black uppercase tracking-widest h-12 rounded-xl">
                            Manager Roster
                        </Button>
                    </Card>
                </div>
                
                {/* Automation Tags */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {["Automatic WhatsApp Billing", "Google Review Automation", "Dynamic Inventory Tracking", "Staff Payroll Management", "Loyalty Point System"].map((tag) => (
                        <div key={tag} className="px-6 py-3 rounded-full bg-secondary/50 border border-primary/20 text-xs font-bold flex items-center gap-2">
                             <TrendingUp className="w-3 h-3 text-primary" />
                             {tag}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-full h-full bg-radial-[circle_at_top_right] from-primary/5 to-transparent pointer-events-none" />
        </section>
    );
}
