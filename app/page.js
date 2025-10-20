"use client";

import HeroSection from "@/components/sections/HeroSection";
import "./page.css";
import ServicesSection from "@/components/sections/ServicesSection";
import Banner from "@/components/Banner";
import About from "@/components/sections/About";
import Steps from "@/components/sections/Steps";
import TimelineSection from "@/components/sections/TimelineSection";
import CallUsSection from "@/components/sections/CallUsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSction from "@/components/sections/ContactSction";
import Reviews from "@/components/sections/ReviewsSection";
import Preloader from "@/components/animations/PreLoader";
import DevisSection from "@/components/sections/DevisSection";

export default function Home() {
  return (
    <main className="main">
      <Preloader>
        <HeroSection />
        <TimelineSection />
        <About />
        <ServicesSection />
        <Steps />
        <ProjectsSection />
        <Reviews />
        <CallUsSection />
        <DevisSection />
        <ContactSction />
        <Banner />
      </Preloader>
    </main>
  );
}
