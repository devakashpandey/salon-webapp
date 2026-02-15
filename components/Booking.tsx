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
                        Booking <span className="text-primary">Confirmed!</span>
                    </h2>
                    <p className="text-muted-foreground text-xl mb-12 font-medium">
                        Thank you for choosing Luxe Salon & Spa. We&apos;ve sent a confirmation
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
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none tracking-[0.2em] uppercase text-xs font-black px-12 h-16"
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
                <div className="text-center mb-10">
                    <Badge variant="outline" className="mb-4 rounded-full px-5 py-2 border-primary/30 bg-primary/10 text-primary text-xs tracking-widest uppercase font-black">
                        Save Your Spot
                    </Badge>
                    <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-6 text-center">
                        Book <span className="text-primary">Your Squad</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl font-bold">
                        Pick your favorite service, grab a stylist, and get ready to shine!
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-3xl mx-auto flex items-center justify-center gap-4 md:gap-8 mb-12">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="flex items-center gap-4 md:gap-8">
                            <div
                                className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-lg md:text-xl font-black transition-all duration-500 shadow-xl ${step >= num
                                    ? "bg-primary text-primary-foreground scale-110 rotate-3"
                                    : "bg-secondary text-muted-foreground border border-primary/5"
                                    }`}
                            >
                                {step > num ? <Check className="w-6 h-6 md:w-8 md:h-8" /> : num}
                            </div>
                            {num < 4 && (
                                <div
                                    className={`w-8 md:w-16 h-2 rounded-full transition-all duration-500 ${step > num ? "bg-primary" : "bg-muted"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form Wizard */}
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-white/80 dark:bg-card/60 backdrop-blur-xl border-primary/5 rounded-[2.5rem] p-6 md:p-12 shadow-2xl">
                        <CardContent className="p-0">
                            {/* Step 1: Select Service */}
                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <h3 className="font-display text-3xl font-black mb-10 text-center">Which Magic?</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                        {serviceOptions.map((svc) => {
                                            const Icon = svc.icon;
                                            return (
                                                <button
                                                    key={svc.label}
                                                    onClick={() => setSelectedService(svc.label)}
                                                    className={`p-6 rounded-3xl border text-center transition-all duration-500 cursor-pointer group ${selectedService === svc.label
                                                        ? "border-primary bg-primary/10 ring-2 ring-primary/20 scale-105"
                                                        : "border-primary/5 bg-secondary/30 hover:border-primary/30 hover:-translate-y-1"
                                                        }`}
                                                >
                                                    <div
                                                        className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-500 shadow-lg ${selectedService === svc.label
                                                            ? "bg-primary text-primary-foreground rotate-6"
                                                            : "bg-white dark:bg-card text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6"
                                                            }`}
                                                    >
                                                        <Icon className="w-8 h-8" />
                                                    </div>
                                                    <span className="text-sm font-black uppercase tracking-wider">{svc.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="flex justify-center mt-12">
                                        <Button
                                            size="lg"
                                            onClick={() => selectedService && setStep(2)}
                                            disabled={!selectedService}
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl tracking-[0.2em] uppercase text-xs font-black px-12 h-16 shadow-[0_10px_30px_rgba(0,201,167,0.4)] disabled:opacity-50"
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
                                    <h3 className="font-display text-3xl font-black mb-10 text-center">Meet The Squad</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {stylists.map((st) => (
                                            <button
                                                key={st.id}
                                                onClick={() => setSelectedStylist(st)}
                                                className={`flex items-center gap-6 p-6 rounded-3xl border text-left transition-all duration-500 cursor-pointer group ${selectedStylist?.id === st.id
                                                    ? "border-primary bg-primary/10 ring-2 ring-primary/20 scale-105"
                                                    : "border-primary/5 bg-secondary/30 hover:border-primary/20 hover:-translate-y-1"
                                                    }`}
                                            >
                                                <div className="relative w-24 h-24 rounded-3xl overflow-hidden shrink-0 border-4 border-white dark:border-white/10 shadow-lg">
                                                    <img
                                                        src={st.image}
                                                        alt={st.name}
                                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black mb-1">{st.name}</h4>
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-black text-[10px] tracking-widest uppercase mb-2">{st.role}</Badge>
                                                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{st.specialty}</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-12">
                                        <Button
                                            variant="ghost"
                                            onClick={() => setStep(1)}
                                            className="text-muted-foreground hover:text-primary font-black uppercase tracking-widest text-xs h-16 px-8 rounded-2xl"
                                        >
                                            ← Back
                                        </Button>
                                        <Button
                                            size="lg"
                                            onClick={() => selectedStylist && setStep(3)}
                                            disabled={!selectedStylist}
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl tracking-[0.2em] uppercase text-xs font-black px-12 h-16 shadow-[0_10px_30px_rgba(0,201,167,0.4)] disabled:opacity-50"
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
                                    <h3 className="font-display text-3xl font-black mb-10 text-center">When's The Party?</h3>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <label className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary">
                                                <Calendar className="w-5 h-5" />
                                                1. Pick A Date
                                            </label>
                                            <Input
                                                type="date"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                min={new Date().toISOString().split("T")[0]}
                                                className="bg-secondary/30 border-primary/10 h-16 rounded-2xl px-6 font-black text-primary focus:ring-primary"
                                            />
                                        </div>

                                        <div className="space-y-6">
                                            <label className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary">
                                                <Clock className="w-5 h-5" />
                                                2. Pick A Slot
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {timeSlots.map((time) => (
                                                    <Button
                                                        key={time}
                                                        variant={selectedTime === time ? "default" : "outline"}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`h-12 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 ${selectedTime === time
                                                            ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                                            : "bg-white dark:bg-card border-primary/10 text-muted-foreground hover:text-primary hover:border-primary/40"
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
                                            className="text-muted-foreground hover:text-primary font-black uppercase tracking-widest text-xs h-16 px-8 rounded-2xl"
                                        >
                                            ← Back
                                        </Button>
                                        <Button
                                            size="lg"
                                            onClick={() => selectedDate && selectedTime && setStep(4)}
                                            disabled={!selectedDate || !selectedTime}
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl tracking-[0.2em] uppercase text-xs font-black px-12 h-16 shadow-[0_10px_30px_rgba(0,201,167,0.4)] disabled:opacity-50"
                                        >
                                            Continue
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Confirmation Form & Advance Payment */}
                            {step === 4 && (
                                <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <h3 className="font-display text-3xl font-black mb-8 text-center">Secure Your Spot!</h3>

                                    <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 mb-10 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-inner">
                                        <div className="text-center md:text-left border-r border-primary/10 last:border-none px-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Service</span>
                                            <span className="text-primary font-black text-sm block">{selectedService}</span>
                                        </div>
                                        <div className="text-center md:text-left border-r border-primary/10 last:border-none px-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Stylist</span>
                                            <span className="text-primary font-black text-sm block">{selectedStylist?.name}</span>
                                        </div>
                                        <div className="text-center md:text-left border-r border-primary/10 last:border-none px-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Schedule</span>
                                            <span className="text-primary font-black text-sm block">{selectedTime}</span>
                                        </div>
                                        <div className="text-center md:text-left last:border-none px-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">Deposit</span>
                                            <span className="text-primary font-black text-2xl block">{depositAmount}</span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <Input
                                            required
                                            placeholder="What's your name?"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-secondary/30 border-primary/10 h-16 rounded-2xl px-6 font-black"
                                        />
                                        <Input
                                            required
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="bg-secondary/30 border-primary/10 h-16 rounded-2xl px-6 font-black"
                                        />
                                    </div>
                                    <Input
                                        placeholder="Email Address (Optional)"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-secondary/30 border-primary/10 h-16 rounded-2xl px-6 font-black mb-6"
                                    />
                                    <Textarea
                                        placeholder="Any special requests? (Don't be shy!)"
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="bg-secondary/30 border-primary/10 rounded-2xl p-6 font-black mb-8 min-h-[100px]"
                                    />

                                    {/* Payment Section Note */}
                                    <div className="bg-accent/10 rounded-2xl p-6 mb-10 border border-accent/20 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-lg">
                                            <Star className="w-5 h-5 text-accent-foreground fill-accent-foreground" />
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                                            Heads up! We need a small <span className="text-primary font-black">Deposit of {depositAmount}</span> via WhatsApp/UPI to confirm your slot. The rest can be paid after your glow-up!
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={() => setStep(3)}
                                            className="text-muted-foreground hover:text-primary font-black uppercase tracking-widest text-xs h-16 px-8 rounded-2xl"
                                        >
                                            ← Back
                                        </Button>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl tracking-[0.2em] uppercase text-xs font-black px-12 h-16 shadow-[0_10px_30px_rgba(0,201,167,0.4)]"
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
