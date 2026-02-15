import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxe Salon & Spa | Premium Unisex Salon",
  description:
    "Experience luxury grooming & beauty services at Luxe Salon & Spa. Expert hair stylists, skincare specialists, bridal makeup, nails, spa treatments & more. Book your appointment today!",
  keywords:
    "unisex salon, hair salon, beauty salon, bridal makeup, nail art, spa, facial, haircut, hair coloring, beard grooming, waxing, skincare",
  openGraph: {
    title: "Luxe Salon & Spa | Premium Unisex Salon",
    description:
      "Where Beauty Meets Luxury. Premium hair, skin, nail & bridal services for men and women.",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
