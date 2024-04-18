"use client";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Image from "next/image";
import { LuArrowDown } from "react-icons/lu";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { Title, Text, Button } from "@/ui";

export const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="flex max-w-screen-xl h-[720px] mx-auto flex-row gap-16 snap-top">
      <div className="flex flex-col max-w-3xl gap-16 justify-center items-center mx-auto">
        <Image src="images/bismuth-logo.svg" width={56} height={56} alt="" />
        <Title className="text-center text-2xl sm:text-3xl text-primary">
          {t("HERO_SECTION.TITLE")}
        </Title>
        <Text className="text-center text-lg sm:text-xl text-textColor">
          <Trans
            i18nKey="home:HERO_SECTION.SUBTITLE"
            components={{
              strong: (
                <strong className="text-textColor underline decoration-dashed decoration-1 underline-offset-4" />
              ),
            }}
          />
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <PrimaryActionButton />
          <a href="#about" title={t("HERO_SECTION.READ_HOW_IT_WORKS")}>
            <Button variant="ghost">
              {t("HERO_SECTION.ABOUT_THE_PROJECT")} <LuArrowDown />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};
