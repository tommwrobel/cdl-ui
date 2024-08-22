import { HeroSection } from "../components/HeroSection/HeroSection";
import { OurToolsSection } from "../components/OurToolsSection/OurToolsSection";
import { BismuthSection } from "../components/BismuthSection/BismuthSection";
import { RiskNoticeSection } from "../components/RiskNoticeSection/RiskNoticeSection";
import { FooterSection } from "../components/FooterSection/FooterSection";
import { LinksSection } from "../components/LinksSection/LinksSection";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-fixed bg-left-top bg-no-repeat bg-bg-element snap-y snap-mandatory scroll-smooth">
      <HeroSection />
      <OurToolsSection />
      <BismuthSection />
      <LinksSection />
      <RiskNoticeSection />
      <FooterSection />
    </main>
  );
}
