"use client";

import HeroSection from "@/components/sections/HeroSection";
import "./page.css";
import ServicesSection from "@/components/sections/ServicesSection";
import Banner from "@/components/Banner";
import About from "@/components/sections/About";
import Steps from "@/components/sections/Steps";
import TimelineSection from "@/components/sections/TimelineSection";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <TimelineSection />
      <About />
      <ServicesSection />
      <Steps />
      <Banner />
    </main>
  );
}
