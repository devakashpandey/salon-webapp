"use client";

export default function Marquee() {
    const items = [
        "Hair Styling", "Bridal Makeup", "Nail Art", "Facials",
        "Spa & Wellness", "Hair Coloring", "Beard Grooming", "Waxing",
        "Hair Spa", "Manicure & Pedicure",
    ];

    return (
        <section className="py-6 bg-card border-y border-border overflow-hidden">
            <div className="flex">
                <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
                    {[...items, ...items].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-muted-foreground">
                                {item}
                            </span>
                            <span className="text-primary">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
