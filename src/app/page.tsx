import { HeroSection } from "../components/HeroSection/HeroSection";
import { OurToolsSection } from "../components/OurToolsSection/OurToolsSection";
import { BismuthSection } from "../components/BismuthSection/BismuthSection";
import { RiskNoticeSection } from "../components/RiskNoticeSection/RiskNoticeSection";
import { FooterSection } from "../components/FooterSection/FooterSection";
import { LinksSection } from "../components/LinksSection/LinksSection";
import { AboutUsSection } from "../components/AboutUsSection/AboutUsSection";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-fixed bg-left-top bg-no-repeat bg-bg-element snap-y snap-mandatory scroll-smooth">
      <HeroSection />
      <AboutUsSection />
      <OurToolsSection />
      <BismuthSection />
      <LinksSection />
      <RiskNoticeSection />
      <FooterSection />
    </main>
  );
}
