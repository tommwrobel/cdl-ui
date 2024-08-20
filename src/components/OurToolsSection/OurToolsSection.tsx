"use client";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { LuExternalLink } from "react-icons/lu";
import { Section } from "../Section/Section";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { OurToolsSectionItem } from "./OurToolsSectionItem";
import { OurToolsDivider } from "./OurToolsDivider";
import { useTranslation } from "@/hooks/useTranslation";
import { Title } from "@/ui";

export const OurToolsSection = () => {
  const { t } = useTranslation("home");

  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Section
      id="about"
      className="flex gap-16 flex-col items-center"
      animate={false}
    >
      <SectionTitle>Our Tools</SectionTitle>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-8 md:gap-12 items-start"
      >
        <OurToolsSectionItem
          title="CryptoRoiWhales"
          icon={
            <img
              src="/images/crypto-roi-whales-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description="Every single day, we embark on a journey through the vast expanse of the Ethereum blockchain, analyzing hundreds of millions of addresses and meticulously examining each of the hundreds of billions of transactions that ripple through its network."
          links={[
            { label: "More info", href: "#" },
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title="CryptoRoiSharks"
          description="Just like with the 'CryptoRoiWhales' tool, we analyze billions of transactions and millions of addresses on the ethereum blockchain every day (other blockchains coming soon) ."
          links={[
            { label: "More info", onClick: () => console.log("clicked") },
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title={"BigFishGoNiche"}
          description="In this project, we show how the 'Whales' and 'Sharks' from our two projects described above enter niche projects with low liquidity on specific DEX pools. Genius, right?"
          links={[
            { label: "More info", href: "#" },
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title={"CryptoWakeUps"}
          description="In this project, we monitor all tokens on Uniswap and Sushiswap. If a token had low trading volume in the last 30 days and suddenly sees a large transaction, we'll notify you immediately. It might be just a wake-up call or a full resurrection."
          links={[
            { label: "More info", href: "#" },
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />
      </div>
      <OurToolsDivider />
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto gap-8 md:gap-12 items-start"
      >
        <OurToolsSectionItem
          title={"Uniswap Price Amplitudes"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap Top Gainers/Losers"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Bianace MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Link", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[{ label: "Details", href: "#" }]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[{ label: "Details", href: "#" }]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[{ label: "Details", href: "#" }]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[{ label: "Details", href: "#" }]}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[{ label: "Details", href: "#" }]}
          free
        />
      </div>
    </Section>
  );
};
