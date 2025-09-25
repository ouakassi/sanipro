import HeroSection from "@/components/sections/HeroSection";
import "./page.css";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
