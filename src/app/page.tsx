import { HeroSection } from "../components/HeroSection/HeroSection";
import { OurToolsSection } from "../components/OurToolsSection/OurToolsSection";
import { NumbersSection } from "../components/NumbersSection/NumbersSection";
import { CategoriesSection } from "../components/CategoriesSection/CategoriesSection";
import { RiskNoticeSection } from "../components/RiskNoticeSection/RiskNoticeSection";
import { FooterSection } from "../components/FooterSection/FooterSection";
import { InformationSection } from "../components/InformationSection/InformationSection";
import { OurCoinSection } from "../components/OurCoinSection/OurCoinSection";
import { LinksSection } from "../components/LinksSection/LinksSection";

export default function Home() {
  return (
    <main className="bg-bg-element bg-no-repeat bg-left-top bg-fixed snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <HeroSection />
      <OurToolsSection />
      <NumbersSection />
      <CategoriesSection />
      <OurCoinSection />
      <InformationSection />
      <LinksSection />
      <RiskNoticeSection />
      <FooterSection />
    </main>
  );
}
