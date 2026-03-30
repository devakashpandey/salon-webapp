"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
    Calendar, Clock, User, Phone, Mail, MessageSquare, ArrowRight, Check,
    Scissors, Sparkles, Crown, Hand, Palette, Star,
} from "lucide-react";

const serviceOptions = [
    { label: "Hair Styling", icon: Scissors, deposit: "₹100" },
    { label: "Skin & Facial", icon: Sparkles, deposit: "₹200" },
    { label: "Bridal Makeup", icon: Crown, deposit: "₹500" },
    { label: "Nail Art", icon: Palette, deposit: "₹100" },
    { label: "Spa & Wellness", icon: Hand, deposit: "₹300" },
    { label: "Beard Grooming", icon: Star, deposit: "₹50" },
];

const stylists = [
    { id: 1, name: "Alex Rivera", role: "Master Stylist", image: "/images/stylist1.png", specialty: "Hair & Beard" },
    { id: 2, name: "Sarah Chen", role: "Skin Specialist", image: "/images/stylist2.png", specialty: "Facials & Spa" },
    { id: 3, name: "Michael Ross", role: "Color Expert", image: "/images/stylist3.png", specialty: "Global Color" },
    { id: 4, name: "Elena Gilbert", role: "Makeup Artist", image: "/images/stylist4.png", specialty: "Bridal & Party" },
];

const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

export default function Booking() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState("");
    const [selectedStylist, setSelectedStylist] = useState<any>(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", notes: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const depositAmount = serviceOptions.find(s => s.label === selectedService)?.deposit || "₹100";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section id="booking" className="section-padding relative overflow-hidden flex items-center justify-center">
                <div className="container max-w-2xl text-center">
                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary to-gold-dark mx-auto mb-10 flex items-center justify-center shadow-2xl animate-bounce-slow">
                        <Check className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-5xl font-bold mb-6">
                        Booking <span className="text-gold-gradient">Confirmed!</span>
                    </h2>
                    <p className="text-muted-foreground text-xl mb-12 font-medium">
                        Thank you for choosing Luxe Salon & Parlor. We&apos;ve sent a confirmation
                        to your phone. Prepare for your transformation!
                    </p>
                    <div className="bg-primary/5 rounded-3xl p-8 mb-12 border border-primary/10">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Booking ID</p>
                        <p className="text-2xl font-display font-bold">#LX-{Math.floor(1000 + Math.random() * 9000)}</p>
                    </div>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setIsSubmitted(false);
                            setStep(1);
                            setSelectedService("");
                            setSelectedStylist(null);
                            setSelectedDate("");
                            setSelectedTime("");
                            setFormData({ name: "", phone: "", email: "", notes: "" });
                        }}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none tracking-[0.2em] uppercase text-xs font-bold px-12 h-14"
                    >
                        Book Another Appointment
                    </Button>
                </div>
            </section>
        );
    }

    return (
        <section id="booking" className="py-12 lg:py-16 relative overflow-hidden bg-background">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <Badge variant="outline" className="mb-2 rounded-full px-4 py-1 border-primary/30 bg-primary/5 text-primary text-[10px] tracking-widest uppercase font-bold">
                        Reserve Your Experience
                    </Badge>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-2 text-center">
                        Book <span className="text-gold-gradient">An Appointment</span>
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto font-medium">
                        Take the first step towards your perfect look.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-3xl mx-auto flex items-center justify-center gap-4 md:gap-8 mb-12">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="flex items-center gap-4 md:gap-8">
                            <div
                                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-black transition-all duration-500 shadow-lg ${step >= num
                                    ? "bg-linear-to-br from-primary to-gold-dark text-primary-foreground scale-105"
                                    : "bg-secondary text-muted-foreground border border-border"
                                    }`}
                            >
                                {step > num ? <Check className="w-5 h-5 md:w-6 md:h-6" /> : num}
                            </div>
                            {num < 4 && (
                                <div
                                    className={`w-8 md:w-16 h-1 rounded-full transition-all duration-500 shadow-sm ${step > num ? "bg-primary" : "bg-muted"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form Wizard */}
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-card/60 backdrop-blur-xl border-border rounded-4xl p-6 md:p-12 shadow-none">
                        <CardContent className="p-0">
                            {/* Step 1: Select Service */}
                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <h3 className="font-display text-2xl font-bold mb-8 text-center">Choose Your Transformation</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {serviceOptions.map((svc) => {
                                            const Icon = svc.icon;
                                            return (
                                                <button
                                                    key={svc.label}
                                                    onClick={() => setSelectedService(svc.label)}
                                                    className={`p-4 rounded-2xl border text-center transition-all duration-500 cursor-pointer group ${selectedService === svc.label
                                                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                                                        : "border-border/50 bg-background/20 hover:border-primary/30"
                                                        }`}
                                                >
                                                    <div
                                                        className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-500 ${selectedService === svc.label
                                                            ? "bg-primary text-primary-foreground rotate-3"
                                                            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-3 shadow-sm"
                                                            }`}
                                                    >
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider">{svc.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="flex justify-center mt-12">
                                        <Button
                                            size="lg"
                                            onClick={() => selectedService && setStep(2)}
                                            disabled={!selectedService}
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-[0.2em] uppercase text-xs font-bold px-12 h-14 shadow-2xl disabled:opacity-50"
                                        >
                                            Continue
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Select Stylist */}
                            {step === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <h3 className="font-display text-3xl font-bold mb-10 text-center">Meet Our Masters</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {stylists.map((st) => (
                                            <button
                                                key={st.id}
                                                onClick={() => setSelectedStylist(st)}
                                                className={`flex items-center gap-6 p-6 rounded-3xl border text-left transition-all duration-500 cursor-pointer group ${selectedStylist?.id === st.id
                                                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                                                    : "border-border/50 bg-background/20 hover:border-primary/30"
                                                    }`}
                                            >
                                                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-primary/10">
                                                    <img
                                                        src={st.image}
                                                        alt={st.name}
                                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold mb-1">{st.name}</h4>
                                                    <p className="text-primary text-xs font-black uppercase tracking-widest mb-2">{st.role}</p>
                                                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-muted-foreground">{st.specialty}</Badge>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-12">
                                        <Button
                                            variant="ghost"
                                            onClick={() => setStep(1)}
                                            className="text-muted-foreground hover:text-primary font-bold uppercase tracking-widest text-xs"
                                        >
                                            ← Back
                                        </Button>
                                        <Button
                                            size="lg"
                                            onClick={() => selectedStylist && setStep(3)}
                                            disabled={!selectedStylist}
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-[0.2em] uppercase text-xs font-bold px-12 h-14 shadow-2xl disabled:opacity-50"
                                        >
                                            Continue
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Date & Time */}
                            {step === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <h3 className="font-display text-3xl font-bold mb-10 text-center">Pick a Day & Time</h3>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <label className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary">
                                                <Calendar className="w-5 h-5" />
                                                1. Select Date
                                            </label>
                                            <Input
                                                type="date"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                min={new Date().toISOString().split("T")[0]}
                                                className="bg-background border-border h-12 rounded-none px-6 font-medium"
                                            />
                                        </div>

                                        <div className="space-y-6">
                                            <label className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary">
                                                <Clock className="w-5 h-5" />
                                                2. Select Slot
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {timeSlots.map((time) => (
                                                    <Button
                                                        key={time}
                                                        variant={selectedTime === time ? "default" : "outline"}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`h-12 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 ${selectedTime === time
                                                            ? "bg-primary text-primary-foreground"
                                                            : "bg-background border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40"
                                                            }`}
                                                    >
                                                        {time}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mt-16">
                                        <Button
                                            variant="ghost"
                                            onClick={() => setStep(2)}
                                            className="text-muted-foreground hover:text-primary font-bold uppercase tracking-widest text-xs"
                                        >
                                            ← Previous
                                        </Button>
                                        <Button
                                            size="lg"
                                            onClick={() => selectedDate && selectedTime && setStep(4)}
                                            disabled={!selectedDate || !selectedTime}
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-[0.2em] uppercase text-xs font-black px-12 h-16 shadow-2xl disabled:opacity-50"
                                        >
                                            Continue
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Confirmation Form & Advance Payment */}
                            {step === 4 && (
                                <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <h3 className="font-display text-3xl font-bold mb-8 text-center">Secure Your Appointment</h3>

                                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                                        <div className="text-center md:text-left border-r border-primary/10 last:border-none px-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">Service</span>
                                            <span className="text-primary font-display font-bold text-base">{selectedService}</span>
                                        </div>
                                        <div className="text-center md:text-left border-r border-primary/10 last:border-none px-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">Stylist</span>
                                            <span className="text-primary font-display font-bold text-base">{selectedStylist?.name}</span>
                                        </div>
                                        <div className="text-center md:text-left border-r border-primary/10 last:border-none px-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">Schedule</span>
                                            <span className="text-primary font-display font-bold text-base">{selectedDate} / {selectedTime}</span>
                                        </div>
                                        <div className="text-center md:text-left last:border-none px-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">Security Deposit</span>
                                            <span className="text-gold-gradient font-display font-bold text-xl">{depositAmount}</span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <Input
                                            required
                                            placeholder="Your Full Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-background border-border h-12 rounded-none px-6 font-medium"
                                        />
                                        <Input
                                            required
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="bg-background border-border h-12 rounded-none px-6 font-medium"
                                        />
                                    </div>
                                    <Input
                                        placeholder="Email Address (Optional)"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-background border-border h-12 rounded-none px-6 font-medium mb-6"
                                    />
                                    <Textarea
                                        placeholder="Any special requests or details..."
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="bg-background border-border rounded-none p-6 font-medium mb-8 min-h-[100px]"
                                    />

                                    {/* Payment Section Note */}
                                    <div className="bg-secondary/50 rounded-2xl p-6 mb-10 border border-border flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <Star className="w-5 h-5 text-primary" />
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            We require a small <span className="text-primary font-bold">Advance Deposit of {depositAmount}</span> to confirm your slot and avoid no-shows. The remaining amount can be paid at the salon after your service.
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={() => setStep(3)}
                                            className="text-muted-foreground hover:text-primary font-bold uppercase tracking-widest text-xs"
                                        >
                                            ← Back
                                        </Button>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="bg-linear-to-br from-primary to-gold-dark text-primary-foreground hover:opacity-90 rounded-none tracking-[0.2em] uppercase text-xs font-bold px-12 h-14 shadow-2xl"
                                        >
                                            Pay & Confirm
                                            <Check className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
