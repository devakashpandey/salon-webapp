"use client";

export default function Brands() {
    const brands = [
        "L'ORÉAL", "SCHWARZKOPF", "KÉRASTASE", "OPI",
        "MATRIX", "WELLA", "LAKME", "TONI&GUY",
    ];

    return (
        <section className="py-20 border-y border-border/50 bg-background/50">
            <div className="container">
                <p className="text-center text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-12 font-black">
                    Premium Brands We Trust
                </p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 items-center">
                    {brands.map((brand) => (
                        <span
                            key={brand}
                            className="text-2xl md:text-3xl font-display font-black text-foreground/20 hover:text-primary transition-all duration-500 cursor-default tracking-widest hover:scale-110"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
