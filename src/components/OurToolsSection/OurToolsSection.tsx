"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { OurToolsSectionItem } from "./OurToolsSectionItem";
import { useTranslation } from "@/hooks/useTranslation";
import { Title } from "@/ui";
import { OurToolsDivider } from "./OurToolsDivider";

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
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-screen-xl mx-auto gap-8 md:gap-16 items-start"
      >
        <OurToolsSectionItem
          title="Ethereum Whales"
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Link", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />

        <OurToolsSectionItem
          title="Binance Price Jumps"
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />

        <OurToolsSectionItem
          title={"Uniswap Price Jumps"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />

        <OurToolsSectionItem
          title={"Binance Price Amplitudes"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            { label: "Details", href: "#" },
            { label: "Twitter", href: "#" },
          ]}
          free
        />
      </div>
      <OurToolsDivider />
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto gap-8 md:gap-16 items-start"
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
