"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const [mounted, setMounted] = React.useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="p-2 text-primary rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-all duration-300 cursor-pointer"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
