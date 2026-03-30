import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import Transformations from "@/components/Transformations";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoyaltySystem from "@/components/LoyaltySystem";
import SmartFeatures from "@/components/SmartFeatures";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Transformations />
      <Pricing />
      <LoyaltySystem />
      <SmartFeatures />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}
