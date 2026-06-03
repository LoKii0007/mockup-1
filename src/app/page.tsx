import { BentoSection } from "@/components/landing/BentoSection";
import { GlassCtaSection } from "@/components/landing/GlassCtaSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ProjectGallery } from "@/components/landing/ProjectGallery";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans text-white">
      <HeroSection />
      <BentoSection />
      <ServicesSection />
      <ProjectGallery />
      <PortfolioSection />
      <SiteFooter />
    </main>
  );
}
