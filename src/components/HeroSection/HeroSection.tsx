"use client";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { Title, Text, Button } from "@/ui";

export const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="flex max-w-screen-xl h-[600px] mx-auto flex-row gap-16 snap-top">
      <div className="order-1 md:order-0 flex flex-col md:basis-1/2 gap-12 justify-center items-center md:items-start">
        <div className="border border-primary-800 px-3 py-1 rounded-full backdrop-blur-xs">
          <Text size="xs" brightness="dark" className="text-center">
            <Trans
              i18nKey="home:HERO_SECTION.INSIGHTS"
              components={{ span: <span className="text-textColor" /> }}
            />
          </Text>
        </div>
        <Title className="text-center text-2xl sm:text-3xl md:text-left">
          {t("HERO_SECTION.TITLE_1")}
          <br />
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
          <Image
            src="/images/head.png"
            width={96}
            height={96}
            alt=""
            className="inline mb-1 w-8 h-8 sm:w-10 sm:h-10 animate-wiggle rounded-full border-2 border-secondary mr-2"
          />{t("HERO_SECTION.TITLE_2")}
          </span>
          !
        </Title>
        <Text className="text-center  text-lg sm:text-xl md:text-left text-textColor-dark">
          <Trans
            i18nKey="home:HERO_SECTION.SUBTITLE"
            components={{ strong: <strong className="text-textColor" /> }}
          />
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
          <a
            href="https://discord.gg/rYmBNuF6XY"
            target="_blank"
            title={t("JOIN_OUR_DISCORD")}
          >
            <Button>
              <DiscordIcon className="animate-wiggle" width={20} height={20} />
              {t("JOIN_OUR_DISCORD")}
            </Button>
          </a>
          <a href="#about" title={t("HERO_SECTION.READ_HOW_IT_WORKS")}>
            <Button variant="ghost">
              {t("HERO_SECTION.ABOUT_THE_PROJECT")} <LuArrowRight />
            </Button>
          </a>
        </div>
      </div>

      <div className="hidden md:show order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 justify-center items-center">
        <div className="p-8 relative border-2 border-secondary w-full h-full rounded-[48px] backdrop-blur-xs">
          <div className="bg-hero bg-cover bg-no-repeat rounded-3xl w-full h-full animate-bgWiggle"></div>
          <div className="absolute w-full h-full overflow-hidden rounded-[48px] left-0 top-0">
            <div className="absolute w-96 h-96 -bottom-36 -right-36 bg-primary rounded-full blur-xl opacity-15 duration-500" />
            <div className="absolute w-72 h-72 -top-36 -left-36 bg-secondary rounded-full blur-xl opacity-15 duration-500" />
          </div>
          <div className="absolute bg-gradient-to-tr from-primary to-secondary w-16 h-4 rounded-2xl -bottom-2 right-24"></div>
          <div className="absolute bg-gradient-to-tr from-primary to-secondary w-24 h-4 rounded-2xl -top-2 left-24"></div>
        </div>
      </div>
    </Section>
  );
};
