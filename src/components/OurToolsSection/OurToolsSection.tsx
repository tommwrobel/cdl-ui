"use client";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { Section } from "../Section/Section";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Modal } from "../../ui";
import { TelegramIcon } from "../icons/TelegramIcon";
import { OurToolsSectionItem } from "./OurToolsSectionItem";
import { OurToolsDivider } from "./OurToolsDivider";
import { OurToolsDetailsModal } from "./OurToolsDetailsModal";
import { useTranslation } from "@/hooks/useTranslation";
import { DiscordIcon } from "../icons/DiscordIcon";
import { MoreToolsItem } from "./MoreToolsItem";

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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Section
      id="about"
      className="flex flex-col items-center gap-16"
      animate={false}
    >
      <SectionTitle animate>Our Tools</SectionTitle>
      <div
        ref={ref}
        className="items-start mx-auto grid grid-cols-1 md:grid-cols-2 max-w-screen-xl gap-8 md:gap-12"
      >
        <OurToolsSectionItem
          title="CryptoRoiWhales"
          icon={
            <img
              src="/images/crypto-roi-whales-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description="Each day, we dive into the Ethereum blockchain (Other Blockchains Coming Soon), examining millions of addresses and billions of transactions. We identify whales holding over $1 million in ETH and tokens, showcasing their transactions in real time."
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title="CryptoRoiSharks"
          icon={
            <img
              src="/images/crypto-roi-sharks-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description='Like with "CryptoRoiWhales", we analyze billions of Ethereum transactions daily, identifying top-performing addresses. We showcase all transactions of addresses that have achieved over 1000% profit in their entire transaction history.'
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title="BigFishGoNiche"
          icon={
            <img
              src="/images/big-fish-go-niche-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description="In this project, we show how the 'Whales' and 'Sharks' from our two projects described above enter niche projects with low liquidity on specific DEX pools. Genius, right?"
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title="CryptoWakeUps"
          icon={
            <img
              src="/images/crypto-wake-ups-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description="In this project, we monitor all tokens on Uniswap and Sushiswap. If a token had low trading volume in the last 30 days and suddenly sees a large transaction, we'll notify you immediately. It might be just a wake-up call or a full resurrection."
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />
      </div>
      <OurToolsDivider />
      <div
        ref={ref}
        className="items-start mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl gap-8 md:gap-12"
      >
        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap Price Amplitudes"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap Top Gainers/Losers"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Bianace MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap MACD"}
          description={t("ABOUT_SECTION.TEXT_1_2")}
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          extendedDescription="TBD"
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <MoreToolsItem />
      </div>
    </Section>
  );
};
